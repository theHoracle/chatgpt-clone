'use client'
import { PaperAirplaneIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useSession } from "next-auth/react"
import { FormEvent, useState } from "react"
import { db } from "../../firebase"
import { toast } from "react-hot-toast"

type Props = {
  chatId: string
}

const ChatInput = ({chatId}: Props) => {
  const {data: session} = useSession()
  const [prompt, setPrompt] = useState('')

  // TODO: useSWR to get model
  const model = 'text-davinci-003'

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // trim off white spaces
    const input = prompt.trim()
    // clear off the input
    setPrompt('')

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image || `https://ui-avatars.com/api/?name=${session?.user?.name}`
      }
    }

    await addDoc(collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'), 
      message)

    // Toast Notfication
    const notification  = toast.loading('ChatGPT is thinking...')
    // Fetch form self api
    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      })
    }).then(() => {
      // Successful toast
      toast.success('ChatGPT has responded', {
        id: notification,
      })
    })
}



  return <div className="bg-gray-700/50 text-gray-400   items-center text-sm">
    <form 
    onSubmit={sendMessage} 
    className="p-5 space-x-5 flex">
    <input type="text" 
    onChange={(e) => {setPrompt(e.target.value)}}
    value={prompt}
    className="focus:outline-none rounded-lg bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300 p-0.5"
    disabled={!session}
     placeholder="Type your message here..." />
    <button
    disabled={!session || !prompt}
    className={`${  
      !!prompt ? "bg-[#11a37f]" : "" } text-white font-bold px-4 py-2 rounded disabled:text-gray-300`}
    type="submit">
      <PaperAirplaneIcon className="h-5 w-5 -rotate-45 items-end" />
    </button>
  </form>
  <div>
    {/* Modal Selection */}
  </div>
  </div>
}

export default ChatInput
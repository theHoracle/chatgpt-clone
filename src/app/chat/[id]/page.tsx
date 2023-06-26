import Chat from "@/components/Chat"
import ChatInput from "@/components/ChatInput"
import { type } from "os"

type Props = {
  params: {
    id: string
  }
}

const ChatPage = ({params: { id }}: Props) => {
  

  return <div>
    {/* chat bubble */}
    <div className="flex flex-col h-screen overflow-hidden">
    <Chat chatId={id}  />
    
    {/* chat input  */}
      <ChatInput chatId={id}/>
    </div>
  </div>
}

export default ChatPage
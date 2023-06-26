'use client'

import React from "react"
import NewChat from "./NewChat"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import Image from "next/image"
import { useCollection } from "react-firebase-hooks/firestore"
import { collection } from "@firebase/firestore"
import { db } from "../../firebase"
import ChatRow from "./ChatRow"
import { query, orderBy } from "firebase/firestore"



const Sidebar = () => {
  const { data: session } = useSession()
  const [chats, loading, error] = useCollection(
    session && 
    query(
      collection(db, 'users', session?.user?.email!, 'chats'), 
      orderBy('createdAt', 'desc'))
  )
  const user = session?.user
  return <div className="p-2 flex flex-col h-screen">
    <div className="flex-1">
      <div className="w-full">
        <NewChat />
        <div>
        {/* Modal selections */}
        </div>
         {/* Map through the chat rows */}
         {chats?.docs.map((chat) => (
     <ChatRow key={chat.id} id={chat.id} />
          ))}
</div>
    </div>
    {session && (
      <div onClick={() => {signOut()}}>
        <Image  src={user?.image || ''} height={50} width={50} alt={user?.name || 'user image'} 
        className="rounded-full mb-2 cursor-pointer mx-auto hover:opacity-50" />
      </div>
    )}
  </div>
}

export default Sidebar
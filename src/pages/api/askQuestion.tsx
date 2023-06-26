import query from "@/lib/queryApi";
import type { NextApiRequest, NextApiResponse } from "next";
import admin from 'firebase-admin'
import adminDb from "../../../firebaseAdmin";

type Data = {
  answer: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
 const {prompt, chatId, model, session} = req.body
 
 if(!prompt) {
   res.status(400).json({answer: "Please provide a prompt!"})
 }
 if(!chatId) {
   res.status(400).json({answer: "Please provide a valid chat id!"})
 }

 // chatGPT query
 const response = await query(prompt, chatId, model)

 const message: Message = {
  text: response || 'ChatGPT was unable to answer your question',
  createdAt: admin.firestore.Timestamp.now(),
  user: {
    _id: 'chatGPT',
    name: 'ChatGPT',
    avatar: 'https://avatars.githubusercontent.com/u/6582884?v=4'
  }
 };

   await adminDb
    .collection('users')
    .doc(session.user.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages').add(message)

  res.status(200).json({answer: message.text})

}
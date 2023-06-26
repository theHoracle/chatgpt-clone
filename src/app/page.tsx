import Image from 'next/image'
import { BoltIcon, ExclamationTriangleIcon, SunIcon } from "@heroicons/react/24/outline"
import ChatInput from '@/components/ChatInput'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-screen px-3 text-white'>
      <h1 className='text-5xl font-bold mb-20'>ChatGPT</h1>
      <div className='flex space-x-2 text-center'>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <SunIcon className='h-8 w-8' />
           <h2>Examples</h2>
          </div>
          <div className='space-y-2'>
          <p className='p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>&quot;Explain something to me&quot;</p>
          <p className='p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>&quot;What is the difference between a cat and a dog&quot;</p>
          <p className='p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>&quot;What is the size of the sun&quot;</p>
          </div>
        </div>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <BoltIcon className='h-8 w-8' />
           <h2>Capabilities</h2>
          </div>
          <div className='space-y-2'>
          <p className='p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>Messages are saved on firestore database</p>
          <p className='p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>Authentication by firebase auth and Next auth</p>
          <p className='p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>Change the ChatGPT model to use </p></div>
        </div>
        <div>
          <div className='flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className='h-8 w-8' />
           <h2>Limitations</h2>
          </div>
          <div className='space-y-2'>
          <p className='p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>May ocassionally generate wrong results</p>
          <p className='p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>Woke</p>
          <p className='p-4 bg-gray-700/50 rounded-lg max-w-[300px]'>Limited knowledge of world and events after 2021</p>
          </div>
        </div>
      </div>
      {/* <ChatInput /> */}
    </main>
  )
}

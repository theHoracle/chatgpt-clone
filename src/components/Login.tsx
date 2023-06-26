'use client'

import { FC } from 'react'
import Image from "next/image"
import { signIn } from 'next-auth/react'

const Login = ({}) => {
  return <div className='bg-[#11a37f] h-screen flex flex-col items-center justify-center'> 
    <Image
    src='https://links.papareact.com/2i6'
    width={300}
    height={300}
    alt='ChatGPT Logo'
    />

    <button onClick={() => {signIn('google')}} className='text-white font-bold text-3xl animate-pulse'>Sign in to use ChatGPT</button>
  </div>
}

export default Login
'use client'

import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {

  const { data: session } = useSession()

  return (
    <div className='min-h-[70vh] flex-center px-5'>
        <div className='flex flex-col gap-5 text-center max-w-lg'>
            <img src="/images/confirmed.png" className='w-[300px] h-auto mx-auto'/>
            <p className='text-xl'>Hey {session?.user?.name}!</p>
            <h1 className='font-bold text-4xl'>Your Order is Confirmed!</h1>
            <p className='text-stone-400 md:max-w-md'>We'll send you a shipping confirmation email as soon as your order ships.</p>
            <button className='mx-auto w-full fill-btn'>Check Status</button>
        </div>
    </div>
  )
}

export default page
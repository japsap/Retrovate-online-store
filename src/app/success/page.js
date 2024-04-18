'use client'

import React, { useEffect } from 'react'

import { Button } from '@components/ui/button'
import { isAuthFunc } from '@lib/utils'

const page = () => {

  useEffect(() => {
    isAuthFunc()
  }, [])

  return (
    <div className='min-h-[70vh] flex-center px-5'>
        <div className='flex flex-col gap-5 text-center max-w-lg'>
            <p className='text-xl'>Hey!</p>
            <h1 className='font-bold text-4xl'>Your Order is Confirmed!</h1>
            <p className='text-stone-400 md:max-w-md'>We'll send you a shipping confirmation email as soon as your order ships.</p>
            <Button className='h-[50px] mx-auto w-full fill-btn'>Check Status</Button>
        </div>
    </div>
  )
}

export default page
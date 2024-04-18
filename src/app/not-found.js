import React from 'react'

import { Button } from '@components/ui/button'


const NotFound = () => {
  return (
    <div className='min-h-[70vh] flex-center px-5'>
        <div className='flex flex-col gap-5 text-center max-w-lg'>
            <img src="/images/white-mode-chair.png" className='dark:hidden w-[300px] h-auto mx-auto'/>
            <img src="/images/darc-mode-chair.png" className='hidden dark:flex w-[300px] h-auto mx-auto'/>
            <h1 className='font-bold text-4xl md:text-5xl '>Oops! Something Went Wrong...</h1>
            <p className='text-stone-400'>We apologize for the inconvenience, but it seems that a glitch in the matrix has disrupted the normal flow of things.</p>
        </div>
    </div>
  )
}

export default NotFound
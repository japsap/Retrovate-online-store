import { MoveRight } from 'lucide-react'
import React from 'react'

const LookMore = () => {
  return (
    <div className='text-underline'>
       <div className='flex items-center gap-3 cursor-pointer'>
        <p>Look More</p>
        <MoveRight className='text-stone-400' size={16}/>
    </div>  
    </div>
   
  )
}

export default LookMore
import React from 'react'

const SpinnerComponent = () => {
  return (
    <div className='flex justify-center items-center gap-3'>
         <div class="w-5 h-5 rounded-full animate-spin
          border-2 border-solid border-yellow-500 border-t-transparent"></div>
        <p>Loading...</p>
    </div>
  )
}

export default SpinnerComponent
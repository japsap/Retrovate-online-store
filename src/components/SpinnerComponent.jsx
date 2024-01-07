import React from 'react'

const SpinnerComponent = () => {
  return (
    <div className='flex items-center mt-1 gap-3'>
         <div className="w-5 h-5 rounded-full animate-spin
          border-2 border-solid border-yellow-500 border-t-transparent"></div>
        <p>Loading...</p>
    </div>
  )
}

export default SpinnerComponent
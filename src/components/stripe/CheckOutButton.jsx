import axios from 'axios'
import { useSession } from 'next-auth/react'
import React from 'react'
import { useState } from 'react'

const CheckOutButton = ({ cart }) => {

    const { data: session } = useSession()

    const [ isProcessing, setIsProcessing ] = useState(false)

    const handleCheckOut = () => {
        setIsProcessing(true)

        axios.post('/api/payment',{
            userId: session?.user?.id,
            cart
        })
        .then((res) => {
            if(res.data.url){
                window.location.href = res.data.url
                setIsProcessing(false)
            }
        }).catch((err) => console.log(err.message))

    }

  return (
    <button className="w-full py-3 rounded-lg text-white bg-black border border-black dark:text-black dark:bg-white border-none dark:font-bold" onClick={() => handleCheckOut()} disabled={isProcessing}>
        {isProcessing ? "Processing ... " : "Pay now"}
    </button>
  )
}

export default CheckOutButton
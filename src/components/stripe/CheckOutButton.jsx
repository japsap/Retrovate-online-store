import axios from 'axios'
import { useSession } from 'next-auth/react'
import React, { useContext } from 'react'
import { useState } from 'react'

import { Button } from '@components/ui/button'
import CartContext from '@Context/CartContext'

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
                localStorage.clear("cart")
            }
        }).catch((err) => console.log(err.message))

    }

  return (
    <Button className="h-[50px]" onClick={() => handleCheckOut()} disabled={isProcessing}>
        {isProcessing ? "Processing ... " : "Pay now"}
    </Button>
  )
}

export default CheckOutButton
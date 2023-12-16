'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

import { LoggedNavbar } from '@components/NavbarComponents'

const page = () => {

  const { id } = useParams()

  const [ item, setItem ] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/catalog/${id}`)
      const data = await response.json()
      setItem(data)
    }

    fetchData()
  }, [])

  console.log(item);

  return (
    <div className=''>
      <div className='px-5'>
        <LoggedNavbar bgColor={true}/>
      </div>
    </div>
  )
}

export default page
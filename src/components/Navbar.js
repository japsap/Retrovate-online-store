import React from 'react'
import { Logo } from './fixedComponents'
import { mainPageNavbar } from '@/constants/Data'

import { ShoppingCart }  from 'lucide-react'

const Navbar = () => {
  return (
    <div className='sticky w-full top-0 bg-white z-[9999999999]'>
       <div className='flex-between max-w-7xl mx-auto p-5'>
        <Logo/>

        <ul className='hidden lg:flex items-center gap-3 list-none group'>
          {mainPageNavbar.map((link, id) => (
            <li className='group-hover:text-gray-200' key={id}><a className='ease-out duration-300 hover:text-black' href={link.path}>{link.name}</a></li>
          ))}
        </ul>

        <div className='hidden lg:flex items-center gap-3'>
          <button className='fill-btn'>Register</button>
            <div className='relative'>
              <button className='outline-btn'>
                <ShoppingCart size={18}/>
              </button>
              <span className='absolute -top-2 -right-2 bg-primaryColor rounded-full px-2 text-center text-white'></span>
            </div>
        </div>
    </div>
    </div>
   
  )
}

export default Navbar
import React from 'react'
import Link from 'next/link'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { BiSolidOffer, BiSolidUser } from 'react-icons/bi'
import { BsFillBookFill, BsFillBusFrontFill, BsFillTicketPerforatedFill } from 'react-icons/bs'

import { useUiContext } from '../context/UiContext'

export const Menu = () => {
  const { setShowLoginModal, showLoginModal } = useUiContext()


  return (
    <div className='hidden lg:block'>
      <div className='relative'>
        <div className='w-52 fixed bg-white border h-full z-10'>
          <div onClick={() => setShowLoginModal(true)} className='flex justify-center items-center h-14 border-b '>
            <button  className='w-full h-11  rounded-md flex items-center justify-center cursor-pointer border-gray-300 hover:bg-gray-200'>
              <BiSolidUser className='text-gray-400 ml-2' />
              <p className='text-[14px] font-semibold hidden sm:hidden lg:block  w-full '>Iniciar Sesion</p>
            </button>
          </div>
          <div className='flex justify-center items-center h-14 border-b '>
            <Link href="/viaje" className='w-full h-11  rounded-md flex items-center justify-center cursor-pointer border-gray-300 hover:bg-gray-200'>
              <MdOutlineTravelExplore className='text-gray-400 ml-2' />
              <button className='text-[14px] font-semibold hidden sm:hidden lg:block  w-full '> Arma Tu Viaje</button>
            </Link>
          </div>
          <div className='flex justify-center items-center h-14 border-b '>
            <Link href="/promociones" className='w-full h-11  rounded-md flex items-center justify-center cursor-pointer border-gray-300 hover:bg-gray-200'>
              <BiSolidOffer className='text-gray-400 ml-2' />
              <button className='text-[14px] font-semibold hidden sm:hidden lg:block  w-full '> Promociones</button>
            </Link>
          </div>
          <div className='flex justify-center items-center h-14 border-b '>
            <Link href="/quienes-somos" className='w-full h-11  rounded-md flex items-center justify-center cursor-pointer border-gray-300 hover:bg-gray-200'>
              <BsFillBookFill className='text-gray-400 ml-2' />
              <button className='text-[14px] font-semibold hidden sm:hidden lg:block  w-full '>¿Quienes Somos?</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
import Link from 'next/link'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineUser, AiFillHeart } from 'react-icons/ai'

import { useUiContext } from '@/context/UiContext'
import { AlizeIcon } from './AlizeIcon'
import { Button } from './ui/Button'

export const Header = () => {
  const { setShowLoginModal, showLoginModal } = useUiContext()
  const [isOpen, setIsOpen] = useState(true)

  return (
    <header className='h-[80px]'>
      <div className='fixed bg-white flex flow-column w-full justify-center p-1 h-inherit top-0 z-10 border-b border-gray-300'>
        <div className="px-4 flex flex-1 justify-between">
          <div className="flex flex-auto items-center justify-start">
            <div className='flex text-center items-center'>
              <button className='mr-4 p-2 border-none rounded outline-inherit hover:bg-slate-200'>
                <GiHamburgerMenu />
              </button>
              <Link href='/'>
                <AlizeIcon />
              </Link>
            </div>
          </div>
          <div className="flex flex-auto items-center justify-end">
            <div>
              <button className='p-2 mr-4 border-none rounded outline-inherit hover:bg-slate-200'>
                <AiFillHeart className='text-red-500' size={20} />
              </button>
            </div>
            <div className='hidden lg:block'>
              <Button isLoading={true} variant='default'>
                <div className='flex items-center'>
                  <AiOutlineUser className='mr-2 text-white' size={16} />
                  <span className='text-white'>
                    Iniciar sesión
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
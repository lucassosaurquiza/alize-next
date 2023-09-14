import { Dialog, Transition } from '@headlessui/react'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { BiSolidOffer, BiSolidUser } from 'react-icons/bi'
import { BsFillBookFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineTravelExplore } from 'react-icons/md'

export default function ModalHamburguesa() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="text-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md text-black-400 px-4 py-2 hover:scale-105 transition-transform duration-300 transform"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex items-center justify-center z-50"
          onClose={closeModal}
        >
          <div className="absolute inset-0 bg-black bg-opacity-25" onClick={closeModal} />
          <Transition.Child
            as={Fragment}
            enter="transition-transform ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition-transform ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="w-full max-w-screen-lg h-screen overflow-hidden flex justify-center items-center">
              <Dialog.Panel className="w-full h-full transform bg-white text-left shadow-xl">
                <Dialog.Title
                  as="h3"
                  className="flex justify-between text-lg font-medium leading-6 text-gray-900"
                >
                  <button
                    type="button"
                    className="rounded-md border border-transparent text-sm font-medium text-black p-4"
                    onClick={closeModal}
                  >
                    X
                  </button>
                </Dialog.Title>
                <div className=''>
                  <div className='relative'>
                    <div className='w-full fixed bg-white border h-full z-10'>
                      <div className='flex justify-center items-center h-14 border-b '>
                        <button className='w-full h-11  rounded-md flex items-center justify-center cursor-pointer border-gray-300 hover:bg-gray-200'>
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
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
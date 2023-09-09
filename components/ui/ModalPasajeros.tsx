import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function ModalPasajeros() {
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
          className="rounded-md text-red-400  border border-red-400 px-4 py-2 hover:scale-105 transition-transform duration-300 transform"
        >
          Pasajeros
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                  <div className='bg-gray-200 p-6'>
                    <Dialog.Title
                      as="h3"
                      className="flex justify-between text-lg font-medium leading-6 text-gray-900 mb-3"
                    >
                      Pasajeros
                      <button
                        type="button"
                        className="flex justify-end rounded-md border border-transparent   text-sm font-medium text-red-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        X
                      </button>
                    </Dialog.Title>
                    <div className=''>
                      <p>Todos los pasajeros deben presentar el documento antes de viajar.</p>
                    </div>
                    <div>
                      <img className='h-full w-full' src="/assets/pasajeros.png" alt="" />
                    </div>
                  </div>

                  <div className='flex gap-3 p-6 items-center'>
                    <div className='rounded-full'>
                      <img className='object-cover w-16 p-[2px]' src="/assets/pasajero-1.png" alt="" />
                      <span className=''></span>
                    </div>
                    <div className='w-full'>
                      <p>Lucas sosa</p>
                      <p className='text-gray-300 text-sm'>Documento 40801184</p>
                      <p className='text-gray-300 text-sm'>Asiento 48</p>
                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition >
    </>
  )
}
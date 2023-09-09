import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function ModalPagoExitoso() {
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
          className="bg-red-400 rounded-md text-white  border border-red-400 px-4 py-2 hover:scale-105 transition-transform duration-300 transform"
        >
          Ir a pagar $7.900
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
                enter="transform ease-out duration-300 transition-translate-y"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transform ease-in duration-200 transition-translate-y"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle shadow-xl transition-all">
                  <div className=''>
                    <div className='border-t-8 border-t-green-400 p-5'>
                      <div className='flex justify-end'>
                        <button
                          type="button"
                          className="flex "
                          onClick={closeModal}
                        >
                          X
                        </button>

                      </div>
                      <p className='flex justify-center text-xs mb-5 mt-5'>Su pago fue realizado con exito.</p>
                      <p className='flex justify-center mb-5 mt-5 text-xs'>Recibira en los proximos minutos un correo con los detalles de su pasaje.</p>
                      <p className='flex justify-center mb-5 mt-5 text-xs'>Que disfrutes de tu viaje!! Equipo alize 🚌.</p>
                      <div className='flex justify-center mb-10'>
                        <button onClick={closeModal} type="button" className='bg-green-400 p-2 rounded-lg text-white hover:bg-green-500 transition-colors duration-300 ease-in-out'>Aceptar</button>
                      </div>
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
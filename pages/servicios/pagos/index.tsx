import ModalInformacion from '@/components/ui/ModalInformacion'
import ModalPagoExitoso from '@/components/ui/ModalPagoExitoso'
import ModalPasajeros from '@/components/ui/ModalPasajeros'
import { Disclosure, Transition } from '@headlessui/react'
import Link from 'next/link'
import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const index = () => {
  return (
    <>
      <header className='bg-red-400 p-4'>
        <Link href='/'>
          <p className=' w-full text-white'>alize-viajes-turismo.com</p>
        </Link>
      </header>

      <div className='border container max-w-6xl mx-auto p-4'>
        <h2 className='w-full font-semibold text-lg mb-5'>Resumen de tu viaje</h2>

        <div className='lg:flex gap-5 lg:flex-row-reverse'>
          <div className='w-full'>
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex bg-red-400 text-white justify-around w-full text-sm items-center py-4 rounded-md mb-5 ">
                    <MdOutlineKeyboardArrowDown
                      className={` sm:text-xl md:text-sm transition-transform duration-100 ${open ? 'rotate-180' : ''
                        }`}
                    />
                    <p>Detalles de tu viaje</p>
                    <BsSearch />
                  </Disclosure.Button>

                  <Transition
                    show={open}
                    enter="transition-all duration-300 ease-out"
                    enterFrom="opacity-0 max-h-0 mb-0"
                    enterTo="opacity-100 max-h-[400px] mb-4"
                    leave="transition-all duration-300 ease-out"
                    leaveFrom="opacity-100 max-h-[400px] mb-4"
                    leaveTo="opacity-0 max-h-0 mb-0"
                  >
                    <Disclosure.Panel className="w-full sm:text-xs border-b pb-5 " static>
                      <div>
                        <h2 className="w-auto text-xl font-bold mb-3 lg:items-center">
                          Ida
                        </h2>
                        <div className='flex-col  mb-5'>
                          <div className='flex flex-col mb-5'
                            style={{
                              backgroundImage: "url('/assets/punto.png')",
                              backgroundPosition: '',
                              backgroundSize: '16px',
                              backgroundRepeat: 'no-repeat'
                            }}>
                            <div className='flex gap-2 mb-1'>
                              <span>SALE</span>
                              <span>Lunes 28 ago 2023, 12:00 hs</span>
                            </div>
                            <span className='font-bold'>Corrientes Terminal</span>
                          </div>
                          <div className='flex flex-col'>
                            <div className='flex gap-2 mb-1'>
                              <span>LLEGA</span>
                              <span>Lunes 28 ago 2023, 16:00 hs</span>
                            </div>
                            <span className='font-bold'>Posadas Terminal</span>
                          </div>
                        </div>
                        <div className='flex justify-evenly'>
                          <ModalInformacion />
                          <ModalPasajeros />
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>

            <div className='border p-4 rounded-md w-full mb-5'>
              <p className='text-red-400 mb-3'>Importe de tu compra</p>
              <div className='flex justify-between mb-5'>
                <p className='text-gray-400 text-xs'>Valor de los pasajes</p>
                <p className='text-gray-400 text-xs'>$7,000.00</p>
              </div>
              <div className='flex justify-between mb-5'>
                <p className='text-gray-400 text-xs'>Cargo de servicio</p>
                <p className='text-gray-400 text-xs'>$490.00</p>
              </div>
              <div className='flex justify-between mb-5'>
                <p className='font-semibold text-lg'>Total</p>
                <p className='font-semibold text-lg'>$7,490.00</p>
              </div>
            </div>
          </div>

          <div className='w-full'>
            <div className='border p-4 rounded-md w-full mb-5'>
              <p className='text-red-400 mb-3'>Formas de pago</p>
              <div className='mb-5'>
                <p className='text-sm font-bold mb-2'>¿Como vas a pagar?</p>
                <select className='border p-3 w-full' name="" id="">
                  <option value="Tarjeta de Credito">Tarjeta de Credito</option>
                  <option value="Tarjeta de Debito">Tarjeta de Debito</option>
                  <option value="MP Dinero en Cuenta">MP Dinero en Cuenta</option>
                  <option value="MP Mercado Credito">MP Mercado Credito</option>
                </select>
              </div>
            </div>

            <p className='mb-5'>Adicionales</p>

            <div className='border p-4 rounded-md w-full mb-5'>
              <div className='flex w-full mb-3 gap-2'>
                <p className='w-full text-sm font-semibold'>¿Viajas con asistencia medica?</p>
                <img className='w-full h-9 md:w-36 md:h-12 lg:w-36 lg:h-12' src="/assets/asistencia-medica.png" alt="" />
              </div>
              <div className='mb-3'>
                <span className='text-gray-400 text-xs'>Incluye:
                  <br />
                  • Asistencia médica hasta $ 50.000.
                  <br />
                  • Teleasistencia médica incluida.
                  <br />
                  • Cobertura las 24 hs los 365 días del año.
                </span>
              </div>
              <div className='w-full border-b-2 pb-5 flex items-center gap-3 '>
                <ModalInformacion />
                <p className='text-xs text-red-400'>Ver legales</p>
              </div>
              <div className='flex gap-3 pt-5'>
                <div className='w-full'>
                  <p>$690.00</p>
                  <p className='text-xs text-gray-400'>Incluye 1 pasajero</p>
                </div>
                <div className='bg-red-400 cursor-pointer rounded-md w-full text-center'>
                  <a className='text-white' href="">Agregar</a>
                </div>
              </div>
            </div>

            <div className='border p-2 rounded-md w-full mb-5'>
              <p className='text-red-400 mb-3'>¿A donde te enviamos los pasajes?</p>
              <div className='bg-red-100 p-4 mb-5 rounded-md'>
                <span className='leading-normal text-xs'>
                  Es muy importante que nos indiques un correo electronico valido porque alli te enviaremos los pasajes.
                </span>
              </div>
              <div className='w-full'>
                <div className='w-full'>
                  <label className='w-full text-xs' htmlFor="">E-mail</label>
                  <input type="text" className='w-full border p-3' />
                </div>
                <div className='w-full'>
                  <label className='w-full text-xs' htmlFor="">Repetir E-mail</label>
                  <input type="text" className='w-full border p-3' />
                </div>
              </div>
            </div>

            <div className='border p-4 rounded-md w-full mb-5'>
              <p className='text-red-400 mb-3'>Telefono celular</p>
              <p className='w-full text-xs text-gray-400 mb-3'>
                (Para avisarte si hay cambios)
              </p>
              <div className='mb-5'>
                <p className='text-xs mb-2'>Pais</p>
                <select className='border p-3 w-full' name="" id="">
                  <option value="Tarjeta de Credito">Argentina</option>
                  <option value="Tarjeta de Debito">Brasil</option>
                  <option value="MP Dinero en Cuenta">Uruguay</option>
                  <option value="MP Mercado Credito">Paraguay</option>
                </select>
              </div>
              <div className='w-full flex'>
                <div className='w-full'>
                  <p className='w-full text-xs mb-3'>Codigo de Area</p>
                  <div className='flex w-full mb-3 gap-3'>
                    <span className='flex w-full text-xs justify-center'>0</span>
                    <input type="number" className='w-full border' />
                  </div>
                </div>
                <div className='w-full'>
                  <p className='w-full text-xs mb-3'>Numero</p>
                  <div className='flex w-full mb-3 gap-3'>
                    <span className='flex w-full text-xs justify-center'>15</span>
                    <input type="number" className='w-full border' />
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
        <div className='border p-2 rounded-md w-full mb-5'>
          <div className='lg:flex lg:justify-center'>
            <input className='mr-2' type="checkbox" />
            <label className='' htmlFor="">
              <span className='text-xs '>He leido y acepto los </span>
              <a className='text-red-400 text-xs ' href="">Terminos y Condiciones</a>
            </label>

          </div>
          <div className='flex justify-center mt-5 mb-5'>
            <ModalPagoExitoso />
          </div>
          <div className='mt-10 border-t'>
            <div className='flex mt-5 mb-3 gap-3 justify-center'>
              <img className='h-4' src="/assets/candado.png" alt="" />
              <span className='text-xs'>Sitio seguro</span>
            </div>
            <span className='flex justify-center text-xs text-gray-400 mb-3'>Utilizamos conexiones seguras para proteger tu informacion</span>
            <div className='flex justify-center'>
              <img src="/assets/seguros.png" alt="" />
            </div>
          </div>
        </div>




      </div>



    </>
  )
}

export default index
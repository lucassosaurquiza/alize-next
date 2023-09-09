import React, { useState } from 'react'

// import { IoIosArrowForward } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'
import { Disclosure, Transition } from '@headlessui/react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import CustomSelect from '@/components/ui/CustomSelect'
import Link from 'next/link'
import { useRouter } from 'next/router'
import ModalInformacion from '@/components/ui/ModalInformacion'


const countries = [
  { label: 'Argentina', value: 'Argentina' },
  { label: 'Brasil', value: 'Brasil' },
  { label: 'Uruguay', value: 'Uruguay' },
  { label: 'Paraguay', value: 'Paraguay' },
  { label: 'Colombia', value: 'Colombia' },
  { label: 'Peru', value: 'Peru' },
]

const items = [
  { label: 'DNI', value: 'DNI' },
  { label: 'pasaporte', value: 'Pasaporte' },
  { label: 'otros', value: 'Otros' },
]

const month = [
  { label: 'Enero', value: 'Enero' },
  { label: 'Febrero', value: 'Febrero' },
  { label: 'Marzo', value: 'Marzo' },
  { label: 'Abril', value: 'Abril' },
  { label: 'Mayo', value: 'Mayo' },
  { label: 'Junio', value: 'Junio' },
  { label: 'Julio', value: 'Julio' },
  { label: 'Agosto', value: 'Agosto' },
  { label: 'Septiembre', value: 'Septiembre' },
  { label: 'Octubre', value: 'Octubre' },
  { label: 'Noviembre', value: 'Noviembre' },
  { label: 'Diciembre', value: 'Diciembre' },
]

const index = () => {

  const router = useRouter();

  const [city, setCity] = useState('')

  const [dni, setDni] = useState('')

  const [name, setName] = useState('')

  return (
    <div>
      <header className='bg-red-400 p-4'>
        <Link href='/'>
          <p className=' w-full text-white'>alize-viajes-turismo.com</p>
        </Link>
      </header>

      <div className='border container max-w-6xl mx-auto p-4'>
        <h2 className='w-full font-semibold text-lg mb-5'>Datos de los pasajeros</h2>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex bg-red-400 text-white justify-around w-full text-sm items-center py-4 rounded-md mb-5 lg:hidden">
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
                <Disclosure.Panel className="w-full sm:text-xs border-b pb-5 lg:hidden" static>
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
                    <ModalInformacion />
                  </div>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <div className="flex w-full flex-col gap-10 lg:flex-row lg:justify-evenly">
          <div className="hidden lg:block flex-col order-1 w-full">
            <div className="border rounded-lg">
              <div className="bg-red-400 text-white w-full p-6 rounded-t-lg collapse-button relative">
                <a href="#">
                  Detalles de tu viaje
                </a>
              </div>
              <div className="p-6 ">
                <div className="tramo-title font-bold mb-3">Ida</div>
                <div className="tramo-group">
                  <div className="parada salida mb-3">
                    <div className='flex gap-2 mb-1'>
                      <span>SALE</span>
                      <span>Lunes 28 ago 2023, 12:00 hs</span>
                    </div>
                    <span className='font-bold'>Corrientes Terminal</span>
                  </div>
                  <div className="parada llegada">
                    <div className='flex gap-2 mb-1'>
                      <span>LLEGA</span>
                      <span>Lunes 29 ago 2023, 16:00 hs</span>
                    </div>
                    <span className='font-bold'>Posadas Terminal</span>
                  </div>
                </div>


                <div className="my-8 mx-4">
                  <ModalInformacion />
                  {/* <a href="#" className="px-4 py-2 rounded text-center text-red-400  border border-red-400">Información</a> */}
                </div>
              </div>
            </div>
          </div>


          <div className='w-full'>
            <div>
              <div className='bg-red-100 p-6 mb-5 rounded-md'>
                <span className='leading-normal'>
                  Menores de 12 años no puden viajar solos.
                  <a className='text-red-500 pl-1 ' href="https://www.argentina.gob.ar/viajar-con-menores-de-edad-en-micros-de-larga-distancia">Ver detalles aqui</a>
                </span>
              </div>
            </div>
            <div className='flex gap-2 w-full mb-5'>
              <div className='border-2 border-red-400 rounded-full'>
                <img className='object-cover w-16 p-[2px]' src="/assets/pasajero-1.png" alt="" />
                <span className=''></span>
              </div>
              <div className='opacity-[.1]'>
                <img className='object-cover rounded-full w-16 p-[2px]' src="/assets/pasajero-0.png" alt="" />
                <span className=''></span>
              </div>
              <div className='opacity-[.1]'>
                <img className='object-cover rounded-full w-16 p-[2px]' src="/assets/pasajero-0.png" alt="" />
                <span className=''></span>
              </div>
              <div className='opacity-[.1]'>
                <img className='object-cover rounded-full w-16 p-[2px]' src="/assets/pasajero-0.png" alt="" />
                <span className=''></span>
              </div>
              <div className='opacity-[.1]'>
                <img className='object-cover rounded-full w-16 p-[2px]' src="/assets/pasajero-0.png" alt="" />
                <span className=''></span>
              </div>
              <div className='opacity-[.1]'>
                <img className='object-cover rounded-full w-16 p-[2px]' src="/assets/pasajero-0.png" alt="" />
                <span className=''></span>
              </div>
            </div>


            <div className='border p-3 rounded-md mb-5'>
              <div>
                <span className='text-xs '>
                  <p className='mb-5'>Pasajero 1 de 1 Asiento 55</p>
                </span>

                <form action="">
                  <div className='lg:flex lg:gap-3'>
                    <div className='w-full mb-5'>
                      <p className='text-xs mb-1'>Nombre</p>
                      <input className='border p-1 pl-3 rounded-md w-full focus:border-red-500 outline-none' type="text" placeholder='Como figura en el documento' />
                    </div>
                    <div className='w-full mb-5'>
                      <p className='text-xs mb-1'>Apellido</p>
                      <input className='border p-1 pl-3 rounded-md w-full focus:border-red-500 outline-none' type="text" placeholder='Como figura en el documento' />
                    </div>
                  </div>
                  <div className='lg:flex lg:gap-3'>
                    <div className='w-full mb-5'>
                      <p className='text-xs mb-1'>Nacionalidad</p>
                      <CustomSelect selected={city} setSelected={setCity} items={countries} />
                    </div>
                    <div className='w-full mb-5'>
                      <p className='text-xs mb-1'>Tipo y numero de documento</p>
                      <div className='w-full flex gap-2'>
                        <CustomSelect selected={dni} setSelected={setDni} items={items} />
                        <input className='border p-1 pl-3 rounded-md w-full focus:border-red-500 outline-none' type="text" placeholder='Sin puntos' />
                      </div>
                    </div>
                  </div>
                  <div className='lg:flex lg:gap-3'>
                    <div className='w-full mb-5'>
                      <label className='flex focus:border-red-500 outline-none relative' htmlFor="">
                        <p className='flex z-10 text-xs items-center justify-center text-black pr-7 bg-right bg-no-repeat cursor-pointer py-2'
                          style={{
                            backgroundImage: "url('/assets/recomendacion.png')",
                            backgroundPosition: '',
                            backgroundSize: '16px',
                            backgroundRepeat: 'no-repeat'
                          }}>Genero</p>
                        <span className='hidden absolute left-14 border p-2 text-white rounded-md text-sm bg-gray-700' style={{ backgroundColor: '#444' }}>
                          Existen servicios involucrados en el proceso de ventas ajenos a Central de Pasajes
                          que no han adecuado sus sistemas para aceptar las alternativas que corresponden.
                        </span>
                      </label>
                      <div className='flex'>
                        <div className="flex justify-center border w-full cursor-pointer hover:bg-red-400 hover:text-white py-2 rounded-md">
                          <input type="radio" />
                          <label className='cursor-pointer'>Femenino</label>
                        </div>
                        <div className="flex justify-center border w-full cursor-pointer hover:bg-red-400 hover:text-white py-2 rounded-md">
                          <input type="radio" />
                          <label className='cursor-pointer'>Masculino</label>
                        </div>
                      </div>
                    </div>
                    <div className='w-full mb-5'>
                      <p className='text-xs mb-1'>Fecha de nacimiento</p>
                      <div className='flex gap-3'>
                        <input className='border w-full rounded-md focus:border-red-500 outline-none text-center' type="text" placeholder='01' />
                        <CustomSelect selected={name} setSelected={setName} items={month} />
                        <input className='border w-full rounded-md focus:border-red-500 outline-none text-center' type="text" placeholder='1900' />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-3 justify-center  bottom-0 right-0 left-0 p-4 lg:w-full '>
          <button onClick={() => router.back()} className='py-3 px-6  rounded-md border border-red-400 text-red-400'>Volver</button>
          <button onClick={() => router.push('/servicios/pagos')} className='py-3 px-6  rounded-md bg-red-400 text-white'>Continuar</button>
        </div>

      </div>
    </div>
  )
}

export default index
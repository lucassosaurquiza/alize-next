import { Disclosure, Transition } from "@headlessui/react"
import { BiSolidDownArrow } from "react-icons/bi"
import React from 'react'

export const Questions = () => {
  return (
    <div className="flex sm:p-4 sm:flex-col md:flex lg:flex lg:mx-40">

      <section className="py-10  pb-10">
        <div className="w-full">
          <div className="flex sm:justify-center ">
            <h2 className="font-bold mb-8">Preguntas Frecuentes sobre alize</h2>

          </div>
          <div className="sm:flex-col md:flex lg:flex ">
            <div className="">

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-around w-full text-sm pb-10 sm:text-xs sm:gap-1 md:gap-28 lg:gap-96">
                      <p>
                        ¿Cómo encuentro las mejores ofertas de viaje en alize?
                      </p>

                      <BiSolidDownArrow
                        className={`text-gray-400 sm:text-xl md:text-sm transition-transform duration-100 ${open ? 'rotate-180' : ''
                          }`}
                      />
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
                        <p className="w-auto lg:items-center">
                          Solo tienes que usar uno de nuestros motores de búsqueda de viajes. Las páginas de resultados de búsqueda de alize tienen un montón de opciones de filtro para ayudarte a encontrar el mejor precio, descubrir exactamente lo que buscas y hacer la reserva sin problemas. Tenemos acceso a los datos más recientes, lo que significa que nuestros precios son siempre precisos y están actualizados. Además, KAYAK no cobra ningún cargo adicional.
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-around w-full text-sm pb-10 sm:text-xs sm:gap-1 md:gap-28 lg:gap-96">
                      <p>
                        ¿Cómo encuentro las mejores ofertas de viaje en alize?
                      </p>
                      <BiSolidDownArrow
                        className={`text-gray-400 sm:text-xl md:text-sm transition-transform duration-100 ${open ? 'rotate-180' : ''
                          }`}
                      />
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
                      <Disclosure.Panel className="sm:text-xs border-b pb-5" static>
                        <p>
                          Solo tienes que usar uno de nuestros motores de búsqueda de viajes. Las páginas de resultados de búsqueda de alize tienen un montón de opciones de filtro para ayudarte a encontrar el mejor precio, descubrir exactamente lo que buscas y hacer la reserva sin problemas. Tenemos acceso a los datos más recientes, lo que significa que nuestros precios son siempre precisos y están actualizados. Además, KAYAK no cobra ningún cargo adicional.
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>

              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-around w-full text-sm pb-10 sm:text-xs sm:gap-1 md:gap-28 lg:gap-96">
                      <p>
                        ¿Cómo encuentro las mejores ofertas de viaje en alize?
                      </p>
                      <BiSolidDownArrow
                        className={`text-gray-400 sm:text-xl md:text-sm transition-transform duration-100 ${open ? 'rotate-180' : ''
                          }`}
                      />
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
                      <Disclosure.Panel className="sm:text-xs border-b pb-5" static>
                        <p>
                          Solo tienes que usar uno de nuestros motores de búsqueda de viajes. Las páginas de resultados de búsqueda de alize tienen un montón de opciones de filtro para ayudarte a encontrar el mejor precio, descubrir exactamente lo que buscas y hacer la reserva sin problemas. Tenemos acceso a los datos más recientes, lo que significa que nuestros precios son siempre precisos y están actualizados. Además, KAYAK no cobra ningún cargo adicional.
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>


            </div>


          </div>
        </div>

      </section >
    </div>
  )
}

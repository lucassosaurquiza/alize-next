
import { useRouter } from 'next/router';
import { LOGO_PROVIDER } from '../constants/images'
import { AiFillCreditCard, AiOutlineClockCircle } from 'react-icons/ai';
import Link from 'next/link';
import { IPasajes } from '@/interfaces/Pasaje';
import { Disclosure, Transition } from '@headlessui/react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import ModalVerDetalles from './ui/ModalVerDetalles';
import { Loading } from '@/components/Loading';
import { useState } from 'react';


export const CardItem = (pasaje: IPasajes) => {


  const router = useRouter();
  console.log(router.query.slug)

  const [
    destino,
    origen,
    id_des,
    id_origen,
    fecha_salida,
    fecha_vuelta = '_'
  ]: any = router.query.slug || []





  const getNumberOfSeats = () => {
    switch (pasaje.Butacas) {
      case 1:
        return `Ultimo asiento disponible`
      default:
        console.log("El numero de la butaca es", pasaje.Butacas)
        return `Asientos disponibles ${pasaje.Butacas}`
    }
  };


  getNumberOfSeats();


  return (
    <div>
      <div className='p-4 mb-10 rounded-lg bg-white border-y-4 border-red-400 relative hover:shadow-lg hover:scale-105 transition duration-300'>
        <div className="flex  horario sm:mb-5 lg:border-b-2 lg:gap-10 lg:pb-5">
          <div className='w-full hidden lg:block'>
            <div className="flex items-center justify-center text-xs logo md:flex gap-10 w-full mb-5">
              {/* @ts-ignore  */}
              <img src={LOGO_PROVIDER[pasaje?.NombreProveedor.trim()]?.url} id="imgLogoEmpresa" className="h-8 object-cover md:h-10 md:w-36" alt="Viaja por Emp.Asociadas - Río Uruguay" title="Viaja por Emp.Asociadas - Río Uruguay" />
            </div>
            <div className="flex items-center justify-center px-2 servicio text-white rounded-xl text-xs mb-5">
              <span id="ServiciosListView_ctrl0_ctl00_spnSrv" className="bg-gray-800 min-[64px] px-3 rounded-lg">{pasaje.Calidad}</span>
            </div>
          </div>
          <div className='flex w-full'>
            <div className="w-full pr-2 text-left salida">
              <div className="text-xs label">SALE</div>
              <div className="text-xl font-bold pt-1 hora">{pasaje.FechaSalidaPresentacionHorario}
              </div>
              <div className="text-xs ciudad">{destino} Terminal</div>
            </div>
            <div className="w-full relative grow text-center min-w-[74px] middle">
              <div className="tiempo-viaje text-xs">{pasaje.DuracionPresentacion}</div>
              <div className="py-4 px-4 z-5 w-auto m-auto bg-white relative inline-block icon">
                <img className='w-full h-5 object-cover' src="https://www.centraldepasajes.com.ar/cdp/img/v5/ic-bus.png" alt="bus" />
              </div>
              <div className="w-full z-4 absolute border-b top-10 linea"></div>
            </div>
            <div className="w-full pl-2 text-end llegada">
              <div className="text-xs label">LLEGA</div>
              <div className="text-xl font-bold pt-2 hora">{pasaje.FechaLlegadaPresentacionHorario}</div>
              <div className="text-xs ciudad">Posadas Terminal</div>
            </div>
          </div>
          <Link href="/servicios/butacas" className="w-full justify-evenly items-center border py-2 px-2 text-white  text-center bg-red-400 rounded-full hidden lg:block">
            <div className='lg:flex lg:items-center'>
              <div className="w-full precio flex gap-1 sm:flex-col">
                <div className="text-xs label">DESDE</div>
                <div className="text-lg font-bold valor"><span className='text-xs'>$</span> {pasaje.Precio}</div>
                <div className="text-xs label"><span id="LblLeyendaPrecio">POR PERSONA</span></div>
              </div>
              <div>
                <img src="https://www.centraldepasajes.com.ar/cdp/img/v5/arrow-right.png" alt="Comprar" className="h-2 w-2 arrow" />
              </div>
            </div>
          </Link>
        </div>
        <div className='hidden lg:block '>
          <div className='flex'>
            <div className='w-full'>
              <div className='flex w-full justify-center gap-5 lg:items-center'>
                <div className='flex-col'>
                  <div className='flex items-center justify-center rounded-full p-2 bg-red-300 mb-1 lg:p-0 lg:w-8 lg:h-8'>
                    <AiFillCreditCard className="text-2xl w-9 h-9 lg:w-5 lg:h-5" />
                  </div>
                  <p className='text-xs'>TARJETA</p>
                </div>
                <div className='flex-col'>
                  <div className='flex  items-center justify-center rounded-full p-2 bg-red-300 mb-1 lg:p-0 lg:w-8 lg:h-8'>
                    <img className='w-9 h-9 object-cover lg:w-5 lg:h-5' src="/assets/mp2.png" alt="" />
                  </div>
                  <p className='text-xs'>DINERO MP</p>
                </div>
                <div className='flex-col'>
                  <div className='flex items-center justify-center rounded-full p-2 bg-red-300 mb-1 lg:p-0 lg:w-8 lg:h-8'>
                    <img className='w-9 h-9 object-cover lg:w-5 lg:h-5' src="/assets/carcasa.png" alt="" />
                  </div>
                  <p className='text-xs'>E - TICKET</p>
                </div>
              </div>
            </div>
            <div className='w-full flex  lg:items-center'>
              <ModalVerDetalles />
            </div>
            <div className='w-full flex items-center justify-center'>
              <span className='flex items-center justify-center'>Quedan {pasaje.Butacas} asientos disponibles</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-4 empresa lg:hidden">
          <div className="w-full flex flex-col item gap-5">
            <div className="flex items-center justify-center text-xs logo md:flex gap-10 w-full">
              {/* @ts-ignore  */}
              <img src={LOGO_PROVIDER[pasaje?.NombreProveedor.trim()]?.url} id="imgLogoEmpresa" className="h-8 object-cover md:h-10 md:w-36" alt="Viaja por Emp.Asociadas - Río Uruguay" title="Viaja por Emp.Asociadas - Río Uruguay" />
            </div>
            <div className="flex items-center justify-center px-2 servicio text-white rounded-xl text-xs ">
              <span id="ServiciosListView_ctrl0_ctl00_spnSrv" className="bg-gray-800 min-[64px] px-3 rounded-lg">{pasaje.Calidad}</span>
            </div>
          </div>
        </div>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="w-full flex justify-center">
                <div className='flex border text-center items-center justify-center border-red-400 text-red-400 text-sm rounded-full mb-5 px-5 md:w-fit lg:hidden'>
                  <p className='flex text-center items-center justify-center'>Mas Informacion</p>
                  <MdOutlineKeyboardArrowDown
                    className={`sm:text-xl md:text-sm transition-transform duration-100 ${open ? 'rotate-180' : ''
                      }`}
                  />

                </div>
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
                  <div className='w-full mb-5'>
                    <div className='flex w-full justify-center gap-5 '>
                      <div className='flex-col'>
                        <div className='flex items-center justify-center rounded-full p-2 bg-red-300 mb-3'>
                          <AiFillCreditCard className=" text-2xl w-9 h-9" />
                        </div>
                        <p className='text-xs'>TARJETA</p>
                      </div>
                      <div className='flex-col'>
                        <div className='flex  items-center justify-center rounded-full p-2 bg-red-300 mb-3'>
                          <img className='w-9 h-9 object-cover' src="/assets/mp2.png" alt="" />
                        </div>
                        <p className='text-xs'>DINERO MP</p>
                      </div>
                      <div className='flex-col'>
                        <div className='flex items-center justify-center rounded-full p-2 bg-red-300 mb-3'>
                          <img className='w-9 h-9 object-cover' src="/assets/carcasa.png" alt="" />
                        </div>
                        <p className='text-xs'>E - TICKET</p>
                      </div>
                    </div>
                  </div>
                  <Disclosure.Button className="flex border border-red-400 text-red-400 justify-around w-full text-sm items-center py-3 rounded-md mb-5">
                    <p>Ver Detalles</p>
                  </Disclosure.Button>
                  <span className='flex items-center justify-center'>Quedan 9 asientos disponibles</span>
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>

        <div className="w-full flex items-center justify-between sm:gap-14 m-auto ">
          <div className='hidden'>
            <h2 className='text-xs mb-2'>Podes pagar con:</h2>
            <div className='flex gap-2'>
              <div className=' flex flex-col  items-center'>
                <AiFillCreditCard />
                <p className='text-[10px]'>Credito y Debito</p>

              </div>
              <div className='flex flex-col  items-center'>
                <img className='w-full h-full object-cover' src="/assets/mp2.png" alt="" />
                <p className='text-[10px]'>Mercado Pago</p>

              </div>
            </div>
          </div>


          <Link href="/servicios/butacas" className="flex w-full justify-evenly items-center border py-2 px-4 gap-5 text-white  text-center bg-red-400 rounded-full lg:hidden">
            <div className="w-full precio flex gap-1 sm:flex-col">
              <div className="text-xs label">DESDE</div>
              <div className="text-lg font-bold valor"><span className='text-xs'>$</span> {pasaje.Precio}</div>
              <div className="text-xs label"><span id="LblLeyendaPrecio">POR PERSONA</span></div>
            </div>
            <img src="https://www.centraldepasajes.com.ar/cdp/img/v5/arrow-right.png" alt="Comprar" className="h-2 w-2 arrow" />
          </Link>

          <div className='items-center text-[12px] hidden'>
            <p>{getNumberOfSeats()} </p>
          </div>
        </div>

      </div>
    </div>
  )
}
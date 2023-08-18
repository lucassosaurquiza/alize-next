import React from 'react'

import { FaEquals } from 'react-icons/fa'


export const Promociones = () => {
  return (
    <>
      {/* CONTENEDOR PADRE */}
      <div className=" border-red-400 lg:ml-72 lg:mr-32 sm:mx-4 sm:my-4">
        {/* CONTENEDOR PADRE QUE ENVUEVE A LAS DOS CAJAS PRINCIPALES: SECCION PROMOCIONES DE VIAJES Y SECCION PRE-VIAJE */}
        <div className='lg:flex lg:gap-10'>
          {/* SECCION GENERAL DE VIAJES */}
          <div className='sm:mb-5'>
            {/* SECCION IMAGENES DE PROMOS DE VIAJES */}
            <div className='sm:mb-5 '>
              <h2 className='w-full font-bold text-lg text-center mb-5'>Promos Imperdibles</h2>
              <p className='w-full font-semibold text-center mb-5'>Descuento del 10% en nuestros primeros 10 pasajeros.</p>
              <p className='w-full font-semibold text-center mb-5'>No pierdas tiempo, reserva tu lugar ahora mismo.</p>
              {/* ENVUELVE A LAS IMAGENES PARA PODER ACOMODARLAS UNA AL LADO DE LA OTRA EN TAMAÑO MD */}
              <div className='md:flex md:gap-4'>
                <div className='relative w-full h-60  mb-3 bg-cover bg-center bg-no-repeat hover:scale-105 transition-transform duration-300 transform origin-center' >
                  <div className='overflow-hidden '>
                    <img className='relative w-full h-60 rounded-lg' src="/assets/corrientes.png" alt="" />
                  </div>
                  <p className='absolute top-0  text-white text-center w-full font-bold pt-2'>Corrientes</p>
                  <div className='absolute top-12 left-4 bg-red-400 bg-opacity-80 w-20 p-0.5 rounded-lg' style={{ transform: "rotate(-15deg)" }}>
                    <p className='text-white text-center'>$8.500</p>
                  </div>
                  <div className='md:bottom-0 absolute w-full h-30 bottom-3 rounded-t-full'>
                    <p className='text-white text-center text-4xl font-bold w-full mb-1' style={{ fontSize: '24px' }}>alize</p>
                    <p className='text-white text-center text-xs w-full mb-1' style={{ fontSize: '14px' }}>Agencia de Viajes y Turismo</p>
                    <p className='text-white text-center text-xs w-full mb-1' style={{ fontSize: '14px' }}>Legajo Nº 1777 Disposicion Nº668/2016</p>
                  </div>
                </div>

                <div className='relative w-full h-60  mb-3 bg-cover bg-center bg-no-repeat hover:scale-105 transition-transform duration-300 transform origin-center' >
                  <div>
                    <img className='relative w-full h-60 rounded-lg' src="/assets/cordoba.png" alt="" />
                  </div>
                  <p className='absolute top-0  text-white text-center w-full font-bold pt-2'>Cordoba</p>
                  <div className='absolute top-12 left-4 bg-red-400 bg-opacity-80 w-20 p-0.5 rounded-lg' style={{ transform: "rotate(-15deg)" }}>
                    <p className='text-white text-center'>$8.500</p>
                  </div>
                  <div className='md:bottom-0 absolute w-full h-30 bottom-3 rounded-t-full'>
                    <p className='text-white text-center font-bold w-full mb-1' style={{ fontSize: '24px' }}>alize</p>
                    <p className='text-white text-center w-full mb-1' style={{ fontSize: '14px' }}>Agencia de Viajes y Turismo</p>
                    <p className='text-white text-center w-full mb-1' style={{ fontSize: '14px' }}>Legajo Nº 1777 Disposicion Nº668/2016</p>
                  </div>
                </div>

                <div className='relative w-full h-60   mb-3  bg-cover bg-center bg-no-repeat hover:scale-105 transition-transform duration-300 transform origin-center' >
                  <picture>
                    <img className='relative w-full h-60 rounded-lg' src="/assets/cuyo.png" alt="" />
                  </picture>
                  <p className='absolute top-0  text-white text-center w-full font-bold pt-2'>Cuyo</p>
                  <div className='absolute top-12 left-4 bg-red-400 bg-opacity-80 w-20 p-0.5 rounded-lg' style={{ transform: "rotate(-15deg)" }}>
                    <p className='text-white text-center'>$8.500</p>
                  </div>
                  <div className='absolute w-full h-30 bottom-0 rounded-t-full '>
                    <p className='text-white text-center font-bold w-full mb-1' style={{ fontSize: '24px' }}>alize</p>
                    <p className='text-white text-center w-full mb-1' style={{ fontSize: '14px' }}>Agencia de Viajes y Turismo</p>
                    <p className='text-white text-center w-full mb-1' style={{ fontSize: '14px' }}>Legajo Nº 1777 Disposicion Nº668/2016</p>
                  </div>
                </div>

              </div>
            </div>
            {/* SECCION CORREO DE OFERTA DE VIAJES */}
            <div className=' border sm:flex-col md:bg-red-400 md:p-2 rounded-xl'>
              <h2 className='w-full font-bold text-lg text-center mb-5 md:text-white'>Suscribite a nuestras ofertas</h2>
              <div className='flex items-center text-center mb-5'>
                <p className='w-full font-semibold text-center  md:text-left md:text-white'>Se el primero en enterarte todas las novedades y noticias de alize a traves de tu email, te mantendremos informado sobre las ultimas ofertas y promociones de viajes.</p>
                <video className='sm:hidden md:block w-40 ' src="/assets/Recibi-nuestras-ofertas.mp4" autoPlay loop></video>
              </div>
              <div className='flex '>
                <input className='flex border w-full focus:border-red-400 outline-none mb-5 p-1 md:w-full' placeholder='Email' type="Email" name="" id="" />

              </div>
              <div className='text-center'>
                <button className='text-white p-2 rounded sm:bg-red-400 md:bg-white md:text-black md:font-bold md:w-48'>Recibir Ofertas</button>
              </div>
            </div>
          </div>
          {/* SECCION PRE-VIAJE */}
          <div className='w-full border md:bg-red-400 md:p-3 rounded-xl'>
            <div className=''>
              <div className=''>
                <div className='w-full md:flex-col md:items-center md:flex'>
                  <div className='flex items-center justify-center'>
                    <p className='font-bold text-4xl md:text-white'>preVIAJE</p>
                    <FaEquals className='text-sky-400 text-2xl' />
                  </div>
                  <div className='flex gap-2 al justify-center mb-3 '>
                    <p className='font-bold text-xl md:text-white'>junto a</p>
                    <p className='text-red-400 font-bold text-4xl md:text-white'>alize</p>
                  </div>
                  <p className='font-semibold text-center sm:mb-5 md md:text-white'>Escapadas que no se te pueden escapar</p>
                </div>
                <p className='w-full font-semibold text-center sm:mb-5 md:text-start md:text-white'>preVIAJE es un programa de preventa turística que te reintegra el 50% del valor de tu viaje, para viajar y disfrutar de todos los destinos de Argentina entre el 24 de mayo y el 30 de junio.
                </p>
                <p className='font-semibold text-center sm:mb-5 md:text-start md:text-white'>Dejanos tus comentarios si queres mas informacion sobre como trabajamos con preVIAJE:</p>
                <input className='border w-full focus:border-red-400 outline-none p-1 mb-3' type="text" placeholder='Email' />
                <textarea placeholder='Comentarios' className="border rounded focus:border-red-200 focus:ring focus:ring-red-200 focus:outline-none w-full p-1 mb-3" name="Comentarios" id="" rows={5}></textarea>
                <div className='flex justify-center'>
                  <button className='text-white p-2 rounded bg-red-400  w-full mb-3 md:w-48 md:bg-white md:text-black md:font-bold'>Enviar</button>
                </div>
                <p className='font-semibold text-center sm:mb-5 w-full md:text-start md:text-white'>Para mas informacion sobre este programa, te invitamos a que visites su sitio oficial ingresando aqui <a href="https://previaje.gob.ar/">https://previaje.gob.ar/</a> </p>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        {/* CONTENEDOR DE LA SECCION CARROUSEL DE IMAGENES */}
        <div></div>
      </div>



    </>
  )
}

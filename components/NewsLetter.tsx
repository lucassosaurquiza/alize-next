import React, { useState } from 'react'
// import { sendNewsletter } from '../api/newSletter'
import { MdEmail } from "react-icons/md"

export const NewsLetter = () => {
  const [email, setEmail] = useState('')


  const onClick = () => {
    console.log(email)
    // sendNewsletter(email)
    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error))
    //   .finally(() => { })
  }


  return (
    <div className='flex sm:p-4 sm:flex-col md:flex  lg:flex'>
      <div className='flex w-full p-2 gap-5 sm:flex-col border md:flex md:rounded-md  lg:flex lg:p-4'>
        <div className='flex justify-center sm:h-full'>
          <video className='' autoPlay muted loop>
            <source src="assets/Recibi-nuestros-correos.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        <div className='w-full flex-col'>
          <h2 className='w-full font-bold'>Recibi nuestro newslleter</h2>
          <p className='w-full mb-2'>Registrate para recibir recomendaciones personalizadas y ofertas exclusivas.</p>
          <div className='w-full mb-2 flex rounded-sm p-1 border border-gray-400 items-center lg:gap-4 lg:flex'>
            <MdEmail className='' />
            <input className='w-full p-1 sm:text-sm md:text-md' type="text" placeholder='Escribe tu email' />
          </div>
          <div className='flex lg:justify-center'>
            <button className='bg-slate-300 w-full font-bold p-1 rounded-md text-gray-400 hover:bg-slate-200 slow-opacity-animation lg:w-56 '>Alla Vamos</button>
          </div>
        </div>
      </div>
    </div>
  )
}
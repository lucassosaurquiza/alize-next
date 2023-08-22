import React from 'react'

export const Footer = () => {
  return (
    <div>
      <footer className=" bg-red-400 text-white">
        <div className="flex p-3 justify-evenly flex-wrap gap-5 w-full md:flex md:flex-row md:justify-around lg:justify-evenly">
          <div className="mb-5">
            <h2 className="w-full mb-2">Empresa</h2>
            <div className="text-xs mb-1">¿Quienes Somos?</div>
            <div className="text-xs mb-1">Politica de Privacidad</div>
            <div className="text-xs">Preferencias</div>
          </div>
          <div className="mb-5 ">
            <h2 className="mb-2">Contacto</h2>
            <div className="text-xs mb-1">¿Quienes Somos?</div>
            <div className="text-xs mb-1">Politica de Privacidad</div>
            <div className="text-xs">Preferencias</div>
          </div>
          <div className=" ">
            <h2 className="mb-2">Redes</h2>
            <div className="text-xs mb-1">¿Quienes Somos?</div>
            <div className="text-xs mb-1">Politica de Privacidad</div>
            <div className="text-xs">Preferencias</div>
          </div>
        </div>

      </footer>
    </div>
  )
}

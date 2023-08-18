import React, { useState } from "react";
import { useForm } from '../Hooks/useForm';

import { SiYourtraveldottv } from 'react-icons/si'
import { LuBike } from 'react-icons/lu'
import { FaUsers } from 'react-icons/fa'
import { TiUser } from 'react-icons/ti'
import { BsFillPersonFill, BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillCalendar, AiFillCar, AiOutlineCheck, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { BiWorld } from 'react-icons/bi'
import Datepicker from "react-tailwindcss-datepicker";


const initialForm = {
  name: "",
  email: "",
  phone: "",
  origin: "",
  reason: "",
  activities: "",
  destination: "",
  foods: "",
  budget: "",
  comments: "",
}

const validationsForm = (form: any) => {
  let errors: any = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;
  let regexPhone = /^[0-9]+$/;
  let regexOrEmpty = /^$|^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;


  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre y Apellido' es requerido"
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
  }


  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido"
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo Asunto a tratar es requerido"
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo Comentarios es requerido"
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments = "El campo 'Comentarios' no debe exeder los 255 caracteres";
  }

  if (!form.phone.trim()) {
    errors.phone = "El campo 'Telefono' es requerido"
  } else if (!regexPhone.test(form.phone.trim())) {
    errors.phone = "El campo 'Telefono' solo acepta numeros";
  }

  if (!form.origin.trim()) {
    errors.origin = "El campo 'Origen' es requerido"
  } else if (!regexOrEmpty.test(form.origin.trim())) {
    errors.origin = "El campo 'Origen' solo acepta letras";
  }

  if (!form.reason.trim()) {
    errors.reason = "El campo 'Motivo del Viaje' es requerido"
  } else if (!regexOrEmpty.test(form.reason.trim())) {
    errors.reason = "El campo 'Motivo del Viaje' solo acepta letras";
  }

  if (!form.activities.trim()) {
    errors.activities = "El campo 'Actividades Favoritas' es requerido"
  } else if (!regexOrEmpty.test(form.activities.trim())) {
    errors.activities = "El campo 'Actividades Favoritas' solo acepta letras";
  }

  if (!form.destination.trim()) {
    errors.destination = "El campo 'Destino' es requerido"
  } else if (!regexOrEmpty.test(form.destination.trim())) {
    errors.destination = "El campo 'Destino' solo acepta letras";
  }

  if (!form.foods.trim()) {
    errors.foods = "El campo 'Comidas Especiales' es requerido"
  } else if (!regexOrEmpty.test(form.foods.trim())) {
    errors.foods = "El campo 'Comidas Especiales' solo acepta letras";
  }

  if (!form.budget.trim()) {
    errors.budget = "El campo 'Presupuesto de viaje aproximado por persona' es requerido"
  } else if (!regexOrEmpty.test(form.budget.trim())) {
    errors.budget = "El campo 'Presupuesto de viaje aproximado por persona' solo acepta letras";
  }
  return errors;
}

let styles = {
  fontWeight: "bold",
  color: "#dc3545"
}

export const Viaje = () => {

  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit
  }: any = useForm(initialForm, validationsForm)


  const [date, setDate] = useState({
    startDate: null,
    endDate: null
  });

  const handleValueChange = (newValue: any) => {
    setDate(newValue);
  }


  return (
    <>

      {/* EL PAPA QUE ENVUELVE A TODOS, "CONTAINER" */}
      <div className=" lg:ml-72 lg:mr-32 sm:mx-4 sm:my-4 ">

        {/* ESTO ES EL HEADER DE LA SECCION */}
        <div className="mb-5">
          <h2 className="flex justify-center font-bold pb-5 sm:text-center lg:text-4xl">Arma Tu Viaje</h2>
          <p className="font-semibold sm:text-sm lg:text-lg">El servicio de “Arma Tu Viaje” te permite contratar un colectivo, para uso completo y exclusivo de grupos de acuerdo a tus necesidades. Te ofrecemos total libertad de elección en cuanto a destinos, servicios y cantidad de personas. El objetivo es facilitar la organización de viajes grupales con fines deportivos, empresariales, políticos, conferencias, recitales o cualquier evento. Nuestro equipo te ayudará a organizar el viaje con el mejor servicio y al precio más conveniente.
            Para solicitar presupuesto u obtener más información completá la planilla o enviá E-mail a viajesespeciales@alize.com.</p>
        </div>

        {/* ACA EMPIEZA LOS CAMPOS CON LOS FORMULARIOS */}
        <div className="">
          <div className="bg-red-400 rounded-tr-xl rounded-tl-xl p-3">
            <h2 className="text-white flex justify-center text-center font-bold mb-5 lg:text-2xl">Formulario para solicitar un micro</h2>
            <p className="text-white flex text-center mb-5 sm:text-sm lg:text-lg">Completa el formulario para que podamos ofrecerte un viaje a tu medida, te armamos un presupuesto en base a tus necesidades.</p>
          </div>

          <div className="border-8 rounded-b-md border-red-400">
            <h2 className="flex pt-3 text-center justify-center font-bold ">Todos los campos son obligatorios</h2>
            <form action=""></form>
            <div className="">
              <div className="bg-red-400 rounded-sm p-2 mt-5">
                <h3 className="text-white ">Datos del solicitante</h3>
              </div>
              <div className="w-full md:flex md:gap-3 p-2 my-5">
                <div className="mb-3 w-full">
                  <p className="mb-1 text-sm font-semibold">Nombre / Apellido:</p>
                  <div className="flex items-center ">
                    <div className="bg-red-400 rounded-sm p-1 ">
                      <BsFillPersonFill className="text-white" />
                    </div>
                    <form onSubmit={handleSubmit}>
                      <input
                        className="w-full border border-gray-300 focus:border-red-400 outline-none p-1 text-xs rounded-sm"
                        type="text"
                        name='name'
                        placeholder="Nombre, Apellido"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.name}
                        required
                      />
                    </form>
                    {errors.name && <p style={styles}>{errors.name}</p>}

                  </div>
                </div>

                <div className="mb-3 w-full">
                  <p className="mb-1 text-sm font-semibold">Email:</p>
                  <div className="flex items-center ">
                    <div className="bg-red-400 rounded-sm p-1 ">
                      <AiOutlineMail className="text-white" />
                    </div>
                    <form onSubmit={handleSubmit}>
                      <input
                        className="w-full border border-gray-300 focus:border-red-400 outline-none p-1 text-xs rounded-sm"
                        type="text"
                        placeholder="Email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.email}
                        required
                      />


                    </form>
                    {errors.email && <p style={styles}>{errors.email}</p>}

                  </div>
                </div>

                <div className="mb-3 w-full">
                  <p className="mb-1 text-sm font-semibold">Telefono:</p>
                  <div className="flex items-center ">
                    <div className="bg-red-400 rounded-sm p-1 ">
                      <BsFillTelephoneFill className="text-white" />
                    </div>

                    <form onSubmit={handleSubmit}>
                      <input
                        className="w-full border border-gray-300 focus:border-red-400 outline-none p-1 text-xs rounded-sm"
                        type="text"
                        placeholder="Telefono"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.phone}
                        required />
                    </form>
                  </div>
                </div>

              </div>
              {/* HACIA ARRIBA ESTAN LOS 3 PRIMEROS  */}
              {/* DIVISION DONDE CUANDO ESTAS EN TAMAÑO "MD" Y "LG" NECESITAS HACER EL CAMBIO DE FLEX A FLEX-COL PARA QUE SE VEA BIEN EN MOBILE Y DESKTOP */}
              {/* HACIA ABAJO ESTAN LOS OTROS 2 */}
              <hr className="border" />
              <div className="p-2 md:flex lg:flex w-full gap-2 mt-5">
                <div className="mb-3 w-full">
                  <p className="mb-1 text-sm font-semibold">Lugar de Origen:</p>
                  <div className="flex items-center ">
                    <div className="bg-red-400 rounded-sm p-1 ">
                      <BiWorld className="text-white" />
                    </div>
                    <form onSubmit={handleSubmit}>
                      <input
                        className="w-full border border-gray-300 focus:border-red-400 outline-none p-1 text-xs rounded-sm"
                        type="text"
                        placeholder="Lugar de Origen"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.origin}
                        required />
                    </form>
                  </div>
                </div>
                <div className="w-full">
                  <div className="text-center">
                    <p className="text-sm font-semibold mb-1 ">¿Como desea ser contactado?</p>
                  </div>
                  <div className="sm:flex w-full">
                    <div className="flex justify-center border w-full hover:cursor-pointer hover:bg-red-400 hover:text-white">
                      <label className="" htmlFor="">
                        <input type="radio" />
                        <i className="hover:cursor-pointer">Email</i>
                      </label>
                    </div>
                    <div className="flex border w-full justify-center hover:cursor-pointer hover:bg-red-400 hover:text-white">
                      <label className="" htmlFor="">
                        <input type="radio" />
                        <i className="hover:cursor-pointer">Telefono</i>
                      </label>
                    </div>

                  </div>
                </div>
              </div>
            </div>


            <div className=" border-red-400">
              <div className="">
                <div className="bg-red-400 rounded-sm p-2 mt-5">
                  <h3 className="text-white ">Personas que viajan</h3>
                </div>
                <div className="w-full md:flex md:gap-3 p-2 my-5">
                  <div className="mb-3 w-full">
                    <p className="mb-1 text-sm font-semibold">Adultos:</p>
                    <div className="flex items-center ">
                      <div className="bg-red-400 rounded-sm p-1 ">
                        <FaUsers className="text-white" />
                      </div>
                      <select className="w-full border border-gray-300 focus:border-red-400 outline-none p-0.5 text-xs rounded-sm" placeholder="Adultos">
                        <option value="0" >0 Adultos</option>
                        <option value="1">1 Adulto</option>
                        <option value="2">2 Adultos</option>
                        <option value="3">3 Adultos</option>
                        <option value="4">4 Adultos</option>
                        <option value="5">5 Adultos</option>
                        <option value="6">6 Adultos</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3 w-full">
                    <p className="mb-1 text-sm font-semibold">Menores:</p>
                    <div className="flex items-center ">
                      <div className="bg-red-400 rounded-sm p-1 ">
                        <BsFillPersonFill className="text-white" />
                      </div>
                      <select className="w-full border border-gray-300 focus:border-red-400 outline-none p-0.5 text-xs rounded-sm" placeholder="Menores">
                        <option value="0" >0 Menores</option>
                        <option value="1">1 Menor</option>
                        <option value="2">2 Menores</option>
                        <option value="3">3 Menores</option>
                        <option value="4">4 Menores</option>
                        <option value="5">5 Menores</option>
                        <option value="6">6 Menores</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-3 w-full">
                    <p className="mb-1 text-sm font-semibold">Bebes:</p>
                    <div className="flex items-center ">
                      <div className="bg-red-400 rounded-sm p-1 ">
                        <TiUser className="text-white" />
                      </div>
                      <select className="w-full border border-gray-300 focus:border-red-400 outline-none p-0.5 text-xs rounded-sm" placeholder="Bebes">
                        <option value="0" >0 Bebes</option>
                        <option value="1">1 Bebe</option>
                        <option value="2">2 Bebes</option>
                        <option value="3">3 Bebes</option>
                        <option value="4">4 Bebes</option>
                        <option value="5">5 Bebes</option>
                        <option value="6">6 Bebes</option>
                      </select>
                    </div>
                  </div>

                </div>
                {/* HACIA ARRIBA ESTAN LOS 3 PRIMEROS  */}
                {/* DIVISION DONDE CUANDO ESTAS EN TAMAÑO "MD" Y "LG" NECESITAS HACER EL CAMBIO DE FLEX A FLEX-COL PARA QUE SE VEA BIEN EN MOBILE Y DESKTOP */}
                {/* HACIA ABAJO ESTAN LOS OTROS 2 */}
                <hr className="border" />
                <div className="p-2 md:flex md:w-full md:gap-2 mt-5">
                  <div className="mb-3 w-full">
                    <p className="mb-1 text-sm font-semibold">Motivo del Viaje</p>
                    <div className="flex items-center ">
                      <div className="bg-red-400 rounded-sm p-1 ">
                        <SiYourtraveldottv className="text-white" />
                      </div>
                      <form onSubmit={handleSubmit}>
                        <input
                          className="w-full border border-gray-300 focus:border-red-400 outline-none p-1 text-xs rounded-sm"
                          type="text"
                          placeholder="Motivo del Viaje"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={form.origin}
                          required />
                      </form>
                    </div>
                  </div>
                  <div className="mb-3 w-full">
                    <p className="mb-1 text-sm font-semibold">Actividades Favoritas</p>
                    <div className="flex items-center ">
                      <div className="bg-red-400 rounded-sm p-1 ">
                        <LuBike className="text-white" />
                      </div>
                      <form onSubmit={handleSubmit}>
                        <input
                          className="w-full border border-gray-300 focus:border-red-400 outline-none p-1 text-xs rounded-sm"
                          type="text"
                          placeholder="Motivo del Viaje"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={form.activities}
                          required
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" border-red-400">
              <div className="">
                <div className="bg-red-400 rounded-sm p-2 mt-5">
                  <h3 className="text-white ">Ciudad donde desea ir</h3>
                </div>
                <div className="w-full md:flex md:gap-3 p-2 my-5">
                  <div className="mb-3 w-full">
                    <p className="mb-1 text-sm font-semibold">Destino:</p>
                    <div className="flex items-center ">
                      <div className="bg-red-400 rounded-sm p-1 ">
                        <BiWorld className="text-white" />
                      </div>
                      <form onSubmit={handleSubmit}>
                        <input
                          className="w-full border border-gray-300 focus:border-red-400 outline-none p-1 text-xs rounded-sm"
                          type="text"
                          placeholder="Destino"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={form.destination}
                          required />
                      </form>
                    </div>
                  </div>

                  <div className="mb-3 w-full">
                    <p className="mb-1 text-sm font-semibold">Fecha de partida</p>
                    <div className="flex items-center ">
                      <div className="bg-red-400 rounded-sm p-1 ">
                        <AiFillCalendar className="text-white" />
                      </div>
                      <Datepicker
                        containerClassName="relative w-full"
                        inputClassName='p-0.5 h-full w-full rounded-sm flex gap-2 items-center border'
                        toggleClassName=" absolute top-0 text-gray right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                        placeholder={"dd/mm/aa"}
                        onChange={handleValueChange}
                        value={date}
                        useRange={false}
                        asSingle={true}
                        displayFormat={"DD/MM/YYYY"}
                      />
                    </div>
                  </div>

                  <div className="mb-3 w-full">
                    <p className="mb-1 text-sm font-semibold">Fecha de regreso</p>
                    <div className="flex items-center w-full">
                      <div className="bg-red-400 rounded-sm p-1">
                        <AiFillCalendar className="text-white" />
                      </div>
                      <Datepicker
                        containerClassName="relative w-full"
                        inputClassName='p-0.5 h-full w-full rounded-sm flex gap-2 items-center border'
                        toggleClassName="absolute top-0 text-gray right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
                        placeholder={"dd/mm/aa"}
                        onChange={handleValueChange}
                        value={date}
                        useRange={false}
                        asSingle={true}
                        displayFormat={"DD/MM/YYYY"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" border-red-400">
              <div className="">
                <div className="bg-red-400 rounded-sm p-2 mt-5">
                  <h3 className="text-white ">Hotel</h3>
                </div>
                <div className="w-full md:flex md:gap-3 p-2 my-5">
                  <div className="w-full">
                    <p className="flex justify-center text-sm font-semibold mb-1">¿Incluir Hotel?</p>
                    <div className="sm:flex w-full">
                      <div className="flex justify-center border w-full hover:cursor-pointer hover:bg-red-400 hover:text-white">
                        <label className="flex items-center p-1 cursor-pointer" htmlFor="">
                          <AiOutlineClose />
                        </label>
                      </div>
                      <div className="flex border w-full justify-center hover:cursor-pointer hover:bg-red-400 hover:text-white">
                        <label className="flex items-center p-1 cursor-pointer" htmlFor="">
                          <AiOutlineCheck />
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-3 w-full">
                    <p className="mb-1 text-sm font-semibold">Categoria</p>
                    <div className="flex items-center ">
                      <div className="bg-red-400 rounded-sm p-1 ">
                        <BsFillPersonFill className="text-white" />
                      </div>
                      <select className="w-full border border-gray-300 focus:border-red-400 outline-none p-0.5 text-xs rounded-sm"
                        placeholder="No indicado">
                        <option value="0" >No indicado</option>
                        <option value="1">1 Estrella</option>
                        <option value="2">2 Estrellas</option>
                        <option value="3">3 Estrellas</option>
                        <option value="4">4 Estrellas</option>
                        <option value="5">5 Estrellas</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className=" border-red-400">
              <div className="">
                <div className="bg-red-400 rounded-sm p-2 mt-5">
                  <h3 className="text-white ">Tipo de Paquete</h3>
                </div>
                <div className="w-full md:flex md:gap-3 p-2 my-5">
                  <div className="mb-3 w-full">
                    <p className="mb-1 text-sm font-semibold">Comidas Especiales:</p>
                    <div className="flex items-center ">
                      <div className="bg-red-400 rounded-sm p-1 ">
                        <AiFillCar className="text-white" />
                      </div>
                      <form onChange={handleSubmit}>
                        <input
                          className="w-full border border-gray-300 focus:border-red-400 outline-none p-1 text-xs rounded-sm"
                          type="text"
                          placeholder="Comidas Especiales"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={form.foods}
                          required />


                      </form>
                    </div>
                  </div>

                  <div className="mb-3 w-full">
                    <p className="mb-1 text-sm font-semibold">Presupuesto de viaje aproximado por persona:</p>
                    <div className="flex items-center ">
                      <div className="bg-red-400 rounded-sm p-1 ">
                        <AiFillCar className="text-white" />
                      </div>
                      <form onChange={handleSubmit}>
                        <input
                          className="w-full border border-gray-300 focus:border-red-400 outline-none p-1 text-xs rounded-sm"
                          type="text"
                          placeholder="Presupuesto de viaje aproximado por persona"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={form.budget}
                          required
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" border-red-400">
              <div className="">
                <div className="bg-red-400 rounded-sm p-2 mt-5">
                  <h3 className="text-white ">Comentarios</h3>
                </div>
                <div className="w-full md:flex md:gap-3 p-2 items-center my-5">
                  <div className="mb-3 w-full">
                    <form onChange={handleSubmit}>
                      <textarea
                        className="border rounded focus:border-red-200 focus:ring focus:ring-red-200 focus:outline-none w-full p-3"
                        name="Comentarios"
                        rows={5}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={form.comments}
                        required
                      ></textarea>
                    </form>
                  </div>
                  <div className="mb-3 w-full ">
                    <p className="mb-5">Hacenos saber en lo que podemos ayudarte, no dudes en dejarnos tus comentarios.</p>
                    <input
                      className="bg-gray-300 text-white cursor-pointer hover:bg-red-400 p-2 w-full rounded-sm"
                      type="submit"
                      value="enviar">Enviar</input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
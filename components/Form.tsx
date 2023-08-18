import { useRouter } from 'next/router';
import { Fragment, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import Datepicker from "react-tailwindcss-datepicker";
import { Transition, Listbox } from '@headlessui/react';

import { SelectDestination } from './SelectDestination';

export const Form = () => {
  const router = useRouter()
  const [date, setDate] = useState<any>({
    startDate: null,
    endDate: null
  });

  const [origen, setOrigen] = useState({})
  const [destino, setDestino] = useState({
    nameSeo: '',
    id: ''
  })

  const handleValueChange = (newValue: any) => {
    setDate(newValue);
  }

  const onSubmit = async () => {
    // @ts-ignore
    router.push(`/servicios/buscar-pasajes/${origen.nameSeo}/${destino.nameSeo}/${origen.id}/${destino.id}/${date.startDate}`)
  }

  return (
    <div className=" sm:mx-auto sm:p-4 sm:max-w-320 md:max-w-600 lg:max-w-1200 lg:mx-40">
      <div className='flex justify-center items-center' >
        <h2 className="sm:text-md sm:font-bold md:font-bold md:text-xl text-[#212a30] mb-3">
          Saca tus pasajes desde la comodidad de tu casa.
        </h2>
      </div>
      <div className='sm:flex'>
        <div className="sm:flex  gap-2 mb-4">
          <Select />
          <Select1 />
        </div>
      </div>

      <section className="pt-8 mb-10 flex flex-col gap-2 lg:flex-row">
        <SelectDestination onSelected={setOrigen} selected={origen} placerholder='Origen' />
        <SelectDestination onSelected={setDestino} selected={destino} placerholder='Destion' />
        <Datepicker
          containerClassName="relative"
          inputClassName='p-2 h-full w-full rounded flex gap-2 items-center bg-slate-300'
          toggleClassName="absolute top-0 text-gray right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed"
          placeholder={"dd/mm/aa"}
          onChange={handleValueChange}
          value={date}
          useRange={false}
          asSingle={true}
          displayFormat={"DD/MM/YYYY"}
        />
        <div className='flex'>
          <button onClick={() => onSubmit()} className=' px-4  w-full p-2 rounded  flex gap-2 items-center justify-center bg-gradient-to-r from-red-500 to-red-300'>
            <AiOutlineSearch className='text-white' />
          </button>
        </div>
      </section>
    </div>
  )
}



const modes = [
  { id: 1, name: 'Solo ida', unavailable: false },
  { id: 2, name: 'Ida y vuelta', unavailable: false },
]

const Select = () => {
  const [selected, setSelected] = useState(modes[0])

  return (
    <div className="mr-4">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="cursor-pointer relative w-full  rounded-lg  text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="flex items-center gap-2">
              {selected.name}
              <BiChevronDown />
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-30 w-30 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {modes.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `cursor-pointer relative select-none py-2 pl-4 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

const peoples = [
  { id: 1, name: 'Bebes', unavailable: false },
  { id: 2, name: 'Jovenes', unavailable: false },
  { id: 3, name: 'Adultos', unavailable: false },
]

const Select1 = () => {
  const [selected1, setSelected1] = useState(peoples[0])
  return (
    <div className="mr-4">
      <Listbox value={selected1} onChange={setSelected1}>
        <div className="relative">
          <Listbox.Button className="cursor-pointer relative w-full  rounded-lg  text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="flex items-center gap-2">
              {selected1.name}
              <BiChevronDown />
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-30 w-30 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {peoples.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `cursor-pointer relative select-none py-2 pl-4 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
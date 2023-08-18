import { Fragment, useState, useEffect } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { BiCheck, BiChevronDown } from 'react-icons/bi'
import { useData } from '../context/DataContext'
import axios from 'axios';


const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debouncedValue;
};


export const SelectDestination = ({ onSelected, selected, placerholder }: any) => {
  const [stops, setStops] = useState<any>([])

  const [query, setQuery] = useState('')

  const debouncedSearchTerm = useDebounce(query, 500);

  const startLoadStops = (term: string) => {
    axios
      .get(`https://services.plataforma10.com/pcom/stops/stops/search?term=${term}`)
      .then(({ data }) => setStops(data.items))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (query.length < 4) return
    startLoadStops(debouncedSearchTerm);
  }, [debouncedSearchTerm]);


  return (
    <Combobox value={selected} onChange={onSelected}>
      <div className="flex-1">
        <div className="w-full cursor-default overflow-hidden rounded bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <Combobox.Input
            autoComplete="off"
            className="w-full p-3 bg-slate-300"
            displayValue={(stop: any) => stop.text}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={placerholder}
          />
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery('')}
        >
          <Combobox.Options className="sm:max-w-xs z-10 absolute mt-1 max-h-60 w-96 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {stops.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              stops.map((stop: any) => (
                <Combobox.Option
                  key={stop.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2  ${active ? 'bg-teal-600 text-white' : 'text-gray-900'
                    }`
                  }
                  value={stop}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                          }`}
                      >
                        {stop.text}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                            }`}
                        >
                          <BiCheck className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  )
}
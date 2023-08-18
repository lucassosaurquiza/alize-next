import { useEffect, useState } from 'react'
import { BsArrowRight, BsFillBusFrontFill } from 'react-icons/bs';

import { GetServerSideProps } from 'next/types'

import { getDestinations } from '@/client/destination'

import { CardItem } from '@/components/CardItem';
import { Loading } from '@/components/Loading';
import Head from 'next/head';

interface SearchPageProps {
  slug: [string];
}

const SearchPage = ({ slug }: SearchPageProps) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  console.log(slug)

  const [
    destino = '',
    origen = '',
    id_des = '',
    id_origen = '',
    fecha_salida = '',
    fecha_vuelta = '_'
  ]: any = slug


  useEffect(() => {
    setLoading(true)
    getDestinations({
      destino,
      origen,
      id_des,
      id_origen,
      fecha_salida,
      fecha_vuelta
    })
      .then(({ data }) => setResults(data.Servicios))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div>
      <Head>
        <title>Alize viajes y turismo | Pasajes</title>
      </Head>

      <header className='bg-red-400 p-4 '>
        <p className='text-white'>alize-viajes-turismo.com</p>
      </header>
      <div className='border max-w-5xl m-auto p-4'>
        <div className='flex gap-2'>
          <div className='flex items-center'>
            <BsFillBusFrontFill className='text-3xl' />
          </div>
          <div>
            <div className='flex flex-col'>
              <div>Selecciona tu viaje de <b>IDA</b></div>
            </div>
            <div className='flex items-center gap-3'>
              <div className='font-semibold'>Corrientes Terminal</div>
              <div>
                <BsArrowRight />
              </div>
              <div className='font-semibold'>Posadas Terminal</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl m-auto p-4">
        <div className=''>
          {loading
            ? (<Loading />)
            : results.map((pasaje: any, i) => (
              <CardItem key={i}  {...pasaje} />
            ))
          }
        </div>
      </div>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;

  const slug = query
  return {
    props: {
      ...slug
    }
  }
}

export default SearchPage
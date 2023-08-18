import { Inter } from 'next/font/google'

import { Form } from '@/components/Form'
import { NewsLetter } from '@/components/NewsLetter'
import { Questions } from '@/components/Questions'
import { Layout } from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div className='p-2 pl-18 w-full h-full'>
        <div className='md:max-w-[640px] lg:max-w-7xl lg:px-6 m-auto '>
          <Form />
          <NewsLetter />
          <Questions />
        </div>
      </div>
    </Layout>
  )
}

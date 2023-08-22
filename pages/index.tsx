import { Inter } from 'next/font/google'

import { Form } from '@/components/Form'
import { NewsLetter } from '@/components/NewsLetter'
import { Questions } from '@/components/Questions'
import { Layout } from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <div className='p-2 lg:pl-56 w-full h-full'>
        <Form />
        <NewsLetter />
        <Questions />
      </div>
    </Layout>
  )
}

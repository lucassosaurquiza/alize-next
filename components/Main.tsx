import { Form } from './Form'
import { NewsLetter } from './NewsLetter'
import { Questions } from './Questions'

export const Main = () => {
  return (
    <div className='p-2 pl-18 w-full h-full'>
      <div className='md:max-w-[640px] lg:max-w-7xl lg:px-6 m-auto '>
        <Form />
        <NewsLetter />
        <Questions />
      </div>
    </div >
  )
}
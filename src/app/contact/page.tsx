import NextImage from 'next/image'
import picture from '/public/images/contact-us.png'
import { FunctionComponent } from 'react'
import { amaticSC } from '../styles/fonts'
import BeautyLink from '@/components/BeautyLink'

const Contact: FunctionComponent = () => {
  return (
    <main className="lg:w-3/4 md:w-4/5 sm:w-4/5 mx-auto max-w-screen-md flex min-h-screen flex-col items-center p-8">
      <div
        className={`${amaticSC.className} text-center font-bold text-4xl text-[#FF4E50] mb-8`}>
        Contact us
      </div>
      <p>
        <strong>Email:</strong> margherita.lazzarini@gmail.com
      </p>
      <br />
      <div className="mb-8 flex flex-col items-center">
        <strong className="block mb-2">Linkedin profiles:</strong>
        <BeautyLink
          className="mb-2"
          href="https://www.linkedin.com/in/mlazzarini23/">
          Margherita
        </BeautyLink>
        <BeautyLink href="https://www.linkedin.com/in/fabio-portmann-72b784249/">
          Fabio
        </BeautyLink>
      </div>
      <div className="flex justify-center">
        <NextImage src={picture} alt="Contact us" width={800} />
      </div>
    </main>
  )
}

export default Contact

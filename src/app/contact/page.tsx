import BeautyLink from '@/components/BeautyLink'
import MainWrapper from '@/components/MainWrapper'
import NextImage from 'next/image'
import { FunctionComponent } from 'react'
import picture from '/public/images/contact-us.png'

const Contact: FunctionComponent = () => {
  return (
    <MainWrapper title="Contact us">
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
    </MainWrapper>
  )
}

export default Contact

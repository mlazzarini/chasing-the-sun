import MainWrapper from '@/components/MainWrapper'
import NextImage from 'next/image'
import { FunctionComponent } from 'react'
import picture from '/public/images/about-us.jpg'

const About: FunctionComponent = () => {
  return (
    <MainWrapper title="About us">
      <div className="mb-8 flex justify-center">
        <NextImage src={picture} alt="About us" width={800} />
      </div>
      <p>
        Hi! We are Margherita and Fabio. We decided to leave our jobs for one
        year and travelling around the world.
      </p>
      <br />
      <p>
        Margherita (Maggie), born and raised in Italy, is a software developer
        with 7 years of experience. Since 2018 she is living and working in
        Switzerland. Fabio is a quality engineer working in the automotive
        sector. He is born, raised and living in Zurich.
      </p>
      <br />
      <p>
        Both in love with travelling, we decided that we needed a break from
        work, so we picked (some) countries around the world that we always
        wanted to visit, and we’ll try to explore as much as possible.
      </p>
    </MainWrapper>
  )
}

export default About

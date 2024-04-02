import NextImage from 'next/image'
import picture from '/public/images/about-us.png'
import { FunctionComponent } from 'react'
import { amaticSC } from '../styles/fonts'

const About: FunctionComponent = () => {
  return (
    <main className="lg:w-3/4 md:w-4/5 sm:w-4/5 mx-auto flex min-h-screen flex-col items-center p-8">
      <div
        className={`${amaticSC.className} text-center font-bold text-4xl text-[#FF4E50]`}>
        About us
      </div>
      <div className="lg:w-4/5 md:w-4/5 sm:w-4/5 m-8">
        <NextImage src={picture} alt="About us" />
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
    </main>
  )
}

export default About

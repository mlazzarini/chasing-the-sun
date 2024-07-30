import { FunctionComponent, ReactNode } from 'react'
import { amaticSC } from '../app/styles/fonts'

const MainWrapper: FunctionComponent<{
  children: ReactNode
  title: string
}> = ({ children, title }) => {
  return (
    <main className="lg:w-3/4 md:w-4/5 sm:w-4/5 mx-auto max-w-screen-md flex min-h-screen flex-col items-center p-2 lg:p-8 md:p-2">
      <div
        className={`${amaticSC.className} text-center font-bold text-4xl text-[#FF4E50] mb-8`}>
        {title}
      </div>
      {children}
    </main>
  )
}

export default MainWrapper

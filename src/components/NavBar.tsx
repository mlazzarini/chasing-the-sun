import Link from 'next/link'
import Menu from './Menu'
import { amaticSC } from '../app/styles/fonts'

export default function NavBar() {
  return (
    <div className="flex items-center justify-between p-6 bg-gradient-to-r from-[#FF4E50]/[.7] to-[#F9D423]/[.7]">
      <div className={`${amaticSC.className} font-bold text-5xl`}>
        <Link
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#F9D423] mr-4">
          Chasing the sun ☀️
        </Link>
      </div>
      <Menu />
    </div>
  )
}

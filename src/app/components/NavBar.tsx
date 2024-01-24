import Link from 'next/link'
import Menu from './Menu'

export default function NavBar() {
  return (
    <div className="flex items-center justify-between border-b-2 border-b-black border-b-solid p-6">
      <div className="font-semibold text-xl tracking-tight">
        <Link
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
          Sandy feet
        </Link>
      </div>
      <Menu />
    </div>
  )
}

import Link from 'next/link'

export default function Menu() {
  return (
    <div className="flex items-center">
      <ul className="flex">
        <li className="mr-6">
          <Link
            href="/about"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4">
            About
          </Link>
        </li>
        <li className="mr-6">
          <Link
            href="/contact"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  )
}

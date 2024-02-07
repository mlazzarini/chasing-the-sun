'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from './ui/navigation-menu'
import { amaticSC } from '../app/styles/fonts'

export default function Menu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem
          className={`${amaticSC.className} text-3xl font-bold p-1 text-[#FF4E50] hover:text-white`}>
          <Link href="/about">About</Link>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={`${amaticSC.className} text-3xl font-bold p-1 text-[#FF4E50] hover:text-white`}>
          <Link href="/contact">Contact</Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

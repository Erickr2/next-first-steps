
//por defecto todos los componentes en Next son Server components

import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

interface INavItems {
  path: string;
  text: string;
}

const navItems: INavItems[] = [
  { path: '/about', text: 'About' },
  { path: '/price', text: 'Pricing' },
  { path: '/contact', text: 'Contact' },
]
export const NavBar = () => {

  console.log('navbar creado')

  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="flex items-center">
        <HomeIcon className="mr-2" />
        <span>Home</span>
      </Link>
      <div className="felx flex-1"></div>
      {navItems.map(item => (
        <ActiveLink key={item.path} {...item} /> //como se que mi item trae lo que necesita mi componente, exparso las props y las cacha 
      ))}

    </nav>
  )
}

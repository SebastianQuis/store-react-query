
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { Link, NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

import { AcmeLogo } from "./AcmeLogo";


const routes = [
  { to: '/', text: 'Todo' },
  { to: '/men', text: 'Hombres' },
  { to: '/women', text: 'Mujeres' },
]

export const NavBar = () => {

  return (
    <Navbar>
      <NavbarBrand>
        <Link to="/" className="flex items-center gap-2">
          <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">

        {
          routes.map(({ to, text }) => (
            <NavbarItem key={to}>
              <NavLink to={to} className={({ isActive }) => isActive ? styles.active : styles.inactive}>
                {text}
              </NavLink>
            </NavbarItem>
          ))
        }



      </NavbarContent>

      <NavbarContent justify="end">

        <NavbarItem>

          <Button as={NavLink}  to="/new" variant="flat">
            Nuevo producto
          </Button>

        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";


export default function Develop() {
    return (
 
<div>        <Navbar className="border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      <NavbarBrand>
        
        <p className="font-bold text-inherit">Meta Global</p>
      </NavbarBrand>
      {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
    </Navbar>

<div className="flex min-h-screen flex-col items-center justify-between p-24">

<div className="flex flex-col items-start px-20 py-12 bg-white max-md:px-5">
    <div className="mt-12 ml-20 h-9 bg-zinc-300 w-[42px] max-md:mt-10 max-md:ml-2.5" />
    <div className="mt-12 ml-3.5 max-w-full bg-zinc-300 h-[145px] w-[284px] max-md:mt-10 max-md:ml-2.5" />
  </div>
        <h1>Hello, Dashboard Page!</h1>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>
    <Button>Click me</Button>


  </div>
  </div>
  )
  }
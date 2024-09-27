'use client'

{/* Imports */}
import Image from "next/image";
import Head from "./head";
import Navbar from "./navbar";
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

{/* Components */}
import headerImage from "./images/header.png";
import buttonArrow from './images/mdi_chevron-right.png'
import CTO from "./cto";
import Services from "./services";
import Process from "./process";
import Repairs from "./repairs";
import Contact from "./contact/contact";
import Hero from "./Hero";
import Map from "./map";
import Footer from "./footer";
import Modal from "./modal";

export default function Home() {
  const [open, setOpen] = useState(true)

  return (
    <>
    <Head />
    <Navbar open={open} setOpen={setOpen}/>
    <Hero  open={open} setOpen={setOpen}/>
    <CTO  open={open} setOpen={setOpen}/>
    <Services />
    <CTO  open={open} setOpen={setOpen}/>
    <Process />
    <CTO  open={open} setOpen={setOpen}/>
    <Repairs />
    <CTO  open={open} setOpen={setOpen}/>
    <Contact  open={open} setOpen={setOpen}/>
    <CTO  open={open} setOpen={setOpen}/>
    <Map />
    <Footer />
    <Modal open={open} setOpen={setOpen}/>
    </>
  );
}

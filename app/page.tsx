'use client'

{/* Imports */}
import Head from "./head";
import Navbar from "./navbar";
import { useState } from 'react'

{/* Components */}
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
    <Navbar setOpen={setOpen}/>
    <Hero setOpen={setOpen}/>
    <CTO setOpen={setOpen}/>
    <Services />
    <CTO setOpen={setOpen}/>
    <Process />
    <CTO  setOpen={setOpen}/>
    <Repairs />
    <CTO  setOpen={setOpen}/>
    <Contact setOpen={setOpen}/>
    <CTO  setOpen={setOpen}/>
    <Map />
    <Footer />
    <Modal open={open} setOpen={setOpen}/>
    </>
  );
}

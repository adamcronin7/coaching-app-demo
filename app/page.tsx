"use client";

import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Preview from './components/Preview';
import Footer from './components/Footer';



export default function Home() {

  return (
    <main>
        <div className='flex flex-col'>
        <Navbar/>
        <About/>
        <Preview/>
        <Footer/>
        </div>
    </main>
  )
}

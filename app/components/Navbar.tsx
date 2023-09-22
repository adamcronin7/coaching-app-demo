"use client";

import React from 'react'
import Link from 'next/link';
import { FaLongArrowAltRight } from 'react-icons/fa';

const styles = {
    wrapper: 'flex justify-center h-[10vh] gap-10 p-5 bg-white shadow-sm shadow-gray-500',
    content: 'max-w-7xl flex-1 flex justify-between gap-10',
    logoContainer: 'flex items-center flex-start',
    logo: 'cursor-pointer object-contained',
    bannerNav: 'flex items-center space-x-5',
    lightButton: 'bg-white inline-flex items-center border border-black hover:border-[#C2C5BB] cursor-pointer text-black  py-2 px-4 rounded hover:text-[#C2C5BB] transition-color'
}

function Navbar() {

  return (
    <div className={styles.wrapper}>
        <div className={styles.content}>
            <div className={styles.logoContainer}>
                <p className={styles.logo}>Logo</p>
            </div>

            <div className={styles.bannerNav}>
              <Link href='/dashboard'>
                <div className={styles.lightButton}><FaLongArrowAltRight/>&nbsp;&nbsp;To Demo</div>
              </Link>
            </div>
        </div>
    </div>
)
}

export default Navbar
import Link from 'next/link';
import React from 'react';
import {
  FaGithubSquare, FaLongArrowAltRight
} from 'react-icons/fa';

const styles = {
    lightButton: 'bg-white rounded inline-flex items-center border border-black cursor-pointer text-black  py-2 px-4 hover:text-[#C2C5BB] transition-color'
}


const Footer = () => {
  return (
    <div id='footer' className='bg-gray-900 w-screen mx-auto py-16 px-4'>
      <div className='bg-gray-900 max-w-7xl mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#499F68]'>APP NAME.</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='w-0'>
            <a href='https://github.com/adamcronin7' target='_blank'><FaGithubSquare size={30} /></a>
        </div>
      </div>
      <div className='flex lg:justify-end items-center'>
    <div>
      <Link href='/dashboard'>
        <div className={styles.lightButton}><FaLongArrowAltRight/>&nbsp;&nbsp;To Demo</div>
      </Link>
    </div>
      </div>
    </div>

    <div className='flex flex-col items-center'>
        <Link href='#'>
          <div className='bg-gray-700 cursor-pointer text-white py-2 px-4 rounded-full hover:text-[#C2C5BB] transition-color hover:scale-105 ease-in duration-300'>
            Back To Top
          </div>
        </Link>
    </div>
    </div>
  );
};

export default Footer;
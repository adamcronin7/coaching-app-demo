'use client'

import React from 'react';
import Link from 'next/link';
import { FiSettings } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineCalendar } from 'react-icons/ai';
import { BsPeople, BsArrowReturnLeft } from 'react-icons/bs'

const Sidebar = () => {

  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/dashboard'>
            <div className='bg-[#499F68] hover:bg-[#157A6E] text-white p-3 rounded-lg inline-block'>
              <AiOutlineHome size={20} />
            </div>
          </Link>
          <Link href='/calendar'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <AiOutlineCalendar size={20} />
            </div>
          </Link>
          <Link href='/athletes'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <BsPeople size={20} />
            </div>
          </Link>
          <Link href='/settings'>
            <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <FiSettings size={20} />
            </div>
          </Link>
          <Link href='/'>
            <div className='bg-red-400 hover:bg-red-500 text-white cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <BsArrowReturnLeft size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
"use client";

import React from 'react'
import Sidebar from '../dashboard/components/Sidebar';
import Athletes from './components/Athletes';


function calendar() {

  return (
    <div>
      <Sidebar />
      <Athletes />
    </div>
  )
}

export default calendar
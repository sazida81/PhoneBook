
import React from 'react'
import { CiHome } from "react-icons/ci";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
const Sidebar = ({openSidebar}) => {
  return (
    <div className='sidebar' onClick={openSidebar}>
      <li><CiHome/>Home</li>
      <li><IoMdInformationCircleOutline/>About</li>
      <li><IoIosContact/>Contact</li>
    </div>
  )
}

export default Sidebar

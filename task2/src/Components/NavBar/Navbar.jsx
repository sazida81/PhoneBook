import React from 'react'
import './Navbar.css'
import white_phone from '../../assests/dark_logo.png'
import dark_phone from '../../assests/white_logo.png'
import toggle_light from '../../assests/Moon.png'
import toggle_dark from '../../assests/Sun.png'
import { IoMdMenu } from "react-icons/io";
//import { FaAddressBook } from "react-icons/fa"; //light
//import { FaRegAddressBook } from "react-icons/fa"; //dark
//import { FaRegMoon } from "react-icons/fa"; //white-moon
//import { FaMoon } from "react-icons/fa";  //dark-moon
//import { MdOutlineWbSunny } from "react-icons/md"; //white-sun
//import { MdSunny } from "react-icons/md"; //dark-sun


const Navbar = ({theme,setTheme }) => {

    const toggle_mode = ()=>{
        theme == 'light' ? setTheme('dark') : setTheme('light');

        }

  return (

    <div className='navbar'>

      
        <IoMdMenu className='menu-bar'/>
       

        <img src={theme == 'light' ? white_phone : dark_phone} alt="" className='logo'/>
        <p>My Phonebook</p>

        <button>Add Contact</button>

  

        <img onClick={()=>{toggle_mode()}} src={theme == 'light' ? toggle_light : toggle_dark} alt="" className='toggle_icon'/>
        

    </div>
  )
}

export default Navbar

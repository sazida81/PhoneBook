import React, { useState } from 'react'
import Navbar from './Components/NavBar/Navbar'
//import Sidebar from './Sidebar.js'
//import Backdrop from './Backdrop.js';
import Table from './Table.js';


const App = () => {
const [theme,setTheme] = useState('light');



  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Table />   
    </div>
  )
}

export default App

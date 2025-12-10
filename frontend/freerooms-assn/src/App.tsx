// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import navbarLogo from '../../assets/navbarLogo.png'
import searchLogo from '../../assets/search_24.png'
import './App.css'

function App() {

  return (
    <>
      <div className="flex border-b border-gray-300 justify-between items-center">
        <img src={navbarLogo} alt="navbar logo" className='w-1/8 ml-4 my-2'/>

        <div className="flex border border-[#f06c00] p-2 h-7/8 justify-center items-center mr-4">
          <img src={searchLogo} alt="search logo" className='w-full text-black'/>
          
        </div>
      </div>
    </>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import navbarLogo from '../../assets/navbarLogo.png'
import searchLogo from '../../assets/search_24.png'
import gridLogo from '../../assets/grid_view.png'
import mapLogo from '../../assets/map_24.png'
import darkLogo from '../../assets/dark_mode.png'
import './App.css'

function App() {

  return (
    <>
      <div className="flex border-b border-gray-300 justify-between items-center">
        <img src={navbarLogo} alt="navbar logo" className='w-1/8 ml-4 my-1.5'/>

        <div className="flex justify-center items-center gap-2 mr-6">
          <div className="border border-[#f06c00] p-1.5 h-7/8 rounded-sm">
            <img src={searchLogo} alt="search logo" className='w-full text-black'/>
          </div>
          <div className="border border-[#f06c00] bg-[#f06c00] p-1.5 h-7/8 rounded-sm">
            <img src={gridLogo} alt="grid logo" className='w-full text-black'/>
            
          </div>
          <div className="border border-[#f06c00] p-1.5 h-7/8 rounded-sm">
            <img src={mapLogo} alt="map logo" className='w-full text-black'/>
            
          </div>
          <div className="border border-[#f06c00] p-1.5 h-7/8 rounded-sm">
            <img src={darkLogo} alt="dark mode logo" className='w-full text-black'/>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App

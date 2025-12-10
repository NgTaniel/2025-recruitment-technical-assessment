// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import navbarLogo from '../../assets/navbarLogo.png'
import searchLogo from '../../assets/search_24.png'
import gridLogo from '../../assets/grid_view.png'
import mapLogo from '../../assets/map_24.png'
import darkLogo from '../../assets/dark_mode.png'
import filterAlt from '../../assets/filter_alt_24dp_F06C00_FILL1_wght400_GRAD0_opsz24.png'
import filterList from '../../assets/filter_list_24dp_F06C00_FILL1_wght400_GRAD0_opsz24.png'
import graySearch from '../../assets/search_24dp_9E9E9E_FILL1_wght400_GRAD0_opsz24.png'
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
      <div className="flex p-3 ml-2 justify-between mr-2 gap-3">
        <button className="flex py-1.5 px-4 border-2 border-[#f06c00] rounded-lg">
          <img src={filterAlt} alt="filter alt" className='w-full text-black'/>
          <p className="text-[#f06c00] font-medium px-4">
            Filters
          </p>
        </button>

        <button className="flex flex-[0.5] items-center border-2 border-gray-300 rounded-md">
          <img src={graySearch} alt="gray search bar" className='flex justify-center pl-3 py-2 pr-2 text-black'/>
          <p className="text-gray-400">
            Search for a building...
          </p>
        </button>

        <button className="flex py-1.5 px-4 border-2 border-[#f06c00] rounded-lg">
          <img src={filterList} alt="filter alt" className='w-full text-black'/>
          <p className="text-[#f06c00] font-medium px-4">
            Sort
          </p>
        </button>
      </div>
    </>
  )
}

export default App

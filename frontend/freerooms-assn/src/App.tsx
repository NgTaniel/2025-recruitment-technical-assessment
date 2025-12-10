// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import filterAlt from '../../assets/filter_alt_24dp_F06C00_FILL1_wght400_GRAD0_opsz24.png'
import filterList from '../../assets/filter_list_24dp_F06C00_FILL1_wght400_GRAD0_opsz24.png'
import graySearch from '../../assets/search_24dp_9E9E9E_FILL1_wght400_GRAD0_opsz24.png'
import './App.css'

import Navbar from '../components/Navbar'

function App() {

  return (
    <>
      <Navbar />

      {/* middle section */}
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

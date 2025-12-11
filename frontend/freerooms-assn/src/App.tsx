// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import filterAlt from '../../assets/filter_alt_24dp_F06C00_FILL1_wght400_GRAD0_opsz24.png'
import filterList from '../../assets/filter_list_24dp_F06C00_FILL1_wght400_GRAD0_opsz24.png'
import graySearch from '../../assets/search_24dp_9E9E9E_FILL1_wght400_GRAD0_opsz24.png'
import './App.css'

import Navbar from '../components/Navbar'
import buildingData from '../../data.json'
import greenDot from '../../assets/circle_24dp_4DAE53_FILL1_wght400_GRAD0_opsz24.png'

import agsm from '../../assets/agsm.webp'
import ainsworth from '../../assets/ainsworth.webp'
import anitab from '../../assets/anitab.webp'
import biosci from '../../assets/biologicalScience.webp'
import biosciWest from '../../assets/biologicalScienceWest.webp'
import blockhouse from '../../assets/blockhouse.webp'
import business from '../../assets/businessSchool.webp'
import civil from '../../assets/civilBuilding.webp'
import colombo from '../../assets/colombo.webp'
import cse from '../../assets/cseBuilding.webp'

function App() {
  const data = buildingData

  const buildingMap: Record<string, string> = {
    "./agsm.webp": agsm,
    "./ainsworth.webp": ainsworth,
    "./anitb.webp": anitab,
    "./biologicalScience.webp": biosci,
    "./biologicalScienceWest.webp": biosciWest,
    "./blockhouse.webp": blockhouse,
    "./businessSchool.webp": business,
    "./civilBuilding.webp": civil,
    "./colombo.webp": colombo,
    "./cseBuilding.webp": cse
  }

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

        <button className="flex flex-[0.575] items-center border-2 border-gray-300 rounded-md">
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

      {/* building section */}
      <div className="grid grid-cols-5 mx-4 my-1 gap-4">
        {data.map((item, index) => {
          const imageKey = item.building_picture || item.building_file;
          return (
            <div
              key={index}
              className="relative h-75 rounded-md overflow-hidden items-center"
              style={{
                backgroundImage: `url(${buildingMap[imageKey as keyof typeof buildingMap]})`,
                backgroundSize: 'cover',
                backgroundPosition: '60% center'
              }}
            >
              {/* <img 
                src={buildingMap[imageKey as keyof typeof buildingMap]} 
                alt={item.name} 
                className='w-full h-3/4 object-cover rounded-md mb-2'
              /> */}
              <div className="absolute right-2 top-2 bg-white py-2 px-2 rounded-xl flex items-center gap-2">
                <img src={greenDot} alt="green dot" className='w-1/10 ml-1'/>
                <p className="text-black font-semibold text-[10px] ">
                  {item.rooms_available} rooms available
                </p>
              </div>
                
              <div className="flex items-center justify-center">
                <h3 className="py-2.75 px-4 rounded-md bg-[#ef6c00] w-19/20 font-semibold text-sm absolute bottom-2 text-white">
                  {item.name}
                </h3>
              </div>
            </div>

          )
        })}
      </div>
    </>
  )
}

export default App

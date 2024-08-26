"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import pagani from "../../../public/pagani_utopia_01.jpg"

export default function CarModelComp({ carArray }) {
  //by Model
  const [carModel, setCarModel] = React.useState("")
  const [carModelId, setCarModelId] = React.useState("")

  //get by modelYear
  var [carYear, setCarYear] = React.useState(0)

  var genYears = []
  const year = new Date().getFullYear()

  //for to generate years
  {
    for (let i = 2015; i <= year; i++) {
      genYears.push(i)
    }
  }

  const handleCarInfo = (event) => {
    const selectedIndex = event.target.options.selectedIndex
    const carModelIdAtt =
      event.target.options[selectedIndex].getAttribute("car-id")
    setCarModelId(carModelIdAtt)

    const getCarModel = event.target.value
    console.log(getCarModel)
    setCarModel(getCarModel)
  }
  const handleCarYear = (event) => {
    const getYear = event.target.value
    console.log(getYear)
    setCarYear(getYear)
  }

  return (
    <div>
      <header className='pt-3 font-serif text-center text-2xl h-20 bg-zinc-800 text-white'>
        Car Dealer App
      </header>

      <h2>Vehicle Model: {carModel}</h2>
      <h2>Vehicle Year: {carYear}</h2>
      <div>
        <div className='static flex gap-x-8 w-1/2'>
          <label
            for='carModels'
            className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
          >
            Select model
          </label>
          <select
            id='carModels'
            onChange={(e) => handleCarInfo(e)}
            className='flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500'
          >
            <option value={"no car selected"}>-Select-</option>
            {carArray.map((car, index) => (
              <option key={index} car-id={car.MakeId} value={car.MakeName}>
                {car.MakeName}
              </option>
            ))}
          </select>
          <label
            for='carYears'
            className='block mb-2 text-md font-medium text-gray-900 dark:text-white'
          >
            Select Year
          </label>
          <select
            id='carYears'
            className='flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500'
            onChange={(e) => handleCarYear(e)}
          >
            <option>-Select-</option>
            {genYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {carModel.length !== 0 && carYear.length !== 0 && carYear !== 0 && (
            <Link
              href={`../result/${carModelId}/${carYear}`}
              className='border-2 bg-gray-500 border-red-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full'
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

"use client"

import * as React from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ResultsCarPage() {
  const params = useParams()
  const [cars, setCars] = React.useState([])
  const router = useRouter()

  //get by modelyear
  React.useEffect(() => {
    const getCarsByYear = async () => {
      try {
        const res = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${params.makeId}/modelyear/${params.carYear}?format=json`
        )
        const data = await res.json()
        if (res.ok) {
          const { Results } = data
          setCars(await Results)
          console.log(cars)
        }
      } catch (error) {
        console.log("Fetch Error")
        console.log(error.message)
      }
    }
    getCarsByYear()
  }, [])

  return (
    <main>
      <div
        id='carYears'
        className='pt-20 grid grid-cols-4 gap-4 justify-stretch bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        onChange={(e) => handleCarYear(e)}
      >
        {cars.map((carName, index) => (
          <div className='border-2 border-gray-300' key={index}>
            <h4>{carName.Make_Name} </h4>
            <h1>{carName.Model_Name}</h1>
          </div>
        ))}
      </div>
      <button
        className='fixed top-2 border-2 bg-gray-500 border-red-800 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-full'
        type='button'
        onClick={() => router.push("/")}
      >
        Return
      </button>
    </main>
  )
}

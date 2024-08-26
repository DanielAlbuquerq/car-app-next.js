import * as React from "react"
import CarModelComp from "./car-models"

const getCars = async () => {
  try {
    const res = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
    )
    const data = await res.json()
    if (res.ok) {
      const { Results } = data
      return Results
    }
  } catch (error) {
    console.log("Fetch Error")
    console.log(error.message)
  }
}

export default async function CarsModelsServ() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const cars = await getCars()

  return (
    <main>
      <div>
        <CarModelComp carArray={cars} />
      </div>
    </main>
  )
}

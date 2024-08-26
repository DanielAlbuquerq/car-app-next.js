import { Suspense } from "react"
import * as React from "react"
import CarsModelsServ from "./components/car-server"

export default function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <CarsModelsServ />
        </div>
      </Suspense>
    </main>
  )
}

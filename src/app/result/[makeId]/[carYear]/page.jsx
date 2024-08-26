import { Suspense } from "react"
import * as React from "react"
import ResultsCarPage from "./carYear-server"

export default function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          <ResultsCarPage />
        </div>
      </Suspense>
    </main>
  )
}

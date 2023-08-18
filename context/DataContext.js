import axios from "axios"
import { createContext, useContext, useEffect, useState } from "react"

const DataContext = createContext()

export const useData = () => {
  return useContext(DataContext)
}

export const DataProvider = ({ children }) => {
  const [stops, setStops] = useState([])

  const startLoadStops = (term) => {
    axios.get(`https://services.plataforma10.com/pcom/stops/stops/search?term=${term}`)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err))
  }


  return (
    <DataContext.Provider value={{
      startLoadStops,
      stops
    }}
    >
      {children}
    </DataContext.Provider>
  )
}
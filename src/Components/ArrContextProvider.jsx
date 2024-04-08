import { createContext } from "react"
import { useState } from "react"
const Arrcontext = createContext()

function ArrContextProvider(data){
    const [fav, setfav] = useState([])
  const [list, setlist] = useState([{ id: 1, name: "1. Bharath" }, { id: 2, name: "2. Nithin" }, { id: 3, name: "3. Simran" }, { id: 4, name: "4. Karthick" }, { id: 5, name: "5. Deepika" }])
    return(
        <Arrcontext.Provider value={{listone: [list, setlist], favone: [fav, setfav]}}>
          {data.children}
        </Arrcontext.Provider>
    )
}

export default ArrContextProvider
export {Arrcontext}
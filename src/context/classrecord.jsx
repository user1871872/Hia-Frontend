import { createContext, useContext, useState } from "react";
const GlobalContext = createContext();
const GlobalProvider = ({children}) => {
const [addstudent, setAddstudent] = useState([])

return(
    <GlobalContext.Provider value={{addstudent,setAddstudent}}>{children}</GlobalContext.Provider>
)
}
export const GlobalState = () => { return useContext(GlobalContext) }

export default GlobalProvider;
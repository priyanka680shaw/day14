import { createContext , useState } from "react"

export const UserContext = createContext();
function UserProvider({children}){
    //states
    const [expenceData , setExpenceData] = useState([]);
    const [remaning , setRemaning] = useState(2000);
    const[spent , setSpent] = useState(0);

    return(
        <>
            <UserContext.Provider value={{remaning , setRemaning , spent , setSpent , expenceData ,setExpenceData ,}}>
                {children}
            </UserContext.Provider>
        </>
    )
}
export default UserProvider;
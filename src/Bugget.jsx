import { useContext} from "react";
import { UserContext } from "./UserProvider";

function Bugget(){

    const bugget = 2000;
    //useContext
    const user  = useContext(UserContext);
    console.log("test", user)
   
    return(
        <>
        <div className="buggetContainer">
            <button>Bugget : {bugget}</button>
            <button>remaning : {user.remaning}</button>
            <button>Expence so far : {user.spent}</button>
        </div>
            
        </>
    )
}
export default Bugget;
import { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import AuthContext from "../Auth/AuthContect";

const PrivateRoute = ({children, ...rest})=>{
    const { user } = useContext(AuthContext)
    if(user === null){
        return(
            <Navigate to="/Loginform"/>
        )
    }
    return children
    // return(
    //     <Route {...rest}>{!authenticated ? <Navigate to="/"/>: children}</Route>
        
    // )
    
}
export default PrivateRoute;
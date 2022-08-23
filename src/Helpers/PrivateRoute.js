import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({children, ...rest})=>{
    const  authenticated =false;
    console.log('itworks the priver');
    if(!authenticated){
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
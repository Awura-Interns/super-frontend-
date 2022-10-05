import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const AuthContext = createContext();


export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(JSON.parse(localStorage.getItem("authTokens")).access)
      : null
  );

  const navigate = useNavigate();
  let loginUser = async (email,password) => {
   
    let response = await fetch("https://dev.api.superlink.awuraplc.org/api/token/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password
      }),
    });

    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      navigate("/admin-page/product");
    } else {
      alert("Something went wrong");
    }
  };

  // let loginUser = async (e) => {
  //   e.preventDefault();
  //   let response = await fetch("https://dev.api.superlink.awuraplc.org/api/token/", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: e.target.email.value,
  //       password: e.target.password.value,
  //     }),
  //   });

  //   let data = await response.json();

  //   if (response.status === 200) {
  //     setAuthTokens(data);
  //     setUser(jwt_decode(data.access));
  //     localStorage.setItem("authTokens", JSON.stringify(data));
  //     navigate("/admin-page");
  //   } else {
  //     alert("Something went wrong");
  //   }
  // };
  // user = jwt_decode(data.access)
  // setUser(user)
  // localstorage.setItem(.......)// continue this part
  // if(user.admin == true){
  // naviagate('to your admin url')
  // }



  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };



let refreshUser= async() =>{
  const refreshToken=JSON.parse(localStorage.getItem("authTokens")).refresh
  let response = await axios.request({
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },

    data: JSON.stringify({
      refresh: refreshToken,
      
    }),
    url:"https://dev.api.superlink.awuraplc.org/api/token/refresh/"
    
  });
  
  let data = await response.json();
    
  if (response.status === 200) {
    setAuthTokens(data);
    setUser(jwt_decode(data.access));
    localStorage.setItem("authTokens", JSON.stringify(data));
    alert("correctly working")
  } else {
    console.log(response)
  }
 
}
  let contextData = {
    user: user,
    loginUser: loginUser,
    logoutUser: logoutUser,
    refreshUser:refreshUser
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

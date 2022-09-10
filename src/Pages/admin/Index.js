import "../../Assets/admin/styles/IndexPage.css"
import "../../Assets/admin/styles/LoginForm.css"
import axios from "axios";
import { useEffect, useState } from 'react'



const index={
  fontWeight:"bold",
  fontSize:"4.5rem",
  fontFamily:"system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  marginTop: "4rem",
    marginLeft: "20rem",
    color: "rgb(2, 2, 56)"
 
  
}
const indexSpan={
  
  textDecoration:"none",
  fontSize:"5rem",
  fontWeight:"bolder",
 
  
}
const Index = () => {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
    useEffect(() => {
      setLoading(true)
      axios.request({
        method: 'get',
        headers: {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${JSON.parse(localStorage.getItem("authTokens")).access}`
        },
        url: 'https://dev.api.superlink.awuraplc.org/api/accounts/account/'
      }).then(res => {
        console.log(res.data)
     setUser(res.data)
      })
    }, [])
  
  return (

    <body> 
      <div className="landing_page">
<h1 style={index}>welcome <span style={indexSpan}>{user.email}</span> </h1>

      </div>

      
    </body>

  );
};
export default Index;
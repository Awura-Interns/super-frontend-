import "../../Assets/admin/styles/IndexPage.css"
import "../../Assets/admin/styles/LoginForm.css"
import axios from "axios";
import { useEffect, useState } from 'react'
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
<h1>welcome <span>{user.email}</span> </h1>

      </div>

      
    </body>

  );
};
export default Index;
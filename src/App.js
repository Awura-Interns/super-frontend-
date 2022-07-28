import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Landingpage from "./Pages/Landingpage"
import Profile from "./Pages/Profile"
import Signin from "./Pages/Signin"
import Signup from "./Pages/Signup"
import Account from "./Pages/Account"
import Cart from "./Pages/Cart"
import Cards from "./Components/Cards"
import SharedLayOut from "./Pages/SharedLayOut"
import '../src/Assets/styles/App.css';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<SharedLayOut/>} >
      <Route index element={<Landingpage/>}/>
      <Route path="Profile" element={<Profile/>}/>
      <Route path="Signin" element={<Signin/>}/>
      <Route path="Signup" element={<Signup/>}/>
      <Route path="Account" element={<Account/>}/>
      <Route path="Cart" element={<Cart/>}/>
      <Route path="Cards" element={<Cards/>}/>

    
    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;

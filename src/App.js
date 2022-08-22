import '../src/Assets/styles/App.css';
import {Routes, Route} from 'react-router-dom';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import MyOrder from './Pages/MyOrder';
import MyProfile from './Pages/MyProfile';
import SeeMore from './Pages/SeeMore';
import SharedLayout from './Pages/SharedLayout';
import SharedHomeLayout from './Pages/SharedHomeLayout';


function App() {
  return (
    <Routes>
    <Route path="/" element= {<SharedLayout/>}>
      <Route index element= {<Landing/>}/>
      <Route path="Home" element= {<SharedHomeLayout/>}>
        <Route index element= {<Home/>}/>
        <Route path="MyOrder" element= {<MyOrder/>}/>
        <Route path="MyProfile" element= {<MyProfile/>}/>
        <Route path="SeeMore" element= {<SeeMore/>}/>

      </Route>
    </Route>
    </Routes>
    
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './Pages/Add';
import EmployeeList from './Pages/EmployeeList'
import Index from './Pages/Index'
import Error from './Pages/Error'
import MyProfile from './Pages/MyProfile'
import OrderList from './Pages/OrderList'
import Cart from './Pages/Carts'
import SingleCart from './Pages/SingleCart'
import SharedCartLayout from './Pages/SharedCartLayout'
import ProducerList from './Pages/ProducerList'
import SharedLayout from './Pages/SharedLayout'
import NoPage from './Pages/NoPage'




import '../src/Assets/styles/App.css';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>

          <Route index element={<Index />} />

          <Route path="EmployeeList" element={<EmployeeList />} />
          <Route path="Add" element={<Add />} />
          <Route path="MyProfile" element={<MyProfile />} />
          <Route path="OrderList" element={<OrderList />} />
          <Route path="NoPage" element={<NoPage />} />
          <Route path="ProducerList" element={<ProducerList />} />



          <Route path="carts" element={<SharedCartLayout />} >

            <Route index element={<Cart />} />
            <Route path=':cartsId' element={<SingleCart />} />
          </Route>


          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

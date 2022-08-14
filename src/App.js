import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Add from './Pages/Add';
import EmployeeList from './Pages/EmployeeList'
import SingleEmployeeList from "./Pages/SingleEmployeeList"
import SharedEmployeeLayout from "./Pages/SharedEmployeeLayout"
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

import Supplier from "./Pages/Supplier"
import SingleSupplier from "./Pages/SingleSupplier"
import SharedSupplierLayout from "./Pages/SharedSupplierLayout"
import Delivery from "./Pages/Delivery"
import '../src/Assets/styles/App.css';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>

          <Route index element={<Index />} />

          <Route path="Delivery" element={<Delivery/>}/>
          <Route path="Supplier" element={<SharedSupplierLayout />}>
          <Route index element={<Supplier />} />
          <Route path=':SupplierId' element={<SingleSupplier />} />
          </Route>




          <Route path="EmployeeList" element={<SharedEmployeeLayout />}>
          <Route index element={<EmployeeList />} />
          <Route path=':EmployeeId' element={<SingleEmployeeList />} />
          </Route>


          <Route path="carts" element={<SharedCartLayout />} >

            <Route index element={<Cart />} />
            <Route path=':cartId' element={<SingleCart />} />
          </Route>




          <Route path="Add" element={<Add />} />
          <Route path="MyProfile" element={<MyProfile />} />
          <Route path="OrderList" element={<OrderList />} />
          <Route path="NoPage" element={<NoPage />} />
          <Route path="ProducerList" element={<ProducerList />} />





          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

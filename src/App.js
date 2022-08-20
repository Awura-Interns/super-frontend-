import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from './Pages/Add';
import EmployeeList from './Pages/EmployeeList'
import EmployeeForm from "./Pages/EmployeeForm"
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
import PrivateRoute from './Helpers/PrivateRoute'
// import {AuthProvider} from './Auth/AuthContect'
import Supplier from "./Pages/SupplierAdmin/Supplier"
import SupplierForm from "./Pages/SupplierAdmin/SupplierForm"
import SharedSupplierLayout from "./Pages/SupplierAdmin/SharedSupplierLayout"
import Delivery from "./Pages/Delivery"
import DeliveryForm from "./Pages/DeliveryForm"
import SharedDeliveryLayout from "./Pages/SharedDeliveryLayout"
import '../src/Assets/styles/App.css';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        {/* <AuthProvider> */}

        <Route path="/" element={
          <SharedLayout />
       
        }>

          <Route index element={<Index />} />

          <Route path="Delivery" element={<SharedDeliveryLayout />} >
              <Route index element={<Delivery />} />
               <Route path='DeliveryForm' element={<DeliveryForm />} />
          </Route>




          <Route path="Supplier" element={<SharedSupplierLayout />}>
            <Route index element={<Supplier />} />
            <Route path='SupplierForm' element={<SupplierForm />} />
          </Route>




          <Route path="EmployeeList" element={<SharedEmployeeLayout />}>
            <Route index element={<EmployeeList />} />
            <Route path='EmployeeForm' element={<EmployeeForm />} />
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
        {/* </AuthProvider> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

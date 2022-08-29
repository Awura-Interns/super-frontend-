import { Routes, Route } from 'react-router-dom';

import EmployeeList from './Pages/StaffEmployeeAdmin/EmployeeList'
import EmployeeForm from "./Pages/StaffEmployeeAdmin/EmployeeForm"
import SharedEmployeeLayout from "./Pages/StaffEmployeeAdmin/SharedEmployeeLayout"
import Index from './Pages/Index'
import Error from './Pages/Error'


import Cart from './Pages/CartAdmin/Carts'
import SingleCart from './Pages/CartAdmin/SingleCart'
import SharedCartLayout from './Pages/CartAdmin/SharedCartLayout'



import Producer from './Pages/ProducerListAdmin/Producer'
import ProducerForm from './Pages/ProducerListAdmin/ProducerForm'
import SharedProducerLayout from './Pages/ProducerListAdmin/SharedProducerLayout'

import SharedLayout from './Pages/SharedLayout'


import Supplier from "./Pages/StaffSupplierAdmin/Supplier"
import SupplierForm from "./Pages/StaffSupplierAdmin/SupplierForm"
import SharedSupplierLayout from "./Pages/StaffSupplierAdmin/SharedSupplierLayout"
import Delivery from "./Pages/StaffDeliveryAdmin/Delivery"
import DeliveryForm from "./Pages/StaffDeliveryAdmin/DeliveryForm"
import SharedDeliveryLayout from "./Pages/StaffDeliveryAdmin/SharedDeliveryLayout"
import '../src/Assets/styles/App.css';
import PrivateRoute from './Helpers/PrivateRoute'

import Loginform from './Pages/Loginform'
import { AuthProvider } from './Auth/AuthContect'

function App() {
  return (


    <AuthProvider>
      <Routes>
        <Route path="/Loginform" element={<Loginform />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<PrivateRoute><Index /></PrivateRoute>} />
         
          <Route path="Delivery" element={
            <PrivateRoute>
              <SharedDeliveryLayout />
            </PrivateRoute>
          } >
            <Route index element={<PrivateRoute><Delivery /></PrivateRoute>} />
            <Route path='DeliveryForm' element={<PrivateRoute><DeliveryForm /></PrivateRoute>} />
          </Route>
          <Route path="Supplier" element={<PrivateRoute><SharedSupplierLayout /></PrivateRoute>}>
            <Route index element={<PrivateRoute><Supplier /></PrivateRoute>} />
            <Route path='SupplierForm' element={<PrivateRoute><SupplierForm /></PrivateRoute>} />
          </Route>
          <Route path="EmployeeList" element={<PrivateRoute><SharedEmployeeLayout /></PrivateRoute>}>
            <Route index element={<PrivateRoute><EmployeeList /></PrivateRoute>} />
            <Route path='EmployeeForm' element={<PrivateRoute><EmployeeForm /></PrivateRoute>} />
          </Route>
          <Route path="Producer" element={<PrivateRoute><SharedProducerLayout /></PrivateRoute>}>
            <Route index element={<PrivateRoute><Producer /></PrivateRoute>} />
            <Route path='ProducerForm' element={<PrivateRoute><ProducerForm /></PrivateRoute>} />
          </Route>
          <Route path="carts" element={<PrivateRoute><SharedCartLayout /></PrivateRoute>} >
            <Route index element={<PrivateRoute><Cart /></PrivateRoute>} />
            <Route path=':cartId' element={<PrivateRoute><SingleCart /></PrivateRoute>} />
          </Route>
          
          
         
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </AuthProvider>

  );
}

export default App;

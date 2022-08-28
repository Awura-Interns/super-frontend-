import { Routes, Route } from 'react-router-dom';
import Add from './Pages/Add';
import EmployeeList from './Pages/EmployeeListAdmin/EmployeeList'
import EmployeeForm from "./Pages/EmployeeListAdmin/EmployeeForm"
import SharedEmployeeLayout from "./Pages/EmployeeListAdmin/SharedEmployeeLayout"
import Index from './Pages/Index'
import Error from './Pages/Error'

import OrderList from './Pages/OrderList'
import Cart from './Pages/CartAdmin/Carts'
import SingleCart from './Pages/CartAdmin/SingleCart'
import SharedCartLayout from './Pages/CartAdmin/SharedCartLayout'



import Producer from './Pages/ProducerListAdmin/Producer'
import ProducerForm from './Pages/ProducerListAdmin/ProducerForm'
import SharedProducerLayout from './Pages/ProducerListAdmin/SharedProducerLayout'

import SharedLayout from './Pages/SharedLayout'
import NoPage from './Pages/NoPage'

import Supplier from "./Pages/SupplierAdmin/Supplier"
import SupplierForm from "./Pages/SupplierAdmin/SupplierForm"
import SharedSupplierLayout from "./Pages/SupplierAdmin/SharedSupplierLayout"
import Delivery from "./Pages/DeliveryAdmin/Delivery"
import DeliveryForm from "./Pages/DeliveryAdmin/DeliveryForm"
import SharedDeliveryLayout from "./Pages/DeliveryAdmin/SharedDeliveryLayout"
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
          <Route path="NoPage" element={<PrivateRoute><NoPage /></PrivateRoute>} />
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
          <Route path="Add" element={<PrivateRoute><Add /></PrivateRoute>} />
          
          <Route path="OrderList" element={<PrivateRoute><OrderList /></PrivateRoute>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </AuthProvider>

  );
}

export default App;

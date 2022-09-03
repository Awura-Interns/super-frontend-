import { Routes, Route } from 'react-router-dom';
import EmployeeList from './Pages/StaffEmployeeAdmin/EmployeeList'
import EmployeeForm from "./Pages/StaffEmployeeAdmin/EmployeeForm"
import EmployeeEdit from "./Pages/StaffEmployeeAdmin/EmployeeEdit"
import SharedEmployeeLayout from "./Pages/StaffEmployeeAdmin/SharedEmployeeLayout"
import Index from './Pages/Index'
import Error from './Pages/Error'
import Cart from './Pages/Carts'
import Product from './Pages/ProducerListAdmin/ProductList'
import ProducerForm from './Pages/ProducerListAdmin/ProducerForm'
import SharedProducerLayout from './Pages/ProducerListAdmin/SharedProducerLayout'
import ProducerEdit from './Pages/ProducerListAdmin/ProducerEdit';
import SharedLayout from './Pages/SharedLayout'
import Supplier from "./Pages/StaffSupplierAdmin/Supplier"
import SupplierForm from "./Pages/StaffSupplierAdmin/SupplierForm"
import SupplierEdit from "./Pages/StaffSupplierAdmin/SupplierEdit"
import SharedSupplierLayout from "./Pages/StaffSupplierAdmin/SharedSupplierLayout"
import Delivery from "./Pages/StaffDeliveryAdmin/Delivery"
import DeliveryForm from "./Pages/StaffDeliveryAdmin/DeliveryForm"
import DeliveryEdit from "./Pages/StaffDeliveryAdmin/DeliveryEdit"
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
        <Route path="/admin-page" element={<SharedLayout />}>
          <Route index element={<PrivateRoute><Index /></PrivateRoute>} />
          <Route path="delivery" element={ <PrivateRoute><SharedDeliveryLayout /> </PrivateRoute>} >
            <Route index element={<PrivateRoute><Delivery /></PrivateRoute>} />
            <Route path='deliveryForm' element={<PrivateRoute><DeliveryForm /></PrivateRoute>} />
            <Route path='deliveryEdit/:id' element={<PrivateRoute><DeliveryEdit /></PrivateRoute>} />
          </Route>
          <Route path="supplier" element={<PrivateRoute><SharedSupplierLayout /></PrivateRoute>}>
            <Route index element={<PrivateRoute><Supplier /></PrivateRoute>} />
            <Route path='supplierForm' element={<PrivateRoute><SupplierForm /></PrivateRoute>} />
            <Route path='supplierEdit/:id' element={<PrivateRoute><SupplierEdit /></PrivateRoute>} />
          </Route>
          <Route path="employeeList" element={<PrivateRoute><SharedEmployeeLayout /></PrivateRoute>}>
            <Route index element={<PrivateRoute><EmployeeList /></PrivateRoute>} />
            <Route path='employeeForm' element={<PrivateRoute><EmployeeForm /></PrivateRoute>} />
            <Route path='employeeEdit/:id' element={<PrivateRoute><EmployeeEdit /></PrivateRoute>} />
          </Route>
          <Route path="product" element={<PrivateRoute><SharedProducerLayout /></PrivateRoute>}>
            <Route index element={<PrivateRoute><Product /></PrivateRoute>} />
            <Route path='productForm' element={<PrivateRoute><ProducerForm /></PrivateRoute>} />
            <Route path='productEdit/:id' element={<PrivateRoute><ProducerEdit /></PrivateRoute>} />
          </Route>
          <Route path="carts" element={<PrivateRoute><Cart/></PrivateRoute>} />         
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
export default App;

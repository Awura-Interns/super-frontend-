import { Routes, Route } from 'react-router-dom';
import EmployeeList from './Pages/admin/StaffEmployeeAdmin/EmployeeList'
import EmployeeForm from "./Pages/admin/StaffEmployeeAdmin/EmployeeForm"
import EmployeeEdit from "./Pages/admin/StaffEmployeeAdmin/EmployeeEdit"
import SharedEmployeeLayout from "./Pages/admin/StaffEmployeeAdmin/SharedEmployeeLayout"
import Index from './Pages/admin/Index'
import Error from './Pages/admin/Error'
import CartsAdmin from './Pages/admin/CartsAdmin'
import Product from './Pages/admin/ProducerListAdmin/ProductList'
import ProducerForm from './Pages/admin/ProducerListAdmin/ProducerForm'
import SharedProducerLayout from './Pages/admin/ProducerListAdmin/SharedProducerLayout'
import ProducerEdit from './Pages/admin/ProducerListAdmin/ProducerEdit';
import SharedLayoutAdmin from './Pages/admin/SharedLayoutAdmin'
import Supplier from "./Pages/admin/StaffSupplierAdmin/Supplier"
import SupplierForm from "./Pages/admin/StaffSupplierAdmin/SupplierForm"
import SupplierEdit from "./Pages/admin/StaffSupplierAdmin/SupplierEdit"
import SharedSupplierLayout from "./Pages/admin/StaffSupplierAdmin/SharedSupplierLayout"
import Delivery from "./Pages/admin/StaffDeliveryAdmin/Delivery"
import DeliveryForm from "./Pages/admin/StaffDeliveryAdmin/DeliveryForm"
import DeliveryEdit from "./Pages/admin/StaffDeliveryAdmin/DeliveryEdit"
import SharedDeliveryLayout from "./Pages/admin/StaffDeliveryAdmin/SharedDeliveryLayout"
import '../src/Assets/user/styles/App.css';
import PrivateRoute from './Helpers/admin/PrivateRoute'
// import Loginform from './Pages/Loginform'
import { AuthProvider } from './Auth/AuthContect'






import Landingpage from "./Pages/user/Landingpage";
import Profile from "./Pages/user/Profile";
import Signin from "./Pages/user/Signin";
import Signup from "./Pages/user/Signup";
import Help from "./Pages/user/Help";

import Home from "./Pages/user/Home";

import SharedLayOut from "./Pages/user/SharedLayOut";
import SharedHomeLayout from "./Pages/user/SharedHomeLayout";

import SingleCart from "./Pages/user/single-cart";
import Cart from "./Pages/user/cart";
import Chat from "./Pages/user/chat";
function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* <Route path="/Loginform" element={<Loginform />} /> */}
        <Route path="/admin-page" element={<SharedLayoutAdmin />}>
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
          <Route path="carts-admin" element={<PrivateRoute><CartsAdmin/></PrivateRoute>} />         
          <Route path="*" element={<Error />} />
        </Route>



        <Route path="/" element={<SharedLayOut />}>
        <Route index element={<Landingpage />} />
        <Route path="Home" element={<SharedHomeLayout />}>
          <Route index element={<Home />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Signin" element={<Signin />} />
          <Route path="cart" element={<Cart />} />
          <Route path="chat" element={<Chat />} />
          <Route path="Help" element={<Help />} />
          <Route path="Signup" element={<Signup />} />

          <Route path="products/:id" element={<SingleCart />} />

        </Route>
      </Route>


      </Routes>
    </AuthProvider>
  );
}

export default App;

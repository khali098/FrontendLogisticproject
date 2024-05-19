
import NotFound from '../Components/NotFound';
import CreatePage from '../Pages/Auth/Signup';
import ForgotPage from '../Pages/ForgotPage/Forgot';
import LoginPage from '../Pages/Auth/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ResetPage from '../Pages/ForgotPage/Reset/indext';

import InventoryPage from '../Pages/Home/Inventory';
// import SignupPage from './pages/Signup';
// import LoginPage from './pages/Login';

function AppRoutes() {
  return (
    <> 
     
    <BrowserRouter>
    
       <Routes>
           <Route path="/" element={<LoginPage/>}/>
           <Route path="/signup" element={<CreatePage/>}/>
           <Route path="/forgot" element={<ForgotPage/>}/>
           <Route path="/reset" element={<ResetPage/>}/>
           <Route path="/inventory" element={<InventoryPage/>}/>
           <Route path="*" element={<NotFound/>}/>
           {/* <Route path="/signup" element={<SignupPage/>} /> */}
       </Routes>
     </BrowserRouter></>
 
  
  );
}

export default AppRoutes;
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
// above imports are done to run js of bootstrap i.e,js implemented in elements of bootstrap such as arrow of carousal,etc.
import Home from "./screens/Home";
import Login from "./screens/Login";
import { CartProvider } from "./components/ContextReducer";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import Signup from "./screens/Signup";
import MyOrder from "./screens/MyOrder";

//Router->div->Routes->Route

function App() {
  return (
    <CartProvider>
      {/* this </CartProvider> is to add functionality to add items in My Cart ,this helps us to tell that dispatch and state is now global.->see in ContextReducer.js */}
    <Router>
      <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/Signup" element={<Signup/>}/>
        <Route exact path="/myOrder" element={<MyOrder/>}/>
      </Routes>
      </div>
    </Router>
    </CartProvider>
    
    );
}

export default App;

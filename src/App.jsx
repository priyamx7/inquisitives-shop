import './App.css';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom';
import ProductPage from "./Pages/Products"
import Cart from "./Pages/Cart"
import Wishlist from "./Pages/Wishlist"
import ecommlogo from '../src/images/ecommlogo.png'

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <div className="navLogoAndTitle">
        <Link to="/"><img className="logoImg" src={ecommlogo} alt="logo" /></Link>
        </div>
        <div className="navOptions">
        <Link className="navOption" to="/">PRODUCTS</Link>
        <Link className="navOption" to="wishlist">WISHLIST</Link>
        <Link className="navOption" to="cart">CART</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
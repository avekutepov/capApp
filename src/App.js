import {Link , BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About/About";
import {useState} from "react";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails";
import Users from "./components/Users/Users";
import './App.css'
import UserDetails from "./components/Users/UserDetails";

function App() {
    const [ phone , setPhone] = useState('+77051190835');


  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Домой</Link> &nbsp; | &nbsp;
          <Link to="/about">О нас</Link> &nbsp; | &nbsp;
          <Link to="/contacts">Контакты</Link> &nbsp; | &nbsp;
          <Link to="/products">Продукты</Link> &nbsp; | &nbsp;
          <Link to="/users">Пользователи</Link> &nbsp; | &nbsp;
        </nav>
          <span>
              phone: {phone}
          </span>
      </header>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contacts phoneNumber={phone}/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id/" element={<ProductDetails/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:id/" element={<UserDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;

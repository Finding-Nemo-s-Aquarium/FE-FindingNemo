import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './Sign/SignIn.jsx';
import SignUp from './Sign/SignUp.jsx';
import Home from './Home/Home.jsx';
import Shop from './Shop/Shop.jsx';
import Make from './Make/Make.jsx';
import Cart from './Cart/Cart.jsx';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shop" element={<Shop isLoggedIn={isLoggedIn} />} />
        <Route path="/make" element={<Make isLoggedIn={isLoggedIn} />} />
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/cart" element={<Cart isLoggedIn={isLoggedIn} />} />
      </Routes>
    </div>
  );
}

export default App;
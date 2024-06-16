import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import SignIn from './SignIn/SignIn.jsx';
import Home from './Home/Home.jsx';
import Shop from './Shop/Shop.jsx';
import Make from './Make/Make.jsx';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/shop" element={<Shop isLoggedIn={isLoggedIn} />} />
          <Route path="/make" element={<Make />} />
          <Route path="/" element={<Home isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </div>
  );
}

export default App;

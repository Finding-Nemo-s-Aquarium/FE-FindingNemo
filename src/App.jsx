import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';// eslint-disable-line no-unused-vars
import SignIn from './SignIn/SignIn.jsx';
import Home from './Home/Home.jsx';
import Shop from './Shop/Shop.jsx';
import Make from './Make/Make.jsx';
import './App.css';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/make" element={<Make />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
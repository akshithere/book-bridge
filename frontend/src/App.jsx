import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Borrow from './components/LendBook/Borrow';
import Lend from './components/LendBook/Lend';
import Store from './components/LendBook/Store';
import Home from './components/HomePage/Home';
import Navbar from './components/HomePage/Navbar';
import CreateSell from './components/Store/CreateSell';
import ReqRent from './components/Store/ReqRent';
import AvailableBooks from './components/Store/AvailableBooks';



function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Routes>
          
        <Route path="/" element={<Home />} />
          <Route path="/store/sell" element={<CreateSell />} />
          <Route path="/store/availablebooks" element={<AvailableBooks />} />
          <Route path="/store/rent" element={<ReqRent />} />
          <Route path="/login" element={<Lend />} />
          <Route path="/rent" element={<Borrow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

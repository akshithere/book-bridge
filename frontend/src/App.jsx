import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Borrow from './components/LendBook/Borrow';
import Lend from './components/LendBook/Lend';
import Store from './components/LendBook/Store';
import Home from './components/HomePage/Home';
import CreateSell from './components/Store/CreateSell';



function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Routes>
          
          <Route path="/store/createsell" element={<CreateSell />} />
          <Route path="/login" element={<Lend />} />
          <Route path="/rent" element={<Borrow />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// import './App.css';
import React from 'react'
import { Link , Route, Routes} from "react-router-dom";
import First from './pages/first';
import Second from './pages/second';

function App() {
  return (
    <div className="">
      <header>
         Route component remote
      </header>
      <div>
        <Link to="/first">First</Link> |{" "}
        <Link to="/second">Second</Link>
      </div>
      <Routes>
        <Route path="first" element={<First />} />
        <Route path="second" element={<Second />} />
      </Routes>
    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './Components/Details';
import Doctors from './Components/Doctors';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Slot from './Components/Slot';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clinic/:id" element={<Doctors />} />
        <Route path="/doctor/:id" element={<Slot />} />
        <Route path="/details/:id" element={<Details />} />

      </Routes>
    </div>
  );
}

export default App;

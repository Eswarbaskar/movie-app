import Addmovie from './Addmovie';
import './App.css';
import Movielist from './Movielist';
import {
  BrowserRouter, 
  Routes,
  Route,
  
} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='header'>
        
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movielist" element={<Movielist/>}/>
        <Route path="/addmovie" element={<Addmovie/>}/>
        
        </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;

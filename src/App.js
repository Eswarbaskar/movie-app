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
import Edit from './Edit';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className='header'>
        
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movielist" element={<Movielist/>}/>
        <Route path="/addmovie" element={<Addmovie/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
        
        </Routes>
       </div>
    </BrowserRouter>
  );
}

export default App;

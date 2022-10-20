import Addmovie from './Addmovie';
import './App.css';
import Movielist from './Movielist';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,

} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Edit from './Edit';
// import { UserProvider } from './Usercontext';
import Viewmovie from './Viewmovie';
import Delete from './Delete';
import Notfound from './Notfound';
export const apiUrl="https://634820b50b382d796c6a0c42.mockapi.io/movie-app/api" 


function App() {
  
    
  return (
    <BrowserRouter>
      <Navbar />
      {/* <UserProvider> */}
      <div className='header'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movielist" element={<Movielist />} />
          <Route path="/addmovie" element={<Addmovie />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/viewmovie/:id" element={<Viewmovie/>} />
          <Route path="/delete/:id" element={<Delete/>} />
          <Route path="/404" element={<Notfound/>} />
          <Route path="*" element={<Navigate replace to="/404"/>} />
        </Routes>
      </div>
      {/* </UserProvider> */}
    </BrowserRouter>
  );
}

export default App;

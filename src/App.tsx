import './App.css';
import {Routes, Route } from "react-router-dom";
import Home from './pages/Home/home';
import Favorite from './pages/Favorites/favorite';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className='wrapper'>
      <nav>
        <NavBar />
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
      
    </div>    
  )
}

export default App

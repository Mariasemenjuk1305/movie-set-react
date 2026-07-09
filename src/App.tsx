import './App.css';
import {Routes, Route } from "react-router-dom";
import {MovieProvider} from './contexts/MoviesContext.jsx'
import Home from './pages/Home/Home';
import Favorite from './pages/Favorites/Favorite';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className='wrapper'>
      <MovieProvider>
      <nav>
        <NavBar />
      </nav>
      <main>       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>       
      </main>
      </MovieProvider>
    </div>    
  )
}

export default App

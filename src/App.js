import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import ChronologyPage from "./pages/ChronologyPage/ChronologyPage"
import HousesPage from "./pages/HousesPage/HousesPage"
import DetailPage from "./pages/DetailPage/DetailPage"
import './App.scss';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/characters' element={<CharactersPage/>} />
        <Route path='/chronology' element={<ChronologyPage/>} />
        <Route path='/houses' element={<HousesPage/>} />
        <Route path='/detail/:name' element={<DetailPage/>} />
      </Routes>
      <nav className="c-nav">
        <Link to='/characters'>PERSONAJES</Link>      
        <Link to='/houses'>CASAS</Link>      
        <Link to='/chronology'>CRONOLOGIA</Link>      
      </nav>
    </Router> 
  );
}

export default App;

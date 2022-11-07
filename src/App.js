/* eslint-disable no-unused-vars */
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CharactersPage from "./pages/CharactersPage/CharactersPage";
import ChronologyPage from "./pages/ChronologyPage/ChronologyPage";
import HousesPage from "./pages/HousesPage/HousesPage";
import CharacterDetailPage from "./pages/CharacterDetailPage/CharacterDetailPage";
import HouseDetailPage from "./pages/HouseDetailPage/HouseDetailPage";
import { useTranslation } from "react-i18next";

import './App.scss';
import Languages from "./components/Languages/Languages";
import { useEffect } from "react";

function App() {
  const [t, i18n] = useTranslation('global');

  useEffect(() => {
    document.title = 'Game of Thrones';
  });
  
  return (
    <Router>
      <Languages />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/characters' element={<CharactersPage/>} />
        <Route path='/chronology' element={<ChronologyPage/>} />
        <Route path='/houses' element={<HousesPage/>} />
        <Route path='/characters/:name' element={<CharacterDetailPage/>} />
        <Route path='/houses/:name' element={<HouseDetailPage/>} />
      </Routes>
      <nav className="c-nav">
        <Link to='/characters'>{t('nav.characters')}</Link>
        <Link to='/houses'>{t('nav.houses')}</Link>      
        <Link to='/chronology'>{t('nav.chrono')}</Link>      
      </nav>
    </Router> 
  );
}

export default App;

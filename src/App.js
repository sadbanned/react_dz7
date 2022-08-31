// import { Routes } from 'react-router-dom'

import './App.css';
import AboutPage from './pages/aboutPage/AboutPage'
import MainPage from './pages/mainPage/MainPage'
import ContactsPage from './pages/contactsPage/ContactsPage';
import { Routes, Route } from 'react-router-dom'
import Menu from './components/menu/Menu';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import PortfolioPage from './pages/portfolioPage/PortfolioPage';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Footer></Footer>
      <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/contacts" element={<ContactsPage/>}/>
      <Route path="/portfolio" element={<PortfolioPage/>}/>

      </Routes>
    </div>
  );
}

export default App;

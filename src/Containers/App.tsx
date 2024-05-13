
import { Route, Routes } from 'react-router-dom';

import Home from '../Pages/Home';
import Header from './Header';
import AdvertisingComponent from '../Components/AdvertisingComponent';
import Login from '../Pages/Login';
import Footer from './Footer';
import Formulas from '../Pages/Formulas';
import Contact from '../Pages/Contact';

function App() {
  return (
    <>
      <AdvertisingComponent/>
      <Header/>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/forlmulas" element={<Formulas/>} />
            <Route path="/contact" element={<Contact/>} />

          </Routes>
          <Footer/>
    </>
  );
}

export default App;

import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Popular from './components/popular menu/Popular';
import Offer from './components/offer section/Offer';
import MenuPack from './components/menu pack/MenuPack';
import About from './components/about us/About';
import OurApp from './components/our app/OurApp';
import Footer from './components/footer/Footer';


import './App.css';
import 'remixicon/fonts/remixicon.css'

function App() {
  return (
    <>
    <Navbar/>
    <Header/> 
    <Popular/>
    <Offer/>
    <MenuPack/>
    <About/>
    <OurApp/>
    <Footer/>
    </>
  );
}

export default App;

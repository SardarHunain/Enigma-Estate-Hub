import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CompanyLogos from './components/CompanyLogos';
import Carousel from './components/Carousel';
import OurValues from './components/OurValues';
import ContactUs from './components/ContactUs';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Hero/>
      <CompanyLogos/>
      <Carousel/><br/>
      <OurValues/>
      <ContactUs/>
      <GetStarted/>
    </div>
  );
}

export default App;

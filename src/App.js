import './App.css';
import Contact from './Component/Contact/Contact';
import Experience from './Component/Experience/Experience';
import Footer from './Component/Footer/Footer';
import Intro from './Component/Intro/Intro';
import Navbar from './Component/Navbar/Navbar';
import Portfolio from './Component/Portfolio/Portfolio';
import Services from './Component/Services/Services';
import Testimonial from './Component/Testomonial/Testimonial';
import Works from './Component/Works/Works';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

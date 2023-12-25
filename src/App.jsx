import './main.scss'
import Navbar from './componant/navbar/Navbar';
import Hero from './componant/Hero/Hero';
import Parallax from './componant/parallax/Parallax';
import Services from './componant/services/Services';
import Protfolio from './componant/protfolio/Protfolio';
import Contact from './componant/contact/Contact';


const App = () => {
  return (
  <div>
            <section id='HomePage'>
              <Navbar />
              <Hero />
            </section>
            <section id='Services' className='Parallax'><Parallax type="services"/></section>
            <section style={{height:"auto"}}><Services /></section>
            <section id='portfolio' className='Parallax'><Parallax type="protfolio"/></section>
            <Protfolio />
            <section id='contact'>
              <Contact />
            </section>
  </div>);
};

export default App;

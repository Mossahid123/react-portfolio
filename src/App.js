
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Navber from './Components/Navber/Navber';
import Contact from './Components/Contact/Contact';
import AboutMe from './Components/About/AboutMe';
AOS.init();

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navber />
      <About />
      <Contact />
      <Projects />
      <Skills />
      <AboutMe />
    </main>
   
  );
}

export default App;

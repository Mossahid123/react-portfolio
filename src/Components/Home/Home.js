import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <About />
            <Contact />
            <Projects />
            <Skills />
        </div>
    );
};

export default Home;
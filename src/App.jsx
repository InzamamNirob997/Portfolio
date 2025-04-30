import React from 'react';
import styles from './App.module.css'; // Import styles and assign it to a variable
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero section/Hero';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className={styles.App}>
     <Navbar/>
     <Hero/>
     <About/>
     <Experience/>
     <Project/>
     <Contact/>
    </div>
  );
}

export default App;

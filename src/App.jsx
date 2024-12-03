
import { useContext } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ModeSwitch from './components/ModeSwitch'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { ThemeContext } from './context/ThemeContext'

function App() {

  const { theme } = useContext(ThemeContext);
  const darkMode = theme === "dark" ? "dark" : "";

  return (

    <div className={`${darkMode}`}>
      <div className='mode px-10 flex flex-col gap-4'>
        <ModeSwitch />
        <Header />
        <Hero />
        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </div>
    </div>

  );
}

export default App

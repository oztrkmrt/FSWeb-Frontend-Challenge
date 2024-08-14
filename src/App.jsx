
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/hero'
import ModeSwitch from './components/ModeSwitch'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Skills from './components/Skills'
import LanguageProvider from './context/LanguageContext'
import ThemeProvider from './context/ThemeContext'

function App() {


  return (
    <>
      <LanguageProvider>
        <ThemeProvider>
          <ModeSwitch />
          <Header />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </ThemeProvider>
      </LanguageProvider>
    </>
  )
}

export default App

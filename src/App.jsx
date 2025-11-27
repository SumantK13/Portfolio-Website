import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Education from "./components/Education"
import BeyondCode from "./components/BeyondCode"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {
  return (
    
    <div className='min-h-screen w-full bg-gradient-to-br from-neutral-100 to-neutral-200'>
      <Navbar/>
      <Header/>
      <Skills />
      <Projects/>
      <Education/>
      <BeyondCode/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App

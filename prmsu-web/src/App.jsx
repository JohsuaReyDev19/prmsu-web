
import './App.css'
import Home from './components/Home/Home'
import About from './components/about/About'
import Enroll from './components/enroll/Enroll'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Ourlocation from './components/ourlocation/Ourlocation'
import Testimonials from './components/testimonials/Testimonials'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <Testimonials/>
        <About/>
        <Enroll/>
        <Ourlocation/>
        <Footer/>
      </div>
    </>
  )
}

export default App

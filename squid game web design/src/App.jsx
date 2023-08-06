import {  useEffect} from 'react'
// import './App.css'
import Hero from './Components/Hero'
import Info from './Components/Info'
import Episodes from './Components/Episodes'
import Videos from './Components/Videos'
import Details from './Components/Details'
import Footer from './Components/Footer'
import scrollreveal from 'scrollreveal'

const App = () => {
  
  useEffect(() => {
    const sr = scrollreveal({
      origin: "bottom",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        #hero,
        #info,
        #episodes,
        #details,
        #videos,
        #footer
    `,
      {
        opacity: 0,
        margin:0,
        interval: 500,
      }
    );
  }, []);
  
  return (
    <>
    <Hero/>
    <Info/>
    <Episodes/>
    <Videos/>
    <Details/>
    <Footer/>
      
    </>
  )
}

export default App

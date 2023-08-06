import {  useEffect} from 'react'
// import './App.css'
import Hero from './Components/Hero'
import Info from './Components/Info'
import Episodes from './Components/Episodes'
import Videos from './Components/Videos'
import Details from './Components/Details'
import Footer from './Components/Footer'
import scrollreveal from 'scrollreveal'
import ScrollToTop from './Components/ScrollToTop'

const App = () => {

  useEffect(() => {
    const sr = scrollreveal({
      margin: '0',
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
        footer
        scrooltotop
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
    <ScrollToTop/>
    <Footer/>
      
    </>
  )
}

export default App

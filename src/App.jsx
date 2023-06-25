//useref hampir mirip penggunaan link
import { useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portofolio from './components/Portofolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  //semua untuk ref berawal dari sini
  const about = useRef();
  const portofolio = useRef();
  const hero = useRef();
  const contact = useRef();


  return (
    <div className=" bg-[url('./assets/BackGround.png')] w-full h-full overflow-y-auto">
      <Navbar hero={hero} about={about} portofolio={portofolio} contact={contact} />
      <Hero hero={hero} />
      <About about={about} />
      <Portofolio portofolio={portofolio} />
      <Contact contact={contact} />
      <Footer />
    </div>
  )
}

export default App

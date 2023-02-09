import { Advantage } from "../components/moleculus/advantage/Advantage"
import Footer from "../components/moleculus/footer"
import HeroHome from "../components/moleculus/home"
import { Navbar } from "../components/moleculus/navbar/Navbar"
import { useCallback, useState } from "react"

export default function Home() {
  const [isMenuHidden, setIsMenuHiden] = useState(true)
  const handleMenuHidden = useCallback(
    ()=>{
      setIsMenuHiden(prevState=>!prevState)
    },[isMenuHidden]
  )
  return (
    <div>
      <Navbar isMenuHidden={isMenuHidden} handleMenuHidden={handleMenuHidden}/>
      <HeroHome/>
      <Advantage/>
      <Footer/>
    </div>
  )
}

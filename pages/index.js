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
    </div>
  )
}

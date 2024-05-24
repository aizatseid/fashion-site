import { Logo } from "./Logo"
import logoImg from "../assets/images/header-logo.svg";
import { Navigation } from "./Navigation";
import { Usermenu } from "./Usermenu";


export const Header = (image) => {
  return(
      <header>
        <div className="container header">

        <Logo image={ logoImg } />
        
        <Navigation />

        <Usermenu />
  
      </div>
    </header>
  )
}
   
   

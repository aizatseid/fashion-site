import { MenuItem } from "./MenuItem";
import searchImg from "../assets/images/search.png";
import heartImg from "../assets/images/heart.png";
import cartImg from "../assets/images/cart.png";


export const Usermenu = (menuImg) => {
  return (
    <div className="user__menu">

    <MenuItem menuImg={searchImg}/>
    <MenuItem menuImg={heartImg}/>
    <MenuItem menuImg={cartImg}/>
    
    </div>
  );
};

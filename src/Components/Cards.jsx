import { Card } from "./Card";
import img1 from "../assets/images/card-img1.jpeg";
import img2 from "../assets/images/card-img2.jpeg";
import img3 from "../assets/images/card-img3.jpeg";
import img4 from "../assets/images/card-img4.jpeg";

export const Cards = () => {
  return (
    <div className="container">
      <h3 className="cards__title">WOMEN’S FASHION</h3>
      <p className="cards__p">Shop our new arrivals from established brands</p>
      <div className="cards">
        <Card 
        imgLink={img1} 
        title="GREEN MUSCLE FIT POLO SHIRT"
        oldPrice="$229.00" 
        price="$129.00" 
        />
        <Card 
        imgLink={img2} 
        title="GREEN MUSCLE FIT POLO SHIRT"
        oldPrice="$229.00"
        price="$129.00" 
        />
        <Card 
        imgLink={img3} 
        title="GREEN MUSCLE FIT POLO SHIRT"
        oldPrice="$229.00" 
        price="$129.00"
        />
        <Card imgLink={img4} 
        title="GREEN MUSCLE FIT POLO SHIRT"
        oldPrice="$229.00" 
        price="$129.00" 
        />
      </div>
    </div>
  );
};
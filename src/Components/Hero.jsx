import heroImg from "../assets/images/hero-img.jpeg";
import { Button } from "./Button";


export const Hero = () => {
  return (
    <div className="hero">
      <div>
        <img src={heroImg} alt="" className="hero__img" />
      </div>
      <div className="hero__text">
        <p className="upper__text">New trend</p>
        <h1 className="hero__title">COLLUSION</h1>
        <p className="undertitle">
          An exclusive selection of this season's trends.
        </p>
        <Button btnText="Discover" />
        <Button btnText="Shop now" />
      </div>
    </div>
  );
};
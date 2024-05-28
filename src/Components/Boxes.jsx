import axios from "axios";
import { useEffect, useState } from "react";


export const Boxes =() => {

  const [boxes, setBoxes] = useState([]);

  const getBoxes = async () => {
    const resp = await axios(
      "https://fakestoreapi.com/products"
    );
    console.log(resp);
    setBoxes(resp.data);
  }

  useEffect(() => {
    getBoxes();
  }, [])
    
  return (
    <div className="container">
      <div className="boxes">
        {boxes.map((el) => (
          <div className="box" key={el.id}>
            <div className="img__wrap">
              <img src={el?.image} alt="" />
            </div>
            <div className="box__descr">
              <p className="box__title">{el?.title}</p>
              <p className="box__price">{`$ ${el?.price}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
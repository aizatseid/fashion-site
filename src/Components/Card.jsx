export const Card = ({imgLink, title, oldPrice, price}) => {
  return (
    <div className="card">
      <div className="card__wrap">
        <img src={imgLink} alt="" className="card__img" />
      </div>
      <p className="card__p">IGURE</p>
      <h4 className="card__title"> {title} </h4>
      <span className="old__price"> {oldPrice} </span>
      <span className="card__price"> {price} </span>
    </div>
  );
};
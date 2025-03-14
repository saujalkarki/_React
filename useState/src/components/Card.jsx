import "./Card.css";

const Card = ({ cardNo }) => {
  return (
    <div className="divCard">
      <h1 className="h1Card">{`This is Card ${cardNo}.`}</h1>
      <p className="pCard">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem sequi
        necessitatibus magni corrupti provident repudiandae.
      </p>
    </div>
  );
};

export default Card;

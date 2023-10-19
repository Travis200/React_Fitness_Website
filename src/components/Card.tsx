import "bootstrap/dist/css/bootstrap.css";

const Card = () => {
  return (
    <div className="card text-bg-info" style={{ width: "18rem" }}>
      <img
        src="src\assets\images\kisspng-exercise-equipment-weight-training-dumbbell-sporti-dumbell-5ad0e1457a13d2.3771195315236385975001.png"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Bicep Curls</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          nihil doloribus debitis ipsum
        </p>
        <a href="#" className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;

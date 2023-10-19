import "bootstrap/dist/css/bootstrap.css";

const Card = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="src\assets\images\cartoon-crocodile-mascot-with-dumbbell-vector-5991004.webp"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;

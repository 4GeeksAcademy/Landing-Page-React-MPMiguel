// Card.jsx
import React from "react"
;

const Card = () => {
  return (
    <div className="card col-md-3 col-12 flex-wrap p-2 ">
      <img src="https://picsum.photos/id/237/500/325" className="card-img-top" alt="Rigo Baby" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Find out more!
        </a>
      </div>
    </div>
  );
};

export default Card;

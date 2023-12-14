import React, { useState } from "react";

const Tour = ({ item, removeTour }) => {
  const { id, name, info, image, price } = { ...item };
  const [toggle, setToggle] = useState(false);

  return (
    <div key={id} className="card">
      <div className="image_info image">
        <img src={image}></img>
      </div>
      <div className="image_info info">
        <p className="price">$ {price}</p>
        <h3 className="name">{name}</h3>
        <div className="info">
          <p>
            {toggle ? info : info.slice(0, 200)}
            <button className="read" onClick={() => setToggle(!toggle)}>
              {toggle ? "....Show Less" : "....Show More"}
            </button>
          </p>
        </div>
        <button className="btn not__interested" onClick={() => removeTour(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
};
export default Tour;

// Error -->when clicked on show more other div is going down that should not be effected

import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  console.log(image);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readMore ? info : info.substring(0, 100) + "..."}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show less" : "Read more"}
        </button>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not intrested
        </button>
      </footer>
    </article>
  );
};

export default Tour;

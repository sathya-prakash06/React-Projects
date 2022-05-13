import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, image, name, age } = person;
        return (
          <article className="person" key={id}>
            <img src={image} alt="" />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;

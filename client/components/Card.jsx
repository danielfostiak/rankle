import React from "react";

const Card = ({ item }) => {
  const { name, photoURL } = item;
  return (
    <div
      className="card w-20 h-20 bg-blue-500 mx-2"
      style={{ userSelect: "none" }}
    >
      {/* <img src={"photoURL"} alt={name} /> */}
      <h2>{name}</h2>
    </div>
  );
};

export default Card;

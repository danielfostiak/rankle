import React from "react";

const Card = ({ item }) => {
  const { name, photoUrl } = item;
  return (
    <div
      className="card bg-neutral shadow-xl mx-2 h-full w-40"
      style={{ userSelect: "none" }}
    >
      <figure className="w-full h-full">
        <img className="w-full h-full object-cover" src={photoUrl}></img>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
};

export default Card;

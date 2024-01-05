import React from "react";

const Card = ({ item }) => {
  const { name, photoUrl } = item;
  return (
    <div
      className="card bg-neutral shadow-xl max-w-xs"
      style={{ userSelect: "none" }}
    >
      <figure className="max-w-full h-auto">
        <img className="object-cover max-w-full h-auto" src={photoUrl}></img>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
};

export default Card;

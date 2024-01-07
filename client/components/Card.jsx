import React from "react";

const Card = ({ item }) => {
  const { name, photoUrl, status } = item;
  let color;

  if (status === "unknown") color = "neutral";
  else if (status === "correct") color = "primary";
  else color = "accent";

  return (
    <div
      className={`card bg-${color} shadow-xl max-w-xs`}
      style={{ userSelect: "none" }}
    >
      <figure className="max-w-full">
        <img className=" object-fit" src={photoUrl}></img>
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm">{name}</h2>
      </div>
    </div>
  );
};

export default Card;

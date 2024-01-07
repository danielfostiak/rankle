"use client";

import React from "react";
import Card from "./Card";

function List({ items }) {
  return (
    <div className="mx-auto">
      <ul className="flex list-none p-0 m-0">
        {items.map((item) => (
          <li className="flex text-center max-w-xs m-1">
            <Card item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;

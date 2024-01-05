"use client";

import React, { useState } from "react";
import List from "./components/List";
import Response from "./components/Response";

const dummyItems = [
  {
    id: "abcd",
    name: "Tom Hanks",
    photoUrl: "https://example.com/tom-hanks.jpg",
    height: 183,
  },
  {
    id: "efgh",
    name: "Jennifer Aniston",
    photoUrl: "https://example.com/jennifer-aniston.jpg",
    height: 164,
  },
  {
    id: "ijkl",
    name: "Leonardo DiCaprio",
    photoUrl: "https://example.com/leonardo-dicaprio.jpg",
    height: 183,
  },
  // Add more celebrity objects here
  {
    id: "mnop",
    name: "Brad Pitt",
    photoUrl: "https://example.com/brad-pitt.jpg",
    height: 180,
  },
  {
    id: "qrst",
    name: "Angelina Jolie",
    photoUrl: "https://example.com/angelina-jolie.jpg",
    height: 169,
  },
  {
    id: "uvwx",
    name: "Johnny Depp",
    photoUrl: "https://example.com/johnny-depp.jpg",
    height: 178,
  },
  {
    id: "yzab",
    name: "Scarlett Johansson",
    photoUrl: "https://example.com/scarlett-johansson.jpg",
    height: 160,
  },
  {
    id: "cdef",
    name: "Robert Downey Jr.",
    photoUrl: "https://example.com/robert-downey-jr.jpg",
    height: 174,
  },
  {
    id: "ghij",
    name: "Emma Watson",
    photoUrl: "https://example.com/emma-watson.jpg",
    height: 165,
  },
  {
    id: "klmn",
    name: "Chris Hemsworth",
    photoUrl: "https://example.com/chris-hemsworth.jpg",
    height: 191,
  },
];

const correctOrder = [...dummyItems].sort((a, b) => a.height - b.height);

function Game() {
  const [items, setItems] = useState(dummyItems);
  const [submitted, setSubmitted] = useState(false);
  const [submissions, setSumbissions] = useState(0);
  const [correctItemsCount, setCorrectItemsCount] = useState(0);

  function handleSubmit() {
    const count = items.reduce((acc, item, index) => {
      if (item.id === correctOrder[index].id) {
        return acc + 1;
      }
      return acc;
    }, 0);
    setSumbissions(submissions + 1);
    setCorrectItemsCount(count);
    setSubmitted(true);
  }

  return (
    <div>
      <List items={items} setItems={setItems} />
      {submitted && (
        <Response
          correctItemsCount={correctItemsCount}
          submissions={submissions}
        />
      )}
      <button onClick={handleSubmit} className="flex justify-center">
        Submit
      </button>
    </div>
  );
}

export default Game;

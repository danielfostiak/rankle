"use client";

import React, { useState } from "react";
import List from "./components/List";
import Nav from "./components/Nav";
import Response from "./components/Response";
// import { startWindToast } from "@mariojgt/wind-notify/packages/index.js";

const dummyItems = [
  {
    id: "abcd",
    name: "Tom Hanks",
    photoUrl:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1257937597.jpg",
    height: 184,
  },
  {
    id: "efgh",
    name: "Jennifer Aniston",
    photoUrl:
      "https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_FMjpg_UX1000_.jpg",
    height: 164,
  },
  {
    id: "ijkl",
    name: "Leonardo DiCaprio",
    photoUrl:
      "https://cdn.britannica.com/65/227665-050-D74A477E/American-actor-Leonardo-DiCaprio-2016.jpg",
    height: 183,
  },
  {
    id: "mnop",
    name: "Brad Pitt",
    photoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/1200px-Brad_Pitt_2019_by_Glenn_Francis.jpg",
    height: 180,
  },
  {
    id: "qrst",
    name: "Angelina Jolie",
    photoUrl:
      "https://m.media-amazon.com/images/M/MV5BODg3MzYwMjE4N15BMl5BanBnXkFtZTcwMjU5NzAzNw@@._V1_.jpg",
    height: 169,
  },
  {
    id: "uvwx",
    name: "Johnny Depp",
    photoUrl:
      "https://m.media-amazon.com/images/M/MV5BOTBhMTI1NDQtYmU4Mi00MjYyLTk5MjEtZjllMDkxOWY3ZGRhXkEyXkFqcGdeQXVyNzI1NzMxNzM@._V1_.jpg",
    height: 178,
  },
  {
    id: "yzab",
    name: "Scarlett Johannson",
    photoUrl:
      "https://hips.hearstapps.com/hmg-prod/images/scarlett-johansson-attends-the-premiere-of-illuminations-news-photo-1639390369.jpg",
    height: 160,
  },
  {
    id: "cdef",
    name: "Robert Downey Jr.",
    photoUrl:
      "https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_.jpg",
    height: 174,
  },
  {
    id: "ghij",
    name: "Emma Watson",
    photoUrl:
      "https://cdn.britannica.com/29/215029-050-84AA8F39/British-actress-Emma-Watson-2017.jpg",
    height: 165,
  },
  {
    id: "klmn",
    name: "Chris Hemsworth",
    photoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6MlkOymlKkXd-Mf85p1bnAabdBMBFALI_0ubsAn64g&s",
    height: 191,
  },
];

const correctOrder = [...dummyItems].sort((a, b) => a.height - b.height);

function Game() {
  const [items, setItems] = useState(dummyItems);
  const [submitted, setSubmitted] = useState(false);
  const [submissions, setSumbissions] = useState(0);
  const [playing, setPlaying] = useState(true);
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
    // startWindToast("Good stuff", "well done bruvva", "success", 5, "top");
    // if (count === 10) {
    //   setPlaying(false);
    // }
  }

  return (
    <div className="md:container md:mx-auto md:w-5/6">
      <Nav />
      <List items={items} setItems={setItems} />
      {submitted && (
        <Response
          correctItemsCount={correctItemsCount}
          submissions={submissions}
        />
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Game;

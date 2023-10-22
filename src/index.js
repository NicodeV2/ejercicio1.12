import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const Anecdota = ({ selected }) => {
  // console.log(anecdotes[selected]);
  return <div>{anecdotes[selected]} </div>;
};

const vote = (selected, points) => {
  //console.log("click");
  const copy = [...points];
  copy[selected]++;
  return copy; // Devuelve el nuevo array con la puntuación actualizada.
};

const TextVote = ({ selected, points }) => {
  return <div>Has {points[selected]} votes</div>;
};

const ButtonVote = ({ selected, points, setPoints }) => {
  // console.log("entro");
  return (
    <div>
      <button onClick={() => setPoints(vote(selected, points))}>Vote</button>
    </div>
  );
};

const ButtonPrev = ({ selected, setSelected }) => {
  return (
    <>
      <button
        disabled={selected <= 0}
        onClick={() => setSelected(selected - 1)}
      >
        previous anecdote
      </button>
    </>
  );
};

const ButtonNext = ({ selected, setSelected }) => {
  return (
    <>
      <button
        disabled={selected >= anecdotes.length - 1}
        onClick={() => setSelected(selected + 1)}
      >
        next anecdote
      </button>
    </>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));

  return (
    <div>
      <Anecdota selected={selected} />
      <TextVote selected={selected} points={points} />
      <ButtonVote selected={selected} points={points} setPoints={setPoints} />
      <div>
        <ButtonPrev selected={selected} setSelected={setSelected} />
        <ButtonNext selected={selected} setSelected={setSelected} />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

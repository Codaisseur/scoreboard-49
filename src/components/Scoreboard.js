import React, { useState } from "react";
import Player from "./Player";
import AddPlayerForm from "./AddPlayer";

export default function Scoreboard() {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  // incrementScore -> callback prop
  function incrementScore(playerId) {
    // console.log("I AM A CALLBACK PROP", playerId);
    const updatedPlayers = players.map(player => {
      // console.log("PLAYER:", player);
      if (player.id === playerId) {
        // console.log("UPDATE THIS PLAYER");
        // player.score = player.score + 1;
        // return player;
        return { ...player, score: player.score + 1 };
      } else {
        // console.log("DONT DO ANYTHING");
        return player;
      }
    });
    set_players(updatedPlayers);
  }

  // using a callback prop
  // function -> has access to setPlayer -> pass down as a prop to Player

  //const compareFunction = sort_by === "score" ? compare_score : compare_name;

  const players_sorted = [...players]; //.sort(compareFunction);

  // const change_sorting = event => {
  //   set_sort_by(event.target.value);
  // };

  const onCreateNewPlayer = newPlayerName => {
    // Now I have the name of the new player,
    // we need to create a player object from this:

    const newPlayer = { id: players.length + 1, name: newPlayerName, score: 0 };
    console.log("new player ready??", newPlayer);

    const updatedPlayers = [...players, newPlayer];
    set_players(updatedPlayers);
  };
  console.log("players", players);
  return (
    <div className='Scoreboard'>
      <h1>Scoreboard</h1>
      <p>
        {/* Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value='score'>Sort by score</option>
          <option value='name'>Sort by name</option>
        </select> */}
      </p>
      {players_sorted.map(player => {
        return (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
          />
        );
      })}
      <AddPlayerForm onCreateNewPlayer={onCreateNewPlayer} />
    </div>
  );
}

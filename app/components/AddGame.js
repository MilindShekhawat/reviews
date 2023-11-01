'use client'
import { ADD_GAME } from '../Apollo/mutations';

function AddGame() {
  const handleAddGame = async () => {
    try {
      const newGame = {
        title: "Baldur's Gate 3",
        platform: ["PS5","Xbox","PC"],
      }
      const data = await ADD_GAME(newGame);
      console.log("New game added", data.addGame);
    } catch(error) {
      console.log("Error in adding game: ", error)
    }
  }
  return (
    <div>
      <button onClick={handleAddGame}>Add New Game</button>
    </div>
  );
}

export default AddGame;

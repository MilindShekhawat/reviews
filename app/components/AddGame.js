'use client'
import { ADD_GAME } from '../Apollo/mutations';

function AddGame() {
  const handleAddGame = async () => {
    try {
      const newGame = {
        title: "Path of Exile 2",
        platform: ["PC", "PS5"],
      }
      const data = await ADD_GAME(newGame);
      console.log("New game added", data.addGame);
    } catch(error) {
      console.log("Error in adding game: ", error)
    }
  }
  return (
    <div>
      <button onClick={handleAddGame} className='bg-black font-bold text-3xl border-2 rounded-r-sm px-5 py-2 border-black text-neutral-100'>Add New Game</button>
    </div>
  );
}

export default AddGame;

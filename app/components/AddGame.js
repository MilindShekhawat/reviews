'use client';
import { ADD_GAME } from '../Apollo/mutations';

function AddGame() {
    const handleAddGame = async () => {
        try {
            const newGame = {
                title: 'Path of Exile 2',
                platform: ['PC', 'PS5'],
            };
            const data = await ADD_GAME(newGame);
            console.log('New game added', data.addGame);
        } catch (error) {
            console.log('Error in adding game: ', error);
        }
    };
    return (
        <div>
            <button
                onClick={handleAddGame}
                className='px-5 py-2 text-3xl font-bold bg-black border-2 border-black rounded-r-sm text-neutral-100'>
                Add New Game
            </button>
        </div>
    );
}

export default AddGame;

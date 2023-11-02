import Games from './components/Games';
import {GET_GAMES} from './Apollo/queries';
import AddGame from './components/AddGame';

async function Home() {
  const {games} = await GET_GAMES();
  console.log("Getting", games)
  return (
    <div>
      <Games games={games} />
      <AddGame />
    </div>
  );
}

export default Home;

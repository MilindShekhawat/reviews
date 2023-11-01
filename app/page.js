import AddGame from './components/AddGame';
import Games from './components/Games';
import Reviews from './components/Reviews';
import {GET_GAMES} from './Apollo/queries';

async function Home() {
  const {games} = await GET_GAMES();
  return (
    <div>
      <Games games={games} />
    </div>
  );
}

export default Home;

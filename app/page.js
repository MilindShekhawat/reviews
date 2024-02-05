import Games from './components/Games';
import { GET_GAMES } from './Apollo/queries';

async function Home() {
    const { games } = await GET_GAMES();
    console.log('Getting', games);
    return (
        <div>
            <Games games={games} hello={'Hello'} />
        </div>
    );
}

export default Home;

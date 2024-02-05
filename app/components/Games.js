'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import path from '../img/path of exile.jpg';
import destiny from '../img/destiny 2 lightfall.jpg';
import baldur from "../img/baldur's gate 3.jpg";
import evil from '../img/resident evil 4.jpg';
import elden from '../img/elden ring.jpg';
import rubicon from '../img/armored core 6.jpg';
import diablo from '../img/diablo 4.jpg';
import starfield from '../img/starfield.jpg';
import AddGame from './AddGame';

function GameList(props) {
    console.log(`Queried Data ${props.games}`);
    const router = useRouter();
    function handleClick(id, title) {
        const slug = title
            .replaceAll(/[^a-zA-Z0-9 ]/g, '')
            .replaceAll(' ', '-')
            .toLowerCase();
        console.log(slug);
        router.push(`../${id}/${slug}`);
    }
    function imageSelector(id) {
        const images = [
            ,
            path,
            destiny,
            baldur,
            evil,
            elden,
            rubicon,
            diablo,
            starfield,
        ];
        return images[id];
    }
    return (
        <div className='flex flex-col'>
            {/* <div className='flex items-center'>
                <h1 className='px-5 py-2 text-3xl font-bold border-2 border-black rounded-l-sm'>
                    Games
                </h1>
                <AddGame />
            </div>
            <ul className='flex flex-wrap gap-3 my-5'>
                {props.games.map((game) => (
                    <li
                        key={game.id}
                        onClick={() => handleClick(game.id, game.title)}
                        className='relative w-[256px] aspect-card rounded-sm'>
                        <Image
                            src={imageSelector(game.id)}
                            width={2000}
                            height={3000}
                            className='object-contain rounded-sm'
                            alt='game cover'
                        />
                        <div className='absolute bottom-0 left-0 right-0 p-5 rounded-sm bg-gradient-to-t via-black from-black'>
                            <ul className='flex flex-wrap gap-x-1 h-[40px] text-sm content-end'>
                                {game.platform.map((plat) => (
                                    <li
                                        key={plat}
                                        className='w-max text-neutral-200'>
                                        {plat}
                                    </li>
                                ))}
                            </ul>
                            <h1 className='mt-3 text-xl font-bold h-14 text-neutral-100'>
                                {game.title}
                            </h1>
                        </div>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}

export default GameList;

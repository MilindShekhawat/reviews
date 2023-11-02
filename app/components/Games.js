'use client'
import { useRouter } from "next/navigation"
import Image from "next/image";
import brief from '../img/briefcase.png'

function GameList(props) {
  console.log("Queried Data", props.games);
  const router = useRouter();
  function handleClick(id, title) {
    const slug = title.replaceAll(/[^a-zA-Z0-9 ]/g,"").replaceAll(' ', '-').toLowerCase()
    console.log(slug);
    router.push(`../${id}/${slug}`)
  }

  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-3xl my-3'>Games</h1>
      <ul className='flex flex-wrap gap-3'>
        {props.games.map((game) => (
          <li key={game.id} onClick={() => handleClick(game.id, game.title)} 
          className='relative w-[256px] aspect-card'>
            <Image src=''width={2000} height={3000} className="object-cover" alt=""/>
            <div className='p-5 absolute bottom-0 left-0 right-0 bg-gradient-to-t via-black from-black rounded-sm'>
              <ul className='flex flex-wrap gap-x-1 h-[40px] text-sm content-end'>
                {
                  game.platform.map((plat) => (
                    <li key={plat} className="w-max text-neutral-200">{plat}</li>
                  ))
                }
              </ul>
              <h1 className='font-bold text-xl mt-3 h-14 text-neutral-100'>{game.title}</h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;

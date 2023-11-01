'use client'
import { useRouter } from "next/navigation"

function GameList(props) {
  //console.log("Queried Data", props.games);
  const router = useRouter();
  function handleClick(id, title) {
    const slug = title.replaceAll(/[^a-zA-Z0-9 ]/g,"").replaceAll(' ', '-').toLowerCase()
    console.log(slug);
    router.push(`../${id}/${slug}`)
  }

  return (
    <div className='flex flex-col'>
      <h1 className='font-bold text-3xl my-3'>Games</h1>
      <ul className='flex gap-3'>
        {props.games.map((game) => (
          <li key={game.id} onClick={() => handleClick(game.id, game.title)} className='w-64 px-5 py-3 border-2 border-blue-600 rounded-md'>
            <h1 className='font-bold text-xl mb-3'>{game.title}</h1>
            <ul className='flex gap-3'>
              {
                game.platform.map((plat) => (
                  <li key={plat}>{plat}</li>
                ))
              }
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;

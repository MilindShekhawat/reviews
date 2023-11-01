import React from 'react'
import Reviews from '../components/Reviews'
import { GET_REVIEWS_BY_GAME } from '@/app/Apollo/queries';

async function page({params}) {
  const {game} = await GET_REVIEWS_BY_GAME(params.reviews[0]); 
  //console.log(params.reviews[0]);
  //console.log(game);
  return (
    <div>
      <Reviews game={game} />
    </div>
  )
}
export default page;

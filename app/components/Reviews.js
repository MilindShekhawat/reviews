import React from 'react'
import HomeButton from './HomeButton';

export default function Reviews(props) {
  console.log(props);
  function getReviewType(rating) {
    if (rating >= 0 && rating <= 4) {
      return 'text-slate-50 bg-red-500'
    } else if (rating >= 5 && rating <= 7) {
      return 'bg-yellow-500'
    } else if (rating >= 8 && rating <= 10) {
      return 'bg-green-500'
    }
  }
  return (
    <div className='flex-1 mr-auto'>
      <HomeButton />
      <h1 className='font-bold text-3xl my-3'>{props.game.title}</h1>
      <ul className='flex flex-col gap-5'>
        {props.game.reviews.map((review) => (
          <li key={review.id} className='flex flex-col gap-4 px-5 py-3 bg-gray-200 rounded-md'>
            <div className='flex gap-5 items-center'>
              <div className={`flex justify-center items-center w-16 h-16 rounded-full ${getReviewType(review.rating)}`}>
                <span className='font-bold text-4xl'>{review.rating}</span>
              </div>
              <h1 className='font-bold text-2xl'>{review.author.name}</h1>
              {review.author.verified ?
                <span className='text-sm font-light bg-green-700 text-gray-50 px-2 py-1 rounded-full'>verified</span> :
                ''
              }
            </div>
            <span>{review.content}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

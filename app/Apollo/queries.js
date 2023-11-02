import { gql } from '@apollo/client'
import client from './apolloClient'

export async function GET_GAMES() {
  const {data} = await fetch('http://localhost:4000/', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `#graphql
        query GetGames {
          games { 
            id
            title
            platform
          }
        }
      `,
    }),
    next: { revalidate: 10 },
  }).then((data) => data.json());
  console.log("Sending ", data)
  return data;
}

export async function GET_REVIEWS() {
  const {data} = await fetch('http://localhost:4000/', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `#graphql
        query GetReviews {
          reviews {
          game {
            title
          }
          id
          author {
            id
            name
            verified
          }
          content
          rating
          }
        }
      `,
    }),
    next: { revalidate: 10 },
  }).then((data) => data.json());
  console.log("Sending ", data)
  return data;
}

export async function GET_REVIEWS_BY_GAME(id) {
  const {data} = await fetch('http://localhost:4000/', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `#graphql
        query Game($gameId: ID!) {
        game(id: $gameId) {
          id
          title
          reviews {
            id
            author {
              id
              name
              verified
            }
            content
            rating
          }
        }
      }
      `,
      variables: {gameId: id},
    }),
    next: { revalidate: 10 },
  }).then((data) => data.json());
  console.log("Sending ", data)
  return data;
}


import { gql } from '@apollo/client'
import client from './apolloClient'

export async function GET_GAMES() {
  const data = await client.query({
    query: gql`
      query GetGames {
        games {
          id
          title
          platform
        }
      }
    `
  })
  return data.data;
}
export async function GET_REVIEWS() {
  const data = await client.query({
    query: gql`
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
    `
  })  
  return data.data;
}
export async function GET_REVIEWS_BY_GAME(id) {
  const data = await client.query({
    query: gql`
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
  })
  return data.data;
}

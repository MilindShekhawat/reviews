import { gql } from '@apollo/client'
import client from './apolloClient'

export async function ADD_GAME(gameInput) {
  const data = await client.mutate({
    mutation: gql`
      mutation AddGame($game: AddGameInput) {
        addGame(game: $game) {
          title
          platform
        } 
      }
    `,
    variables: {game: gameInput},
  })
  return data.data;
}
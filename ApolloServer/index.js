import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./db.js";

const resolvers = {
  Query: {
    games() {
      return db.games
    },
    authors() {
      return db.authors
    },
    reviews() {
      return db.reviews
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id)
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id)
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id)
    }
  },
  Game: {
    reviews(parent) {
      return db.reviews.filter((review) => review.game_id === parent.id)
    }
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.author_id === parent.id)
    }
  },
  Review: {
    game(parent) {
      return db.games.find((game) => game.id === parent.game_id)
    },
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id)
    },
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter((game) => game.id != args.id)
      return db.games
    },
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString()
      }
      db.games.push(game)
      return game
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: 'http://localhost:3000', // Specify the origin (e.g., your Next.js app)
    credentials: true, // Enable credentials (e.g., cookies, authorization headers)
  },
})

const { url } = await startStandaloneServer(server, {
  listen: {port: 4000}
})

console.log("Server ready at ", url)
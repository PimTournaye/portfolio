import { json } from '@sveltejs/kit'
import { gql, GraphQLClient } from 'graphql-request'

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
// eslint-disable-next-line no-unused-vars
export async function GET({ url }) {
  const hygraph = new GraphQLClient(
    import.meta.env.VITE_GRAPHQL_ENDPOINT,
    {
      headers: {},
    }
  )

  const query = gql`
    query Skills {
      skills {
      name
      category
      text
      level
      icon {
        url
      }
    }
  }
  `

  const { skills } = await hygraph.request(query)

  return json({ skills })
}
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
    query Projects {
			projects {
				slug
				title
				short
				tags
				year
				image {
					url(transformation: { image: { resize: { fit: clip, width: 500, height: 400 } } })
				}
			}
		}
  `

  const { projects } = await hygraph.request(query)

  return json({ projects })
}
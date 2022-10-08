import { json } from '@sveltejs/kit'
import { gql, GraphQLClient } from 'graphql-request'

/** @type {import('./$types').RequestHandler} */
export async function GET({ params }) {
  const hygraph = new GraphQLClient(
    import.meta.env.VITE_GRAPHQL_ENDPOINT,
    {
      headers: {},
    }
  )

  const query = gql`
        query Project($slug: String!) {
            project(where: { slug: $slug }) {
                title
                short
                tags
                description {
                  html
                }
                demo
                sourceCode
                year
                image {
                    url
                }
            }
        }
    `

  const variables = {
    slug: params.slug
  }

  const { project } = await hygraph.request(query, variables)

  return json({ project })
};
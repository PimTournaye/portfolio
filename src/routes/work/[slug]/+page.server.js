import { gql } from 'graphql-request'
import { hygraph } from '$lib/data/hygraph.js';


/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    // Get the slug from the URL
   const { slug } = params;

    // Fetch the page data from the API
    const query = gql`
        query Project($slug: String!) {
            project(where: { slug: $slug }) {
                title
                short
                tags
                description {
                  html
                }
                button {
                  buttonName
                  url
                }
                year
                image {
                    url
                }
            }
        }
    `

    const { project } = await hygraph.request(query, { slug })

    return {
        project
    }

};
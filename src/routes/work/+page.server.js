import { json } from '@sveltejs/kit';
import { gql } from 'graphql-request';
import { hygraph } from '$lib/data/hygraph.js';

/** @type {import('./$types').PageServerLoad} */
export async function load() {

  const query = gql`
    query Projects {
			projects {
				slug
				title
				short
				tags
				year
				image {
          url
				}
			}
		}
  `

  const { projects } = await hygraph.request(query);
  return {
    projects
  }
};
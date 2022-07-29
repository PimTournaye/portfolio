import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const GET = async () => {
	try {
		const query = gql`
			query Projects {
				projects {
					slug
					name
					short
					tags
					image {
						url(transformation: { image: { resize: { fit: clip, width: 500, height: 400 } } })
					}
				}
			}
		`;

		const { projects } = await client.request(query);

		return {
			status: 200,
			body: { projects }
		};
	} catch (error) {
		return {
			status: 500,
			body: { error }
		};
	}
};

import { client } from '$lib/graphql-client';
import { gql } from 'graphql-request';

export const get = async () => {
	try {
		const query = gql`
			query Blogs {
				blogs {
					slug
					title
					short
					image {
						url(transformation: { image: { resize: { fit: clip, width: 500, height: 400 } } })
					}
				}
			}
		`;

		const { blogs } = await client.request(query);

		return {
			status: 200,
			body: { blogs }
		};
	} catch (error) {
		return {
			status: 500,
			body: { error }
		};
	}
};

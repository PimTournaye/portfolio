import { HoudiniClient } from '$houdini';

async function fetchQuery({
	fetch,
	text = '',
	variables = {},
	metadata
}) {
	const url = import.meta.env.VITE_GRAPHQL_ENDPOINT || 'https://api-eu-central-1.hygraph.com/v2/ckxlpg27z4bcj01xpbrehcs3y/master';
	const result = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: text,
			variables
		})
	});
	return await result.json();
}

export default new HoudiniClient(fetchQuery);

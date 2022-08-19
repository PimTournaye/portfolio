
import { GQL_Project } from '$houdini';
import type { LoadEvent } from '@sveltejs/kit';

export let variables: any;

export async function load(event: LoadEvent) {
	const variables = { slug: event.params.slug as string };
	await GQL_Project.fetch({ event, variables });
	return { variables };
}

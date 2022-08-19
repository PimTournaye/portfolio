
import { browser } from '$app/env';
import { GQL_Project } from '$houdini';
import type { LoadEvent } from '@sveltejs/kit';
import Project from '$lib/components/Project/Project.svelte';

throw new Error("@migration task: Check if you need to migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export async function load(event: LoadEvent) {
	const variables = { slug: event.params.slug };
	await GQL_Project.fetch({ event, variables });
	return { variables };
}

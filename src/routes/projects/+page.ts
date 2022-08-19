
import { GQL_Projects } from '$houdini';
import Projects from '$lib/components/Project/Projects.svelte';
import type { LoadEvent } from '@sveltejs/kit';

throw new Error("@migration task: Check if you need to migrate the load function input (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693)");
export async function load(event: LoadEvent) {
	await GQL_Projects.fetch({ event });
	return {};
}

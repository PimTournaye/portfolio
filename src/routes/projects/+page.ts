import { GQL_Projects } from '$houdini';
import { type LoadEvent } from '@sveltejs/kit';

export async function load(event: LoadEvent) {
  await GQL_Projects.fetch({ event });
  return {};
}


throw new Error("Check status on this PR: https://github.com/HoudiniGraphql/houdini/pull/449");
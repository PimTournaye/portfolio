import { GQL_Projects } from '$houdini';
import type { LoadEvent } from '@sveltejs/kit';

export async function load(event: LoadEvent) {
  await GQL_Projects.fetch({ event });
  return {};
}

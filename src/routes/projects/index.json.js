import { GQL_Projects } from '$houdini'

export const GET = async () => {
  try {

	const { data } =  await GQL_Projects.fetch();
	const projects = data.projects;

	return {
		status: 200,
		body: { projects }
	}
  } catch (error) {
	return {
		status: 500,
		body: { error }
	}
  }
}
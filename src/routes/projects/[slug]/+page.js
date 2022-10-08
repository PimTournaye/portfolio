export async function load({ params }) {
    const { slug } = params
    const { project } = await fetch(`/projects/${slug}.json`).then(res =>
      res.json()
    )
    return {
      project,
    }
  }
  
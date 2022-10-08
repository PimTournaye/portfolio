export async function load({ fetch }) {
    const { projects } = await fetch('/projects.json').then(res =>
      res.json()
    )
    return {
      projects,
    }
  }
  
/** @type {import('houdini').ConfigFile} */
const config = {
    "schemaPath": "./schema.graphql",
    "sourceGlob": "src/**/*.{svelte,gql,graphql}",
    "apiUrl": process.env.VITE_GRAPHQL_URL
    //"apiUrl": import.meta.env.VITE_GRAPHQL_URL
}

export default config;

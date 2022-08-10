import { GraphQLClient } from 'graphql-request';
const URL = import.meta.env.VITE_GRAPHQL_URL;
const TOKEN = import.meta.env.VITE_SECRET_TOKEN;

export const client = new GraphQLClient(URL, {
    headers: { Autherization: `Bearer ${TOKEN}` }
});

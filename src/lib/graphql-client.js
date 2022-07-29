import { GraphQLClient } from 'graphql-request';
const URL = import.meta.env.GRAPHCMS_URL;

export const client = new GraphQLClient(URL);

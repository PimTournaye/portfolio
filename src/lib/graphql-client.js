import { GraphQLClient } from 'graphql-request';
const URL = process.env['GRAPHCMS_URL'];

export const client = new GraphQLClient(URL);

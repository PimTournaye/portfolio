import { GraphQLClient } from 'graphql-request'
import { HYGRAPH_ENDPOINT } from '$env/static/private'

export const hygraph = new GraphQLClient(HYGRAPH_ENDPOINT)
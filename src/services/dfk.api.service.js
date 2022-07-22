import { GraphQLClient, gql } from 'graphql-request'

// const apiv5_endpoint = 'http://graph3.defikingdoms.com/subgraphs/name/defikingdoms/apiv5'
const apiv6_endpoint = 'https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql'

export const DfkApi = {
    get: async query => {
        const options = { headers: { 'Content-Type': 'application/json' } }
    
        // Create a new GQL Client
        const graphQLClient = new GraphQLClient(apiv6_endpoint, options)
    
        return await graphQLClient.request(gql`${query}`)
    }    
}

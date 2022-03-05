// First we need to require our GraphQL Package
import { GraphQLClient, gql } from 'graphql-request'

const getAuctionData = async (type = 'sale', take = 50, skip = 0) => {
  // Then define our endpoint URL
  //const apiv5_endpoint = 'http://graph3.defikingdoms.com/subgraphs/name/defikingdoms/apiv5'
  const apiv6_endpoint = 'https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql'

  const options = { headers: { 'Content-Type': 'application/json' } }

  // Create a new GQL Client
  const graphQLClient = new GraphQLClient(apiv6_endpoint, options)

  const table = type === 'sale' ? 'saleAuctions' : 'assistingAuctions'

  // Define our query, this will return data for the first 1000 open auctions
  // 1000 is the max query size for GQL
  const query_ids = gql`
	{
    auctions: ${table}(
      orderBy: startedAt
      orderDirection: desc
      first: ${take}
      skip: ${skip}
      where:{
        open: true
      }
    )
    {
      id
      startingPrice
      endingPrice
      open
      tokenId{
        id
        numberId
      }
    }
  }`

  let data = await graphQLClient.request(query_ids)
  return data
}

export default getAuctionData

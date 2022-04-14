// First we need to require our GraphQL Package
import { GraphQLClient, gql } from 'graphql-request'

// const apiv5_endpoint = 'http://graph3.defikingdoms.com/subgraphs/name/defikingdoms/apiv5'
const apiv6_endpoint = 'https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql'

const getAuctionData = async (type = 'sale', take = 50, skip = 0) => {
  console.log(`Retrieving hero listings ${skip + 1} - ${skip + take} from the Tavern`)

  const options = { headers: { 'Content-Type': 'application/json' } }

  // Create a new GQL Client
  const graphQLClient = new GraphQLClient(apiv6_endpoint, options)

  const table = type === 'sale' ? 'saleAuctions' : 'assistingAuctions'

  // Define our query, this will return data for the first 1000 open auctions
  // 1000 is the max query size for GQL
  const query = gql`
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

  let data = await graphQLClient.request(query)
  console.log(`${data.auctions.length} hero listings retrieved from the Tavern`)
  return data
}

/*
 * auctionType: sale | assisting
 */
const getHeroDataByAuction = async (auctionType = 'sale', mainClasses = [], take = 50, skip = 0) => {
  console.log(`Retrieving hero listings ${skip + 1} - ${skip + take} from the Tavern`)

  const options = { headers: { 'Content-Type': 'application/json' } }

  // Create a new GQL Client
  const graphQLClient = new GraphQLClient(apiv6_endpoint, options)

  let filter = `${auctionType}Price_not: null`
  if (mainClasses.length) {
    filter = `${filter}
    mainClass_in: [${mainClasses.map(name => `"${name}"`)}]`
  }

  const price = `price: ${auctionType}Price`

  // Define our query, this will return data for the first 1000 open auctions
  // 1000 is the max query size for GQL
  const query = gql`
	{
    heroes(
      first: ${take}
      skip: ${skip}
      where:{
        ${filter}
      }
    )
    {
      id
      owner{
        name
      }
      firstName
      lastName
      rarity
      gender
      generation
      mainClass
      subClass
      level
      profession
      fishing
      foraging
      gardening
      mining
  
      stamina
  
      summonsRemaining
      maxSummons
      summons
      
      active1
      active2
      passive1
      passive2
      statBoost1
      statBoost2
      statsUnknown1
      statsUnknown2
      element
  
      strength
      agility
      endurance
      wisdom
      dexterity
      vitality
      intelligence
      luck

      ${price}
      status
      hpFullAt
      mpFullAt
      statGenesRaw: statGenes
    }
  }`

  let data = await graphQLClient.request(query)
  console.log(`${data.heroes.length} hero listings retrieved from the Tavern`)
  return data
}

export { getAuctionData, getHeroDataByAuction }

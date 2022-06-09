// First we need to require our GraphQL Package
import { GraphQLClient, gql } from 'graphql-request'
import { PascalCase } from '../helpers/format.helpers'
import { NETWORKS } from '../constants/realms'

// const apiv5_endpoint = 'http://graph3.defikingdoms.com/subgraphs/name/defikingdoms/apiv5'
const apiv6_endpoint = 'https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql'

/*
 * auctionType: sale | assisting
 */
const getHeroDataByAuction = async (auctionType = 'sale', network = NETWORKS.harmony.id, mainClasses = [], profession = '', walletAddress = '', take = 50, skip = 0) => {
  console.log(`Retrieving hero listings ${skip + 1} - ${skip + take} from the Tavern`)

  const options = { headers: { 'Content-Type': 'application/json' } }

  // Create a new GQL Client
  const graphQLClient = new GraphQLClient(apiv6_endpoint, options)

  let filter = ''
  let price = ''
  if(auctionType === 'wallet'){
    filter = `owner: "${walletAddress}"`
    }
  else {
    filter = `${auctionType}Price_not: null
                  network: "${network}"`
    price = `price: ${auctionType}Price`
  }

  // If specified, add main class to filter
  if (mainClasses.length) {
    filter = `${filter}
    mainClass_in: [${mainClasses.map(name => `"${PascalCase(name)}"`)}]`
  }

  // If specified, add profession to filter
  if (profession) {
    filter = `${filter}
    profession: "${profession}"`
  }

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
      originRealm
      network
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

export { getHeroDataByAuction }

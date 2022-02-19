// First we need to require our GraphQL Package
import { GraphQLClient, gql } from 'graphql-request'

const getHeroData = async (skip) => {
    // Then define our endpoint URL
    const apiv5_endpoint = 'http://graph3.defikingdoms.com/subgraphs/name/defikingdoms/apiv5'
	const apiv6_endpoint = 'https://defi-kingdoms-community-api-gateway-co06z8vi.uc.gateway.dev/graphql'

    // Create a new GQL Client
    const graphQLClient = new GraphQLClient(apiv6_endpoint, {
        headers: {
            'Content-Type': 'application/json'
        },
    })

    // Define our query, this will return data for the first 1000 heroes
    // 1000 is the max query size for GQL
    const query = gql`
	{
		heros( 
			orderBy: numberId
			orderDirection: asc
			first: 1000
			where: 
			{
				numberId_gt: 0
		   	}
		)
		{
			saleAuction
			{
				seller{
				id
				name
				}
			}
			id
			firstName
			lastName
			gender
			level
			summonerId{
				id
			}
			assistantId {
				id
			}
			xp
			summonedTime
			summons
			hp
			mp
			maxSummons
			generation
			rarity
			currentQuest
			shiny
			mainClass
			subClass
			stamina
			staminaFullAt
			strength
			dexterity
			agility
			vitality
			endurance
			intelligence
			wisdom
			luck
			profession
			statBoost1
			statBoost2
			mining
			gardening
			fishing
			foraging
			owner {
			id
			name
			created
			}
		}
	}`

    let data = await graphQLClient.request(query)
    return data
}

export default getHeroData

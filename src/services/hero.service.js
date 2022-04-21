// First we need to require our GraphQL Package
import { GraphQLClient, gql } from 'graphql-request'

export const getHeroById = async (id) => {
    // Then define our endpoint URL
    //const apiv5_endpoint = 'http://graph3.defikingdoms.com/subgraphs/name/defikingdoms/apiv5'
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
		heroes( 
			orderBy: numberId
			orderDirection: asc
			where: 
			{
				id: ${id}
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
	  
			status
			hpFullAt
			mpFullAt
			statGenesRaw: statGenes
		}
	}`

    let data = await graphQLClient.request(query)
    return data
}

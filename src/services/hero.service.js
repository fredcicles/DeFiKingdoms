import { DfkApi } from './dfk.api.service'
import { CamelCase, PascalCase } from '../helpers/format.helpers'
import { decodeRecessiveGenesAndNormalize } from '@thanpolas/degenking/src/heroes-helpers/recessive-genes.ent'
import { calcuateSummonCost } from '../helpers/prices.helper'
import { getMutationClass } from '../helpers/genes.helpers'

// Retrieve a list of heroes based on specified search criteria
export const getHeroesBySearchCriteria = async (options, take = 50, skip = 0) => {
	/*
	 * auctionType: sale | assisting | wallet
	 */
	const { auctionType = 'sale', network, mainClasses = [], profession = 'all', wallets = [] } = options

	console.log(`Retrieving hero listings ${skip + 1} - ${skip + take} from the Tavern`)

	let filter = ''
	let price = ''

	if (options.auctionType === 'wallet') {
		filter = `owner_in: [${wallets.map(wallet => `"${wallet}"`)}]`
	} else {
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
	if (profession !== 'all') {
		filter = `${filter}
    			  profession: "${profession}"`
	}

	let heroes = await getHeroes(filter, 'all', price, take, skip)
	console.log(`${heroes.length} hero listings retrieved from the Tavern`)
	return heroes
}

// Retrieve the specific hero
export const getHeroById = async id => {
	const filter = `id: ${id}`
	return await getHeroes(filter)
}

// Retrieve all heroes in the specified wallets
export const getAllHeroesFromWallets = async wallets => {
	const filter = `owner_in: [${wallets.map(wallet => `"${wallet}"`)}]`
	return await getHeroes(filter, 'all', '', 1000, 0)
}

// Retrieve the specific hero
const getHeroes = async (filter, propertySet = 'all', customProperties = '', take = 1, skip = 0) => {
	const allProperties = `
	id
	owner{
	  name
	}
	firstName
	lastName
	originRealm
	network
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
	statGenesRaw: statGenes`

	const basicProperties = `id
	rarity
	gender
	generation
	mainClass
	subClass
	level
	profession`
	
	// Query to retrieve a single hero based on their id
	const query = `
	{
		heroes(
			first: ${take}
			skip: ${skip}
			where:{
			  ${filter}
			}
		)
		{
			${propertySet === 'basic' ? basicProperties : allProperties}
			${customProperties}
		}
	}`

	const result = await DfkApi.get(query)

	// Add any calculated value that should apply to all heroes
	let heroes = decodeRecessiveGenesAndNormalize(result.heroes)
	heroes = heroes.map(hero => ({
		...hero,
		displayId: hero.id.length === 13 ? Number(hero.id.slice(1)).toString() : hero.id,
		summonCost: calcuateSummonCost(hero),
		mutationClass: getMutationClass(CamelCase(hero.mainClass))
	}))

	return heroes
}

// valuate one profession
export function valuateProfession(heroData, profession) {

    const [stat1name, stat2name] = professionStats[profession]

    // How many levels left before 100
    const levelsLeft = 100 - heroData.level

    // current stat + expected growth
    const stat1val = heroData.stats[stat1name] * 1 + calcStatGrowth(heroData, stat1name, levelsLeft)
    const stat2val = heroData.stats[stat2name] * 1 + calcStatGrowth(heroData, stat2name, levelsLeft)

    // Combine them
    let statSum = stat1val + stat2val

    // If this is the main profession of the hero, add 10%
    if(heroData.profession === profession)
        statSum *= 1.1

    return statSum
}

 // Per Stat
function calcStatGrowth(heroData, stat, levels) {
    let growth = 0.0

    // Stat Growth
    growth += statGrowth.get(heroData.mainClass)[stat] / 100
    growth += statGrowth.get(heroData.subClass)[stat] / 100 * 0.25

    // Blue gene will give + 2% to the primary stat growth and + 4% to the secondary
    // Since this function works per stat we just add the two bonuses to the growth
    if (stats.get(heroData.blueGene) === stat) {
        growth += 0.02 // primary
        growth += 0.04 // secondary
    }

    // Rarity bonus - bug fixed!
    growth += rarityMultiplierPct[heroData.rarity] / 100

    // Half of +1 stat choice every level
    growth += 0.5

    // Half of Gaia's blessing 50% chance of +1 for the other gene
    growth += 0.25

    return  growth * levels
}

const rarityMultiplierPct = {
    Common: 0,
    Uncommon: 25 / 5,
    Rare: 50 / 5,
    Legendary: 87.5 / 5,
    Mythic: 125 / 5
}

export const statGrowth = new Map()
statGrowth.set("Warrior", {
    strength: 75,
    intelligence: 20,
    wisdom: 20,
    luck: 35,
    agility: 50,
    vitality: 65,
    endurance: 65,
    dexterity: 70
})
statGrowth.set("Knight", {
    strength: 70,
    intelligence: 20,
    wisdom: 25,
    luck: 35,
    agility: 45,
    vitality: 75,
    endurance: 75,
    dexterity: 55
})
statGrowth.set("Thief", {
    strength: 55,
    intelligence: 25,
    wisdom: 35,
    luck: 65,
    agility: 70,
    vitality: 50,
    endurance: 40,
    dexterity: 55
})
statGrowth.set("Archer", {
    strength: 55,
    intelligence: 40,
    wisdom: 25,
    luck: 40,
    agility: 50,
    vitality: 50,
    endurance: 60,
    dexterity: 80
})
statGrowth.set("Priest", {
    strength: 30,
    intelligence: 70,
    wisdom: 80,
    luck: 40,
    agility: 40,
    vitality: 50,
    endurance: 60,
    dexterity: 30
})
statGrowth.set("Wizard", {
    strength: 30,
    intelligence: 80,
    wisdom: 80,
    luck: 40,
    agility: 40,
    vitality: 50,
    endurance: 50,
    dexterity: 30
})
statGrowth.set("Monk", {
    strength: 60,
    intelligence: 25,
    wisdom: 50,
    luck: 30,
    agility: 60,
    vitality: 60,
    endurance: 55,
    dexterity: 60
})
statGrowth.set("Pirate", {
    strength: 70,
    intelligence: 20,
    wisdom: 20,
    luck: 55,
    agility: 50,
    vitality: 60,
    endurance: 55,
    dexterity: 70
})
statGrowth.set("Paladin", {
    strength: 80,
    intelligence: 30,
    wisdom: 65,
    luck: 40,
    agility: 35,
    vitality: 80,
    endurance: 80,
    dexterity: 40
})
statGrowth.set("DarkKnight", {
    strength: 85,
    intelligence: 70,
    wisdom: 35,
    luck: 35,
    agility: 35,
    vitality: 75,
    endurance: 60,
    dexterity: 55
})
statGrowth.set("Summoner", {
    strength: 45,
    intelligence: 85,
    wisdom: 85,
    luck: 40,
    agility: 50,
    vitality: 50,
    endurance: 50,
    dexterity: 45
})
statGrowth.set("Ninja", {
    strength: 50,
    intelligence: 50,
    wisdom: 40,
    luck: 60,
    agility: 85,
    vitality: 50,
    endurance: 40,
    dexterity: 75
})
statGrowth.set("Dragoon", {
    strength: 80,
    intelligence: 50,
    wisdom: 60,
    luck: 50,
    agility: 65,
    vitality: 60,
    endurance: 70,
    dexterity: 65
})
statGrowth.set("Sage", {
    strength: 40,
    intelligence: 90,
    wisdom: 90,
    luck: 55,
    agility: 75,
    vitality: 60,
    endurance: 50,
    dexterity: 40
})
statGrowth.set("DreadKnight", {
    strength: 85,
    intelligence: 65,
    wisdom: 65,
    luck: 60,
    agility: 60,
    vitality: 65,
    endurance: 75,
    dexterity: 75
})

export const PascalCase = word => `${word[0].toUpperCase()}${word.slice(1)}`

export const CamelCase = word => `${word[0].toLowerCase()}${word.slice(1)}`

export const ToPrice = rawPrice => {
    const nPrice = Number(rawPrice)
    const price = nPrice / 1000000000000000000
    return price
}

export const PascalCase = word => `${word[0].toUpperCase()}${word.slice(1)}`

export const CamelCase = word => `${word[0].toLowerCase()}${word.slice(1)}`

export const ToPrice = price => Number(price) / 1000000000000000000

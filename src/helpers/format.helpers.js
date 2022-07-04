export const PascalCase = word => {
  if (!word || word.length < 1) return ''
  return `${word[0].toUpperCase()}${word.slice(1)}`
}

export const CamelCase = word => {
  if (!word || word.length < 1) return ''
  return `${word[0].toLowerCase()}${word.slice(1)}`
}

export const ToPrice = rawPrice => {
  if (!rawPrice) {
    return null
  }
  const nPrice = Number(rawPrice)
  const price = nPrice / 1000000000000000000
  return price
}

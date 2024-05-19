import dictionary from './dictionary'

export function generatePassword(length, options) {
  const characters = Object.entries(options)
    .filter(([, value]) => value)
    .map(([key]) => dictionary[key])
    .join('')

  const password = new Array(length)
    .fill()
    .map(() => {
      const randomIndex = Math.floor(Math.random() * characters.length)
      return characters[randomIndex]
    })
    .join('')

  return password
}

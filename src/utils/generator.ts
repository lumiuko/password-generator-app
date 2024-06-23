import { OptionValues } from '../components/Options'
import dictionary, { Dictionary } from './dictionary'

export function generatePassword(length: number, options: OptionValues) {
  const characters = Object.entries(options)
    .filter(([, value]) => value)
    .map(([key]) => dictionary[key as keyof Dictionary])
    .join('')

  const password = new Array(length)
    .fill(null)
    .map(() => {
      const randomIndex = Math.floor(Math.random() * characters.length)
      return characters[randomIndex]
    })
    .join('')

  return password
}

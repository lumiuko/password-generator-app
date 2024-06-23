export type Dictionary = {
  lowercase: string
  uppercase: string
  numbers: string
  symbols: string
}

const dictionary: Dictionary = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '1234567890',
  symbols: '!@#$%^&*_-+=~|\\/?:;()'
}

export default dictionary

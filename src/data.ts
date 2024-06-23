type Checkbox = {
  name: string
  label: string
  initialValue: boolean
}

type StrengthLevel = {
  name: string
  classNames: string
  requiredPoints: number
}

const checkboxes: Checkbox[] = [
  {
    name: 'uppercase',
    label: 'Include Uppercase Letters',
    initialValue: true
  },
  {
    name: 'lowercase',
    label: 'Include Lowercase Letters',
    initialValue: true
  },
  {
    name: 'numbers',
    label: 'Include Numbers',
    initialValue: false
  },
  {
    name: 'symbols',
    label: 'Include Symbols',
    initialValue: false
  }
]

const strengthLevels: StrengthLevel[] = [
  {
    name: 'Too weak!',
    classNames: 'bg-red border-red',
    requiredPoints: 0
  },
  {
    name: 'Weak',
    classNames: 'bg-orange border-orange',
    requiredPoints: 4
  },
  {
    name: 'Medium',
    classNames: 'bg-yellow border-yellow',
    requiredPoints: 6
  },
  {
    name: 'Strong',
    classNames: 'bg-neon-green border-neon-green',
    requiredPoints: 8
  }
]

export { checkboxes, strengthLevels }

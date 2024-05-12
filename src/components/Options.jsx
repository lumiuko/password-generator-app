import PropTypes from 'prop-types'
import { useId, useState } from 'react'
import { checkboxes, strengthLevels } from '../data'
import { useEffect } from 'react'

const initialOptions = Object.fromEntries(checkboxes.map(checkbox => [checkbox.name, checkbox.initialValue]))

export default function Options({ password, generatePassword }) {
  const id = useId()
  const [length, setLength] = useState(10)
  const [options, setOptions] = useState(initialOptions)
  const [strengthLevel, setStrengthLevel] = useState(0)

  useEffect(() => {
    if (!password) return
    const lengthPoints = Math.floor(length / 2)
    const settingsPoints = Object.values(options).filter(Boolean).length / 2
    const totalScore = lengthPoints + settingsPoints
    const strengthIndex = strengthLevels.findLastIndex(level => totalScore >= level.requiredPoints)

    setStrengthLevel(strengthIndex + 1)
  }, [password])

  function handleChange({ target }) {
    const { name, checked } = target

    setOptions(prevOptions => ({
      ...prevOptions,
      [name]: checked
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    generatePassword(length, options)
  }

  const currentStrength = strengthLevels[strengthLevel - 1]

  return (
    <form className="bg-dark-gray p-4 flex flex-col gap-8 md:p-8 md:pt-6" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2 md:gap-4">
        <label className="flex justify-between items-center">
          <p>Character Length</p>
          <p className="text-neon-green text-m leading-m md:text-l md:leading-[2.625rem]">{length}</p>
        </label>
        <input
          name="length"
          type="range"
          className="slider"
          min={0}
          max={20}
          value={length}
          onChange={event => setLength(Number(event.target.value))}
          style={{ '--value': `${(length / 20) * 100 - length / 20}%` }}
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-5">
        {checkboxes.map(checkbox => (
          <div key={checkbox.name} className="flex gap-5 md:gap-6">
            <input
              id={`${id}-${checkbox.name}`}
              type="checkbox"
              name={checkbox.name}
              className="appearance-none cursor-pointer size-5 border-2 border-line bg-no-repeat bg-center checked:bg-neon-green checked:border-neon-green checked:bg-check transition-colors"
              checked={options[checkbox.name]}
              onChange={handleChange}
            />
            <label htmlFor={`${id}-${checkbox.name}`}>{checkbox.label}</label>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 md:gap-8">
        <div className="bg-very-dark-gray px-4 py-[0.875rem] flex items-center gap-4 uppercase md:px-8 md:py-5 md:leading-m">
          <p className="text-gray">Strength</p>
          <p className="ml-auto md:text-m">{currentStrength ? currentStrength.name : ''}</p>
          <div className="flex gap-2">
            {strengthLevels.map((item, index) => (
              <div
                key={item.name}
                className={`h-7 w-[0.625rem] border-2 border-almost-white ${index < strengthLevel ? currentStrength.classNames : ''}`}
              ></div>
            ))}
          </div>
        </div>
        <button
          disabled={Object.values(options).every(value => !value) || !length}
          className="uppercase border-2 border-neon-green bg-neon-green text-dark-gray leading-5 px-4 py-[1.125rem] flex justify-center items-center gap-4 md:py-5 md:leading-[1.375rem] hover:bg-transparent hover:text-neon-green transition-colors disabled:cursor-not-allowed disabled:hover:bg-neon-green disabled:text-dark-gray group"
        >
          <span>Generate</span>
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
          </svg>
        </button>
      </div>
    </form>
  )
}

Options.propTypes = {
  password: PropTypes.string,
  generatePassword: PropTypes.func
}

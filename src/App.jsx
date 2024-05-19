import { useState } from 'react'

import Container from './components/Container'
import Display from './components/Display'
import Options from './components/Options'
import { generatePassword } from './utils/generator'

function App() {
  const [password, setPassword] = useState('')

  function handleSubmit(length, options) {
    if (Object.values(options).every(option => !option) || !length) return
    const generatedPassword = generatePassword(length, options)
    setPassword(generatedPassword)
  }

  return (
    <Container>
      <h1 className="text-center text-gray md:text-m md:leading-m">Password Generator</h1>
      <div className="flex flex-col gap-4 md:gap-6">
        <Display password={password} />
        <Options password={password} handleSubmit={handleSubmit} />
      </div>
    </Container>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import usePasswordGenerator from './custom_hooks/usePasswordGenerator';

function App() {

  const [length, setLength] = useState(4);
  const [checkBoxData, setCheckBoxData] = useState([
    {title: 'Include Uppercase Letters', state: false},
    {title: 'Include Lowercase Letters', state: false},
    {title: 'Include Numbers', state: false},
    {title: 'Include Symbols', state: false},
  ])

  const handleCheckboxChange = (i) => {
    const updateedCheckboxData = [...checkBoxData];
    updateedCheckboxData[i].state = !updateedCheckboxData[i].state;
    setCheckBoxData(updateedCheckboxData);
  }

  const {password, errorMessage, generatePassword} = usePasswordGenerator();
  

  return (
    <div className='container'>

      {/* Password text and copy */}
      {password && (<div className='header'>
        <div className='title'>
          {password}
        </div>
        <button className='copyBtn' onClick={() => {}} >
          copy
        </button>
      </div> )}

      {/* Character length  */}
      <div className='charLength'>
        <span>
          <label>Character Length</label>
          <label> {length} </label>
        </span>

        <input 
         type="range"
         min='4'
         max='20'
         value={length}
         onChange={(e) => setLength(e.target.value)}
        />

      </div>
      
      {/* Checkboxes */}
      <div className='checkboxes'>
        {checkBoxData.map((checkbox, i) => {
          return (
            <div key={i}>
              <input type="checkbox" onChange={() => handleCheckboxChange(i)} checked={checkbox.state} />
              <label> {checkbox.title} </label>
            </div>
          )
        })}
      </div>

      {/* Strength */}

      {/* Error Handling */}
      {errorMessage && <div className='errorMessage'>
        {errorMessage}
      </div>}

      {/* Generate Button */}
      <button className='generateBtn' onClick={() => generatePassword(checkBoxData, length)}>
        Generate Password
      </button>
    </div>
  )
}

export default App

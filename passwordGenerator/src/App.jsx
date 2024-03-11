import { useState } from 'react'
import './App.css'
import usePasswordGenerator from './custom_hooks/usePasswordGenerator';
import StrengthChecker from './components/StrengthChecker';
import Button from './components/Button';

function App() {

  const [length, setLength] = useState(4);
  const [checkBoxData, setCheckBoxData] = useState([
    {title: 'Include Uppercase Letters', state: false},
    {title: 'Include Lowercase Letters', state: false},
    {title: 'Include Numbers', state: false},
    {title: 'Include Symbols', state: false},
  ])
  const [copied, setCopied] = useState(false);


  const handleCheckboxChange = (i) => {
    const updateedCheckboxData = [...checkBoxData];
    updateedCheckboxData[i].state = !updateedCheckboxData[i].state;
    setCheckBoxData(updateedCheckboxData);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1000);
  }

  const {password, errorMessage, generatePassword} = usePasswordGenerator();
  

  return (
    <div className='container'>

      {/* Password text and copy */}
      {password && (<div className='header'>
        <div className='title'>
          {password}
        </div>

        {/* <button className='copyBtn' onClick={handleCopy} >
          {copied ? 'Copied' : 'copy'}
        </button> */}

        <Button
         text={copied ? 'Copied' : 'copy'}
         onClick={handleCopy}
         customClass="copyBtn"
        />
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
      <StrengthChecker password={password} />

      {/* Error Handling */}
      {errorMessage && <div className='errorMessage'>
        {errorMessage}
      </div>}

      {/* Generate Button */}
      {/* <button className='generateBtn' onClick={() => generatePassword(checkBoxData, length)}>
        Generate Password
      </button> */}

      <Button
         text="Generate Password"
         onClick={() => generatePassword(checkBoxData, length)}
         customClass="generateBtn"
        />
    </div>
  )
}

export default App

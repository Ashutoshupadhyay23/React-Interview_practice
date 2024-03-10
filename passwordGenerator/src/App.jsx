import './App.css'

function App() {

  const checkBoxData = [
    {title: 'Include Uppercase Letters', state: false},
    {title: 'Include Lowercase Letters', state: false},
    {title: 'Include Numbers', state: false},
    {title: 'Include Symbols Letters', state: false},
  ]
  

  return (
    <div className='container'>
      {/* Password text and copy */}
      <div className='header'>
        <div className='title'>
          Kg372@8
        </div>
        <button className='copyBtn' onClick={() => {}} >
          copy
        </button>
      </div>

      {/* Character length  */}
      <div className='charLength'>
        <span>
          <label>Character Length</label>
          <label>4</label>
        </span>

        <input 
         type="range"
         min='4'
         max='20'
        //  value={}
        //  onChange={}
        />

      </div>
      {/* Checkboxes */}
      <div className='checkboxes'>
        {checkBoxData.map((checkbox, i) => {
          return (
            <div key={i}>
              <input type="checkbox" checked={checkbox.state} />
              <label> {checkbox.title} </label>
            </div>
          )
        })}
      </div>
      {/* Strength */}
      {/* Generate Button */}
      <button className='generateBtn' onClick={() => {}}>Generate Password</button>
    </div>
  )
}

export default App

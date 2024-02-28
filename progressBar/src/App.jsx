import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {
 

  return (
    <div className='app'>
      <span>Progress Bar</span>
      <ProgressBar value={25} />
    </div>
  )
}

export default App

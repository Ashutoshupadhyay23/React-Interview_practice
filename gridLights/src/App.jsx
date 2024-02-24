import './App.css'


function Cell({filled, onClick})
{
  return(
    <button type='button' 
     onClick={onClick} 
     className={filled ? 'cell cell-activated' : 'cell'}
    />

  )
}
function App() {
  const config = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]

  const activateCells = (index) => {}

  return (
    <div className='wrapper'>
      <div className='grid'>
        {config.flat(1).map((value, index) => {
           return <Cell 
           key={index}
           filled={false}
           onClick={() => activateCells(index)} 
          />
        })}
      </div>
    </div>
  )
}

export default App

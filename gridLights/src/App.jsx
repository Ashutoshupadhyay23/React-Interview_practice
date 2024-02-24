import { useState } from 'react'
import './App.css'


function Cell({filled, onClick, isDisabled})
{
  return(
    <button type='button' 
     disabled={isDisabled}
     onClick={onClick} 
     className={filled ? 'cell cell-activated' : 'cell'}
    />

  )
}
function App() {

  const [order, setOrder] = useState([])
  const [isDeactivating, setIsDeactivating] = useState(false)

  const config = [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]

  const deActivateCells = () => {
    setIsDeactivating(true)
    const timer = setInterval(() => {
      setOrder((originalOrder) => {
        const newOrder = originalOrder.slice()
        newOrder.pop()

        if(newOrder.length === 0){
          clearInterval(timer)
          setIsDeactivating(false)
        }

        return newOrder
      })
    }, 300);
  }

  const activateCells = (index) => {
    const newOrder = [...order, index]
    setOrder(newOrder);

    //deActivate
    if(newOrder.length === config.flat(1).filter(Boolean).length){
      deActivateCells()
    }
  }

  return (
    <div className='wrapper'>
      <div 
       className='grid'
       style={{
        gridTemplateColumns:`repeat(${config[0].length}, 1fr)`
       }} 
      >
        {config.flat(1).map((value, index) => {
          return value ? <Cell 
           key={index}
           filled={order.includes(index)}
           onClick={() => activateCells(index)} 
           isDisabled = {order.includes(index) || isDeactivating}
          /> : <span />
        })}
      </div>
    </div>
  )
}

export default App

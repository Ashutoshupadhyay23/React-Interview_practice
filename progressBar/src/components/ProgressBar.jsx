import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const ProgressBar = ({value = 0, onComplete = () => {} }) => {

    const [percent, setPercent] = useState(value)

    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)));

        if(value >= 100){
            onComplete();
        }
    }, [value])

  return (
    <div className='progress'>
        <span
         style={{color: percent > 49 ? 'white' : 'black'}}
        > 
            {percent.toFixed()}% 
        </span>
        <div 
        //  using width is kind of bad habit and bad for our performance. what if we suppose to not use width and you have to do with better styling which will optimize our performance

        //  style={{width: `${percent}%`}}

        style={{transform: `scaleX(${percent / 100})`, transformOrigin: 'left'}}

        //  accessibility*
         role='progressbar'
         aria-valuemin={0}
         aria-valuemax={100}
         aria-valuenow={percent.toFixed()}
        />
    </div>
  )
}

export default ProgressBar


// accessibility:-> is the practice of making your website useable by as many as people as possible. we traditionally think of this as being about people with disabilities, but the practice of making sites accessible also benefits other groups such as those using mobiledevices, or those with slow network connection 
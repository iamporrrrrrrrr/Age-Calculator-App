import React, { useState } from 'react'
import NewDateForm from './NewDateForm'
import NewDisplay from './NewDisplay'

export default function App() {

  const [time, setTime] = useState({
    day: "- -",
    month: "- -",
    year: "- -",
  })

  function displayTime(date){
    setTime(() => {
      const nowDate = new Date()
      const endDate = date
      const timeDiff = nowDate.getTime()-endDate.getTime()
      const dayDiff = Math.floor(timeDiff/(1000*3600*24))
      const monthDiff = Math.floor(dayDiff/30)
      const yearDiff = Math.floor(monthDiff/12)
      return {day: dayDiff%30,
        month: monthDiff%12,
        year: yearDiff
      }
    })
  }

  function displayError(){
    setTime(() => {
      return {day: "- -",
        month: "- -",
        year: "- -"
      }
    })
  }

  return (
    <>
      <div className="card">

        <NewDateForm displayTime={displayTime} displayError={displayError} />

        <NewDisplay time={time} />

        
      </div>
    </>
  )
}

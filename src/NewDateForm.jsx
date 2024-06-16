import { useState } from "react"
import './assets/images/icon-arrow.svg'

export default function NewDateForm({ displayTime, displayError }){

    const [day,setDay] = useState("")
    const [month,setMonth] = useState("")
    const [year,setYear] = useState("")

    function handleSubmit(e) {
        let allCorrect = 1
        e.preventDefault()
        const nowDate = new Date()
            if(day.trim()===""){
            addError("day")
            document.getElementById('error-day').textContent="This field is required"
            allCorrect = 0
        }
        else if( isNaN(+day) || +day>31 || +day<1 || +day%1 !== 0){
            addError("day")
            document.getElementById('error-day').textContent="Must be a valid day"
            allCorrect = 0
        }
        if(month.trim()===""){
            addError("month");
            document.getElementById('error-month').textContent="This field is required"
            allCorrect = 0
        }
        else if(isNaN(+month) || +month>12 || +month<1 || +month%1 !== 0){
            addError("month");
            document.getElementById('error-month').textContent="Must be a valid month"
            allCorrect = 0
        }
        if(year.trim()===""){
            addError("year");
            document.getElementById('error-year').textContent="This field is required"
            allCorrect = 0
        }
        else if(+year> nowDate.getFullYear()){
            addError("year");
            document.getElementById('error-year').textContent="Must be in the past"
            allCorrect = 0
        }

        if(allCorrect){
            const date = new Date(`${year}/${month}/${day}`)
            if(date.getDate()!=day || date.getMonth()+1!=month || date.getFullYear()!=year){
                addError("day")
                addError("month")
                addError("year")
                document.getElementById('error-day').textContent="Must be a valid date"
                displayError()
            }
            else if(date > nowDate){
                addError("day")
                addError("month")
                addError("year")
                document.getElementById('error-day').textContent="Must be in the past"
                displayError()
            }
            else{
                displayTime(date)
            }
        }
        else{
            displayError()
        }
    }

    function addError(name){
        document.getElementById('label-'+name).classList.add("error")
        document.getElementById(name).classList.add("error")
      }
    
    function removeError(){
        document.getElementById('label-day').classList.remove("error")
        document.getElementById('day').classList.remove("error")
        document.getElementById('error-day').textContent=""
    
        document.getElementById('label-month').classList.remove("error")
        document.getElementById('month').classList.remove("error")
        document.getElementById('error-month').textContent=""
    
        document.getElementById('label-year').classList.remove("error")
        document.getElementById('year').classList.remove("error")
        document.getElementById('error-year').textContent=""
    }

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-wrapper">
                    <div className="form-group" >
                        <label htmlFor="day" id="label-day">D A Y</label>
                        <input 
                        onChange={(e) => setDay(e.target.value)}
                        onFocus={() => {
                        removeError()
                        setDay("");
                        }}
                        type="text" id="day" placeholder="DD" value={day}/>
                        <div className="error-div">
                            <span className="error-message" id='error-day'></span>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="month" id="label-month">M O N T H</label>
                        <input 
                        onChange={(e) => setMonth(e.target.value)}
                        onFocus={() => {
                        removeError()
                        setMonth("");
                        }}
                        type="text" id="month" placeholder="MM" value={month}/>
                        <div className="error-div">
                            <span className="error-message" id='error-month'></span>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="year" id="label-year">Y E A R</label>
                        <input 
                        onChange={(e) => setYear(e.target.value)}
                        onFocus={() => {
                        removeError()
                        setYear("");
                        }}
                        type="text" id="year" placeholder="YYYY" value={year}/>
                        <div className="error-div">
                            <span className="error-message" id='error-year'></span>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <hr/>
                    <button>
                        <img src='./assets/images/icon-arrow.svg'/>
                    </button>
                </div>
            </form>
        </>
    )
}
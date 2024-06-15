export default function NewDisplay({ time }){
    return (
        <div className="display">
          <span>
            <span className="number">{time.year+" "}</span>
             years
          </span>

          <span>
            <span className="number">{time.month+" "}</span>
             months
          </span>

          <span>
            <span className="number">{time.day+" "}</span>
             days
          </span>
          
           
        </div>
    )
}
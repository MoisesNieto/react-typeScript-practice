
import { useState } from 'react'
import { Timer } from './Timer'

export const TimerPadre = () => {  


    const [millisegundos, setMillisegundo] = useState(1000);
    return (
        <>
          <span> milisegundos {millisegundos}</span> 

          <button className="btn btn-outline-success"
                  onClick= {()=> setMillisegundo(1000)}>
                1000
          </button>
          <button className="btn btn-outline-success"
                  onClick= {()=> setMillisegundo(2000)}>
                2000
          </button>

           
          <Timer milisegundos={millisegundos}/>
        </>
    )
}

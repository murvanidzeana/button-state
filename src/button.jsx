import { useState } from 'react'
import './button.css'

export default function Button(){


    const [count,setcount]= useState(0)
    const change = () => {
        if("+"){
            setcount (count+1)

        }
        else if ('-'){
            setcount(count -1)

        }
        
    }

    // const less =() => {
    //     setcount(count -1)
    // }

    return(<>
        <button onClick={change}>+</button>

        <button > i was Clicked {count} times </button>

        <button onClick={change}>-</button>
        </>

    )
}


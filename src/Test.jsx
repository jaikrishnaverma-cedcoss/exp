import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const Test = () => {
    let initial = 0;
    let [data, setData] = useState(initial)
    //  useEffect(()=>{
    // console.log(data)
    //  },[data])
    const incre = () => {
        for (let i = 0; i < 5; i++) {
            // data=data+1;
            setData(data + 1)
            console.log(data)
        }
    }
    
    return (
        <button onClick={incre}>{data}</button>
    )
}

export default Test
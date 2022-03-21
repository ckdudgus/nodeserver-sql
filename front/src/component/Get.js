import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Get(){
    const [origintext , originUpdate] = useState('내가 먼저');

    useEffect( async () => {
        const getdata = await axios.get('/getsend')
        originUpdate(getdata.data)
    } 
    , [] );
    
  return (
    <div>{origintext}</div>
  )
}

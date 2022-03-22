import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Interview = (props) => {
    const [interviewId , interviewUpdate] = useState(0);
    const interviewPublic = async () => {
                            await axios.get(`/cyhpreinterview?botable=${props.botable}`)
                                       .then(
                                           (result) => {
                                               console.log(result.data)
                                           }
                                        )
                                       .catch ( e => {
                                           console.log(e +'이유로 통신이 불안전함')
                                           }
                                        )
    }

    useEffect( () => {
        interviewPublic();
    } , [] )

        return (
            <div>
                콘솔창을 확인해봐
            </div>
        );
}

export default Interview;
 

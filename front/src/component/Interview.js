import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
const Interview = (props) => {   
    let [ interviewId, interviewIdUpdate ] = useState([]);  
    const [typeData,insertDB] = useState(0);   
   
    const interviewDataSetting = async () => {                      
                             await axios.get(`/cyhpreinterview?botable=${props.botable}`)
                                        .then(
                                            (result) => {  
                                                try{  
                                                    interviewIdUpdate([...result.data]); 
                                                    insertDB(result.data[0].key);                                                 
                                                }
                                                catch(err){ console.log(err.message) }
                                            }
                                        )
                                        .catch ( e => { console.log(e +'이유로 통신이 불안전함') }
                                        ) 
    } 
    useEffect( () => {  interviewDataSetting(); } , [typeData]  )          
        return (  
            <div> <h2>{ interviewId.length > 0 ? "사전인터뷰" : "데이터전송중..." }</h2>
             {
                 interviewId.map(( contant, i ) => {
                     return(
                         <li>
                             <h3>{i+1} {contant.cyh_subject}</h3><div>{contant.cyh_content}</div>
                         </li>
                     )
                 })
             }
            </div>
        );   
}
export default Interview;
 

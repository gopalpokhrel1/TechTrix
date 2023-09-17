import { useState } from "react";
import styled  from "styled-components"

import {AiFillStar} from 'react-icons/ai'

import { AiOutlineStar } from "react-icons/ai";

export default function Data() {

    const [item , setItem]= useState(false);
    const [details, setDetails] = useState('Show Details');

    const [consumer, setConsumer] = useState('Show Details')

    const [condition, setCondition]= useState(false);

    const handleButton = ()=>{

        if(item){
              
           setDetails('Show Details');
           setItem(false);

        }

        else{
            setDetails('Hide Details');
            setItem(true);
        }

    }

    const handleConsumer = ()=>{

        if(condition){
              
           setConsumer('Show Details');
           setCondition(false);

        }

        else{
          setConsumer('Hide Details');
            setCondition(true);
        }

    }

 
  return (
    <>
     <DataDesign>
        <div className="producers">
            <h1>Producers</h1>
            <button onClick={()=> handleButton(setItem(true))}>{details}</button>
            {
                item ? <ul>
                    <li>shyam : <AiFillStar color="yellow" size={20}/>  <AiFillStar color="yellow" size={20}/> <AiFillStar color="yellow" size={20}/> <AiOutlineStar size={20}/> <AiOutlineStar size={20}/></li>
                    <li>Hari : <AiFillStar color="yellow" size={20}/>  <AiFillStar color="yellow" size={20}/> <AiOutlineStar size={20}/> <AiOutlineStar size={20}/> <AiOutlineStar size={20}/></li>
                </ul> : null
            }


        </div>


        <div className="consumers">
            <h1>Consumer</h1>
            <button onClick={()=> handleConsumer(setCondition(true))}>{consumer}</button>
            {
                condition ? <ul>  
                    <li>Andrew:<button >suspend</button> <button style={{marginLeft: "1rem"}}>Block</button></li>
                       
                </ul> : null
            }


        </div>
        
        </DataDesign> 
    </>
  )
}


const DataDesign = styled.div`

width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
gap: 3rem;

.producers, .consumers{
    padding: 2rems;
    width: 20rem;
    min-height: 10rem;
    border: 2px solid black;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    button{
        padding: 0.3rem 1.3rem ;
    }

    ul{
        list-style: none;
        li{
            font-size: 1.3rem;
            display: flex;
            align-items: center;
            
        }
    }
}


`;

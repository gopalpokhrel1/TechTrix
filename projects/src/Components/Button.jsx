import { useState } from "react";
import styled from "styled-components"

export default function Button() {
    const [showdata, setShowdata] =useState(false);

    const [description, setDescription] = useState('Show Description')

  const handleData =()=>{
      
    if(showdata){
        // <p>Hello world</p>

        setDescription('Show Description')
        setShowdata(false)
    }

    else{
       setDescription('Hide Description')
       
       setShowdata(true);
    }
  }

    
  return (
    <>
    <Box>
     <div className="image">
        <img src="" alt="Photo" />
     </div>
       <ul>
        <li>Name:</li>
        <li>Type:</li>
        <li>Price:</li>
        <li>Quantity:</li>
        <li>Location:</li>
        <button onClick={()=>handleData( setShowdata(true))}>{description}</button>

        {
            showdata ? <p>Hello world</p>: null
        }
       </ul>



    </Box>


      
    </>
  )
}


const Box = styled.div`

width: 17rem;

border: 2px solid red;

border-radius: 1rem;

position: relative;

padding-bottom: 0.5rem;

.image{

    width: 15rem;
    height: 9rem;

    margin: 1rem auto;

    img{

        
        min-width: 15rem;
        min-height: 9rem;
        border: 1px solid red;

        border-radius: 2rem;
    }


   
}

ul{

        list-style: none;
        width: 100%;
         display: flex;
          flex-direction: column;
           gap: 0.2rem;
         padding: 0rem 0rem 0rem 1rem;
           align-items: start;

         
    }


`;

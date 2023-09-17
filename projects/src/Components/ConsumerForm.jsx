import styled from "styled-components";

export default function ConsumerForm() {
  return (
    <Form>

        <div className="form">
          <div className="box">
            <label htmlFor="itemName">Item Name</label>
            <input type="text" id="itemName"  />
          </div>
          <div className="box">
            <label htmlFor="quantity">Quantity</label>
            <input type="text" id="quantity"  />
          </div>
          <div className="box">
            <label htmlFor="location">Location</label>
            <input type="text" id="location"  />
          </div>

          <button type="submit">Submit</button>

        </div>
      
    </Form>
  )
}

const Form = styled.div`

width: 100%;
height: 100vh;

background: url('../src/assets/image/Form.jpg');
background-position: center;
background-size: cover;
background-repeat: no-repeat;

display: flex;
justify-content: center;
align-items: center;


.form{

    width: 30rem;
    height: 30rem ;

    display: flex;
    flex-direction: column;
justify-content: center;
align-items: center;

gap: 1rem;

background: rgba(255, 255, 255, 0.6);

border-radius: 2rem;
    .box{
        display: flex;
        flex-direction: column;

        input{
            width: 15rem;
            height: 1.5rem;
        
            font-size: 1.2rem;
            padding: 1rem 1.2rem;
        }
    }

    button{
        padding: 0.5rem 1.2rem;
        border-radius: 0.6rem;
        border: none;
        cursor: pointer;
        background-color: #6e6ebb;
    }
}



`;

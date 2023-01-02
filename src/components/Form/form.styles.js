import styled from "styled-components"

export const FormBody = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #061106;
  color: white;
  padding: 10% 5%;

  form {
    display: flex;
    flex-direction: column;
    width: 40%;

    label {
      font-size: 1.3rem;
      font-weight: 500;
      margin: 10% 0;
    }

    input {
      width: 100%;
      height: 7vh;
      border: none;
      outline: none;
      background-color: #383838;
      padding: 10%;
      color: white;
      font-size: 1.2rem;
      transition: all 0.3s ease-out;
      
      &:focus{
        border: 2px solid var(--green) ;
      }
      
    }
    textarea{
      border: none;
      outline: none;
      background-color: #383838;
      max-width: 100%;
      height: 20vh;
      padding: 10%;
      color: white;
      font-size: 1.2rem;
      margin-bottom: 10%;


      &:focus{
        border: 2px solid var(--green) ;
      }

    }

    button {
      background-color: #464646;
      font-size: 1.3rem;
      color: white;
      padding: 3% 5%;
      border-radius: 30px;
      transition: all .2s ease-in-out;
      margin: auto;

      &:hover {
        background-color: #363636;
        cursor: pointer;
      }
    }
    
  }
`
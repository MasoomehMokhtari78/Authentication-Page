import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(90deg, #C7C5F4, #776BCC);
    background-size: cover;
    display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const Wrapper = styled.div`
    width: 70%;
    background-color: white;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
    box-shadow: 0px 2px 2px;
`
export const Title = styled.h1`
    font-size: 3em;
    font-weight: 500;
`
export const Info = styled.p`
    margin: 10px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
`
export const Field = styled.div`
    padding: 15px 0px;
    display: flex;
`
export const MaterialIcon = styled.i`
  color: #7875B5;
  margin-left: 2vh;
  margin-top: 3vh;
`

export const Input = styled.input`
    border: none;
    border-bottom: 2px solid #D1D1D4;
    padding: 10px;
    margin: 10px;
    background: none;
    font-weight: 700;
    transition: .2s;
    width: 75%;

    &:hover, :active, :focus {
        outline: none;
        border-bottom: 2px solid #6A679E;
    }
`
export const SubmitBtn = styled.button`
    margin: 20px;
    height: 3rem;
    border-radius: 50px;
    background-color: #554fde;
    font-size: 1.3rem;
    font-weight: 500;
    box-shadow: 0px 2px 2px #3c35d9;
    &:hover{
        background-color: #342fd0;
        
    }
`
export const StyledLink  = styled(Link)`
    margin: 5px;
    color: White;
`;
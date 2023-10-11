import styled, {keyframes} from 'styled-components'
import { Link } from "react-router-dom";
import {CheckCircleOutline, ErrorOutline} from '@mui/icons-material';

export const Container = styled.div`
    overflow: hidden;
    width: 100vw;
    height: 100vh; 
    background: linear-gradient(-45deg, #3D3B79, #4E4C9B, #807FC0, #A2A1D1);
    background-size: cover;
    display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const Wrapper = styled.div`
    margin-top: 5vh;
    width: 50%;
    background-color: rgba(255,255,255, 0.30);
    border-radius: 5%;
    display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
    box-shadow: 0px 2px 2px;
    @media screen and (max-width: 600px) {
        width: 80%;
      }

`
export const Title = styled.h1`
    font-size: 3em;
    font-weight: 500;
`
export const Info = styled.p`
    margin: 10px;
    padding: 0px 15px;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 70%;
`
export const Field = styled.div`
    /* padding: 15px 0px; */
    display: flex;
    justify-content: center;
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

    &::placeholder {
        color: #353535;
    }

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
export const FootNote = styled.p`
    margin: 10px;
`
export const ErrorMessage = styled.div`
  display: flex;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  background-color: rgba(255, 0, 0, 0.2);
`;

export const SuccessMessage = styled.div`
  display: flex;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
  background-color: rgba(0, 255, 0, 0.2);
`;

export const StyledCheck  = styled(CheckCircleOutline)`
    color: green;
    margin: 1rem;
`;

export const StyledError  = styled(ErrorOutline)`
    color: red;
    margin: 1rem;
`;
export const StyledText = styled.p`
    margin: 1rem;
`
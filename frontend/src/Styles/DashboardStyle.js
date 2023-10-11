import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh; 
    background-color: #e5e4f2;
    background-size: cover;
    overflow: hidden;
    display: flex;
    flex-direction: column;
	align-items: center;
	justify-content: center;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`
export const Wrapper = styled.div`
    width: 70vw;
    height: 50vh;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Title = styled.h1`

`
export const Button = styled.button`
    width: 20vw;
    height: 10vh;
    font-size: 1rem;
    font-weight: 500;
    background-color: #9d9ccf;

    &:hover{
        background-color: #7170b9;
    }
`
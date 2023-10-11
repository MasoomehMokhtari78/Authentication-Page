import React, {useState, useEffect} from 'react'
import 'react-phone-number-input/style.css'
import {Container, Field, Form, Input, MaterialIcon, StyledLink, SubmitBtn, Title, Wrapper, ErrorMessage, StyledError, StyledText } from '../Styles/FormStyle'
import {Person, Password} from '@mui/icons-material';
import { publicRequest } from "../requestMethods";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null)
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect (() => {
    if(isLoggedIn){
      navigate('/dashboard')
    }
  },[])

  const handleClick =  async (e) => {
    e.preventDefault()
    try{
      const res = await publicRequest.post('/login', {username, password});
      if(res.data==="A user with this username and password was not found."){
        setMessage(res.data)
        setStatus('fail')
      }else{
        dispatch(login(res.data))
        navigate('/dashboard')
      }
    }catch (error){

    }
}

  return (
        <Container>
            <Wrapper>
                <Title>Login</Title>
                {status === 'fail' && 
                <ErrorMessage>
                  <StyledError></StyledError>
                  <StyledText>{message}</StyledText>
                </ErrorMessage> }
                <Form>
                  <Field>
                      <MaterialIcon>
                        <Person/>
                      </MaterialIcon>
                    <Input
                      type='text'
                      placeholder='Enter Username'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Field>
                  <Field>
                    <MaterialIcon>
                      <Password/>
                    </MaterialIcon>
                  <Input
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  </Field>
                  <SubmitBtn onClick={handleClick}>Submit</SubmitBtn>
              </Form>
            </Wrapper>
            <StyledLink to='/password-reset'>Forgot Password?</StyledLink>
            <StyledLink to='/register'>Register</StyledLink>
        </Container>
  )
}

export default Login
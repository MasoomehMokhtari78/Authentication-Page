import React, {useState, useEffect} from 'react'
import 'react-phone-number-input/style.css'
import {Container, Field, Form, Input, MaterialIcon, SubmitBtn, Title, Wrapper, StyledLink, ErrorMessage, StyledCheck, StyledError, SuccessMessage, FootNote, StyledText } from '../Styles/FormStyle'
import {Person, Email, Password, Phone} from '@mui/icons-material';
import { publicRequest } from "../requestMethods";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rePass, setRePass] = useState('');
  const [message, setMessage] = useState(null);
  const [status, setStatus] = useState(null)
  const isLoggedIn = useSelector(state => state.user.isLoggedIn)
  const navigate = useNavigate()

  useEffect (() => {
    if(isLoggedIn){
      navigate('/dashboard')
    }
  },[])

  const handleClick = async (e) => {
    e.preventDefault()
    if(password !== rePass){
      setMessage("Entered Passwords don't match.")
      setStatus('fail')
    }else {
        try {
            const res = await publicRequest.post('/register', {username, email, password, phone})
            if (res.data === "This username is already taken."){
              setMessage(res.data)
              setStatus('fail')
              
            }else {
              setMessage("your registration has been successful! Redirecting to login...")
              setStatus('success')
              setTimeout(() => navigate("/login"), 2000);
            }
        }catch (error){
            console.log(error)
        }
    }
  }

  return (
        <Container>
            <Wrapper>
                <Title>Register</Title>
                {status === 'success' && 
                  <SuccessMessage>
                    <StyledCheck></StyledCheck>
                    <StyledText>{message}</StyledText>
                  </SuccessMessage> }
                {status === 'fail' && 
                <ErrorMessage>
                  <StyledError></StyledError>
                  <StyledText>{message}</StyledText>
                </ErrorMessage> }
                <Form>
                  <Field>
                      <MaterialIcon>
                        <Email/>
                      </MaterialIcon>
                    <Input
                      type='email'
                      placeholder='Enter Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Field>
                  <Field>
                      <MaterialIcon>
                        <Phone/>
                      </MaterialIcon>
                      {/* <PhoneInput/> */}
                      
                    <Input
                      type='number'
                      placeholder='Enter Your Phone Number'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    </Field>
                  <Field>
                    <MaterialIcon>
                      <Person/>
                    </MaterialIcon>
                    <Input
                      type='text'
                      placeholder='Enter Username'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
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
                    required
                  />
                  </Field>
                  <Field>
                    <MaterialIcon>
                      <Password/>
                    </MaterialIcon>
                  <Input
                    type='password'
                    placeholder='Enter Password again'
                    value={rePass}
                    onChange={(e) => setRePass(e.target.value)}
                    required
                  />
                  </Field>
                  <SubmitBtn onClick={handleClick}>Submit</SubmitBtn>
              </Form>
            </Wrapper>
            <FootNote>Already Have An Account?</FootNote>
            <StyledLink to='/login'>Log In Here!</StyledLink>
        </Container>
  )
}

export default Register
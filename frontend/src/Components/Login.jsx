import React, {useState} from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {Container, Field, Form, Input, MaterialIcon, StyledLink, SubmitBtn, Title, Wrapper } from '../Styles/FormStyle'
import {Person, Email, Password, Phone} from '@mui/icons-material';


function Login() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  return (
        <Container>
            <Wrapper>
                <Title>Login</Title>
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
                  <SubmitBtn>Submit</SubmitBtn>
              </Form>
            </Wrapper>
            <StyledLink to='/password-reset'>Forgot Password?</StyledLink>
            <StyledLink to='/register'>Register</StyledLink>
        </Container>
  )
}

export default Login
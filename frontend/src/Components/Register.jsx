import React, {useState} from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {Container, Field, Form, Input, MaterialIcon, SubmitBtn, Title, Wrapper, StyledLink } from '../Styles/FormStyle'
import {Person, Email, Password, Phone} from '@mui/icons-material';


function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rePass, setRePass] = useState('');
  return (
        <Container>
            <Wrapper>
                <Title>Register</Title>
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
                        <Phone/>
                      </MaterialIcon>
                      {/* <PhoneInput/> */}
                    <Input
                      type='tel'
                      placeholder='Enter Your Phone Number'
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
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
                  <Field>
                    <MaterialIcon>
                      <Password/>
                    </MaterialIcon>
                  <Input
                    type='password'
                    placeholder='Enter Password again'
                    value={rePass}
                    onChange={(e) => setRePass(e.target.value)}
                  />
                  </Field>
                  <SubmitBtn>Submit</SubmitBtn>
              </Form>
            </Wrapper>
            Already Have An Account?<StyledLink to='/login'>Log In Here!</StyledLink>
        </Container>
  )
}

export default Register
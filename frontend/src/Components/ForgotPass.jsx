import React, {useState} from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {Container, Field, Form, Input, MaterialIcon, StyledLink, SubmitBtn, Title, Wrapper, Info } from '../Styles/FormStyle'
import {Person, Email, Password, Phone} from '@mui/icons-material';


function ForgotPass() {
  const [email, setEmail] = useState('');
  return (
        <Container>
            <Wrapper>
                <Title>Password Reset</Title>
                <Info>We will send a link to your email to reset your password.</Info>
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
                  <SubmitBtn>Send</SubmitBtn>
              </Form>
            </Wrapper>
            <StyledLink to='/login'>Login</StyledLink>
        </Container>
  )
}

export default ForgotPass
import axios from 'axios';
import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateToken } from '../redux/userSlice';
import { Container, Wrapper, Title, Button } from '../Styles/DashboardStyle';
import { useState } from 'react';
import { logout } from '../redux/userSlice';
function Dashboard() {
    const {access, refresh, id} = useSelector(state => state.user)
    const [user, setUser] = useState([])
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleClick = () => {
        dispatch(logout())
        navigate('/login')
    }

    useEffect (() => {
        (async () => {
            try{
                axios.defaults.headers.common['Authorization'] = `Bearer ${access}`
                console.log(axios.defaults.headers)
                const {data} = await axios.post('http://127.0.0.1:8000/api/getuser',
                    {'id': id},
                    {headers: {
                        'Content-Type': 'application/json',
                    }})
                setUser(data)
            }catch(e){
                //user is unathorized. updating tokens
                if(e.response.status === 401){
                    new Promise(res => setTimeout(res, 5000))
                    const {data} = await axios.post('http://127.0.0.1:8000/api/refresh',
                    {refresh: refresh}, 
                    { headers:{'Content-Type': 'application/json'}})
                    dispatch(updateToken(data))
                }
                    
            }
        }) () 
    },[access]);
    console.log(user)

  return (
    <Container>
        <Wrapper>
            <Title>Welcome {user.username}</Title>
            <Button onClick={handleClick}>Log out</Button>
        </Wrapper>
    </Container>
  )
}

export default Dashboard;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import ForgotPass from './Components/ForgotPass'
import Dashboard from "./Components/Dashboard";
import { PrivateRoute } from './Components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/'>
          <Route path="/" element={<Login/>} />
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='password-reset' element={<ForgotPass/>}/>
          <Route path='dashboard' element={
          <PrivateRoute><Dashboard/></PrivateRoute> }/>
        </Route>
        <Route path="*" element={<Login/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

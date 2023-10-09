import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import ForgotPass from './Components/ForgotPass'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/'>
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='password-reset' element={<ForgotPass/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;

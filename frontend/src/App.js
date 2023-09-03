// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import MultipleProduct from './Components/MultipleProduct';

function App() {
  const {state} = useContext(AuthContext);
  console.log(state,"state from authcontext");
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Home /> } />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/multi-product' element={<MultipleProduct />} />
    </Routes>
    </>
  );
}

export default App;

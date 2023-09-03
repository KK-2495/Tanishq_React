import React, { useContext, useState } from 'react'
import {useNavigate} from "react-router-dom";
import {toast} from "react-hot-toast";
import axios from "axios";
import { AuthContext } from '../Context/AuthContext';
import "../Components/AllCss/Register.css";


const Login = () => {
  const router = useNavigate();
    
  const [userData, setUserData] = useState({ email: "", password: "" });

  const { dispatch,state } = useContext(AuthContext);
  console.log(state,"state from context into login component")


  const handleChange = (event) =>{
      setUserData({...userData,[event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) =>{
      event.preventDefault();
      if(userData.email && userData.password){
          try {
              const response = await axios.post("http://localhost:8000/api/v1/login",userData);
              if(response.data.success){
                  dispatch({
                      type: "Login",
                      payload: response.data.user
                    })
                    localStorage.setItem("userToken", JSON.stringify(response.data.token));
                  toast.success(response.data.message);
                  router("/");
              }
          } catch (error) {
              toast.error(error.response.data.message);
          }
      }else{
          toast.error("Email and password required..!");
      }
  }

  return (
    <>
      <div className="main">
            <div>
                <div className="userInfo">
                    <div className="user-head">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h1>Login or Signup</h1>
                            </div>
                            <div className="enterPhone loginEmail" >

                                <input id="email" type="email" name='email' onChange={handleChange} placeholder="Enter Your Email" /> 
                                <input id="password" type="password" name='password' onChange={handleChange} placeholder="Enter Your Password" />
                            </div>

                            <div className="checkBox checkBox1">
                                <input type="checkbox" />
                                <p>Remember Me</p>
                            </div>
                            <div className="policy">
                                <p>By Continuing, I agree to <u>Terms of Use</u> & <u>Privacy Policy</u></p>
                            </div>
                            <div className="button">
                                <input type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="loginImage">
                    <img src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwcaaa047f/login_signup/Mask-Group.png"
                        alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Login;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import "../Components/AllCss/Register.css";


const Register = () => {
    const router = useNavigate();
    const [userData, setUserData] = useState({ name: "", email:"", password:"", confirmPassword:"" });
    console.log(userData,"userdata");
    const handleChange = (event) =>{
        setUserData({ ...userData,[event.target.name]: event.target.value });
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(userData.name && userData.email && userData.password && userData.confirmPassword){
            if(userData.password === userData.confirmPassword){
                try {
                    const response = await axios.post("http://localhost:8000/api/v1/register", userData );
                    if(response.data.success){
                        setUserData({ name: '', email: "", password: "", confirmPassword: "" })
                        router('/login');
                        toast.success(response.data.message);
                      }
                } catch (error) {
                    toast.error(error.response.data.message);
                }
            }else{
                toast.error("Password and confirm Password does not match");
            }
        }else{
            toast.error("All fields are mandatory.");
        }
    }
  return (
    <>
        <div className="main">
            <div>
                <div className="userInfo">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h1>Register</h1>
                            </div>
                            <div className="enterPhone">
                                <fieldset>
                                    <legend>Code</legend>
                                    <p>+91 <i className="fa-solid fa-angle-down"></i></p>
                                </fieldset>
                                <input id="userPhNum" type="text" name="email" onChange={handleChange}  placeholder="Enter Mobile no. or Email" />
                            </div>
                            <div className="passwordField">
                                <input id="userName" type="text" name="name" onChange={handleChange} placeholder="Enter Your Name" />
                            </div>
                            <div className="passwordField">
                                <input id="userPassword" type="password" name="password" onChange={handleChange}  placeholder="Enter Password" />
                            </div>
                            <div className="passwordField">
                                <input id="userConfirmPassword" type="password" name="confirmPassword" onChange={handleChange}  placeholder="Confirm Password" />
                            </div>
    
                            <div className="checkBox">
                                <input type="checkbox" />
                                <p>Remember Me</p>
                            </div>
                            <div className="policy">
                                <p>By Continuing, I agree to <u>Terms of Use</u> & <u>Privacy Policy</u></p>
                            </div>
                            <div className="button">
                                <input type="submit" value="Register" />
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

export default Register;
/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";



const Login = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()


    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value 
        const password =  form.password.value
        console.log( email, password);

        signIn(email, password)
        .then(res => {
            const loggedInUser = res.user
            console.log(loggedInUser);
            const user = {email}

            axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
            .then(res => {
               if(res.data.success) {
                navigate(location?.state ? location?.state : "/")
               }
            })
            
            //get access token
        })
        .catch(error => {
            console.error(error.message);
        })
    }

    return (

        <div>

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-lg">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-1">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className=" mb-10 text-center">New to car doctors <Link className="font-bold text-orange-500" to={"/signUp"}>Sign Up</Link></p>
                
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;
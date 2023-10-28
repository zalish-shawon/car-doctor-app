import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const SignUp = () => {

    const {createUser} = useContext(AuthContext)



    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value 
        const password =  form.password.value
        console.log(name, email, password);

        createUser(email, password)
        .then(res => {
            console.log(res.user);
        })
        .catch(error => {
            console.error(error.message);
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-12">
                <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                <form onSubmit={handleSignUp} className="card-body">
                    <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                    </div>
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
                       
                    </div>
                    <div className="form-control mt-1">
                        <button className="btn btn-primary">Sign up</button>
                    </div>
                </form>
                <p className=" mb-10 text-center">Already have an account? <Link className="font-bold text-orange-500" to={"/login"}>Login</Link></p>
            
            </div>
        </div>
    </div>
    );
};

export default SignUp;
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const LogIn = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const logInHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)
        signIn(email, password)
        .then(res => {
            const user = res.user
            console.log(user)
            navigate(from, {replace:true})
        })
        .catch(err => console.log(err))
        form.reset()
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse mt-32">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={logInHandler} className="card-body form-control">

                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        <input type="submit" className='btn btn-accent w-full mt-4' value={'Log In'} />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate();
    const { createUser, updateUser } = useContext(AuthContext)
    const signInHandler = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value
        const password  = form.password.value
        const userName = form.username.value
        console.log(userName)
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            const userInfo = {
                displayName: userName
            }
            updateUser(userInfo)
            .then(() => {
                navigate('/')
            })
            .catch(error => console.log(error))
        })
        .catch(err => console.log(err))
        form.reset();
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse mt-32">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form onSubmit={signInHandler} className="card-body form-control">
                        
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" name='username' placeholder="User Name" className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            
                            <input type="submit" className='btn btn-accent w-full mt-4' value={'Sign Up'} />
                       
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
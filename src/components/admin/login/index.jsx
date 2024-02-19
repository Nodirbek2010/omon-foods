import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Login = () => {

    const navigate =useNavigate()
    const [state, setState] = useState(
        {
            login: '',
            password: '',
        }
    )

    const LoginPush = () => {
        const formData = new FormData();
        formData.append('username', state.login);
        formData.append('password', state.password);
        

        axios.post('https://omofood.pythonanywhere.com/api/v1/users/token/', formData)
            .then(response => {
                const token = response.data.access;
                localStorage.setItem('token', token);

                if (response.status===200) {
                    navigate('/admin/home')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (

        <div className="containerlogin d-flex justify-content-center align-items-center vh-100">
            <div className="col-md-6">
                <div className="card shadow">
                    <div className="card-body">
                        <h2 className="owtext-center card-title">Login</h2>
                        <div className="logininput">
                            <label htmlFor="username" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                onChange={(e) =>
                                    setState({ ...state, login: e.target.value })
                                }
                                required
                            />
                        </div>
                        <div className="logininput position-relative">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                // type={showPassword ? "text" : "password"}
                                className="form-control"
                                id="password"
                                onChange={(e) =>
                                    setState({ ...state, password: e.target.value })
                                }
                                required
                            />
                        </div>


                       <button
                            onClick={() => LoginPush()}
                            className="disabled:bg-gray-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center justify-center w-100"
                        >
                            Kirish
                        </button>
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

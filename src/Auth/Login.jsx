import React, { use } from 'react';
import { FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';

const Login = () => {
    const { signInWithGoogle }= use(AuthContext);
    const handleGoogleLogin = (e)=>{
        e.preventDefault();
        signInWithGoogle()
        .then(result =>{
            console.log(result);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div class="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-white to-[#FFF0DA] flex items-center justify-center px-4">
            <div class="w-full max-w-md bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8">

                {/* <!-- Logo / Title --> */}
                <div class="text-center mb-6">
                    <h2 class="text-3xl font-bold text-[#F39C12]">Welcome Back</h2>
                    <p class="text-sm text-gray-600 mt-1">Login to continue your flavor journey </p>
                </div>

                {/* <!-- Login Form --> */}
                <form class="space-y-4">
                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            class="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]"
                        />
                    </div>

                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            class="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]"
                        />
                    </div>

                    <button
                        type="submit"
                        class="btn btn-primary w-full bg-gradient-to-r from-[#F39C12] to-[#E67E22] border-none text-white font-semibold shadow-md hover:opacity-90 hover:scale-[1.02] transition-transform duration-200"
                    >
                        Login
                    </button>

                    <div class="divider text-gray-500 text-sm">or</div>

                    {/* <!-- Continue with Google --> */}
                    <button
                        onClick={handleGoogleLogin}
                        type="button"
                        class="btn w-full bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 flex items-center justify-center gap-2"
                    >
                        <FaGoogle></FaGoogle>
                        Continue with Google
                    </button>

                    <p class="text-center text-sm text-gray-600 mt-3">
                        Don't have an account?
                        <Link to={'/register'} class="text-[#E67E22] font-semibold hover:underline">Create one</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
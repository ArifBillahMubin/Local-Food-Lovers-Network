import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div class="min-h-screen bg-gradient-to-br from-[#FFF8E7] via-white to-[#FFF0DA] flex items-center justify-center px-4">
            <div class="w-full max-w-md bg-white backdrop-blur-md rounded-2xl shadow-2xl p-8 mt-20">

                {/* <!-- Logo / Title --> */}
                <div class="text-center mb-6">
                    <div class="flex justify-center mb-2">
                        
                    </div>
                    <h2 class="text-3xl font-bold text-[#F39C12]">Join Food Lovers</h2>
                    <p class="text-sm text-gray-600 mt-1">Create your account and start sharing your taste journey</p>
                </div>

                {/* <!-- Form --> */}
                <form class="space-y-4">
                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Name</label>
                        <input type="text" placeholder="Your full name" class="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]" />
                    </div>

                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Email</label>
                        <input type="email" placeholder="you@example.com" class="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]" />
                    </div>

                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Photo URL</label>
                        <input type="text" placeholder="Link to your profile photo" class="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]" />
                    </div>

                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Password</label>
                        <input type="password" placeholder="••••••••" class="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]" />
                    </div>

                    <div>
                        <label class="block text-gray-700 font-medium mb-1">Confirm Password</label>
                        <input type="password" placeholder="Re-type password" class="input input-bordered w-full border-[#F39C12]/40 focus:outline-none focus:ring-2 focus:ring-[#F39C12]" />
                    </div>

                    <button type="submit" class="btn btn-primary w-full bg-gradient-to-r from-[#F39C12] to-[#E67E22] border-none text-white font-semibold shadow-md hover:opacity-90 hover:scale-[1.02] transition-transform duration-200">
                        Create Account
                    </button>

                    <p class="text-center text-sm text-gray-600 mt-3">
                        Already have an account?
                        <Link to={'/login'} class="text-[#E67E22] font-semibold hover:underline">Login here</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
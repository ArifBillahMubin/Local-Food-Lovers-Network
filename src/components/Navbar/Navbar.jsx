import React from 'react';
import { Link, NavLink } from 'react-router';
import { IoLogoModelS } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaGear, FaUser } from "react-icons/fa6";
import { LuRotate3D } from "react-icons/lu";
import { ImBoxAdd } from "react-icons/im";
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        // <div className="navbar fixed min-h-0 z-1 shadow-sm rounded-full glass-card max-w-7xl mx-auto mt-4">
        <div className="navbar fixed top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 flex justify-between py-2 min-h-0 rounded-full bg-white/10 backdrop-blur-sm text-white shadow-sm mt-4 border border-white/10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {" "}
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />{" "}
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu fixed menu-sm dropdown-content bg-base-100 rounded-box z-100 mt-3 w-52 p-2 shadow"
                    >
                        <li className='text-lg'>
                            <NavLink to={"/"} >
                                <GoHomeFill />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/"}>
                                <IoLogoModelS /> All Models
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link to={"/"} className="py-2">
                    <img className='w-35 pl-3' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="menu menu-horizontal px-1 gap-10">
                    <li>
                        <NavLink to={"/"} className="text-[#F39C12] font-semibold text-lg">
                            <GoHomeFill />
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"} className="text-[#F39C12] font-semibold text-lg">
                            <IoLogoModelS /> All Models
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"} className="text-[#F39C12] font-semibold text-lg">
                            <ImBoxAdd /> Add model
                        </NavLink>
                    </li>
                    {/* 
          <li>
            <NavLink to={"/profile"}>
              <FaUser /> Profile
            </NavLink>
          </li> */}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;


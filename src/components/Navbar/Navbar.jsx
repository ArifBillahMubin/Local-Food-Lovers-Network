import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { IoLogoModelS } from "react-icons/io";
import { GoHomeFill } from "react-icons/go";
import { IoLogIn, IoLogOut } from "react-icons/io5";
import { FaGear, FaUser } from "react-icons/fa6";
import { LuRotate3D } from "react-icons/lu";
import { ImBoxAdd } from "react-icons/im";
import { MdLibraryAdd, MdReviews } from "react-icons/md";
import logo from "../../assets/logo.png"
import { AuthContext } from '../../Provider/AuthContext';


const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);

    const handleSignOutUser = () => {
        signOutUser()
            .then(() => {
                alert('signOut success..')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        // <div className="navbar fixed min-h-0 z-1 shadow-sm rounded-full glass-card max-w-7xl mx-auto mt-4">
        <div className="navbar fixed top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 flex justify-between py-2 min-h-0 rounded-full bg-white/10 backdrop-blur-sm text-white shadow-sm mt-4 border border-white/10">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-[#E67E22]"
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
                        className="menu fixed menu-sm dropdown-content text-[#E67E22] bg-black/90 backdrop-blur-sm rounded-box z-100 mt-3 w-52 p-2 shadow"
                    >
                        <li className='text-lg'>
                            <NavLink to={"/"} >
                                <GoHomeFill />
                                Home
                            </NavLink>
                            <NavLink to={"/addReview"} >
                                <GoHomeFill />
                                Add Review
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
                        <NavLink to={"/addReview"} className="text-[#F39C12] font-semibold text-lg" >
                            <GoHomeFill />
                            Add Review
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end gap-3 ">
                {user ? (
                    <div className="dropdown dropdown-end z-50">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-9 border-2 border-gray-300 hover:border-[#E67E22] rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    referrerPolicy="no-referrer"
                                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu  menu-sm dropdown-content bg-black/90 backdrop-blur-sm rounded-box z-50 mt-3 w-52 p-2 shadow text-[#E67E22]"
                        >
                            <div className=" pb-3 border-b text-[#E67E22] border-b-[#E67E22]">
                                <li className="text-sm font-bold ">{user.displayName}</li>
                                <li className="text-xs">{user.email}</li>
                            </div>
                            <li className="mt-3">
                                <Link to={"/profile"}>
                                    <FaUser /> Profile
                                </Link>
                            </li>

                            <li>
                                <Link to={"/addReview"}>
                                    <MdLibraryAdd />
                                    Add Review
                                </Link>
                            </li>

                            <li >
                                <Link to={"/myReview"}>
                                    <MdReviews></MdReviews>
                                    My Reviews
                                </Link>
                            </li>

                            {/* for theme toggle */}
                            {/* <input
                                // onChange={(e) => handleTheme(e.target.checked)}
                                type="checkbox"
                                defaultChecked={localStorage.getItem('theme') === "dark"}
                                className="toggle" /> */}

                            <li>
                                <button
                                    onClick={handleSignOutUser}
                                    className="btn btn-xs text-left btn-primary mt-2"
                                >
                                    <IoLogOut /> Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className='flex gap-3 mr-3'>
                        <Link
                            to={"/login"}
                            className="btn rounded-full btn-sm btn-primary"
                        >
                            {" "}
                            <IoLogIn /> Login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;


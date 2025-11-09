import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import useAxios from '../../hooks/useAxios';

const MyReview = () => {
    const { user } = use(AuthContext);
    const axiosInstance = useAxios();
    const [myReview, setReview] = useState([]);

    useEffect(() => {
        axiosInstance.get(`http://localhost:3000/myReviews?email=${user.email}`)
            .then((data) => {
                setReview(data.data)
            })
    }, [user, setReview, axiosInstance])

    console.log(myReview);
    return (
        <div className='my-40'>
            <div className="overflow-x-auto w-11/12 mx-auto my-10">
                <table className="table bg-white/90 border border-[#F39C12]/30 shadow-md rounded-xl overflow-hidden">
                    {/* Head */}
                    <thead className="bg-gradient-to-r from-[#F39C12] to-[#E67E22] text-white text-sm">
                        <tr>
                            <th>#</th>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Restaurant</th>
                            <th>Posted Date</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>


                    {/* "_id": "6910f166b7962e1023a4fd58",
                    "foodImage": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
                    "foodName": "Beef Cheese Burger",
                    "restaurant": "Burger House",
                    "location": "Dhaka, Bangladesh",
                    "rating": 4.7,
                    "review": "Juicy patty, melty cheese, and a soft bun. Totally worth it!",
                    "name": "Md. Arif Billah Mubin",
                    "email": "arifbillah0909@gmail.com",
                    "photoURL": "https://randomuser.me/api/portraits/men/32.jpg",
                    "createdAt": "2025-11-09T19:10:01.000Z" */}


                    {/* Body */}
                    <tbody className="text-gray-700">
                        {/* Row 1 */}
                        {
                            myReview.map((review, index) =>
                                <tr key={review._id} className="hover:bg-[#FFF8E7] transition-all">
                                    <td>{index + 1}</td>
                                    <td>
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-14 w-14">
                                                <img
                                                    src={review.foodImage}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="font-semibold">{review.foodName}</td>
                                    <td>{review.restaurant}</td>
                                    <td>{review.createdAt.split("T")[0]}</td>
                                    <td className="text-center space-x-2">
                                        <button className="btn btn-xs bg-[#F39C12] hover:bg-[#E67E22] text-white border-none">
                                            Edit
                                        </button>
                                        <button className="btn border-2 border-red-400 text-red-400 btn-xs">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                    {/* Foot */}
                    <tfoot className="bg-[#FFF8E7] text-gray-700 font-semibold">
                        <tr>
                            <th>#</th>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Restaurant</th>
                            <th>Posted Date</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    );
};

export default MyReview;
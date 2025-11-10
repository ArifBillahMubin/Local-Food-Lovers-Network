import React, { use, useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { AuthContext } from '../../Provider/AuthContext';
import LoaderSpinner from '../../components/LoaderSpinner/LoaderSpinner';
import { Link } from 'react-router';

const MyFavorite = () => {
    const axiosInstance = useAxios();
    const [favorites, setFavorites] = useState([]);
    const [loadingFavorite, setLoadingFavorite] = useState(true)
    const { user } = use(AuthContext);


    useEffect(() => {
        setLoadingFavorite(true);
        axiosInstance.get(`http://localhost:3000/myFavorite?email=${user.email}`)
            .then((data) => {
                setFavorites(data.data)
                setLoadingFavorite(false);
            })
    }, [user, setFavorites, axiosInstance])
    // console.log(favorites,loadingFavorite);

    if (loadingFavorite) {
        return <LoaderSpinner></LoaderSpinner>
    }


    return (
        <div className="my-40">
            <div className="overflow-x-auto w-11/12 mx-auto my-10">
                <h2 className="text-3xl font-semibold text-center text-[#F39C12] mb-8">
                    My Favorite Reviews 
                </h2>

                <table className="table bg-white/90 border border-[#F39C12]/30 shadow-md rounded-xl overflow-hidden">
                    {/* Head */}
                    <thead className="bg-gradient-to-r from-[#F39C12] to-[#E67E22] text-white text-sm">
                        <tr>
                            <th>#</th>
                            <th>Food Details</th>
                            <th>Reviewer Info</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="text-gray-700">
                        {favorites.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center py-10 text-gray-500 italic">
                                    No favorite reviews found.
                                </td>
                            </tr>
                        ) : (
                            favorites.map((favorite, index) => 
                                <tr key={favorite._id} className="hover:bg-[#FFF8E7] transition-all">
                                    {/* Index */}
                                    <td>{index + 1}</td>

                                    {/* Food Image + Details */}
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-14 w-14">
                                                    <img src={favorite.foodImage} alt={favorite.foodName} />
                                                </div>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-800">{favorite.foodName}</p>
                                                <p className="text-sm text-gray-500">
                                                    {favorite.restaurant}, {favorite.location}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Reviewer Info */}
                                    <td>
                                        <p className="font-semibold text-gray-800">{favorite.name}</p>
                                        <p className="text-sm text-gray-500">{favorite.email}</p>
                                    </td>

                                    {/* Actions */}
                                    <td className="text-center space-x-2">
                                        <button
                                            onClick={() =>
                                                console.log('Remove favorite clicked:', favorite._id)
                                            }
                                            className="btn border-2 border-red-400 text-red-400 btn-xs"
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                    {/* Foot */}
                    <tfoot className="bg-[#FFF8E7] text-gray-700 font-semibold">
                        <tr>
                            <th>#</th>
                            <th>Food Details</th>
                            <th>Reviewer Info</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default MyFavorite;
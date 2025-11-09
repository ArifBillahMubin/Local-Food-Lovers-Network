import React from 'react';
import { FaRegStar, FaStar, FaStarHalfStroke } from 'react-icons/fa6';

const ReviewCard = ({ review, delay }) => {
    const { foodImage, foodName, restaurant, location, name, rating } = review;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    return (
        <div data-aos="fade-up" data-aos-delay={delay} className="bg-white/90 border border-[#F39C12]/20 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col md:flex-row gap-4 p-5">

            {/* Food Image */}
            <div className="w-full md:w-1/3">
                <img
                    src={foodImage}
                    alt=""
                    className="w-full h-48 md:h-[200px] object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Review Details */}
            <div className="flex flex-col justify-between w-full md:w-2/3">
                <div>
                    <h2 className="text-2xl font-bold text-[#F39C12] mb-1">{foodName}</h2>

                    <p className="text-gray-700">
                        <span className="font-semibold text-[#E67E22]">Restaurant:</span> {restaurant}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold text-[#E67E22]">Location:</span> {location}
                    </p>
                    <p className="text-gray-700">
                        <span className="font-semibold text-[#E67E22]">Reviewer:</span> {name}
                    </p>

                    <div className="flex items-center gap-1 mt-2">
                        {Array.from({ length: fullStars }).map((_, i) => (
                            <FaStar key={`full-${i}`} className="text-[#F39C12] text-lg" />
                        ))}

                        {hasHalfStar && (
                            <FaStarHalfStroke className="text-[#F39C12] text-lg" />
                        )}

                        {Array.from({ length: emptyStars }).map((_, i) => (
                            <FaRegStar key={`empty-${i}`} className="text-gray-300 text-lg" />
                        ))}

                        <p className="text-sm text-gray-600 ml-2">{rating.toFixed(1)}</p>
                    </div>
                </div>

                <div className="mt-4 flex justify-end">
                    <button className="btn btn-primary border-none text-white font-semibold shadow-md">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
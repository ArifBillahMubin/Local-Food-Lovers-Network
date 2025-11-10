import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import TopRatedReviewCard from '../../components/TopRatedCard/TopRatedReviewCard';
import ReviewCard from '../../components/reviewCard/ReviewCard';
import Aos from 'aos';
import "aos/dist/aos.css";

const AllReview = () => {
    const allReviews = useLoaderData();
    console.log(allReviews);

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            offset: 120,
        });
    }, []);

    useEffect(() => {
        if (allReviews && allReviews.length > 0) {
            Aos.refreshHard();
        }
    }, [allReviews]);

    return (
        <div className='w-11/12 mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-40'>
                {
                    allReviews.map((review, idx) => <ReviewCard key={review._id} review={review} delay={idx * 30}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default AllReview;
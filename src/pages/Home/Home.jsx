import { useLoaderData } from 'react-router';
import Banner from '../../components/Banner/Banner';
import TopRatedReviewCard from '../../components/TopRatedCard/TopRatedReviewCard';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const Home = () => {
    const latestReviews = useLoaderData();

    //in animation 
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            offset: 120,
        });
    }, []);

    useEffect(() => {
        if (latestReviews && latestReviews.length > 0) {
            Aos.refreshHard();
        }
    }, [latestReviews]);


    return (
        <div>
            <Banner></Banner>

            <div className='py-20'>
                <h1 className='text-center text-4xl text-[#F39C12] font-semibold'>Top Picks by Food Lovers</h1>
                <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
                    {
                        latestReviews.map((review,idx) => <TopRatedReviewCard key={review._id} review={review} delay={idx * 150}></TopRatedReviewCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
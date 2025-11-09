import { useLoaderData } from 'react-router';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    const latestReviews = useLoaderData();
    console.log(latestReviews);
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;
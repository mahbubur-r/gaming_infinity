import React from 'react';
import Banner from '../../components/Banner/Banner';
import OurApps from '../OurApps/OurApps';
import { useLoaderData } from 'react-router';
import Services from '../../components/Services/Services';
import Testimonials from '../../components/Testimonials/Testimonials';
import News from '../../components/News/News';
import Action from '../../components/Action/Action';
import Stats from '../../components/Stats/Stats';

const Home = () => {
    // Received data from routes loader
    const appsData = useLoaderData();
    // console.log(appsData);
    return (
        <div>
            <title>Gaming Infinity-Home</title>
            {import.meta.env.VITE_name}
            <Banner></Banner>
            <Services></Services>
            <OurApps appsData={appsData}></OurApps>
            <Action></Action>
            <Testimonials></Testimonials>
            <News></News>
            <Stats></Stats>
        </div>
    );
};

export default Home;
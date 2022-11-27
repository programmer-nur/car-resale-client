import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import SiteSummary from './SiteSummary';
import Supports from './Supports';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Supports/>
            <hr className='mx-9'/>
            <Categories/>
            <SiteSummary/>
        </div>
    );
};

export default Home;
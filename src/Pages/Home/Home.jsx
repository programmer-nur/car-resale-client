import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Supports from './Supports';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Supports/>
            <Categories/>
        </div>
    );
};

export default Home;
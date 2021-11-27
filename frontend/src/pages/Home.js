import React from 'react'
import Hero from '../components/Hero';
import Calltoaction from '../components/Calltoaction';
import Carousel from '../components/Carousel';


class Home extends React.Component {
    render() { 
        return (
        <div>
            <Hero/>
            <Calltoaction/>
            <Carousel/>
        </div>);
    }
}

export default Home;
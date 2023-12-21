import React from 'react';


import bestProducts_data from '../../Data/BestProducts_data.json'
import BestProducts from './BestProducts';
import Nav from '../MainPage/Nav';
import Footer from '../MainPage/Footer';

const BestProductList = () => {
    return (
        <>
            <Nav/>
            <BestProducts items={bestProducts_data} />
            <Footer />
        </>
    );
};

export default BestProductList;




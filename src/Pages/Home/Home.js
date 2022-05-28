import React from 'react';
import Banner from './Banner/Banner';
import Footer from './Footer';
import Products from './Products'
const Home = () => {
  return (
    <div className='bg-gray-100'>
      <Banner></Banner>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default Home;
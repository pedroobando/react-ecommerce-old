import React from 'react';

import CategorySection from './CategorySection';
import HeaderSection from './HeaderSection';

import OfferSection from './OfferSection';
import ProductSection from './ProductSection';
import TestimonialSection from './TestimonialSection';
import BrandSection from './BrandSection';

import LatestProductSection from './LatestProductSection';
import FooterSection from './FooterSection';

import './HomePage.css';

const HomePage = ({ Navbar }) => {
  return (
    <>
      <HeaderSection Navbar={Navbar} />
      <CategorySection />
      <ProductSection />
      <LatestProductSection />
      <OfferSection />
      <TestimonialSection />
      <BrandSection />
      <FooterSection />
    </>
  );
};

export default HomePage;

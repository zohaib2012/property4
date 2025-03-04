import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Propertycards from './Propertycards';
import BrowseProperties from './BrowseProperties';
import CityCard from './CityCard';
import { useGetAllCitiesQuery } from '../Redux/CommonApi';
import Faq from './Faq';
import HomeFilter from './HomeFilter';




const Home = () => {
  const navigate = useNavigate();

  const handlePropertyClick = (propertyType) => {
    const formattedPropertyName = propertyType.toLowerCase().replace(/\s+/g, "");
    const url = `/properties?propertyType=${formattedPropertyName}`;
    console.log("Navigating to:", url);  // Debugging log
    navigate(url);
  };



  return (
    <>
      <div className='bg-img'>
        <div className="d-flex row align-items-center justify-content-center text-white py-2 filter">
          <div className="d-flex flex-wrap col-md-12 justify-content-center bg-secondary filterborder text-light px-4 py-2 rounded-sm">
            <a
              href="#"
              className="text-decoration-none"
              onClick={() => handlePropertyClick('Sale')}
            >
              <div className="px-4 py-2 border-bottom border-warning rounded-bottom">
                Sale
              </div>
            </a>
            <a
              href="#"
              className="text-decoration-none"
              onClick={() => handlePropertyClick('House')}
            >
              <div className="px-4 py-2 border-bottom border-transparent rounded-bottom hover-border-primary">
                Houses
              </div>
            </a>
            <a
              href="#"
              className="text-decoration-none"
              onClick={() => handlePropertyClick('Plot')}
            >
              <div className="px-4 py-2 border-bottom border-transparent rounded-bottom hover-border-warning">
                Plots
              </div>
            </a>
            <a
              href="#"
              className="text-decoration-none"
              onClick={() => handlePropertyClick('Commercial')}
            >
              <div className="px-4 py-2 border-bottom border-transparent rounded-bottom hover-border-warning">
                Commercials
              </div>
            </a>
            <a
              href="#"
              className="text-decoration-none"
              onClick={() => handlePropertyClick('Flat')}
            >
              <div className="px-4 py-2 border-bottom border-transparent rounded-bottom hover-border-warning">
                Flats
              </div>
            </a>
          </div>
        </div>
       <HomeFilter/>
      </div>
      <div className='py-4'>
       
        <BrowseProperties/>
        <CityCard/>
        {/* <Propertycards /> */}
        <Faq/>
        {/* <Gallery/> */}
      </div>
    </>
  );
};

export default Home;

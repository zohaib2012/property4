import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CityCard = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
      AOS.init({
        duration: 1000, // Adjust duration to your preference
        once: false,    // Ensure animations trigger multiple times (default is false)
        offset: 100,    // Trigger animation when element is 100px from the top of the viewport
      });
  
      // Refresh AOS on scroll (optional)
      window.addEventListener('scroll', () => {
        AOS.refresh(); // Refresh animations when scrolling
      });
  
      // Cleanup listener
      return () => {
        window.removeEventListener('scroll', () => {
          AOS.refresh();
        });
      };
    }, []);

  const handleCityClick = (cityName) => {
    const formattedCityName = cityName.toLowerCase().replace(/\s+/g, "");
    const url = `/properties?city=${formattedCityName}`;
    console.log("Navigating to:", url);  // Debugging log
    navigate(url);
  };

  return (
    <>
      <div className='container py-4 citycard-sec'>
        <h2 className='pb-4'>Search Your Property by City</h2>
        <div className='row '>
          <div className="col-md-4 py-2" data-aos="fade-up">
            <div className="card ">
              <div className="card-body lhr-img citycard" onClick={() => handleCityClick('Lahore')}>
                <div className="py-3">
                  <h2 className='text-bottom'>
                    Lahore
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 py-2" data-aos="fade-up">
            <div className="card " onClick={() => handleCityClick('Islamabad')}>
              <div className="card-body isl-img citycard">
                <div className="py-3">
                  <h2 className='text-bottom'>
                    Islamabad
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 py-2" data-aos="fade-up">
            <div className="card " onClick={() => handleCityClick('Karachi')}>
              <div className="card-body karachi-img citycard">
                <div className="py-3">
                  <h2 className='text-bottom'>
                    Karachi
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 py-2" data-aos="fade-up">
            <div className="card " onClick={() => handleCityClick('Faislabad')}>
              <div className="card-body fsd-img citycard">
                <div className="py-3">
                  <h2 className='text-bottom'>
                    Faislabad
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 py-2" data-aos="fade-up">
            <div className="card " onClick={() => handleCityClick('Multan')}>
              <div className="card-body multan-img citycard">
                <div className="py-3">
                  <h2 className='text-bottom'>
                    Multan
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 py-2" data-aos="fade-up">
            <div className="card " onClick={() => handleCityClick('Quetta')}>
              <div className="card-body quetta-img citycard">
                <div className="py-3">
                  <h2 className='text-bottom'>
                    Quetta
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CityCard;

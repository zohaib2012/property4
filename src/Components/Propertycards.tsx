import React from 'react';
import { useGetAllCitiesQuery, useGetAllpropertiesQuery } from '../Redux/CommonApi';
import { useNavigate } from 'react-router-dom';

const Propertycards = () => {
  const navigate = useNavigate();
  const {
    data: propertydata,
    error,
    isLoading,
  } = useGetAllpropertiesQuery({});

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(propertydata,"propertydata")

  if (error) {
    return <p>Something went wrong!</p>;
  }
  const truncateText = (text, maxLength) => {
    // if (!text) return 'No description available';
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };

  const displayedProperties = propertydata?.alllistedproperties.slice(0, 6);
  const handleCardClick = (id) => {
    navigate(`/property/${id}`);
  };
  return (
    <>
    <div className='container '>
    <div className="row py-4">
      {displayedProperties?.map((property) => (
        <div className="col-xl-4 mb-4" key={property._id}
        onClick={() => handleCardClick(property._id)}
        style={{ cursor: 'pointer' }}>
          <div className="card propertycard">
            <img
              src={property.images.length > 0 ? property.images[0] : '/public/AlArabtrans.jpg'}
              className="card-img-top image-fluid"
              alt={property.title || 'Property Image'}
            />
            <div className="card-body">
              <h5 className="card-title fw-semibold text-primary">{property.title || 'Untitled Property'}</h5>
              <div className='d-flex justify-content-between'>
              <h4><span >PKR</span> {property.price}  </h4>
              <div className='d-flex iconbox'>
                <div className='pbox'></div>
              <h6>{property.propertytype}
              </h6>
              </div>
              </div>
              {/* <p className="card-text mb-3 text-muted">{truncateText(property.description, 40)}</p> */}
              <p className="card-text my-2">
              <i className="fa-solid fa-location-dot"></i>
                <span className='ps-2'> {property.location}, {property.city}</span>
              </p>
              <div className="card-text mb-0 d-flex ">
              <p ><i className="fa-solid fa-bed"></i>
              <span className='ps-2'>3bed</span></p>
              <p className='ps-2'><i className="fa-duotone fa-solid fa-bath"></i>
              <span className='ps-2'>2bath</span></p>
                <p className='ps-2'><i className="fa-solid fa-arrow-up-right-from-square"></i> 
                <span className='ps-2'>{property.areasize} {property.areasizeunit}</span></p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div></>
  );
};

export default Propertycards;

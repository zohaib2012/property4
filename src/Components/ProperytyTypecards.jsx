import React, { useState } from 'react';
import { useNavigate, useParams,useSearchParams } from 'react-router-dom';
import { useGetAllpropertiesQuery } from '../Redux/CommonApi';
import NoData from '../Maincomponent/NoData';

const PropertyTypecards = () => {
  const [searchParams] = useSearchParams();

  const city = searchParams.get("city");
  const location = searchParams.get("location");
  const propertyType = searchParams.get("propertyType");
  const areasize = searchParams.get("areasize");
  const areasizeunit = searchParams.get("areasizeunit");
  const minprice = searchParams.get("minprice");
  const maxprice = searchParams.get("maxprice");
  const purpose = searchParams.get("purpose");
  const { data: propertydata, error, isLoading } = useGetAllpropertiesQuery({});
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const ITEMS_PER_PAGE = 9;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!</p>;
  }
  // Refined filter logic
//   const filteredProperties = propertydata?.alllistedproperties.filter((property) => {
    

//     let matches = true;
//     // Filter by propertyType
//     if (propertyType) {
//       matches =
//         matches &&
//         [property.propertytype, property.location, property.purpose]
//           .map((val) => val?.toLowerCase())
//           .includes(propertyType.toLowerCase());
//     }
   
//     if (City) matches = matches && property.city.toLowerCase() === City.toLowerCase();
//     if (location) matches = matches && property.location.toLowerCase() === location.toLowerCase();
    
  
//     // Filter by areasize and areasizeunit (strict check)
//     if (areasize && areasizeunit) {
//       const parsedAreaSize = Number(areasize); // Ensuring it's a number
//       const propertyAreaSize = Number(property.areasize); // Ensuring it's a number
//       const propertyUnit = property.areasizeunit?.trim().toLowerCase(); // Consistent formatting
  
//       matches =
//         matches &&
//         parsedAreaSize === propertyAreaSize && // Exact area size match
//         areasizeunit.trim().toLowerCase() === propertyUnit; // Exact unit match

//     }
// debugger
//     // Filter by price (min and max)
//   // Filter by price (min and max)
// if (minprice && maxprice) {
//   const parsedMinPrice = Number(minprice) || 0; 
//   const parsedMaxPrice = Number(maxprice) || Number.MAX_SAFE_INTEGER;
//   if (parsedMinPrice && parsedMaxPrice) {
//     const propertyPrice = Number(property.price);
//     matches = matches && propertyPrice >= parsedMinPrice && propertyPrice <= parsedMaxPrice;
// }
// }

  
//     return matches;
//   });
  
  const filteredProperties = propertydata?.alllistedproperties.filter((property) => {
    let matches = true;
  
    if (propertyType) {
      matches = matches && property.propertytype.toLowerCase() === propertyType.toLowerCase();
    }
    if (purpose) {
      matches = matches && property.purpose.toLowerCase() === purpose.toLowerCase();
    }
    if (city) {
      matches = matches && property.city.toLowerCase() === city.toLowerCase();
    }
    if (location) {
      matches = matches && property.location.toLowerCase() === location.toLowerCase();
    }
    if (minprice && maxprice) {
      const propertyPrice = Number(property.price);
      matches = matches && propertyPrice >= Number(minprice) && propertyPrice <= Number(maxprice);
    }
    if (areasize && areasizeunit) {
      matches = matches &&
        Number(property.areasize) === Number(areasize) &&
        property.areasizeunit.toLowerCase() === areasizeunit.toLowerCase();
    }
  
    return matches;
  });
  
  // Pagination logic
  const totalPages = Math.ceil(filteredProperties?.length / ITEMS_PER_PAGE) || 1;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProperties = filteredProperties?.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  ) || [];

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="container">
      <h2 className="text-primary my-4">
        {propertyType || 'All'} Properties
      </h2>
      <div className="row">
        {currentProperties.length > 0 ? (
          currentProperties.map((property) => (
            <div
              className="col-xl-4 mb-4"
              key={property._id}
              onClick={() => handleCardClick(property._id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card propertycard">
                <img
                  src={
                    property.images?.length > 0
                      ? property.images[0]
                      : '/public/AlArabtrans.jpg'
                  }
                  className="card-img-top img-fluid"
                  alt={property.title || 'Property Image'}
                />
                <div className="card-body">
                  <h5 className="card-title fw-semibold">
                    {property.title || 'Untitled Property'}
                  </h5>
                  <div className="d-flex justify-content-between">
                    <h4>
                      <span>PKR</span> {property.price}
                    </h4>
                    <h6>{property.propertytype}</h6>
                  </div>
                  <p className="card-text my-2">
                    {/* <i className="fa-solid fa-location-dot"></i> */}
                    <h6 className="">
                     For {property.purpose}
                    </h6>
                  </p>
                  <p className="card-text my-2">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="ps-2">
                      {property.location}, {property.city}
                    </span>
                  </p>
                  <div className="card-text d-flex">
                    <p>
                      <i className="fa-solid fa-bed"></i>
                      <span className="ps-2">3 Beds</span>
                    </p>
                    <p className="ps-2">
                      <i className="fa-solid fa-bath"></i>
                      <span className="ps-2">2 Baths</span>
                    </p>
                    <p className="ps-2">
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      <span className="ps-2">
                        {property.areasize} {property.areasizeunit}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <NoData />
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center my-4">
          <button
            className="btn btn-outline-primary mx-1"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page + 1}
              className={`btn mx-1 ${
                currentPage === page + 1 ? 'btn-primary' : 'btn-outline-primary'
              }`}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </button>
          ))}
          <button
            className="btn btn-outline-primary mx-1"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertyTypecards;

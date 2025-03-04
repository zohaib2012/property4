import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPropertybyIdQuery } from '../Redux/CommonApi'; // Correct hook for fetching single property
import Slider from './Slider';

const Propertydetail = () => {
  const { id } = useParams(); // Extract the id from the URL
  const User = localStorage.getItem("userName");
  // Use the correct API hook to fetch the single property by its id
  const {
    data,
    error,
    isLoading,
  } = useGetPropertybyIdQuery(id); // Pass the id to fetch the specific property

  console.log(data, "data") // Log the complete response to inspect it

  // Handle loading state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Handle error state
  if (error) {
    return <p>Something went wrong! {error.message}</p>;
  }

  // If property is not found
  if (!data || !data.singleproperty) {
    return <p>Property not found.</p>;
  }

  const propertydetail = data.singleproperty; // Access the 'singleproperty' from the data

  return (
    <div className="container py-4 propertydetail">
      <h2 className='py-2'>{propertydetail.areasize} {propertydetail.areasizeunit} {propertydetail.propertytype} For {propertydetail.purpose} In {propertydetail.location}
      </h2>
      <Slider images={propertydetail?.images || []} />
      <div className='row'>
        <div className='col-md-8'>
          <h4 className='pt-4 ps-4'><span >PKR</span> {propertydetail.price}  </h4>
          <div className="card-text mb-0 d-flex py-4 ps-4">
            <p ><i className="fa-solid fa-bed"></i>
              <span className='ps-2'>{propertydetail.bedroom} Bed</span></p>
            <p className='ps-4'><i className="fa-duotone fa-solid fa-bath"></i>
              <span className='ps-2'>{propertydetail.bathroom} Bath</span></p>
            <p className='ps-4'><i className="fa-solid fa-arrow-up-right-from-square"></i>
              <span className='ps-2'>{propertydetail.areasize} {propertydetail.areasizeunit}</span></p>
          </div>
        </div>
        <div className='col-md-4 pt-4'>
          <div className="card card-bg-secondary">
            <div className="card-body">
              <div className="d-flex  w-100">
                <div className="me-2">
                  <span className="avatar avatar-rounded avatarcircle bg-primary">
                    <i className="fa-duotone fa-solid fa-user-tie "></i>
                  </span>
                </div>
                <div className="">
                  <div className="fs-15 fw-semibold">{User}</div>
                  <span className="mb-0 text-fixed-white op-7 fs-10">
                  <i class="fa-solid fa-phone pe-2 "></i>{ propertydetail.number}
                
                  </span>
                  <br/>
                  <span className='ps-4'>
                  {propertydetail.landline}
                  </span>
                </div>
                {/* <div className="ms-auto">
                  <a
                    href="https://wa.me/923036422208?text=Hello%20I%20would%20like%20to%20inquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                  >
                    <i
                      className="fa-brands fa-whatsapp text-green-600 text-5xl p-3"
                      style={{ fontSize: 50 }}
                    />
                    Chat with us on WhatsApp
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className="col-md-12">
          <div className="card ">
            <div className="card-header">
              <h5 className="card-title">Property Detail</h5>
            </div>
            <div className="card-body ">
              <div className='row'>
                <div className='col-md-4 col-sm-12'>
                  <div className="table-responsive">
                    <table className="table table-striped table-borderless mb-0">
                      <thead></thead>
                      <tbody>
                        <tr style={{ backgroundColor: "green" }}>
                          <td>Property Type</td>
                          <td className="propertytext">{propertydetail.propertytype}</td>
                        </tr>
                        <tr>
                          <td>Location</td>
                          <td className="propertytext">{propertydetail.location}</td>
                        </tr>
                        <tr style={{ backgroundColor: "green" }}>
                          <td>Purpose</td>
                          <td className="propertytext">{propertydetail.purpose}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>

                <div className='col-md-4 col-sm-12'>
                  <div className="table-responsive">
                    <table className="table table-striped table-borderless mb-0 px-4">
                      <thead>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Advance Payment</td>
                          <td className='propertytext'>{propertydetail.advancepayment}</td>
                        </tr>
                        <tr>
                          <td>No of Installments</td>
                          <td className='propertytext'>{propertydetail.noofinstallments}</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='col-md-4'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='ps-4 py-2'>
        <h5>Description</h5>
        <p>{propertydetail.description || 'No description available.'}</p>
      </div>
      <div className='ps-4 py-2'>
        <h5>Features</h5>
        <p>{propertydetail.FeatureandAmenities || 'No description available.'}</p>
      </div>
    </div>

  );
};

export default Propertydetail;

import React, { useState } from 'react'
import { useContactformMutation, usePropertyformMutation } from '../Redux/CommonApi';
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const ContactUs = () => {
      const [errors, setErrors] = useState({});
   const [contactform, { isLoading, isError, isSuccess }] = useContactformMutation();
       const [contactForm, setContactform] = useState({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
               
            });
            
            const validate = () => {
                const newErrors = {};
                Object.keys(contactForm).forEach((key) => {
                 if (!contactForm[key] || contactForm[key].toString().trim() === "") {
                        newErrors[key] = `${key} is required.`;
                    }
                });
                setErrors(newErrors);
                return Object.keys(newErrors).length === 0;
            };
             const handleSubmit = async (e) => {
                e.preventDefault();
                if (!validate()) return;
            
                const payload = {
                    ...contactForm,
                  
                };
            console.log(payload)
                try {
                    alert("Your Form is Submitted ,Thank You!");
                } catch (error) {
                   alert("Error submitting the form:");
                }
            };   
            const handleChange = (e) => {
                const { name, value,  } = e.target;
                    setContactform((prevState) => ({
                        ...prevState,
                        [name]: value,
                    }));
                setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
            };
        
  return (
 <>
 <div className='contactus-img'>
 <div className='row container'>
          <div className="col-md-12  align-items-center text-center justify-content-center herosection ">
            <h4>Contact Us</h4>
            {/* <h5>Your dream property is just a conversation away – connect with us now!</h5> */}
          </div>
        
        </div>
 </div>
 <div className="container py-5 ">
            <div className="card propertycard ">

                <div className="card-body">
                    <h2 className="py-4 text-center">Contact us to make your real estate dreams a reality!</h2>
                    <form onSubmit={handleSubmit} className="py-2">

                        <div className="row addproperty-pad">
                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Full Name</label>
                                    <input
                                        className="form-control addproperty-form"
                                        name="name"
                                        value={contactForm.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.title && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.title}</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Email</label>
                                    <input
                                        className="form-control  addproperty-form "
                                        name="email"
                                        type='email'
                                        value={contactForm.email}
                                        onChange={handleChange}
                                        required
                                    />
                                      
                                    {errors.propertytype && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.propertytype}</p>
                                    )}
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Phone Number</label>
                                    <input
                                        className="form-control  addproperty-form "
                                        name="phone"
                                        value={contactForm.phone}
                                        type='number'
                                        onChange={handleChange}
                                        required
                                    />
                                       
                                    {errors.city && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.city}</p>
                                    )}
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="form-wrap">
                                    <label className="col-form-label">Subject</label>
                                    <input
                                        className="form-control addproperty-form"
                                        name="subject"
                                        value={contactForm.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                    {errors.areasize && (
                                        <p style={{ color: "#9E2A2B" }}>{errors.location}</p>
                                    )}
                                </div>
                            </div>

                            <div>Message</div>
                            <textarea
                                rows={10}
                                cols={10}
                                className="form-control form-textarea"
                                placeholder="Write about property...."
                                name="message"
                                value={contactForm.message}
                                onChange={handleChange}
                            />
                            <div className="text-end py-2">
                                <button type="submit" className="btn bg-primary" disabled={isLoading}>
                                    {isLoading ? "Submitting..." : "Submit Message"}
                                </button>
                            </div>
                            {/* {isError && <p style={{ color: "red" }}>Error occurred while submitting.</p>}
                            {isSuccess && <p style={{ color: "green" }}>Form submitted successfully!</p>} */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
 </>
  )
}

export default ContactUs

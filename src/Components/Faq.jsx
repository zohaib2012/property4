import React from 'react'

const Faq = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src='/public/faqs.png' className=' faq rounded-3' alt='image' />
                    </div>
                    <div className='col-md-6'>
                        <h2 className='py-2 ps-2'>
                            Frequently asked Questions
                        </h2>
                        <div className="accordion accordion-flush pt-4" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header faq-ques" id="flush-headingOne">
                                    <button className="accordion-button collapsed faq-ques" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        How do I add my property for sale or rent on AL-Arab?
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        Simply create an account on AL-Arab, then go to the 'Add Property' section,
                                        where you'll be able to fill in details about your property, upload images, and set the price.
                                        Your property will be listed on the website once submitted.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        How can I contact the property owner or agent?
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        Each property listing includes contact details for the property owner or agent. You can
                                        reach out to them directly via the provided phone number or email address, or use the website’s contact form to inquire about a property.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        What if I find a property I’m interested in, but I need more details?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        If you need more information about a property, you can request additional details
                                        through the contact form or by directly messaging the property owner or agent.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        Can I list my commercial property on AL-Arab?
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        Yes, AL-Arab allows listings for both residential and commercial properties. Simply provide details about your commercial property in the listing form, and it will be available to potential buyers or tenants.
                                    </div>
                                </div>
                            </div>
                            {/* <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        How can I ensure my property listing stands out?
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">
                                        To ensure your property listing stands out, include high-quality images, write an engaging description, and provide as many details as possible. You can also choose to feature your listing for increased visibility.
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq

import React from 'react'

const AboutUs = () => {
    return (
        <>
            <div className='aboutus-img'>
                <div className=' container'>
                    <div className='row '>
                        <div className="col-md-8  align-items-start justify-content-center herosection ">
                            <h4>AlArab Real Estate is your trusted partner for finding, buying, and selling exceptional properties</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container py-5 aboutus'>
                <div>
                    <h2 className='text-center'>
                        Welcome to Al-Arab
                    </h2>
                    <p className='py-3'>
                        Welcome to Al-Arab Real Estate, where your property dreams come to life.
                        With a passion for excellence and a commitment to delivering exceptional
                        service, we specialize in connecting buyers, sellers, and investors with
                        the perfect real estate opportunities.
                        At Al-Arab, we understand that real estate is more than just transactions –
                        it’s about building trust, creating value, and turning visions into reality.
                        Whether you’re searching for a luxurious family home or commercial space to grow your business, our team is dedicated to
                        guiding you every step of the way.
                    </p>
                    <div className='row py-2 '>
                        <div className='col-md-3'>
                            <img src='/public/heroimg1.jpg' className='img-fluid' alt='image' />
                        </div>
                        <div className='col-md-3'>
                            <img src='/public/heroimg2.jpg' className='img-fluid' alt='image' />
                        </div>
                        <div className='col-md-3'>
                            <img src='/public/heroimg.jpg' className='img-fluid' alt='image' />
                        </div>
                        <div className='col-md-3'>
                            <img src='/public/aims.jpeg' className='img-fluid' alt='image' />
                        </div>

                    </div>
                </div>
                <div className=' py-5'>
                    <h2 className='text-center'>
                        Why Choose Us?
                    </h2>
                    <div className='row py-4'>

                        <div className='col-md-6 ps-3'>
                            <img src='/public/heroimg1.jpg' className='img-fluid rounded-3' alt='image' />
                        </div>
                        <div className='col-md-6'>
                            <div className='chooseus pb-2'>
                                <h4>
                                    <i className="fa-solid fa-handshake"></i> Expertise You Can Trust
                                </h4>
                                <p>
                                    With years of experience in the real estate market, we bring
                                    unparalleled knowledge and insights to help you make informed decisions.
                                </p>
                            </div>
                            <div className='py-2 chooseus'>
                                <h4>
                                    <i className="fa-solid fa-briefcase"></i> Diverse Portfolio
                                </h4>
                                <p>
                                    From stunning residential properties to high-potential commercial
                                    spaces, we offer a wide range of options tailored to your needs.
                                </p>
                            </div>
                            <div className='py-2 chooseus'>
                                <h4>
                                    <i className="fa-solid fa-users"></i> Client-Centric Approach
                                </h4>
                                <p>
                                    Your satisfaction is our priority. We listen, understand,
                                    and work diligently to meet your unique requirements.
                                </p>
                            </div>
                            <div className='py-2'>
                                <h4>
                                    <i className="fa-solid fa-money-bill"></i> Transparent Transactions:
                                </h4>
                                <p>
                                    Honesty and integrity are the cornerstones of our business,
                                    ensuring every transaction is seamless and secure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <h2 className='text-center pb-4'>
                        Our Mission
                    </h2>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='card '>
                                <div className='card-body rounded-4 aboutuscard'>
                                    <h4>
                                <i className="fa-sharp-duotone fa-solid fa-house"></i>
                                </h4>
                                    <h5>
                                        Simplifying Real Estate for You
                                    </h5>
                                    <p className='pt-2'>
                                        To simplify the real estate process by providing exceptional service, unmatched expertise,
                                        and personalized solutions,
                                        helping clients achieve their property goals with confidence and ease.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-4'>
                            <div className='card '>
                                <div className='card-body  rounded-4 aboutuscard'>
                                    <h4>
                                    <i className="fa-sharp fa-solid fa-circle-check"></i>
                                    </h4>
                                    <h5>
                                        Creating Success Stories in Real Estate
                                    </h5>
                                    <p className='pt-2'>

                                        At Al-Arab Real Estate, we believe in making every property journey a success story.
                                        Let us help you write yours.

                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-4'>
                        <div className="card">
                                <div className="card-body aboutuscard rounded-4">
                                    <h4>
                                    <i className="fa-solid fa-handshake-simple"></i>
                                    </h4>
                                <h5>
                                        Partner with Us
                                    </h5>
                                    <p className='pt-2'>

                                        Contact us today to explore how we can make your real estate aspirations a reality!

                                    </p>
                                </div>
                            </div>
                          

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs

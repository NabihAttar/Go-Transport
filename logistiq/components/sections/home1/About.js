'use client'
import Link from "next/link"
import ReactCurvedText from 'react-curved-text'
export default function About() {
    return (
        <>

            <section className="about-one">
                <div className="container">

                    <div className="row">
                        <div className="col-xl-5">
                            <div className="about-one__img">
                                <div className="shape1 float-bob-y"><img src="assets/images/shapes/about-v1-shape1.png" alt="" />
                                </div>
                                <div className="shape2 float-bob-y"><img src="assets/images/shapes/about-v1-shape2.png" alt="" />
                                </div>
                                <div className="about-one__img1 reveal">
                                    <img src="assets/images/about/about-v1-img1.jpg" alt="" />
                                </div>

                                <div className="about-one__img2">
                                    <div className="about-one__img2-inner reveal">
                                        <img src="assets/images/about/about-v1-img2.jpg" alt="" />
                                    </div>
                                    {/* 
                                <div className="about-one__circle-text">
                                    <div className="about-one__round-text-box">
                                        <div className="inner">
                                            <div className="about-one__curved-circle rotate-me">
                                                <ReactCurvedText width='150'
                                                    height='150'
                                                    cx='75'
                                                    cy='75'
                                                    rx='55'
                                                    ry='55'
                                                    startOffset='0'
                                                    reversed={true}
                                                    text='WELCOME TO OUR COMPANY SINCE 2002'
                                                    textProps={{ "style": { "fontSize": "14" } }}
                                                    textPathProps={{ "fill": "#ffffff" }}
                                                    tspanProps={null}
                                                    ellipseProps={null}
                                                    svgProps={null}
                                                />                                                
                                            </div>
                                        </div>
                                        <div className="overlay-icon-box">
                                            <Link href="#"><i className="icon-location1"></i></Link>
                                        </div>
                                    </div>
                                </div> */}
                                    <div className="shape3 float-bob-y">
                                        <img src="assets/images/shapes/about-v1-shape3.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Start About One Content*/}
                        <div className="col-xl-7">
                            <div className="about-one__content">
                                <div className="sec-title tg-heading-subheading animation-style2">
                                    <div className="sec-title__tagline">
                                        <div className="line"></div>
                                        <div className="text tg-element-title">
                                            <h4>Our Company</h4>
                                        </div>
                                        <div className="icon">
                                            <span className="icon-plane2 float-bob-x3"></span>
                                        </div>
                                    </div>
                                    <h2 className="sec-title__title tg-element-title">Building Bridges<br />
                                        Across Borders
                                    </h2>
                                </div>

                                <div className="about-one__content-text1">
                                    <p>Logistic service provider company plays a pivotal role in the global supply
                                        chain ecosystem by efficiently managing the movement of goods from origin to final
                                        destination. These companies offer a diverse.</p>
                                </div>

                                <div className="about-one__content-text2">
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-4">
                                            <div className="about-one__content-text2-single-top">
                                                <div className="icon">
                                                    <span className="icon-check1"></span>
                                                </div>
                                                <div className="title-box">
                                                    <h3>Air Shipment</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-4">
                                            <div className="about-one__content-text2-single-top">
                                                <div className="icon" >
                                                    <span className="icon-check1" ></span>
                                                </div>
                                                <div className="title-box">
                                                    <h3>Land Shipment</h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-4 col-md-4">
                                            <div className="about-one__content-text2-single-top">
                                                <div className="icon">
                                                    <span className="icon-check1"></span>
                                                </div>
                                                <div className="title-box">
                                                    <h3>Sea Shipment</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="about-one__content-bottom">
                                    <div className="btn-box">
                                        <Link className="thm-btn" href="about">Discover More
                                            <i className="icon-right-arrow21"></i>
                                            <span className="hover-btn hover-bx"></span>
                                            <span className="hover-btn hover-bx2"></span>
                                            <span className="hover-btn hover-bx3"></span>
                                            <span className="hover-btn hover-bx4"></span>
                                        </Link>
                                    </div>

                                    {/* <div className="contact-box">
                                    <div className="icon">
                                        <span className="icon-phone2"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>Make A Phone Call</p>
                                        <h4><Link href="tel:1234567890">+880 123 456 789 </Link></h4>
                                    </div>
                                </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

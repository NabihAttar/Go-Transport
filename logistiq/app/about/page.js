'use client'
import Layout from "@/components/layout/Layout"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import TestimonialSlider from '@/components/slider/TestimonialSlider'
import Link from "next/link"
import ReactCurvedText from 'react-curved-text'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.srn',
        prevEl: '.srp',
    },

    
    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            
        },
        575: {
            slidesPerView: 1,
            
        },
        767: {
            slidesPerView: 2,
            
        },
        991: {
            slidesPerView: 2,
            
        },
        1199: {
            slidesPerView: 3,
            
        },
        1350: {
            slidesPerView: 3,
            
        },
    }



}

export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="About company">
            
        {/*Start About One*/}
        <section className="about-one" style={{ background: "rgba(22, 28, 37, 1)" }}>
            <div className="container">
                <div className="row">
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
                                <h2 className="sec-title__title tg-element-title">Who We Are<br/>
                                    <span>Logistics
                                        Solutions</span>
                                </h2>
                            </div>

                            <div className="about-one__content-text1">
                                <p>Logistic service provider company plays a pivotal role in the global supply
                                    chain ecosystem by efficiently managing the movement of goods from origin to final
                                    destination. These companies offer a diverse.</p>
                            </div>

                            <div className="about-one__content-text2">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-one__content-text2-single">
                                            <div className="about-one__content-text2-single-top">
                                                <div className="icon">
                                                    <span className="icon-worldwide-shipping-1"></span>
                                                </div>

                                                <div className="title-box">
                                                    <h3>Worldwide Service</h3>
                                                </div>
                                            </div>

                                            <p>Logistic service provider company plays a pivotal role in the global</p>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="about-one__content-text2-single">
                                            <div className="about-one__content-text2-single-top">
                                                <div className="icon">
                                                    <span className="icon-24-hours-service"></span>
                                                </div>

                                                <div className="title-box">
                                                    <h3>24/7 Online Support</h3>
                                                </div>
                                            </div>

                                            <p>Logistic service provider company plays a pivotal role in the global</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            

                            <div className="about-one__content-bottom">
                                {/* <div className="btn-box">
                                    <Link className="thm-btn" href="about">More About Us
                                        <i className="icon-right-arrow21"></i>
                                        <span className="hover-btn hover-bx"></span>
                                        <span className="hover-btn hover-bx2"></span>
                                        <span className="hover-btn hover-bx3"></span>
                                        <span className="hover-btn hover-bx4"></span>
                                    </Link>
                                </div> */}

                                <div className="contact-box">
                                    <div className="icon">
                                        <span className="icon-phone2"></span>
                                    </div>

                                    <div className="text-box">
                                        <p>Make A Phone Call</p>
                                        <h4><Link href="tel:1234567890">+880 123 456 789 </Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    {/*End About One Content*/}



 <div className="project-details__inner">
                    {/* <div className="project-details__img1">
                        <div className="inner">
                            <img src="assets/images/project/project-details-img1.jpg" alt=""/>
                        </div>

                        <div className="project-details__img1-content wow fadeInRight" data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div className="title-box">
                                <h2>Project Details</h2>
                            </div>
                            <div className="project-details__img1-content-list">
                                <ul className="clearfix">
                                    <li>
                                        <div className="title">
                                            <h2>Category:</h2>
                                        </div>

                                        <div className="text">
                                            <p>Quality Equipment </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="title">
                                            <h2>Client:</h2>
                                        </div>

                                        <div className="text">
                                            <p>Mack Straing </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="title">
                                            <h2>Location:</h2>
                                        </div>

                                        <div className="text">
                                            <p>USA </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="title">
                                            <h2>Value:</h2>
                                        </div>

                                        <div className="text">
                                            <p>$500K </p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="title">
                                            <h2>Website:</h2>
                                        </div>

                                        <div className="text">
                                            <p><Link href="https://www.google.com/">www.google.com</Link></p>
                                        </div>
                                    </li>

                                    <li>
                                        <div className="title">
                                            <h2>Share:</h2>
                                        </div>

                                        <div className="social-links">
                                            <Link href="#"><span className="icon-facebook-f"></span></Link>
                                            <Link href="#"><span className="icon-instagram"></span></Link>
                                            <Link href="#"><span className="icon-twitter1"></span></Link>
                                            <Link href="#"><span className="icon-linkedin"></span></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="project-details__text1">
                        <h2>Here to Know About This Project</h2>
                        <p>With a focus on safety, efficiency, and cost-effectiveness, we offer a range of tailored
                            services to meet the unique needs of our clients, from air and sea freight to road
                            transportation. Our dedicated team of professionals is committed to delivering excellence at
                            every stage of the journey, providing peace of mind and ensuring that your cargo arrives at
                            its destination securely and on schedule. Entrust your international transport needs to us,
                            and experience the difference of our trusted and proven services.</p>
                    </div> */}

                    <div className="project-details__text2">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="project-details__text2-img">
                                    <div className="inner">
                                        <img src="assets/images/project/project-details-img2.jpg" alt=""/>

                                        <div className="project-details__video-link">
                                            <Link href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                                <div className="project-details__video-icon">
                                                    <span className="icon-video"></span>
                                                    <i className="ripple"></i>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-6">
                                <div className="project-details__text2-content">
                                    <h2>Key Objectives:</h2>
                                    <p>As a premier international transport service provider, we specialize in
                                        seamlessly connecting businesses and individuals with efficient and reliable
                                        transportation solutions across borders. </p>
                                    <ul>
                                        <li>
                                            <p><span className="icon-arrow-right-circle"></span> Develop recommendations for
                                                process improvements
                                                and technology i</p>
                                        </li>

                                        <li>
                                            <p><span className="icon-arrow-right-circle"></span> Create a roadmap for the
                                                implementation of proposed changes.</p>
                                        </li>

                                        <li>
                                            <p><span className="icon-arrow-right-circle"></span> Create a roadmap for the
                                                implementation of proposed changes.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div className="project-details__text3">
                        <p>With a focus on safety, efficiency, and cost-effectiveness, we offer a range of tailored
                            services to meet the unique needs of our clients, from air and sea freight to road
                            transportation. Our dedicated team of professionals is committed to delivering excellence at
                            every stage of the journey, providing peace of mind and ensuring that your cargo arrives at
                            its destination securely and on schedule. Entrust your international transport needs to us,
                            and experience the difference of our trusted and proven services. Capitalizing on the
                            increasing awareness of environmental sustainability, you could start a subscription box
                            service that delivers eco-friendly
                            products to subscribers on a regular basis. The focus would be on providing consumers with
                            sustainable.</p>

                        <div className="img-box">
                            <img src="assets/images/project/project-details-img3.jpg" alt=""/>
                        </div>
                    </div> */}

                    {/* <div className="project-details__previous-next">
                        <ul>
                            <li>
                                <div className="icon">
                                    <Link href="#"><span className="icon-right-arrow2"></span></Link>
                                </div>
                                <div className="text-box">
                                    <Link href="#">Previous Project</Link>
                                </div>
                            </li>

                            <li>
                                <div className="text-box">
                                    <Link href="#">Next Project</Link>
                                </div>
                                <div className="icon">
                                    <Link href="#"><span className="icon-right-arrow2"></span></Link>
                                </div>
                            </li>
                        </ul>
                    </div> */}
                </div>

                    {/*Start About One Img*/}
                    {/* <div className="col-xl-5">
                        <div className="about-one__img">
                            <div className="shape1 float-bob-y"><img src="assets/images/shapes/about-v1-shape1.png" alt=""/>
                            </div>
                            <div className="shape2 float-bob-y"><img src="assets/images/shapes/about-v1-shape2.png" alt=""/>
                            </div>
                            <div className="about-one__img1 reveal">
                                <img src="assets/images/about/about-v1-img1.jpg" alt=""/>
                            </div>

                            <div className="about-one__img2">
                                <div className="about-one__img2-inner reveal">
                                    <img src="assets/images/about/about-v1-img2.jpg" alt=""/>
                                </div>

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
                                </div>
                                <div className="shape3 float-bob-y">
                                    <img src="assets/images/shapes/about-v1-shape3.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/*End About One Img*/}
                </div>
            </div>
        </section>
        {/*End About One*/}

        {/*Start Service One*/}
        {/* <section className="service-one">
            <div className="service-one__pattern"
                style={{ backgroundImage: 'url(assets/images/pattern/service-v1-pattern.jpg)' }} ></div>
            <div className="container">
                <div className="sec-title center text-center tg-heading-subheading animation-style2">
                    <div className="sec-title__tagline">
                        <div className="line"></div>
                        <div className="text tg-element-title">
                            <h4>Our Service</h4>
                        </div>
                        <div className="icon">
                            <span className="icon-plane2 float-bob-x3"></span>
                        </div>
                    </div>
                    <h2 className="sec-title__title tg-element-title">Provide Efficient Logistics
                        <br/> Solutions <span>Business</span></h2>
                </div>

                <div className="row">
                    <Swiper {...swiperOptions} className="service-one__carousel owl-carousel owl-theme owl-dot-style1">
                        <SwiperSlide>
                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="assets/images/services/services-v1-img1.jpg" alt="#"/>
                                </div>

                                <div className="service-one__single-content">
                                    <h2><Link href="international-transport">Fast Personal Delivery </Link></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <Link href="international-transport">Read More <span
                                                className="icon-right-arrow21"></span></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-delivery-man"></span>
                            </div>
                        </div>
                       
                        </SwiperSlide>
                        <SwiperSlide>
                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="assets/images/services/services-v1-img2.jpg" alt="#"/>
                                </div>

                                <div className="service-one__single-content">
                                    <h2><Link href="international-transport">Local Truck Transport</Link></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <Link href="international-transport">Read More <span
                                                className="icon-right-arrow21"></span></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-shipment"></span>
                            </div>
                        </div>
                       
                        </SwiperSlide>
                        <SwiperSlide>
                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="assets/images/services/services-v1-img3.jpg" alt="#"/>
                                </div>

                                <div className="service-one__single-content">
                                    <h2><Link href="international-transport">International Transport</Link></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <Link href="international-transport">Read More <span
                                                className="icon-right-arrow21"></span></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-international-shipping"></span>
                            </div>
                        </div>
                        
                        </SwiperSlide>
                        <SwiperSlide>
                     
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="assets/images/services/services-v1-img1.jpg" alt="#"/>
                                </div>

                                <div className="service-one__single-content">
                                    <h2><Link href="international-transport">Fast Personal Delivery </Link></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <Link href="international-transport">Read More <span
                                                className="icon-right-arrow21"></span></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-delivery-man"></span>
                            </div>
                        </div>
                       
                        </SwiperSlide>
                        <SwiperSlide>
                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="assets/images/services/services-v1-img2.jpg" alt="#"/>
                                </div>

                                <div className="service-one__single-content">
                                    <h2><Link href="international-transport">Local Truck Transport</Link></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <Link href="international-transport">Read More <span
                                                className="icon-right-arrow21"></span></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-shipment"></span>
                            </div>
                        </div>
                       
                        </SwiperSlide>
                        <SwiperSlide>
                       
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="assets/images/services/services-v1-img3.jpg" alt="#"/>
                                </div>

                                <div className="service-one__single-content">
                                    <h2><Link href="international-transport">International Transport</Link></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <Link href="international-transport">Read More <span
                                                className="icon-right-arrow21"></span></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-international-shipping"></span>
                            </div>
                        </div>
                       
                        </SwiperSlide>
                        <SwiperSlide>
                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="assets/images/services/services-v1-img1.jpg" alt="#"/>
                                </div>

                                <div className="service-one__single-content">
                                    <h2><Link href="international-transport">Fast Personal Delivery </Link></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <Link href="international-transport">Read More <span
                                                className="icon-right-arrow21"></span></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-delivery-man"></span>
                            </div>
                        </div>
                        
                        </SwiperSlide>
                        <SwiperSlide>
                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="assets/images/services/services-v1-img2.jpg" alt="#"/>
                                </div>

                                <div className="service-one__single-content">
                                    <h2><Link href="international-transport">Local Truck Transport</Link></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <Link href="international-transport">Read More <span
                                                className="icon-right-arrow21"></span></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-shipment"></span>
                            </div>
                        </div>
                       
                        </SwiperSlide>
                        <SwiperSlide>
                        
                        <div className="service-one__single">
                            <div className="service-one__single-inner">
                                <div className="service-one__single-img">
                                    <img src="assets/images/services/services-v1-img3.jpg" alt="#"/>
                                </div>

                                <div className="service-one__single-content">
                                    <h2><Link href="international-transport">International Transport</Link></h2>
                                    <p>A logistic service provider company plays
                                        a pivotal role in the global supply chain logistic service.</p>
                                    <div className="btn-box">
                                        <Link href="international-transport">Read More <span
                                                className="icon-right-arrow21"></span></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="icon">
                                <span className="icon-international-shipping"></span>
                            </div>
                        </div>
                      
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section> */}
        {/*End Service One*/}

        {/*Start Project One*/}
        {/* <section className="project-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="project-one__title">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Latest Project</h4>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-plane2 float-bob-x3"></span>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">The Achievement <br/>
                                    of Our <span>Project</span></h2>
                            </div>

                            <div className="btn-box">
                                <Link className="thm-btn" href="project">See All Project
                                    <i className="icon-right-arrow21"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>

                        </div>
                    </div>
                   
                    <div className="col-xl-7 col-lg-7 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="project-one__single">
                            <div className="project-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/project/project-v1-img1.jpg" alt="#"/>
                                    <div className="project-one__overlay-content">
                                        <div className="text-box">
                                            <p>Logistic</p>
                                            <h2><Link href="project-details">Warehouse Inventory </Link></h2>
                                        </div>

                                        <div className="icon">
                                            <Link href="project-details"><span className="icon-right-arrow21"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="project-one__single">
                            <div className="project-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/project/project-v1-img2.jpg" alt="#"/>
                                    <div className="project-one__overlay-content">
                                        <div className="text-box">
                                            <p>Logistic</p>
                                            <h2><Link href="project-details">Warehouse Inventory </Link></h2>
                                        </div>

                                        <div className="icon">
                                            <Link href="project-details"><span className="icon-right-arrow21"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="project-one__single">
                            <div className="project-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/project/project-v1-img3.jpg" alt="#"/>
                                    <div className="project-one__overlay-content">
                                        <div className="text-box">
                                            <p>Logistic</p>
                                            <h2><Link href="project-details">Warehouse Inventory </Link></h2>
                                        </div>

                                        <div className="icon">
                                            <Link href="project-details"><span className="icon-right-arrow21"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                        <div className="project-one__single">
                            <div className="project-one__single-img">
                                <div className="inner">
                                    <img src="assets/images/project/project-v1-img4.jpg" alt="#"/>
                                    <div className="project-one__overlay-content">
                                        <div className="text-box">
                                            <p>Logistic</p>
                                            <h2><Link href="project-details">Warehouse Inventory </Link></h2>
                                        </div>

                                        <div className="icon">
                                            <Link href="project-details"><span className="icon-right-arrow21"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/*End Project One*/}

        {/*Start Why Choose One*/}
        {/* <section className="why-choose-one">
            <div className="why-choose-one__pattern">
                <img src="assets/images/pattern/why-choose-v1-pattern.png" alt=""/>
            </div>
            <div className="shape1 float-bob-y"><img src="assets/images/shapes/why-choose-v1-shape1.png" alt=""/></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="why-choose-one__content">
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Why Choose us</h4>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-plane2 float-bob-x3"></span>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">Efficient, Safe, & Swift <br/> Logistics
                                    <span>Solution!</span></h2>
                            </div>

                            <div className="why-choose-one__content-list">
                                <ul>
                                    <li>
                                        <p><span className="icon-plane2"></span> Make long term business decisions</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-plane2"></span> Transparent career journey and support.</p>
                                    </li>
                                    <li>
                                        <p><span className="icon-plane2"></span> Be a responsible member of the community
                                        </p>
                                    </li>
                                    <li>
                                        <p><span className="icon-plane2"></span> Provide a service we are proud of</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="btn-box">
                                <Link className="thm-btn" href="contact">Contact Us
                                    <i className="icon-right-arrow21"></i>
                                    <span className="hover-btn hover-bx"></span>
                                    <span className="hover-btn hover-bx2"></span>
                                    <span className="hover-btn hover-bx3"></span>
                                    <span className="hover-btn hover-bx4"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                  
                    <div className="col-xl-6">
                        <div className="why-choose-one__form-box wow fadeInRight" data-wow-delay="0ms"
                            data-wow-duration="1500ms">
                            <div className="title-box">
                                <h2>Request a Quote</h2>
                            </div>

                            <form className="contact-form-validated why-choose-one__form" action="assets/inc/sendemail.php"
                                method="post" >
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="name" placeholder="Name" required=""/>
                                            <div className="icon"><span className="icon-user"></span></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="email" name="email" placeholder="Email" required=""/>
                                            <div className="icon"><span className="icon-email"></span></div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="Phone" placeholder="Phone" required=""/>
                                            <div className="icon"><span className="icon-phone2"></span></div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <input type="text" name="date" placeholder="Date" id="datepicker" />
                                            <div className="icon"><span className="icon-calendar"></span></div>
                                        </div>
                                    </div>


                                    <div className="col-xl-12">
                                        <div className="why-choose-one__form-distance">
                                            <div className="title">
                                                <p>distance(Kilo):</p>
                                            </div>
                                            <div className="why-choose-one__form-distance-inner">
                                                <div className="input-box">
                                                    <input type="text" name="distance" placeholder="0" required=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <div className="select-box">
                                                <select className="selectmenu wide">
                                                    <option >Freight Type</option>
                                                    <option>Freight Type 01</option>
                                                    <option>Freight Type 02</option>
                                                    <option>Freight Type 03</option>
                                                    <option>Freight Type 04</option>
                                                    <option>Freight Type 05</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-6">
                                        <div className="input-box">
                                            <div className="select-box">
                                                <select className="selectmenu wide">
                                                    <option >Load</option>
                                                    <option>Freight Type 01</option>
                                                    <option>Freight Type 02</option>
                                                    <option>Freight Type 03</option>
                                                    <option>Freight Type 04</option>
                                                    <option>Freight Type 05</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12">
                                        <div className="why-choose-one__form-btn">
                                            <button type="submit" className="thm-btn">
                                                Contact Us
                                                <i className="icon-right-arrow21"></i>
                                                <span className="hover-btn hover-bx"></span>
                                                <span className="hover-btn hover-bx2"></span>
                                                <span className="hover-btn hover-bx3"></span>
                                                <span className="hover-btn hover-bx4"></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/*End Why Choose One*/}

        {/*Start Testimonial One*/}
        {/* <section className="testimonial-one">
            <div className="testimonial-one__pattern"
                style={{ backgroundImage: 'url(assets/images/pattern/testimonial-v1-pattern.png)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="testimonial-one__content">
                            <div className="big-title">
                                <h2>TESTIMONIALS</h2>
                            </div>
                            <div className="sec-title tg-heading-subheading animation-style2">
                                <div className="sec-title__tagline">
                                    <div className="line"></div>
                                    <div className="text tg-element-title">
                                        <h4>Client Testimonial</h4>
                                    </div>
                                    <div className="icon">
                                        <span className="icon-plane2 float-bob-x3"></span>
                                    </div>
                                </div>
                                <h2 className="sec-title__title tg-element-title">What Our Customers <br/>
                                    Say <span>About Us</span> </h2>
                            </div>

                            <TestimonialSlider/>
                        </div>
                    </div>


                    <div className="col-xl-6">
                        <div className="testimonial-one__img">
                            <div className="testimonial-one__img1 reveal">
                                <img src="assets/images/testimonial/testimonial-v1-img2.jpg" alt=""/>
                            </div>

                            <div className="testimonial-one__img-author">
                                <ul>
                                    <li>
                                        <div className="img-box"><img src="assets/images/banner/banner-v1-img2.jpg" alt="#"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box"><img src="assets/images/banner/banner-v1-img3.jpg" alt="#"/>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-box"><img src="assets/images/banner/banner-v1-img4.jpg" alt="#"/>
                                        </div>
                                    </li>
                                </ul>

                                <div className="text-box">
                                    <h2>Customer Satisfied</h2>
                                    <p>4.8 (15k Reviews)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="vfhzo499OeA" onClose={() => setOpen(false)} />
        </Layout>
        </>
    )
}



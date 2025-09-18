'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 3,
    spaceBetween: 30,
    
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
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

export default function Services() {
    return (
        <>
        
        <section className="service-two" style={{ backgroundColor: "rgba(22, 28, 37, 1)" }}>
  <div className="container">
    <div className="sec-title center text-center tg-heading-subheading animation-style2">
      <div className="sec-title__tagline">
        <div className="line"></div>
        <div className="text tg-element-title">
          <h4>Our Services</h4>
        </div>
        <div className="icon">
          <span className="icon-plane2 float-bob-x3"></span>
        </div>
      </div>
      <h2 className="sec-title__title tg-element-title">Our Services at Glance</h2>
    </div>

    <div className="services-grid">
      {[
        { title: "Air & Land Freight", subtitle: "(Import & Export)" },
        { title: "Customs Clearance", subtitle: "(Beirut Airport & Port)" },
        { title: "Consulting & Logistics", subtitle: "Outsourcing" },
        { title: "Door-to-Door", subtitle: "(D2D) Shipping" },
        { title: "Cargo Insurance", subtitle: "Solutions" },
        { title: "Inland Trucking", subtitle: "(E2E)" },
        { title: "Global Warehousing", subtitle: "" },
      ].map((service, i) => (
        <div key={i} className="service-card">
          <div className="circle"></div>
          <h3>{service.title}</h3>
          <p>{service.subtitle}</p>
          <div className="line-bottom"></div>
        </div>
      ))}
    </div>
  </div>
</section>

        
        </>
    )
}

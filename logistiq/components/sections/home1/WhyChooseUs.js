import Link from "next/link";

export default function WhyChooseUs() {
  return (
    <>
      <section className="why-choose-one" style={{ background: "rgba(15, 21, 30, 1)"}}>
        <div className="why-choose-one__pattern">
          <img src="assets/images/pattern/why-choose-v1-pattern.png" alt="" />
        </div>
        {/* <div className="shape1 float-bob-y">
          <img src="assets/images/shapes/why-choose-v1-shape1.png" alt="" />
        </div> */}

        <div className="container">
          <div className="row align-items-center">
            {/* Why Choose Us Content - Left Column */}
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
                  <h2 className="sec-title__title tg-element-title">Our Core Value</h2>
                </div>

                <div className="why-choose-one__content-list">
                  <ul>
                    <li><p><span className="icon-plane2"></span> Confidentiality & Data Privacy</p></li>
                    <li><p><span className="icon-plane2"></span> Cost-Conscious Operations</p></li>
                    <li><p><span className="icon-plane2"></span> Integrity in Every Action</p></li>
                    <li><p><span className="icon-plane2"></span> Accountability Through Experience</p></li>
                  </ul>
                </div>

                <div className="btn-box">
                  <Link className="thm-btn" href="/contact">
                    Contact Us
                    <i className="icon-right-arrow21"></i>
                    <span className="hover-btn hover-bx"></span>
                    <span className="hover-btn hover-bx2"></span>
                    <span className="hover-btn hover-bx3"></span>
                    <span className="hover-btn hover-bx4"></span>
                  </Link>
                </div>
              </div>
            </div>

            {/* About Images - Right Column */}
            <div className="col-xl-5 offset-xl-1">
              <div className="about-one__img">
                <div className="shape1 float-bob-y">
                  <img src="assets/images/shapes/about-v1-shape1.png" alt="" />
                </div>
                <div className="shape2 float-bob-y">
                  <img src="assets/images/shapes/about-v1-shape2.png" alt="" />
                </div>
                <div className="about-one__img1 reveal">
                  <img src="assets/images/about/about-v1-img1.jpg" alt="" />
                </div>
                <div className="about-one__img2">
                  <div className="about-one__img2-inner reveal">
                    <img src="assets/images/about/about-v1-img2.jpg" alt="" />
                  </div>
                  <div className="shape3 float-bob-y">
                    <img src="assets/images/shapes/about-v1-shape3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

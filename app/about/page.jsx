import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: Choose Section */}
      <section id="choose" className="tj-choose-section section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading-wrap">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box" />
                  Choose the Best
                </span>
                <div className="heading-wrap-content">
                  <div className="sec-heading">
                    <h2 className="sec-title title-anim">
                      Empowering Business with <span>Expertise.</span>
                    </h2>
                  </div>
                  <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                    <Link className="tj-primary-btn" href="/contact">
                      <span className="btn-text">
                        <span>Request a Call</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-gap-4 rightSwipeWrap">
            <div className="col-lg-4">
              <div className="choose-box right-swipe">
                <div className="choose-content">
                  <div className="choose-icon">
                    <i className="tji-innovative" />
                  </div>
                  <h4 className="title">Innovative Solutions</h4>
                  <p className="desc">
                    We stay ahead of the curve, leveraging cutting-edge
                    technologies and strategies to keep you competitive in a
                    marketplace.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="choose-box right-swipe">
                <div className="choose-content">
                  <div className="choose-icon">
                    <i className="tji-award" />
                  </div>
                  <h4 className="title">Award-Winning Expertise</h4>
                  <p className="desc">
                    Recognized by industry leaders, our award-winning team has a
                    proven record of delivering excellence across projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="choose-box right-swipe">
                <div className="choose-content">
                  <div className="choose-icon">
                    <i className="tji-support" />
                  </div>
                  <h4 className="title">Dedicated Support</h4>
                  <p className="desc">
                    Our team is always available to address your concerns,
                    providing quick and effective solution to keep your
                    business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Choose Section */}
      {/* start: About Section */}
      <section className="tj-about-section-2 section-gap section-gap-x">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
              <div
                className="about-img-area style-2 wow fadeInLeft"
                data-wow-delay=".3s"
              >
                <div className="about-img overflow-hidden">
                  <img
                    data-speed=".8"
                    src="/assets/images/about/about-5.webp"
                    alt=""
                  />
                </div>
                <div className="box-area style-2">
                  <div
                    className="progress-box wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <h4 className="title">Business Progress</h4>
                    <ul className="tj-progress-list">
                      <li>
                        <h6 className="tj-progress-title">Revenue</h6>
                        <div className="tj-progress">
                          <span className="tj-progress-percent">82%</span>
                          <div
                            className="tj-progress-bar"
                            data-percent={82}
                          ></div>
                        </div>
                      </li>
                      <li>
                        <h6 className="tj-progress-title">Satisfaction</h6>
                        <div className="tj-progress">
                          <span className="tj-progress-percent">90%</span>
                          <div
                            className="tj-progress-bar"
                            data-percent={90}
                          ></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
              <div className="about-content-area">
                <div className="sec-heading">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    <i className="tji-box" />
                    Get to Know Us
                  </span>
                  <h2 className="sec-title title-anim">
                    Driving Innovation and Excellence for Sustainable Corporate
                    Success
                    <span>Worldwide.</span>
                  </h2>
                </div>
              </div>
              <div className="about-bottom-area">
                <div
                  className="mission-vision-box wow fadeInLeft"
                  data-wow-delay=".5s"
                >
                  <h4 className="title">Our Mission</h4>
                  <p className="desc">
                    our mission is empower businesses through innovate best
                    solution, exceptional service.
                  </p>
                  <ul className="list-items">
                    <li>
                      <i className="tji-list" />
                      Innovation &amp; Excellence
                    </li>
                    <li>
                      <i className="tji-list" />
                      Exceptional Customer
                    </li>
                    <li>
                      <i className="tji-list" />
                      Business Growth
                    </li>
                  </ul>
                </div>
                <div
                  className="mission-vision-box wow fadeInRight"
                  data-wow-delay=".5s"
                >
                  <h4 className="title">Our Vision</h4>
                  <p className="desc">
                    Our vision is to become a global leader in providing
                    transformative business solutions.
                  </p>
                  <ul className="list-items">
                    <li>
                      <i className="tji-list" />
                      Global Leadership
                    </li>
                    <li>
                      <i className="tji-list" />
                      Transformative Impact
                    </li>
                    <li>
                      <i className="tji-list" />
                      Sustainable Success
                    </li>
                  </ul>
                </div>
              </div>
              <div className="about-btn-area wow fadeInUp" data-wow-delay=".6s">
                <Link className="tj-primary-btn" href="/about">
                  <span className="btn-text">
                    <span>Learn More About Us</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-arrow-right-long" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-shape-1">
          <img src="/assets/images/shape/pattern-2.svg" alt="" />
        </div>
        <div className="bg-shape-2">
          <img src="/assets/images/shape/pattern-3.svg" alt="" />
        </div>
      </section>
      {/* end: About Section */}
      {/* start: Client Section */}
      <section
        className="tj-client-section client-section-gap-2 wow fadeInUp"
        data-wow-delay=".4s"
      >
        <div className="container-fluid client-container">
          <div className="row">
            <div className="col-12">
              <div className="client-content">
                <h5 className="sec-title">
                  Join Over <span className="client-numbers">1000+</span>{" "}
                  Companies with
                  <span className="client-text">Bexon</span> Here
                </h5>
              </div>
              <div className="swiper client-slider client-slider-1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/brand-1.webp" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/brand-2.webp" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/brand-3.webp" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/brand-4.webp" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/brand-5.webp" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/brand-6.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Client Section */}
      {/* start: Testimonial Section */}
      <section className="tj-testimonial-section-2 section-bottom-gap">
        <div className="container">
          <div className="row row-gap-3">
            <div className="col-lg-6 order-lg-2">
              <div
                className="testimonial-img-area wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="testimonial-img">
                  <img
                    src="/assets/images/testimonial/testimonial-img.webp"
                    alt=""
                  />
                  <div className="sec-heading style-2">
                    <h2 className="sec-title title-anim">
                      Hear from Our <span>Customer.</span>
                    </h2>
                  </div>
                </div>
                <div className="box-area">
                  <div className="rating-box wow fadeInUp" data-wow-delay=".5s">
                    <h2 className="title">4.9</h2>
                    <div className="rating-area">
                      <div className="star-ratings">
                        <div className="fill-ratings" style={{ width: "100%" }}>
                          <span>âââââ</span>
                        </div>
                        <div className="empty-ratings">
                          <span>âââââ</span>
                        </div>
                      </div>
                    </div>
                    <span className="rating-text">(80+ Clients Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div
                className="testimonial-wrapper wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="swiper testimonial-slider-2">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <span className="quote-icon">
                          <i className="tji-quote" />
                        </span>
                        <div className="desc">
                          <p>
                            Working with Bexon has been a game-changer for our
                            business. Their team's professionalism, attention to
                            detail, and innovative solutions have helped us
                            streamline operations and achieve our goals faster
                            than we imagined. We truly feel like a valued
                            partner. The results we've seen after partnering.
                          </p>
                        </div>
                        <div className="testimonial-author">
                          <div className="author-inner">
                            <div className="author-img">
                              <img
                                src="/assets/images/testimonial/client-1.webp"
                                alt=""
                              />
                            </div>
                            <div className="author-header">
                              <h4 className="title">Guy Hawkins</h4>
                              <span className="designation">Co. Founder</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <span className="quote-icon">
                          <i className="tji-quote" />
                        </span>
                        <div className="desc">
                          <p>
                            The results we've seen after partnering with Bexon
                            are beyond our expectations. They not only
                            understood our vision but also brought new ideas to
                            the table that have taken our business to the next
                            level. Their expertise and commitment to success
                            make them a trusted.
                          </p>
                        </div>
                        <div className="testimonial-author">
                          <div className="author-inner">
                            <div className="author-img">
                              <img
                                src="/assets/images/testimonial/client-2.webp"
                                alt=""
                              />
                            </div>
                            <div className="author-header">
                              <h4 className="title">Ralph Edwards</h4>
                              <span className="designation">Co. Founder</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <span className="quote-icon">
                          <i className="tji-quote" />
                        </span>
                        <div className="desc">
                          <p>
                            We've been working with Bexonfor years, and they
                            continue to deliver outstanding results. Their team
                            is proactive, responsive, and always goes the extra
                            mile to ensure our needs are met. They've become a
                            key contributor to our growth and success that
                            really help us"
                          </p>
                        </div>
                        <div className="testimonial-author">
                          <div className="author-inner">
                            <div className="author-img">
                              <img
                                src="/assets/images/testimonial/client-3.webp"
                                alt=""
                              />
                            </div>
                            <div className="author-header">
                              <h4 className="title">Devon Lane</h4>
                              <span className="designation">Co. Founder</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-pagination-area" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Testimonial Section */}
      {/* start: Team Section */}
      <section className="tj-team-section-3 section-gap section-gap-x">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading text-center">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box" /> Meet Our Team
                </span>
                <h2 className="sec-title title-anim">
                  Success <span>Stories</span> Fuel our Innovation.
                </h2>
              </div>
            </div>
          </div>
          <div className="row leftSwipeWrap">
            <div className="col-lg-3 col-sm-6">
              <div className="team-item left-swipe">
                <div className="team-img">
                  <div className="team-img-inner">
                    <img src="/assets/images/team/team-1.webp" alt="" />
                  </div>
                  <div className="social-links">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/" target="_blank">
                          <i className="fa-brands fa-x-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4 className="title">
                    <Link href="/team-details">Eade Marren</Link>
                  </h4>
                  <span className="designation">Chief Executive</span>
                  <a className="mail-at" href="mailto:info@bexon.com">
                    <i className="tji-at" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-item left-swipe">
                <div className="team-img">
                  <div className="team-img-inner">
                    <img src="/assets/images/team/team-2.webp" alt="" />
                  </div>
                  <div className="social-links">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/" target="_blank">
                          <i className="fa-brands fa-x-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4 className="title">
                    <Link href="/team-details">Savannah Ngueen</Link>
                  </h4>
                  <span className="designation">Operations Head</span>
                  <a className="mail-at" href="mailto:info@bexon.com">
                    <i className="tji-at" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-item left-swipe">
                <div className="team-img">
                  <div className="team-img-inner">
                    <img src="/assets/images/team/team-3.webp" alt="" />
                  </div>
                  <div className="social-links">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/" target="_blank">
                          <i className="fa-brands fa-x-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4 className="title">
                    <Link href="/team-details">Kristin Watson</Link>
                  </h4>
                  <span className="designation">Marketing Lead</span>
                  <a className="mail-at" href="mailto:info@bexon.com">
                    <i className="tji-at" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="team-item left-swipe">
                <div className="team-img">
                  <div className="team-img-inner">
                    <img src="/assets/images/team/team-4.webp" alt="" />
                  </div>
                  <div className="social-links">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/" target="_blank">
                          <i className="fa-brands fa-x-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-content">
                  <h4 className="title">
                    <Link href="/team-details">Darlene Robertson</Link>
                  </h4>
                  <span className="designation">Business Director</span>
                  <a className="mail-at" href="mailto:info@bexon.com">
                    <i className="tji-at" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-shape-1">
          <img src="/assets/images/shape/pattern-2.svg" alt="" />
        </div>
        <div className="bg-shape-2">
          <img src="/assets/images/shape/pattern-3.svg" alt="" />
        </div>
      </section>
      {/* end: Team Section */}
      {/* start: Faq Section */}
      <section className="tj-faq-section section-gap">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="content-wrap">
                <div className="sec-heading">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    <i className="tji-box" />
                    Common Questions
                  </span>
                  <h2 className="sec-title title-anim">
                    Need <span>Help?</span> Start Here...
                  </h2>
                </div>
                <p className="desc wow fadeInUp" data-wow-delay=".6s">
                  We stay ahead of curve, leveraging <br /> cutting-edge are
                  technologies and <br /> strategies to competitive
                </p>
                <div className="wow fadeInUp" data-wow-delay=".8s">
                  <Link className="tj-primary-btn" href="/contact">
                    <span className="btn-text">
                      <span>Request a Call</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="accordion tj-faq" id="faqOne">
                <div
                  className="accordion-item active wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <button
                    className=" faq-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-1"
                    aria-expanded="true"
                  >
                    What services does Bexon offer to clients?
                  </button>
                  <div
                    id="faq-1"
                    className="collapse show"
                    data-bs-parent="#faqOne"
                  >
                    <div className="accordion-body faq-text">
                      <p>
                        Getting started is easy! Simply reach out to us through
                        our contact form or give us a call, and we'll schedule a
                        consultation to discuss your project and how we can best
                        assist you. Our team keeps you informed throughout the
                        process, ensuring quality control and timely delivery.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-2"
                    aria-expanded="false"
                  >
                    How do I get started with Corporate Business?
                  </button>
                  <div id="faq-2" className="collapse" data-bs-parent="#faqOne">
                    <div className="accordion-body faq-text">
                      <p>
                        Getting started is easy! Simply reach out to us through
                        our contact form or give us a call, and we'll schedule a
                        consultation to discuss your project and how we can best
                        assist you. Our team keeps you informed throughout the
                        process, ensuring quality control and timely delivery.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-3"
                    aria-expanded="false"
                  >
                    How do you ensure the success of a project?
                  </button>
                  <div id="faq-3" className="collapse" data-bs-parent="#faqOne">
                    <div className="accordion-body faq-text">
                      <p>
                        Getting started is easy! Simply reach out to us through
                        our contact form or give us a call, and we'll schedule a
                        consultation to discuss your project and how we can best
                        assist you. Our team keeps you informed throughout the
                        process, ensuring quality control and timely delivery.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-4"
                    aria-expanded="false"
                  >
                    How long will it take to complete my project?
                  </button>
                  <div id="faq-4" className="collapse" data-bs-parent="#faqOne">
                    <div className="accordion-body faq-text">
                      <p>
                        Getting started is easy! Simply reach out to us through
                        our contact form or give us a call, and we'll schedule a
                        consultation to discuss your project and how we can best
                        assist you. Our team keeps you informed throughout the
                        process, ensuring quality control and timely delivery.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-item wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-5"
                    aria-expanded="false"
                  >
                    Can I track the progress of my project?
                  </button>
                  <div id="faq-5" className="collapse" data-bs-parent="#faqOne">
                    <div className="accordion-body faq-text">
                      <p>
                        Getting started is easy! Simply reach out to us through
                        our contact form or give us a call, and we'll schedule a
                        consultation to discuss your project and how we can best
                        assist you. Our team keeps you informed throughout the
                        process, ensuring quality control and timely delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Faq Section */}
      {/* start: Cta Section */}
      <section className="tj-cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-area">
                <div className="cta-content">
                  <h2 className="title title-anim">
                    Let's Build Future Together.
                  </h2>
                  <div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
                    <Link className="tj-primary-btn btn-dark" href="/contact">
                      <span className="btn-text">
                        <span>Get Started Now</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="cta-img">
                  <img src="/assets/images/cta/cta-bg.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Cta Section */}
    </main>
  );
}


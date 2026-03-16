import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: Service Section */}
      <section className="tj-service-section service-4 section-gap">
        <div className="container">
          <div className="row row-gap-4">
            <div className="col-lg-4 col-md-6">
              <div
                className="service-item style-4 wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="service-icon">
                  <i className="tji-service-1" />
                </div>
                <div className="service-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      Business Strategy Development
                    </Link>
                  </h4>
                  <p className="desc">
                    Customer Experience Solutions are designed to enhance every
                    touchpoint of your customer journey, from first interaction.
                  </p>
                  <Link className="text-btn" href="/service-details">
                    <span className="btn-text">
                      <span>Learn More</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-item style-4 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="service-icon">
                  <i className="tji-service-2" />
                </div>
                <div className="service-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      Customer Experience Solutions
                    </Link>
                  </h4>
                  <p className="desc">
                    We stay ahead of the curve, leveraging cutting-edge
                    technologies and strategies to keep you competitive in a
                    marketplace.
                  </p>
                  <Link className="text-btn" href="/service-details">
                    <span className="btn-text">
                      <span>Learn More</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-item style-4 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="service-icon">
                  <i className="tji-service-5" />
                </div>
                <div className="service-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      IT Support &amp; Maintenance
                    </Link>
                  </h4>
                  <p className="desc">
                    Our IT Support &amp; Maintenance services ensure that your
                    technology infrastructure is running smoothly and securely.
                  </p>
                  <Link className="text-btn" href="/service-details">
                    <span className="btn-text">
                      <span>Learn More</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-item style-4 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="service-icon">
                  <i className="tji-service-3" />
                </div>
                <div className="service-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      Sustainability and ESG Consulting
                    </Link>
                  </h4>
                  <p className="desc">
                    We stay ahead of the curve, leveraging cutting-edge
                    technologies and strategies to keep you competitive in a
                    marketplace.
                  </p>
                  <Link className="text-btn" href="/service-details">
                    <span className="btn-text">
                      <span>Learn More</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-item style-4 wow fadeInUp"
                data-wow-delay=".9s"
              >
                <div className="service-icon">
                  <i className="tji-service-4" />
                </div>
                <div className="service-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      Training and Development Programs
                    </Link>
                  </h4>
                  <p className="desc">
                    We stay ahead of the curve, leveraging cutting-edge
                    technologies and strategies to keep you competitive in a
                    marketplace.
                  </p>
                  <Link className="text-btn" href="/service-details">
                    <span className="btn-text">
                      <span>Learn More</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="service-item style-4 wow fadeInUp"
                data-wow-delay="1s"
              >
                <div className="service-icon">
                  <i className="tji-service-6" />
                </div>
                <div className="service-content">
                  <h4 className="title">
                    <Link href="/service-details">
                      Marketing Strategy &amp; Campaigns
                    </Link>
                  </h4>
                  <p className="desc">
                    Effective marketing is key to our driving business growth.
                    Our Marketing Strategy &amp; Campaigns service.
                  </p>
                  <Link className="text-btn" href="/service-details">
                    <span className="btn-text">
                      <span>Learn More</span>
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
      </section>
      {/* end: Service Section */}
      {/* start: Contact Section */}
      <section className="tj-contact-section section-gap section-gap-x">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="global-map wow fadeInUp" data-wow-delay=".3s">
                <div className="global-map-img">
                  <img src="/assets/images/bg/map.svg" alt="Image" />
                  <div className="location-indicator loc-1">
                    <div className="location-tooltip">
                      <span>Head office:</span>
                      <p>993 Renner Burg, West Rond, MT 94251-030, USA.</p>
                      <a href="tel:10095447818">P: +1 (009) 544-7818</a>
                      <a href="mailto:support@bexon.com">
                        M: support@bexon.com
                      </a>
                    </div>
                  </div>
                  <div className="location-indicator loc-2">
                    <div className="location-tooltip">
                      <span>Regional office:</span>
                      <p>Hessisch Lichtenau 37235, Kassel, Germany.</p>
                      <a href="tel:10098801810">P: +1 (009) 880-1810</a>
                      <a href="mailto:support@bexon.com">
                        M: support@bexon.com
                      </a>
                    </div>
                  </div>
                  <div className="location-indicator loc-3">
                    <div className="location-tooltip">
                      <span>Regional office:</span>
                      <p>32 Altamira, State of ParÃ¡, Brazil.</p>
                      <a href="tel:10095447818">P: +1 (009) 544-7818</a>
                      <a href="mailto:support@bexon.com">
                        M: support@bexon.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="contact-form style-2 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="sec-heading">
                  <span className="sub-title text-white">
                    <i className="tji-box" />
                    Get in Touch
                  </span>
                  <h2 className="sec-title title-anim">
                    Drop Us a <span>Line.</span>
                  </h2>
                </div>
                <form id="contact-form-2">
                  <div className="row wow fadeInUp" data-wow-delay=".5s">
                    <div className="col-sm-6">
                      <div className="form-input">
                        <input
                          type="text"
                          name="cfName2"
                          placeholder="Full Name *"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-input">
                        <input
                          type="email"
                          name="cfEmail2"
                          placeholder="Email Address *"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-input">
                        <input
                          type="tel"
                          name="cfPhone2"
                          placeholder="Phone number *"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-input">
                        <div className="tj-nice-select-box">
                          <div className="tj-select">
                            <select name="cfSubject2">
                              <option value={0}>Chose a option</option>
                              <option value={1}>Business Strategy</option>
                              <option value={2}>Customer Experience</option>
                              <option value={3}>Sustainability and ESG</option>
                              <option value={4}>
                                Training and Development
                              </option>
                              <option value={5}>
                                IT Support &amp; Maintenance
                              </option>
                              <option value={6}>Marketing Strategy</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-input message-input">
                        <textarea
                          name="cfMessage2"
                          id="message"
                          placeholder="Type message *"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="submit-btn">
                      <button className="tj-primary-btn" type="submit">
                        <span className="btn-text">
                          <span>Send Message</span>
                        </span>
                        <span className="btn-icon">
                          <i className="tji-arrow-right-long" />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
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
      {/* end: Contact Section */}
      {/* start: Pricing Section */}
      <section className="tj-pricing-section-2 section-top-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="sec-heading text-center wow fadeInUp"
                data-wow-delay=".3s"
              >
                <span className="sub-title">
                  <i className="tji-box" />
                  Pricing plan
                </span>
                <h2 className="sec-title">
                  Our Pricing <span>Plan.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row row-gap-4">
            <div className="col-xl-4 col-md-6">
              <div className="pricing-box wow fadeInUp" data-wow-delay=".5s">
                <div className="pricing-header">
                  <h4 className="package-name">Basic Plan</h4>
                  <div className="package-desc">
                    <p>Essential Business Services</p>
                  </div>
                  <div className="package-price">
                    <span className="package-currency">$</span>
                    <span className="price-number">99</span>
                    <span className="package-period">/per month</span>
                  </div>
                  <div className="pricing-btn">
                    <Link className="text-btn" href="/contact">
                      <span className="btn-text">
                        <span>Chose Plan</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="list-items">
                  <ul>
                    <li>
                      <i className="tji-list" />
                      Access to core services
                    </li>
                    <li>
                      <i className="tji-list" />
                      Limited customer support (email)
                    </li>
                    <li>
                      <i className="tji-list" />1 project per month
                    </li>
                    <li>
                      <i className="tji-list" />
                      Basic reporting and analytics
                    </li>
                    <li>
                      <i className="tji-list" />
                      Standard templates and tools
                    </li>
                    <li>
                      <i className="tji-list" />
                      Basic performance tracking
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div
                className="pricing-box active wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="pricing-header">
                  <h4 className="package-name">Standard Plan</h4>
                  <div className="package-desc">
                    <p>Complete Business Solutions</p>
                  </div>
                  <div className="package-price">
                    <span className="package-currency">$</span>
                    <span className="price-number">249</span>
                    <span className="package-period">/per month</span>
                  </div>
                  <div className="pricing-btn">
                    <Link className="text-btn" href="/contact">
                      <span className="btn-text">
                        <span>Chose Plan</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="list-items">
                  <ul>
                    <li>
                      <i className="tji-list" />
                      All features in Basic Plan
                    </li>
                    <li>
                      <i className="tji-list" />
                      Priority customer support
                    </li>
                    <li>
                      <i className="tji-list" />
                      Up to 3 projects per month
                    </li>
                    <li>
                      <i className="tji-list" />
                      Monthly performance reviews
                    </li>
                    <li>
                      <i className="tji-list" />
                      Collaboration tools for team
                    </li>
                    <li>
                      <i className="tji-list" />
                      Custom templates
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="pricing-box wow fadeInUp" data-wow-delay=".9s">
                <div className="pricing-header">
                  <h4 className="package-name">Premium Plan</h4>
                  <div className="package-desc">
                    <p>Advanced Business Services</p>
                  </div>
                  <div className="package-price">
                    <span className="package-currency">$</span>
                    <span className="price-number">499</span>
                    <span className="package-period">/per month</span>
                  </div>
                  <div className="pricing-btn">
                    <Link className="text-btn" href="/contact">
                      <span className="btn-text">
                        <span>Chose Plan</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="list-items">
                  <ul>
                    <li>
                      <i className="tji-list" />
                      All features in Standard Plan
                    </li>
                    <li>
                      <i className="tji-list" />
                      Dedicated account manager
                    </li>
                    <li>
                      <i className="tji-list" />
                      Tailored strategy sessions
                    </li>
                    <li>
                      <i className="tji-list" />
                      Quarterly performance audits
                    </li>
                    <li>
                      <i className="tji-list" />
                      Priority support
                    </li>
                    <li>
                      <i className="tji-list" />
                      24/7 emergency service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Pricing Section */}
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


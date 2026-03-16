import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: Pricing Section */}
      <section className="tj-pricing-section-2 section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading text-center">
                <span className="sub-title wow fadeInUp" data-wow-delay=".1s">
                  <i className="tji-box" />
                  Pricing plan
                </span>
                <h2 className="sec-title title-anim">
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


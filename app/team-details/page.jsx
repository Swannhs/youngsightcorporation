import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: Team Details Section */}
      <section className="team-details slidebar-stickiy-container">
        <div className="container">
          <div className="row justify-content-center">
            {/*  left */}
            <div className="col-12 col-md-8 col-lg-5">
              <div
                className="team-details__img slidebar-stickiy wow fadeInUp"
                data-wow-delay=".1s"
              >
                <img src="/assets/images/team/team-1-big.webp" alt="" />
              </div>
            </div>
            {/* right */}
            <div className="col-12 col-lg-7 ">
              <div className="team-details__content">
                <h2 className="team-details__name title-anim">
                  Hello, I am Eade Marren
                </h2>
                <span
                  className="team-details__desig wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  Chief Executive
                </span>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  Our mission is to empowers businesses sizes thrive businesses
                  ev changing marketplace We are committed to the delivering
                  exceptional value through strategic inset innovative
                  approaches. Our consulting of our missing empower.
                </p>
                <div
                  className="team-details__contact-info wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <ul>
                    <li>
                      <span>Email address</span>
                      <a href="mailto:eade.marren@youngsightcorporation.com">
                        eade.marren@youngsightcorporation.com
                      </a>
                    </li>
                    <li>
                      <span>Phone number</span>
                      <a href="tel:10095447818">+1 (009) 544-7818</a>
                    </li>
                  </ul>
                </div>
                <div className="social-links wow fadeInUp" data-wow-delay=".5s">
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
                <div className="team-details__experience">
                  <h4
                    className="team-details__subtitle wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    Work experience
                  </h4>
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    Our mission is to empowers businesses size to thrivie in ses
                    ever changing marketplace We are committed to the delivering
                    exceptionals the value thro strategic ins innovative
                    approaches. Our consulting of our missing empowers
                    businesses of all sizes Committed to the delivering
                    exceptional in the values
                  </p>
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    Our mission is to empowers businesses size to thrivie in ses
                    ever changing marketplace We are committed to the delivering
                    exceptionals the value thro strategic ins innovative
                    approaches. Our consulting of our missing empowers
                  </p>
                  <div
                    className="team-details__experience__list wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <ul>
                      <li>
                        <i className="tji-check" />
                        <p>
                          We believe that the human essential start any
                          successful project.
                        </p>
                      </li>
                      <li>
                        <i className="tji-check" />
                        <p>
                          We believe that the human essential start any
                          successful project.
                        </p>
                      </li>
                      <li>
                        <i className="tji-check" />
                        <p>
                          We believe that the human essential start any
                          successful project.
                        </p>
                      </li>
                      <li>
                        <i className="tji-check" />
                        <p>
                          We believe that the human essential start any
                          successful project.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team-details__skills">
                  <h4
                    className="team-details__subtitle wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    Professional skills
                  </h4>
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    Our mission is to empowers businesses size to thrivie in ses
                    ever changing marketplace We are committed to the delivering
                    exceptionals the value thro strategic ins innovative
                    approaches. Our consulting of our missing empowers.
                  </p>
                  <ul
                    className="tj-progress-list wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <li>
                      <h6 className="tj-progress-title">
                        Business Consultants
                      </h6>
                      <div className="tj-progress">
                        <span className="tj-progress-percent">82%</span>
                        <div
                          className="tj-progress-bar"
                          data-percent={82}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <h6 className="tj-progress-title">
                        Client Communication
                      </h6>
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
        </div>
      </section>
      {/* end: Team Details Section */}
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




import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: Careers Section */}
      <section className="tj-careers-details section-gap">
        <div className="container">
          <div className="row rg-50">
            <div className="col-lg-8">
              <div className="tj-post-wrapper">
                <div className="tj-post-single-post">
                  {/* top content */}
                  <div className="tj-careers-top mb-30">
                    <div className="tj-careers-top-icon">
                      <i className="tji-manage" />
                    </div>
                    <div className="tj-careers-top-content">
                      <div className="tj-careers-tag">
                        <span>Full Time Job/On Site</span> <span>Urgent</span>
                      </div>
                      <h4 className="tj-careers-top-title text-anim">
                        Management Consultant
                      </h4>
                      <span className="location">
                        <i className="tji-location" />
                        London,UK
                      </span>
                    </div>
                  </div>
                  {/* content */}
                  <div className="tj-entry-content">
                    <h4 className="text-anim">Job Description</h4>
                    <p className="wow fadeInUp" data-wow-delay="0.1s">
                      Our mission is to empowers businesses size to thrive in an
                      businesses ever changing marketplace. We are committed to
                      the delivering exceptionals the value through strategic
                      inset, innovative approaches. Our consulting of our
                      missing empower businesses of all sizes to thrive.
                      Committed to the delivering exceptional in the values
                      through our strategic inset, i approaches empower. Our
                      mission is to empowers businesses
                    </p>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      Our mission is to empowers businesses size to thrive in an
                      businesses ever changing marketplace. We are committed to
                      the delivering exceptionals the value through strategic
                      inset
                    </p>
                    <div className="tj-check-list">
                      <h4 className="text-anim">Requirements</h4>
                      <p className="wow fadeInUp" data-wow-delay="0.1s">
                        Formulating and implementing business goals. We begin
                        with an in-depth analysis of your business and market to
                        identify opportunities and challenges. From there, we
                        work with you to define clear, actionable.
                      </p>
                    </div>
                    <div
                      className="team-details__experience__list service-check-list mt-4 mb-4 wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <ul>
                        <li>
                          <i className="tji-check" />
                          <span>
                            Clear vision and direction for your business for
                            consultings.
                          </span>
                        </li>
                        <li>
                          <i className="tji-check" />
                          <span>
                            Enhanced ability to anticipate and respond to market
                            changes.
                          </span>
                        </li>
                        <li>
                          <i className="tji-check" />
                          <span>
                            Data-driven decision-making for strategic planning
                            execution.
                          </span>
                        </li>
                        <li>
                          <i className="tji-check" />
                          <span>
                            Structured approach to achieving your business
                            goals.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <p className="wow fadeInUp" data-wow-delay="0.3s">
                      Our mission is to empowers businesses size to thrive in an
                      businesses ever changing marketplace. We are committed to
                      the delivering exceptionals the value through strategic
                      inset, innovative approaches. Our consulting of our
                      missing empower businesses of all sizes to delivering
                      delivering exceptional.
                    </p>
                    <div className="tj-check-list">
                      <h4 className="text-anim">Responsibilities</h4>
                      <p className="wow fadeInUp" data-wow-delay="0.1s">
                        Our mission is to empowers businesses size to thrive in
                        an businesses ever changing marketplace. We are
                        committed to the delivering exceptionals the value
                        through strategic inset. Committed to the delivering
                        exceptional in the values through our strategic inset, i
                        approaches empower.
                      </p>
                      <ul className="wow fadeInUp" data-wow-delay="0.3s">
                        <li>
                          <span>
                            <i className="tji-check" />
                          </span>{" "}
                          Discover our expertise
                        </li>
                        <li>
                          <span>
                            <i className="tji-check" />
                          </span>{" "}
                          Journey and commitment to explained
                        </li>
                        <li>
                          <span>
                            <i className="tji-check" />
                          </span>{" "}
                          Meet our team and learn
                        </li>
                        <li>
                          <span>
                            <i className="tji-check" />
                          </span>{" "}
                          Meet our team
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* post tag and share */}
                  <div
                    className="tj-tags-post tj-post-details_tags_share wow fadeInUp"
                    data-wow-delay=".1s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.3s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div className="tagcloud">
                      <span>Tags:</span>
                      <Link href="#">Business</Link>
                      <Link href="#">Consulting</Link>
                      <Link href="#">Insights</Link>
                    </div>
                    <div className="post-share">
                      <ul>
                        <li> Share:</li>
                        <li>
                          {" "}
                          <a href="https://www.facebook.com/" title="Facebook">
                            <i className="fa-brands fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="https://x.com/" title="Twitter">
                            <i className="fab fa-x-twitter" />
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a href="https://www.linkedin.com/" title="Linkedin">
                            <i className="fa-brands fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          {" "}
                          <a
                            href="https://www.pinterest.com/"
                            title="Pinterest"
                          >
                            <i className="fa-brands fa-pinterest-p" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* post navigation */}
                <div
                  className="tj-post__navigation mb-0 wow fadeInUp"
                  data-wow-delay=".3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    animationName: "fadeInUp",
                  }}
                >
                  {/* previous post */}
                  <div className="tj-nav__post previous">
                    <div className="tj-nav-post__nav prev_post">
                      <Link href="/careers-details">
                        <span>
                          <i className="tji-arrow-left" />
                        </span>
                        Previous
                      </Link>
                    </div>
                  </div>
                  <div className="tj-nav-post__grid">
                    <Link href="/careers">
                      <i className="tji-window" />
                    </Link>
                  </div>
                  {/* next post */}
                  <div className="tj-nav__post next">
                    <div className="tj-nav-post__nav next_post">
                      <Link href="/careers-details">
                        Next
                        <span>
                          <i className="tji-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <aside className="tj-blog-sidebar">
                {/* Job information  */}
                <div
                  className="tj-sidebar-widget wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <h4 className="widget-title">Job Information</h4>
                  <div className="project_catagory">
                    <ul>
                      <li>
                        <span className="first-child">Category</span>
                        <span>Business Consultant</span>
                      </li>
                      <li>
                        <span className="first-child">Number</span>
                        <span>8080UO</span>
                      </li>
                      <li>
                        <span className="first-child">Company</span>
                        <span>Young Sight Corporation</span>
                      </li>
                      <li>
                        <span className="first-child">Website</span>
                        <span>www.example.com</span>
                      </li>
                      <li>
                        <span className="first-child">Salary</span>
                        <span>$400-$550 / week</span>
                      </li>
                      <li>
                        <span className="first-child">Vacancy</span>
                        <span>03 Available</span>
                      </li>
                      <li>
                        <span className="first-child">Apply on</span>
                        <span>OCT 22, 2024</span>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* apply form */}
                <div
                  className="tj-sidebar-widget wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <h4 className="widget-title">Apply Online</h4>
                  <div className="tj-careers-form">
                    <form action="#">
                      <div className="form-input">
                        <input
                          type="text"
                          name="cr_name"
                          placeholder="Full name*"
                        />
                      </div>
                      <div className="form-input">
                        <input
                          type="email"
                          name="cr_email"
                          placeholder="Enter email*"
                        />
                      </div>
                      <div className="form-input">
                        <input
                          type="text"
                          name="cr_phone"
                          placeholder="Phone number*"
                        />
                      </div>
                      <div className="form-input">
                        <textarea
                          name="cr_cover_letter"
                          placeholder="Cover letter*"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-input reduce">
                        <label className="label" htmlFor="inputFile">
                          Attach Resume*
                        </label>
                        <input type="file" id="inputFile" />
                      </div>
                      <div className="tj-careers-button">
                        <button type="submit" className="tj-primary-btn">
                          <span className="btn-text">
                            <span>Submit Now</span>
                          </span>
                          <span className="btn-icon">
                            <i className="tji-arrow-right-long" />
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* end: Careers Section */}
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



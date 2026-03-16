import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: History title Section */}
      <section className="tj-history section-gap">
        <div className="container">
          <div className="row rg-30 justify-content-between">
            <div className="col-xl-5">
              <div className="sec-heading mb-0">
                <span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
                  <i className="tji-box" /> Our background
                </span>
                <h2 className="sec-title text-anim">
                  Discover how we have Evolved our Company's on{" "}
                  <span>Legacy.</span>
                </h2>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="desc wow fadeInUp" data-wow-delay="0.3s">
                <p>
                  Our mission is to empowers businesses off all size to thrive
                  in an businesses ever changing marketplace. We are committed
                  to the delivering exceptional in the value through our
                  strategic inset, innovative approaches. Our mission is to
                  empower businesses of all sizes to thrive.
                </p>
                <p>
                  Committed to the delivering exceptional in the value through
                  our strategic inset, innovative approaches empower.
                </p>
              </div>
              <div
                className="history-btn mt-30 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <Link className="tj-primary-btn" href="/about">
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
      </section>
      {/* end: History tile Section */}
      {/* start: History Section */}
      <section className="tj-history-area section-bottom-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="timeline">
                <div
                  className="timeline-inner wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="date">2008</div>
                  <div className="content">
                    <div className="top">
                      <span>01.</span>
                      <h4 className="title">Founding and Early Years</h4>
                      <p>
                        Our mission is to empowers businesses off all size to
                        thrive in an businesses ever changing marketplace. We
                        are committed to the delivering exceptional in the
                        value.
                      </p>
                    </div>
                    <div className="bottom">
                      <img
                        src="/assets/images/history/history-1.webp"
                        alt="history"
                      />
                      <img
                        src="/assets/images/history/history-2.webp"
                        alt="history"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="timeline-inner wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="date">2012</div>
                  <div className="content">
                    <div className="top">
                      <span>02.</span>
                      <h4 className="title">Expansion and Growth</h4>
                      <p>
                        Our mission is to empowers businesses off all size to
                        thrive in an businesses ever changing marketplace. We
                        are committed to the delivering exceptional in the
                        value.
                      </p>
                    </div>
                    <div className="bottom">
                      <img
                        src="/assets/images/history/history-3.webp"
                        alt="history"
                      />
                      <img
                        src="/assets/images/history/history-4.webp"
                        alt="history"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="timeline-inner wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="date">2016</div>
                  <div className="content">
                    <div className="top">
                      <span>03.</span>
                      <h4 className="title">
                        Innovation and Industry Leadership
                      </h4>
                      <p>
                        Our mission is to empowers businesses off all size to
                        thrive in an businesses ever changing marketplace. We
                        are committed to the delivering exceptional in the
                        value.
                      </p>
                    </div>
                    <div className="bottom">
                      <img
                        src="/assets/images/history/history-5.webp"
                        alt="history"
                      />
                      <img
                        src="/assets/images/history/history-6.webp"
                        alt="history"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="timeline-inner wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="date">2020</div>
                  <div className="content">
                    <div className="top">
                      <span>04.</span>
                      <h4 className="title">
                        Global Expansion and Diversification
                      </h4>
                      <p>
                        Our mission is to empowers businesses off all size to
                        thrive in an businesses ever changing marketplace. We
                        are committed to the delivering exceptional in the
                        value.
                      </p>
                    </div>
                    <div className="bottom">
                      <img
                        src="/assets/images/history/history-7.webp"
                        alt="history"
                      />
                      <img
                        src="/assets/images/history/history-8.webp"
                        alt="history"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="timeline-inner wow fadeInUp"
                  data-wow-delay="0.9s"
                >
                  <div className="date">2024</div>
                  <div className="content">
                    <div className="top">
                      <span>05.</span>
                      <h4 className="title">Looking Ahead</h4>
                      <p>
                        Our mission is to empowers businesses off all size to
                        thrive in an businesses ever changing marketplace. We
                        are committed to the delivering exceptional in the
                        value.
                      </p>
                    </div>
                    <div className="bottom">
                      <img
                        src="/assets/images/history/history-9.webp"
                        alt="history"
                      />
                      <img
                        src="/assets/images/history/history-10.webp"
                        alt="history"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: History Section */}
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


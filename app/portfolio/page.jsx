import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: Project Section */}
      <section className="tj-project-section section-gap">
        <div className="container">
          <div className="row row-gap-4">
            <div className="col-xl-4 col-md-6">
              <div className="project-item wow fadeInUp" data-wow-delay=".1s">
                <div className="project-img">
                  <img src="/assets/images/project/project-6.webp" alt="" />
                </div>
                <div className="project-content">
                  <span className="categories">
                    <Link href="/portfolio-details">Business</Link>
                  </span>
                  <div className="project-text">
                    <h4 className="title">
                      <Link href="/portfolio-details">
                        Event Management Platform
                      </Link>
                    </h4>
                    <Link className="project-btn" href="/portfolio-details">
                      <i className="tji-arrow-right-big" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-item wow fadeInUp" data-wow-delay=".3s">
                <div className="project-img">
                  <img src="/assets/images/project/project-7.webp" alt="" />
                </div>
                <div className="project-content">
                  <span className="categories">
                    <Link href="/portfolio-details">Business</Link>
                  </span>
                  <div className="project-text">
                    <h4 className="title">
                      <Link href="/portfolio-details">
                        Rebranding Strategy for a Growing
                      </Link>
                    </h4>
                    <Link className="project-btn" href="/portfolio-details">
                      <i className="tji-arrow-right-big" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-item wow fadeInUp" data-wow-delay=".5s">
                <div className="project-img">
                  <img src="/assets/images/project/project-8.webp" alt="" />
                </div>
                <div className="project-content">
                  <span className="categories">
                    <Link href="/portfolio-details">Business</Link>
                  </span>
                  <div className="project-text">
                    <h4 className="title">
                      <Link href="/portfolio-details">
                        Interactive Learning Platform
                      </Link>
                    </h4>
                    <Link className="project-btn" href="/portfolio-details">
                      <i className="tji-arrow-right-big" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-item wow fadeInUp" data-wow-delay=".7s">
                <div className="project-img">
                  <img src="/assets/images/project/project-9.webp" alt="" />
                </div>
                <div className="project-content">
                  <span className="categories">
                    <Link href="/portfolio-details">Business</Link>
                  </span>
                  <div className="project-text">
                    <h4 className="title">
                      <Link href="/portfolio-details">
                        Environmental Impact Dashboard
                      </Link>
                    </h4>
                    <Link className="project-btn" href="/portfolio-details">
                      <i className="tji-arrow-right-big" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-item wow fadeInUp" data-wow-delay=".9s">
                <div className="project-img">
                  <img src="/assets/images/project/project-8.webp" alt="" />
                </div>
                <div className="project-content">
                  <span className="categories">
                    <Link href="/portfolio-details">Business</Link>
                  </span>
                  <div className="project-text">
                    <h4 className="title">
                      <Link href="/portfolio-details">
                        Interactive Learning Platform
                      </Link>
                    </h4>
                    <Link className="project-btn" href="/portfolio-details">
                      <i className="tji-arrow-right-big" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="project-item wow fadeInUp" data-wow-delay="1s">
                <div className="project-img">
                  <img src="/assets/images/project/project-7.webp" alt="" />
                </div>
                <div className="project-content">
                  <span className="categories">
                    <Link href="/portfolio-details">Business</Link>
                  </span>
                  <div className="project-text">
                    <h4 className="title">
                      <Link href="/portfolio-details">
                        Rebranding Strategy for a Growing
                      </Link>
                    </h4>
                    <Link className="project-btn" href="/portfolio-details">
                      <i className="tji-arrow-right-big" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tj-pagination d-flex justify-content-center">
            <ul>
              <li>
                <span aria-current="page" className="page-numbers current">
                  1
                </span>
              </li>
              <li>
                <Link className="page-numbers" href="#">
                  2
                </Link>
              </li>
              <li>
                <Link className="page-numbers" href="#">
                  3
                </Link>
              </li>
              <li>
                <Link className="next page-numbers" href="#">
                  <i className="tji-arrow-right-long" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* end: Project Section */}
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


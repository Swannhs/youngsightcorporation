import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: Team Section */}
      <section className="tj-error-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tj-error-wrap text-center">
                <div className="tj-error-content">
                  <div className="error-img">
                    <img src="/assets/images/404/error.webp" alt="" />
                  </div>
                  <h2 className="error-title title-anim">
                    Oooop! Page not found
                  </h2>
                  <div className="error-desc">
                    You are here because you entered the address of a page that
                    no longer exists or has been moved to a different address
                  </div>
                  <Link className="tj-primary-btn error-btn" href="/">
                    <span className="btn-text">
                      <span>Go to Home Page</span>
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
      {/* end: Team Section */}
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


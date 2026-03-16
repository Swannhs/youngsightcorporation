import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: Faq Section */}
      <section className="tj-faq-section section-gap">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="faq-img-area wow fadeInLeft" data-wow-delay=".1s">
                <div className="faq-img">
                  <img src="/assets/images/faq/faq.webp" alt="" />
                  <h2 className="title title-anim">Need Help? Start Here...</h2>
                </div>
                <div className="box-area">
                  <div className="call-box wow fadeInUp" data-wow-delay=".3s">
                    <h4 className="title">Get Started Free Call? </h4>
                    <span className="call-icon">
                      <i className="tji-phone" />
                    </span>
                    <a className="number" href="tel:18884521505">
                      <span>1-888-452-1505</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion tj-faq style-2" id="faqTwo">
                <div
                  className="accordion-item active wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <button
                    className=" faq-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqTwo-1"
                    aria-expanded="true"
                  >
                    What services does Young Sight Corporation offer to clients?
                  </button>
                  <div
                    id="faqTwo-1"
                    className="collapse show"
                    data-bs-parent="#faqTwo"
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
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqTwo-2"
                    aria-expanded="false"
                  >
                    How do I get started with Corporate Business?
                  </button>
                  <div
                    id="faqTwo-2"
                    className="collapse"
                    data-bs-parent="#faqTwo"
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
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqTwo-3"
                    aria-expanded="false"
                  >
                    How do you ensure the success of a project?
                  </button>
                  <div
                    id="faqTwo-3"
                    className="collapse"
                    data-bs-parent="#faqTwo"
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
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqTwo-4"
                    aria-expanded="false"
                  >
                    How long will it take to complete my project?
                  </button>
                  <div
                    id="faqTwo-4"
                    className="collapse"
                    data-bs-parent="#faqTwo"
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
                  data-wow-delay=".3s"
                >
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faqTwo-5"
                    aria-expanded="false"
                  >
                    Can I track the progress of my project?
                  </button>
                  <div
                    id="faqTwo-5"
                    className="collapse"
                    data-bs-parent="#faqTwo"
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
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Faq Section */}
      {/* start: Faq Section */}
      <section className="tj-faq-section section-gap section-separator">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading text-center">
                <span className="sub-title wow fadeInUp" data-wow-delay=".1s">
                  <i className="tji-box" />
                  Common Questions
                </span>
                <h2 className="sec-title title-anim">
                  Need <span>Help?</span> Start Here...
                </h2>
              </div>
            </div>
            <div className="row justify-content-center">
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
                      What services does Young Sight Corporation offer to clients?
                    </button>
                    <div
                      id="faq-1"
                      className="collapse show"
                      data-bs-parent="#faqOne"
                    >
                      <div className="accordion-body faq-text">
                        <p>
                          Getting started is easy! Simply reach out to us
                          through our contact form or give us a call, and we'll
                          schedule a consultation to discuss your project and
                          how we can best assist you. Our team keeps you
                          informed throughout the process, ensuring quality
                          control and timely delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".3s"
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
                    <div
                      id="faq-2"
                      className="collapse"
                      data-bs-parent="#faqOne"
                    >
                      <div className="accordion-body faq-text">
                        <p>
                          Getting started is easy! Simply reach out to us
                          through our contact form or give us a call, and we'll
                          schedule a consultation to discuss your project and
                          how we can best assist you. Our team keeps you
                          informed throughout the process, ensuring quality
                          control and timely delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".3s"
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
                    <div
                      id="faq-3"
                      className="collapse"
                      data-bs-parent="#faqOne"
                    >
                      <div className="accordion-body faq-text">
                        <p>
                          Getting started is easy! Simply reach out to us
                          through our contact form or give us a call, and we'll
                          schedule a consultation to discuss your project and
                          how we can best assist you. Our team keeps you
                          informed throughout the process, ensuring quality
                          control and timely delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".3s"
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
                    <div
                      id="faq-4"
                      className="collapse"
                      data-bs-parent="#faqOne"
                    >
                      <div className="accordion-body faq-text">
                        <p>
                          Getting started is easy! Simply reach out to us
                          through our contact form or give us a call, and we'll
                          schedule a consultation to discuss your project and
                          how we can best assist you. Our team keeps you
                          informed throughout the process, ensuring quality
                          control and timely delivery.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay=".3s"
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
                    <div
                      id="faq-5"
                      className="collapse"
                      data-bs-parent="#faqOne"
                    >
                      <div className="accordion-body faq-text">
                        <p>
                          Getting started is easy! Simply reach out to us
                          through our contact form or give us a call, and we'll
                          schedule a consultation to discuss your project and
                          how we can best assist you. Our team keeps you
                          informed throughout the process, ensuring quality
                          control and timely delivery.
                        </p>
                      </div>
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



import Link from "next/link";

const socialLinks = [
  {
    href: "https://www.facebook.com/",
    icon: "fa-facebook-f",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/",
    icon: "fa-instagram",
    label: "Instagram",
  },
  { href: "https://x.com/", icon: "fa-x-twitter", label: "X" },
  {
    href: "https://www.linkedin.com/",
    icon: "fa-linkedin-in",
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <>
      {/* start: Footer Section */}
      <footer className="tj-footer-section footer-1 section-gap-x">
        <div className="footer-main-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <div className="footer-logo">
                    <Link href="/">
                      <img
                        src="/assets/images/logos/youngsightcorporation-logo.svg"
                        alt="youngsightcorporation logo"
                      />
                    </Link>
                  </div>
                  <div className="footer-text">
                    <p>
                      Developing personalze our customer journeys to increase
                      satisfaction &amp; loyalty of our expansion.
                    </p>
                  </div>
                  <div className="award-logo-area">
                    <div className="award-logo">
                      <img
                        src="/assets/images/footer/award-logo-1.webp"
                        alt=""
                      />
                    </div>
                    <div className="award-logo">
                      <img
                        src="/assets/images/footer/award-logo-2.webp"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget widget-nav-menu wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <h5 className="title">Services</h5>
                  <ul>
                    <li>
                      <Link href="#">Customer Experience</Link>
                    </li>
                    <li>
                      <Link href="#">Training Programs</Link>
                    </li>
                    <li>
                      <Link href="#">Business Strategy</Link>
                    </li>
                    <li>
                      <Link href="#">Training Program</Link>
                    </li>
                    <li>
                      <Link href="#">ESG Consulting</Link>
                    </li>
                    <li>
                      <Link href="#">Development Hub</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-6">
                <div
                  className="footer-widget widget-nav-menu wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <h5 className="title">Resources</h5>
                  <ul>
                    <li>
                      <Link href="#">Contact us</Link>
                    </li>
                    <li>
                      <Link href="#">Team Member</Link>
                    </li>
                    <li>
                      <Link href="#">Recognitions</Link>
                    </li>
                    <li>
                      <Link href="/careers">
                        Careers <span className="badge">New</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">News</Link>
                    </li>
                    <li>
                      <Link href="#">Feedback</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 col-md-6">
                <div
                  className="footer-widget widget-subscribe wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <h3 className="title">Subscribe to Our Newsletter.</h3>
                  <div className="subscribe-form">
                    <form action="#">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                      />
                      <button type="submit">
                        <i className="tji-plane" />
                      </button>
                      <label htmlFor="agree">
                        <input id="agree" type="checkbox" />
                        Agree to our{" "}
                        <Link href="#">Terms &amp; Condition?</Link>
                      </label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tj-copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright-content-area">
                  <div className="footer-contact">
                    <ul>
                      <li>
                        <a href="tel:10095447818">
                          <span className="icon">
                            <i className="tji-phone-2" />
                          </span>
                          <span className="text">+1 (009) 544-7818</span>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@bexon.com">
                          <span className="icon">
                            <i className="tji-envelop-2" />
                          </span>
                          <span className="text">info@bexon.com</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="social-links">
                    <ul>
                      {socialLinks.map((item) => (
                        <li key={item.label}>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                          >
                            <i className={`fa-brands ${item.icon}`} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="copyright-text">
                    <p>
                      Copyright <span>2026</span>&nbsp;
                      <a
                        href="https://themeforest.net/user/theme-junction/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Bexon
                      </a>{" "}
                      All right reserved
                    </p>
                  </div>
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
      </footer>
      {/* end: Footer Section */}
    </>
  );
}

import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <div>
      <div className="body-overlay" />
      {/* Preloader Start */}
      <div className="tj-preloader is-loading">
        <div className="tj-preloader-inner">
          <div className="tj-preloader-ball-wrap">
            <div className="tj-preloader-ball-inner-wrap">
              <div className="tj-preloader-ball-inner">
                <div className="tj-preloader-ball" />
              </div>
              <div className="tj-preloader-ball-shadow" />
            </div>
            <div id="tj-weave-anim" className="tj-preloader-text">Loading...</div>
          </div>
        </div>
        <div className="tj-preloader-overlay" />
      </div>
      {/* Preloader end */}
      {/* back to top start */}
      <div id="tj-back-to-top"><span id="tj-back-to-top-percentage" /></div>
      {/* back to top end */}
      {/* start: Search Popup */}
      <div className="search-popup-overlay" />
      {/* end: Search Popup */}
      {/* start: Offcanvas Menu */}
      <div className="tj-offcanvas-area d-none d-lg-block">
        <div className="hamburger_bg" />
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link href="/" className="mobile_logo">
                  <img src="/assets/images/logos/youngsightcorporation-logo-light.svg" alt="youngsightcorporation logo" />
                </Link>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn"><i className="fa-thin fa-times" /></button>
              </div>
            </div>
            <div className="offcanvas-text">
              <p>Developing personalize our customer journeys to increase satisfaction &amp; loyalty of our expansion recognized
                by industry leaders.</p>
            </div>
            <div className="hamburger-search-area">
              <h5 className="hamburger-title">Search Now!</h5>
              <div className="hamburger_search">
                <form method="get" action="/">
                  <button type="submit"><i className="tji-search" /></button>
                  <input type="search" autoComplete="off" name="s" defaultValue placeholder="Search here..." />
                </form>
              </div>
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="subtitle">Phone</span>
                  <a className="contact-link" href="tel:10095447818">+1 (009) 544-7818</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Email</span>
                  <a className="contact-link" href="mailto:info@bexon.com">info@bexon.com</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Location</span>
                  <span className="contact-link">993 Renner Burg, West Rond, MT 94251-030</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow Us</h5>
            <div className="social-links style-3">
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f" /></a>
                </li>
                <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram" /></a>
                </li>
                <li><a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end: Offcanvas Menu */}
      {/* start: Hamburger Menu */}
      <div className="hamburger-area d-lg-none">
        <div className="hamburger_bg" />
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link href="/" className="mobile_logo">
                  <img src="/assets/images/logos/youngsightcorporation-logo-light.svg" alt="youngsightcorporation logo" />
                </Link>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn"><i className="fa-thin fa-times" /></button>
              </div>
            </div>
            <div className="hamburger_menu">
              <div className="mobile_menu" />
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="subtitle">Phone</span>
                  <a className="contact-link" href="tel:8089091313">808-909-1313</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Email</span>
                  <a className="contact-link" href="mailto:info@bexon.com">info@bexon.com</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Location</span>
                  <span className="contact-link">993 Renner Burg, West Rond, MT 94251-030</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow Us</h5>
            <div className="social-links style-3">
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f" /></a>
                </li>
                <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram" /></a>
                </li>
                <li><a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter" /></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in" /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end: Hamburger Menu */}
      {/* start: Header Area */}
      <header className="header-area header-1 header-absolute  section-gap-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* site logo */}
                <div className="site_logo">
                  <Link className="logo" href="/"><img src="/assets/images/logos/youngsightcorporation-logo.svg" alt="youngsightcorporation logo" /></Link>
                </div>
                {/* navigation */}
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav id="mobile-menu" className="mainmenu">
                    <ul>
                      <li className="has-dropdown current-menu-ancestor"><Link href="/">Home</Link>
                        <ul className="sub-menu header__mega-menu mega-menu  ">
                          <li>
                            <div className="mega-menu-wrapper">
                              <div className="container-fluid gap-60-25">
                                <div className="row">
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb ">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-1.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <Link href="/" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/">Homepage
                                          -
                                          01</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-2.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <Link href="/index-2" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-2">Homepage
                                          -
                                          02</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-3.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <Link href="/index-3" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-3">Homepage
                                          -
                                          03</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb ">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-4.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <Link href="/index-4" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-4">Homepage
                                          -
                                          04</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-5.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <Link href="/index-5" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-5">Homepage
                                          -
                                          05</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-6.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <Link href="/index-6" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-6">Homepage
                                          -
                                          06</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb ">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-7.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <Link href="/index-7" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-7">Homepage
                                          -
                                          07</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-8.webp" alt="" />
                                        <h6 className="tj-demo-badge tj-zoom-in-out-anim">
                                          New
                                        </h6>
                                        <div className="tj-demo-button">
                                          <Link href="/index-8" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-8">Homepage
                                          -
                                          08</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-9.webp" alt="" />
                                        <h6 className="tj-demo-badge tj-zoom-in-out-anim">
                                          New
                                        </h6>
                                        <div className="tj-demo-button">
                                          <Link href="/index-9" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-9">Homepage
                                          -
                                          09</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb ">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-10.webp" alt="" />
                                        <h6 className="tj-demo-badge tj-zoom-in-out-anim">
                                          New
                                        </h6>
                                        <div className="tj-demo-button">
                                          <Link href="/index-10" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-10">Homepage
                                          -
                                          10</Link></h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><Link href="/about">Pages</Link>
                        <ul className="sub-menu header__mega-menu mega-menu mega-menu-pages">
                          <li>
                            <div className="mega-menu-wrapper">
                              <div className="mega-menu-pages-single">
                                <div className="mega-menu-pages-single-inner">
                                  <h6 className="mega-menu-title">Main Pages</h6>
                                  <div className="mega-menu-list">
                                    <Link href="/about">About us</Link>
                                    <Link href="/history">Our history <span className="mega-menu-badge tj-zoom-in-out-anim mega-menu-badge-hot ">HOT</span></Link>
                                    <Link href="/team">Team</Link>
                                    <Link href="/team-details">Team details</Link>
                                    <Link href="/careers">Careers <span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></Link>
                                    <Link href="/careers-details">Careers details</Link>
                                    <Link href="/pricing">Pricing plan</Link>
                                    <Link href="#">Feedbacks</Link>
                                    <Link href="/faq">Faq</Link>
                                    <Link href="/contact">Contact</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="mega-menu-pages-single">
                                <div className="mega-menu-pages-single-inner">
                                  <h6 className="mega-menu-title">Other Pages</h6>
                                  <div className="mega-menu-list">
                                    <Link href="/service">Services</Link>
                                    <Link href="/service-details">Service details</Link>
                                    <Link href="/portfolio">Portfolio</Link>
                                    <Link href="/portfolio-details">Portfolio details</Link>
                                    <Link href="/error">Error 404</Link>
                                    <Link href="/blog-grid">Blog grid <span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></Link>
                                    <Link href="/blog">Blog standard</Link>
                                    <Link href="/blog-details">Blog details</Link>
                                    <Link href="/terms-and-conditions">Term &amp; conditions</Link>
                                    <Link href="#">Recognition <span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></Link>
                                  </div>
                                </div>
                              </div>
                              <div className=" mega-menu-pages-single">
                                <div className="mega-menu-pages-single-inner">
                                  <h6 className="mega-menu-title">Shop Pages</h6>
                                  <div className="mega-menu-list">
                                    <Link href="/shop">Shop <span className="mega-menu-badge tj-zoom-in-out-anim mega-menu-badge-hot ">HOT</span></Link>
                                    <Link href="/shop-details">Shop details </Link>
                                    <Link href="/cart">Cart</Link>
                                    <Link href="/checkout">Checkout</Link>
                                    <Link href="/wishlist">Wishlist<span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></Link>
                                    <Link href="/login">Login</Link>
                                    <Link href="#">Tracking</Link>
                                    <Link href="#">Order confirm</Link>
                                    <Link href="/login">Registration</Link>
                                    <Link href="#">Coming soon</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-lg-3 mega-menu-pages-single">
                                <div className="mega-menu-pages-single-inner">
                                  <div className="feature-box">
                                    <div className="feature-content">
                                      <h2 className="title">Modern</h2>
                                      <span>Home Makeover</span>
                                      <a className="read-more feature-contact" href="tel:8321890640">
                                        <i className="tji-phone-3" />
                                        <span>+8 (321) 890-640</span>
                                      </a>
                                    </div>
                                    <div className="feature-images">
                                      <img src="/assets/images/service/service-ad.webp" alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><Link href="/service">Services</Link>
                        <ul className="sub-menu  mega-menu-service">
                          <li> <Link className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-1" />
                              </span> <span className="mega-menu-service-title">Business Strategy Development</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></Link></li>
                          <li> <Link className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-2" />
                              </span> <span className="mega-menu-service-title">Customer Experience Solutions</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></Link></li>
                          <li> <Link className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-3" />
                              </span> <span className="mega-menu-service-title">Sustainability and ESG Consulting</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></Link></li>
                          <li> <Link className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-4" />
                              </span> <span className="mega-menu-service-title">Training and Development Programs</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></Link></li>
                          <li> <Link className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-5" />
                              </span> <span className="mega-menu-service-title">IT Support &amp; Maintenance</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></Link></li>
                          <li> <Link className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-6" />
                              </span> <span className="mega-menu-service-title">Marketing Strategy &amp; Campaigns</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></Link></li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><Link href="/portfolio">Portfolio</Link>
                        <ul className="sub-menu">
                          <li><Link href="/portfolio">Portfolio</Link></li>
                          <li><Link href="/portfolio-details">Portfolio Details</Link></li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><Link href="/blog">Blog</Link>
                        <ul className="sub-menu">
                          <li><Link href="/blog">Blog</Link></li>
                          <li><Link href="/blog-grid">Blog Grid</Link></li>
                          <li><Link href="/blog-right-sidebar">Blog Right Sidebar</Link></li>
                          <li><Link href="/blog-details">Blog Details</Link></li>
                        </ul>
                      </li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </nav>
                </div>
                {/* header right info */}
                <div className="header-right-item d-none d-lg-inline-flex">
                  <a className="header-contact d-none d-xl-inline-flex" href="tel:18884521505">
                    <span className="call-icon"><i className="tji-phone" /></span>
                    <span className="call-text">1-888-452-1505</span>
                  </a>
                  <div className="header-button">
                    <Link className="tj-primary-btn" href="/contact">
                      <span className="btn-text"><span>Let's Talk</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                    </Link>
                  </div>
                  <div className="menu_bar menu_offcanvas d-none d-lg-inline-flex">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                {/* menu bar */}
                <div className="menu_bar mobile_menu_bar d-lg-none">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Search Popup */}
        <div className="search_popup">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-8">
                <div className="tj_search_wrapper">
                  <div className="search_form">
                    <form action="#">
                      <div className="search_input">
                        <div className="search-box">
                          <input className="search-form-input" type="text" placeholder="Type Words and Hit Enter" required />
                          <button type="submit">
                            <i className="tji-search" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* end: Header Area */}
      {/* start: Header Area */}
      <header className="header-area header-1 header-duplicate header-sticky section-gap-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* site logo */}
                <div className="site_logo">
                  <Link className="logo" href="/"><img src="/assets/images/logos/youngsightcorporation-logo.svg" alt="youngsightcorporation logo" /></Link>
                </div>
                {/* navigation */}
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav className="mainmenu">
                    <ul>
                      <li className="has-dropdown current-menu-ancestor"><Link href="/">Home</Link>
                        <ul className="sub-menu header__mega-menu mega-menu  ">
                          <li>
                            <div className="mega-menu-wrapper">
                              <div className="container-fluid gap-60-25">
                                <div className="row">
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb ">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-1.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <Link href="/" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/">Homepage
                                          -
                                          01</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-2.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <Link href="/index-2" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-2">Homepage
                                          -
                                          02</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-3.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <Link href="/index-3" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-3">Homepage
                                          -
                                          03</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb ">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-4.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <Link href="/index-4" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-4">Homepage
                                          -
                                          04</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-5.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <Link href="/index-5" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-5">Homepage
                                          -
                                          05</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-6.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <Link href="/index-6" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-6">Homepage
                                          -
                                          06</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb ">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-7.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <Link href="/index-7" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-7">Homepage
                                          -
                                          07</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-8.webp" alt="" />
                                        <h6 className="tj-demo-badge tj-zoom-in-out-anim">
                                          New
                                        </h6>
                                        <div className="tj-demo-button">
                                          <Link href="/index-8" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-8">Homepage
                                          -
                                          08</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-9.webp" alt="" />
                                        <h6 className="tj-demo-badge tj-zoom-in-out-anim">
                                          New
                                        </h6>
                                        <div className="tj-demo-button">
                                          <Link href="/index-9" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-9">Homepage
                                          -
                                          09</Link></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb ">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-10.webp" alt="" />
                                        <h6 className="tj-demo-badge tj-zoom-in-out-anim">
                                          New
                                        </h6>
                                        <div className="tj-demo-button">
                                          <Link href="/index-10" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </Link>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><Link href="/index-10">Homepage
                                          -
                                          10</Link></h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><Link href="/about">Pages</Link>
                        <ul className="sub-menu header__mega-menu mega-menu mega-menu-pages">
                          <li>
                            <div className="mega-menu-wrapper">
                              <div className="mega-menu-pages-single">
                                <div className="mega-menu-pages-single-inner">
                                  <h6 className="mega-menu-title">Main Pages</h6>
                                  <div className="mega-menu-list">
                                    <Link href="/about">About us</Link>
                                    <Link href="/history">Our history <span className="mega-menu-badge tj-zoom-in-out-anim mega-menu-badge-hot ">HOT</span></Link>
                                    <Link href="/team">Team</Link>
                                    <Link href="/team-details">Team details</Link>
                                    <Link href="/careers">Careers <span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></Link>
                                    <Link href="/careers-details">Careers details</Link>
                                    <Link href="/pricing">Pricing plan</Link>
                                    <Link href="#">Feedbacks</Link>
                                    <Link href="/faq">Faq</Link>
                                    <Link href="/contact">Contact</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="mega-menu-pages-single">
                                <div className="mega-menu-pages-single-inner">
                                  <h6 className="mega-menu-title">Other Pages</h6>
                                  <div className="mega-menu-list">
                                    <Link href="/service">Services</Link>
                                    <Link href="/service-details">Service details</Link>
                                    <Link href="/portfolio">Portfolio</Link>
                                    <Link href="/portfolio-details">Portfolio details</Link>
                                    <Link href="/error">Error 404</Link>
                                    <Link href="/blog-grid">Blog grid <span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></Link>
                                    <Link href="/blog">Blog standard</Link>
                                    <Link href="/blog-details">Blog details</Link>
                                    <Link href="/terms-and-conditions">Term &amp; conditions</Link>
                                    <Link href="#">Recognition <span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></Link>
                                  </div>
                                </div>
                              </div>
                              <div className=" mega-menu-pages-single">
                                <div className="mega-menu-pages-single-inner">
                                  <h6 className="mega-menu-title">Shop Pages</h6>
                                  <div className="mega-menu-list">
                                    <Link href="/shop">Shop <span className="mega-menu-badge tj-zoom-in-out-anim mega-menu-badge-hot ">HOT</span></Link>
                                    <Link href="/shop-details">Shop details </Link>
                                    <Link href="/cart">Cart</Link>
                                    <Link href="/checkout">Checkout</Link>
                                    <Link href="/wishlist">Wishlist<span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></Link>
                                    <Link href="/login">Login</Link>
                                    <Link href="#">Tracking</Link>
                                    <Link href="#">Order confirm</Link>
                                    <Link href="/login">Registration</Link>
                                    <Link href="#">Coming soon</Link>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 col-lg-3 mega-menu-pages-single">
                                <div className="mega-menu-pages-single-inner">
                                  <div className="feature-box">
                                    <div className="feature-content">
                                      <h2 className="title">Modern</h2>
                                      <span>Home Makeover</span>
                                      <a className="read-more feature-contact" href="tel:8321890640">
                                        <i className="tji-phone-3" />
                                        <span>+8 (321) 890-640</span>
                                      </a>
                                    </div>
                                    <div className="feature-images">
                                      <img src="/assets/images/service/service-ad.webp" alt="" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><Link href="/service">Services</Link>
                        <ul className="sub-menu  mega-menu-service">
                          <li> <Link className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-1" />
                              </span> <span className="mega-menu-service-title">Business Strategy Development</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></Link></li>
                          <li> <Link className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-2" />
                              </span> <span className="mega-menu-service-title">Customer Experience Solutions</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></Link></li>
                          <li> <Link className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-3" />
                              </span> <span className="mega-menu-service-title">Sustainability and ESG Consulting</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></Link></li>
                          <li> <Link className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-4" />
                              </span> <span className="mega-menu-service-title">Training and Development Programs</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></Link></li>
                          <li> <Link className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-5" />
                              </span> <span className="mega-menu-service-title">IT Support &amp; Maintenance</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></Link></li>
                          <li> <Link className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-6" />
                              </span> <span className="mega-menu-service-title">Marketing Strategy &amp; Campaigns</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></Link></li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><Link href="/portfolio">Portfolio</Link>
                        <ul className="sub-menu">
                          <li><Link href="/portfolio">Portfolio</Link></li>
                          <li><Link href="/portfolio-details">Portfolio Details</Link></li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><Link href="/blog">Blog</Link>
                        <ul className="sub-menu">
                          <li><Link href="/blog">Blog</Link></li>
                          <li><Link href="/blog-grid">Blog Grid</Link></li>
                          <li><Link href="/blog-right-sidebar">Blog Right Sidebar</Link></li>
                          <li><Link href="/blog-details">Blog Details</Link></li>
                        </ul>
                      </li>
                      <li><Link href="/contact">Contact</Link></li>
                    </ul>
                  </nav>
                </div>
                {/* header right info */}
                <div className="header-right-item d-none d-lg-inline-flex">
                  <div className="header-search">
                    <button className="search">
                      <i className="tji-search" />
                    </button>
                    <button type="button" className="search_close_btn">
                      <svg width={18} height={18} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1 1L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                  <div className="header-button">
                    <Link className="tj-primary-btn" href="/contact">
                      <span className="btn-text"><span>Let's Talk</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                    </Link>
                  </div>
                  <div className="menu_bar menu_offcanvas d-none d-lg-inline-flex">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
                {/* menu bar */}
                <div className="menu_bar mobile_menu_bar d-lg-none">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Search Popup */}
        <div className="search_popup">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-8">
                <div className="tj_search_wrapper">
                  <div className="search_form">
                    <form action="#">
                      <div className="search_input">
                        <div className="search-box">
                          <input className="search-form-input" type="text" placeholder="Type Words and Hit Enter" required />
                          <button type="submit">
                            <i className="tji-search" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* end: Header Area */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="space-for-header" />
            {/* start: Banner Section */}
            <section className="h4-banner-section section-gap-x">
              <div className="h4-banner-area">
                <div className="h4-banner-content">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                    <i className="tji-box" /> Solutions That Deliver
                  </span>
                  <h1 className="banner-title text-anim">Empowering Your Business with Smart Solutions.</h1>
                  <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                    <Link className="tj-primary-btn" href="/contact">
                      <span className="btn-text"><span>Get Started</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                    </Link>
                    <div className="banner-desc">Committed to delivering innovative solutions that drive success. With a focus
                      on
                      quality.
                    </div>
                  </div>
                </div>
                <div className="banner-img-area">
                  <div className="banner-img">
                    <img data-speed="0.8" src="/assets/images/hero/h4-hero-img.webp" alt="" />
                  </div>
                  <div className="h4-rating-box wow fadeInUp" data-wow-delay="1s">
                    <h2 className="title">4.8</h2>
                    <p className="desc">Global rating based on 20k+ reviews</p>
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
            {/* end: Banner Section */}
            {/* start: Choose Section */}
            <section id="choose" className="tj-choose-section section-gap">
              <div className="container">
                <div className="row row-gap-4">
                  <div className="col-lg-4 col-md-6 order-lg-0 order-1">
                    <div className="choose-box wow fadeInUp" data-wow-delay=".2s">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="tji-award" />
                        </div>
                        <h4 className="title">Award-Winning Expertise</h4>
                        <p className="desc">Recognized by industry leaders, our award-winning team has a proven record of
                          delivering
                          excellence across projects.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 order-lg-1 order-0">
                    <div className="h4-content-wrap text-center">
                      <div className="sec-heading style-4 text-center">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Choose the
                          Best</span>
                        <h2 className="sec-title title-anim">Solutions Built for Business.</h2>
                      </div>
                      <Link className="tj-primary-btn wow fadeInUp" data-wow-delay=".5s" href="/about">
                        <span className="btn-text"><span>Learn More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 order-lg-2 order-2">
                    <div className="choose-box wow fadeInUp" data-wow-delay=".3s">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="tji-team" />
                        </div>
                        <h4 className="title">Expert Team</h4>
                        <p className="desc">Our team is always available to address your concerns, providing quick and solution.
                          to
                          keep you competitive in marketplace.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 order-lg-3 order-3">
                    <div className="choose-box wow fadeInUp" data-wow-delay=".5s">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="tji-support" />
                        </div>
                        <h4 className="title">Dedicated Support</h4>
                        <p className="desc">Our team is always available to address your concerns, providing quick and effective
                          solution to keep your business.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 order-lg-4 order-4">
                    <div className="choose-box wow fadeInUp" data-wow-delay=".7s">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="tji-innovative" />
                        </div>
                        <h4 className="title">Innovative Solutions</h4>
                        <p className="desc">We stay ahead of the curve, leveraging cutting-edge technologies and strategies to
                          keep
                          you competitive in a marketplace.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 order-lg-5 order-5">
                    <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".9s" data-bg-image="/assets/images/choose/choose-img.webp">
                      <span className="count-icon"><i className="tji-growth" /></span>
                      <div className="count-inner">
                        <span className="count-text">Faster Growth</span>
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count="8.5" />
                          <span className="count-plus">X</span>
                        </div>
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
                  <div className="col-12">
                    <div className="about-content-area style-3 wow fadeInLeft" data-wow-delay=".3s">
                      <div className="sec-heading style-4">
                        <div className="subtitle-text">
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Get to Know
                            Us</span>
                        </div>
                        <h2 className="sec-title title-highlight">Committed Delivering <img src="/assets/images/marquee/marquee-1.webp" alt="" /> Measurable Results and Building from the
                          Lasting
                          Relationships <img src="/assets/images/marquee/marquee-2.webp" alt="" /> through trust and innovation
                          and
                          shared for
                          success industries Experts.
                        </h2>
                      </div>
                      <div className="about-bottom-area">
                        <div className="customers-box style-3">
                          <div className="customers">
                            <ul>
                              <li className="wow fadeInLeft" data-wow-delay=".2s"><img src="/assets/images/testimonial/client-1.webp" alt="" /></li>
                              <li className="wow fadeInLeft" data-wow-delay=".3s"><img src="/assets/images/testimonial/client-2.webp" alt="" /></li>
                              <li className="wow fadeInLeft" data-wow-delay=".4s"><img src="/assets/images/testimonial/client-3.webp" alt="" /></li>
                              <li className="wow fadeInLeft" data-wow-delay=".5s"><span><i className="tji-plus" /></span></li>
                            </ul>
                          </div>
                          <h6 className="customers-text wow fadeInLeft" data-wow-delay=".6s">We have <span>100+</span> happy
                            customer.
                          </h6>
                        </div>
                        <div className="about-btn-area-2 wow fadeInUp" data-wow-delay="1s">
                          <Link className="tj-primary-btn" href="/about">
                            <span className="btn-text"><span>Learn More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </Link>
                          <Link className="tj-primary-btn transparent-btn" href="/team">
                            <span className="btn-text"><span>Meet Teams</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid client-container-2 gap-top">
                <div className="row">
                  <div className="col-12">
                    <div className="swiper client-slider client-slider-3">
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
              <div className="bg-shape-1">
                <img src="/assets/images/shape/pattern-2.svg" alt="" />
              </div>
              <div className="bg-shape-2">
                <img src="/assets/images/shape/pattern-3.svg" alt="" />
              </div>
            </section>
            {/* end: About Section */}
            {/* start: Service Section */}
            <section className="tj-service-section-5 section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sec-heading style-4 text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Our Solutions</span>
                      <h2 className="sec-title title-anim">Tailor Business Solutions for Corporates.</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="service-wrapper">
                      <div className="service-item style-5 service-stack">
                        <div className="service-content-area">
                          <div className="service-icon">
                            <i className="tji-service-1" />
                          </div>
                          <div className="service-content">
                            <span className="no">01.</span>
                            <h3 className="title"><Link href="/service-details">Business Strategy Development</Link></h3>
                            <p className="desc">Through a combination of data-driven insights and innovative approaches, we work
                              closely with you to develop customized.</p>
                            <Link className="tj-primary-btn" href="/service-details">
                              <span className="btn-text"><span>Learn More</span></span>
                              <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            </Link>
                          </div>
                        </div>
                        <div className="service-img">
                          <img src="/assets/images/service/service-6.webp" alt="" />
                        </div>
                      </div>
                      <div className="service-item style-5 service-stack">
                        <div className="service-content-area">
                          <div className="service-icon">
                            <i className="tji-service-2" />
                          </div>
                          <div className="service-content">
                            <span className="no">02.</span>
                            <h3 className="title"><Link href="/service-details">Customer Experience Solutions</Link></h3>
                            <p className="desc">Customer Experience Solutions are designed to enhance every touchpoint of your
                              customer journey, from first interaction.</p>
                            <Link className="tj-primary-btn" href="/service-details">
                              <span className="btn-text"><span>Learn More</span></span>
                              <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            </Link>
                          </div>
                        </div>
                        <div className="service-img">
                          <img src="/assets/images/service/service-1.webp" alt="" />
                        </div>
                      </div>
                      <div className="service-item style-5">
                        <div className="service-content-area">
                          <div className="service-icon">
                            <i className="tji-service-3" />
                          </div>
                          <div className="service-content">
                            <span className="no">03.</span>
                            <h3 className="title"><Link href="/service-details">Sustainability and ESG Consulting</Link></h3>
                            <p className="desc">Provide tailored strategies that not only drive long-term value but also build
                              trust
                              with stakeholders, investors.</p>
                            <Link className="tj-primary-btn" href="/service-details">
                              <span className="btn-text"><span>Learn More</span></span>
                              <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            </Link>
                          </div>
                        </div>
                        <div className="service-img">
                          <img src="/assets/images/service/service-7.webp" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="service-bottom-text">
                      <p className="desc"><span><i className="tji-box" />Unlock tailored solutions without the wasted effort. <Link href="/contact">Talk to us today</Link></span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Service Section */}
            {/* start: Fun fact Section */}
            <section className="tj-funfact-section section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="heading-wrap-content">
                      <div className="sec-heading style-4">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />OUR FUN FACT</span>
                        <h2 className="sec-title title-anim">Numbers and facts that define performance.</h2>
                      </div>
                      <div className="progress-item">
                        <div className="progress-circle">
                          <input type="text" className="knob" defaultValue={0} data-rel={92} data-linecap={0} data-width={120} data-height={120} data-bgcolor="#ffffff" data-fgcolor="#1E8A8A" data-thickness=".16" data-readonly="true" disabled />
                        </div>
                        <div className="progress-text">
                          <span className="sub-title">Increased revenue in the&nbsp;last 6 months.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".7s">
                      <span className="count-icon"><i className="tji-growth" /></span>
                      <span className="steps">01.</span>
                      <div className="count-inner">
                        <span className="count-text">Faster Growth</span>
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count="8.5" />
                          <span className="count-plus">X</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".5s">
                      <span className="count-icon"><i className="tji-worldwide" /></span>
                      <span className="steps">02.</span>
                      <div className="count-inner">
                        <span className="count-text">Reach Worldwide</span>
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count={20} />
                          <span className="count-plus">M</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".1s">
                      <span className="count-icon"><i className="tji-complete" /></span>
                      <span className="steps">03.</span>
                      <div className="count-inner">
                        <span className="count-text">Projects Completed.</span>
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count={93} />
                          <span className="count-plus">%</span>
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
            </section>
            {/* end: Fun fact Section */}
            {/* start: Project Section */}
            <section className="tj-project-section-4 section-gap">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-4 text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Proud Projects</span>
                      <h2 className="sec-title title-anim">Breaking Boundaries, Building Dreams.</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="project-wrapper wow fadeInUp" data-wow-delay=".5s">
                      <div className="swiper project-slider-3">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="project-item h4-project-item">
                              <div className="project-content">
                                <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                                <div className="project-text">
                                  <h4 className="title"><Link href="/portfolio-details">Event Management Platform</Link></h4>
                                  <Link className="tji-icon-btn" href="/portfolio-details">
                                    <i className="tji-arrow-right-long" />
                                  </Link>
                                </div>
                              </div>
                              <div className="project-img">
                                <img src="/assets/images/project/project-4.webp" alt="Image" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-item h4-project-item">
                              <div className="project-content">
                                <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                                <div className="project-text">
                                  <h4 className="title"><Link href="/portfolio-details">Rebranding Strategy for a Growing</Link>
                                  </h4>
                                  <Link className="tji-icon-btn" href="/portfolio-details">
                                    <i className="tji-arrow-right-long" />
                                  </Link>
                                </div>
                              </div>
                              <div className="project-img">
                                <img src="/assets/images/project/project-8.webp" alt="Image" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-item h4-project-item">
                              <div className="project-content">
                                <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                                <div className="project-text">
                                  <h4 className="title"><Link href="/portfolio-details">Event Management Platform</Link></h4>
                                  <Link className="tji-icon-btn" href="/portfolio-details">
                                    <i className="tji-arrow-right-long" />
                                  </Link>
                                </div>
                              </div>
                              <div className="project-img">
                                <img src="/assets/images/project/project-9.webp" alt="Image" />
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
            {/* end: Project Section */}
            {/* start: Pricing Section */}
            <section className="tj-pricing-section-2 section-gap section-separator slidebar-stickiy-container">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 order-2 order-lg-1">
                    <div className="accordion tj-faq pricing-accordion" id="pricing">
                      <div className="accordion-item pricing-box active wow fadeInUp" data-wow-delay=".3s">
                        <button className="faq-title" type="button" data-bs-toggle="collapse" data-bs-target="#pricing-1" aria-expanded="true">Basic Plan</button>
                        <div id="pricing-1" className="collapse show" data-bs-parent="#pricing">
                          <div className="accordion-body pricing-inner">
                            <div className="pricing-header">
                              <div className="pricing-top">
                                <div className="package-desc">
                                  <p>Essential Business Services</p>
                                </div>
                                <div className="package-price">
                                  <span className="package-currency">$</span>
                                  <span className="price-number">99</span>
                                  <span className="package-period">/per month</span>
                                </div>
                              </div>
                              <div className="pricing-btn">
                                <Link className="text-btn" href="/contact">
                                  <span className="btn-text"><span>Chose Plan</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </Link>
                              </div>
                            </div>
                            <div className="list-items">
                              <ul>
                                <li><i className="tji-list" />Access to core services</li>
                                <li><i className="tji-list" />Limited customer support (email)</li>
                                <li><i className="tji-list" />1 project per month</li>
                                <li><i className="tji-list" />Basic reporting and analytics</li>
                                <li><i className="tji-list" />Standard templates and tools</li>
                                <li><i className="tji-list" />Basic performance tracking</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item pricing-box wow fadeInUp" data-wow-delay=".3s">
                        <button className="faq-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pricing-2" aria-expanded="false">Standard Plan</button>
                        <div id="pricing-2" className="collapse" data-bs-parent="#pricing">
                          <div className="accordion-body pricing-inner">
                            <div className="pricing-header">
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
                                  <span className="btn-text"><span>Chose Plan</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </Link>
                              </div>
                            </div>
                            <div className="list-items">
                              <ul>
                                <li><i className="tji-list" />All features in Basic Plan</li>
                                <li><i className="tji-list" />Priority customer support</li>
                                <li><i className="tji-list" />Up to 3 projects per month</li>
                                <li><i className="tji-list" />Monthly performance reviews</li>
                                <li><i className="tji-list" />Collaboration tools for team</li>
                                <li><i className="tji-list" />Custom templates</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item pricing-box wow fadeInUp" data-wow-delay=".3s">
                        <button className="faq-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#pricing-3" aria-expanded="false">Premium Plan</button>
                        <div id="pricing-3" className="collapse" data-bs-parent="#pricing">
                          <div className="accordion-body pricing-inner">
                            <div className="pricing-header">
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
                                  <span className="btn-text"><span>Chose Plan</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </Link>
                              </div>
                            </div>
                            <div className="list-items">
                              <ul>
                                <li><i className="tji-list" />All features in Standard Plan</li>
                                <li><i className="tji-list" />Dedicated account manager</li>
                                <li><i className="tji-list" />Tailored strategy sessions</li>
                                <li><i className="tji-list" />Quarterly performance audits</li>
                                <li><i className="tji-list" />Priority support</li>
                                <li><i className="tji-list" />24/7 emergency service</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 order-1 order-lg-2">
                    <div className="content-wrap slidebar-stickiy">
                      <div className="sec-heading style-4">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Flexible
                          pricing</span>
                        <h2 className="sec-title title-anim">Our Pricing Plan.</h2>
                      </div>
                      <p className="desc">Our team is always available to address your concerns, providing quick.</p>
                      <div className="d-none d-lg-inline-flex wow fadeInUp" data-wow-delay=".6s">
                        <Link className="tj-primary-btn" href="/pricing">
                          <span className="btn-text"><span>More Pricing</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="d-lg-none d-flex mt-5">
                      <Link className="tj-primary-btn" href="/pricing">
                        <span className="btn-text"><span>More Pricing</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Pricing Section */}
            {/* start: Contact Section */}
            <section className="tj-contact-section h4-contact-section section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="contact-form style-3 wow fadeInUp" data-wow-delay=".4s">
                      <div className="sec-heading style-4">
                        <span className="sub-title"><i className="tji-box" />Get in Touch</span>
                        <h2 className="sec-title title-anim">Drop us a Line Here.</h2>
                      </div>
                      <form id="contact-form-3">
                        <div className="row wow fadeInUp" data-wow-delay=".5s">
                          <div className="col-sm-6">
                            <div className="form-input">
                              <label className="cf-label">Full Name *</label>
                              <input type="text" name="cfName3" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-input">
                              <label className="cf-label">Email Address *</label>
                              <input type="email" name="cfEmail3" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-input">
                              <label className="cf-label">Phone number *</label>
                              <input type="tel" name="cfPhone3" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-input">
                              <div className="tj-nice-select-box">
                                <div className="tj-select">
                                  <label className="cf-label">Chose a option</label>
                                  <select name="cfSubject3">
                                    <option value={1}>Business Strategy</option>
                                    <option value={2}>Customer Experience</option>
                                    <option value={3}>Sustainability and ESG</option>
                                    <option value={4}>Training and Development</option>
                                    <option value={5}>IT Support &amp; Maintenance</option>
                                    <option value={6}>Marketing Strategy</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-input message-input">
                              <label className="cf-label">Message here... *</label>
                              <textarea name="cfMessage3" id="message" defaultValue={""} />
                            </div>
                          </div>
                          <div className="submit-btn">
                            <button className="tj-primary-btn" type="submit">
                              <span className="btn-text"><span>Send Message</span></span>
                              <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="testimonial-wrapper-3 wow fadeInUp" data-wow-delay=".5s">
                      <div className="swiper testimonial-slider-2 h4-testimonial">
                        <h3 className="tes-title">Client Feedback (4.8<span>/out of 200</span>)</h3>
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <span className="quote-icon"><i className="tji-quote" /></span>
                              <div className="desc">
                                <p>Working with Bexon has been a game-changer for our business. Their team's
                                  professionalism,
                                  attention to detail, and innovative solutions have helped us streamline operations and
                                  achieve
                                  our goals faster than we imagined. We truly feel like a valued partner. The results we've
                                  seen
                                  after partnering.</p>
                              </div>
                              <div className="testimonial-author">
                                <div className="author-inner">
                                  <div className="author-img">
                                    <img src="/assets/images/testimonial/client-1.webp" alt="" />
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
                              <span className="quote-icon"><i className="tji-quote" /></span>
                              <div className="desc">
                                <p>The results we've seen after partnering with Bexon are beyond our expectations. They not
                                  only
                                  understood our vision but also brought new ideas to the table that have taken our business
                                  to
                                  the next level. Their expertise and commitment to success make them a trusted.
                                </p>
                              </div>
                              <div className="testimonial-author">
                                <div className="author-inner">
                                  <div className="author-img">
                                    <img src="/assets/images/testimonial/client-2.webp" alt="" />
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
                              <span className="quote-icon"><i className="tji-quote" /></span>
                              <div className="desc">
                                <p>We've been working with Bexonfor years, and they continue to deliver outstanding results.
                                  Their team is proactive, responsive, and always goes the extra mile to ensure our needs
                                  are
                                  met. They've become a key contributor to our growth and success that really help us"
                                </p>
                              </div>
                              <div className="testimonial-author">
                                <div className="author-inner">
                                  <div className="author-img">
                                    <img src="/assets/images/testimonial/client-3.webp" alt="" />
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
                        <div className="testimonial-navigation d-flex">
                          <div className="slider-prev">
                            <span className="anim-icon">
                              <i className="tji-arrow-left" />
                              <i className="tji-arrow-left" />
                            </span>
                          </div>
                          <div className="slider-next">
                            <span className="anim-icon">
                              <i className="tji-arrow-right" />
                              <i className="tji-arrow-right" />
                            </span>
                          </div>
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
            </section>
            {/* end: Contact Section */}
            {/* start: Blog Section */}
            <section className="tj-blog-section-4 section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-4 text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Read Blogs</span>
                      <h2 className="sec-title title-anim">Strategies and Insights.</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="h4-blog-wrap">
                      <div className="blog-item style-3 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-thumb">
                          <Link href="/blog-details"><img src="/assets/images/blog/blog-1.webp" alt="" /></Link>
                          <div className="blog-date">
                            <span className="date">28</span>
                            <span className="month">Feb</span>
                          </div>
                        </div>
                        <div className="blog-content">
                          <div className="blog-meta">
                            <span className="categories"><Link href="/blog-details">Business</Link></span>
                            <span>By <Link href="/blog-details">Ellinien Loma</Link></span>
                          </div>
                          <h4 className="title"><Link href="/blog-details">Harnessing Digital Transform a Roadmap
                              Businesses.</Link>
                          </h4>
                          <Link className="text-btn" href="/blog-details">
                            <span className="btn-text"><span>Read More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </Link>
                        </div>
                      </div>
                      <div className="blog-item style-3 wow fadeInUp" data-wow-delay=".5s">
                        <div className="blog-thumb">
                          <Link href="/blog-details"><img src="/assets/images/blog/blog-2.webp" alt="" /></Link>
                        </div>
                        <div className="blog-content">
                          <div className="blog-meta">
                            <span className="categories"><Link href="/blog-details">Business</Link></span>
                            <span>By <Link href="/blog-details">Ellinien Loma</Link></span>
                          </div>
                          <h4 className="title"><Link href="/blog-details">Harnessing Digital Transform a Roadmap
                              Businesses.</Link>
                          </h4>
                          <Link className="text-btn" href="/blog-details">
                            <span className="btn-text"><span>Read More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </Link>
                        </div>
                      </div>
                      <div className="blog-item style-3 wow fadeInUp" data-wow-delay=".7s">
                        <div className="blog-thumb">
                          <Link href="/blog-details"><img src="/assets/images/blog/blog-3.webp" alt="" /></Link>
                        </div>
                        <div className="blog-content">
                          <div className="blog-meta">
                            <span className="categories"><Link href="/blog-details">Business</Link></span>
                            <span>By <Link href="/blog-details">Ellinien Loma</Link></span>
                          </div>
                          <h4 className="title"><Link href="/blog-details">Mastering Change Management Lessons for
                              Businesses.</Link>
                          </h4>
                          <Link className="text-btn" href="/blog-details">
                            <span className="btn-text"><span>Read More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Blog Section */}
          </main>
          {/* start: Footer Section */}
          <footer className="tj-footer-section footer-4 section-gap-x">
            <div className="footer-top">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="footer-cta">
                      <h2 className="cta-title title-anim">Let's Build Future Together?</h2>
                      <Link className="cta-btn wow fadeInUp" data-wow-delay=".3s" href="/contact">
                        <div className="customers">
                          <ul>
                            <li><img src="/assets/images/testimonial/client-1.webp" alt="" /></li>
                            <li><img src="/assets/images/testimonial/client-2.webp" alt="" /></li>
                            <li><img src="/assets/images/testimonial/client-3.webp" alt="" /></li>
                          </ul>
                        </div>
                        <span className="btn-text"><span>Lets Talk</span> <i className="tji-arrow-right-long" /></span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="footer-widget widget-subscribe-3 wow fadeInUp" data-wow-delay=".5s">
                      <h3 className="title">Subscribe to Our Newsletter.</h3>
                      <div className="subscribe-form">
                        <form action="#">
                          <input type="email" name="email" placeholder="Enter email" />
                          <button className="tj-primary-btn d-none d-sm-flex" type="submit">
                            <span className="btn-text"><span>Subscribe</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </button>
                          <label htmlFor="agree"><input id="agree" type="checkbox" />Agree to our <Link href="#">Terms &amp;
                              Condition?</Link></label>
                          <button className="tj-primary-btn d-flex d-sm-none " type="submit">
                            <span className="btn-text"><span>Subscribe</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-main-area">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-3 col-md-6">
                    <div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
                      <h5 className="title">Our Company</h5>
                      <div className="footer-text">
                        <p>Developing personalze our customer journeys to increase satisfaction &amp; loyalty of our expansion.
                        </p>
                      </div>
                      <div className="award-logo-area">
                        <div className="award-logo">
                          <img src="/assets/images/footer/award-logo-1.webp" alt="" />
                        </div>
                        <div className="award-logo">
                          <img src="/assets/images/footer/award-logo-2.webp" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="footer-widget footer-col-2 widget-nav-menu wow fadeInUp" data-wow-delay=".3s">
                      <h5 className="title">Services</h5>
                      <ul>
                        <li><Link href="#">Customer Experience</Link></li>
                        <li><Link href="#">Training Programs</Link></li>
                        <li><Link href="#">Business Strategy</Link></li>
                        <li><Link href="#">Training Program</Link></li>
                        <li><Link href="#">ESG Consulting</Link></li>
                        <li><Link href="#">Development Hub</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="footer-widget footer-col-3 widget-nav-menu wow fadeInUp" data-wow-delay=".5s">
                      <h5 className="title">Resources</h5>
                      <ul>
                        <li><Link href="#">Contact us</Link></li>
                        <li><Link href="#">Team Member</Link></li>
                        <li><Link href="#">Recognitions</Link></li>
                        <li><Link href="/careers">Careers <span className="badge">New</span></Link></li>
                        <li><Link href="#">News</Link></li>
                        <li><Link href="#">Feedback</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="footer-widget widget-contact style-2 wow fadeInUp" data-wow-delay=".7s">
                      <h5 className="title">Our Office</h5>
                      <div className="footer-contact-info">
                        <div className="contact-item">
                          <span>993 Renner Burg, West Rond, MT 94251-030, USA.</span>
                        </div>
                        <div className="contact-item">
                          <a href="tel:10095447818">P: +1 (009) 544-7818</a>
                          <a href="mailto:support@bexon.com">M: support@bexon.com</a>
                        </div>
                        <div className="contact-item">
                          <span><i className="tji-clock" /> Mon-Fri 10am-10pm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tj-copyright-area-4">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="copyright-content-area">
                      <div className="copyright-text">
                        <p>© <span>2026</span>&nbsp;<a href="https://themeforest.net/user/theme-junction/portfolio" target="_blank">Bexon</a> All right reserved</p>
                      </div>
                      <div className="social-links style-2">
                        <ul>
                          <li><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f" /></a>
                          </li>
                          <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram" /></a>
                          </li>
                          <li><a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter" /></a></li>
                          <li><a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in" /></a>
                          </li>
                        </ul>
                      </div>
                      <div className="copyright-menu">
                        <ul>
                          <li><Link href="/contact">Privacy Policy</Link></li>
                          <li><Link href="/contact">Terms &amp; Condition</Link></li>
                        </ul>
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
        </div>
      </div>
      {/* JS here */}
    </div>
    
  );
}

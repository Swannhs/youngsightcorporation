export const metadata = { title: "Bexon - Corporate Business HTML Template" };

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
                <a href="/" className="mobile_logo">
                  <img src="/assets/images/logos/logo-2.webp" alt="Logo" />
                </a>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn"><i className="fa-thin fa-times" /></button>
              </div>
            </div>
            <div className="offcanvas-text">
              <p>Developing personalize our customer journeys to increase satisfaction &amp; loyalty of our expansion
                recognized
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
                <a href="/" className="mobile_logo">
                  <img src="/assets/images/logos/logo-2.webp" alt="Logo" />
                </a>
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
                  <a className="logo" href="/"><img src="/assets/images/logos/logo.webp" alt="" /></a>
                </div>
                {/* navigation */}
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav id="mobile-menu" className="mainmenu">
                    <ul>
                      <li className="has-dropdown current-menu-ancestor"><a href="/">Home</a>
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
                                          <a href="/" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/">Homepage
                                          -
                                          01</a></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-2.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <a href="/index-2" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-2">Homepage
                                          -
                                          02</a></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-3.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <a href="/index-3" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-3">Homepage
                                          -
                                          03</a></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb ">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-4.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <a href="/index-4" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-4">Homepage
                                          -
                                          04</a></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-5.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <a href="/index-5" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-5">Homepage
                                          -
                                          05</a></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-6.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <a href="/index-6" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-6">Homepage
                                          -
                                          06</a></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb ">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-7.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <a href="/index-7" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-7">Homepage
                                          -
                                          07</a></h6>
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
                                          <a href="/index-8" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-8">Homepage
                                          -
                                          08</a></h6>
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
                                          <a href="/index-9" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-9">Homepage
                                          -
                                          09</a></h6>
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
                                          <a href="/index-10" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-10">Homepage
                                          -
                                          10</a></h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><a href="/about">Pages</a>
                        <ul className="sub-menu header__mega-menu mega-menu mega-menu-pages">
                          <li>
                            <div className="mega-menu-wrapper">
                              <div className="mega-menu-pages-single">
                                <div className="mega-menu-pages-single-inner">
                                  <h6 className="mega-menu-title">Main Pages</h6>
                                  <div className="mega-menu-list">
                                    <a href="/about">About us</a>
                                    <a href="/history">Our history <span className="mega-menu-badge tj-zoom-in-out-anim mega-menu-badge-hot ">HOT</span></a>
                                    <a href="/team">Team</a>
                                    <a href="/team-details">Team details</a>
                                    <a href="/careers">Careers <span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></a>
                                    <a href="/careers-details">Careers details</a>
                                    <a href="/pricing">Pricing plan</a>
                                    <a href="#">Feedbacks</a>
                                    <a href="/faq">Faq</a>
                                    <a href="/contact">Contact</a>
                                  </div>
                                </div>
                              </div>
                              <div className="mega-menu-pages-single">
                                <div className="mega-menu-pages-single-inner">
                                  <h6 className="mega-menu-title">Other Pages</h6>
                                  <div className="mega-menu-list">
                                    <a href="/service">Services</a>
                                    <a href="/service-details">Service details</a>
                                    <a href="/portfolio">Portfolio</a>
                                    <a href="/portfolio-details">Portfolio details</a>
                                    <a href="/error">Error 404</a>
                                    <a href="/blog-grid">Blog grid <span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></a>
                                    <a href="/blog">Blog standard</a>
                                    <a href="/blog-details">Blog details</a>
                                    <a href="/terms-and-conditions">Term &amp; conditions</a>
                                    <a href="#">Recognition <span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></a>
                                  </div>
                                </div>
                              </div>
                              <div className=" mega-menu-pages-single">
                                <div className="mega-menu-pages-single-inner">
                                  <h6 className="mega-menu-title">Shop Pages</h6>
                                  <div className="mega-menu-list">
                                    <a href="/shop">Shop <span className="mega-menu-badge tj-zoom-in-out-anim mega-menu-badge-hot ">HOT</span></a>
                                    <a href="/shop-details">Shop details </a>
                                    <a href="/cart">Cart</a>
                                    <a href="/checkout">Checkout</a>
                                    <a href="/wishlist">Wishlist<span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></a>
                                    <a href="/login">Login</a>
                                    <a href="#">Tracking</a>
                                    <a href="#">Order confirm</a>
                                    <a href="/login">Registration</a>
                                    <a href="#">Coming soon</a>
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
                      <li className="has-dropdown"><a href="/service">Services</a>
                        <ul className="sub-menu  mega-menu-service">
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-1" />
                              </span> <span className="mega-menu-service-title">Business Strategy Development</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-2" />
                              </span> <span className="mega-menu-service-title">Customer Experience Solutions</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-3" />
                              </span> <span className="mega-menu-service-title">Sustainability and ESG Consulting</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-4" />
                              </span> <span className="mega-menu-service-title">Training and Development Programs</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-5" />
                              </span> <span className="mega-menu-service-title">IT Support &amp; Maintenance</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-6" />
                              </span> <span className="mega-menu-service-title">Marketing Strategy &amp; Campaigns</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><a href="/portfolio">Portfolio</a>
                        <ul className="sub-menu">
                          <li><a href="/portfolio">Portfolio</a></li>
                          <li><a href="/portfolio-details">Portfolio Details</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><a href="/blog">Blog</a>
                        <ul className="sub-menu">
                          <li><a href="/blog">Blog</a></li>
                          <li><a href="/blog-grid">Blog Grid</a></li>
                          <li><a href="/blog-right-sidebar">Blog Right Sidebar</a></li>
                          <li><a href="/blog-details">Blog Details</a></li>
                        </ul>
                      </li>
                      <li><a href="/contact">Contact</a></li>
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
                    <a className="tj-primary-btn" href="/contact">
                      <span className="btn-text"><span>Letâs Talk</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                    </a>
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
      <header className="header-area header-1 header-duplicate header-sticky  section-gap-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* site logo */}
                <div className="site_logo">
                  <a className="logo" href="/"><img src="/assets/images/logos/logo.webp" alt="" /></a>
                </div>
                {/* navigation */}
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav className="mainmenu">
                    <ul>
                      <li className="has-dropdown current-menu-ancestor"><a href="/">Home</a>
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
                                          <a href="/" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/">Homepage
                                          -
                                          01</a></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-2.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <a href="/index-2" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-2">Homepage
                                          -
                                          02</a></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-3.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <a href="/index-3" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-3">Homepage
                                          -
                                          03</a></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb ">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-4.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <a href="/index-4" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-4">Homepage
                                          -
                                          04</a></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-5.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <a href="/index-5" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-5">Homepage
                                          -
                                          05</a></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-6.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <a href="/index-6" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-6">Homepage
                                          -
                                          06</a></h6>
                                    </div>
                                  </div>
                                  <div className="col-xl-3 col-lg-3 col-12">
                                    <div className="tj-demo-thumb ">
                                      <div className="image">
                                        <img src="/assets/images/header/demo/home-7.webp" alt="" />
                                        <div className="tj-demo-button">
                                          <a href="/index-7" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-7">Homepage
                                          -
                                          07</a></h6>
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
                                          <a href="/index-8" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-8">Homepage
                                          -
                                          08</a></h6>
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
                                          <a href="/index-9" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-9">Homepage
                                          -
                                          09</a></h6>
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
                                          <a href="/index-10" className="tj-primary-btn header_btn">
                                            <span className="btn-text"><span>View demo</span></span>
                                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                          </a>
                                        </div>
                                      </div>
                                      <h6 className="tj-demo-title"><a href="/index-10">Homepage
                                          -
                                          10</a></h6>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><a href="/about">Pages</a>
                        <ul className="sub-menu header__mega-menu mega-menu mega-menu-pages">
                          <li>
                            <div className="mega-menu-wrapper">
                              <div className="mega-menu-pages-single">
                                <div className="mega-menu-pages-single-inner">
                                  <h6 className="mega-menu-title">Main Pages</h6>
                                  <div className="mega-menu-list">
                                    <a href="/about">About us</a>
                                    <a href="/history">Our history <span className="mega-menu-badge tj-zoom-in-out-anim mega-menu-badge-hot ">HOT</span></a>
                                    <a href="/team">Team</a>
                                    <a href="/team-details">Team details</a>
                                    <a href="/careers">Careers <span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></a>
                                    <a href="/careers-details">Careers details</a>
                                    <a href="/pricing">Pricing plan</a>
                                    <a href="#">Feedbacks</a>
                                    <a href="/faq">Faq</a>
                                    <a href="/contact">Contact</a>
                                  </div>
                                </div>
                              </div>
                              <div className="mega-menu-pages-single">
                                <div className="mega-menu-pages-single-inner">
                                  <h6 className="mega-menu-title">Other Pages</h6>
                                  <div className="mega-menu-list">
                                    <a href="/service">Services</a>
                                    <a href="/service-details">Service details</a>
                                    <a href="/portfolio">Portfolio</a>
                                    <a href="/portfolio-details">Portfolio details</a>
                                    <a href="/error">Error 404</a>
                                    <a href="/blog-grid">Blog grid <span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></a>
                                    <a href="/blog">Blog standard</a>
                                    <a href="/blog-details">Blog details</a>
                                    <a href="/terms-and-conditions">Term &amp; conditions</a>
                                    <a href="#">Recognition <span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></a>
                                  </div>
                                </div>
                              </div>
                              <div className=" mega-menu-pages-single">
                                <div className="mega-menu-pages-single-inner">
                                  <h6 className="mega-menu-title">Shop Pages</h6>
                                  <div className="mega-menu-list">
                                    <a href="/shop">Shop <span className="mega-menu-badge tj-zoom-in-out-anim mega-menu-badge-hot ">HOT</span></a>
                                    <a href="/shop-details">Shop details </a>
                                    <a href="/cart">Cart</a>
                                    <a href="/checkout">Checkout</a>
                                    <a href="/wishlist">Wishlist<span className="mega-menu-badge tj-zoom-in-out-anim ">NEW</span></a>
                                    <a href="/login">Login</a>
                                    <a href="#">Tracking</a>
                                    <a href="#">Order confirm</a>
                                    <a href="/login">Registration</a>
                                    <a href="#">Coming soon</a>
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
                      <li className="has-dropdown"><a href="/service">Services</a>
                        <ul className="sub-menu  mega-menu-service">
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-1" />
                              </span> <span className="mega-menu-service-title">Business Strategy Development</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-2" />
                              </span> <span className="mega-menu-service-title">Customer Experience Solutions</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-3" />
                              </span> <span className="mega-menu-service-title">Sustainability and ESG Consulting</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-4" />
                              </span> <span className="mega-menu-service-title">Training and Development Programs</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-5" />
                              </span> <span className="mega-menu-service-title">IT Support &amp; Maintenance</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-6" />
                              </span> <span className="mega-menu-service-title">Marketing Strategy &amp; Campaigns</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><a href="/portfolio">Portfolio</a>
                        <ul className="sub-menu">
                          <li><a href="/portfolio">Portfolio</a></li>
                          <li><a href="/portfolio-details">Portfolio Details</a></li>
                        </ul>
                      </li>
                      <li className="has-dropdown"><a href="/blog">Blog</a>
                        <ul className="sub-menu">
                          <li><a href="/blog">Blog</a></li>
                          <li><a href="/blog-grid">Blog Grid</a></li>
                          <li><a href="/blog-right-sidebar">Blog Right Sidebar</a></li>
                          <li><a href="/blog-details">Blog Details</a></li>
                        </ul>
                      </li>
                      <li><a href="/contact">Contact</a></li>
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
                    <a className="tj-primary-btn" href="/contact">
                      <span className="btn-text"><span>Letâs Talk</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                    </a>
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
            <section className="tj-banner-section section-gap-x">
              <div className="banner-area">
                <div className="banner-left-box">
                  <div className="banner-content">
                    <span className="sub-title wow fadeInDown" data-wow-delay=".2s">
                      <i className="tji-excellence" /> Recognized for Excellence
                    </span>
                    <h1 className="banner-title title-anim">Driving Excellence Through Evolution and
                      <span>Trust.</span>
                    </h1>
                    <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                      <a className="banner-link" href="/about">
                        <span><i className="tji-arrow-right-big" /></span>
                      </a>
                      <div className="banner-desc">Represents growth, expansion, and modern
                        business solution present growth, expansion.
                      </div>
                    </div>
                  </div>
                  <div className="banner-shape">
                    <img src="/assets/images/shape/pattern-bg.webp" alt="" />
                  </div>
                </div>
                <div className="banner-right-box">
                  <div className="banner-img">
                    <img data-speed="0.8" src="/assets/images/hero/hero-img.webp" alt="" />
                  </div>
                  <div className="box-area">
                    <div className="customers-box">
                      <div className="customers">
                        <ul>
                          <li className="wow fadeInLeft" data-wow-delay=".5s"><img src="/assets/images/testimonial/client-1.webp" alt="" /></li>
                          <li className="wow fadeInLeft" data-wow-delay=".6s"><img src="/assets/images/testimonial/client-2.webp" alt="" /></li>
                          <li className="wow fadeInLeft" data-wow-delay=".7s"><img src="/assets/images/testimonial/client-3.webp" alt="" /></li>
                          <li className="wow fadeInLeft" data-wow-delay=".8s"><span><i className="tji-plus" /></span></li>
                        </ul>
                      </div>
                      <div className="customers-number wow fadeInUp" data-wow-delay=".5s">30K</div>
                      <h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">Happy customer we have world-wide.</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="banner-scroll wow fadeInDown" data-wow-delay="2s">
                <a href="#choose" className="scroll-down tj-scroll-btn">
                  <span><i className="tji-arrow-down-long" /></span>
                  Scroll Down
                </a>
              </div>
            </section>
            {/* end: Banner Section */}
            {/* start: Choose Section */}
            <section id="choose" className="tj-choose-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Choose the
                        Best</span>
                      <h2 className="sec-title title-anim">Empowering Business with <span>Expertise.</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4 rightSwipeWrap">
                  <div className="col-lg-4">
                    <div className="choose-box right-swipe">
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
                  <div className="col-lg-4">
                    <div className="choose-box right-swipe">
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
                  <div className="col-lg-4">
                    <div className="choose-box right-swipe">
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
                </div>
              </div>
            </section>
            {/* end: Choose Section */}
            {/* start: Client Section */}
            <section className="tj-client-section client-section-gap wow fadeInUp" data-wow-delay=".4s">
              <div className="container-fluid client-container">
                <div className="row">
                  <div className="col-12">
                    <div className="client-content">
                      <h5 className="sec-title">Join Over <span className="client-numbers">1000+</span> Companies with
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
            {/* start: About Section */}
            <section className="tj-about-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
                    <div className="about-img-area wow fadeInLeft" data-wow-delay=".2s">
                      <div className="about-img overflow-hidden">
                        <img data-speed="0.8" src="/assets/images/about/about-1.webp" alt="" />
                      </div>
                      <div className="box-area">
                        <div className="experience-box wow fadeInUp" data-wow-delay=".3s">
                          <span className="sub-title">Experiences</span>
                          <div className="customers-number">13+</div>
                          <h6 className="customers-text">Decades of Experience, Endless Innovation</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                    <div className="about-content-area style-1 wow fadeInLeft" data-wow-delay=".2s">
                      <div className="sec-heading">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Get to Know
                          Us</span>
                        <h2 className="sec-title title-anim">Empowering Businesses with Innovation,
                          Expertise, and for <span>Success.</span>
                        </h2>
                      </div>
                      <div className="wow fadeInUp" data-wow-delay=".5s">
                        <a className="text-btn" href="/about">
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </a>
                      </div>
                    </div>
                    <div className="about-bottom-area">
                      <div className="client-review-cont wow fadeInUp" data-wow-delay=".7s">
                        <div className="rating-area">
                          <div className="star-ratings">
                            <div className="fill-ratings" style={{width: '100%'}}>
                              <span>âââââ</span>
                            </div>
                            <div className="empty-ratings">
                              <span>âââââ</span>
                            </div>
                          </div>
                        </div>
                        <p className="desc">We believe in building lasting relationships with our clients through trust,
                          innovation,
                          and
                          exceptional service.</p>
                        <div className="client-info-area">
                          <div className="client-info">
                            <h6 className="title">Esther Howard</h6>
                            <span className="designation">Co.Founder</span>
                          </div>
                          <span className="quote-icon"><i className="tji-quote" /></span>
                        </div>
                      </div>
                      <div className="video-img  wow fadeInUp" data-wow-delay=".9s">
                        <img src="/assets/images/about/about-2.webp" alt="" />
                        <a className="video-btn video-popup" data-autoplay="true" data-vbtype="video" data-maxwidth="1200px" href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados">
                          <span><i className="tji-play" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: About Section */}
            {/* start: Service Section */}
            <section className="tj-service-section overflow-hidden section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title text-white wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Our
                        Solutions</span>
                      <h2 className="sec-title text-white title-anim">Solutions to Transform Your <span>Business.</span></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col-12">
                    <div className="service-wrapper wow fadeInUp" data-wow-delay=".4s">
                      <div className="swiper service-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="service-item style-1">
                              <div className="service-img">
                                <img src="/assets/images/service/service-1.webp" alt="" />
                              </div>
                              <div className="service-icon">
                                <i className="tji-service-1" />
                              </div>
                              <div className="service-content">
                                <h4 className="title"><a href="/service-details">Business Strategy Development</a></h4>
                                <p className="desc">Through a combination of data-driven insights and innovative approaches, we
                                  work
                                  closely with you to develop customized.</p>
                                <a className="text-btn" href="/service-details">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-1">
                              <div className="service-img">
                                <img src="/assets/images/service/service-5.webp" alt="" />
                              </div>
                              <div className="service-icon">
                                <i className="tji-service-2" />
                              </div>
                              <div className="service-content">
                                <h4 className="title"><a href="/service-details">Customer Experience Solutions</a></h4>
                                <p className="desc">Developing personalized customer journeys to increase satisfaction and
                                  loyalty
                                  of our expansion to keep competitive.</p>
                                <a className="text-btn" href="/service-details">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-1">
                              <div className="service-img">
                                <img src="/assets/images/service/service-6.webp" alt="" />
                              </div>
                              <div className="service-icon">
                                <i className="tji-service-3" />
                              </div>
                              <div className="service-content">
                                <h4 className="title"><a href="/service-details">Sustainability and ESG Consulting</a></h4>
                                <p className="desc">Provide tailored strategies that not only drive long-term value but also
                                  build
                                  trust with stakeholders, investors.</p>
                                <a className="text-btn" href="/service-details">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-1">
                              <div className="service-img">
                                <img src="/assets/images/service/service-7.webp" alt="" />
                              </div>
                              <div className="service-icon">
                                <i className="tji-service-4" />
                              </div>
                              <div className="service-content">
                                <h4 className="title"><a href="/service-details">Training and Development Programs</a></h4>
                                <p className="desc">Training and Development Programs are designed to empower employees with the
                                  skills, knowledge, and tools they need.</p>
                                <a className="text-btn" href="/service-details">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-pagination-area white-pagination" />
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
            {/* end: Service Section */}
            {/* start: Project Section */}
            <section className="tj-project-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Proud Projects</span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading">
                          <h2 className="sec-title title-anim">Breaking Boundaries, Building <span>Dreams.</span></h2>
                        </div>
                        <p className="desc wow fadeInUp" data-wow-delay=".5s">We work closely with our clients to understand
                          their
                          unique needs and craft tailored
                          solutions that address challenges.</p>
                        <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                          <a className="tj-primary-btn" href="/portfolio">
                            <span className="btn-text"><span>More Projects</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="project-area tj-arrange-container">
                      <div className="project-item tj-arrange-item">
                        <div className="project-img" data-bg-image="/assets/images/project/project-1.webp" />
                        <div className="project-content">
                          <span className="categories"><a href="/portfolio-details">Connect</a></span>
                          <div className="project-text">
                            <h4 className="title"><a href="/portfolio-details">Event Management Platform</a></h4>
                            <a className="project-btn" href="/portfolio-details">
                              <i className="tji-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="project-item tj-arrange-item">
                        <div className="project-img" data-bg-image="/assets/images/project/project-2.webp" />
                        <div className="project-content">
                          <span className="categories"><a href="/portfolio-details">Empower</a></span>
                          <div className="project-text">
                            <h4 className="title"><a href="/portfolio-details">Digital Marketing Campaign</a></h4>
                            <a className="project-btn" href="/portfolio-details">
                              <i className="tji-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="project-item tj-arrange-item">
                        <div className="project-img" data-bg-image="/assets/images/project/project-3.webp" />
                        <div className="project-content">
                          <span className="categories"><a href="/portfolio-details">Support</a></span>
                          <div className="project-text">
                            <h4 className="title"><a href="/portfolio-details">Interactive Learning Platform</a></h4>
                            <a className="project-btn" href="/portfolio-details">
                              <i className="tji-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="project-item tj-arrange-item">
                        <div className="project-img" data-bg-image="/assets/images/project/project-4.webp" />
                        <div className="project-content">
                          <span className="categories"><a href="/portfolio-details">Business</a></span>
                          <div className="project-text">
                            <h4 className="title"><a href="/portfolio-details">Environmental Impact Dashboard</a></h4>
                            <a className="project-btn" href="/portfolio-details">
                              <i className="tji-arrow-right-long" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Project Section */}
            {/* start: Countup Section */}
            <div className="tj-countup-section">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="countup-wrap">
                      <div className="countup-item">
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count={93} />
                          <span className="count-plus">%</span>
                        </div>
                        <span className="count-text">Projects Completed.</span>
                        <span className="count-separator" data-bg-image="/assets/images/shape/separator.svg" />
                      </div>
                      <div className="countup-item">
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count={20} />
                          <span className="count-plus">M</span>
                        </div>
                        <span className="count-text">Reach Worldwide</span>
                        <span className="count-separator" data-bg-image="/assets/images/shape/separator.svg" />
                      </div>
                      <div className="countup-item">
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count="8.5" />
                          <span className="count-plus">X</span>
                        </div>
                        <span className="count-text">Faster Growth</span>
                        <span className="count-separator" data-bg-image="/assets/images/shape/separator.svg" />
                      </div>
                      <div className="countup-item">
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count={100} />
                          <span className="count-plus">+</span>
                        </div>
                        <span className="count-text">Awards Archived</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end: Countup Section */}
            {/* start: Testimonial Section */}
            <section className="tj-testimonial-section section-gap section-gap-x">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Clients
                        Feedback</span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading">
                          <h2 className="sec-title title-anim">Success <span>Stories</span> Fuel our Innovation.</h2>
                        </div>
                        <div className="slider-navigation d-inline-flex wow fadeInUp" data-wow-delay=".4s">
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
                <div className="row">
                  <div className="col-12">
                    <div className="testimonial-wrapper wow fadeInUp" data-wow-delay=".5s">
                      <div className="swiper swiper-container testimonial-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <span className="quote-icon"><i className="tji-quote" /></span>
                              <div className="desc">
                                <p>Working with Bexon has been a game-changer for our business. Their team's
                                  professionalism,
                                  attention to detail, and innovative solutions have helped us streamline operations and
                                  achieve
                                  our goals faster than we imagined. We truly feel like a valued partner.</p>
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
                                <p>The results weâve seen after partnering with Bexon are beyond our expectations. They not
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
                                <p>Weâve been working with Bexonfor years, and they continue to deliver outstanding results.
                                  Their team is proactive, responsive, and always goes the extra mile to ensure our needs
                                  are
                                  met. Theyâve become a key contributor to our growth and success that really help us"
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
                        <div className="swiper-pagination-area" />
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
            {/* end: Testimonial Section */}
            {/* start: Faq Section */}
            <section className="tj-faq-section section-gap tj-arrange-container-2">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-lg-6">
                    <div className="faq-img-area tj-arrange-item-2">
                      <div className="faq-img overflow-hidden">
                        <img src="/assets/images/faq/faq.webp" alt="" />
                        <h2 className="title">Need Help? Start Here...</h2>
                      </div>
                      <div className="box-area ">
                        <div className="call-box">
                          <h4 className="title">Get Started Free Call? </h4>
                          <span className="call-icon"><i className="tji-phone" /></span>
                          <a className="number" href="tel:18884521505"><span>1-888-452-1505</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="accordion tj-faq tj-arrange-item-2" id="faqOne">
                      <div className="accordion-item active">
                        <button className=" faq-title" type="button" data-bs-toggle="collapse" data-bs-target="#faq-1" aria-expanded="true">What services does Bexon offer to clients?</button>
                        <div id="faq-1" className="collapse show" data-bs-parent="#faqOne">
                          <div className="accordion-body faq-text">
                            <p>Getting started is easy! Simply reach out to us through our contact form or give us a call,
                              and
                              weâll schedule a consultation to discuss your project and how we can best assist you. Our team
                              keeps you informed throughout the process, ensuring quality control and timely delivery.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <button className="faq-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-2" aria-expanded="false">How do I get started with Corporate Business?</button>
                        <div id="faq-2" className="collapse" data-bs-parent="#faqOne">
                          <div className="accordion-body faq-text">
                            <p>Getting started is easy! Simply reach out to us through our contact form or give us a call,
                              and
                              weâll schedule a consultation to discuss your project and how we can best assist you. Our team
                              keeps you informed throughout the process, ensuring quality control and timely delivery.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <button className="faq-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-3" aria-expanded="false">How do you ensure the success of a project?</button>
                        <div id="faq-3" className="collapse" data-bs-parent="#faqOne">
                          <div className="accordion-body faq-text">
                            <p>Getting started is easy! Simply reach out to us through our contact form or give us a call,
                              and
                              weâll schedule a consultation to discuss your project and how we can best assist you. Our team
                              keeps you informed throughout the process, ensuring quality control and timely delivery.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <button className="faq-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-4" aria-expanded="false">How long will it take to complete my project?</button>
                        <div id="faq-4" className="collapse" data-bs-parent="#faqOne">
                          <div className="accordion-body faq-text">
                            <p>Getting started is easy! Simply reach out to us through our contact form or give us a call,
                              and
                              weâll schedule a consultation to discuss your project and how we can best assist you. Our team
                              keeps you informed throughout the process, ensuring quality control and timely delivery.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <button className="faq-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-5" aria-expanded="false">Can I track the progress of my project?</button>
                        <div id="faq-5" className="collapse" data-bs-parent="#faqOne">
                          <div className="accordion-body faq-text">
                            <p>Getting started is easy! Simply reach out to us through our contact form or give us a call,
                              and
                              weâll schedule a consultation to discuss your project and how we can best assist you. Our team
                              keeps you informed throughout the process, ensuring quality control and timely delivery.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Faq Section */}
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
                            <a href="mailto:support@bexon.com">M: support@bexon.com</a>
                          </div>
                        </div>
                        <div className="location-indicator loc-2">
                          <div className="location-tooltip">
                            <span>Regional office:</span>
                            <p>Hessisch Lichtenau 37235, Kassel, Germany.</p>
                            <a href="tel:10098801810">P: +1 (009) 880-1810</a>
                            <a href="mailto:support@bexon.com">M: support@bexon.com</a>
                          </div>
                        </div>
                        <div className="location-indicator loc-3">
                          <div className="location-tooltip">
                            <span>Regional office:</span>
                            <p>32 Altamira, State of ParÃ¡, Brazil.</p>
                            <a href="tel:10095447818">P: +1 (009) 544-7818</a>
                            <a href="mailto:support@bexon.com">M: support@bexon.com</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-form style-2 wow fadeInUp" data-wow-delay=".4s">
                      <div className="sec-heading">
                        <span className="sub-title text-white"><i className="tji-box" />Get in Touch</span>
                        <h2 className="sec-title title-anim">Drop Us a <span>Line.</span></h2>
                      </div>
                      <form id="contact-form-2">
                        <div className="row wow fadeInUp" data-wow-delay=".5s">
                          <div className="col-sm-6">
                            <div className="form-input">
                              <input type="text" name="cfName2" placeholder="Full Name *" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-input">
                              <input type="email" name="cfEmail2" placeholder="Email Address *" />
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-input">
                              <input type="tel" name="cfPhone2" placeholder="Phone number *" />
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
                              <textarea name="cfMessage2" id="message" placeholder="Type message *" defaultValue={""} />
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
            <section className="tj-blog-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Insights &amp;
                        Ideas</span>
                      <h2 className="sec-title title-anim">The Ultimate <span>Resource.</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4">
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                      <div className="blog-thumb">
                        <a href="/blog-details"><img src="/assets/images/blog/blog-1.webp" alt="" /></a>
                        <div className="blog-date">
                          <span className="date">28</span>
                          <span className="month">Feb</span>
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <span className="categories"><a href="/blog-details">Business</a></span>
                          <span>By <a href="/blog-details">Ellinien Loma</a></span>
                        </div>
                        <h4 className="title"><a href="/blog-details">Innovative Solutions for every Business Success.</a>
                        </h4>
                        <a className="text-btn" href="/blog-details">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                      <div className="blog-thumb">
                        <a href="/blog-details"><img src="/assets/images/blog/blog-2.webp" alt="" /></a>
                        <div className="blog-date">
                          <span className="date">28</span>
                          <span className="month">Feb</span>
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <span className="categories"><a href="/blog-details">Business</a></span>
                          <span>By <a href="/blog-details">Ellinien Loma</a></span>
                        </div>
                        <h4 className="title"><a href="/blog-details">Harnessing Digital Transform a Roadmap Businesses.</a>
                        </h4>
                        <a className="text-btn" href="/blog-details">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                      <div className="blog-thumb">
                        <a href="/blog-details"><img src="/assets/images/blog/blog-3.webp" alt="" /></a>
                        <div className="blog-date">
                          <span className="date">28</span>
                          <span className="month">Feb</span>
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <span className="categories"><a href="/blog-details">Business</a></span>
                          <span>By <a href="/blog-details">Ellinien Loma</a></span>
                        </div>
                        <h4 className="title"><a href="/blog-details">Mastering Change Management Lessons for
                            Businesses.</a>
                        </h4>
                        <a className="text-btn" href="/blog-details">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Blog Section */}
            {/* start: Cta Section */}
            <section className="tj-cta-section">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="cta-area">
                      <div className="cta-content">
                        <h2 className="title title-anim">Letâs Build Future Together.</h2>
                        <div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
                          <a className="tj-primary-btn btn-dark" href="/contact">
                            <span className="btn-text"><span>Get Started Now</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
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
          {/* start: Footer Section */}
          <footer className="tj-footer-section footer-1 section-gap-x">
            <div className="footer-main-area">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
                      <div className="footer-logo">
                        <a href="/">
                          <img src="/assets/images/logos/logo.webp" alt="Logos" />
                        </a>
                      </div>
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
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="footer-widget widget-nav-menu wow fadeInUp" data-wow-delay=".3s">
                      <h5 className="title">Services</h5>
                      <ul>
                        <li><a href="#">Customer Experience</a></li>
                        <li><a href="#">Training Programs</a></li>
                        <li><a href="#">Business Strategy</a></li>
                        <li><a href="#">Training Program</a></li>
                        <li><a href="#">ESG Consulting</a></li>
                        <li><a href="#">Development Hub</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-4 col-md-6">
                    <div className="footer-widget widget-nav-menu wow fadeInUp" data-wow-delay=".5s">
                      <h5 className="title">Resources</h5>
                      <ul>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Team Member</a></li>
                        <li><a href="#">Recognitions</a></li>
                        <li><a href="/careers">Careers <span className="badge">New</span></a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Feedback</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-5 col-md-6">
                    <div className="footer-widget widget-subscribe wow fadeInUp" data-wow-delay=".7s">
                      <h3 className="title">Subscribe to Our Newsletter.</h3>
                      <div className="subscribe-form">
                        <form action="#">
                          <input type="email" name="email" placeholder="Enter email" />
                          <button type="submit"><i className="tji-plane" /></button>
                          <label htmlFor="agree"><input id="agree" type="checkbox" />Agree to our <a href="#">Terms &amp;
                              Condition?</a></label>
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
                              <span className="icon"><i className="tji-phone-2" /></span>
                              <span className="text">+1 (009) 544-7818</span>
                            </a>
                          </li>
                          <li>
                            <a href="mailto:info@bexon.com">
                              <span className="icon"><i className="tji-envelop-2" /></span>
                              <span className="text">info@bexon.com</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="social-links">
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
                      <div className="copyright-text">
                        <p>© <span>2026</span>Â&nbsp;<a href="https://themeforest.net/user/theme-junction/portfolio" target="_blank">Bexon</a> All right reserved</p>
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

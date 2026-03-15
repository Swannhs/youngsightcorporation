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
                <a href="/" className="mobile_logo">
                  <img src="/assets/images/logos/logo-2.webp" alt="Logo" />
                </a>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn"><i className="fa-thin fa-times" /></button>
              </div>
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
      <header className="header-area header-1 h8-header header-absolute section-gap-x">
        <div className="h8-header-mainmenu-bg-shape">
        </div>
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
      <header className="header-area header-1 h8-header header-duplicate header-sticky section-gap-x">
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
            <div className="top-space-15" />
            {/* start: Banner Slider */}
            <section className="h8-hero ">
              <div className="h8-hero-inner">
                <div className="h8-hero-bg-image" data-bg-image="/assets/images/hero/h8-hero-bg.webp" />
                <div className="container">
                  <div className="row ">
                    <div className="col-12">
                      <div className="h8-hero-item-wrapper">
                        <div className="h8-hero-content">
                          <h1 className="h8-hero-title text-anim"><span>Shaping</span> <span>- Smart</span>
                            <span>Business</span>
                            <span className="title-year">[2025]</span>
                          </h1>
                        </div>
                        <div className="h8-hero-box">
                          <div className="customers">
                            <ul>
                              <li className="wow fadeInLeft" data-wow-delay=".5s"><img src="/assets/images/testimonial/client-1.webp" alt="" /></li>
                              <li className="wow fadeInLeft" data-wow-delay=".6s"><img src="/assets/images/testimonial/client-2.webp" alt="" /></li>
                              <li className="wow fadeInLeft" data-wow-delay=".7s"><img src="/assets/images/testimonial/client-3.webp" alt="" /></li>
                              <li className="wow fadeInLeft" data-wow-delay=".8s"><span><i className="tji-plus" /></span></li>
                            </ul>
                          </div>
                          <div className="h8-hero-box-content wow fadeInLeft" data-wow-delay=".9s">
                            <div className="h8-hero-box-icon"><i className="tji-star" /></div>
                            <div className="desc">
                              Recognized by industry leaders, of our award-winning team has be a proven record of
                              delivering.
                            </div>
                          </div>
                        </div>
                        <div className="h8-hero-banner">
                          <img className="wow fadeInUpBig" data-wow-delay=".8s" src="/assets/images/hero/h8-hero-banner.webp" alt="" />
                        </div>
                        <a href="/service" className="circle-text-wrap">
                          <span className="desc">Explore Us More <i className="tji-arrow-right-long" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Banner Slider */}
            {/* start: Maquee Area */}
            <section className="h8-maquee z-2 section-gap-x">
              <div className="h5-maquee-inner h8-maquee-inner">
                <div className="swiper h5-maquee-slider">
                  <div className="swiper-wrapper  h5-maquee-slider-wrapper">
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon">//</div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Innovation</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon">//</div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Success</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon">//</div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Leadership</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon">//</div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Enterprise</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon">//</div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Business Growth</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon">//</div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Corporate</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon">//</div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Results</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon">//</div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Innovation</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon">//</div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Success</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon">//</div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Leadership</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon">//</div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Enterprise</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon">//</div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Business Growth</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Maquee Area */}
            {/* start: About Section */}
            <section className="tj-about-section h8-about section-gap">
              <div className="container">
                <div className="row row-gap-4">
                  <div className="col-12">
                    <div className="about-content-area-2 wow fadeInUp" data-wow-delay=".3s">
                      <div className="sec-heading style-3">
                        <div className="row">
                          <div className="col-12 col-lg-4">
                            <div className="h8-about-left">
                              <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Get to Know
                                Us</span>
                            </div>
                          </div>
                          <div className="col-12 col-lg-8">
                            <div className="h8-about-content-inner">
                              <h2 className="sec-title title-highlight">Committed Delivering Our Measurable Result and in
                                Building
                                from the Lasting Relationships a through out trusts and innovation and shared
                              </h2>
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center">
                          <div className="col-12 col-lg-4">
                            <div className="h8-about-video">
                              <img src="/assets/images/about/h8-about.webp" alt="" />
                              <a className="h8-about-video-btn video-popup" href="https://youtu.be/gXFATcwrO-U" data-autoplay="true" data-vbtype="video">
                                <i className="tji-play" />
                              </a>
                            </div>
                          </div>
                          <div className="col-12 col-lg-8">
                            <div className="h8-about-item-wrapper">
                              <div className="h8-about-item h8-about-item-counter">
                                <div className="countup-item style-2">
                                  <div className="count-inner">
                                    <div className="inline-content">
                                      <span className="odometer countup-number" data-count={30} />
                                      <sup className="count-plus">+</sup>
                                    </div>
                                    <span className="count-text">Years of Corporate Experience.</span>
                                  </div>
                                </div>
                              </div>
                              <div className="h8-about-item h8-about-item-desc">
                                <div className="h8-about-item-content">
                                  <p className="desc">Our approach to customer experience comhensive and data-driven. We begin
                                    assessing you current customer touchpoints, identifying areas for improvement, an using
                                    insights to develop strategies in that meet your customersâ evolving needs. From
                                    optimizing digital platforms.</p>
                                  <div className="about-btn-area-2 wow fadeInUp" data-wow-delay="1s">
                                    <a className="tj-primary-btn" href="/about">
                                      <span className="btn-text"><span>Learn More</span></span>
                                      <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
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
            </section>
            {/* end: About Section */}
            {/* start: Choose Section */}
            <section id="choose" className="tj-choose-section h8-choose  section-gap-x">
              <div className="container-fluid gap-0">
                <div className="row align-items-center flex-column-reverse flex-lg-row">
                  <div className="col-12 col-lg-6 align-self-stretch">
                    <div className="h8-choose-banner">
                      <img data-speed=".8" className="wow fadeInLeftBig" data-wow-delay=".3s" src="/assets/images/choose/h8-choose-bnner.webp" alt="" />
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="h8-choose-content-wrapper">
                      <div className="sec-heading style-3">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Choose the
                          Best</span>
                        <h2 className="sec-title title-anim">Empowering Business with Expertise.</h2>
                      </div>
                      <div className="h8-choose-box-wrapper ">
                        <div className="choose-box h6-choose-box h8-choose-box  wow fadeInUp" data-wow-delay=".3s">
                          <div className="choose-content">
                            <div className="choose-icon">
                              <i className="tji-innovative" />
                            </div>
                            <div>
                              <h4 className="title">Innovative Solutions</h4>
                              <p className="desc">Our team is always available to address your concerns, providing quick and
                                effective solution to keep your business expert option.</p>
                            </div>
                          </div>
                        </div>
                        <div className="choose-box h6-choose-box h8-choose-box  wow fadeInUp" data-wow-delay=".4s">
                          <div className="choose-content">
                            <div className="choose-icon">
                              <i className="tji-award" />
                            </div>
                            <div>
                              <h4 className="title">Winning Expertise</h4>
                              <p className="desc">Recognized by industry leaders, our award-winning team has a proven record of
                                delivering excellence across projects base work</p>
                            </div>
                          </div>
                        </div>
                        <div className="choose-box h6-choose-box h8-choose-box  wow fadeInUp" data-wow-delay=".5s">
                          <div className="choose-content">
                            <div className="choose-icon">
                              <i className="tji-support" />
                            </div>
                            <div>
                              <h4 className="title">Dedicated Support</h4>
                              <p className="desc">Our team is always available to address your concerns, providing quick and
                                effective solution to keep your business for any business.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-2">
                <img src="/assets/images/shape/pattern-3.svg" alt="" />
              </div>
            </section>
            {/* end: Choose Section */}
            {/* start: Service Section */}
            <section className="h8-service overflow-hidden section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Our
                        Solutions</span>
                      <h2 className="sec-title title-anim">Tailor Business Solutions for Corporates.</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container gap-30">
                <div className="row">
                  <div className="col-12">
                    <div className="service-wrapper h8-service-wrapper  wow bounceInLeft" data-wow-delay=".3s">
                      <div className="row">
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="tji-service-5" />
                            </div>
                            <h4 className="title"><a href="/service-details">Business Strategies Development</a></h4>
                            <div className="service-content">
                              <p className="desc">Through a combination of data-driven insights and innovative approaches, we
                                work
                                closely with you to develop customized.
                              </p>
                              <ul className="list-items">
                                <li><i className="tji-list" />Expansion Strategies</li>
                                <li><i className="tji-list" />Operational Efficiency</li>
                                <li><i className="tji-list" />Competitive Edge</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="tji-service-1" />
                            </div>
                            <h4 className="title"><a href="/service-details">Customer Experience Solutions</a></h4>
                            <div className="service-content">
                              <p className="desc">Through a combination of data-driven insights and innovative approaches, we
                                work
                                closely with you to develop customized.</p>
                              <ul className="list-items">
                                <li><i className="tji-list" />Expansion Strategies</li>
                                <li><i className="tji-list" />Operational Efficiency</li>
                                <li><i className="tji-list" />Competitive Edge</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4">
                          <div className="service-item h8-service-item">
                            <div className="service-icon">
                              <i className="tji-service-3" />
                            </div>
                            <h4 className="title"><a href="/service-details">Sustainability and ESG Consulting</a></h4>
                            <div className="service-content">
                              <p className="desc">Through a combination of data-driven insights and innovative approaches, we
                                work
                                closely with you to develop customized.</p>
                              <ul className="list-items">
                                <li><i className="tji-list" />Expansion Strategies</li>
                                <li><i className="tji-list" />Operational Efficiency</li>
                                <li><i className="tji-list" />Competitive Edge</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="h8-service-more wow fadeInUp" data-wow-delay=".8s">
                      <a className="tj-primary-btn" href="/service">
                        <span className="btn-text"><span>More services</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Service Section */}
            {/* start: Project Section */}
            <section className="h8-project section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <div className="sec-heading style-3 m-0">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Choose the
                          Best</span>
                      </div>
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-3">
                          <h2 className="sec-title title-anim">Tailor Business Solutions for Corporates.</h2>
                        </div>
                        <div className="slider-navigation d-none d-md-inline-flex wow fadeInUp" data-wow-delay=".5s">
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
              <div className="container container-end-align  wow bounceInRight" data-wow-delay=".3s">
                <div className="row">
                  <div className="col-12">
                    <div className="project-wrapper h7-project-wrapper h8-project-wrapper">
                      <div className="h8-project-slider swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="project-item h4-project-item">
                              <div className="project-img">
                                <img src="/assets/images/project/project-4.webp" alt="Image" />
                              </div>
                              <div className="project-content">
                                <div className="project-text">
                                  <div>
                                    <h3 className="title"><a href="/portfolio-details">Event Management Platform</a></h3>
                                    <span className="categories"><a href="/portfolio-details">Business</a></span>
                                  </div>
                                  <a className="tji-icon-btn" href="/portfolio-details">
                                    <i className="tji-arrow-right-long" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-item h4-project-item">
                              <div className="project-img">
                                <img src="/assets/images/project/project-8.webp" alt="Image" />
                              </div>
                              <div className="project-content">
                                <div className="project-text">
                                  <div>
                                    <h3 className="title"><a href="/portfolio-details">Rebranding Strategy for a Growing</a>
                                    </h3>
                                    <span className="categories"><a href="/portfolio-details">Business</a></span>
                                  </div>
                                  <a className="tji-icon-btn" href="/portfolio-details">
                                    <i className="tji-arrow-right-long" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-item h4-project-item">
                              <div className="project-img">
                                <img src="/assets/images/project/project-9.webp" alt="Image" />
                              </div>
                              <div className="project-content">
                                <div className="project-text">
                                  <div>
                                    <h3 className="title"><a href="/portfolio-details">Event Management Platform</a></h3>
                                    <span className="categories"><a href="/portfolio-details">Business</a></span>
                                  </div>
                                  <a className="tji-icon-btn" href="/portfolio-details">
                                    <i className="tji-arrow-right-long" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-pagination-area">
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
            {/* end: Project Section */}
            {/* start: Fun fact Section */}
            <section className=" h8-funfact section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />OUR FUN FACT</span>
                      <h2 className="sec-title title-anim">Numbers and facts that define performance.</h2>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-between">
                  <div className="col-12 col-lg-6">
                    <div className="h8-funfact-banner wow fadeInLeft" data-wow-delay=".3s">
                      <div className="h8-funfact-banner-img">
                        <img src="/assets/images/funfact/h8-funfact-banner.webp" alt="" />
                      </div>
                      <div className="box-area">
                        <div className="call-box wow fadeInUp" data-wow-delay=".5s">
                          <h4 className="title">Get Started Free Call? </h4>
                          <span className="call-icon"><i className="tji-phone" /></span>
                          <a className="number" href="tel:18884521505"><span>1-888-452-1505</span></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 pl-0">
                    <div className="h8-funfact-wrapper">
                      <div className="countup-item style-2 h8-funfact-item">
                        <div className="count-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count={93} />
                            <span className="count-plus">%</span>
                          </div>
                          <div className="counter-desc">
                            <h4 className="counter-title">Complete Project</h4>
                            <p className="count-text">Through a combination of data-driven insights and innovative approaches.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="countup-item style-2 h8-funfact-item ">
                        <div className="count-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count="8.5" />
                            <span className="count-plus">X</span>
                          </div>
                          <div className="counter-desc">
                            <h4 className="counter-title">Faster Growtht</h4>
                            <p className="count-text">Through a combination of data-driven insights and innovative approaches.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="countup-item style-2 h8-funfact-item">
                        <div className="count-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count={100} />
                            <span className="count-plus">+</span>
                          </div>
                          <div className="counter-desc">
                            <h4 className="counter-title">Awards Archived</h4>
                            <p className="count-text">Through a combination of data-driven insights and innovative approaches.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Fun fact Section */}
            {/* start: Team Section */}
            <section className="h8-team section-gap section-gap-x">
              <div className="container">
                <div className="row  h8-team-wrapper  gap-0">
                  <div className="col-lg-3 col-sm-6 ">
                    <div className="sec-heading style-3">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">MEET OUR TEAM</span>
                      <h2 className="sec-title title-anim">Meet the Mind Behind Our Success.</h2>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6  h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".2s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/team-1.webp" alt="" />
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
                      </div>
                      <div className="team-content">
                        <h5 className="title"><a href="/team-details">James Anderson</a></h5>
                        <span className="designation">Chief Executive</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6  h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".3s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/team-2.webp" alt="" />
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
                      </div>
                      <div className="team-content">
                        <h5 className="title"><a href="/team-details">Savannah Ngueen</a></h5>
                        <span className="designation">Operations Head</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6  h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".4s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/team-3.webp" alt="" />
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
                      </div>
                      <div className="team-content">
                        <h5 className="title"><a href="/team-details">Emma Richardson</a></h5>
                        <span className="designation">Marketing Lead</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6  h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".5s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/team-4.webp" alt="" />
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
                      </div>
                      <div className="team-content">
                        <h5 className="title"><a href="/team-details">Nathan Price</a></h5>
                        <span className="designation">Business Director</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6  h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".6s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/team-5.webp" alt="" />
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
                      </div>
                      <div className="team-content">
                        <h5 className="title"><a href="/team-details">Nathaniel Ellington</a></h5>
                        <span className="designation">Business Director</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6  h8-team-item-wrapper">
                    <div className="team-item wow fadeInRightBig" data-wow-delay=".7s">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/team-7.webp" alt="" />
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
                      </div>
                      <div className="team-content">
                        <h5 className="title"><a href="/team-details">Eade Marren</a></h5>
                        <span className="designation">Business Director</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 ">
                    <div className="h8-team-action wow fadeInRightBig" data-wow-delay=".8s">
                      <div className="circle-text-wrap">
                        <span className="circle-text" data-bg-image="/assets/images/icons/more-rounded-text.svg" />
                        <a className="circle-icon" href="/team"><i className="tji-arrow-right-long" /></a>
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
            {/* end: Team Section */}
            {/* start: Testimonial Section */}
            <section className="h8-testimonial section-gap">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-12">
                    <div className="sec-heading style-3 sec-heading-centered ">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Choose the
                        Best</span>
                      <h2 className="sec-title title-anim">Our Clients Share Their Success Stories.</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid gap-0">
                <div className="row">
                  <div className="col-12">
                    <div className="testimonial-wrapper h8-testimonial-wrapper wow fadeInUpBig" data-wow-delay=".3s">
                      <div className="swiper swiper-container h8-testimonial-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <div className="star-ratings">
                                <div className="fill-ratings" style={{width: '100%'}}>
                                  <span>âââââ</span>
                                </div>
                                <div className="empty-ratings">
                                  <span>âââââ</span>
                                </div>
                              </div>
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
                                    <h5 className="title">Guy Hawkins</h5>
                                    <span className="designation">Co. Founder</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <div className="star-ratings">
                                <div className="fill-ratings" style={{width: '100%'}}>
                                  <span>âââââ</span>
                                </div>
                                <div className="empty-ratings">
                                  <span>âââââ</span>
                                </div>
                              </div>
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
                                    <h5 className="title">Ralph Edwards</h5>
                                    <span className="designation">Co. Founder</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <div className="star-ratings">
                                <div className="fill-ratings" style={{width: '100%'}}>
                                  <span>âââââ</span>
                                </div>
                                <div className="empty-ratings">
                                  <span>âââââ</span>
                                </div>
                              </div>
                              <div className="desc">
                                <p>Weâve been working with Bexonfor years, and they continue to deliver outstanding results.
                                  Their team is proactive, responsive, and always goes the extra mile to ensure our needs
                                  are
                                  met. Theyâve become a key contributor to our growth and success that really help us
                                </p>
                              </div>
                              <div className="testimonial-author">
                                <div className="author-inner">
                                  <div className="author-img">
                                    <img src="/assets/images/testimonial/client-3.webp" alt="" />
                                  </div>
                                  <div className="author-header">
                                    <h5 className="title">Devon Lane</h5>
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
            </section>
            {/* end: Testimonial Section */}
            {/* start: Blog Section */}
            <section className="tj-blog-section-2 h8-blog section-gap slidebar-stickiy-container">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-4 col-xl-3">
                    <div className="sec-heading style-3 slidebar-stickiy">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Insights &amp;
                        Ideas</span>
                      <h2 className="sec-title title-anim">Read Our Latest Blog &amp;
                        News.</h2>
                      <div className="h8-blog-more wow fadeInUp" data-wow-delay=".8s">
                        <a className="tj-primary-btn" href="/blog">
                          <span className="btn-text"><span>More Blogs</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-8 col-xl-9">
                    <div className="blog-wrapper h8-blog-wrapper ">
                      <div className="blog-item style-2 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-thumb">
                          <a href="/blog-details"><img src="/assets/images/blog/blog-1.webp" alt="" /></a>
                          <div className="blog-date">
                            <span className="date">28</span>
                            <span className="month">Feb</span>
                          </div>
                        </div>
                        <div className="blog-content">
                          <div className="title-area">
                            <div className="blog-meta">
                              <span className="categories"><a href="/blog-details">Business</a></span>
                              <span>By <a href="/blog-details">Ellinien Loma</a></span>
                            </div>
                            <h3 className="title"><a href="/blog-details">Harnessing Digital Transform a Roadmap
                                Businesses.</a></h3>
                          </div>
                          <a className="text-btn" href="/blog-details">
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            <span className="btn-text"><span>Read More</span></span>
                          </a>
                        </div>
                      </div>
                      <div className="blog-item style-2 wow fadeInUp" data-wow-delay=".4s">
                        <div className="blog-thumb">
                          <a href="/blog-details"><img src="/assets/images/blog/blog-5.webp" alt="" /></a>
                          <div className="blog-date">
                            <span className="date">28</span>
                            <span className="month">Feb</span>
                          </div>
                        </div>
                        <div className="blog-content">
                          <div className="title-area">
                            <div className="blog-meta">
                              <span className="categories"><a href="/blog-details">Business</a></span>
                              <span>By <a href="/blog-details">Ellinien Loma</a></span>
                            </div>
                            <h3 className="title"><a href="/blog-details">Mastering Change Management Lessons for
                                Businesses.</a></h3>
                          </div>
                          <a className="text-btn" href="/blog-details">
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            <span className="btn-text"><span>Read More</span></span>
                          </a>
                        </div>
                      </div>
                      <div className="blog-item style-2 wow fadeInUp" data-wow-delay=".5s">
                        <div className="blog-thumb">
                          <a href="/blog-details"><img src="/assets/images/blog/blog-4.webp" alt="" /></a>
                          <div className="blog-date">
                            <span className="date">28</span>
                            <span className="month">Feb</span>
                          </div>
                        </div>
                        <div className="blog-content">
                          <div className="title-area">
                            <div className="blog-meta">
                              <span className="categories"><a href="/blog-details">Business</a></span>
                              <span>By <a href="/blog-details">Ellinien Loma</a></span>
                            </div>
                            <h3 className="title"><a href="/blog-details">Harnessing Digital Transform a Roadmap
                                Businesses.</a></h3>
                          </div>
                          <a className="text-btn" href="/blog-details">
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            <span className="btn-text"><span>Read More</span></span>
                          </a>
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
          <footer className="tj-footer-section footer-2 h5-footer  h6-footer h8-footer section-gap-x">
            <div className="h6-footer-logo-area ">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="h8-footer-logo-wrapper">
                      <div className="h6-footer-logo h8-footer-logo">
                        <a href="/" className="wow fadeInLeftBig" data-wow-delay=".3s">
                          <img src="/assets/images/logos/logo-large.webp" alt="" />
                        </a>
                      </div>
                      <div className="h8-footer-logo-content wow fadeInRightBig" data-wow-delay=".4s">
                        <div className="footer-text">
                          <p>Developing personalze our customer journeys to increase satisfaction &amp; loyalty of our
                            expansion.
                            Bexon has been a game.
                          </p>
                        </div>
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
                </div>
              </div>
            </div>
            <div className="footer-main-area h8-footer-main">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-3 col-lg-3  col-md-6">
                    <div className="footer-widget widget-contact h6-footer-contact h8-footer-contact wow fadeInUp" data-wow-delay=".3s">
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
                  <div className="col-xl-3  col-lg-3 col-md-6">
                    <div className="footer-widget footer-col-2 widget-nav-menu h6-footer-col-2  h8-footer-col-2 wow fadeInUp" data-wow-delay=".4s">
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
                  <div className="col-xl-2 col-lg-2 col-md-6">
                    <div className="footer-widget footer-col-3 widget-nav-menu h6-footer-col-3  h8-footer-col-3 wow fadeInUp" data-wow-delay=".5s">
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
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="footer-widget widget-subscribe h6-footer-subscribe h8-footer-subscribe wow fadeInUp" data-wow-delay=".6s">
                      <h3 className="title title-anim">Subscribe to Our Newsletter.</h3>
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
            <div className="tj-copyright-area-2 h5-footer-copyright h8-footer-copyright">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="copyright-content-area">
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
            <div className="bg-shape-3 wow fadeInUpBig" data-wow-delay="1s">
              <img src="/assets/images/shape/h8-footer-shape-blur-1.svg" alt="" />
            </div>
            <div className="bg-shape-4 wow fadeInDownBig" data-wow-delay=".8s">
              <img src="/assets/images/shape/h8-footer-shape-blur-2.svg" alt="" />
            </div>
          </footer>
          {/* end: Footer Section */}
        </div>
      </div>
      {/* JS here */}
    </div>
    
  );
}

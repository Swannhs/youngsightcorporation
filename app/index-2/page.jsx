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
      <header className="header-area header-2 header-absolute section-gap-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* site logo */}
                <div className="site_logo">
                  <a className="logo" href="/"><img src="/assets/images/logos/logo-2.webp" alt /></a>
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
                                        <img src="/assets/images/header/demo/home-1.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-2.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-3.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-4.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-5.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-6.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-7.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-8.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-9.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-10.webp" alt />
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
                                      <img src="/assets/images/service/service-ad.webp" alt />
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
      <header className="header-area header-2 header-duplicate header-sticky section-gap-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* site logo */}
                <div className="site_logo">
                  <a className="logo" href="/"><img src="/assets/images/logos/logo.webp" alt /></a>
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
                                        <img src="/assets/images/header/demo/home-1.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-2.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-3.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-4.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-5.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-6.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-7.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-8.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-9.webp" alt />
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
                                        <img src="/assets/images/header/demo/home-10.webp" alt />
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
                                      <img src="/assets/images/service/service-ad.webp" alt />
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
            <div className="top-space-15" />
            {/* start: Banner Slider */}
            <section className="tj-slider-section">
              <div className="swiper hero-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide tj-slider-item">
                    <div className="slider-bg-image" data-bg-image="/assets/images/hero/slider-1.webp" />
                    <div className="container">
                      <div className="slider-wrapper">
                        <div className="slider-content">
                          <h1 className="slider-title">Leading Future for <span>Business.</span></h1>
                          <div className="slider-desc">Committed to delivering innovative solutions that drive success. With a
                            focus
                            on quality.</div>
                          <div className="slider-btn">
                            <a className="tj-primary-btn" href="/contact">
                              <span className="btn-text"><span>Get Started</span></span>
                              <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide tj-slider-item">
                    <div className="slider-bg-image" data-bg-image="/assets/images/hero/slider-2.webp" />
                    <div className="container">
                      <div className="slider-wrapper">
                        <div className="slider-content">
                          <h1 className="slider-title">Leading Future for <span>Business.</span></h1>
                          <div className="slider-desc">Committed to delivering innovative solutions that drive success. With a
                            focus
                            on quality.</div>
                          <div className="slider-btn">
                            <a className="tj-primary-btn" href="/contact">
                              <span className="btn-text"><span>Get Started</span></span>
                              <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide tj-slider-item">
                    <div className="slider-bg-image" data-bg-image="/assets/images/hero/slider-3.webp" />
                    <div className="container">
                      <div className="slider-wrapper">
                        <div className="slider-content">
                          <h1 className="slider-title">Leading Future for <span>Business.</span></h1>
                          <div className="slider-desc">Committed to delivering innovative solutions that drive success. With a
                            focus
                            on quality.</div>
                          <div className="slider-btn">
                            <a className="tj-primary-btn" href="/contact">
                              <span className="btn-text"><span>Get Started</span></span>
                              <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-navigation d-inline-flex wow fadeIn" data-wow-delay="1.5s">
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
              <div className="swiper hero-thumb wow fadeIn" data-wow-delay="2s">
                <div className="swiper-wrapper">
                  <div className="swiper-slide thumb-item">
                    <img src="/assets/images/hero/slider-thumb-1.webp" alt="Thumbnail" />
                  </div>
                  <div className="swiper-slide thumb-item">
                    <img src="/assets/images/hero/slider-thumb-2.webp" alt="Thumbnail" />
                  </div>
                  <div className="swiper-slide thumb-item">
                    <img src="/assets/images/hero/slider-thumb-3.webp" alt="Thumbnail" />
                  </div>
                </div>
              </div>
              <div className="circle-text-wrap wow fadeInUp" data-wow-delay="1s">
                <span className="circle-text" data-bg-image="/assets/images/hero/circle-text.webp" />
                <a className="circle-icon" href="/service"><i className="tji-arrow-down-big" /></a>
              </div>
            </section>
            {/* end: Banner Slider */}
            {/* start: Client Section */}
            <section className="tj-client-section section-top-gap">
              <div className="container-fluid client-container">
                <div className="row">
                  <div className="col-12">
                    <div className="client-content style-2 wow fadeIn" data-wow-delay=".3s">
                      <h5 className="sec-title">Join Over <span className="client-numbers">1000+</span> Companies with
                        <span className="client-text">Bexon</span> Here
                      </h5>
                    </div>
                    <div className="swiper client-slider client-slider-1 wow fadeIn" data-wow-delay=".5s">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <img src="/assets/images/brands/brand-1.webp" alt />
                          </div>
                        </div>
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <img src="/assets/images/brands/brand-2.webp" alt />
                          </div>
                        </div>
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <img src="/assets/images/brands/brand-3.webp" alt />
                          </div>
                        </div>
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <img src="/assets/images/brands/brand-4.webp" alt />
                          </div>
                        </div>
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <img src="/assets/images/brands/brand-5.webp" alt />
                          </div>
                        </div>
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <img src="/assets/images/brands/brand-6.webp" alt />
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
                <div className="row row-gap-4">
                  <div className="col-lg-4 col-md-6 order-lg-1 order-3">
                    <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".1s">
                      <span className="count-icon"><i className="tji-complete" /></span>
                      <span className="steps">01.</span>
                      <div className="count-inner">
                        <span className="count-text">Projects Completed.</span>
                        <div className="inline-content">
                          <span className="odometer countup-number" data-count={93} />
                          <span className="count-plus">%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-sm-12 order-lg-2 order-1">
                    <div className="about-content-area-2 wow fadeInUp" data-wow-delay=".3s">
                      <div className="about-content">
                        <div className="sec-heading style-2">
                          <span className="sub-title">Get to Know Us</span>
                          <h2 className="sec-title title-highlight">Driving into Excellence &amp; Innovation: Your Trusted Partner
                            for
                            Sustainable Business Success.
                          </h2>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay=".3s">
                          <a className="text-btn" href="/about">
                            <span className="btn-text"><span>Learn More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                        </div>
                      </div>
                      <div className="video-img wow fadeInRight" data-wow-delay=".7s">
                        <img src="/assets/images/about/about-3.webp" alt="Image" />
                        <a className="video-btn video-popup" data-autoplay="true" data-vbtype="video" data-maxwidth="1200px" href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados">
                          <span><i className="tji-play" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 order-lg-3 order-2">
                    <div className="customers-box style-2 wow fadeInUp" data-wow-delay=".3s">
                      <div className="customers-bg" data-bg-image="/assets/images/about/about-4.webp" />
                      <div className="customers">
                        <ul>
                          <li className="wow fadeInLeft" data-wow-delay=".3s"><img src="/assets/images/testimonial/client-1.webp" alt /></li>
                          <li className="wow fadeInLeft" data-wow-delay=".4s"><img src="/assets/images/testimonial/client-2.webp" alt /></li>
                          <li className="wow fadeInLeft" data-wow-delay=".5s"><img src="/assets/images/testimonial/client-3.webp" alt /></li>
                          <li className="wow fadeInLeft" data-wow-delay=".6s"><span><i className="tji-plus" /></span></li>
                        </ul>
                      </div>
                      <h6 className="customers-text wow fadeInLeft" data-wow-delay=".6s">We have 100+ happy customer.</h6>
                      <div className="star-icon zoomInOut"><img src="/assets/images/shape/star.svg" alt /></div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 order-lg-4 order-4">
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
                  <div className="col-lg-4 col-md-6 order-lg-5 order-5">
                    <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".7s">
                      <span className="count-icon"><i className="tji-growth" /></span>
                      <span className="steps">03.</span>
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
            {/* end: About Section */}
            {/* start: Service Section */}
            <section className="tj-service-section service-2 section-gap section-gap-x slidebar-stickiy-container">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="content-wrap  slidebar-stickiy">
                      <div className="sec-heading style-2">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Our Solutions</span>
                        <h2 className="sec-title text-white text-anim">Tailored Business Solutions for our
                          <span>Corporates.</span>
                        </h2>
                      </div>
                      <div className="wow fadeInUp" data-wow-delay=".6s">
                        <a className="tj-primary-btn" href="/service">
                          <span className="btn-text"><span>More Services</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="service-wrapper-2">
                      <div className="service-item-wrapper tj-fadein-right-on-scroll">
                        <div className="service-item style-2 ">
                          <div className="title-area">
                            <div className="service-icon">
                              <i className="tji-service-1" />
                            </div>
                            <h4 className="title"><a href="/service-details">Business Strategy Development</a></h4>
                          </div>
                          <div className="service-content">
                            <p className="desc">Through a combination of data-driven insights and innovative approaches, we work
                              closely with you to develop customized.</p>
                            <ul className="list-items">
                              <li><i className="tji-list" />Expansion Strategies</li>
                              <li><i className="tji-list" />Operational Efficiency</li>
                              <li><i className="tji-list" />Competitive Edge</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="service-item-wrapper tj-fadein-right-on-scroll">
                        <div className="service-item style-2">
                          <div className="title-area">
                            <div className="service-icon">
                              <i className="tji-service-2" />
                            </div>
                            <h4 className="title"><a href="/service-details">Customer Experience Solutions</a></h4>
                          </div>
                          <div className="service-content">
                            <p className="desc">Developing personalized customer journeys to increase satisfaction and loyalty
                              of our expansion to keep competitive.</p>
                            <ul className="list-items">
                              <li><i className="tji-list" />Personalized Customer</li>
                              <li><i className="tji-list" />Seamless Service</li>
                              <li><i className="tji-list" />Proactive Support</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="service-item-wrapper tj-fadein-right-on-scroll">
                        <div className="service-item style-2">
                          <div className="title-area">
                            <div className="service-icon">
                              <i className="tji-service-3" />
                            </div>
                            <h4 className="title"><a href="/service-details">Sustainability and ESG Consulting</a></h4>
                          </div>
                          <div className="service-content">
                            <p className="desc">Provide tailored strategies that not only drive long-term value but also build
                              trust with stakeholders, investors.</p>
                            <ul className="list-items">
                              <li><i className="tji-list" />Strategy Development</li>
                              <li><i className="tji-list" />Sustainable Business</li>
                              <li><i className="tji-list" />Impactful Reporting</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="service-item-wrapper tj-fadein-right-on-scroll">
                        <div className="service-item style-2">
                          <div className="title-area">
                            <div className="service-icon">
                              <i className="tji-service-4" />
                            </div>
                            <h4 className="title"><a href="/service-details">Training and Development Programs</a></h4>
                          </div>
                          <div className="service-content">
                            <p className="desc">Training and Development Programs are designed to empower employees with the
                              skills, knowledge, and tools they need.</p>
                            <ul className="list-items">
                              <li><i className="tji-list" />Leadership Development</li>
                              <li><i className="tji-list" />Skill Enhancement</li>
                              <li><i className="tji-list" />Employee Engagement</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-1">
                <img src="/assets/images/shape/pattern-2.svg" alt />
              </div>
              <div className="bg-shape-2">
                <img src="/assets/images/shape/pattern-3.svg" alt />
              </div>
              <div className="bg-shape-3">
                <img src="/assets/images/shape/shape-blur.svg" alt />
              </div>
            </section>
            {/* end: Service Section */}
            {/* start: Project Section */}
            <section className="tj-project-section-2 section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-2 text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Proud Projects</span>
                      <h2 className="sec-title text-anim">Breaking Boundaries, Building <span>Dreams.</span></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="project-wrapper wow fadeInUp" data-wow-delay=".5s">
                      <div className="swiper project-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="project-item">
                              <div className="project-img" data-bg-image="/assets/images/project/project-1.webp" />
                              <div className="project-content">
                                <span className="categories"><a href="/portfolio-details">Business</a></span>
                                <div className="project-text">
                                  <h3 className="title"><a href="/portfolio-details">Event Management Platform</a></h3>
                                  <a className="project-btn" href="/portfolio-details">
                                    <i className="tji-arrow-right-big" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-item">
                              <div className="project-img" data-bg-image="/assets/images/project/project-4.webp" />
                              <div className="project-content">
                                <span className="categories"><a href="/portfolio-details">Business</a></span>
                                <div className="project-text">
                                  <h3 className="title"><a href="/portfolio-details">Environmental Impact Dashboard</a></h3>
                                  <a className="project-btn" href="/portfolio-details">
                                    <i className="tji-arrow-right-big" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-item">
                              <div className="project-img" data-bg-image="/assets/images/project/project-5.webp" />
                              <div className="project-content">
                                <span className="categories"><a href="/portfolio-details">Business</a></span>
                                <div className="project-text">
                                  <h3 className="title"><a href="/portfolio-details">Event Management Platform</a></h3>
                                  <a className="project-btn" href="/portfolio-details">
                                    <i className="tji-arrow-right-big" />
                                  </a>
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
            {/* end: Project Section */}
            {/* start: Working process Section */}
            <div className="tj-working-process section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Our Process</span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-2">
                          <h2 className="sec-title text-anim">Seamless Process, Great <span>Results.</span></h2>
                        </div>
                        <p className="desc wow fadeInUp" data-wow-delay=".5s">Developing personalized customer journeys to
                          increase
                          satisfaction and loyalty.</p>
                        <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                          <a className="tj-primary-btn" href="/contact">
                            <span className="btn-text"><span>Request a Call</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="working-process-area">
                      <div className="process-item wow fadeInLeft" data-wow-delay=".5s">
                        <div className="process-step">
                          <span>01</span>
                        </div>
                        <div className="process-content">
                          <h4 className="title">Discovery &amp; Planning</h4>
                          <p className="desc">The first step in our process is understanding your unique business needs,
                            objectives,
                            and our cutomes challenges.</p>
                        </div>
                      </div>
                      <div className="process-item wow fadeInLeft" data-wow-delay=".7s">
                        <div className="process-step">
                          <span>02</span>
                        </div>
                        <div className="process-content">
                          <h4 className="title">Execution &amp; Delivery</h4>
                          <p className="desc">Once the plan is in place, our team moves forward with execution, turning
                            strategies
                            into actiony to deliver.</p>
                        </div>
                      </div>
                      <div className="process-item wow fadeInLeft" data-wow-delay=".9s">
                        <div className="process-step">
                          <span>03</span>
                        </div>
                        <div className="process-content">
                          <h4 className="title">Review &amp; Support</h4>
                          <p className="desc">After project completion, we conduct a thorough review to ensure everything aligns
                            with your goals and requirements.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-1">
                <img src="/assets/images/shape/pattern-2.svg" alt />
              </div>
              <div className="bg-shape-2">
                <img src="/assets/images/shape/pattern-3.svg" alt />
              </div>
            </div>
            {/* end: Working process Section */}
            {/* start: Testimonial Section */}
            <section className="tj-testimonial-section-2 section-gap">
              <div className="container">
                <div className="row row-gap-3">
                  <div className="col-lg-6">
                    <div className="testimonial-img-area wow fadeInUp" data-wow-delay=".3s">
                      <div className="testimonial-img">
                        <img data-speed=".8" src="/assets/images/testimonial/testimonial-img.webp" alt />
                        <div className="sec-heading style-2">
                          <h2 className="sec-title text-anim">Hear from Our <span>Customer.</span></h2>
                        </div>
                      </div>
                      <div className="box-area">
                        <div className="rating-box wow fadeInUp" data-wow-delay=".3s">
                          <h2 className="title">4.9</h2>
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
                          <span className="rating-text">(80+ Clients Reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="testimonial-wrapper wow fadeInUp" data-wow-delay=".5s">
                      <div className="swiper testimonial-slider-2">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <span className="quote-icon"><i className="tji-quote" /></span>
                              <div className="desc">
                                <p>Working with Bexon has been a game-changer for our business. Their team's
                                  professionalism,
                                  attention to detail, and innovative solutions have helped us streamline operations and
                                  achieve
                                  our goals faster than we imagined. We truly feel like a valued partner. The results weâve
                                  seen
                                  after partnering.</p>
                              </div>
                              <div className="testimonial-author">
                                <div className="author-inner">
                                  <div className="author-img">
                                    <img src="/assets/images/testimonial/client-1.webp" alt />
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
                                    <img src="/assets/images/testimonial/client-2.webp" alt />
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
                                    <img src="/assets/images/testimonial/client-3.webp" alt />
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
            </section>
            {/* end: Testimonial Section */}
            {/* start: Team Section */}
            <section className="tj-team-section section-separator">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center style-2">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Meet Our Team</span>
                      <h2 className="sec-title text-anim">People Behind <span>Bexon.</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row leftSwipeWrap">
                  <div className="col-lg-3 col-sm-6">
                    <div className="team-item left-swipe">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/team-1.webp" alt />
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
                        <h4 className="title"><a href="/team-details">Eade Marren</a></h4>
                        <span className="designation">Chief Executive</span>
                        <a className="mail-at" href="mailto:info@bexon.com"><i className="tji-at" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="team-item left-swipe">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/team-2.webp" alt />
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
                        <h4 className="title"><a href="/team-details">Savannah Ngueen</a></h4>
                        <span className="designation">Operations Head</span>
                        <a className="mail-at" href="mailto:info@bexon.com"><i className="tji-at" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="team-item left-swipe">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/team-3.webp" alt />
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
                        <h4 className="title"><a href="/team-details">Kristin Watson</a></h4>
                        <span className="designation">Marketing Lead</span>
                        <a className="mail-at" href="mailto:info@bexon.com"><i className="tji-at" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6">
                    <div className="team-item left-swipe">
                      <div className="team-img">
                        <div className="team-img-inner">
                          <img src="/assets/images/team/team-4.webp" alt />
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
                        <h4 className="title"><a href="/team-details">Darlene Robertson</a></h4>
                        <span className="designation">Business Director</span>
                        <a className="mail-at" href="mailto:info@bexon.com"><i className="tji-at" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Team Section */}
            {/* start: Pricing Section */}
            <section className="tj-pricing-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading text-center style-2">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Pricing plan</span>
                      <h2 className="sec-title text-anim">Our Pricing <span>Plan.</span></h2>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4">
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-box wow fadeInUp" data-wow-delay=".5s">
                      <div className="pricing-header">
                        <h4 className="package-name">Basic Plan</h4>
                        <div className="package-desc">
                          <p>Essential Business Services</p>
                        </div>
                        <div className="package-price">
                          <span className="package-currency">$</span>
                          <span className="price-number">99</span>
                          <span className="package-period">/per month</span>
                        </div>
                        <div className="pricing-btn">
                          <a className="text-btn" href="/contact">
                            <span className="btn-text"><span>Chose Plan</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
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
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-box active wow fadeInUp" data-wow-delay=".7s">
                      <div className="pricing-header">
                        <h4 className="package-name">Standard Plan</h4>
                        <div className="package-desc">
                          <p>Complete Business Solutions</p>
                        </div>
                        <div className="package-price">
                          <span className="package-currency">$</span>
                          <span className="price-number">249</span>
                          <span className="package-period">/per month</span>
                        </div>
                        <div className="pricing-btn">
                          <a className="text-btn" href="/contact">
                            <span className="btn-text"><span>Chose Plan</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
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
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-box wow fadeInUp" data-wow-delay=".9s">
                      <div className="pricing-header">
                        <h4 className="package-name">Premium Plan</h4>
                        <div className="package-desc">
                          <p>Advanced Business Services</p>
                        </div>
                        <div className="package-price">
                          <span className="package-currency">$</span>
                          <span className="price-number">499</span>
                          <span className="package-period">/per month</span>
                        </div>
                        <div className="pricing-btn">
                          <a className="text-btn" href="/contact">
                            <span className="btn-text"><span>Chose Plan</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
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
              <div className="bg-shape-1">
                <img src="/assets/images/shape/pattern-2.svg" alt />
              </div>
              <div className="bg-shape-2">
                <img src="/assets/images/shape/pattern-3.svg" alt />
              </div>
            </section>
            {/* end: Pricing Section */}
            {/* start: Blog Section */}
            <section className="tj-blog-section-2 section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Read Blogs</span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-2">
                          <h2 className="sec-title text-anim">Strategies and <span>Insights.</span></h2>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay=".5s">
                          <p className="desc">Developing personalized customer journeys to increase satisfaction and loyalty.
                          </p>
                        </div>
                        <div className="slider-navigation d-none d-md-inline-flex wow fadeInUp" data-wow-delay=".7s">
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
                    <div className="blog-wrapper wow fadeIn" data-wow-delay=".5s">
                      <div className="swiper blog-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="blog-item style-2">
                              <div className="blog-thumb">
                                <a href="/blog-details"><img src="/assets/images/blog/blog-4.webp" alt /></a>
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
                                  <h4 className="title"><a href="/blog-details">Harnessing Digital Transform a Roadmap
                                      Businesses.</a></h4>
                                </div>
                                <a className="text-btn" href="/blog-details">
                                  <span className="btn-text"><span>Read More</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="blog-item style-2">
                              <div className="blog-thumb">
                                <a href="/blog-details"><img src="/assets/images/blog/blog-5.webp" alt /></a>
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
                                  <h4 className="title"><a href="/blog-details">Mastering Change Management Lessons for
                                      Businesses.</a></h4>
                                </div>
                                <a className="text-btn" href="/blog-details">
                                  <span className="btn-text"><span>Read More</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </a>
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
            {/* end: Blog Section */}
          </main>
          {/* start: Footer Section */}
          <footer className="tj-footer-section footer-2 section-gap-x">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="footer-subscribe wow fadeInUp" data-wow-delay=".3s">
                      <div className="subscribe-logo">
                        <img src="/assets/images/logos/logo-2.webp" alt />
                      </div>
                      <div className="subscribe-form">
                        <form action="#">
                          <input type="email" name="email" placeholder="Enter email" />
                          <button className="tj-primary-btn" type="submit">
                            <span className="btn-text"><span>Send Message</span></span>
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
                    <div className="footer-widget footer-col-1 wow fadeInUp" data-wow-delay=".1s">
                      <div className="footer-logo">
                        <a href="/">
                          <img src="/assets/images/logos/logo-2.webp" alt="Logos" />
                        </a>
                      </div>
                      <div className="footer-text">
                        <p>Developing personalze our customer journeys to increase satisfaction &amp; loyalty of our expansion.
                        </p>
                      </div>
                      <div className="award-logo-area">
                        <div className="award-logo">
                          <img src="/assets/images/footer/award-logo-white-1.webp" alt />
                        </div>
                        <div className="award-logo">
                          <img src="/assets/images/footer/award-logo-white-2.webp" alt />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="footer-widget footer-col-2 widget-nav-menu wow fadeInUp" data-wow-delay=".3s">
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
                  <div className="col-xl-3 col-md-6">
                    <div className="footer-widget footer-col-3 widget-nav-menu wow fadeInUp" data-wow-delay=".5s">
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
                  <div className="col-xl-3 col-md-6">
                    <div className="footer-widget widget-contact wow fadeInUp" data-wow-delay=".7s">
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
            <div className="footer-marquee">
              <div className="swiper marquee-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide marquee-item">
                    <h4 className="marquee-text">Growth</h4>
                    <div className="marquee-img">
                      <img src="/assets/images/marquee/marquee-1.webp" alt />
                    </div>
                  </div>
                  <div className="swiper-slide marquee-item">
                    <h4 className="marquee-text">Leadership</h4>
                    <div className="marquee-img">
                      <img src="/assets/images/marquee/marquee-2.webp" alt />
                    </div>
                  </div>
                  <div className="swiper-slide marquee-item">
                    <h4 className="marquee-text">Enterprise</h4>
                    <div className="marquee-img">
                      <img src="/assets/images/marquee/marquee-1.webp" alt />
                    </div>
                  </div>
                  <div className="swiper-slide marquee-item">
                    <h4 className="marquee-text">Leadership</h4>
                    <div className="marquee-img">
                      <img src="/assets/images/marquee/marquee-2.webp" alt />
                    </div>
                  </div>
                  <div className="swiper-slide marquee-item">
                    <h4 className="marquee-text">Enterprise</h4>
                    <div className="marquee-img">
                      <img src="/assets/images/marquee/marquee-1.webp" alt />
                    </div>
                  </div>
                  <div className="swiper-slide marquee-item">
                    <h4 className="marquee-text">Leadership</h4>
                    <div className="marquee-img">
                      <img src="/assets/images/marquee/marquee-2.webp" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tj-copyright-area-2">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="copyright-content-area">
                      <div className="copyright-text">
                        <p>© <span>2026</span>Â&nbsp;<a href="https://themeforest.net/user/theme-junction/portfolio" target="_blank">Bexon</a> All right reserved</p>
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
                      <div className="copyright-menu">
                        <ul>
                          <li><a href="/contact">Privacy Policy</a></li>
                          <li><a href="/contact">Terms &amp; Condition</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-shape-1">
              <img src="/assets/images/shape/pattern-2.svg" alt />
            </div>
            <div className="bg-shape-2">
              <img src="/assets/images/shape/pattern-3.svg" alt />
            </div>
          </footer>
          {/* end: Footer Section */}
        </div>
      </div>
      {/* JS here */}
    </div>
    
  );
}

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
      <header className="header-area header-1 section-gap-x">
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
                  <nav id="mobile-menu" className="mainmenu">
                    <ul>
                      <li className="has-dropdown"><a href="/">Home</a>
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
                      <li className="has-dropdown current-menu-ancestor"><a href="/about">Pages</a>
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
                                    <a className="active" href="/shop-details">Shop details </a>
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
                      <li className="has-dropdown "><a href="/service">Services</a>
                        <ul className="sub-menu  mega-menu-service">
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-1" />
                              </span> <span className="mega-menu-service-title">Business Strategy
                                Development</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-2" />
                              </span> <span className="mega-menu-service-title">Customer Experience
                                Solutions</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-3" />
                              </span> <span className="mega-menu-service-title">Sustainability and ESG
                                Consulting</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-4" />
                              </span> <span className="mega-menu-service-title">Training and Development
                                Programs</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-5" />
                              </span> <span className="mega-menu-service-title">IT Support &amp; Maintenance</span>
                              <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-6" />
                              </span> <span className="mega-menu-service-title">Marketing Strategy &amp;
                                Campaigns</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
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
      <header className="header-area header-1 header-duplicate header-sticky section-gap-x">
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
                      <li className="has-dropdown"><a href="/">Home</a>
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
                      <li className="has-dropdown  current-menu-ancestor"><a href="/about">Pages</a>
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
                                    <a className="active" href="/shop-details">Shop details </a>
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
                      <li className="has-dropdown "><a href="/service">Services</a>
                        <ul className="sub-menu  mega-menu-service">
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-1" />
                              </span> <span className="mega-menu-service-title">Business Strategy
                                Development</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-2" />
                              </span> <span className="mega-menu-service-title">Customer Experience
                                Solutions</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-3" />
                              </span> <span className="mega-menu-service-title">Sustainability and ESG
                                Consulting</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-4" />
                              </span> <span className="mega-menu-service-title">Training and Development
                                Programs</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-5" />
                              </span> <span className="mega-menu-service-title">IT Support &amp; Maintenance</span>
                              <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
                          <li> <a className="mega-menu-service-single" href="/service-details"> <span className="mega-menu-service-icon">
                                <i className="tji-service-6" />
                              </span> <span className="mega-menu-service-title">Marketing Strategy &amp;
                                Campaigns</span> <span className="mega-menu-service-nav"><i className="tji-arrow-right-long" /><i className="tji-arrow-right-long" /></span></a></li>
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
            {/* start: Breadcrumb Section */}
            <section className="tj-page-header section-gap-x" data-bg-image="/assets/images/bg/pheader-bg.webp">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tj-page-header-content text-center">
                      <h1 className="tj-page-title">Shop details</h1>
                      <div className="tj-page-link">
                        <span><i className="tji-home" /></span>
                        <span>
                          <a href="/">Home</a>
                        </span>
                        <span><i className="tji-arrow-right" /></span>
                        <span>
                          <span>Shop details</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-header-overlay" data-bg-image="/assets/images/shape/pheader-overlay.webp" />
            </section>
            {/* end: Breadcrumb Section */}
            {/* start: Product Section */}
            <section className="tj-product-area section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="row section-bottom-gap product">
                      <div className="col-xl-6 col-lg-6">
                        <div className="tj-product-details-thumb-wrapper d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-md-between">
                          <div className="tj-product-thumb-items nav order-2 order-md-1" role="tablist" aria-orientation="vertical">
                            <button className="nav-link tj-pdt-thumb-img active" id="thumb-1-tab" data-bs-toggle="pill" data-bs-target="#thumb-1" type="button" role="tab" aria-controls="thumb-1" aria-selected="true"><img src="/assets/images/product/product-1.webp" alt="images" /></button>
                            <button className="nav-link tj-pdt-thumb-img" id="thumb-2-tab" data-bs-toggle="pill" data-bs-target="#thumb-2" type="button" role="tab" aria-controls="thumb-2" aria-selected="false"><img src="/assets/images/product/product-11.webp" alt="images" /></button>
                            <button className="nav-link tj-pdt-thumb-img" id="thumb-3-tab" data-bs-toggle="pill" data-bs-target="#thumb-3" type="button" role="tab" aria-controls="thumb-3" aria-selected="false"><img src="/assets/images/product/product-1.webp" alt="images" /></button>
                            <button className="nav-link tj-pdt-thumb-img" id="thumb-4-tab" data-bs-toggle="pill" data-bs-target="#thumb-4" type="button" role="tab" aria-controls="thumb-4" aria-selected="false"><img src="/assets/images/product/product-2.webp" alt="images" /></button>
                          </div>
                          <div className="tab-content tj-product-img-wrap order-1 order-md-2">
                            <div className="tj-product-badge product-on-sale">
                              <span className="onsale">Sale</span>
                            </div>
                            <div className="tj-product-action-btn">
                              <a className="ig-gallery" data-gall="gallery01" href="/assets/images/product/product-1.webp"><i className="tji-search" /></a>
                              <a className="ig-gallery" data-gall="gallery01" href="/assets/images/product/product-11.webp"><i className="tji-search" /></a>
                              <a className="ig-gallery" data-gall="gallery01" href="/assets/images/product/product-2.webp"><i className="tji-search" /></a>
                            </div>
                            <div className="tab-pane fade show active" id="thumb-1" role="tabpanel" aria-labelledby="thumb-1-tab" tabIndex={0}>
                              <div className="product-img-area">
                                <div className="product-img">
                                  <img src="/assets/images/product/product-1.webp" alt />
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="thumb-2" role="tabpanel" aria-labelledby="thumb-2-tab" tabIndex={0}>
                              <div className="product-img-area">
                                <div className="product-img">
                                  <img src="/assets/images/product/product-11.webp" alt />
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="thumb-3" role="tabpanel" aria-labelledby="thumb-3-tab" tabIndex={0}>
                              <div className="product-img-area">
                                <div className="product-img">
                                  <img src="/assets/images/product/product-1.webp" alt />
                                </div>
                              </div>
                            </div>
                            <div className="tab-pane fade" id="thumb-4" role="tabpanel" aria-labelledby="thumb-4-tab" tabIndex={0}>
                              <div className="product-img-area">
                                <div className="product-img">
                                  <img src="/assets/images/product/product-2.webp" alt />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="tj-product-details-wrapper">
                          <h3 className="tj-product-details-title">Personal holding earbud</h3>
                          {/* price */}
                          <div className="tj-product-details-price-wrapper">
                            <p className="price">
                              <del>
                                <span><span>$</span>240.00</span>
                              </del>
                              <ins>
                                <span><span>$</span>200.00</span>
                              </ins>
                            </p>
                          </div>
                          <div className="product-details__short-description">
                            <p>Experience true wireless freedom with our latest earbuds, designed to deliver
                              crystal-clear sound and deep bass in compact, lightweight package. Perfectly
                              crafted
                              for everyday use, these earbuds feature.</p>
                          </div>
                          {/* actions */}
                          <div className="tj-product-details-action-wrapper">
                            <div className="tj-product-details-action-wrapper">
                              <form className="cart" action="#" method="post">
                                <div className="tj-product-details-action-item-wrapper d-flex flex-wrap align-items-center">
                                  <div className="tj-product-details-quantity">
                                    <div className="tj-product-quantity">
                                      <div className="quantity">
                                        <span className="tj-cart-minus">
                                          <i className="far fa-minus" />
                                        </span>
                                        <input type="text" className="input-text tj-cart-input" name="quantity" defaultValue={1} title="Qty" size={4} autoComplete="off" />
                                        <span className="tj-cart-plus ">
                                          <i className="far fa-plus" />
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="tj-product-details-add-to-cart">
                                    <button type="submit" name="add-to-cart" className="tj-cart-btn ">
                                      <span className="btn-icon"><i className="fal fa-shopping-cart" /><i className="fal fa-shopping-cart" /></span>
                                      <span className="btn-text"><span>Add to cart</span></span>
                                    </button>
                                  </div>
                                  <div className="tj-product-details-wishlist">
                                    <button className="wishlist-btn">Add to wishlist</button>
                                  </div>
                                </div>
                              </form>
                            </div>
                            {/* buy now button */}
                            <a href="/checkout" className="tj-product-details-buy-now-btn w-100">
                              <span className="btn-text"><span>Shop now</span></span></a>
                          </div>
                          <div className="tj-product-details-query">
                            <h6 className="tj-product-details-query-title">Product Info</h6>
                            <div className="tj-product-details-query-item d-flex align-items-center">
                              <span>SKU:</span>
                              <p>SV-18</p>
                            </div>
                            <div className="tj-product-details-query-item d-flex align-items-center">
                              <span>Category:</span> <a href="#">Power</a>
                            </div>
                            <div className="tj-product-details-query-item d-flex align-items-center">
                              <span>Tag:</span> <a href="#">Portable</a>
                            </div>
                          </div>
                          <div className="tj-product-details-share">
                            <h6>Share:</h6>
                            <a href="https://www.facebook.com/" title="Facebook"><i className="fa-brands fa-facebook-f" /></a>
                            <a href="https://x.com/" title="Twitter"><i className="fab fa-x-twitter" /></a>
                            <a href="https://www.linkedin.com/" title="Linkedin"><i className="fa-brands fa-linkedin-in" /></a>
                            <a href="https://www.pinterest.com/" title="Pinterest"><i className="fa-brands fa-pinterest-p" /></a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tj-product-details-bottom section-bottom-gap">
                      <div className="row">
                        <div className="col-xl-12">
                          <div className="tj-product-details-tab-nav tj-tab">
                            <nav>
                              <div className="nav nav-tabs p-relative tj-product-tab" id="navPresentationTab" role="tablist">
                                <button className="nav-link description_tab active" id="nav-desc-tab-description" data-bs-toggle="tab" data-bs-target="#nav-desc-description" type="button" role="tab" aria-controls="nav-desc-description" aria-selected="true">Description
                                </button>
                                <button className="nav-link additional_information_tab" id="nav-desc-tab-additional_information" data-bs-toggle="tab" data-bs-target="#nav-desc-additional_information" type="button" role="tab" aria-controls="nav-desc-additional_information" aria-selected="false" tabIndex={-1}>Additional information </button>
                                <button className="nav-link reviews_tab" id="nav-desc-tab-reviews" data-bs-toggle="tab" data-bs-target="#nav-desc-reviews" type="button" role="tab" aria-controls="nav-desc-reviews" aria-selected="false" tabIndex={-1}>Reviews (01)
                                </button>
                              </div>
                            </nav>
                            <div className="tab-content" id="navPresentationTabContent">
                              <div className="tab-pane fade active show" id="nav-desc-description" role="tabpanel" aria-labelledby="nav-desc-tab-description">
                                <div className="tj-product-details-description mt-30">
                                  <p>Experience true wireless freedom with our latest earbuds, designed to
                                    deliver
                                    crystal-clear sound and deep bass in a compact, lightweight package.
                                    Perfectly
                                    crafted for everyday use, these earbuds feature advanced Bluetooth
                                    connectivity for seamless pairing and stable audio streaming. Whether
                                    youâre
                                    hitting the gym, commuting, or relaxing at home, enjoy up to 8 hours of
                                    uninterrupted playtime with a portable charging case that keeps you
                                    powered on
                                    the go.</p>
                                  <p>With ergonomic ear tips and sweat-resistant materials, they provide a
                                    secure
                                    and comfortable fit for any activity. Plus, intuitive touch controls let
                                    you
                                    manage music, calls, and voice assistants effortlessly. Elevate your
                                    audio
                                    experience with earbuds that combine style, performance, and convenience
                                  </p>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="nav-desc-additional_information" role="tabpanel" aria-labelledby="nav-desc-tab-additional_information">
                                <div className="tj-product-details-description mt-30">
                                  <table>
                                    <tbody>
                                      <tr>
                                        <th>
                                          Weight</th>
                                        <td>55 kg</td>
                                      </tr>
                                      <tr>
                                        <th>
                                          Dimensions</th>
                                        <td>55 Ã 55 Ã 55 cm
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                              <div className="tab-pane fade" id="nav-desc-reviews" role="tabpanel" aria-labelledby="nav-desc-tab-reviews">
                                <div className="tj-product-details-description mt-30">
                                  <div className="reviews-area">
                                    <div className="comments-area">
                                      <h3 className="d-none mb-30">
                                        1 review for â<span>Personal holding earbud</span>â </h3>
                                      <ol className="commentlist">
                                        <li className="review">
                                          <div className="comment_container">
                                            <img className="avatar" src="/assets/images/blog/avatar-1.webp" alt />
                                            <div className="comment-text">
                                              <div className="star-rating">
                                                <span style={{width: '100%'}} />
                                              </div>
                                              <p className="meta">
                                                <strong className="review__author">Berlee Hopper </strong>
                                                <span className="review__dash">â</span>
                                                <span className="review__published-date">June 30,
                                                  2025</span>
                                              </p>
                                              <div className="description">
                                                <p>âIâve been using these earbuds daily for a few
                                                  weeks, and
                                                  theyâve truly exceeded my expectations. The sound
                                                  quality
                                                  is crisp, with deep bass and clear highs â perfect
                                                  for
                                                  music, calls, or podcasts. The Bluetooth connection
                                                  is
                                                  stable, and pairing was super easy.â</p>
                                              </div>
                                            </div>
                                          </div>
                                        </li>{/* #comment-## */}
                                      </ol>
                                    </div>
                                    <div id="review_form_wrapper">
                                      <div id="review_form">
                                        <div id="respond" className="comment-respond">
                                          <h3>Leave a comment</h3>
                                          <form className="comment-form" action="#" method="post" id="commentform">
                                            <p className="comment-notes">Your email address
                                              will not be published. Required fields are marked
                                              <span className="required">*</span>
                                            </p>
                                            <p className="comment-form-author comment-input"><label htmlFor="author">Name <span className="required">*</span></label><input id="author" name="author" type="text" defaultValue size={30} required />
                                            </p>
                                            <p className="comment-form-email comment-input"><label htmlFor="email">Email <span className="required">*</span></label><input id="semail" name="semail" type="email" defaultValue size={30} required />
                                            </p>
                                            <div className="comment-form-rating comment-rating d-flex">
                                              <span>Your rating <span className="required">*</span></span>
                                              <div className="star-ratings">
                                                <div className="fill-ratings" style={{width: '60%'}}>
                                                  <span>âââââ</span>
                                                </div>
                                                <div className="empty-ratings">
                                                  <span>âââââ</span>
                                                </div>
                                              </div>
                                            </div>
                                            <p className="comment-input"><label htmlFor="comment">Type your
                                                review&nbsp;<span className="required">*</span></label><textarea id="comment" name="comment" cols={45} rows={8} required defaultValue={""} /></p>
                                            <p className="comment-check"><input id="comment-check" name="comment-check" type="checkbox" defaultValue="yes" />
                                              <label htmlFor="comment-check">Save my
                                                name, email, and website in this browser for the next
                                                time I
                                                comment.</label>
                                            </p>
                                            <p className="form-submit">
                                              <button type="submit" className="tj-primary-btn mt-0">
                                                <span className="btn-text"><span>Submit
                                                    reviews</span></span>
                                                <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                              </button>
                                            </p>
                                          </form>
                                        </div>{/* #respond */}
                                      </div>
                                    </div>
                                    <div className="clear" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="related-products has-border">
                      <div className="sec-heading text-center">
                        <span className="sub-title wow fadeInUp" data-wow-delay="0.1s"><i className="tji-box" /> Related
                          products</span>
                        <h2 className="sec-title text-anim">Customers also bought</h2>
                      </div>
                      <div className="row rg-30 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-1">
                        <div className="tj-product">
                          <div className="tj-product-item">
                            <div className="tj-product-thumb">
                              <a href="/shop-details">
                                <img src="/assets/images/product/product-1.webp" alt /> </a>
                              <div className="tj-product-badge product-on-sale">
                                <span className="onsale">Sale</span>
                              </div>
                              {/* product action */}
                              <div className="tj-product-action">
                                <div className="tj-product-action-item d-flex flex-column">
                                  <div className="tj-product-action-btn product-add-wishlist-btn">
                                    <button>Add to
                                      wishlist</button> <span className="tj-product-action-btn-tooltip">Add to
                                      wishlist</span>
                                  </div>
                                  <div className="tj-product-action-btn">
                                    <a className="tj-quick-product-details" href="#tj-product-modal-1" data-vbtype="inline"><i className="fal fa-eye" /></a>
                                    <span className="tj-product-action-btn-tooltip">Quick view</span>
                                  </div>
                                </div>
                              </div>
                              <div className="tj-product-cart-btn">
                                <a href="#" data-quantity={1} className="cart-button button tj-cart-btn stock-available "><span className="btn-icon"><i className="fal fa-shopping-cart" /><i className="fal fa-shopping-cart" /></span><span className="btn-text"><span>Add to
                                      cart</span></span></a>
                              </div>
                            </div>
                            <div className="tj-product-content">
                              <div className="tj-product-tag d-none">
                                <a href="/shop-details"> Power</a>
                              </div>
                              <h3 className="tj-product-title">
                                <a href="/shop-details">Personal
                                  holding earbud</a>
                              </h3>
                              <div className="tj-product-price-wrapper">
                                <span className="price"><del><span><bdi><span>$</span>240.00</bdi></span></del>
                                  <ins><span><bdi><span>$</span>200.00</bdi></span></ins></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tj-product">
                          <div className="tj-product-item">
                            <div className="tj-product-thumb">
                              <a href="/shop-details">
                                <img src="/assets/images/product/product-2.webp" alt /> </a>
                              <div className="tj-product-badge product-on-sale">
                                <span className="onsale sold-out">Sold</span>
                              </div>
                              {/* product action */}
                              <div className="tj-product-action">
                                <div className="tj-product-action-item d-flex flex-column">
                                  <div className="tj-product-action-btn product-add-wishlist-btn">
                                    <button>Add to
                                      wishlist</button> <span className="tj-product-action-btn-tooltip">Add to
                                      wishlist</span>
                                  </div>
                                  <div className="tj-product-action-btn">
                                    <a className="tj-quick-product-details" href="#tj-product-modal-1" data-vbtype="inline"><i className="fal fa-eye" /></a>
                                    <span className="tj-product-action-btn-tooltip">Quick view</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="tj-product-content">
                              <div className="tj-product-tag d-none">
                                <a href="https://solvior.themejunction.net/product-category/charger/ ">
                                  Charger</a>
                              </div>
                              <h3 className="tj-product-title">
                                <a href="/shop-details">Echo tune wireless headphones</a>
                              </h3>
                              <div className="tj-product-price-wrapper">
                                <span className="price"><del><span><bdi><span>$</span>300.00</bdi></span></del>
                                  <ins><span><bdi><span>$</span>250.00</bdi></span></ins></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="tj-product">
                          <div className="tj-product-item">
                            <div className="tj-product-thumb">
                              <a href="/shop-details">
                                <img src="/assets/images/product/product-6.webp" alt /> </a>
                              {/* product action */}
                              <div className="tj-product-action">
                                <div className="tj-product-action-item d-flex flex-column">
                                  <div className="tj-product-action-btn product-add-wishlist-btn">
                                    <button>Add to
                                      wishlist</button> <span className="tj-product-action-btn-tooltip">Add to
                                      wishlist</span>
                                  </div>
                                  <div className="tj-product-action-btn">
                                    <a className="tj-quick-product-details" href="#tj-product-modal-1" data-vbtype="inline"><i className="fal fa-eye" /></a>
                                    <span className="tj-product-action-btn-tooltip">Quick view</span>
                                  </div>
                                </div>
                              </div>
                              <div className="tj-product-cart-btn">
                                <a href="#" className="cart-button button tj-cart-btn stock-available "><span className="btn-icon"><i className="fal fa-shopping-cart" /><i className="fal fa-shopping-cart" /></span><span className="btn-text"><span>Add to
                                      cart</span></span></a>
                              </div>
                            </div>
                            <div className="tj-product-content">
                              <div className="tj-product-tag d-none">
                                <a href="/shop-details"> Power</a>
                              </div>
                              <h3 className="tj-product-title">
                                <a href="/shop-details">Cool mini USB
                                  fan</a>
                              </h3>
                              <div className="tj-product-price-wrapper">
                                <span className="price"><span><bdi><span>$</span>50.00</bdi></span></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Product Section */}
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
                        <img src="/assets/images/cta/cta-bg.webp" alt />
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
                        <p>Developing personalze our customer journeys to increase satisfaction &amp; loyalty of our
                          expansion.
                        </p>
                      </div>
                      <div className="award-logo-area">
                        <div className="award-logo">
                          <img src="/assets/images/footer/award-logo-1.webp" alt />
                        </div>
                        <div className="award-logo">
                          <img src="/assets/images/footer/award-logo-2.webp" alt />
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
                          <li><a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter" /></a>
                          </li>
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
              <img src="/assets/images/shape/pattern-2.svg" alt />
            </div>
            <div className="bg-shape-2">
              <img src="/assets/images/shape/pattern-3.svg" alt />
            </div>
          </footer>
          {/* end: Footer Section */}
          {/* start: Product details modal Area */}
          <div id="tj-product-modal-1" style={{display: 'none'}}>
            <div className="single-product woosq-product container">
              <div className="product row ">
                <div className="col-12 col-md-6 thumbnails">
                  <div className="images tj-quick-details-slider swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="thumbnail"><img src="/assets/images/product/product-1.webp" className="attachment-woosq size-woosq" alt /></div>
                      </div>
                      <div className="swiper-slide">
                        <div className="thumbnail"><img src="/assets/images/product/product-2.webp" className="attachment-woosq size-woosq" alt /></div>
                      </div>
                      <div className="swiper-slide">
                        <div className="thumbnail"><img src="/assets/images/product/product-3.webp" className="attachment-woosq size-woosq" alt /></div>
                      </div>
                    </div>
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                    <div className="swiper-pagination" />
                  </div>
                </div>
                <div className="col-12 col-md-6 summary entry-summary">
                  <div className="summary-content ps-container ps-theme-wpc">
                    <div className="product-stock">
                      <span className="stock in-stock">10 in stock</span>
                    </div>
                    <h3 className="tj-product-details-title">Personal holding earbud</h3>
                    <p className="price">
                      <del><span className="price-amount amount"><span>$</span>240.00</span></del>
                      <span className="price-amount amount"><span>$</span>200.00</span>
                    </p>
                    <div className="product-details__short-description">
                      <p>Experience true wireless freedom with our latest earbuds, designed to deliver
                        crystal-clear
                        sound and deep bass in compact, lightweight package. Perfectly crafted for everyday use,
                        these
                        earbuds feature.</p>
                    </div>
                    <div className="tj-product-details-action-wrapper">
                      <form className="cart">
                        <div className="tj-product-details-action-item-wrapper d-flex align-items-center">
                          <div className="tj-product-details-quantity">
                            <div className="tj-product-quantity">
                              <div className="quantity">
                                <span className="qty_button minus tj-cart-minus">
                                  <i className="far fa-minus" />
                                </span>
                                <input type="text" id="quantity_6862037ea99bb" className="input-text tj-cart-input qty tj-cart-input text" name="quantity" defaultValue={1} />
                                <span className="qty_button plus tj-cart-plus ">
                                  <i className="far fa-plus" />
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="tj-product-details-add-to-cart">
                            <button type="submit" name="add-to-cart" value={5403} className="single_add_to_cart_button tj-cart-btn ">
                              <span className="btn-icon"><i className="fal fa-shopping-cart" /><i className="fal fa-shopping-cart" /></span>
                              <span className="btn-text"><span>Add to cart</span></span>
                            </button>
                          </div>
                          <div className="tj-product-details-wishlist">
                            <button className="woosw-btn ">Add to wishlist</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="tj-product-details-query-item d-flex align-items-center">
                      <span>SKU:</span>
                      <p>SV-18</p>
                    </div>
                    <div className="tj-product-details-query-item d-flex align-items-center">
                      <span>Category: </span> <a href="https://solvior.themejunction.net/product-category/power/" rel="tag">Power</a>
                    </div>
                    <div className="tj-product-details-query-item d-flex align-items-center">
                      <span>Tag:</span> <a href="https://solvior.themejunction.net/product-tag/portable/" rel="tag">Portable</a>
                    </div>
                    <div className="ps-scrollbar-x-rail" style={{left: 0, bottom: 0}}>
                      <div className="ps-scrollbar-x" tabIndex={0} style={{left: 0, width: 0}} />
                    </div>
                    <div className="ps-scrollbar-y-rail" style={{top: 0, right: 0}}>
                      <div className="ps-scrollbar-y" tabIndex={0} style={{top: 0, height: 0}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end: Product details modal Area */}
        </div>
      </div>
      {/* JS here */}
    </div>
    
  );
}

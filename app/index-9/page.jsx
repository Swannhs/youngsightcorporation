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
      <header className="header-area h9-header header-absolute section-gap-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* site logo */}
                <div className="site_logo">
                  <a className="logo" href="/"><img src="/assets/images/logos/logo-2.webp" alt="" /></a>
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
      <header className="header-area header-3 header-duplicate header-sticky section-gap-x">
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
            {/* start: Banner Section */}
            <section className="h9-hero">
              <div className="h9-hero-inner">
                <div className="h9-hero-bg-image" data-bg-image="/assets/images/hero/h9-hero-bg.webp" />
                <div className="h9-hero-item-wrapper">
                  <div className="h9-hero-content">
                    <h1 className="h9-hero-title text-anim">Empower <span className="wow fadeInLeft" data-wow-delay="0.3s" />
                      Your Business.
                    </h1>
                    <div className="h9-hero-desc-area">
                      <h4 className="title wow fadeInUp" data-wow-delay="0.5s">Solutions That Scale.</h4>
                      <div className="desc-inner wow fadeInUp" data-wow-delay="0.7s">
                        <p className="desc">Recognized by the industry leaders, of our award-winning team has are <a href="/portfolio">Proven record</a> of delivering excellence across an projects.
                          Recognized by the industry leaders, of our award.</p>
                        <a className="tj-primary-btn" href="/contact">
                          <span className="btn-text"><span>Get Started</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </a>
                      </div>
                    </div>
                    <div className="h9-hero-social wow fadeInUp" data-wow-delay="0.9s">
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
                  <div className="h9-hero-img  img-parallax wow fadeInUp" data-wow-delay="0.9s">
                    <img src="/assets/images/hero/h9-hero-img.webp" alt="" />
                  </div>
                </div>
              </div>
              <div className="h7-hero-shape h9-hero-shape-1 wow fadeInUpBig" data-wow-delay="1s"><img className="tj-anim-move-var-big" src="/assets/images/shape/h7-hero-blur-1.png" alt="" /></div>
              <div className="h7-hero-shape h9-hero-shape-2 wow fadeInDownBig" data-wow-delay="1.2s"><img className="tj-anim-move-var-big-reverse" src="/assets/images/shape/h7-hero-blur-2.png" alt="" /></div>
            </section>
            {/* end: Banner Section */}
            {/* start: Choose Section */}
            <section id="choose" className="tj-choose-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-8 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Choose the Best</span>
                      <h2 className="sec-title title-anim">Empowering Business with Expertise.</h2>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4 rightSwipeWrap">
                  <div className="col-md-6 col-lg-4">
                    <div className="choose-box customers-box h9-choose-box right-swipe">
                      <h4 className="title">Providing the Our Best Business Solution Ever.</h4>
                      <div className="customers-inner">
                        <div className="customers">
                          <ul>
                            <li className="wow fadeInLeft" data-wow-delay=".5s"><img src="/assets/images/testimonial/client-1.webp" alt="" /></li>
                            <li className="wow fadeInLeft" data-wow-delay=".6s"><img src="/assets/images/testimonial/client-2.webp" alt="" /></li>
                            <li className="wow fadeInLeft" data-wow-delay=".7s"><img src="/assets/images/testimonial/client-3.webp" alt="" /></li>
                            <li className="wow fadeInLeft" data-wow-delay=".8s"><img src="/assets/images/testimonial/client-4.webp" alt="" /></li>
                          </ul>
                        </div>
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
                        <h5 className="customers-text">100+ happy customer.</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="choose-box h9-choose-box right-swipe">
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
                    <div className="choose-box h9-choose-box h9-choose-bg right-swipe" data-bg-image="/assets/images/choose/h9-choose-bg.webp">
                      <div className="choose-content">
                        <h4 className="title">Dedicated Support</h4>
                        <p className="desc">Our team is always available for address expert concerns, providing quick and
                          effective
                          solution to keep your business.</p>
                        <a className="text-btn" href="/contact">
                          <span className="btn-text"><span>Contact Us</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Choose Section */}
            {/* start: Maquee Area */}
            <section className="h5-maquee z-2">
              <div className="h5-maquee-inner">
                <div className="swiper h5-maquee-slider">
                  <div className="swiper-wrapper  h5-maquee-slider-wrapper">
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Innovation</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Success</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Leadership</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Enterprise</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Business Growth</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Corporate</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Results</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Innovation</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Success</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Leadership</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Enterprise</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Business Growth</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div dir="rtl" className="h5-maquee-inner h5-maquee-inner-rtl">
                <div className="swiper h5-maquee-slider">
                  <div className="swiper-wrapper  h5-maquee-slider-wrapper">
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Innovation</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Success</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Leadership</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Enterprise</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Business Growth</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Corporate</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Results</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Innovation</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Success</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Leadership</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
                        </div>
                        <div className="marquee-title">
                          <h4 className="title">Enterprise</h4>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide h5-maquee-slider-item">
                      <div className="marquee-box">
                        <div className="marquee-icon-wrapper">
                          <div className="marquee-icon"><i className="tji-star" /></div>
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
            <section className="h9-about-section section-bottom-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-8 h9-sec-heading">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">About our company</span>
                      <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s"><span>Our Stories</span> on
                        Begins
                        Passion Driven by Purpose, and
                        Fueled by a Relentless Pursuit of Results and Client Real Success.
                      </h2>
                    </div>
                    <div className="h9-about-area">
                      <div className="about-img-area h9-about-img wow fadeInLeft" data-wow-delay=".3s">
                        <div className="about-img overflow-hidden">
                          <img data-speed=".8" src="/assets/images/about/h9-about.webp" alt="" />
                        </div>
                        <div className="box-area">
                          <div className="author-info wow fadeInUp" data-wow-delay=".3s">
                            <h4 className="title">Eade Marren</h4>
                            <span className="designation">CEO &amp; Founder</span>
                          </div>
                        </div>
                      </div>
                      <div className="h9-about-content">
                        <p className="desc wow fadeInUp" data-wow-delay=".4s">Recognize that exceptional customer experiences
                          are at
                          the heart of every successful
                          business. Our Customer Experience Solutions are crafted to help you transform every interaction
                          your
                          customers have with your brand busin into a meaningful and positive experience. We believe that
                          understanding the customer.</p>
                        <div className="h9-about-funfact wow fadeInUp" data-wow-delay=".6s">
                          <div className="countup-item">
                            <div className="inline-content">
                              <span className="odometer countup-number" data-count={20} />
                              <span className="count-plus">M</span>
                            </div>
                            <span className="count-text">Reach Worldwide empower dreams everywhere.</span>
                          </div>
                          <div className="countup-item">
                            <div className="inline-content">
                              <span className="odometer countup-number" data-count="8.5" />
                              <span className="count-plus">X</span>
                            </div>
                            <span className="count-text">Faster Growth starts smart solutions today.</span>
                          </div>
                        </div>
                        <div className="about-btn-area-2 wow fadeInUp" data-wow-delay=".7s">
                          <a className="tj-primary-btn" href="/about">
                            <span className="btn-text"><span>Learn More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                          <a className="video-btn video-popup" data-autoplay="true" data-vbtype="video" data-maxwidth="1200px" href="https://www.youtube.com/watch?v=MLpWrANjFbI">
                            <span className="play-btn"><i className="tji-play" /></span>
                            <span className="video-text">Play our reels</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: About Section */}
            {/* start: Service Section */}
            <section className="h9-service section-gap  section-gap-x tj-sticky-panel-container-2 tj-progress-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-4 ">
                    <div className="sec-heading style-8  tj-sticky-panel-2">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">CHOOSE THE BEST</span>
                      <h2 className="sec-title title-anim">Scalable business services</h2>
                      <div className="h9-service-more wow fadeInUp" data-wow-delay=".3s">
                        <a className="tj-primary-btn" href="/service">
                          <span className="btn-text"><span>More services</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-8 ">
                    <div className="h9-service-scroll-progress tj-scroll-progress tj-sticky-panel-2">
                      <div className="tj-scroll-progress-item active">
                        <h5 className="tj-scroll-progress-sln">01.</h5>
                        <div className="tj-scroll-progress-ind">
                          <div className="tj-scroll-progress-ind-inner" />
                        </div>
                      </div>
                      <div className="tj-scroll-progress-item">
                        <h5 className="tj-scroll-progress-sln">02.</h5>
                        <div className="tj-scroll-progress-ind">
                          <div className="tj-scroll-progress-ind-inner" />
                        </div>
                      </div>
                      <div className="tj-scroll-progress-item">
                        <h5 className="tj-scroll-progress-sln">03.</h5>
                        <div className="tj-scroll-progress-ind">
                          <div className="tj-scroll-progress-ind-inner" />
                        </div>
                      </div>
                      <div className="tj-scroll-progress-item">
                        <h5 className="tj-scroll-progress-sln">04.</h5>
                        <div className="tj-scroll-progress-ind">
                          <div className="tj-scroll-progress-ind-inner" />
                        </div>
                      </div>
                    </div>
                    <div className="service-wrapper h9-service-wrapper">
                      <div className="service-item style-5 tj-progress-item">
                        <div className="service-content-area">
                          <div className="service-icon">
                            <i className="tji-service-1" />
                          </div>
                          <div className="service-content">
                            <h4 className="title"><a href="/service-details">Business Strategy Development</a></h4>
                            <p className="desc">Recognize that exceptional customer experiences are at the heart of every
                              successful
                              business. Our Customer Experience Solutions are crafted to help you transform every
                              interaction
                              your customers have with your brand busin.</p>
                          </div>
                          <a href="/service-details" className="h9-service-nav">
                            <i className="tji-arrow-right-long" />
                          </a>
                        </div>
                        <div className="service-img">
                          <img src="/assets/images/service/h9-service-1.webp" alt="" />
                        </div>
                      </div>
                      <div className="service-item style-5 tj-progress-item">
                        <div className="service-content-area">
                          <div className="service-icon">
                            <i className="tji-service-2" />
                          </div>
                          <div className="service-content">
                            <h4 className="title"><a href="/service-details">Customer Experience Solutions</a></h4>
                            <p className="desc">Recognize that exceptional customer experiences are at the heart of every
                              successful
                              business. Our Customer Experience Solutions are crafted to help you transform every
                              interaction
                              your customers have with your brand busin.</p>
                          </div>
                          <a href="/service-details" className="h9-service-nav">
                            <i className="tji-arrow-right-long" />
                          </a>
                        </div>
                        <div className="service-img">
                          <img src="/assets/images/service/h9-service-2.webp" alt="" />
                        </div>
                      </div>
                      <div className="service-item style-5 tj-progress-item">
                        <div className="service-content-area">
                          <div className="service-icon">
                            <i className="tji-service-3" />
                          </div>
                          <div className="service-content">
                            <h4 className="title"><a href="/service-details">Sustainability and ESG Consulting</a></h4>
                            <p className="desc">Recognize that exceptional customer experiences are at the heart of every
                              successful
                              business. Our Customer Experience Solutions are crafted to help you transform every
                              interaction
                              your customers have with your brand busin.</p>
                          </div>
                          <a href="/service-details" className="h9-service-nav">
                            <i className="tji-arrow-right-long" />
                          </a>
                        </div>
                        <div className="service-img">
                          <img src="/assets/images/service/h9-service-3.webp" alt="" />
                        </div>
                      </div>
                      <div className="service-item style-5 tj-progress-item">
                        <div className="service-content-area">
                          <div className="service-icon">
                            <i className="tji-service-4" />
                          </div>
                          <div className="service-content">
                            <h4 className="title"><a href="/service-details">Marketing Strategy &amp; Campaigns</a></h4>
                            <p className="desc">Recognize that exceptional customer experiences are at the heart of every
                              successful
                              business. Our Customer Experience Solutions are crafted to help you transform every
                              interaction
                              your customers have with your brand busin.</p>
                          </div>
                          <a href="/service-details" className="h9-service-nav">
                            <i className="tji-arrow-right-long" />
                          </a>
                        </div>
                        <div className="service-img">
                          <img src="/assets/images/service/service-6.webp" alt="" />
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
              <div className="bg-shape-3">
                <img src="/assets/images/shape/h7-testimonial-shape-blur.svg" alt="" />
              </div>
            </section>
            {/* end: Service Section */}
            {/* start: Team Section */}
            <section className="tj-team-section-2 section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-8 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Meet Our Team</span>
                      <h2 className="sec-title title-anim">Empowering Business with Expertise.</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="h9-team-wrapper">
                      <div className="h9-team-item-wrap">
                        <div className="team-item wow fadeInUp" data-wow-delay=".3s">
                          <div className="team-content">
                            <h3 className="title"><a href="/team-details">Eade Marren</a></h3>
                            <span className="designation">Chief Executive</span>
                          </div>
                          <div className="team-img">
                            <img src="/assets/images/team/team-1.webp" alt="Images" />
                          </div>
                          <a className="text-btn" href="/team-details">
                            <span className="btn-text"><span>Know More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                        </div>
                        <div className="team-item wow fadeInUp" data-wow-delay=".3s">
                          <div className="team-content">
                            <h3 className="title"><a href="/team-details">Savannah Ngueen</a></h3>
                            <span className="designation">Chief Executive</span>
                          </div>
                          <div className="team-img">
                            <img src="/assets/images/team/team-2.webp" alt="Images" />
                          </div>
                          <a className="text-btn" href="/team-details">
                            <span className="btn-text"><span>Know More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                        </div>
                        <div className="team-item wow fadeInUp" data-wow-delay=".3s">
                          <div className="team-content">
                            <h3 className="title"><a href="/team-details">Emma Richardson</a></h3>
                            <span className="designation">Chief Executive</span>
                          </div>
                          <div className="team-img">
                            <img src="/assets/images/team/team-3.webp" alt="Images" />
                          </div>
                          <a className="text-btn" href="/team-details">
                            <span className="btn-text"><span>Know More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                        </div>
                        <div className="team-item wow fadeInUp" data-wow-delay=".3s">
                          <div className="team-content">
                            <h3 className="title"><a href="/team-details">Nathaniel Ellington</a></h3>
                            <span className="designation">Chief Executive</span>
                          </div>
                          <div className="team-img">
                            <img src="/assets/images/team/team-4.webp" alt="Images" />
                          </div>
                          <a className="text-btn" href="/team-details">
                            <span className="btn-text"><span>Know More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Team Section */}
            {/* start: Project Section */}
            <section className="tj-project-section-3 h9-project section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-8">
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s">OUR
                            PORTFOLIO</span>
                          <h2 className="sec-title title-anim">Empowering Business with Expertise.</h2>
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
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="project-wrapper h9-project-wrapper wow fadeInUp" data-wow-delay=".4s">
                      <div className="swiper h9-project-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="project-item">
                              <div className="project-img">
                                <img src="/assets/images/project/project-6.webp" alt="" />
                              </div>
                              <div className="project-content">
                                <span className="categories"><a href="/portfolio-details">Business</a></span>
                                <div className="project-text">
                                  <h4 className="title"><a href="/portfolio-details">Event Management Platform</a></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-item">
                              <div className="project-img">
                                <img src="/assets/images/project/project-7.webp" alt="" />
                              </div>
                              <div className="project-content">
                                <span className="categories"><a href="/portfolio-details">Business</a></span>
                                <div className="project-text">
                                  <h4 className="title"><a href="/portfolio-details">Rebranding Strategy for a Growing</a>
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-item">
                              <div className="project-img">
                                <img src="/assets/images/project/project-8.webp" alt="" />
                              </div>
                              <div className="project-content">
                                <span className="categories"><a href="/portfolio-details">Business</a></span>
                                <div className="project-text">
                                  <h4 className="title"><a href="/portfolio-details">Interactive Learning Platform</a></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="project-item">
                              <div className="project-img">
                                <img src="/assets/images/project/project-9.webp" alt="" />
                              </div>
                              <div className="project-content">
                                <span className="categories"><a href="/portfolio-details">Business</a></span>
                                <div className="project-text">
                                  <h4 className="title"><a href="/portfolio-details">Environmental Impact Dashboard</a></h4>
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
            {/* end: Project Section */}
            {/* start: Testimonial Section */}
            <section className="h9-testimonial section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 order-2 order-lg-1">
                    <div className="h9-testimonial-wrap">
                      <div className="testimonial-item wow fadeInUpBig" data-wow-delay=".2s">
                        <div className="star-ratings">
                          <div className="fill-ratings" style={{width: '100%'}}>
                            <span>âââââ</span>
                          </div>
                          <div className="empty-ratings">
                            <span>âââââ</span>
                          </div>
                        </div>
                        <div className="desc">
                          <p>âWorking with Bexon has been a game-changer business. Their team's profession alism, attention
                            to
                            detail, and innovative solutions have help streamline operations our goals faster than imagined.
                            We
                            truly feel like a valued partner.â</p>
                        </div>
                        <div className="testimonial-author">
                          <div className="author-inner">
                            <div className="author-header">
                              <h5 className="title">Nathaniel Ellington</h5>
                              <span className="designation">Chief Executive</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-item style-2 wow fadeInUpBig" data-wow-delay=".4s">
                        <div className="star-ratings">
                          <div className="fill-ratings" style={{width: '100%'}}>
                            <span>âââââ</span>
                          </div>
                          <div className="empty-ratings">
                            <span>âââââ</span>
                          </div>
                        </div>
                        <div className="desc">
                          <p>âWorking with Bexon has been a game-changer business. Their team's profession alism, attention
                            to
                            detail, and innovative solutions have help streamline operations our goals faster than imagined.
                            We
                            truly feel like a valued partner.â</p>
                        </div>
                        <div className="testimonial-author">
                          <div className="author-inner">
                            <div className="author-header">
                              <h5 className="title">Nathaniel Ellington</h5>
                              <span className="designation">Chief Executive</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 order-1 order-lg-2">
                    <div className="h9-testimonial-heading">
                      <div className="sec-heading style-8">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Clients Testimonials</span>
                        <h2 className="sec-title title-anim">Our Trusted Clients.</h2>
                      </div>
                      <div className="testimonial-img wow fadeInUpBig" data-wow-delay=".3s">
                        <img src="/assets/images/testimonial/h9-testimonial-img.webp" alt="" />
                      </div>
                      <div className="shape-icon wow fadeIn" data-wow-delay=".5s"><img src="/assets/images/shape/big-icon.png" alt="" /></div>
                    </div>
                  </div>
                  <div className="col-lg-4 order-3 order-lg-3">
                    <div className="h9-testimonial-wrap style-2">
                      <div className="testimonial-item style-2 wow fadeInUpBig" data-wow-delay=".2s">
                        <div className="star-ratings">
                          <div className="fill-ratings" style={{width: '100%'}}>
                            <span>âââââ</span>
                          </div>
                          <div className="empty-ratings">
                            <span>âââââ</span>
                          </div>
                        </div>
                        <div className="desc">
                          <p>âWorking with Bexon has been a game-changer business. Their team's profession alism, attention
                            to
                            detail, and innovative solutions have help streamline operations our goals faster than imagined.
                            We
                            truly feel like a valued partner.â</p>
                        </div>
                        <div className="testimonial-author">
                          <div className="author-inner">
                            <div className="author-header">
                              <h5 className="title">Nathaniel Ellington</h5>
                              <span className="designation">Chief Executive</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-item wow fadeInUpBig" data-wow-delay=".4s">
                        <div className="star-ratings">
                          <div className="fill-ratings" style={{width: '100%'}}>
                            <span>âââââ</span>
                          </div>
                          <div className="empty-ratings">
                            <span>âââââ</span>
                          </div>
                        </div>
                        <div className="desc">
                          <p>âWorking with Bexon has been a game-changer business. Their team's profession alism, attention
                            to
                            detail, and innovative solutions have help streamline operations our goals faster than imagined.
                            We
                            truly feel like a valued partner.â</p>
                        </div>
                        <div className="testimonial-author">
                          <div className="author-inner">
                            <div className="author-header">
                              <h5 className="title">Nathaniel Ellington</h5>
                              <span className="designation">Chief Executive</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Testimonial Section */}
            {/* start: Client Section */}
            <section className="tj-client-section-2 h6-client section-gap-x wow fadeInUp" data-wow-delay=".4s">
              <div className="container-fluid client-container">
                <div className="row">
                  <div className="col-12">
                    <div className="h6-client-title-wrapper">
                      <h6 className="h6-client-title">weâre proud to partner with best-in-class clients</h6>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="swiper client-slider client-slider-2 h6-client-slider">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <img src="/assets/images/brands/brand-1-light.webp" alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <img src="/assets/images/brands/brand-2-light.webp" alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <img src="/assets/images/brands/brand-3-light.webp" alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <img src="/assets/images/brands/brand-4-light.webp" alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <img src="/assets/images/brands/brand-5-light.webp" alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide client-item">
                          <div className="client-logo">
                            <img src="/assets/images/brands/brand-6-light.webp" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Client Section */}
            {/* start: Blog Section */}
            <section className="h5-blog section-gap fix">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap style-8">
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-8">
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s">Insights &amp; Ideas</span>
                          <h2 className="sec-title text-anim">The Ultimate Resource.</h2>
                        </div>
                        <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                          <a className="tj-primary-btn" href="/blog">
                            <span className="btn-text"><span>More Blogs</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="h5-blog-wrapper h9-blog-wrapper">
                      <div className="blog-item style-2 h5-blog-item wow fadeInLeft" data-wow-delay=".3s">
                        <div className="blog-thumb">
                          <a href="/blog-details"><img src="/assets/images/blog/h5-blog-1.webp" alt="" /></a>
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
                                Businesses.</a>
                            </h4>
                          </div>
                          <a className="text-btn" href="/blog-details">
                            <span className="btn-text"><span>Read More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                        </div>
                      </div>
                      <div className="blog-item  style-2 h5-blog-item wow fadeInRight" data-wow-delay=".4s">
                        <div className="blog-thumb">
                          <a href="/blog-details"><img src="/assets/images/blog/h5-blog-2.webp" alt="" /></a>
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
                      <div className="blog-item style-2 h5-blog-item wow fadeInRight" data-wow-delay=".5s">
                        <div className="blog-thumb">
                          <a href="/blog-details"><img src="/assets/images/blog/h5-blog-3.webp" alt="" /></a>
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
                  </div>
                </div>
              </div>
            </section>
            {/* end: Blog Section */}
            {/* start: Cta Section */}
            <section className="h9-cta-section section-gap-x">
              <div className="cta-bg" data-bg-image="/assets/images/cta/h9-cta-bg.webp" />
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="cta-content">
                      <h2 className="title text-anim"><span>Letâs Talk to</span> <span className="cta-img wow fadeInUp" data-wow-delay=".3s"><img src="/assets/images/team/team-1.webp" alt="" /><a className="tji-icon-btn" href="/contact"><i className="tji-arrow-right-long" /></a></span>
                        <span>Our Expert.</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Cta Section */}
          </main>
          {/* start: Footer Section */}
          <footer className="tj-footer-section footer-1 h7-footer h9-footer section-gap-x">
            <div className="footer-main-area  h7-footer-main h9-footer-main">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="footer-widget widget-subscribe h9-footer-subscribe wow fadeInUp" data-wow-delay=".3s">
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
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-widget widget-nav-menu h9-footer-widget-2 wow fadeInUp" data-wow-delay=".4s">
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
                    <div className="footer-widget widget-nav-menu h9-footer-widget-3 wow fadeInUp" data-wow-delay=".5s">
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
                  <div className="col-xl-3 col-lg-3 col-md-6">
                    <div className="footer-widget widget-contact h9-footer-contact style-2 wow fadeInUp" data-wow-delay=".6s">
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
            <div className="h9-footer-logo-area">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="h9-footer-logo wow fadeInUpBig" data-wow-delay=".3s">
                      <a href="/">
                        <img src="/assets/images/logos/logo.webp" alt="" />
                      </a>
                      <div className="award-logo-area h9-footer-award">
                        <div className="award-logo">
                          <img src="/assets/images/footer/award-logo-1.webp" alt="" />
                        </div>
                        <div className="award-logo">
                          <img src="/assets/images/footer/award-logo-2.webp" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tj-copyright-area h7-footer-copyright h9-footer-copyright">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="copyright-content-area">
                      <div className="copyright-text">
                        <p>© <span>2026</span>Â&nbsp;<a href="https://themeforest.net/user/theme-junction/portfolio" target="_blank">Bexon</a> All right reserved</p>
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

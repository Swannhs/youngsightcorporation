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
      {/* start: magic cursor */}
      <div id="magic-cursor">
        <div id="ball" />
      </div>
      {/* end: magic cursor */}
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
      <header className="header-area header-3 h10-header header-absolute section-gap-x">
        <div className="header-bottom">
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
      <header className="header-area header-3 h10-header  header-duplicate header-sticky section-gap-x">
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
            <section className="tj-banner-section-2 h10-hero section-gap-x zoom-on-scroll-wrapper">
              <div className="container">
                <div className="row flex-column-reverse flex-lg-row">
                  <div className="col-lg-4 col-xl-3">
                    <div className="h10-hero-award-wrapper">
                      <div className="h6-hero-history wow fadeInUp" data-wow-delay=".3s">
                        <div className="h6-hero-history-title" />
                        <p className="h6-hero-history-desc">Recognized by industry leaders, of our award-winning team has a
                          proven
                          record of delivering excellence across projects.</p>
                      </div>
                      <div className="circle-text-wrap wow bounceInLeft" data-wow-delay=".5s">
                        <span className="circle-text" data-bg-image="/assets/images/icons/award-rounded-text.svg" />
                        <div className="circle-icon"><i className="tji-w-dot" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-xl-9">
                    <div className="banner-content-2">
                      <h1 className="banner-title text-anim">Driving Innovation to Transform Business Futures <i className="tji-curve-arrow wow fadeInRight" data-wow-delay=".7s" />
                      </h1>
                      <div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
                        <a className="tj-primary-btn" href="/contact">
                          <span className="btn-text"><span>Get Started</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </a>
                        <div className="banner-desc">Recognized by industryaward leaders, award winning team has be a proven
                          record.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid gap-0">
                <div className="row">
                  <div className="col-12">
                    <div className="h10-hero-banner zoom-on-scroll">
                      <div className="h10-hero-banner-img h10-hero-banner-video">
                        <video autoPlay loop muted playsInline data-wf-ignore="true" data-object-fit="cover" poster="/assets/images/hero/h10-hero-banner.webp">
                          <source src="/assets/video/h10-banner-videio.mp4" data-wf-ignore="true" />
                          <source src="/assets/video/h10-banner-videio.mp4" data-wf-ignore="true" />
                        </video>
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
            {/* end: Banner Section */}
            {/* start: Service Section */}
            <section className="h5-service-section h10-service section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap style-8">
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-3">
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" /> Our
                            Solutions</span>
                          <h2 className="sec-title text-anim">Tailor Business Solutions for Corporates.</h2>
                        </div>
                        <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                          <a className="tj-primary-btn" href="/service">
                            <span className="btn-text"><span>Explore More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-12">
                    <div className="service-wrapper h10-service-wrapper wow fadeInUp" data-wow-delay=".4s">
                      <div className="swiper h10-service-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="service-item style-4 wow fadeInUp" data-wow-delay=".1s">
                              <h6 className="h10-service-sln">01.</h6>
                              <div className="service-icon">
                                <i className="tji-service-1" />
                              </div>
                              <div className="service-content">
                                <h4 className="title"><a href="/service-details">Business Strategy Development</a></h4>
                                <p className="desc">Through a combination of data-driven insights and innovative approaches
                                  business.</p>
                                <a className="text-btn" href="/service-details">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-4 wow fadeInUp" data-wow-delay=".3s">
                              <h6 className="h10-service-sln">02.</h6>
                              <div className="service-icon">
                                <i className="tji-service-2" />
                              </div>
                              <div className="service-content">
                                <h4 className="title"><a href="/service-details">Customer Experience Solutions</a></h4>
                                <p className="desc">Through a combination of data-driven insights and innovative approaches
                                  business.</p>
                                <a className="text-btn" href="/service-details">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-4 wow fadeInUp" data-wow-delay=".7s">
                              <h6 className="h10-service-sln">03.</h6>
                              <div className="service-icon">
                                <i className="tji-service-3" />
                              </div>
                              <div className="service-content">
                                <h4 className="title"><a href="/service-details">Sustainability and ESG Consulting</a></h4>
                                <p className="desc">Through a combination of data-driven insights and innovative approaches
                                  business.</p>
                                <a className="text-btn" href="/service-details">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-4 wow fadeInUp" data-wow-delay=".5s">
                              <h6 className="h10-service-sln">04.</h6>
                              <div className="service-icon">
                                <i className="tji-service-5" />
                              </div>
                              <div className="service-content">
                                <h4 className="title"><a href="/service-details">Training and Development Programs</a></h4>
                                <p className="desc">Through a combination of data-driven insights and innovative approaches
                                  business.</p>
                                <a className="text-btn" href="/service-details">
                                  <span className="btn-text"><span>Learn More</span></span>
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
            {/* end: Service Section */}
            {/* start: Marquee Section */}
            <section className="tj-marquee-section section-gap-x">
              <div className="marquee-wrapper">
                <div className="swiper marquee-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide marquee-item">
                      <h4 className="marquee-text">Growth</h4>
                      <div className="marquee-img">
                        <img src="/assets/images/marquee/marquee-1.webp" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide marquee-item">
                      <h4 className="marquee-text">Leadership</h4>
                      <div className="marquee-img">
                        <img src="/assets/images/marquee/marquee-2.webp" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide marquee-item">
                      <h4 className="marquee-text">Enterprise</h4>
                      <div className="marquee-img">
                        <img src="/assets/images/marquee/marquee-1.webp" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide marquee-item">
                      <h4 className="marquee-text">Leadership</h4>
                      <div className="marquee-img">
                        <img src="/assets/images/marquee/marquee-2.webp" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide marquee-item">
                      <h4 className="marquee-text">Enterprise</h4>
                      <div className="marquee-img">
                        <img src="/assets/images/marquee/marquee-1.webp" alt="" />
                      </div>
                    </div>
                    <div className="swiper-slide marquee-item">
                      <h4 className="marquee-text">Leadership</h4>
                      <div className="marquee-img">
                        <img src="/assets/images/marquee/marquee-2.webp" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Marquee Section */}
            {/* start: About Section */}
            <section className="h10-about section-gap">
              <div className="container">
                <div className="row flex-column-reverse flex-md-row ">
                  <div className="col-12 col-lg-5 d-block d-md-none d-lg-block">
                    <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
                      <div className="about-img overflow-hidden">
                        <img data-speed=".8" src="/assets/images/about/h10-about-banner.webp" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7">
                    <div className="h10-about-content-wrapper">
                      <div className="sec-heading style-3 ">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" /> ABOUT OUR
                          COMPANY</span>
                        <h2 className="sec-title title-highlight wow fadeInUp" data-wow-delay=".3s">Powering Innovation Through
                          Partnerships with our Brands and Many Companies.
                        </h2>
                      </div>
                      <div className="row">
                        <div className="col-12 col-md-6 d-none d-md-block d-lg-none">
                          <div className="about-img-area h10-about-banner wow bounceInLeft" data-wow-delay=".3s">
                            <div className="about-img">
                              <img src="/assets/images/about/h10-about-banner.webp" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-12">
                          <div className="h10-about-content">
                            <div className="customers-box style-3 h10-about-clients wow fadeInUp" data-wow-delay=".4s">
                              <div className="customers">
                                <ul>
                                  <li className="wow fadeInLeft" data-wow-delay=".2s"><img src="/assets/images/testimonial/client-1.webp" alt="" /></li>
                                  <li className="wow fadeInLeft" data-wow-delay=".3s"><img src="/assets/images/testimonial/client-2.webp" alt="" /></li>
                                  <li className="wow fadeInLeft" data-wow-delay=".4s"><img src="/assets/images/testimonial/client-3.webp" alt="" /></li>
                                  <li className="wow fadeInLeft" data-wow-delay=".5s"><span><i className="tji-plus" /></span></li>
                                </ul>
                              </div>
                            </div>
                            <p className="desc wow fadeInUp" data-wow-delay=".4s">Recognized by industryaward leaders, award
                              winning
                              team has be a proven record.</p>
                            <div className="h9-about-funfact h10-about-funfact">
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
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: About Section */}
            {/* start: Process Section */}
            <section className="h10-process section-gap section-gap-x tj-sticky-panel-3-container">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-5">
                    <div className="sec-heading style-3 tj-sticky-panel-3">
                      <span className="sub-title"><i className="tji-box" /> Our PROCESS</span>
                      <h2 className="sec-title text-anim">Seamless Process and
                        Great Results.</h2>
                      <div className="h10-process-more">
                        <a className="tj-primary-btn" href="/aboout">
                          <span className="btn-text"><span>Explore More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-7 ">
                    <div className="h10-process-wrapper">
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Step 01</h6>
                        <div className="h10-process-icon">
                          <i className="tji-growth" />
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Discovery &amp; Planning</h4>
                          <p className="desc">he first step in our process is understanding your unique business needs,
                            objectives,
                            and our cutomes challenges. he first step in our process is understanding your unique business
                            needs, objectives, and our cutomes challenges. he first step in our process is understanding .
                          </p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Step 02</h6>
                        <div className="h10-process-icon">
                          <i className="tji-worldwide" />
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Execution &amp; Delivery</h4>
                          <p className="desc">he first step in our process is understanding your unique business needs,
                            objectives,
                            and our cutomes challenges. he first step in our process is understanding your unique business
                            needs, objectives, and our cutomes challenges. he first step in our process is understanding .
                          </p>
                        </div>
                      </div>
                      <div className="h10-process-item tj-sticky-panel-3">
                        <h6 className="h10-process-sln">Step 03</h6>
                        <div className="h10-process-icon">
                          <i className="tji-complete" />
                        </div>
                        <div className="h10-process-content">
                          <h4 className="title">Review &amp; Support</h4>
                          <p className="desc">he first step in our process is understanding your unique business needs,
                            objectives,
                            and our cutomes challenges. he first step in our process is understanding your unique business
                            needs, objectives, and our cutomes challenges. he first step in our process is understanding .
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
              <div className="bg-shape-3">
                <img src="/assets/images/shape/h7-testimonial-shape-blur.svg" alt="" />
              </div>
            </section>
            {/* end: Process Section */}
            {/* start: Project Section */}
            <section className="h10-project section-gap tj-sticky-panel-container">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Latest
                        Projects</span>
                      <h2 className="sec-title text-anim">Breaking Boundaries, Building Dreams.</h2>
                      <div className="portfolio-filter h10-project-filter text-center wow fadeInUp" data-wow-delay=".5s">
                        <div className="button-group h10-project-button-group filter-button-group">
                          <button data-filter="*" className="active">All</button>
                          <button data-filter=".success">Success</button>
                          <button data-filter=".innovate">Innovate</button>
                          <button data-filter=".lead">Lead</button>
                          <button data-filter=".impact">Impact</button>
                          <div className="active-bg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="project-wrapper h7-project-wrapper h10-project-wrapper  portfolio-filter-box">
                      <div className="portfolio-sizer" />
                      <div className="gutter-sizer" />
                      <div className="project-item h4-project-item portfolio-filter-item impact innovate">
                        <div className="project-img " data-cursor-text="View Project">
                          <a href="/portfolio-details">
                            <img src="/assets/images/project/h10-project-1.webp" alt="Image" />
                          </a>
                        </div>
                        <div className="project-content">
                          <div className="project-text">
                            <div>
                              <h4 className="title"><a href="/portfolio-details">Event Management Platform</a></h4>
                              <span className="categories"><a href="/portfolio-details">Connect</a></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="project-item h4-project-item portfolio-filter-item success lead impact">
                        <div className="project-img " data-cursor-text="View Project">
                          <a href="/portfolio-details">
                            <img src="/assets/images/project/h10-project-2.webp" alt="Image" />
                          </a>
                        </div>
                        <div className="project-content">
                          <div className="project-text">
                            <div>
                              <h4 className="title"><a href="/portfolio-details">Digital Marketing Campaign</a></h4>
                              <span className="categories"><a href="/portfolio-details">Empower</a></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="project-item h4-project-item portfolio-filter-item lead innovate">
                        <div className="project-img " data-cursor-text="View Project">
                          <a href="/portfolio-details">
                            <img src="/assets/images/project/h10-project-3.webp" alt="Image" />
                          </a>
                        </div>
                        <div className="project-content">
                          <div className="project-text">
                            <div>
                              <h4 className="title"><a href="/portfolio-details">Interactive Learning Platform</a></h4>
                              <span className="categories"><a href="/portfolio-details">Support</a></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="project-item h4-project-item portfolio-filter-item success innovate">
                        <div className="project-img " data-cursor-text="View Project">
                          <a href="/portfolio-details">
                            <img src="/assets/images/project/h10-project-4.webp" alt="Image" />
                          </a>
                        </div>
                        <div className="project-content">
                          <div className="project-text">
                            <div>
                              <h4 className="title"><a href="/portfolio-details">Environmental Impact Dashboard</a></h4>
                              <span className="categories"><a href="/portfolio-details">Business</a></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Project Section */}
            {/* start: Testimonial Section */}
            <section className="h10-testimonial section-gap section-gap-x">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-3">
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Clients
                            Feedback</span>
                          <h2 className="sec-title text-anim">Our Clients Share Their Success Stories.</h2>
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
              <div className="container-fluid gap-0">
                <div className="row">
                  <div className="col-12">
                    <div className="testimonial-wrapper h8-testimonial-wrapper h10-testimonial-wrapper wow fadeInUp" data-wow-delay=".3s">
                      <div className="swiper swiper-container h10-testimonial-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testimonial-item">
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
                              <div className="desc">
                                <p>Working with Bexon has been a game-changer for our business. Their team's
                                  professionalism,
                                  attention to detail, and innovative solutions have helped us achieve
                                  our goals faster than we imagined. We truly feel like a valued partner.</p>
                              </div>
                              <div className="star-ratings">
                                <div className="fill-ratings" style={{width: '100%'}}>
                                  <span>âââââ</span>
                                </div>
                                <div className="empty-ratings">
                                  <span>âââââ</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-item">
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
                              <div className="desc">
                                <p>The results weâve seen after partnering with Bexon are beyond our expectations. They not
                                  only
                                  understood our vision but also brought new ideas to the table that have taken our business
                                  to
                                  the next level. Their expertise and commitment to success make them a trusted.
                                </p>
                              </div>
                              <div className="star-ratings">
                                <div className="fill-ratings" style={{width: '100%'}}>
                                  <span>âââââ</span>
                                </div>
                                <div className="empty-ratings">
                                  <span>âââââ</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-item">
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
                              <div className="desc">
                                <p>Weâve been working with Bexonfor years, and they continue to deliver outstanding results.
                                  Their team is proactive and responsive to ensure our needs are
                                  met. Theyâve become a key contributor to our growth and success that really help us"
                                </p>
                              </div>
                              <div className="star-ratings">
                                <div className="fill-ratings" style={{width: '100%'}}>
                                  <span>âââââ</span>
                                </div>
                                <div className="empty-ratings">
                                  <span>âââââ</span>
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
            {/* start: Pricing Section */}
            <section className="h10-pricing section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Our PRICING
                        PLAN</span>
                      <h2 className="sec-title text-anim">Our Pricing Plan.</h2>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4">
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-box h10-pricing-box wow fadeInUp" data-wow-delay=".5s">
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
                      </div>
                      <div className="pricing-body">
                        <div className="list-items h10-pricing-list">
                          <div className="title-wrapper">
                            <h5 className="title">Features</h5>
                            <p className="desc">Includes:</p>
                          </div>
                          <ul>
                            <li><i className="tji-list" />Access to core services</li>
                            <li><i className="tji-list" />Limited customer support (email)</li>
                            <li><i className="tji-list" />1 project per month</li>
                            <li><i className="tji-list" />Basic reporting and analytics</li>
                            <li><i className="tji-list" />Standard templates and tools</li>
                            <li><i className="tji-list" />Basic performance tracking</li>
                          </ul>
                        </div>
                        <div className="pricing-btn">
                          <a className="text-btn" href="/contact">
                            <span className="btn-text"><span>Chose Plan</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-box h10-pricing-box active wow fadeInUp" data-wow-delay=".7s">
                      <div className="pricing-header">
                        <div className="pricing-badge">
                          <i className="tji-star-2" /> <span>Popular</span>
                        </div>
                        <h4 className="package-name">Standard Plan</h4>
                        <div className="package-desc">
                          <p>Complete Business Solutions</p>
                        </div>
                        <div className="package-price">
                          <span className="package-currency">$</span>
                          <span className="price-number">249</span>
                          <span className="package-period">/per month</span>
                        </div>
                      </div>
                      <div className="pricing-body">
                        <div className="list-items">
                          <div className="title-wrapper">
                            <h5 className="title">Features</h5>
                            <p className="desc">Includes all Basic plan and Plus:</p>
                          </div>
                          <ul>
                            <li><i className="tji-list" />All features in Basic Plan</li>
                            <li><i className="tji-list" />Priority customer support</li>
                            <li><i className="tji-list" />Up to 3 projects per month</li>
                            <li><i className="tji-list" />Monthly performance reviews</li>
                            <li><i className="tji-list" />Collaboration tools for team</li>
                            <li><i className="tji-list" />Custom templates</li>
                          </ul>
                        </div>
                        <div className="pricing-btn">
                          <a className="text-btn" href="/contact">
                            <span className="btn-text"><span>Chose Plan</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="pricing-box h10-pricing-box wow fadeInUp" data-wow-delay=".9s">
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
                      </div>
                      <div className="pricing-body">
                        <div className="list-items">
                          <div className="title-wrapper">
                            <h5 className="title">Features</h5>
                            <p className="desc">Includes all Standard plan and Plus:</p>
                          </div>
                          <ul>
                            <li><i className="tji-list" />All features in Standard Plan</li>
                            <li><i className="tji-list" />Dedicated account manager</li>
                            <li><i className="tji-list" />Tailored strategy sessions</li>
                            <li><i className="tji-list" />Quarterly performance audits</li>
                            <li><i className="tji-list" />Priority support</li>
                            <li><i className="tji-list" />24/7 emergency service</li>
                          </ul>
                        </div>
                        <div className="pricing-btn">
                          <a className="text-btn" href="/contact">
                            <span className="btn-text"><span>Chose Plan</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Pricing Section */}
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
            <section className="h10-blog section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap ">
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-3">
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Insights &amp;
                            Ideas</span>
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
                  <div className="col-12 ">
                    <div className="blog-wrapper h8-blog-wrapper h10-blog-wrapper ">
                      <div className="blog-item style-2 wow fadeInUp" data-wow-delay=".3s">
                        <div className="blog-thumb">
                          <a href="/blog-details"><img src="/assets/images/blog/blog-1.webp" alt="" /></a>
                        </div>
                        <div className="blog-content">
                          <div className="blog-meta">
                            <div className="blog-date-wrapper">
                              <span className="blog-author">By <a href="/blog-details">Ellinien Loma</a></span>
                              <span className="blog-date">June 20, 2025</span>
                            </div>
                            <span className="categories"><a href="/blog-details">Business</a></span>
                          </div>
                          <div className="title-area">
                            <h3 className="title"><a href="/blog-details">Harnessing Digital Transform a Roadmap
                                Businesses.</a></h3>
                            <a className="text-btn" href="/blog-details">
                              <span className="btn-text"><span>Read More</span></span>
                              <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="blog-item style-2 wow fadeInUp" data-wow-delay=".4s">
                        <div className="blog-thumb">
                          <a href="/blog-details"><img src="/assets/images/blog/blog-5.webp" alt="" /></a>
                        </div>
                        <div className="blog-content">
                          <div className="blog-meta">
                            <div className="blog-date-wrapper">
                              <span className="blog-author">By <a href="/blog-details">Ellinien Loma</a></span>
                              <span className="blog-date">June 20, 2025</span>
                            </div>
                            <span className="categories"><a href="/blog-details">Success</a></span>
                          </div>
                          <div className="title-area">
                            <h3 className="title"><a href="/blog-details">Mastering Change Management Lessons for
                                Businesses.</a></h3>
                            <a className="text-btn" href="/blog-details">
                              <span className="btn-text"><span>Read More</span></span>
                              <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="blog-item style-2 wow fadeInUp" data-wow-delay=".5s">
                        <div className="blog-thumb">
                          <a href="/blog-details"><img src="/assets/images/blog/blog-4.webp" alt="" /></a>
                        </div>
                        <div className="blog-content">
                          <div className="blog-meta">
                            <div className="blog-date-wrapper">
                              <span className="blog-author">By <a href="/blog-details">Ellinien Loma</a></span>
                              <span className="blog-date">June 20, 2025</span>
                            </div>
                            <span className="categories"><a href="/blog-details">Connect</a></span>
                          </div>
                          <div className="title-area">
                            <h3 className="title"><a href="/blog-details">Leading Through Change: Proven Lessons for
                                Effective
                                Change Business.</a></h3>
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
              </div>
            </section>
            {/* end: Blog Section */}
          </main>
          {/* start: Footer Section */}
          <footer className="tj-footer-section footer-2 h5-footer h10-footer section-gap-x">
            <div className="footer-main-area">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-5 col-lg-4 col-md-6">
                    <div className="footer-widget footer-col-1">
                      <h2 className="h10-footer-title text-anim">
                        Building Better Business from Together?
                      </h2>
                      <a className="text-btn wow fadeInUp" data-wow-delay=".3s" href="mailto:hello@bexon.com">
                        <span className="btn-text"><span>hello@bexon.com</span></span>
                      </a>
                      <div className="bg-shape-widget wow fadeInUpBig" data-wow-delay=".7s">
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-3 col-md-6">
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
                  <div className="col-xl-2 col-lg-2 col-md-6">
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
                  <div className="col-xl-3 col-lg-3 col-md-6">
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
            <div className="h10-footer-subscribe-wrapper wow fadeInUp" data-wow-delay=".5s">
              <div className="container">
                <div className="row align-items-end">
                  <div className="col-12 col-lg-4 col-xl-5">
                    <div className="award-logo-area ">
                      <div className="award-logo">
                        <img src="/assets/images/footer/award-logo-white-1.webp" alt="" />
                      </div>
                      <div className="award-logo">
                        <img src="/assets/images/footer/award-logo-white-2.webp" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-8 col-xl-7">
                    <div className="footer-subscribe h5-footer-subscribe">
                      <h3 className="title text-anim">Subscribe to Our Newsletter.</h3>
                      <div className="subscribe-form">
                        <form action="#">
                          <input type="email" name="email" placeholder="Enter email" />
                          <button className="tj-primary-btn d-none d-sm-flex" type="submit">
                            <span className="btn-text"><span>Subscribe</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </button>
                          <label htmlFor="agree"><input id="agree" type="checkbox" />Agree to our <a href="#">Terms &amp;
                              Condition?</a></label>
                          <button className="tj-primary-btn d-flex d-sm-none" type="submit">
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
            <div className="tj-copyright-area-2 h5-footer-copyright">
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
              <img src="/assets/images/shape/pattern-2.svg" alt="" />
            </div>
            <div className="bg-shape-2">
              <img src="/assets/images/shape/pattern-3.svg" alt="" />
            </div>
            <div className="bg-shape-4 wow fadeInUpBig" data-wow-delay=".8s">
              <img src="/assets/images/shape/h10-footer-shape-blur-2.svg" alt="" />
            </div>
          </footer>
          {/* end: Footer Section */}
        </div>
      </div>
      {/* JS here */}
    </div>
    
  );
}

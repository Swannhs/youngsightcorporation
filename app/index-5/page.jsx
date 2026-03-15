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
      <header className="header-area header-2 header-5 header-absolute section-gap-x">
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
      </header>
      {/* end: Header Area */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-15" />
            {/* start: Banner Section */}
            <section className="h5-banner-section section-gap-x">
              <div className="banner-bg" data-bg-image="/assets/images/hero/h5-hero-img.webp" />
              <div className="h5-banner-area">
                <div className="h5-banner-content">
                  <h1 className="banner-title text-anim">Expert Solutions for <span className="tj-image-slider  wow zoomIn" data-wow-delay=".5s">
                      <img src="/assets/images/hero/title-img-2.webp" alt="" />
                      <img src="/assets/images/hero/title-img-3.webp" alt="" />
                      <img src="/assets/images/hero/title-img-4.webp" alt="" />
                      <img src="/assets/images/hero/title-img-5.webp" alt="" />
                      <img src="/assets/images/hero/title-img-6.webp" alt="" />
                    </span>
                    Modern Enterprises.</h1>
                  <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                    <a className="tj-primary-btn" href="/contact">
                      <span className="btn-text"><span>Get Started Now</span></span>
                      <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                    </a>
                  </div>
                </div>
                <div className="solution-box">
                  <span className="list-icon"><i className="tji-list" /></span>
                  <p className="desc">Committed to delivering innovative solutions that drive success. With a focus on quality.
                  </p>
                  <div className="hero-counter">
                    <span className="odometer" data-count={20}>0</span>
                    <span className="count-plus">M<sup>+</sup></span>
                  </div>
                </div>
              </div>
              <div className="bg-shape-1">
                <img src="/assets/images/shape/pattern-2.svg" alt="" />
              </div>
              <div className="bg-shape-2">
                <img src="/assets/images/shape/pattern-3.svg" alt="" />
              </div>
              <div className="banner-scroll wow fadeInDown" data-wow-delay="1.5s">
                <a href="#services" className="scroll-down tj-scroll-btn">
                  <span><i className="tji-arrow-down-long" /></span>
                  Scroll Down
                </a>
              </div>
            </section>
            {/* end: Banner Section */}
            {/* start: Service Section */}
            <section id="services" className="h5-service-section overflow-hidden section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap style-3">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Our
                        Solutions</span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-3">
                          <h2 className="sec-title text-anim">Tailor Business Solutions for Corporates.</h2>
                        </div>
                        <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                          <a className="tj-primary-btn" href="/contact">
                            <span className="btn-text"><span>Explore More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="service-wrapper wow fadeInUp" data-wow-delay=".4s">
                      <div className="swiper service-slider-2">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="service-item style-6">
                              <h4 className="title"><a href="/service-details">Business Strategy Development</a></h4>
                              <div className="service-icon">
                                <i className="tji-service-1" />
                              </div>
                              <div className="service-content">
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
                            <div className="service-item style-6">
                              <h4 className="title"><a href="/service-details">Customer Experience Solutions</a></h4>
                              <div className="service-icon">
                                <i className="tji-service-2" />
                              </div>
                              <div className="service-content">
                                <p className="desc">Developing personalized customer journeys to increase satisfaction and
                                  loyalty.
                                </p>
                                <a className="text-btn" href="/service-details">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-6">
                              <h4 className="title"><a href="/service-details">Sustainability &amp; ESG Consulting</a></h4>
                              <div className="service-icon">
                                <i className="tji-service-3" />
                              </div>
                              <div className="service-content">
                                <p className="desc">Provide tailored strategies that not only drive long-term value but also
                                  build
                                  trust.</p>
                                <a className="text-btn" href="/service-details">
                                  <span className="btn-text"><span>Learn More</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="service-item style-6">
                              <h4 className="title"><a href="/service-details">Training Development Programs</a></h4>
                              <div className="service-icon">
                                <i className="tji-service-4" />
                              </div>
                              <div className="service-content">
                                <p className="desc">Training Development Programs designed empower employees with skills,
                                  knowledge.
                                </p>
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
            {/* start: About Section */}
            <section className="h5-about section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="about-content-area style-3 h5-about-content">
                      <div className="sec-heading style-3">
                        <div className="subtitle-text">
                          <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Our
                            PARTNERSHIP</span>
                          <div className="h5-about-counter"><span className="odometer" data-count={30}>0</span><span className="h5-about-counter-symbol">+</span>
                          </div>
                        </div>
                        <div className="h5-about-content-right">
                          <div className="h5-sec-title-wrapper">
                            <h2 className="sec-title title-highlight">Powering Innovation Through Partnerships with Brands and
                              Many
                              Companies.
                            </h2>
                            <div className="about-btn-area-2 wow fadeInUp" data-wow-delay="1s">
                              <a className="tj-primary-btn" href="/about">
                                <span className="btn-text"><span>More Partners</span></span>
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
              <div className="swiper client-slider client-slider-3">
                <div className="swiper-wrapper">
                  <div className="swiper-slide client-item h5-client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/h5-brand-1.webp" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide client-item h5-client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/h5-brand-2.webp" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide client-item h5-client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/h5-brand-3.webp" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide client-item h5-client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/h5-brand-4.webp" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide client-item h5-client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/h5-brand-5.webp" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide client-item h5-client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/h5-brand-6.webp" alt="" />
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
                <img src="/assets/images/shape/shape-blur.svg" alt="" />
              </div>
            </section>
            {/* end: About Section */}
            {/* start: Strategy Slider */}
            <section className="h5-strategy section-gap ">
              <div className="container gap-30-30">
                <div className="row ">
                  <div className="col-12">
                    <div className="sec-heading style-3 h5-strategy-heading">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Choose the
                        Best</span>
                      <h2 className="sec-title text-anim ">Committed Delivering Measurable Results and Building from the Lasting
                        Relationships through out trust and innovation and corporate shared</h2>
                      <a className="tj-primary-btn" href="/about">
                        <span className="btn-text"><span>Learn More</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                      </a>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="h5-strategy-item h5-strategy-item-1 wow fadeInUp" data-wow-delay=".3s">
                      <h4 className="h5-strategy-title">Rebranding Strategy for a Growing</h4>
                      <div className="h5-strategy-avatar">
                        <img src="/assets/images/strategy/strategy-avatar.webp" alt="" />
                      </div>
                      <div className="h5-strategy-counter">
                        <div className="count-inner h5-strategy-counter-inner">
                          <div className="inline-content">
                            <span className="odometer countup-number" data-count={200} />
                          </div>
                          <span className="count-text">Satisfied customers work with our Bexon.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="h5-strategy-item h5-strategy-item-2 wow fadeInUp" data-wow-delay=".4s">
                      <h4 className="h5-strategy-title">Rebranding Strategy for a Growing</h4>
                      <div className="h5-strategy-chart">
                        <img src="/assets/images/strategy/strategy-chart.webp" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="h5-strategy-item h5-strategy-item-3 wow fadeInUp" data-wow-delay=".5s">
                      <h4 className="h5-strategy-title">Rebranding Strategy for a Growing</h4>
                      <p className="h5-strategy-desc">Our team are always available to addressed our concerns, providing quick
                        solution.</p>
                      <div className="h5-strategy-tag-wrapper">
                        <a className="h5-strategy-tag" href="#">
                          Growth
                        </a>
                        <a className="h5-strategy-tag" href="#">
                          Success
                        </a>
                        <a className="h5-strategy-tag" href="#">
                          Innovate
                        </a>
                        <a className="h5-strategy-tag" href="#">
                          Lead
                        </a>
                        <a className="h5-strategy-tag" href="#">
                          Impact
                        </a>
                        <a className="h5-strategy-tag" href="#">
                          Focus
                        </a>
                        <a className="h5-strategy-tag" href="#">
                          Tech
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Strategy Slider */}
            {/* start: Working process Section */}
            <section className="h5-working-process section-gap section-gap-x ">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading sec-heading-centered style-3">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" /> OUR PROCESS</span>
                      <h2 className="sec-title text-anim  text-white">Seamless Process and
                        Great Results.</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h5-working-process-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="working-process-area h5-working-process-wrapper">
                        <div className="process-item h5-working-process-item wow bounceInUp" data-wow-delay=".3s">
                          <h5 className="h5-working-process-indicator">Step 01</h5>
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
                        <div className="process-item h5-working-process-item wow bounceInUp" data-wow-delay=".4s">
                          <h5 className="h5-working-process-indicator">Step 02</h5>
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
                        <div className="process-item h5-working-process-item wow bounceInUp" data-wow-delay=".5s">
                          <h5 className="h5-working-process-indicator">Step 03</h5>
                          <div className="process-step">
                            <span>03</span>
                          </div>
                          <div className="process-content">
                            <h4 className="title">Review &amp; Support</h4>
                            <p className="desc">After project completion, we conduct a thorough review to ensure everything
                              aligns
                              with your goals and requirements.</p>
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
              <div className="bg-shape-3">
                <img src="/assets/images/shape/shape-blur.svg" alt="" />
              </div>
              <div className="bg-shape-4">
                <img src="/assets/images/shape/shape-blur.svg" alt="" />
              </div>
            </section>
            {/* end: Working process Section */}
            {/* start: Project Section */}
            <section className="h5-project">
              <div className="tj-scroll-slider  section-gap">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="sec-heading-wrap style-3">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Proud
                          Projects</span>
                        <div className="heading-wrap-content">
                          <div className="sec-heading style-3">
                            <h2 className="sec-title text-anim">Breaking Boundaries, Building Dreams.</h2>
                          </div>
                          <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                            <a className="tj-primary-btn" href="/contact">
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
                      <div className="project-wrapper h5-project-wrapper">
                        <div className="h5-project-item-wrapper tj-scroll-slider-item">
                          <div className="project-item h4-project-item  h5-project-item">
                            <div className="project-img">
                              <img src="/assets/images/project/h5-project-1.webp" alt="Image" />
                            </div>
                            <div className="project-content">
                              <span className="categories"><a href="/portfolio-details">Business</a></span>
                              <div className="project-text">
                                <h3 className="title"><a href="/portfolio-details">Event Management Platform</a></h3>
                              </div>
                              <p className="desc">Through a combination of data-driven insights and innovative approaches, we
                                work
                                closely with you to develop customized.
                              </p>
                              <a className="tj-primary-btn" href="/portfolio-details">
                                <span className="btn-text"><span>Learn More</span></span>
                                <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="h5-project-item-wrapper  tj-scroll-slider-item">
                          <div className="project-item h4-project-item  h5-project-item">
                            <div className="project-img">
                              <img src="/assets/images/project/h5-project-2.webp" alt="Image" />
                            </div>
                            <div className="project-content">
                              <span className="categories"><a href="/portfolio-details">Business</a></span>
                              <div className="project-text">
                                <h3 className="title"><a href="/portfolio-details">Rebranding Strategy for a Growing</a>
                                </h3>
                              </div>
                              <p className="desc">Through a combination of data-driven insights and innovative approaches, we
                                work
                                closely with you to develop customized.
                              </p>
                              <a className="tj-primary-btn" href="/portfolio-details">
                                <span className="btn-text"><span>Learn More</span></span>
                                <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="h5-project-item-wrapper tj-scroll-slider-item">
                          <div className="project-item h4-project-item  h5-project-item ">
                            <div className="project-img">
                              <img src="/assets/images/project/h5-project-3.webp" alt="Image" />
                            </div>
                            <div className="project-content">
                              <span className="categories"><a href="/portfolio-details">Business</a></span>
                              <div className="project-text">
                                <h3 className="title"><a href="/portfolio-details">Event Management Platform</a></h3>
                              </div>
                              <p className="desc">Through a combination of data-driven insights and innovative approaches, we
                                work
                                closely with you to develop customized.
                              </p>
                              <a className="tj-primary-btn" href="/portfolio-details">
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
            </section>
            {/* end: Project Section */}
            {/* start: Testimonial Section */}
            <section className="h5-testimonial section-gap section-gap-x">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-12">
                    <div className="sec-heading style-3 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />CLIENT
                        FEEDBACKS</span>
                      <h2 className="sec-title text-anim">Success Stories Fuel
                        our Innovation.</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="testimonial-wrapper h5-testimonial-wrapper wow fadeInUp" data-wow-delay=".5s">
                      <div className="swiper swiper-container h5-testimonial-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <div className="h5-testimonial-author-wrapper">
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
                                <div className="star-ratings">
                                  <div className="fill-ratings" style={{width: '100%'}}>
                                    <span>âââââ</span>
                                  </div>
                                  <div className="empty-ratings">
                                    <span>âââââ</span>
                                  </div>
                                </div>
                              </div>
                              <div className="desc">
                                <p>âWorking with Bexon has been a game-changer for our business. Their team's
                                  professionalism,
                                  attention to detail, and innovative solutions have helped us streamline operations our
                                  goals
                                  faster than imagined. We truly feel like a valued partner.â</p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <div className="h5-testimonial-author-wrapper">
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
                                <div className="star-ratings">
                                  <div className="fill-ratings" style={{width: '100%'}}>
                                    <span>âââââ</span>
                                  </div>
                                  <div className="empty-ratings">
                                    <span>âââââ</span>
                                  </div>
                                </div>
                              </div>
                              <div className="desc">
                                <p>âWorking with Bexon has been a game-changer for our business. Their team's
                                  professionalism,
                                  attention to detail, and innovative solutions have helped us streamline operations our
                                  goals
                                  faster than imagined. We truly feel like a valued partner.â</p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <div className="h5-testimonial-author-wrapper">
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
                                <div className="star-ratings">
                                  <div className="fill-ratings" style={{width: '100%'}}>
                                    <span>âââââ</span>
                                  </div>
                                  <div className="empty-ratings">
                                    <span>âââââ</span>
                                  </div>
                                </div>
                              </div>
                              <div className="desc">
                                <p>âWorking with Bexon has been a game-changer for our business. Their team's
                                  professionalism,
                                  attention to detail, and innovative solutions have helped us streamline operations our
                                  goals
                                  faster than imagined. We truly feel like a valued partner.â</p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <div className="h5-testimonial-author-wrapper">
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
                                <div className="star-ratings">
                                  <div className="fill-ratings" style={{width: '100%'}}>
                                    <span>âââââ</span>
                                  </div>
                                  <div className="empty-ratings">
                                    <span>âââââ</span>
                                  </div>
                                </div>
                              </div>
                              <div className="desc">
                                <p>âWorking with Bexon has been a game-changer for our business. Their team's
                                  professionalism,
                                  attention to detail, and innovative solutions have helped us streamline operations our
                                  goals
                                  faster than imagined. We truly feel like a valued partner.â</p>
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
            <section className="h5-pricing section-gap">
              <div className="container gap-30-30">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap style-3">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />FLEXIBLE
                        PRICING</span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-3">
                          <h2 className="sec-title text-anim">Our Pricing Plan.</h2>
                        </div>
                        <div className="wow fadeInUp" data-wow-delay=".5s">
                          <p className="desc">Our team is always available to address your concerns, providing quick.</p>
                        </div>
                        <div className="h5-pricing-tab-controllers wow fadeInUp" data-wow-delay=".6s" role="tablist">
                          <button type="button" className="h5-pricing-tab-controller active" data-bs-target="#monthlyPackageContent" data-bs-toggle="tab">
                            Monthly
                          </button>
                          <button type="button" className="h5-pricing-tab-controller" data-bs-target="#yearlyPackageContent" data-bs-toggle="tab">
                            Yearly
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row  ">
                  <div className="col-12">
                    <div className="tab-content  package__tab__content ">
                      <div className="tab-pane active show" id="monthlyPackageContent">
                        <div className="h5-pricing-box-wrapper">
                          <div className="row ">
                            <div className="col-xl-4 col-md-6">
                              <div className="pricing-box h5-pricing-box h5-pricing-box-basic wow fadeInUp" data-wow-delay=".3s">
                                <div className="pricing-header">
                                  <h4 className="package-name">Basic Plan</h4>
                                  <div className="package-price">
                                    <span className="package-currency">$</span>
                                    <span className="price-number">99</span>
                                    <span className="package-period">/per month</span>
                                  </div>
                                  <div className="package-desc">
                                    <p>Through a combination of the our data driven insights and innovative approaches.</p>
                                  </div>
                                </div>
                                <div className="list-items">
                                  <h6 className="h5-pricing-list-title">Plan Include:</h6>
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
                            <div className="col-xl-4 col-md-6">
                              <div className="pricing-box h5-pricing-box active wow fadeInUp" data-wow-delay=".4s">
                                <div className="pricing-header">
                                  <h4 className="package-name">Standard Plan</h4>
                                  <div className="package-price">
                                    <span className="package-currency">$</span>
                                    <span className="price-number">249</span>
                                    <span className="package-period">/per month</span>
                                  </div>
                                  <div className="package-desc">
                                    <p>Through a combination of the our data driven insights and innovative approaches.</p>
                                  </div>
                                </div>
                                <div className="list-items">
                                  <h6 className="h5-pricing-list-title">Plan Include:</h6>
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
                            <div className="col-xl-4 col-md-6">
                              <div className="pricing-box h5-pricing-box h5-pricing-box-premium wow fadeInUp" data-wow-delay=".5s">
                                <div className="pricing-header">
                                  <h4 className="package-name">Premium Plan</h4>
                                  <div className="package-price">
                                    <span className="package-currency">$</span>
                                    <span className="price-number">499</span>
                                    <span className="package-period">/per month</span>
                                  </div>
                                  <div className="package-desc">
                                    <p>Through a combination of the our data driven insights and innovative approaches.</p>
                                  </div>
                                </div>
                                <div className="list-items">
                                  <h6 className="h5-pricing-list-title">Plan Include:</h6>
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
                          <div className="bg-shape-1">
                            <img src="/assets/images/shape/pattern-2.svg" alt="" />
                          </div>
                          <div className="bg-shape-2">
                            <img src="/assets/images/shape/pattern-3.svg" alt="" />
                          </div>
                          <div className="bg-shape-3">
                            <img src="/assets/images/shape/shape-blur-2.svg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="tab-pane" id="yearlyPackageContent">
                        <div className="h5-pricing-box-wrapper">
                          <div className="row">
                            <div className="col-xl-4 col-md-6">
                              <div className="pricing-box h5-pricing-box h5-pricing-box-basic wow fadeInUp" data-wow-delay=".3s">
                                <div className="pricing-header">
                                  <h4 className="package-name">Basic Plan</h4>
                                  <div className="package-price">
                                    <span className="package-currency">$</span>
                                    <span className="price-number">299</span>
                                    <span className="package-period">/per year</span>
                                  </div>
                                  <div className="package-desc">
                                    <p>Through a combination of the our data driven insights and innovative approaches.</p>
                                  </div>
                                </div>
                                <div className="list-items">
                                  <h6 className="h5-pricing-list-title">Plan Include:</h6>
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
                            <div className="col-xl-4 col-md-6">
                              <div className="pricing-box h5-pricing-box active wow fadeInUp" data-wow-delay=".4s">
                                <div className="pricing-header">
                                  <h4 className="package-name">Standard Plan</h4>
                                  <div className="package-price">
                                    <span className="package-currency">$</span>
                                    <span className="price-number">549</span>
                                    <span className="package-period">/per year</span>
                                  </div>
                                  <div className="package-desc">
                                    <p>Through a combination of the our data driven insights and innovative approaches.</p>
                                  </div>
                                </div>
                                <div className="list-items">
                                  <h6 className="h5-pricing-list-title">Plan Include:</h6>
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
                            <div className="col-xl-4 col-md-6">
                              <div className="pricing-box h5-pricing-box h5-pricing-box-premium wow fadeInUp" data-wow-delay=".5s">
                                <div className="pricing-header">
                                  <h4 className="package-name">Premium Plan</h4>
                                  <div className="package-price">
                                    <span className="package-currency">$</span>
                                    <span className="price-number">899</span>
                                    <span className="package-period">/per year</span>
                                  </div>
                                  <div className="package-desc">
                                    <p>Through a combination of the our data driven insights and innovative approaches.</p>
                                  </div>
                                </div>
                                <div className="list-items">
                                  <h6 className="h5-pricing-list-title">Plan Include:</h6>
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
                          <div className="bg-shape-1">
                            <img src="/assets/images/shape/pattern-2.svg" alt="" />
                          </div>
                          <div className="bg-shape-2">
                            <img src="/assets/images/shape/pattern-3.svg" alt="" />
                          </div>
                          <div className="bg-shape-3">
                            <img src="/assets/images/shape/shape-blur-2.svg" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Pricing Section */}
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
            {/* start: Blog Section */}
            <section className="h5-blog section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading sec-heading-centered style-3">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />READ BLOGS</span>
                      <h2 className="sec-title text-anim">Strategies and Insights.</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="h5-blog-wrapper ">
                      <div className="blog-item style-2 h5-blog-item wow fadeInUp" data-wow-delay=".3s">
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
                            <h4 className="title"><a href="/blog-details">Innovative Solutions for every Business</a></h4>
                            <p className="desc">The curve. Whether you're looking to streamline operations, enhance customer
                              experiences, or explore new market opportunities, our tailored solutions are designed to
                              empower
                              your business.</p>
                          </div>
                          <a className="text-btn" href="/blog-details">
                            <span className="btn-text"><span>Read More</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </a>
                        </div>
                      </div>
                      <div className="blog-item  style-2 h5-blog-item wow fadeInUp" data-wow-delay=".4s">
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
                      <div className="blog-item style-2 h5-blog-item wow fadeInUp" data-wow-delay=".5s">
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
          </main>
          {/* start: Footer Section */}
          <footer className="tj-footer-section footer-2 h5-footer section-gap-x">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="footer-subscribe h5-footer-subscribe wow fadeInUp" data-wow-delay=".3s">
                      <h2 className="title text-anim">Subscribe to Our Newsletter.</h2>
                      <div className="subscribe-form">
                        <form action="#">
                          <input type="email" name="email" placeholder="Enter email" />
                          <button className="tj-primary-btn d-none d-sm-flex" type="submit">
                            <span className="btn-text"><span>Subscribe Now</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </button>
                          <label htmlFor="agree"><input id="agree" type="checkbox" />Agree to our <a href="#">Terms &amp;
                              Condition?</a></label>
                          <button className="tj-primary-btn d-flex d-sm-none" type="submit">
                            <span className="btn-text"><span>Subscribe Now</span></span>
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
                          <img src="/assets/images/footer/award-logo-white-1.webp" alt="" />
                        </div>
                        <div className="award-logo">
                          <img src="/assets/images/footer/award-logo-white-2.webp" alt="" />
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
          </footer>
          {/* end: Footer Section */}
        </div>
      </div>
      {/* JS here */}
    </div>
    
  );
}

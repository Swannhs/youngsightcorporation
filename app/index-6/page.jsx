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
      <header className="header-area header-1 h6-header header-absolute section-gap-x">
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
      <header className="header-area header-1 h6-header header-duplicate header-sticky section-gap-x">
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
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main id="primary" className="site-main">
            <div className="top-space-15" />
            {/* start: Banner Section */}
            <section className="tj-banner-section h6-hero section-gap-x">
              <div className="banner-area">
                <div className="banner-left-box">
                  <div className="banner-content">
                    <h1 className="banner-title title-anim">Innovative Solutions for a Brighter Future of Business.
                    </h1>
                    <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                      <Link className="tj-primary-btn" href="/contact">
                        <span className="btn-text"><span>Get Started</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                      </Link>
                    </div>
                    <div className="h6-hero-bottom wow fadeInLeft" data-wow-delay=".9s">
                      <div className="h6-hero-history">
                        <h4 className="h6-hero-history-title">Since 2008</h4>
                        <p className="h6-hero-history-desc">Recognized by industry leaders, of our award-winning team has a
                          proven
                          record of delivering excellence across projects.</p>
                      </div>
                      <div className="h6-hero-card-wrapper wow fadeInRight" data-wow-delay="1s">
                        <div className="swiper h6-hero-card-slider">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="h6-hero-card">
                                <div className="h6-hero-card-banner">
                                  <img src="/assets/images/hero/h6-hero-cart-1.webp" alt="" />
                                  <a className="h6-hero-card-video video-popup" href="https://youtu.be/gXFATcwrO-U" data-autoplay="true" data-vbtype="video">
                                    <i className="tji-play" />
                                  </a>
                                </div>
                                <div className="h6-hero-card-content">
                                  <h5 className="h6-hero-card-title"><Link href="/service-details">Business Strategies
                                      Development</Link>
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="h6-hero-card">
                                <div className="h6-hero-card-banner">
                                  <img src="/assets/images/hero/h6-hero-cart-2.webp" alt="" />
                                  <a className="h6-hero-card-video video-popup" href="https://youtu.be/gXFATcwrO-U" data-autoplay="true" data-vbtype="video">
                                    <i className="tji-play" />
                                  </a>
                                </div>
                                <div className="h6-hero-card-content">
                                  <h5 className="h6-hero-card-title"><Link href="/service-details">Customer Experience
                                      Solutions</Link>
                                  </h5>
                                </div>
                              </div>
                            </div>
                            <div className="swiper-slide">
                              <div className="h6-hero-card">
                                <div className="h6-hero-card-banner">
                                  <img src="/assets/images/hero/h6-hero-cart-3.webp" alt="" />
                                  <a className="h6-hero-card-video video-popup" href="https://youtu.be/gXFATcwrO-U" data-autoplay="true" data-vbtype="video">
                                    <i className="tji-play" />
                                  </a>
                                </div>
                                <div className="h6-hero-card-content">
                                  <h5 className="h6-hero-card-title"><Link href="/service-details">Sustainability and ESG
                                      Consulting</Link>
                                  </h5>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-pagination-area" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-shape-2">
                      <img src="/assets/images/shape/pattern-3.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="banner-right-box">
                  <div className="banner-img wow fadeInUp" data-wow-delay=".3s">
                    <img data-speed=".8" src="/assets/images/hero/h6-hero-banner.webp" alt="" />
                  </div>
                </div>
              </div>
            </section>
            {/* end: Banner Section */}
            {/* start: Choose Section */}
            <section id="choose" className="tj-choose-section h6-choose section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-2 style-6 text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Choose the
                        Best</span>
                      <h2 className="sec-title title-anim">Empowering Business with Expertise.</h2>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4 rightSwipeWrap">
                  <div className="col-lg-4">
                    <div className="choose-box h6-choose-box right-swipe">
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
                    <div className="choose-box h6-choose-box right-swipe">
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
                    <div className="choose-box h6-choose-box right-swipe">
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
            {/* start: About Section */}
            <section className="tj-about-section h6-about section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="about-content-area  h6-about-content  style-1 wow fadeInLeft" data-wow-delay=".2s">
                      <div className="sec-heading style-2 style-6">
                        <span className="sub-title  wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />OUR
                          COMPANY</span>
                        <h2 className="sec-title title-anim">Innovating Today for Build Smarter, Stronger, and More Successful.
                        </h2>
                        <p className="desc  wow fadeInUp" data-wow-delay=".8s">Our approach to customer experience is
                          comprehensive
                          and data-driven. We begin by
                          assessing your current customer touchpoints, our identifying areas for improvement, and using
                          insights
                          to develop.</p>
                      </div>
                      <div className="h6-about-funfact-wrapper">
                        <div className="h6-about-funfact">
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
                        <div className="h6-about-funfact-shape">
                          <img src="/assets/images/shape/about-counter-shape-blur.svg" alt="" />
                        </div>
                      </div>
                      <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                        <Link className="tj-primary-btn" href="/contact">
                          <span className="btn-text"><span>Know More Us</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="about-img-area h6-about-img wow fadeInLeft" data-wow-delay=".2s">
                      <div className="about-img overflow-hidden  wow fadeInRight" data-wow-delay=".8s">
                        <img data-speed=".8" src="/assets/images/about/h6-about-banner.webp" alt="" />
                      </div>
                      <div className="box-area h6-about-box  ">
                        <div className="customers-box wow fadeInUp" data-wow-delay="1s">
                          <div className="customers">
                            <ul>
                              <li className="wow fadeInLeft" data-wow-delay=".5s"><img src="/assets/images/testimonial/client-1.webp" alt="" /></li>
                              <li className="wow fadeInLeft" data-wow-delay=".6s"><img src="/assets/images/testimonial/client-2.webp" alt="" /></li>
                              <li className="wow fadeInLeft" data-wow-delay=".7s"><img src="/assets/images/testimonial/client-3.webp" alt="" /></li>
                              <li className="wow fadeInLeft" data-wow-delay=".8s"><span><i className="tji-plus" /></span></li>
                            </ul>
                          </div>
                          <h5 className="customers-text wow fadeInUp" data-wow-delay=".5s">We have 100+ happy customer.</h5>
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
            </section>
            {/* end: About Section */}
            {/* start: Service Section */}
            <section className="h6-service section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading sec-heading-centered style-2 style-6 ">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />OUR SOLUTIONS</span>
                      <h2 className="sec-title title-anim">Tailor Business Solutions for Corporates.</h2>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-12">
                    <div className="h6-service-slider swiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="h6-service-item">
                            <div className="h6-service-thumb">
                              <Link href="/service-details"><img src="/assets/images/service/h6-service-1.webp" alt="" /></Link>
                            </div>
                            <div className="h6-service-content">
                              <h5 className="h6-service-index">
                                01.
                              </h5>
                              <div className="h6-service-title-wrap">
                                <h4 className="title"><Link href="/blog-details">Business Strategies Development</Link>
                                </h4>
                                <Link className="text-btn" href="/service-details">
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="h6-service-item">
                            <div className="h6-service-thumb">
                              <Link href="/service-details"><img src="/assets/images/service/h6-service-2.webp" alt="" /></Link>
                            </div>
                            <div className="h6-service-content">
                              <h5 className="h6-service-index">
                                02.
                              </h5>
                              <div className="h6-service-title-wrap">
                                <h4 className="title"><Link href="/blog-details">Customer Experience Solutions</Link>
                                </h4>
                                <Link className="text-btn" href="/service-details">
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="h6-service-item">
                            <div className="h6-service-thumb">
                              <Link href="/service-details"><img src="/assets/images/service/h6-service-3.webp" alt="" /></Link>
                            </div>
                            <div className="h6-service-content">
                              <h5 className="h6-service-index">
                                03.
                              </h5>
                              <div className="h6-service-title-wrap">
                                <h4 className="title"><Link href="/blog-details">Sustainability and ESG Consulting</Link>
                                </h4>
                                <Link className="text-btn" href="/service-details">
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="h6-service-item">
                            <div className="h6-service-thumb">
                              <Link href="/service-details"><img src="/assets/images/service/h6-service-1.webp" alt="" /></Link>
                            </div>
                            <div className="h6-service-content">
                              <h5 className="h6-service-index">
                                01.
                              </h5>
                              <div className="h6-service-title-wrap">
                                <h4 className="title"><Link href="/blog-details">Business Strategies Development</Link>
                                </h4>
                                <Link className="text-btn" href="/service-details">
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="h6-service-item">
                            <div className="h6-service-thumb">
                              <Link href="/service-details"><img src="/assets/images/service/h6-service-2.webp" alt="" /></Link>
                            </div>
                            <div className="h6-service-content">
                              <h5 className="h6-service-index">
                                02.
                              </h5>
                              <div className="h6-service-title-wrap">
                                <h4 className="title"><Link href="/blog-details">Customer Experience Solutions</Link>
                                </h4>
                                <Link className="text-btn" href="/service-details">
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </Link>
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
            </section>
            {/* end: Service Section */}
            {/* start: Project Section */}
            <section className="h6-project section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="heading-wrap-content">
                      <div className="sec-heading style-2 style-6">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Proud
                          Projects</span>
                        <h2 className="sec-title title-anim">Breaking Boundaries, Building Dreams.</h2>
                      </div>
                      <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                        <Link className="tj-primary-btn" href="/portfolio">
                          <span className="btn-text"><span>More Projects</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="h6-project-inner wow fadeInUp" data-wow-delay="0.6s">
                      <div className=" project-item h6-project-item ">
                        <div className="project-item-inner h6-project-item-inner" data-bg-image="/assets/images/project/h6-project-1.webp">
                          <div className="project-content">
                            <span className="categories"><Link href="/portfolio-details">Connect</Link></span>
                            <div className="project-text">
                              <h3 className="title"><Link href="/portfolio-details">Event Management Platform</Link></h3>
                              <Link className="project-btn" href="/portfolio-details">
                                <i className="tji-arrow-right-long" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" project-item h6-project-item ">
                        <div className="project-item-inner h6-project-item-inner" data-bg-image="/assets/images/project/h6-project-2.webp">
                          <div className="project-content">
                            <span className="categories"><Link href="/portfolio-details">Empower</Link></span>
                            <div className="project-text">
                              <h3 className="title"><Link href="/portfolio-details">Digital Marketing Campaign</Link></h3>
                              <Link className="project-btn" href="/portfolio-details">
                                <i className="tji-arrow-right-long" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" project-item h6-project-item active">
                        <div className="project-item-inner h6-project-item-inner" data-bg-image="/assets/images/project/h6-project-3.webp">
                          <div className="project-content">
                            <span className="categories"><Link href="/portfolio-details">Support</Link></span>
                            <div className="project-text">
                              <h3 className="title"><Link href="/portfolio-details">Interactive Learning Platform</Link></h3>
                              <Link className="project-btn" href="/portfolio-details">
                                <i className="tji-arrow-right-long" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" project-item h6-project-item ">
                        <div className="project-item-inner h6-project-item-inner" data-bg-image="/assets/images/project/h6-project-4.webp">
                          <div className="project-content">
                            <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                            <div className="project-text">
                              <h3 className="title"><Link href="/portfolio-details">Environmental Impact Dashboard</Link></h3>
                              <Link className="project-btn" href="/portfolio-details">
                                <i className="tji-arrow-right-long" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" project-item h6-project-item ">
                        <div className="project-item-inner h6-project-item-inner" data-bg-image="/assets/images/project/h6-project-5.webp">
                          <div className="project-content">
                            <span className="categories"><Link href="/portfolio-details">Connect</Link></span>
                            <div className="project-text">
                              <h3 className="title"><Link href="/portfolio-details">Event Management Platform</Link></h3>
                              <Link className="project-btn" href="/portfolio-details">
                                <i className="tji-arrow-right-long" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className=" project-item h6-project-item ">
                        <div className="project-item-inner h6-project-item-inner" data-bg-image="/assets/images/project/h6-project-6.webp">
                          <div className="project-content">
                            <span className="categories"><Link href="/portfolio-details">Empower</Link></span>
                            <div className="project-text">
                              <h3 className="title"><Link href="/portfolio-details">Digital Marketing Campaign</Link></h3>
                              <Link className="project-btn" href="/portfolio-details">
                                <i className="tji-arrow-right-long" />
                              </Link>
                            </div>
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
            </section>
            {/* end: Project Section */}
            {/* start: Working process Section */}
            <section className="h6-working-process section-gap slidebar-stickiy-container">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1">
                    <div className="h6-working-process-inner">
                      <div className="h6-working-process-wrapper">
                        <div className="process-item h6-working-process-item tj-hover-active-item active">
                          <div className="process-step">
                            <span>01.</span>
                          </div>
                          <div className="process-content">
                            <h4 className="title">Discovery &amp; Planning</h4>
                            <p className="desc">he first step in our's process is understanding your unique business needs,
                              objectives, and our cutomes challenges. first step in our process is understanding</p>
                          </div>
                        </div>
                        <div className="process-item h6-working-process-item tj-hover-active-item">
                          <div className="process-step">
                            <span>02.</span>
                          </div>
                          <div className="process-content">
                            <h4 className="title">Execution &amp; Delivery</h4>
                            <p className="desc">he first step in our's process is understanding your unique business needs,
                              objectives, and our cutomes challenges. first step in our process is understanding</p>
                          </div>
                        </div>
                        <div className="process-item h6-working-process-item tj-hover-active-item">
                          <div className="process-step">
                            <span>03.</span>
                          </div>
                          <div className="process-content">
                            <h4 className="title">Review &amp; Support</h4>
                            <p className="desc">he first step in our's process is understanding your unique business needs,
                              objectives, and our cutomes challenges. first step in our process is understanding</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2">
                    <div className="content-wrap slidebar-stickiy">
                      <div className="sec-heading style-2 style-6">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />OUR PROCESS</span>
                        <h2 className="sec-title title-anim">Seamless Process and
                          Great Results.</h2>
                      </div>
                      <p className="desc">We stay ahead of curve, leveraging cutting-edge are technologies and strategies to
                        competitive</p>
                      <div className="d-none d-lg-inline-flex wow fadeInUp" data-wow-delay=".6s">
                        <Link className="tj-primary-btn" href="/contact">
                          <span className="btn-text"><span>Request a Call</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Working process Section */}
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
            {/* start: Award Section */}
            <section className="tj-award section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading sec-heading-centered style-2 style-6 ">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Our
                        Achievements</span>
                      <h2 className="sec-title title-anim">Our pursuit of perfection has recognized</h2>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-12">
                    <div className="tj-award-wrapper tj-active-bg-wrapper">
                      <div className="tj-award-item tj-active-bg-item wow fadeInUp" data-wow-delay=".3s">
                        <div className="tj-award-item-inner">
                          <div className="row align-items-center justify-content-between">
                            <div className="col-md-4 tj-award-img-wrapper">
                              <h6 className="tj-award-index">
                                01.
                              </h6>
                              <div className="tj-award-img"><img src="/assets/images/award/award-1.png" alt="" /><img src="/assets/images/award/award-1-white.png" alt="" /></div>
                            </div>
                            <div className="col-md-4 col-lg-3 tj-award-title-wrapper">
                              <h5 className="tj-award-title">
                                Inspire<br />
                                Growth Award
                              </h5>
                            </div>
                            <div className="col-md-4 tj-award-date-wrapper">
                              <h6 className="tj-award-result">
                                Winner
                              </h6>
                              <h6 className="tj-award-date">
                                2010
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tj-award-item tj-active-bg-item wow fadeInUp" data-wow-delay=".3s">
                        <div className="tj-award-item-inner">
                          <div className="row align-items-center justify-content-between">
                            <div className="col-md-4 tj-award-img-wrapper">
                              <h6 className="tj-award-index">
                                02.
                              </h6>
                              <div className="tj-award-img"><img src="/assets/images/award/award-2.png" alt="" />
                                <img src="/assets/images/award/award-2-white.png" alt="" />
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-3 tj-award-title-wrapper">
                              <h5 className="tj-award-title">
                                Pinnacle<br />
                                Excellence Award
                              </h5>
                            </div>
                            <div className="col-md-4 tj-award-date-wrapper">
                              <h6 className="tj-award-result">
                                Nominee
                              </h6>
                              <h6 className="tj-award-date">
                                2016
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tj-award-item tj-active-bg-item wow fadeInUp" data-wow-delay=".3s">
                        <div className="tj-award-item-inner">
                          <div className="row align-items-center justify-content-between">
                            <div className="col-md-4 tj-award-img-wrapper">
                              <h6 className="tj-award-index">
                                03.
                              </h6>
                              <div className="tj-award-img"><img src="/assets/images/award/award-3.png" alt="" />
                                <img src="/assets/images/award/award-3-white.png" alt="" />
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-3 tj-award-title-wrapper">
                              <h5 className="tj-award-title">
                                Mastermind <br /> Excellence Award
                              </h5>
                            </div>
                            <div className="col-md-4 tj-award-date-wrapper">
                              <h6 className="tj-award-result">
                                Distinguished
                              </h6>
                              <h6 className="tj-award-date">
                                2020
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tj-award-item tj-active-bg-item wow fadeInUp" data-wow-delay=".3s">
                        <div className="tj-award-item-inner">
                          <div className="row align-items-center justify-content-between">
                            <div className="col-md-4 tj-award-img-wrapper">
                              <h6 className="tj-award-index">
                                04.
                              </h6>
                              <div className="tj-award-img"><img src="/assets/images/award/award-4.png" alt="" />
                                <img src="/assets/images/award/award-4-white.png" alt="" />
                              </div>
                            </div>
                            <div className="col-md-4 col-lg-3 tj-award-title-wrapper">
                              <h5 className="tj-award-title">
                                Game <br />
                                Changer Award
                              </h5>
                            </div>
                            <div className="col-md-4 tj-award-date-wrapper">
                              <h6 className="tj-award-result">
                                Champion
                              </h6>
                              <h6 className="tj-award-date">
                                2025
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <span className="active-bg" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Award Section */}
            {/* start: Testimonial Section */}
            <section className="h6-testimonial section-gap section-gap-x slidebar-stickiy-container">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="h6-testimonial-banner">
                      <img src="/assets/images/testimonial/h6-testimonial-banner.webp" alt="" />
                      <a className="h6-testimonial-banner-video video-popup" href="https://youtu.be/gXFATcwrO-U" data-autoplay="true" data-vbtype="video">
                        <i className="tji-play" />
                      </a>
                    </div>
                    <div className="content-wrap slidebar-stickiy">
                      <div className="sec-heading style-2 style-6">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />CLIENT
                          FEEDBACK</span>
                        <h2 className="sec-title title-anim">Our Clients Share Their Success Stories</h2>
                      </div>
                      <p className="desc">Our approach to customer experience is comprehensive and data-driven. We begin by
                        assessing your current.</p>
                      <div className="d-none d-lg-inline-flex wow fadeInUp" data-wow-delay=".6s">
                        <Link className="tj-primary-btn" href="/contact">
                          <span className="btn-text"><span>Explore More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="testimonial-wrapper h6-testimonial-wrapper wow fadeInUp" data-wow-delay=".5s">
                      <div className="swiper swiper-container h6-testimonial-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <div className="h6-testimonial-author-wrapper">
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
                                <p>"Working with Bexon has been a game-changer for our business. Their team's
                                  professionalism,
                                  attention to detail, and innovative solutions have helped us streamline operations our
                                  goals
                                  faster than imagined. We truly feel like a valued partner."</p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <div className="h6-testimonial-author-wrapper">
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
                                <p>"Working with Bexon has been a game-changer for our business. Their team's
                                  professionalism,
                                  attention to detail, and innovative solutions have helped us streamline operations our
                                  goals
                                  faster than imagined. We truly feel like a valued partner."</p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <div className="h6-testimonial-author-wrapper">
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
                                <p>"Working with Bexon has been a game-changer for our business. Their team's
                                  professionalism,
                                  attention to detail, and innovative solutions have helped us streamline operations our
                                  goals
                                  faster than imagined. We truly feel like a valued partner."</p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <div className="h6-testimonial-author-wrapper">
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
                                <p>"Working with Bexon has been a game-changer for our business. Their team's
                                  professionalism,
                                  attention to detail, and innovative solutions have helped us streamline operations our
                                  goals
                                  faster than imagined. We truly feel like a valued partner."</p>
                              </div>
                            </div>
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
            {/* end: Testimonial Section */}
            {/* start: Blog Section */}
            <section className="tj-blog-section h6-blog section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-2 style-6 text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Insights &amp;
                        Ideas</span>
                      <h2 className="sec-title title-anim">The Ultimate Resource.</h2>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4 h6-blog-wrapper">
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
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
                        <h4 className="title"><Link href="/blog-details">Innovative Solutions for every Business Success.</Link>
                        </h4>
                        <Link className="text-btn" href="/blog-details">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                      <div className="blog-thumb">
                        <Link href="/blog-details"><img src="/assets/images/blog/blog-2.webp" alt="" /></Link>
                        <div className="blog-date">
                          <span className="date">28</span>
                          <span className="month">Feb</span>
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <span className="categories"><Link href="/blog-details">Empower</Link></span>
                          <span>By <Link href="/blog-details">Maurice Dalton</Link></span>
                        </div>
                        <h4 className="title"><Link href="/blog-details">Harnessing Digital Transform a Roadmap Businesses.</Link>
                        </h4>
                        <Link className="text-btn" href="/blog-details">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                      <div className="blog-thumb">
                        <Link href="/blog-details"><img src="/assets/images/blog/blog-3.webp" alt="" /></Link>
                        <div className="blog-date">
                          <span className="date">28</span>
                          <span className="month">Feb</span>
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-meta">
                          <span className="categories"><Link href="/blog-details">Support</Link></span>
                          <span>By <Link href="/blog-details">Thierry Lawson</Link></span>
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
            </section>
            {/* end: Blog Section */}
            {/* start: Client Section */}
            <section className="tj-client-section-2 h6-client section-gap-x wow fadeInUp" data-wow-delay=".4s">
              <div className="container-fluid client-container">
                <div className="row">
                  <div className="col-12">
                    <div className="h6-client-title-wrapper">
                      <h6 className="h6-client-title
            ">we're proud to partner with best-in-class clients</h6>
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
          </main>
          {/* start: Footer Section */}
          <footer className="tj-footer-section footer-2 h5-footer  h6-footer   section-gap-x">
            <div className="footer-main-area">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="footer-widget widget-subscribe h6-footer-subscribe wow fadeInUp" data-wow-delay=".3s">
                      <h3 className="title text-anim">Subscribe to Our Newsletter.</h3>
                      <div className="subscribe-form">
                        <form action="#">
                          <input type="email" name="email" placeholder="Enter email" />
                          <button type="submit"><i className="tji-plane" /></button>
                          <label htmlFor="agree"><input id="agree" type="checkbox" />Agree to our <Link href="#">Terms &amp;
                              Condition?</Link></label>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3  col-lg-3 col-md-6">
                    <div className="footer-widget footer-col-2 widget-nav-menu h6-footer-col-2 wow fadeInUp" data-wow-delay=".3s">
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
                  <div className="col-xl-2 col-lg-2 col-md-6">
                    <div className="footer-widget footer-col-3 widget-nav-menu h6-footer-col-3 wow fadeInUp" data-wow-delay=".5s">
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
                  <div className="col-xl-3 col-lg-3  col-md-6">
                    <div className="footer-widget widget-contact h6-footer-contact wow fadeInUp" data-wow-delay=".7s">
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
            <div className="h6-footer-logo-area ">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="h6-footer-logo">
                      <Link href="/" className="wow fadeInUpBig" data-wow-delay=".3s">
                        <img src="/assets/images/logos/logo-large.webp" alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tj-copyright-area-2 h5-footer-copyright h6-footer-copyright">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="copyright-content-area">
                      <div className="copyright-text">
                        <p>© <span>2026</span>&nbsp;<a href="https://themeforest.net/user/theme-junction/portfolio" target="_blank">Bexon</a> All right reserved</p>
                      </div>
                      <div className="social-links style-3 style-6">
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
            <div className="bg-shape-3 wow fadeInUpBig" data-wow-delay="1s">
              <img src="/assets/images/shape/footer-bg-shape-blur.svg" alt="" />
            </div>
          </footer>
          {/* end: Footer Section */}
        </div>
      </div>
      {/* JS here */}
    </div>
    
  );
}

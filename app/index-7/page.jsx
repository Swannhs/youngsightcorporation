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
      <header className="header-area header-2 h7-header header-absolute section-gap-x">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                {/* site logo */}
                <div className="site_logo">
                  <Link className="logo" href="/"><img src="/assets/images/logos/youngsightcorporation-logo-light.svg" alt="" /></Link>
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
      {/* start: Header Area */}
      <header className="header-area header-2 h7-header header-duplicate header-sticky section-gap-x">
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
            <div className="top-space-15" />
            {/* start: Banner Slider */}
            <section className="h7-hero">
              <div className="h7-hero-inner">
                <div className="h7-hero-bg-image" data-bg-image="/assets/images/hero/h7-hero-bg.webp" />
                <div className="container">
                  <div className="row ">
                    <div className="col-12">
                      <div className="h7-hero-item-wrapper">
                        <div className="h7-hero-content">
                          <h1 className="h7-hero-title text-anim"><span>Delivering</span> <span><img className="wow bounceIn" data-wow-delay="1s" src="/assets/images/icons/verified.svg" alt="" />Trusted</span>
                            <span>Solutions</span>
                          </h1>
                        </div>
                        <div className="h7-hero-banner">
                          <img className="wow fadeInUpBig" data-wow-delay=".8s" src="/assets/images/hero/h7-hero-banner.webp" alt="" />
                        </div>
                        <div className="h7-hero-box">
                          <div className="customers">
                            <ul>
                              <li className="wow fadeInLeft" data-wow-delay=".5s"><img src="/assets/images/testimonial/client-1.webp" alt="" /></li>
                              <li className="wow fadeInLeft" data-wow-delay=".6s"><img src="/assets/images/testimonial/client-2.webp" alt="" /></li>
                              <li className="wow fadeInLeft" data-wow-delay=".7s"><img src="/assets/images/testimonial/client-3.webp" alt="" /></li>
                              <li className="wow fadeInLeft" data-wow-delay=".8s"><img src="/assets/images/testimonial/client-4.webp" alt="" /></li>
                            </ul>
                          </div>
                          <div className="h7-hero-box-content wow fadeInLeft" data-wow-delay=".9s">
                            <div className="star-ratings">
                              <div className="fill-ratings" style={{width: '100%'}}>
                                <span>âââââ</span>
                              </div>
                              <div className="empty-ratings">
                                <span>âââââ</span>
                              </div>
                            </div>
                            <h5 className="customers-text">100+ happy customer.</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="circle-text-wrap wow fadeInUp" data-wow-delay="2.2s">
                <span className="circle-text" data-bg-image="/assets/images/hero/circle-text.webp" />
                <Link className="circle-icon" href="/service"><i className="tji-arrow-down-big" /></Link>
              </div>
              <div className="h7-hero-shape h7-hero-shape-1 wow fadeInUpBig" data-wow-delay="1s"><img className="tj-anim-move-var-big" src="/assets/images/shape/h7-hero-blur-1.png" alt="" /></div>
              <div className="h7-hero-shape h7-hero-shape-2 wow fadeInDownBig" data-wow-delay="1.2s"><img className="tj-anim-move-var-big-reverse" src="/assets/images/shape/h7-hero-blur-2.png" alt="" /></div>
            </section>
            {/* end: Banner Slider */}
            {/* start: Choose Section */}
            <section id="choose" className="tj-choose-section h6-choose h7-choose section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-2 style-7 text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Choose the
                        Best</span>
                      <h2 className="sec-title text-anim">Empowering Business with Expertise.</h2>
                    </div>
                  </div>
                </div>
                <div className="row rightSwipeWrap h7-choose-item-wrapper  wow fadeInLeftBig" data-wow-delay=".4s">
                  <div className="col-lg-4 h7-choose-item">
                    <div className="choose-box h6-choose-box h7-choose-box">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="tji-innovative" />
                        </div>
                        <h4 className="title">Innovative Solutions</h4>
                        <p className="desc">We stay ahead of the curve, leveraging cutting-edge technologies and strategies to
                          keep
                          you competitive in a marketplace.</p>
                        <Link className="text-btn" href="/about">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 h7-choose-item">
                    <div className="choose-box h6-choose-box h7-choose-box">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="tji-award" />
                        </div>
                        <h4 className="title">Award-Winning Expertise</h4>
                        <p className="desc">Recognized by industry leaders, our award-winning team has a proven record of
                          delivering
                          excellence across projects.</p>
                        <Link className="text-btn" href="/about">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 h7-choose-item">
                    <div className="choose-box h6-choose-box h7-choose-box">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="tji-support" />
                        </div>
                        <h4 className="title">Dedicated Support</h4>
                        <p className="desc">Our team is always available to address your concerns, providing quick and effective
                          solution to keep your business.</p>
                        <Link className="text-btn" href="/about">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Choose Section */}
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
            <section className="tj-about-section h7-about section-gap section-gap-x mt-10">
              <div className="container">
                <div className="row row-gap-4">
                  <div className="col-12">
                    <div className="about-content-area-2 wow fadeInUp" data-wow-delay=".3s">
                      <div className="sec-heading style-2 style-7">
                        <div className="row">
                          <div className="col-12 col-lg-4">
                            <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Get to Know
                              Us</span>
                          </div>
                          <div className="col-12 col-lg-8">
                            <div className="h7-about-content-inner">
                              <h2 className="sec-title title-highlight">Powering Innovations Through out Partnerships with our
                                Brands and Many Companies.
                              </h2>
                              <div className="row">
                                <div className="col-12 col-md-6">
                                  <div className="h7-about-card">
                                    <div className="h7-about-card-content">
                                      <div className="h7-about-card-icon">
                                        <i className="tji-dart-board" />
                                      </div>
                                      <h4 className="title">Our Mission</h4>
                                      <p className="desc">Recognized by industry leaders, our award-winning team has a proven
                                        record
                                        delivering excellence across projects.</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 col-md-6">
                                  <div className="h7-about-card">
                                    <div className="h7-about-card-content">
                                      <div className="h7-about-card-icon">
                                        <i className="tji-eye-box" />
                                      </div>
                                      <h4 className="title">Our Vision</h4>
                                      <p className="desc">Recognized by industry leaders, our award-winning team has a proven
                                        record
                                        delivering excellence across projects.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="about-btn-area-2 wow fadeInUp" data-wow-delay="1s">
                                <Link className="tj-primary-btn" href="/about">
                                  <span className="btn-text"><span>Know More Us</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid gap-15">
                <div className="row">
                  <div className="col-12 col-xl-6">
                    <div className="h7-about-banner  wow fadeInUp" data-wow-delay=".2s">
                      <img data-speed=".8" src="/assets/images/about/h7-about-banner.webp" alt="" />
                    </div>
                  </div>
                  <div className="col-12 col-xl-6">
                    <div className="row h7-about-counter-wrapper">
                      <div className="col-12 col-md-6">
                        <div className="countup-item style-2 wow fadeInUp" data-wow-delay=".3s">
                          <p className="counter-title">Faster Growth</p>
                          <h5 className="steps">01.</h5>
                          <div className="count-inner">
                            <div className="inline-content">
                              <span className="odometer countup-number" data-count="8.5" />
                              <span className="count-plus">X</span>
                            </div>
                            <span className="count-text">Built for Super Speed</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 ">
                        <div data-bg-image="/assets/images/about/h7-about-item.webp" className="img-box style-2  wow fadeInUp" data-wow-delay=".4s">
                        </div>
                      </div>
                      <div className="col-12 col-md-6 ">
                        <div className="customers-box style-2  wow fadeInUp" data-wow-delay=".5s">
                          <div className="customers-bg" data-bg-image="/assets/images/about/h7-about-item-bg.webp" />
                          <h6 className="customers-text wow fadeInLeft" data-wow-delay=".6s">Enabling startups to raise $25M+ in
                            venture funding.</h6>
                          <Link className="text-btn wow fadeInLeft" data-wow-delay=".5s" href="/contact">
                            <span className="btn-text"><span>Contact us</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </Link>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="countup-item style-2  wow fadeInUp" data-wow-delay=".6s">
                          <p className="counter-title">Reach Worldwide</p>
                          <h5 className="steps">02.</h5>
                          <div className="count-inner">
                            <div className="inline-content">
                              <span className="odometer countup-number" data-count={20} />
                              <span className="count-plus">M</span>
                            </div>
                            <span className="count-text">Corporate Service Holders</span>
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
            <section className="h7-service  section-gap slidebar-stickiy-container">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sec-heading style-2 style-7">
                      <div className="row">
                        <div className="col-12 col-lg-4 col-xl-3"><span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Our Solutions</span></div>
                        <div className="col-12 col-lg-8 col-xl-9">
                          <div className="sec-title-wrapper">
                            <h2 className="sec-title text-anim">Tailor Business Solutions for Corporates.</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-4 col-xl-3">
                    <div className="section-desc-wrapper  slidebar-stickiy">
                      <p className="desc">Recognized by industry leaders, our award winning team has a proven.</p>
                      <div className=" wow fadeInUp" data-wow-delay=".3s">
                        <Link className="tj-primary-btn" href="/service">
                          <span className="btn-text"><span>More services</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-8 col-xl-9">
                    <div className="service-wrapper h7-service-wrapper">
                      <div className="service-item h7-service-item wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-content-wrap">
                          <div className="service-title">
                            <div className="service-icon">
                              <i className="tji-service-5" />
                            </div>
                            <h4 className="title"><Link href="/service-details">Business Strategy Development</Link></h4>
                          </div>
                          <div className="h7-service-action">
                            <Link className="text-btn" href="/service-details">
                              <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="service-item h7-service-item wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-content-wrap">
                          <div className="service-title">
                            <div className="service-icon">
                              <i className="tji-service-2" />
                            </div>
                            <h4 className="title"><Link href="/service-details">Customer Experience Solutions</Link></h4>
                          </div>
                          <div className="h7-service-action">
                            <Link className="text-btn" href="/service-details">
                              <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="service-item h7-service-item wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-content-wrap">
                          <div className="service-title">
                            <div className="service-icon">
                              <i className="tji-service-3" />
                            </div>
                            <h4 className="title"><Link href="/service-details">Sustainability and ESG Consulting</Link></h4>
                          </div>
                          <div className="h7-service-action">
                            <Link className="text-btn" href="/service-details">
                              <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="service-item h7-service-item wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-content-wrap">
                          <div className="service-title">
                            <div className="service-icon">
                              <i className="tji-service-4" />
                            </div>
                            <h4 className="title"><Link href="/service-details">Marketing Strategy &amp; Campaigns</Link></h4>
                          </div>
                          <div className="h7-service-action">
                            <Link className="text-btn" href="/service-details">
                              <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Service Section */}
            {/* start: Testimonial Section */}
            <section className="tj-testimonial-section h7-testimonial section-gap section-gap-x">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-12">
                    <div className="sec-heading style-2 style-7 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" /> CLIENT
                        FEEDBACK</span>
                      <h2 className="sec-title text-anim">Our Clients Share Their Success Stories.</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="testimonial-wrapper  h7-testimonial-wrapper  wow fadeInRightBig" data-wow-delay=".3s">
                      <div className="swiper swiper-container testimonial-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testimonial-item">
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
                              <div className="desc">
                                <p>We've been working with us for years &amp; they continue to deliver outstanding results.
                                  Their
                                  team is proactive, responsive, and always goes the extra mile to ensure our needs are met.
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
                                    <img src="/assets/images/testimonial/client-2.webp" alt="" />
                                  </div>
                                  <div className="author-header">
                                    <h4 className="title">Ralph Edwards</h4>
                                    <span className="designation">Co. Founder</span>
                                  </div>
                                </div>
                              </div>
                              <div className="desc">
                                <p>Working with Bexon has been a game-changer for our business. Their team's
                                  professionalism,
                                  attention to detail, and innovative solutions have helped us streamline operations
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
                                    <h4 className="title">Devon Lane</h4>
                                    <span className="designation">Co. Founder</span>
                                  </div>
                                </div>
                              </div>
                              <div className="desc">
                                <p>The results we've seen after partnering with Bexon are beyond our expectations. They not
                                  only
                                  understood our vision but also brought new ideas to the table that have taken our business
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
                      <div className="bg-shape-3">
                        <img src="/assets/images/shape/h7-testimonial-shape-blur.svg" alt="" />
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
            {/* start: Project Section */}
            <section className="h7-project section-gap tj-sticky-panel-container">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-4 ">
                    <div className="sec-heading style-2 style-7 tj-sticky-panel">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" /> Proud
                        Projects</span>
                      <h2 className="sec-title text-anim">Driving Success Through Our Projects.</h2>
                      <div className=" wow fadeInUp" data-wow-delay=".3s">
                        <Link className="tj-primary-btn" href="/portfolio">
                          <span className="btn-text"><span>Explore More </span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-8 ">
                    <div className="project-wrapper h7-project-wrapper">
                      <div className="project-item h4-project-item tj-sticky-panel">
                        <div className="project-img">
                          <img src="/assets/images/project/project-4.webp" alt="Image" />
                        </div>
                        <div className="project-content">
                          <div className="project-text">
                            <div>
                              <h3 className="title"><Link href="/portfolio-details">Event Management Platform</Link></h3>
                              <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                            </div>
                            <Link className="tji-icon-btn" href="/portfolio-details">
                              <i className="tji-arrow-right-long" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="project-item h4-project-item tj-sticky-panel">
                        <div className="project-img">
                          <img src="/assets/images/project/project-8.webp" alt="Image" />
                        </div>
                        <div className="project-content">
                          <div className="project-text">
                            <div>
                              <h3 className="title"><Link href="/portfolio-details">Rebranding Strategy for a Growing</Link></h3>
                              <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                            </div>
                            <Link className="tji-icon-btn" href="/portfolio-details">
                              <i className="tji-arrow-right-long" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="project-item h4-project-item tj-sticky-panel">
                        <div className="project-img">
                          <img src="/assets/images/project/project-9.webp" alt="Image" />
                        </div>
                        <div className="project-content">
                          <div className="project-text">
                            <div>
                              <h3 className="title"><Link href="/portfolio-details">Event Management Platform</Link></h3>
                              <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                            </div>
                            <Link className="tji-icon-btn" href="/portfolio-details">
                              <i className="tji-arrow-right-long" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Project Section */}
            {/* start: Team Section */}
            <section className="h7-team section-gap section-gap-x">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-2 style-7 sec-heading-centered">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" /> Meet Our Team</span>
                      <h2 className="sec-title text-anim">The People Empowering Business Level.</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="h7-team-wrapper">
                      <div className="h7-team-marquee swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">James Anderson</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-1.webp" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">Savannah Ngueen</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-2.webp" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">Emma Richardson</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-3.webp" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">Eade Marren</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-4.webp" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">James Anderson</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-1.webp" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">Savannah Ngueen</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-2.webp" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">Emma Richardson</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-3.webp" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">Eade Marren</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-4.webp" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div dir="rtl" className="h7-team-marquee swiper">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">Benjamin Reed</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-6.webp" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">Nathaniel Ellington</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-7.webp" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">Nathan Price</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-8.webp" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">Caleb Turner</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-9.webp" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">Benjamin Reed</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-6.webp" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">Nathaniel Ellington</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-7.webp" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">Nathan Price</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-8.webp" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="team-item">
                              <div className="team-content">
                                <h5 className="title"><Link href="/team-details">Caleb Turner</Link></h5>
                                <span className="designation">Chief Executive</span>
                              </div>
                              <div className="team-img">
                                <img src="/assets/images/team/h7-team-9.webp" alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-3">
                <img src="/assets/images/shape/h7-testimonial-shape-blur.svg" alt="" />
              </div>
            </section>
            {/* end: Team Section */}
            {/* start: Faq Section */}
            <section className="h7-faq section-gap slidebar-stickiy-container">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-12 col-lg-4">
                    <div className="sec-heading style-2 style-7 slidebar-stickiy">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" /> OUR SOLUTIONS</span>
                      <h2 className="sec-title text-anim">Find answers to the common questions</h2>
                      <a className="number" href="tel:18884521505"> <span className="call-icon"><i className="tji-phone" /></span>
                        <span>1-888-452-1505</span></a>
                    </div>
                  </div>
                  <div className="col-12 col-lg-8">
                    <div className="accordion tj-faq style-2 h7-faq-wrapper" id="faqTwo">
                      <div className="accordion-item active wow fadeInUp" data-wow-delay=".3s">
                        <button className=" faq-title" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo-1" aria-expanded="true">What services does Bexon offer to clients?</button>
                        <div id="faqTwo-1" className="collapse show" data-bs-parent="#faqTwo">
                          <div className="accordion-body faq-text">
                            <p>Getting started is easy! Simply reach out to us through our contact form or give us a call,
                              and
                              we'll schedule a consultation to discuss your project and how we can best assist you. Our team
                              keeps you informed throughout the process, ensuring quality control and timely delivery.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                        <button className="faq-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo-2" aria-expanded="false">How do I get started with Corporate
                          Business?</button>
                        <div id="faqTwo-2" className="collapse" data-bs-parent="#faqTwo">
                          <div className="accordion-body faq-text">
                            <p>Getting started is easy! Simply reach out to us through our contact form or give us a call,
                              and
                              we'll schedule a consultation to discuss your project and how we can best assist you. Our team
                              keeps you informed throughout the process, ensuring quality control and timely delivery.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                        <button className="faq-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo-3" aria-expanded="false">How do you ensure the success of a
                          project?</button>
                        <div id="faqTwo-3" className="collapse" data-bs-parent="#faqTwo">
                          <div className="accordion-body faq-text">
                            <p>Getting started is easy! Simply reach out to us through our contact form or give us a call,
                              and
                              we'll schedule a consultation to discuss your project and how we can best assist you. Our team
                              keeps you informed throughout the process, ensuring quality control and timely delivery.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                        <button className="faq-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo-4" aria-expanded="false">How long will it take to complete my
                          project?</button>
                        <div id="faqTwo-4" className="collapse" data-bs-parent="#faqTwo">
                          <div className="accordion-body faq-text">
                            <p>Getting started is easy! Simply reach out to us through our contact form or give us a call,
                              and
                              we'll schedule a consultation to discuss your project and how we can best assist you. Our team
                              keeps you informed throughout the process, ensuring quality control and timely delivery.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item wow fadeInUp" data-wow-delay=".3s">
                        <button className="faq-title collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqTwo-5" aria-expanded="false">Can I track the progress of my project?</button>
                        <div id="faqTwo-5" className="collapse" data-bs-parent="#faqTwo">
                          <div className="accordion-body faq-text">
                            <p>Getting started is easy! Simply reach out to us through our contact form or give us a call,
                              and
                              we'll schedule a consultation to discuss your project and how we can best assist you. Our team
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
            {/* start: Blog Section */}
            <section className="tj-blog-section h7-blog  section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-2 style-7 text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Insights &amp;
                        Ideas</span>
                      <h2 className="sec-title text-anim">The Ultimate Resource.</h2>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4 h7-blog-wrapper">
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                      <div className="blog-thumb">
                        <Link href="/blog-details"><img src="/assets/images/blog/blog-1.webp" alt="" /></Link>
                        <div className="blog-meta">
                          <span className="categories"><Link href="/blog-details">Business</Link></span>
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-date">
                          <p> June 20, 2025</p>
                        </div>
                        <div className="title-wrapper">
                          <h4 className="title"><Link href="/blog-details">Innovative Solutions for every Business Success.</Link>
                          </h4>
                          <Link className="text-btn" href="/service-details">
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                      <div className="blog-thumb">
                        <Link href="/blog-details"><img src="/assets/images/blog/blog-2.webp" alt="" /></Link>
                        <div className="blog-meta">
                          <span className="categories"><Link href="/blog-details">Empower</Link></span>
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-date">
                          <p> June 20, 2025</p>
                        </div>
                        <div className="title-wrapper">
                          <h4 className="title"><Link href="/blog-details">Harnessing Digital Transform a Roadmap
                              Businesses.</Link>
                          </h4>
                          <Link className="text-btn" href="/service-details">
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                      <div className="blog-thumb">
                        <Link href="/blog-details"><img src="/assets/images/blog/blog-3.webp" alt="" /></Link>
                        <div className="blog-meta">
                          <span className="categories"><Link href="/blog-details">Support</Link></span>
                        </div>
                      </div>
                      <div className="blog-content">
                        <div className="blog-date">
                          <p> June 20, 2025</p>
                        </div>
                        <div className="title-wrapper">
                          <h4 className="title"><Link href="/blog-details">Mastering Change Management Lessons for
                              Businesses.</Link>
                          </h4>
                          <Link className="text-btn" href="/service-details">
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
            {/* start: Cta Section */}
            <section className="tj-cta-section h7-cta section-gap-x">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <div className="cta-area h7-cta-inner">
                            <div className="cta-content">
                              <h2 className="title text-anim">Reach Out To Our Support Team?</h2>
                              <div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
                                <Link className="tj-primary-btn tj-primary-btn-lg" href="/contact">
                                  <span className="btn-text"><span>Contact us</span></span>
                                  <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-shape-3">
                <img src="/assets/images/shape/shape-blur.svg" alt="" />
              </div>
            </section>
            {/* end: Cta Section */}
          </main>
          {/* start: Footer Section */}
          <footer className="tj-footer-section footer-1 h7-footer section-gap-x">
            <div className="footer-main-area  h7-footer-main">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
                      <div className="footer-logo">
                        <Link href="/">
                          <img src="/assets/images/logos/youngsightcorporation-logo.svg" alt="youngsightcorporation logo" />
                        </Link>
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
                        <li><Link href="#">Customer Experience</Link></li>
                        <li><Link href="#">Training Programs</Link></li>
                        <li><Link href="#">Business Strategy</Link></li>
                        <li><Link href="#">Training Program</Link></li>
                        <li><Link href="#">ESG Consulting</Link></li>
                        <li><Link href="#">Development Hub</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-4 col-md-6">
                    <div className="footer-widget widget-nav-menu wow fadeInUp" data-wow-delay=".5s">
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
                  <div className="col-xl-4 col-lg-5 col-md-6">
                    <div className="footer-widget widget-subscribe wow fadeInUp" data-wow-delay=".7s">
                      <h3 className="title">Subscribe to Our Newsletter.</h3>
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
                </div>
              </div>
            </div>
            <div className="tj-copyright-area h7-footer-copyright">
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
                        <p>© <span>2026</span>&nbsp;<a href="https://themeforest.net/user/theme-junction/portfolio" target="_blank">Bexon</a> All right reserved</p>
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

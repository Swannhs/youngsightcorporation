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
      <header className="header-area header-3 header-absolute section-gap-x">
        <div className="header-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="header-top-content">
                  <p className="topbar-text"><i className="tji-excellence" />Recognized for Excellence <Link href="/contact">Join
                      us Now</Link>
                  </p>
                  <div className="header-info">
                    <div className="info-item">
                      <span><i className="tji-location" /></span>
                      <Link href="#">Find a Location!</Link>
                    </div>
                    <div className="info-item">
                      <span><i className="tji-phone-3" /></span>
                      <a href="tel:8089091313">808-909-1313</a>
                    </div>
                    <div className="info-item">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
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
      <header className="header-area header-3 header-duplicate header-sticky section-gap-x">
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
            <div className="top-space-65" />
            {/* start: Banner Section */}
            <section className="tj-banner-section-2 section-gap-x">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-5">
                    <div className="banner-content-2">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".2s">
                        <i className="tji-box" /> Get to Know Us
                      </span>
                      <h1 className="banner-title title-anim">Driving Excellence Through
                        <a className="title-video video-popup wow fadeInUp" data-wow-delay="1.3s" data-autoplay="true" data-vbtype="video" data-maxwidth="1200px" href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados">
                          <i className="tji-play" />
                          <img src="/assets/images/hero/title-img.webp" alt="" />
                        </a> Evolution &amp; Trust.
                      </h1>
                      <div className="btn-area wow fadeInUp" data-wow-delay=".8s">
                        <Link className="tj-primary-btn" href="/contact">
                          <span className="btn-text"><span>Learn More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                        <a className="number" href="tel:18884521505"><i className="tji-phone" /><span>1-888-452-1505</span></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="banner-img-area wow fadeInUp" data-wow-delay=".3s">
                      <div className="banner-img">
                        <img src="/assets/images/hero/hero-img-2.webp" alt="" />
                        {/* <span class="brand-name wow fadeIn" data-wow-delay="2.2s">Bexon</span> */}
                        <div className="brand-name wow fadeIn" data-wow-delay="2.2s">
                          <div className="marquee-vr">
                            <span className="text">Bexon<span className="icon">/</span></span>
                            <span className="text">Bexon<span className="icon">/</span></span>
                            <span className="text">Bexon<span className="icon">/</span></span>
                            <span className="text">Bexon<span className="icon">/</span></span>
                            <span className="text">Bexon<span className="icon">/</span></span>
                            <span className="text">Bexon<span className="icon">/</span></span>
                          </div>
                        </div>
                        <div className="growth-box wow fadeInUp" data-wow-delay="1.7s"><img src="/assets/images/hero/growth.webp" alt="" /></div>
                      </div>
                      <div className="wow fadeIn" data-wow-delay="2.2s">
                        <div className="banner-author">
                          <h4 className="title">Eade Marren</h4>
                          <span className="designation">CEO &amp; Founder</span>
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
              <div className="banner-scroll wow fadeInDown" data-wow-delay="2.5s">
                <Link href="#choose" className="scroll-down tj-scroll-btn">
                  <span><i className="tji-arrow-down-long" /></span>
                  Scroll Down
                </Link>
              </div>
            </section>
            {/* end: Banner Section */}
            {/* start: Client Section */}
            <div className="tj-client-section-2 section-gap-x wow fadeInUp" data-wow-delay=".4s">
              <div className="container-fluid client-container">
                <div className="row">
                  <div className="col-12">
                    <div className="swiper client-slider client-slider-2">
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
            </div>
            {/* end: Client Section */}
            {/* start: Choose Section */}
            <section id="choose" className="tj-choose-section section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-3 text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Choose the
                        Best</span>
                      <h2 className="sec-title title-anim">Empowering Business with Expertise.</h2>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4 rightSwipeWrap">
                  <div className="col-xl-3 col-md-6">
                    <div className="choose-box style-2 right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="tji-innovative" />
                        </div>
                        <h4 className="title">Innovative Solutions</h4>
                        <p className="desc">We stay ahead of the leveraging cutting-edge technologies and strategies to keep.
                        </p>
                        <Link className="text-btn" href="/about">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="choose-box style-2 right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="tji-award" />
                        </div>
                        <h4 className="title">Award-Winning</h4>
                        <p className="desc">Recognized by industry leaders, our award-winning team has a proven record.</p>
                        <Link className="text-btn" href="/about">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="choose-box style-2 right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="tji-team" />
                        </div>
                        <h4 className="title">Expert Team</h4>
                        <p className="desc">Our team is always available to address your concerns, providing quick and solution.
                        </p>
                        <Link className="text-btn" href="/about">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="choose-box style-2 right-swipe">
                      <div className="choose-content">
                        <div className="choose-icon">
                          <i className="tji-support" />
                        </div>
                        <h4 className="title">Dedicated Support</h4>
                        <p className="desc">Our team is always available to address your concerns, providing quick and
                          effective.
                        </p>
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
            {/* start: About Section */}
            <section className="tj-about-section-2 section-gap section-gap-x ">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
                    <div className="about-img-area style-2 wow fadeInLeft" data-wow-delay=".3s">
                      <div className="about-img overflow-hidden">
                        <img data-speed=".8" src="/assets/images/about/about-5.webp" alt="" />
                      </div>
                      <div className="box-area">
                        <div className="progress-box wow fadeInUp" data-wow-delay=".3s">
                          <h4 className="title">Business Progress</h4>
                          <ul className="tj-progress-list">
                            <li>
                              <h6 className="tj-progress-title">Revenue</h6>
                              <div className="tj-progress">
                                <span className="tj-progress-percent">82%</span>
                                <div className="tj-progress-bar" data-percent={82}>
                                </div>
                              </div>
                            </li>
                            <li>
                              <h6 className="tj-progress-title">Satisfaction</h6>
                              <div className="tj-progress">
                                <span className="tj-progress-percent">90%</span>
                                <div className="tj-progress-bar" data-percent={90}>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
                    <div className="about-content-area">
                      <div className="sec-heading style-3">
                        <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Get to Know
                          Us</span>
                        <h2 className="sec-title title-anim">Driving Innovation and Excellence for Sustainable Corporate Success
                          Worldwide.
                        </h2>
                      </div>
                    </div>
                    <div className="about-bottom-area">
                      <div className="mission-vision-box wow fadeInLeft" data-wow-delay=".5s">
                        <h4 className="title">Our Mission</h4>
                        <p className="desc">our mission is empower businesses through innovate best solution, exceptional
                          service.
                        </p>
                        <ul className="list-items">
                          <li><i className="tji-list" />Innovation &amp; Excellence</li>
                          <li><i className="tji-list" />Exceptional Customer</li>
                          <li><i className="tji-list" />Business Growth</li>
                        </ul>
                      </div>
                      <div className="mission-vision-box wow fadeInRight" data-wow-delay=".5s">
                        <h4 className="title">Our Vision</h4>
                        <p className="desc">Our vision is to become a global leader in providing transformative business
                          solutions.
                        </p>
                        <ul className="list-items">
                          <li><i className="tji-list" />Global Leadership</li>
                          <li><i className="tji-list" />Transformative Impact</li>
                          <li><i className="tji-list" />Sustainable Success</li>
                        </ul>
                      </div>
                    </div>
                    <div className="about-btn-area wow fadeInUp" data-wow-delay=".5s">
                      <Link className="tj-primary-btn" href="/about">
                        <span className="btn-text"><span>Learn More About Us</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                      </Link>
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
            <section className="tj-service-section service-3 section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="sec-heading style-3 text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Our Solutions</span>
                      <h2 className="sec-title title-anim">Tailor Business Solutions for Corporates.</h2>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="service-wrapper">
                      <div className="service-item style-3 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-content-wrap">
                          <div className="service-title">
                            <div className="service-icon">
                              <i className="tji-service-1" />
                            </div>
                            <h4 className="title"><Link href="/service-details">Business Strategy Development</Link></h4>
                          </div>
                          <div className="service-content">
                            <p className="desc">Through a combination of data-driven insights and innovative approaches, we work
                              closely with you to develop customized.</p>
                          </div>
                        </div>
                        <div className="service-reveal-bg" data-bg-image="/assets/images/service/service-2.webp" />
                      </div>
                      <div className="service-item style-3 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-content-wrap">
                          <div className="service-title">
                            <div className="service-icon">
                              <i className="tji-service-2" />
                            </div>
                            <h4 className="title"><Link href="/service-details">Customer Experience Solutions</Link></h4>
                          </div>
                          <div className="service-content">
                            <p className="desc">Customer Experience Solutions are designed to enhance every touchpoint of your
                              customer journey, from first interaction.</p>
                          </div>
                        </div>
                        <div className="service-reveal-bg" data-bg-image="/assets/images/service/service-3.webp" />
                      </div>
                      <div className="service-item style-3 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-content-wrap">
                          <div className="service-title">
                            <div className="service-icon">
                              <i className="tji-service-3" />
                            </div>
                            <h4 className="title"><Link href="/service-details">Sustainability and ESG Consulting</Link></h4>
                          </div>
                          <div className="service-content">
                            <p className="desc">Provide tailored strategies that not only drive long-term value but also build
                              trust
                              with stakeholders, investors.</p>
                          </div>
                        </div>
                        <div className="service-reveal-bg" data-bg-image="/assets/images/service/service-4.webp" />
                      </div>
                      <div className="service-item style-3 wow fadeInUp" data-wow-delay=".3s">
                        <div className="service-content-wrap">
                          <div className="service-title">
                            <div className="service-icon">
                              <i className="tji-service-4" />
                            </div>
                            <h4 className="title"><Link href="/service-details">Training and Development Programs</Link></h4>
                          </div>
                          <div className="service-content">
                            <p className="desc">Training and Development Programs are designed to empower employees with the
                              skills,
                              knowledge, and tools they need.</p>
                          </div>
                        </div>
                        <div className="service-reveal-bg" data-bg-image="/assets/images/service/service-6.webp" />
                      </div>
                    </div>
                    <div className="service-btn-area text-center wow fadeInUp" data-wow-delay=".3s">
                      <Link className="tj-primary-btn" href="/service">
                        <span className="btn-text"><span>More Services</span></span>
                        <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Service Section */}
            {/* start: Project Section */}
            <section className="tj-project-section-3 section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Proud Projects</span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-3">
                          <h2 className="sec-title title-anim">Breaking Boundaries, Building Dreams.</h2>
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
                    <div className="project-wrapper wow fadeInUp" data-wow-delay=".4s">
                      <div className="swiper project-slider-2">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="project-item">
                              <div className="project-img">
                                <img src="/assets/images/project/project-6.webp" alt="" />
                              </div>
                              <div className="project-content">
                                <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                                <div className="project-text">
                                  <h4 className="title"><Link href="/portfolio-details">Event Management Platform</Link></h4>
                                  <Link className="project-btn" href="/portfolio-details">
                                    <i className="tji-arrow-right-big" />
                                  </Link>
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
                                <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                                <div className="project-text">
                                  <h4 className="title"><Link href="/portfolio-details">Rebranding Strategy for a Growing</Link>
                                  </h4>
                                  <Link className="project-btn" href="/portfolio-details">
                                    <i className="tji-arrow-right-big" />
                                  </Link>
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
                                <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                                <div className="project-text">
                                  <h4 className="title"><Link href="/portfolio-details">Interactive Learning Platform</Link></h4>
                                  <Link className="project-btn" href="/portfolio-details">
                                    <i className="tji-arrow-right-big" />
                                  </Link>
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
                                <span className="categories"><Link href="/portfolio-details">Business</Link></span>
                                <div className="project-text">
                                  <h4 className="title"><Link href="/portfolio-details">Environmental Impact Dashboard</Link></h4>
                                  <Link className="project-btn" href="/portfolio-details">
                                    <i className="tji-arrow-right-big" />
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
            {/* start: Testimonial Section */}
            <section className="tj-testimonial-section-3 section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="testimonial-wrapper-2 wow fadeInUp" data-wow-delay=".4s">
                      <h5 className="sec-title">Our Clients Love <span>Feedback</span></h5>
                      <div className="swiper client-thumb">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide thumb-item">
                            <div className="thumb-img">
                              <img src="/assets/images/testimonial/client-1.webp" alt="Image" />
                            </div>
                            <div className="author-header">
                              <h4 className="title">Mevon Lane</h4>
                              <span className="designation">Co. Founder</span>
                            </div>
                          </div>
                          <div className="swiper-slide thumb-item">
                            <div className="thumb-img">
                              <img src="/assets/images/testimonial/client-2.webp" alt="Image" />
                            </div>
                            <div className="author-header">
                              <h4 className="title">Ralph Edwards</h4>
                              <span className="designation">Co. Founder</span>
                            </div>
                          </div>
                          <div className="swiper-slide thumb-item">
                            <div className="thumb-img">
                              <img src="/assets/images/testimonial/client-3.webp" alt="Image" />
                            </div>
                            <div className="author-header">
                              <h4 className="title">Guy Hawkins</h4>
                              <span className="designation">Co. Founder</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="testimonial-navigation d-none d-md-inline-flex">
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
                      <div className="swiper testimonial-slider-3">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <div className="desc">
                                <p>Working with Bexon has been a game-changer for our business. Their team's
                                  professionalism,
                                  attention to detail, and innovative solutions have helped us streamline operations and
                                  achieve
                                  our goals faster than we imagined. We truly feel like a valued partner. The results we've
                                  seen
                                  after partnering.</p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <div className="desc">
                                <p>The results we've seen after partnering with Bexon are beyond our expectations. They not
                                  only
                                  understood our vision but also brought new ideas to the table that have taken our business
                                  to
                                  the next level. Their expertise and commitment to success make them a trusted.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide">
                            <div className="testimonial-item">
                              <div className="desc">
                                <p>We've been working with Bexonfor years, and they continue to deliver outstanding results.
                                  Their team is proactive, responsive, and always goes the extra mile to ensure our needs
                                  are
                                  met. They've become a key contributor to our growth and success that really help us"
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="swiper-pagination-area" />
                      </div>
                      <span className="quote-icon"><i className="tji-quote" /></span>
                      <div className="bg-shape-1">
                        <img src="/assets/images/shape/pattern-2.svg" alt="" />
                      </div>
                      <div className="bg-shape-2">
                        <img src="/assets/images/shape/pattern-3.svg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Testimonial Section */}
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
            {/* start: Team Section */}
            <section className="tj-team-section-2 section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading-wrap">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Meet Our Team</span>
                      <div className="heading-wrap-content">
                        <div className="sec-heading style-3">
                          <h2 className="sec-title title-anim">People Behind Bexon.</h2>
                        </div>
                        <div className="btn-wrap wow fadeInUp" data-wow-delay=".5s">
                          <Link className="tj-primary-btn" href="/team">
                            <span className="btn-text"><span>More Members</span></span>
                            <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="team-wrapper">
                      <div className="team-img-wrap wow fadeInUp" data-wow-delay=".5s">
                        <div id="team-img" className="team-img">
                          <img src="/assets/images/team/team-1-big.webp" alt="Images" />
                        </div>
                      </div>
                      <div className="team-item-wrap">
                        <div className="team-item active wow fadeInUp" data-wow-delay=".3s" data-src="/assets/images/team/team-1-big.webp">
                          <div className="team-item-inner">
                            <div className="team-content">
                              <h3 className="title"><Link href="/team-details">Eade Marren</Link></h3>
                              <span className="designation">Chief Executive</span>
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
                            <Link className="team-link" href="/team-details"><i className="tji-arrow-right-long" /></Link>
                          </div>
                          <div className="team-img-wrap">
                            <div className="team-img">
                              <img src="/assets/images/team/team-1-big.webp" alt="Images" />
                            </div>
                          </div>
                        </div>
                        <div className="team-item wow fadeInUp" data-wow-delay=".3s" data-src="/assets/images/team/team-2-big.webp">
                          <div className="team-item-inner">
                            <div className="team-content">
                              <h3 className="title"><Link href="/team-details">Savannah Ngueen</Link></h3>
                              <span className="designation">Operations Head</span>
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
                            <Link className="team-link" href="/team-details"><i className="tji-arrow-right-long" /></Link>
                          </div>
                          <div className="team-img-wrap">
                            <div className="team-img">
                              <img src="/assets/images/team/team-2-big.webp" alt="Images" />
                            </div>
                          </div>
                        </div>
                        <div className="team-item wow fadeInUp" data-wow-delay=".3s" data-src="/assets/images/team/team-3-big.webp">
                          <div className="team-item-inner">
                            <div className="team-content">
                              <h3 className="title"><Link href="/team-details">Kristin Watson</Link></h3>
                              <span className="designation">Marketing Lead</span>
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
                            <Link className="team-link" href="/team-details"><i className="tji-arrow-right-long" /></Link>
                          </div>
                          <div className="team-img-wrap">
                            <div className="team-img">
                              <img src="/assets/images/team/team-3-big.webp" alt="Images" />
                            </div>
                          </div>
                        </div>
                        <div className="team-item wow fadeInUp" data-wow-delay=".3s" data-src="/assets/images/team/team-4-big.webp">
                          <div className="team-item-inner">
                            <div className="team-content">
                              <h3 className="title"><Link href="/team-details">Darlene Robertson</Link></h3>
                              <span className="designation">Business Director</span>
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
                            <Link className="team-link" href="/team-details"><i className="tji-arrow-right-long" /></Link>
                          </div>
                          <div className="team-img-wrap">
                            <div className="team-img">
                              <img src="/assets/images/team/team-4-big.webp" alt="Images" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* end: Team Section */}
            {/* start: Blog Section */}
            <section className="tj-blog-section-3 section-gap section-gap-x">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="sec-heading style-3 text-center">
                      <span className="sub-title wow fadeInUp" data-wow-delay=".3s"><i className="tji-box" />Read Blogs</span>
                      <h2 className="sec-title title-anim">Strategies and Insights.</h2>
                    </div>
                  </div>
                </div>
                <div className="row row-gap-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="blog-item style-3 wow fadeInUp" data-wow-delay=".4s">
                      <div className="blog-thumb">
                        <Link href="/blog-details"><img src="/assets/images/blog/blog-6.webp" alt="" /></Link>
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
                        <h4 className="title"><Link href="/blog-details">Harnessing Digital Transform a Roadmap Businesses.</Link>
                        </h4>
                        <Link className="text-btn" href="/blog-details">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="blog-item style-3 wow fadeInUp" data-wow-delay=".6s">
                      <div className="blog-thumb">
                        <Link href="/blog-details"><img src="/assets/images/blog/blog-7.webp" alt="" /></Link>
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
                        <h4 className="title"><Link href="/blog-details">Harnessing Digital Transform a Roadmap Businesses.</Link>
                        </h4>
                        <Link className="text-btn" href="/blog-details">
                          <span className="btn-text"><span>Read More</span></span>
                          <span className="btn-icon"><i className="tji-arrow-right-long" /></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="blog-item style-3 wow fadeInUp" data-wow-delay=".8s">
                      <div className="blog-thumb">
                        <Link href="/blog-details"><img src="/assets/images/blog/blog-8.webp" alt="" /></Link>
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
              <div className="bg-shape-1">
                <img src="/assets/images/shape/pattern-2.svg" alt="" />
              </div>
              <div className="bg-shape-2">
                <img src="/assets/images/shape/pattern-3.svg" alt="" />
              </div>
            </section>
            {/* end: Blog Section */}
            {/* start: Faq Section */}
            <section className="tj-faq-section section-gap">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-lg-6">
                    <div className="faq-img-area wow fadeInLeft" data-wow-delay=".3s">
                      <div className="faq-img">
                        <img data-speed=".8" src="/assets/images/faq/faq.webp" alt="" />
                        <h2 className="title title-anim">Need Help? Start Here...</h2>
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
                  <div className="col-lg-6">
                    <div className="accordion tj-faq style-2" id="faqTwo">
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
          </main>
          {/* start: Footer Section */}
          <footer className="tj-footer-section footer-3 section-gap-x">
            <div className="footer-main-area">
              <div className="container">
                <div className="row justify-content-between">
                  <div className="col-xl-3 col-md-6">
                    <div className="footer-widget footer-col-1 wow fadeInUp" data-wow-delay=".1s">
                      <div className="footer-logo">
                        <Link href="/">
                          <img src="/assets/images/logos/youngsightcorporation-logo-light.svg" alt="Logos" />
                        </Link>
                      </div>
                      <div className="footer-text">
                        <p>Developing personalze our customer journeys to increase satisfaction &amp; loyalty of our expansion.
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
            <div className="footer-bottom-area">
              <div className="container">
                <div className="row align-items-end">
                  <div className="col-lg-3">
                    <div className="award-logo-area wow fadeInUp" data-wow-delay=".3s">
                      <div className="award-logo">
                        <img src="/assets/images/footer/award-logo-white-1.webp" alt="" />
                      </div>
                      <div className="award-logo">
                        <img src="/assets/images/footer/award-logo-white-2.webp" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="footer-widget widget-subscribe-2 wow fadeInUp" data-wow-delay=".5s">
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
            <div className="tj-copyright-area-3">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="copyright-content-area">
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

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const socialLinks = [
  {
    href: "https://www.facebook.com/",
    icon: "fa-facebook-f",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/",
    icon: "fa-instagram",
    label: "Instagram",
  },
  { href: "https://x.com/", icon: "fa-x-twitter", label: "X" },
  {
    href: "https://www.linkedin.com/",
    icon: "fa-linkedin-in",
    label: "LinkedIn",
  },
];

const serviceMenuItems = [
  { icon: "tji-service-1", title: "Business Strategy Development" },
  { icon: "tji-service-2", title: "Customer Experience Solutions" },
  { icon: "tji-service-3", title: "Sustainability and ESG Consulting" },
  { icon: "tji-service-4", title: "Training and Development Programs" },
  { icon: "tji-service-5", title: "IT Support & Maintenance" },
  { icon: "tji-service-6", title: "Marketing Strategy & Campaigns" },
];

function itemClassName(isActive, baseClassName = "") {
  if (!isActive) {
    return baseClassName || undefined;
  }

  return baseClassName
    ? `${baseClassName} current-menu-ancestor`
    : "current-menu-ancestor";
}

function topItemClassName(isActive) {
  return isActive ? "current-menu-item" : undefined;
}

function getHeaderState(pathname) {
  if (pathname === "/") {
    return {
      mainHeaderClassName: "header-area header-1 header-absolute section-gap-x",
      stickyHeaderClassName:
        "header-area header-1 header-duplicate header-sticky section-gap-x",
      activeSection: "home",
    };
  }

  if (pathname === "/contact") {
    return {
      mainHeaderClassName: "header-area header-1 section-gap-x",
      stickyHeaderClassName:
        "header-area header-1 header-duplicate header-sticky section-gap-x",
      activeSection: "contact",
    };
  }

  if (pathname === "/pricing") {
    return {
      mainHeaderClassName: "header-area header-1 section-gap-x",
      stickyHeaderClassName:
        "header-area header-1 header-duplicate header-sticky section-gap-x",
      activeSection: "pricing",
    };
  }

  if (pathname.startsWith("/blog")) {
    return {
      mainHeaderClassName: "header-area header-1 section-gap-x",
      stickyHeaderClassName:
        "header-area header-1 header-duplicate header-sticky section-gap-x",
      activeSection: "blog",
      activeSubmenu: pathname === "/blog-details" ? "blog-details" : "blogs",
    };
  }

  if (pathname.startsWith("/team")) {
    return {
      mainHeaderClassName: "header-area header-1 section-gap-x",
      stickyHeaderClassName:
        "header-area header-1 header-duplicate header-sticky section-gap-x",
      activeSection: "team",
    };
  }

  return {
    mainHeaderClassName: "header-area header-1 section-gap-x",
    stickyHeaderClassName:
      "header-area header-1 header-duplicate header-sticky section-gap-x",
    activeSection: "",
  };
}

export default function Header() {
  const pathname = usePathname();
  const {
    mainHeaderClassName,
    stickyHeaderClassName,
    activeSection,
    activeSubmenu,
  } = getHeaderState(pathname);

  const renderMenu = () => (
    <ul>
      <li className={topItemClassName(activeSection === "home")}>
        <Link href="/">Home</Link>
      </li>
      <li className={topItemClassName(activeSection === "pricing")}>
        <Link href="/pricing">Pricing</Link>
      </li>
      <li className="has-dropdown">
        <Link href="/service">Services</Link>
        <ul className="sub-menu  mega-menu-service">
          {serviceMenuItems.map((item) => (
            <li key={item.title}>
              <Link
                className="mega-menu-service-single"
                href="/service-details"
              >
                <span className="mega-menu-service-icon">
                  <i className={item.icon} />
                </span>
                <span className="mega-menu-service-title">{item.title}</span>
                <span className="mega-menu-service-nav">
                  <i className="tji-arrow-right-long" />
                  <i className="tji-arrow-right-long" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </li>
      <li className={topItemClassName(activeSection === "team")}>
        <Link href="/team">Team</Link>
      </li>
      <li className={topItemClassName(activeSection === "blog")}>
        <Link href="/blogs">Blog</Link>
      </li>
      <li className={topItemClassName(activeSection === "contact")}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );

  const renderHeader = (className, navId) => (
    <>
      {/* start: Header Area */}
      <header className={className}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="header-wrapper">
                <div className="site_logo">
                  <Link className="logo" href="/">
                    <img
                      src="/assets/images/logos/youngsightcorporation-logo.svg"
                      alt="youngsightcorporation logo"
                    />
                  </Link>
                </div>
                <div className="menu-area d-none d-lg-inline-flex align-items-center">
                  <nav {...(navId ? { id: navId } : {})} className="mainmenu">
                    {renderMenu()}
                  </nav>
                </div>
                <div className="header-right-item d-none d-lg-inline-flex">
                  <div className="header-search">
                    <button className="search">
                      <i className="tji-search" />
                    </button>
                    <button type="button" className="search_close_btn">
                      <svg
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17 1L1 17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 1L17 17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="header-button">
                    <Link className="tj-primary-btn" href="/contact">
                      <span className="btn-text">
                        <span>Let's Talk</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long" />
                      </span>
                    </Link>
                  </div>
                  <div className="menu_bar menu_offcanvas d-none d-lg-inline-flex">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
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
    </>
  );

  return (
    <>
      {/* start: Offcanvas Menu */}
      <div className="tj-offcanvas-area d-none d-lg-block">
        <div className="hamburger_bg" />
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link href="/" className="mobile_logo">
                  <img
                    src="/assets/images/logos/youngsightcorporation-logo-light.svg"
                    alt="youngsightcorporation logo"
                  />
                </Link>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn">
                  <i className="fa-thin fa-times" />
                </button>
              </div>
            </div>
            <div className="offcanvas-text">
              <p>
                Developing personalize our customer journeys to increase
                satisfaction &amp; loyalty of our expansion recognized by
                industry leaders.
              </p>
            </div>
            <div className="hamburger-search-area">
              <h5 className="hamburger-title">Search Now!</h5>
              <div className="hamburger_search">
                <form method="get" action="/">
                  <button type="submit">
                    <i className="tji-search" />
                  </button>
                  <input
                    type="search"
                    autoComplete="off"
                    name="s"
                    defaultValue=""
                    placeholder="Search here..."
                  />
                </form>
              </div>
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="subtitle">Phone</span>
                  <a className="contact-link" href="tel:10095447818">
                    +1 (009) 544-7818
                  </a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Email</span>
                  <a className="contact-link" href="mailto:info@youngsightcorporation.com">
                    info@youngsightcorporation.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Location</span>
                  <span className="contact-link">
                    993 Renner Burg, West Rond, MT 94251-030
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow Us</h5>
            <div className="social-links style-3">
              <ul>
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                    >
                      <i className={`fa-brands ${item.icon}`} />
                    </a>
                  </li>
                ))}
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
                  <img
                    src="/assets/images/logos/youngsightcorporation-logo-light.svg"
                    alt="youngsightcorporation logo"
                  />
                </Link>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn">
                  <i className="fa-thin fa-times" />
                </button>
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
                  <a className="contact-link" href="tel:8089091313">
                    808-909-1313
                  </a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Email</span>
                  <a className="contact-link" href="mailto:info@youngsightcorporation.com">
                    info@youngsightcorporation.com
                  </a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Location</span>
                  <span className="contact-link">
                    993 Renner Burg, West Rond, MT 94251-030
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow Us</h5>
            <div className="social-links style-3">
              <ul>
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                    >
                      <i className={`fa-brands ${item.icon}`} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end: Hamburger Menu */}
      {renderHeader(mainHeaderClassName, "mobile-menu")}
      {renderHeader(stickyHeaderClassName)}
    </>
  );
}



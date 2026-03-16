import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: Blog Section */}
      <section className="tj-blog-section section-gap slidebar-stickiy-container">
        <div className="container">
          <div className="row row-gap-5">
            <div className="col-lg-8">
              <div className="post-details-wrapper">
                <div className="blog-images wow fadeInUp" data-wow-delay=".1s">
                  <img
                    src="/assets/images/project/project-details.webp"
                    alt="Images"
                  />
                </div>
                <h2 className="title title-anim">
                  Designing a Modern Brand Identity for Competitive Edge
                </h2>
                <div className="blog-text">
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    Rebranding is more than just a logo change or a new color
                    palette; it's about reshaping how your company is perceived
                    in the marketplace. At [Company Name], we specialize in
                    crafting comprehensive rebranding strategies that align your
                    business with its evolving goals, values, and target
                    audience. Whether you're launching in new markets, updating
                    your identity for modern relevance, or simply reinvigorating
                    a tired brand, we take a holistic approach to ensure your
                    brand resonates with customers on a deeper level.
                  </p>
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    Our rebranding process is rooted in strategic thinking,
                    market research, and creativity. We work closely with you to
                    understand your business, vision, and customers, ensuring
                    that every element of the rebrandâ from visual design to
                    messagingâ is authentic and impactful. The end result is a
                    refreshed brand that speaks.
                  </p>
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    Project Overview
                  </h3>
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    In today's dynamic market, a strong and consistent brand
                    identity is key to standing out and driving growth. [Client
                    Name], a growing business in the Young Sight Corporation, recognized the need
                    to evolve its brand to better resonate with an expanding
                    audience and adapt to shifting market trends.
                  </p>
                  <ul className="wow fadeInUp" data-wow-delay=".3s">
                    <li>
                      <span>
                        <i className="tji-check" />
                      </span>
                      Brand Audit &amp; Research
                    </li>
                    <li>
                      <span>
                        <i className="tji-check" />
                      </span>
                      Holder &amp; Internal Communication
                    </li>
                    <li>
                      <span>
                        <i className="tji-check" />
                      </span>
                      Customer Experience
                    </li>
                    <li>
                      <span>
                        <i className="tji-check" />
                      </span>
                      Strategy Development
                    </li>
                    <li>
                      <span>
                        <i className="tji-check" />
                      </span>
                      Launch &amp; Marketing
                    </li>
                    <li>
                      <span>
                        <i className="tji-check" />
                      </span>
                      Creative Direction
                    </li>
                    <li>
                      <span>
                        <i className="tji-check" />
                      </span>
                      Touchpoints
                    </li>
                  </ul>
                  <h3 className="wow fadeInUp" data-wow-delay=".3s">
                    Project Galley
                  </h3>
                  <p className="wow fadeInUp" data-wow-delay=".3s">
                    Our Rebranding Strategy for [Client Name] transformed their
                    entire brand identity, from a fresh new logo to an updated
                    visual design that resonates with their growing audience.
                  </p>
                  <div className="images-wrap">
                    <div className="row">
                      <div className="col-sm-12">
                        <div
                          className="image-box wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <Link
                            className="gallery"
                            data-gall="gallery"
                            href="/assets/images/project/project-gallery-1.webp"
                          >
                            <img
                              src="/assets/images/project/project-gallery-1.webp"
                              alt="Image"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div
                          className="image-box wow fadeInUp"
                          data-wow-delay=".3s"
                        >
                          <Link
                            className="gallery"
                            data-gall="gallery"
                            href="/assets/images/project/project-gallery-2.webp"
                          >
                            <img
                              src="/assets/images/project/project-gallery-2.webp"
                              alt="Image"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div
                          className="image-box wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <Link
                            className="gallery"
                            data-gall="gallery"
                            href="/assets/images/project/project-gallery-3.webp"
                          >
                            <img
                              src="/assets/images/project/project-gallery-3.webp"
                              alt="Image"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tj-post__navigation mb-0 wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  {/* previous post */}
                  <div className="tj-nav__post previous">
                    <div className="tj-nav-post__nav prev_post">
                      <Link href="/portfolio-details">
                        <span>
                          <i className="tji-arrow-left" />
                        </span>
                        Previous
                      </Link>
                    </div>
                  </div>
                  <div className="tj-nav-post__grid">
                    <Link href="/portfolio">
                      <i className="tji-window" />
                    </Link>
                  </div>
                  {/* next post */}
                  <div className="tj-nav__post next">
                    <div className="tj-nav-post__nav next_post">
                      <Link href="/portfolio-details">
                        Next
                        <span>
                          <i className="tji-arrow-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="tj-main-sidebar slidebar-stickiy">
                <div
                  className="tj-sidebar-widget widget-categories wow fadeInUp"
                  data-wow-delay=".1s"
                >
                  <h4 className="widget-title">Project Info</h4>
                  <div className="infos-item">
                    <div className="project-icons">
                      <i className="tji-user" />
                    </div>
                    <div className="project-text">
                      <span>Clients</span>
                      <h6 className="title">Innovate Interiors Group</h6>
                    </div>
                  </div>
                  <div className="infos-item">
                    <div className="project-icons">
                      <i className="tji-budget" />
                    </div>
                    <div className="project-text">
                      <span>Budget</span>
                      <h6 className="title">$100M USD</h6>
                    </div>
                  </div>
                  <div className="infos-item">
                    <div className="project-icons">
                      <i className="tji-location-2" />
                    </div>
                    <div className="project-text">
                      <span>Location</span>
                      <h6 className="title">Maplewood Heights, CA</h6>
                    </div>
                  </div>
                  <div className="infos-item">
                    <div className="project-icons">
                      <i className="tji-chart" />
                    </div>
                    <div className="project-text">
                      <span>Sector</span>
                      <h6 className="title">Corporate Business</h6>
                    </div>
                  </div>
                  <div className="infos-item">
                    <div className="project-icons">
                      <i className="tji-calendar" />
                    </div>
                    <div className="project-text">
                      <span>Complete date</span>
                      <h6 className="title">OCT 20, 2024</h6>
                    </div>
                  </div>
                </div>
                <div
                  className="tj-sidebar-widget widget-feature-item wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <div className="feature-box">
                    <div className="feature-content">
                      <h2 className="title">Modern</h2>
                      <span>Home Makeover</span>
                      <a
                        className="read-more feature-contact"
                        href="tel:8321890640"
                      >
                        <i className="tji-phone-3" />
                        <span>+8 (321) 890-640</span>
                      </a>
                    </div>
                    <div className="feature-images">
                      <img
                        src="/assets/images/service/service-ad.webp"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Blog Section */}
      {/* start: Cta Section */}
      <section className="tj-cta-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="cta-area">
                <div className="cta-content">
                  <h2 className="title title-anim">
                    Let's Build Future Together.
                  </h2>
                  <div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
                    <Link className="tj-primary-btn btn-dark" href="/contact">
                      <span className="btn-text">
                        <span>Get Started Now</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long" />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="cta-img">
                  <img src="/assets/images/cta/cta-bg.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Cta Section */}
    </main>
  );
}



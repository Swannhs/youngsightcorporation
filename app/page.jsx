import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

const solutionCards = [
  {
    icon: "tji-service-1",
    image: "/assets/images/service/service-1.webp",
    title: "Business Strategy Development",
    description:
      "Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized.",
  },
  {
    icon: "tji-service-2",
    image: "/assets/images/service/service-3.webp",
    title: "Customer Experience Solutions",
    description:
      "Developing personalized customer journeys to increase satisfaction and loyalty of our expansion to keep competitive.",
  },
  {
    icon: "tji-service-3",
    image: "/assets/images/service/service-4.webp",
    title: "Sustainability and ESG Consulting",
    description:
      "Provide tailored strategies that not only drive long-term value but also build trust with stakeholders, investors.",
  },
  {
    icon: "tji-service-4",
    image: "/assets/images/service/service-5.webp",
    title: "Training and Development Programs",
    description:
      "Training and Development Programs are designed to empower employees with the skills, knowledge, and tools they need.",
  },
];

const projectCards = [
  {
    image: "/assets/images/project/project-1.webp",
    category: "Connect",
    title: "Event Management Platform",
  },
  {
    image: "/assets/images/project/project-2.webp",
    category: "Empower",
    title: "Digital Marketing Campaign",
  },
  {
    image: "/assets/images/project/project-3.webp",
    category: "Support",
    title: "Interactive Learning Platform",
  },
  {
    image: "/assets/images/project/project-4.webp",
    category: "Business",
    title: "Environmental Impact Dashboard",
  },
];

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: Banner Section */}
      <section className="tj-banner-section section-gap-x">
        <div className="banner-area">
          <div className="banner-left-box">
            <div className="banner-content">
              <span className="sub-title wow fadeInDown" data-wow-delay=".2s">
                <i className="tji-excellence" /> Recognized for Excellence
              </span>
              <h1 className="banner-title title-anim">
                Driving Excellence Through Evolution and
                <span>Trust.</span>
              </h1>
              <div
                className="banner-desc-area wow fadeInUp"
                data-wow-delay=".7s"
              >
                <Link className="banner-link" href="/about">
                  <span>
                    <i className="tji-arrow-right-big" />
                  </span>
                </Link>
                <div className="banner-desc">
                  Represents growth, expansion, and modern business solution
                  present growth, expansion.
                </div>
              </div>
            </div>
            <div className="banner-shape">
              <img src="/assets/images/shape/pattern-bg.webp" alt="" />
            </div>
          </div>
          <div className="banner-right-box">
            <div className="banner-img">
              <img
                data-speed="0.8"
                src="/assets/images/hero/hero-img.webp"
                alt=""
              />
            </div>
            <div className="box-area">
              <div className="customers-box">
                <div className="customers">
                  <ul>
                    <li className="wow fadeInLeft" data-wow-delay=".5s">
                      <img
                        src="/assets/images/testimonial/client-1.webp"
                        alt=""
                      />
                    </li>
                    <li className="wow fadeInLeft" data-wow-delay=".6s">
                      <img
                        src="/assets/images/testimonial/client-2.webp"
                        alt=""
                      />
                    </li>
                    <li className="wow fadeInLeft" data-wow-delay=".7s">
                      <img
                        src="/assets/images/testimonial/client-3.webp"
                        alt=""
                      />
                    </li>
                    <li className="wow fadeInLeft" data-wow-delay=".8s">
                      <span>
                        <i className="tji-plus" />
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  className="customers-number wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  30K
                </div>
                <h6
                  className="customers-text wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  Happy customer we have world-wide.
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-scroll wow fadeInDown" data-wow-delay="2s">
          <Link href="#choose" className="scroll-down tj-scroll-btn">
            <span>
              <i className="tji-arrow-down-long" />
            </span>
            Scroll Down
          </Link>
        </div>
      </section>
      {/* end: Banner Section */}
      {/* start: Choose Section */}
      <section id="choose" className="tj-choose-section section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading text-center">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box" />
                  Choose the Best
                </span>
                <h2 className="sec-title title-anim">
                  Empowering Business with <span>Expertise.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row row-gap-4 rightSwipeWrap">
            <div className="col-lg-4">
              <div className="choose-box right-swipe">
                <div className="choose-content">
                  <div className="choose-icon">
                    <i className="tji-innovative" />
                  </div>
                  <h4 className="title">Innovative Solutions</h4>
                  <p className="desc">
                    We stay ahead of the curve, leveraging cutting-edge
                    technologies and strategies to keep you competitive in a
                    marketplace.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="choose-box right-swipe">
                <div className="choose-content">
                  <div className="choose-icon">
                    <i className="tji-award" />
                  </div>
                  <h4 className="title">Award-Winning Expertise</h4>
                  <p className="desc">
                    Recognized by industry leaders, our award-winning team has a
                    proven record of delivering excellence across projects.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="choose-box right-swipe">
                <div className="choose-content">
                  <div className="choose-icon">
                    <i className="tji-support" />
                  </div>
                  <h4 className="title">Dedicated Support</h4>
                  <p className="desc">
                    Our team is always available to address your concerns,
                    providing quick and effective solution to keep your
                    business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Choose Section */}
      {/* start: Client Section */}
      <section
        className="tj-client-section client-section-gap wow fadeInUp"
        data-wow-delay=".4s"
      >
        <div className="container-fluid client-container">
          <div className="row">
            <div className="col-12">
              <div className="client-content">
                <h5 className="sec-title">
                  Join Over <span className="client-numbers">1000+</span>{" "}
                  Companies with
                  <span className="client-text">Young Sight Corporation</span> Here
                </h5>
              </div>
              <div className="swiper client-slider client-slider-1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/brand-1.webp" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/brand-2.webp" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/brand-3.webp" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/brand-4.webp" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/brand-5.webp" alt="" />
                    </div>
                  </div>
                  <div className="swiper-slide client-item">
                    <div className="client-logo">
                      <img src="/assets/images/brands/brand-6.webp" alt="" />
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
          <div className="row">
            <div className="col-xl-6 col-lg-6 order-lg-1 order-2">
              <div
                className="about-img-area wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <div className="about-img overflow-hidden">
                  <img
                    data-speed="0.8"
                    src="/assets/images/about/about-1.webp"
                    alt=""
                  />
                </div>
                <div className="box-area">
                  <div
                    className="experience-box wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <span className="sub-title">Experiences</span>
                    <div className="customers-number">13+</div>
                    <h6 className="customers-text">
                      Decades of Experience, Endless Innovation
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 order-lg-2 order-1">
              <div
                className="about-content-area style-1 wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <div className="sec-heading">
                  <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                    <i className="tji-box" />
                    Get to Know Us
                  </span>
                  <h2 className="sec-title title-anim">
                    Empowering Businesses with Innovation, Expertise, and for{" "}
                    <span>Success.</span>
                  </h2>
                </div>
                <div className="wow fadeInUp" data-wow-delay=".5s">
                  <Link className="text-btn" href="/about">
                    <span className="btn-text">
                      <span>Learn More</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="about-bottom-area">
                <div
                  className="client-review-cont wow fadeInUp"
                  data-wow-delay=".7s"
                >
                  <div className="rating-area">
                    <div className="star-ratings">
                      <div className="fill-ratings" style={{ width: "100%" }}>
                        <span>âââââ</span>
                      </div>
                      <div className="empty-ratings">
                        <span>âââââ</span>
                      </div>
                    </div>
                  </div>
                  <p className="desc">
                    We believe in building lasting relationships with our
                    clients through trust, innovation, and exceptional service.
                  </p>
                  <div className="client-info-area">
                    <div className="client-info">
                      <h6 className="title">Esther Howard</h6>
                      <span className="designation">Co.Founder</span>
                    </div>
                    <span className="quote-icon">
                      <i className="tji-quote" />
                    </span>
                  </div>
                </div>
                <div className="video-img  wow fadeInUp" data-wow-delay=".9s">
                  <img src="/assets/images/about/about-2.webp" alt="" />
                  <a
                    className="video-btn video-popup"
                    data-autoplay="true"
                    data-vbtype="video"
                    data-maxwidth="1200px"
                    href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados"
                  >
                    <span>
                      <i className="tji-play" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: About Section */}
      {/* start: Service Section */}
      <section className="tj-service-section overflow-hidden section-gap section-gap-x">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading text-center">
                <span
                  className="sub-title text-white wow fadeInUp"
                  data-wow-delay=".3s"
                >
                  <i className="tji-box" />
                  Our Solutions
                </span>
                <h2 className="sec-title text-white title-anim">
                  Solutions to Transform Your <span>Business.</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <div
                className="service-wrapper service-grid wow fadeInUp"
                data-wow-delay=".4s"
              >
                {solutionCards.map((card) => (
                  <div key={card.title} className="service-grid-item">
                    <div className="service-item style-1">
                      <div className="service-img">
                        <img src={card.image} alt={card.title} />
                      </div>
                      <div className="service-icon">
                        <i className={card.icon} />
                      </div>
                      <div className="service-content">
                        <h4 className="title">
                          <Link href="/service-details">{card.title}</Link>
                        </h4>
                        <p className="desc">{card.description}</p>
                        <Link className="text-btn" href="/service-details">
                          <span className="btn-text">
                            <span>Learn More</span>
                          </span>
                          <span className="btn-icon">
                            <i className="tji-arrow-right-long" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
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
      {/* end: Service Section */}
      {/* start: Project Section */}
      <section className="tj-project-section section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading-wrap">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box" />
                  Proud Projects
                </span>
                <div className="heading-wrap-content">
                  <div className="sec-heading">
                    <h2 className="sec-title title-anim">
                      Breaking Boundaries, Building <span>Dreams.</span>
                    </h2>
                  </div>
                  <p className="desc wow fadeInUp" data-wow-delay=".5s">
                    We work closely with our clients to understand their unique
                    needs and craft tailored solutions that address challenges.
                  </p>
                  <div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
                    <Link className="tj-primary-btn" href="/portfolio">
                      <span className="btn-text">
                        <span>More Projects</span>
                      </span>
                      <span className="btn-icon">
                        <i className="tji-arrow-right-long" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="project-area tj-arrange-container">
                {projectCards.map((card) => (
                  <div key={card.title} className="project-item tj-arrange-item">
                    <div
                      className="project-img"
                      data-bg-image={card.image}
                      style={{ backgroundImage: `url('${card.image}')` }}
                    />
                    <div className="project-content">
                      <span className="categories">
                        <Link href="/portfolio-details">{card.category}</Link>
                      </span>
                      <div className="project-text">
                        <h4 className="title">
                          <Link href="/portfolio-details">{card.title}</Link>
                        </h4>
                        <Link className="project-btn" href="/portfolio-details">
                          <i className="tji-arrow-right-long" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Project Section */}
      {/* start: Countup Section */}
      <div className="tj-countup-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="countup-wrap">
                <div className="countup-item">
                  <div className="inline-content">
                    <span className="odometer countup-number" data-count={93} />
                    <span className="count-plus">%</span>
                  </div>
                  <span className="count-text">Projects Completed.</span>
                  <span
                    className="count-separator"
                    data-bg-image="/assets/images/shape/separator.svg"
                  />
                </div>
                <div className="countup-item">
                  <div className="inline-content">
                    <span className="odometer countup-number" data-count={20} />
                    <span className="count-plus">M</span>
                  </div>
                  <span className="count-text">Reach Worldwide</span>
                  <span
                    className="count-separator"
                    data-bg-image="/assets/images/shape/separator.svg"
                  />
                </div>
                <div className="countup-item">
                  <div className="inline-content">
                    <span
                      className="odometer countup-number"
                      data-count="8.5"
                    />
                    <span className="count-plus">X</span>
                  </div>
                  <span className="count-text">Faster Growth</span>
                  <span
                    className="count-separator"
                    data-bg-image="/assets/images/shape/separator.svg"
                  />
                </div>
                <div className="countup-item">
                  <div className="inline-content">
                    <span
                      className="odometer countup-number"
                      data-count={100}
                    />
                    <span className="count-plus">+</span>
                  </div>
                  <span className="count-text">Awards Archived</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end: Countup Section */}
      {/* start: Testimonial Section */}
      <section className="tj-testimonial-section section-gap section-gap-x">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12">
              <div className="sec-heading-wrap">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box" />
                  Clients Feedback
                </span>
                <div className="heading-wrap-content">
                  <div className="sec-heading">
                    <h2 className="sec-title title-anim">
                      Success <span>Stories</span> Fuel our Innovation.
                    </h2>
                  </div>
                  <div
                    className="slider-navigation d-inline-flex wow fadeInUp"
                    data-wow-delay=".4s"
                  >
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
              <div
                className="testimonial-wrapper wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="swiper swiper-container testimonial-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-item">
                        <span className="quote-icon">
                          <i className="tji-quote" />
                        </span>
                        <div className="desc">
                          <p>
                            Working with Young Sight Corporation has been a game-changer for our
                            business. Their team's professionalism, attention to
                            detail, and innovative solutions have helped us
                            streamline operations and achieve our goals faster
                            than we imagined. We truly feel like a valued
                            partner.
                          </p>
                        </div>
                        <div className="testimonial-author">
                          <div className="author-inner">
                            <div className="author-img">
                              <img
                                src="/assets/images/testimonial/client-1.webp"
                                alt=""
                              />
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
                        <span className="quote-icon">
                          <i className="tji-quote" />
                        </span>
                        <div className="desc">
                          <p>
                            The results we've seen after partnering with Young Sight Corporation
                            are beyond our expectations. They not only
                            understood our vision but also brought new ideas to
                            the table that have taken our business to the next
                            level. Their expertise and commitment to success
                            make them a trusted.
                          </p>
                        </div>
                        <div className="testimonial-author">
                          <div className="author-inner">
                            <div className="author-img">
                              <img
                                src="/assets/images/testimonial/client-2.webp"
                                alt=""
                              />
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
                        <span className="quote-icon">
                          <i className="tji-quote" />
                        </span>
                        <div className="desc">
                          <p>
                            We've been working with Young Sight Corporation for years, and they
                            continue to deliver outstanding results. Their team
                            is proactive, responsive, and always goes the extra
                            mile to ensure our needs are met. They've become a
                            key contributor to our growth and success that
                            really help us"
                          </p>
                        </div>
                        <div className="testimonial-author">
                          <div className="author-inner">
                            <div className="author-img">
                              <img
                                src="/assets/images/testimonial/client-3.webp"
                                alt=""
                              />
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
        <div className="bg-shape-1">
          <img src="/assets/images/shape/pattern-2.svg" alt="" />
        </div>
        <div className="bg-shape-2">
          <img src="/assets/images/shape/pattern-3.svg" alt="" />
        </div>
      </section>
      {/* end: Testimonial Section */}
      {/* start: Faq Section */}
      <section className="tj-faq-section section-gap tj-arrange-container-2">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="faq-img-area tj-arrange-item-2">
                <div className="faq-img overflow-hidden">
                  <img src="/assets/images/faq/faq.webp" alt="" />
                  <h2 className="title">Need Help? Start Here...</h2>
                </div>
                <div className="box-area ">
                  <div className="call-box">
                    <h4 className="title">Get Started Free Call? </h4>
                    <span className="call-icon">
                      <i className="tji-phone" />
                    </span>
                    <a className="number" href="tel:18884521505">
                      <span>1-888-452-1505</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="accordion tj-faq tj-arrange-item-2" id="faqOne">
                <div className="accordion-item active">
                  <button
                    className=" faq-title"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-1"
                    aria-expanded="true"
                  >
                    What services does Young Sight Corporation offer to clients?
                  </button>
                  <div
                    id="faq-1"
                    className="collapse show"
                    data-bs-parent="#faqOne"
                  >
                    <div className="accordion-body faq-text">
                      <p>
                        Getting started is easy! Simply reach out to us through
                        our contact form or give us a call, and we'll schedule a
                        consultation to discuss your project and how we can best
                        assist you. Our team keeps you informed throughout the
                        process, ensuring quality control and timely delivery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-2"
                    aria-expanded="false"
                  >
                    How do I get started with Corporate Business?
                  </button>
                  <div id="faq-2" className="collapse" data-bs-parent="#faqOne">
                    <div className="accordion-body faq-text">
                      <p>
                        Getting started is easy! Simply reach out to us through
                        our contact form or give us a call, and we'll schedule a
                        consultation to discuss your project and how we can best
                        assist you. Our team keeps you informed throughout the
                        process, ensuring quality control and timely delivery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-3"
                    aria-expanded="false"
                  >
                    How do you ensure the success of a project?
                  </button>
                  <div id="faq-3" className="collapse" data-bs-parent="#faqOne">
                    <div className="accordion-body faq-text">
                      <p>
                        Getting started is easy! Simply reach out to us through
                        our contact form or give us a call, and we'll schedule a
                        consultation to discuss your project and how we can best
                        assist you. Our team keeps you informed throughout the
                        process, ensuring quality control and timely delivery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-4"
                    aria-expanded="false"
                  >
                    How long will it take to complete my project?
                  </button>
                  <div id="faq-4" className="collapse" data-bs-parent="#faqOne">
                    <div className="accordion-body faq-text">
                      <p>
                        Getting started is easy! Simply reach out to us through
                        our contact form or give us a call, and we'll schedule a
                        consultation to discuss your project and how we can best
                        assist you. Our team keeps you informed throughout the
                        process, ensuring quality control and timely delivery.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <button
                    className="faq-title collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#faq-5"
                    aria-expanded="false"
                  >
                    Can I track the progress of my project?
                  </button>
                  <div id="faq-5" className="collapse" data-bs-parent="#faqOne">
                    <div className="accordion-body faq-text">
                      <p>
                        Getting started is easy! Simply reach out to us through
                        our contact form or give us a call, and we'll schedule a
                        consultation to discuss your project and how we can best
                        assist you. Our team keeps you informed throughout the
                        process, ensuring quality control and timely delivery.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Faq Section */}
      {/* start: Contact Section */}
      <section className="tj-contact-section section-gap section-gap-x">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="global-map wow fadeInUp" data-wow-delay=".3s">
                <div className="global-map-img">
                  <img src="/assets/images/bg/map.svg" alt="Image" />
                  <div className="location-indicator loc-1">
                    <div className="location-tooltip">
                      <span>Head office:</span>
                      <p>993 Renner Burg, West Rond, MT 94251-030, USA.</p>
                      <a href="tel:10095447818">P: +1 (009) 544-7818</a>
                      <a href="mailto:support@youngsightcorporation.com">
                        M: support@youngsightcorporation.com
                      </a>
                    </div>
                  </div>
                  <div className="location-indicator loc-2">
                    <div className="location-tooltip">
                      <span>Regional office:</span>
                      <p>Hessisch Lichtenau 37235, Kassel, Germany.</p>
                      <a href="tel:10098801810">P: +1 (009) 880-1810</a>
                      <a href="mailto:support@youngsightcorporation.com">
                        M: support@youngsightcorporation.com
                      </a>
                    </div>
                  </div>
                  <div className="location-indicator loc-3">
                    <div className="location-tooltip">
                      <span>Regional office:</span>
                      <p>32 Altamira, State of ParÃ¡, Brazil.</p>
                      <a href="tel:10095447818">P: +1 (009) 544-7818</a>
                      <a href="mailto:support@youngsightcorporation.com">
                        M: support@youngsightcorporation.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="contact-form style-2 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="sec-heading">
                  <span className="sub-title text-white">
                    <i className="tji-box" />
                    Get in Touch
                  </span>
                  <h2 className="sec-title title-anim">
                    Drop Us a <span>Line.</span>
                  </h2>
                </div>
                <form id="contact-form-2">
                  <div className="row wow fadeInUp" data-wow-delay=".5s">
                    <div className="col-sm-6">
                      <div className="form-input">
                        <input
                          type="text"
                          name="cfName2"
                          placeholder="Full Name *"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-input">
                        <input
                          type="email"
                          name="cfEmail2"
                          placeholder="Email Address *"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-input">
                        <input
                          type="tel"
                          name="cfPhone2"
                          placeholder="Phone number *"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-input">
                        <div className="tj-nice-select-box">
                          <div className="tj-select">
                            <select name="cfSubject2">
                              <option value={0}>Chose a option</option>
                              <option value={1}>Business Strategy</option>
                              <option value={2}>Customer Experience</option>
                              <option value={3}>Sustainability and ESG</option>
                              <option value={4}>
                                Training and Development
                              </option>
                              <option value={5}>
                                IT Support &amp; Maintenance
                              </option>
                              <option value={6}>Marketing Strategy</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-input message-input">
                        <textarea
                          name="cfMessage2"
                          id="message"
                          placeholder="Type message *"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="submit-btn">
                      <button className="tj-primary-btn" type="submit">
                        <span className="btn-text">
                          <span>Send Message</span>
                        </span>
                        <span className="btn-icon">
                          <i className="tji-arrow-right-long" />
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
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
      {/* end: Contact Section */}
      {/* start: Blog Section */}
      <section className="tj-blog-section section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-heading text-center">
                <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                  <i className="tji-box" />
                  Insights &amp; Ideas
                </span>
                <h2 className="sec-title title-anim">
                  The Ultimate <span>Resource.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row row-gap-4">
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                <div className="blog-thumb">
                  <Link href="/blog-details">
                    <img src="/assets/images/blog/blog-1.webp" alt="" />
                  </Link>
                  <div className="blog-date">
                    <span className="date">28</span>
                    <span className="month">Feb</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="categories">
                      <Link href="/blog-details">Business</Link>
                    </span>
                    <span>
                      By <Link href="/blog-details">Ellinien Loma</Link>
                    </span>
                  </div>
                  <h4 className="title">
                    <Link href="/blog-details">
                      Innovative Solutions for every Business Success.
                    </Link>
                  </h4>
                  <Link className="text-btn" href="/blog-details">
                    <span className="btn-text">
                      <span>Read More</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                <div className="blog-thumb">
                  <Link href="/blog-details">
                    <img src="/assets/images/blog/blog-2.webp" alt="" />
                  </Link>
                  <div className="blog-date">
                    <span className="date">28</span>
                    <span className="month">Feb</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="categories">
                      <Link href="/blog-details">Business</Link>
                    </span>
                    <span>
                      By <Link href="/blog-details">Ellinien Loma</Link>
                    </span>
                  </div>
                  <h4 className="title">
                    <Link href="/blog-details">
                      Harnessing Digital Transform a Roadmap Businesses.
                    </Link>
                  </h4>
                  <Link className="text-btn" href="/blog-details">
                    <span className="btn-text">
                      <span>Read More</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="blog-item wow fadeInUp" data-wow-delay=".4s">
                <div className="blog-thumb">
                  <Link href="/blog-details">
                    <img src="/assets/images/blog/blog-3.webp" alt="" />
                  </Link>
                  <div className="blog-date">
                    <span className="date">28</span>
                    <span className="month">Feb</span>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="categories">
                      <Link href="/blog-details">Business</Link>
                    </span>
                    <span>
                      By <Link href="/blog-details">Ellinien Loma</Link>
                    </span>
                  </div>
                  <h4 className="title">
                    <Link href="/blog-details">
                      Mastering Change Management Lessons for Businesses.
                    </Link>
                  </h4>
                  <Link className="text-btn" href="/blog-details">
                    <span className="btn-text">
                      <span>Read More</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long" />
                    </span>
                  </Link>
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



import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: History Section */}
      <section className="terms-and-conditions section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="terms-and-conditions-wrapper">
                <div>
                  <h2>
                    Terms &amp; Conditions{" "}
                    <span className="pill">
                      Bexon - Corporate Business HTML Template
                    </span>
                  </h2>
                  <p className="muted">Last updated: September 9, 2025</p>
                  <p>
                    Thank you for choosing{" "}
                    <strong>Bexon - Corporate Business HTML Template</strong> .
                    These Terms &amp; Conditions govern your use of the Template
                    purchased from{" "}
                    <a
                      href="https://themeforest.net/"
                      target="_blank"
                      rel="noopener"
                    >
                      ThemeForest (Envato Market)
                    </a>
                    . By downloading, installing, or using the Template, you
                    agree to be bound by these Terms and the applicable{" "}
                    <a
                      href="https://themeforest.net/licenses/standard"
                      target="_blank"
                      rel="noopener"
                    >
                      Envato License
                    </a>
                    .
                  </p>
                  <div className="note">
                    <strong>Short version:</strong> You can use Bexon on the
                    number of end products allowed by your Envato license, but
                    you can't resell, redistribute, or share the source files.
                    Support and updates are provided according to the policies
                    below.
                  </div>
                </div>
                <nav className="toc" aria-label="Table of contents">
                  <h2>Table of Contents</h2>
                  <ol>
                    <li>
                      <button
                        className="tj-scroll-btn"
                        data-target="#definitions"
                      >
                        Definitions
                      </button>
                    </li>
                    <li>
                      <button className="tj-scroll-btn" data-target="#license">
                        License &amp; Permitted Use
                      </button>
                    </li>
                    <li>
                      <button
                        className="tj-scroll-btn"
                        data-target="#restrictions"
                      >
                        Restrictions
                      </button>
                    </li>
                    <li>
                      <button className="tj-scroll-btn" data-target="#support">
                        Support Policy
                      </button>
                    </li>
                    <li>
                      <button className="tj-scroll-btn" data-target="#updates">
                        Updates &amp; Compatibility
                      </button>
                    </li>
                  </ol>
                </nav>
                <div id="definitions">
                  <h3>1. Definitions</h3>
                  <p>
                    <strong>"We", "Us", "Our"</strong> refers to{" "}
                    <em>
                      <a href="https://themeforest.net/user/theme-junction">
                        Theme Junction
                      </a>
                    </em>
                    , the author of the Template on ThemeForest.
                  </p>
                  <p>
                    <strong>"You", "Your"</strong> refers to the
                    purchaser/licensee who downloads or uses the Template.
                  </p>
                  <p>
                    <strong>"License"</strong> refers to the Envato Market
                    license (Regular or Extended) under which the Template is
                    purchased. For full details, see the{" "}
                    <a
                      href="https://themeforest.net/licenses/standard"
                      target="_blank"
                      rel="noopener"
                    >
                      Envato License Terms
                    </a>
                    .
                  </p>
                </div>
                <div id="license">
                  <h3>2. License &amp; Permitted Use</h3>
                  <p>
                    Your rights to use the Template are determined by the Envato
                    license you purchased:
                  </p>
                  <ul>
                    <li>
                      <strong>Regular License:</strong> Permits the use of the
                      Template in a single <em>end product</em> that is not
                      offered for sale, where end users are not charged to
                      access or use it.
                    </li>
                    <li>
                      <strong>Extended License:</strong> Permits the use of the
                      Template in a single <em>end product offered for sale</em>{" "}
                      (e.g., a SaaS or paid access site). The Template itself
                      cannot be resold as a template or theme.
                    </li>
                  </ul>
                  <p>
                    Each license is valid for <strong>one end product</strong>.
                    If you need the Template for multiple projects, you must
                    purchase one license for each end product. All uses must
                    comply with Envato's licensing rules.
                  </p>
                </div>
                <div id="restrictions">
                  <h3>3. Restrictions</h3>
                  <p>
                    You agree that you will <strong>not</strong>:
                  </p>
                  <ul>
                    <li>
                      Resell, redistribute, sublicense, share, or make the
                      Template (or any source files) publicly available, except
                      as permitted by your Envato license.
                    </li>
                    <li>
                      Use the Template in any way that competes with the
                      original item (e.g., as a theme/template for sale, or in a
                      template library/marketplace).
                    </li>
                    <li>
                      Remove, obscure, or alter copyright notices, license
                      headers, or item metadata where present.
                    </li>
                    <li>Claim the Template as your own original work.</li>
                    <li>
                      Use the Template for unlawful, harmful, or offensive
                      content, or in violation of any applicable law or
                      regulation.
                    </li>
                  </ul>
                </div>
                <div id="support">
                  <h3>4. Support Policy</h3>
                  <p>
                    Item support is provided in accordance with Envato's{" "}
                    <a
                      href="https://themeforest.net/page/item_support_policy"
                      target="_blank"
                      rel="noopener"
                    >
                      Item Support Policy
                    </a>{" "}
                    for the support period associated with your purchase.
                  </p>
                  <p>
                    <strong>What's included:</strong>
                  </p>
                  <ul>
                    <li>
                      Answering questions about item features and functionality.
                    </li>
                    <li>
                      Bug fixes and reported issue investigation (if the issue
                      is reproducible with the original item).
                    </li>
                    <li>
                      Updates to maintain item compatibility with supported
                      browsers and dependencies listed in the documentation.
                    </li>
                  </ul>
                  <p>
                    <strong>What's not included:</strong>
                  </p>
                  <ul>
                    <li>
                      Installation, customization, or new feature requests.
                    </li>
                    <li>
                      Support for thirdâparty plugins, scripts, or
                      hosting/server issues.
                    </li>
                    <li>
                      Issues arising from modifications beyond the provided code
                      or from outdated dependencies not specified in the docs.
                    </li>
                  </ul>
                  <p>
                    <strong>How to get support:</strong> Please open a ticket or
                    contact us via ThemeForest comments with your{" "}
                    <em>Envato username</em> and <em>purchase code</em>. We may
                    ask for temporary access or additional details to diagnose
                    issues.
                  </p>
                </div>
                <div id="updates">
                  <h3>5. Updates &amp; Compatibility</h3>
                  <p>
                    We may release updates to improve features, fix bugs, or
                    maintain compatibility. You'll have access to updates via
                    your ThemeForest downloads during the support/maintenance
                    period.
                  </p>
                  <ul>
                    <li>
                      The Template is built as a static HTML/CSS/JS item. It
                      does not include serverâside code.
                    </li>
                    <li>
                      Browser support targets versions listed in the
                      documentation. Older/legacy browsers may require polyfills
                      or are not supported.
                    </li>
                  </ul>
                </div>
                <p className="muted">
                  <small>
                    This Terms &amp; Conditions page is provided for general
                    guidance only and does not constitute legal advice. Please
                    consult your legal advisor to adapt it to your specific
                    needs and local laws.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: History Section */}
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


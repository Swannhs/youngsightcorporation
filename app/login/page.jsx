import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: Login Section */}
      <section className="full-width tj-page__area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tj-page__container">
                <div className="tj-entry__content">
                  <div className="woocommerce">
                    <div className="woo-login-form">
                      <h3>Login</h3>
                      <form
                        className="woocommerce-form woocommerce-form-login login"
                        method="post"
                        noValidate
                      >
                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="username">
                            Username or email address&nbsp;
                            <span className="required" aria-hidden="true">
                              *
                            </span>
                          </label>
                          <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            defaultValue
                            required
                            aria-required="true"
                          />
                        </p>
                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="password">
                            Password&nbsp;
                            <span className="required" aria-hidden="true">
                              *
                            </span>
                          </label>
                          <span className="password-input">
                            <input
                              type="password"
                              name="password"
                              id="password"
                              autoComplete="current-password"
                              required
                              aria-required="true"
                            />
                            <button
                              type="button"
                              className="show-password-input"
                              aria-label="Show password"
                              aria-describedby="password"
                            />
                          </span>
                        </p>
                        <div className="row form-row algin-items-center rg-15">
                          <div className="col-6">
                            <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                              <input
                                className="woocommerce-form__input woocommerce-form__input-checkbox"
                                name="rememberme"
                                type="checkbox"
                                id="rememberme"
                                defaultValue="forever"
                              />{" "}
                              <span>Remember me</span>
                            </label>
                          </div>
                          <div className="col-6 text-end">
                            <p className="woocommerce-LostPassword lost_password">
                              <Link href="/password">Lost your password?</Link>
                            </p>
                          </div>
                          <div className="col-sm-12">
                            <button
                              type="submit"
                              className="woocommerce-button button woocommerce-form-login__submit"
                              name="login"
                              value="Log in"
                            >
                              <span className="btn-text">
                                <span>Login</span>
                              </span>
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
        </div>
      </section>
      {/* end: Login Section */}
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


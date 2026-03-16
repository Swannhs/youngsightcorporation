import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: Wishlist Section */}
      <section className="full-width tj-page__area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tj-page__container">
                <div className="tj-entry__content">
                  <div className="woosw-list">
                    <table className="woosw-items">
                      <tbody>
                        <tr className="woosw-item">
                          <td className="woosw-item--remove">
                            <span>Ã</span>
                          </td>
                          <td className="woosw-item--image">
                            <Link href="/shop-details">
                              <img
                                src="/assets/images/product/product-8.webp"
                                alt=""
                              />
                            </Link>
                          </td>
                          <td className="woosw-item--info">
                            <div className="woosw-item--name">
                              <Link href="/shop-details">
                                Super fast charger
                              </Link>
                            </div>
                            <div className="woosw-item--price">
                              <del aria-hidden="true">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  40.00
                                </span>
                              </del>
                              <ins aria-hidden="true">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  25.00
                                </span>
                              </ins>
                            </div>
                          </td>
                          <td className="woosw-item--actions">
                            <div className="woosw-item--stock">
                              <div className="product-stock">
                                <span className="stock out-of-stock">
                                  Out of stock
                                </span>
                              </div>
                            </div>
                            <div className="woosw-item--atc">
                              <p className="product woocommerce add_to_cart_inline ">
                                <Link
                                  href="/shop-details"
                                  className="cart-button button tj-cart-btn stock-out  product_type_simple product-add-cart-btn"
                                >
                                  <span className="btn-icon">
                                    <i className="fal fa-shopping-cart" />
                                    <i className="fal fa-shopping-cart" />
                                  </span>
                                  <span className="btn-text">
                                    <span>Add to cart</span>
                                  </span>
                                </Link>
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr className="woosw-item">
                          <td className="woosw-item--remove">
                            <span>Ã</span>
                          </td>
                          <td className="woosw-item--image">
                            <Link href="/shop-details">
                              <img
                                src="/assets/images/product/product-7.webp"
                                alt=""
                              />
                            </Link>
                          </td>
                          <td className="woosw-item--info">
                            <div className="woosw-item--name">
                              <Link href="/shop-details">booster speaker</Link>
                            </div>
                            <div className="woosw-item--price">
                              <ins aria-hidden="true">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  200.00
                                </span>
                              </ins>
                            </div>
                          </td>
                          <td className="woosw-item--actions">
                            <div className="woosw-item--stock">
                              <div className="product-stock">
                                <span className="stock in-stock">
                                  10 in stock
                                </span>
                              </div>
                            </div>
                            <div className="woosw-item--atc">
                              <p className="product woocommerce add_to_cart_inline ">
                                <Link
                                  href="/shop-details"
                                  className="cart-button button tj-cart-btn stock-out  product_type_simple product-add-cart-btn"
                                >
                                  <span className="btn-icon">
                                    <i className="fal fa-shopping-cart" />
                                    <i className="fal fa-shopping-cart" />
                                  </span>
                                  <span className="btn-text">
                                    <span>Add to cart</span>
                                  </span>
                                </Link>
                              </p>
                            </div>
                          </td>
                        </tr>
                        <tr className="woosw-item">
                          <td className="woosw-item--remove">
                            <span>Ã</span>
                          </td>
                          <td className="woosw-item--image">
                            <Link href="/shop-details">
                              <img
                                src="/assets/images/product/product-1.webp"
                                alt=""
                              />
                            </Link>
                          </td>
                          <td className="woosw-item--info">
                            <div className="woosw-item--name">
                              <Link href="/shop-details">
                                Personal holding earbud
                              </Link>
                            </div>
                            <div className="woosw-item--price">
                              <del aria-hidden="true">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  240.00
                                </span>
                              </del>
                              <ins aria-hidden="true">
                                <span className="woocommerce-Price-amount amount">
                                  <span className="woocommerce-Price-currencySymbol">
                                    $
                                  </span>
                                  200.00
                                </span>
                              </ins>
                            </div>
                          </td>
                          <td className="woosw-item--actions">
                            <div className="woosw-item--stock">
                              <div className="product-stock">
                                <span className="stock in-stock">
                                  10 in stock
                                </span>
                              </div>
                            </div>
                            <div className="woosw-item--atc">
                              <p className="product woocommerce add_to_cart_inline ">
                                <Link
                                  href="/shop-details"
                                  className="cart-button button tj-cart-btn stock-out  product_type_simple product-add-cart-btn"
                                >
                                  <span className="btn-icon">
                                    <i className="fal fa-shopping-cart" />
                                    <i className="fal fa-shopping-cart" />
                                  </span>
                                  <span className="btn-text">
                                    <span>Add to cart</span>
                                  </span>
                                </Link>
                              </p>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* /woosw-list */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Wishlist Section */}
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


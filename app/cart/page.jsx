import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: Cart Section */}
      <section className="full-width tj-page__area section-gap">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tj-page__container">
                {/* page content */}
                <div className="woocommerce">
                  <div className="woocommerce-notices-wrapper" />
                  <div className="row cart-wrapper ">
                    <div className="col-sm-12">
                      <form className="woocommerce-cart-form section-bottom-gap">
                        <div className="shop_table_wrapper">
                          <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents">
                            <thead>
                              <tr>
                                <th className="product-thumbnail">Product</th>
                                <th className="product-name" />
                                <th className="product-price">Price</th>
                                <th className="product-quantity">Quantity</th>
                                <th className="product-subtotal">Subtotal</th>
                                <th className="product-remove">&nbsp;</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="woocommerce-cart-form__cart-item cart_item">
                                <td
                                  className="product-thumbnail"
                                  data-title="Product"
                                >
                                  <Link href="/shop-details">
                                    <img
                                      src="/assets/images/product/product-1.webp"
                                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                      alt="Personal holding earbud"
                                    />
                                  </Link>
                                </td>
                                <td className="product-name" data-title="Name">
                                  <h5>
                                    <Link href="/shop-details">
                                      Personal holding earbud
                                    </Link>
                                  </h5>
                                </td>
                                <td
                                  className="product-price"
                                  data-title="Price"
                                >
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        $
                                      </span>
                                      200.00
                                    </bdi>
                                  </span>
                                </td>
                                <td
                                  className="product-quantity tj-cart-quantity"
                                  data-title="Quantity"
                                >
                                  <div className="tj-product-quantity">
                                    <div className="quantity">
                                      <label className="screen-reader-text" />
                                      <span className="qty_button minus tj-cart-minus">
                                        <i className="far fa-minus" />
                                      </span>
                                      <input
                                        type="text"
                                        className="input-text tj-cart-input qty tj-cart-input text"
                                        defaultValue={1}
                                      />
                                      <span className="qty_button plus tj-cart-plus ">
                                        <i className="far fa-plus" />
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="product-subtotal"
                                  data-title="Subtotal"
                                >
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        $
                                      </span>
                                      200.00
                                    </bdi>
                                  </span>
                                </td>
                                <td className="product-remove">
                                  <Link href="#" className="remove">
                                    Ã
                                  </Link>
                                </td>
                              </tr>
                              <tr className="woocommerce-cart-form__cart-item cart_item">
                                <td
                                  className="product-thumbnail"
                                  data-title="Product"
                                >
                                  <Link href="/shop-details">
                                    <img
                                      src="/assets/images/product/product-7.webp"
                                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                      alt="Base booster speaker"
                                    />
                                  </Link>
                                </td>
                                <td className="product-name" data-title="Name">
                                  <h5>
                                    <Link href="/shop-details">
                                      Base booster speaker
                                    </Link>
                                  </h5>
                                </td>
                                <td
                                  className="product-price"
                                  data-title="Price"
                                >
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        $
                                      </span>
                                      200.00
                                    </bdi>
                                  </span>
                                </td>
                                <td
                                  className="product-quantity tj-cart-quantity"
                                  data-title="Quantity"
                                >
                                  <div className="tj-product-quantity">
                                    <div className="quantity">
                                      <label className="screen-reader-text" />
                                      <span className="qty_button minus tj-cart-minus">
                                        <i className="far fa-minus" />
                                      </span>
                                      <input
                                        type="text"
                                        className="input-text tj-cart-input qty tj-cart-input text"
                                        defaultValue={1}
                                      />
                                      <span className="qty_button plus tj-cart-plus ">
                                        <i className="far fa-plus" />
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="product-subtotal"
                                  data-title="Subtotal"
                                >
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        $
                                      </span>
                                      200.00
                                    </bdi>
                                  </span>
                                </td>
                                <td className="product-remove">
                                  <Link
                                    href="#"
                                    className="remove"
                                    aria-label="Remove this item"
                                  >
                                    Ã
                                  </Link>
                                </td>
                              </tr>
                              <tr className="woocommerce-cart-form__cart-item cart_item">
                                <td
                                  className="product-thumbnail"
                                  data-title="Product"
                                >
                                  <Link href="/shop-details">
                                    <img
                                      src="/assets/images/product/product-6.webp"
                                      className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                      alt="Cool mini USB fan"
                                    />
                                  </Link>
                                </td>
                                <td className="product-name" data-title="Name">
                                  <h5>
                                    <Link href="/shop-details">
                                      Cool mini USB fan
                                    </Link>
                                  </h5>
                                </td>
                                <td
                                  className="product-price"
                                  data-title="Price"
                                >
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        $
                                      </span>
                                      50.00
                                    </bdi>
                                  </span>
                                </td>
                                <td
                                  className="product-quantity tj-cart-quantity"
                                  data-title="Quantity"
                                >
                                  <div className="tj-product-quantity">
                                    <div className="quantity">
                                      <label className="screen-reader-text" />
                                      <span className="qty_button minus tj-cart-minus">
                                        <i className="far fa-minus" />
                                      </span>
                                      <input
                                        type="text"
                                        className="input-text tj-cart-input qty tj-cart-input text"
                                        defaultValue={1}
                                      />
                                      <span className="qty_button plus tj-cart-plus ">
                                        <i className="far fa-plus" />
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="product-subtotal"
                                  data-title="Subtotal"
                                >
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        $
                                      </span>
                                      50.00
                                    </bdi>
                                  </span>
                                </td>
                                <td className="product-remove">
                                  <Link href="#" className="remove">
                                    Ã
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="cart_totals_action_wrap">
                          <div className="actions">
                            <div className="row rg-30 align-items-center">
                              <div className="col-md-8">
                                <div className="coupon">
                                  <input
                                    type="text"
                                    name="coupon_code"
                                    className="input-text"
                                    id="coupon_code"
                                    defaultValue
                                    placeholder="Coupon code"
                                  />
                                  <button
                                    type="submit"
                                    className="tj-primary-btn"
                                    name="apply_coupon"
                                    value="Apply coupon"
                                  >
                                    <span className="btn-text">
                                      <span>Apply coupon</span>
                                    </span>
                                    <span className="btn-icon">
                                      <i className="tji-arrow-right-long" />
                                    </span>
                                  </button>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="tj-cart-update-btn text-md-end">
                                  <button
                                    type="submit"
                                    className="update-cart tj-primary-btn"
                                    name="update_cart"
                                    value="Update cart"
                                    disabled
                                  >
                                    <span className="btn-text">
                                      <span>Update cart</span>
                                    </span>
                                    <span className="btn-icon">
                                      <i className="tji-arrow-right-long" />
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <input
                              type="hidden"
                              id="woocommerce-cart-nonce"
                              name="woocommerce-cart-nonce"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-sm-12">
                      <div className="cart-collaterals">
                        <div className="cart_totals ">
                          <h3>Cart totals</h3>
                          <table className="shop_table shop_table_responsive">
                            <tbody>
                              <tr className="cart-subtotal">
                                <th>Subtotal</th>
                                <td data-title="Subtotal">
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">
                                        $
                                      </span>
                                      450.00
                                    </bdi>
                                  </span>
                                </td>
                              </tr>
                              <tr className="order-total">
                                <th>Total</th>
                                <td data-title="Total">
                                  <strong>
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi>
                                        <span className="woocommerce-Price-currencySymbol">
                                          $
                                        </span>
                                        450.00
                                      </bdi>
                                    </span>
                                  </strong>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="wc-proceed-to-checkout">
                            <Link
                              href="/checkout"
                              className="tj-primary-btn checkout-button button alt wc-forward"
                            >
                              <span className="btn-text">
                                <span>Proceed to checkout</span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end: Cart Section */}
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


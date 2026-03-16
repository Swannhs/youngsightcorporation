import Link from "next/link";

export const metadata = { title: "youngsightcorporation" };

export default function Page() {
  return (
    <main id="primary" className="site-main">
      <div className="space-for-header" />
      {/* start: Shop Section */}
      <div className="tj-product-area section-gap slidebar-stickiy-container">
        <div className="container">
          <div className="row rg-50">
            <div className="col-xl-8 col-lg-8 col-md-12">
              <div className="tj-shop-listing d-flex flex-wrap align-items-center mb-40 justify-content-between">
                <div className="tj-shop-listing-number">
                  <p className="tj-shop-list-title">
                    Showing 1-6 of 9 results{" "}
                  </p>
                </div>
                <div className="tj-shop-listing-popup">
                  <div className="tj-shop-from">
                    <form className="-ordering" method="get">
                      <select
                        name="orderby"
                        className="orderby"
                        aria-label="Shop order"
                      >
                        <option value="popularity">Sort by popularity</option>
                        <option value="rating">Sort by average rating</option>
                        <option value="date" selected="selected">
                          Sort by latest
                        </option>
                        <option value="price">
                          Sort by price: low to high
                        </option>
                        <option value="price-desc">
                          Sort by price: high to low
                        </option>
                      </select>
                      <input type="hidden" name="paged" defaultValue={1} />
                    </form>
                  </div>
                </div>
              </div>
              <div className="tj-shop-item-wrapper">
                <div className="row rg-30 row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-1">
                  <div className="tj-product">
                    <div className="tj-product-item">
                      <div className="tj-product-thumb">
                        <Link href="/shop-details">
                          <img
                            src="/assets/images/product/product-1.webp"
                            alt=""
                          />{" "}
                        </Link>
                        <div className="tj-product-badge product-on-sale">
                          <span className="onsale">Sale</span>
                        </div>
                        {/* product action */}
                        <div className="tj-product-action">
                          <div className="tj-product-action-item d-flex flex-column">
                            <div className="tj-product-action-btn product-add-wishlist-btn">
                              <button>Add to wishlist</button>{" "}
                              <span className="tj-product-action-btn-tooltip">
                                Add to wishlist
                              </span>
                            </div>
                            <div className="tj-product-action-btn">
                              <Link
                                className="tj-quick-product-details"
                                href="#tj-product-modal-1"
                                data-vbtype="inline"
                              >
                                <i className="fal fa-eye" />
                              </Link>
                              <span className="tj-product-action-btn-tooltip">
                                Quick view
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tj-product-cart-btn">
                          <Link
                            href="#"
                            data-quantity={1}
                            className="cart-button button tj-cart-btn stock-available "
                          >
                            <span className="btn-icon">
                              <i className="fal fa-shopping-cart" />
                              <i className="fal fa-shopping-cart" />
                            </span>
                            <span className="btn-text">
                              <span>Add to cart</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="tj-product-content">
                        <div className="tj-product-tag d-none">
                          <Link href="/shop-details"> Power</Link>
                        </div>
                        <h3 className="tj-product-title">
                          <Link href="/shop-details">
                            Personal holding earbud
                          </Link>
                        </h3>
                        <div className="tj-product-price-wrapper">
                          <span className="price">
                            <del>
                              <span>
                                <bdi>
                                  <span>$</span>240.00
                                </bdi>
                              </span>
                            </del>
                            <ins>
                              <span>
                                <bdi>
                                  <span>$</span>200.00
                                </bdi>
                              </span>
                            </ins>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tj-product">
                    <div className="tj-product-item">
                      <div className="tj-product-thumb">
                        <Link href="/shop-details">
                          <img
                            src="/assets/images/product/product-2.webp"
                            alt=""
                          />{" "}
                        </Link>
                        <div className="tj-product-badge product-on-sale">
                          <span className="onsale sold-out">Sold</span>
                        </div>
                        {/* product action */}
                        <div className="tj-product-action">
                          <div className="tj-product-action-item d-flex flex-column">
                            <div className="tj-product-action-btn product-add-wishlist-btn">
                              <button>Add to wishlist</button>{" "}
                              <span className="tj-product-action-btn-tooltip">
                                Add to wishlist
                              </span>
                            </div>
                            <div className="tj-product-action-btn">
                              <Link
                                className="tj-quick-product-details"
                                href="#tj-product-modal-1"
                                data-vbtype="inline"
                              >
                                <i className="fal fa-eye" />
                              </Link>{" "}
                              <span className="tj-product-action-btn-tooltip">
                                Quick view
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tj-product-content">
                        <div className="tj-product-tag d-none">
                          <a href="https://solvior.themejunction.net/product-category/charger/ ">
                            Charger
                          </a>
                        </div>
                        <h3 className="tj-product-title">
                          <Link href="/shop-details">
                            Echo tune wireless headphones
                          </Link>
                        </h3>
                        <div className="tj-product-price-wrapper">
                          <span className="price">
                            <del>
                              <span>
                                <bdi>
                                  <span>$</span>300.00
                                </bdi>
                              </span>
                            </del>
                            <ins>
                              <span>
                                <bdi>
                                  <span>$</span>250.00
                                </bdi>
                              </span>
                            </ins>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tj-product">
                    <div className="tj-product-item">
                      <div className="tj-product-thumb">
                        <Link href="/shop-details">
                          <img
                            src="/assets/images/product/product-7.webp"
                            alt=""
                          />{" "}
                        </Link>
                        {/* product action */}
                        <div className="tj-product-action">
                          <div className="tj-product-action-item d-flex flex-column">
                            <div className="tj-product-action-btn product-add-wishlist-btn">
                              <button>Add to wishlist</button>{" "}
                              <span className="tj-product-action-btn-tooltip">
                                Add to wishlist
                              </span>
                            </div>
                            <div className="tj-product-action-btn">
                              <Link
                                className="tj-quick-product-details"
                                href="#tj-product-modal-1"
                                data-vbtype="inline"
                              >
                                <i className="fal fa-eye" />
                              </Link>{" "}
                              <span className="tj-product-action-btn-tooltip">
                                Quick view
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tj-product-cart-btn">
                          <a
                            href="?add-to-cart=5401"
                            data-quantity={1}
                            className="cart-button button tj-cart-btn stock-available "
                          >
                            <span className="btn-icon">
                              <i className="fal fa-shopping-cart" />
                              <i className="fal fa-shopping-cart" />
                            </span>
                            <span className="btn-text">
                              <span>Add to cart</span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="tj-product-content">
                        <div className="tj-product-tag d-none">
                          <Link href="/hshop-details"> Speaker</Link>
                        </div>
                        <h3 className="tj-product-title">
                          <Link href="/shop-details">Base booster speaker</Link>
                        </h3>
                        <div className="tj-product-price-wrapper">
                          <span className="price">
                            <span>
                              <bdi>
                                <span>$</span>200.00
                              </bdi>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tj-product">
                    <div className="tj-product-item">
                      <div className="tj-product-thumb">
                        <Link href="/shop-details">
                          <img
                            src="/assets/images/product/product-6.webp"
                            alt=""
                          />{" "}
                        </Link>
                        {/* product action */}
                        <div className="tj-product-action">
                          <div className="tj-product-action-item d-flex flex-column">
                            <div className="tj-product-action-btn product-add-wishlist-btn">
                              <button>Add to wishlist</button>{" "}
                              <span className="tj-product-action-btn-tooltip">
                                Add to wishlist
                              </span>
                            </div>
                            <div className="tj-product-action-btn">
                              <Link
                                className="tj-quick-product-details"
                                href="#tj-product-modal-1"
                                data-vbtype="inline"
                              >
                                <i className="fal fa-eye" />
                              </Link>{" "}
                              <span className="tj-product-action-btn-tooltip">
                                Quick view
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tj-product-cart-btn">
                          <Link
                            href="#"
                            className="cart-button button tj-cart-btn stock-available "
                          >
                            <span className="btn-icon">
                              <i className="fal fa-shopping-cart" />
                              <i className="fal fa-shopping-cart" />
                            </span>
                            <span className="btn-text">
                              <span>Add to cart</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="tj-product-content">
                        <div className="tj-product-tag d-none">
                          <Link href="/shop-details"> Power</Link>
                        </div>
                        <h3 className="tj-product-title">
                          <Link href="/shop-details">Cool mini USB fan</Link>
                        </h3>
                        <div className="tj-product-price-wrapper">
                          <span className="price">
                            <span>
                              <bdi>
                                <span>$</span>50.00
                              </bdi>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tj-product">
                    <div className="tj-product-item">
                      <div className="tj-product-thumb">
                        <Link href="/shop-details">
                          <img
                            src="/assets/images/product/product-5.webp"
                            alt=""
                          />{" "}
                        </Link>
                        {/* product action */}
                        <div className="tj-product-action">
                          <div className="tj-product-action-item d-flex flex-column">
                            <div className="tj-product-action-btn product-add-wishlist-btn">
                              <button>Add to wishlist</button>{" "}
                              <span className="tj-product-action-btn-tooltip">
                                Add to wishlist
                              </span>
                            </div>
                            <div className="tj-product-action-btn">
                              <Link
                                className="tj-quick-product-details"
                                href="#tj-product-modal-1"
                                data-vbtype="inline"
                              >
                                <i className="fal fa-eye" />
                              </Link>{" "}
                              <span className="tj-product-action-btn-tooltip">
                                Quick view
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tj-product-cart-btn">
                          <Link
                            href="#"
                            className="cart-button button tj-cart-btn stock-available "
                          >
                            <span className="btn-icon">
                              <i className="fal fa-shopping-cart" />
                              <i className="fal fa-shopping-cart" />
                            </span>
                            <span className="btn-text">
                              <span>Add to cart</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="tj-product-content">
                        <div className="tj-product-tag d-none">
                          <Link href="/shop-details"> Cover</Link>
                        </div>
                        <h3 className="tj-product-title">
                          <Link href="/shop-details">
                            Pure white slim cover
                          </Link>
                        </h3>
                        <div className="tj-product-price-wrapper">
                          <span className="price">
                            <span>
                              <bdi>
                                <span>$</span>30.00
                              </bdi>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tj-product">
                    <div className="tj-product-item">
                      <div className="tj-product-thumb">
                        <Link href="/shop-details">
                          <img
                            src="/assets/images/product/product-4.webp"
                            alt=""
                          />{" "}
                        </Link>
                        <div className="tj-product-badge product-on-sale">
                          <span className="onsale">Sale</span>
                        </div>
                        {/* product action */}
                        <div className="tj-product-action">
                          <div className="tj-product-action-item d-flex flex-column">
                            <div className="tj-product-action-btn product-add-wishlist-btn">
                              <button>Add to wishlist</button>{" "}
                              <span className="tj-product-action-btn-tooltip">
                                Add to wishlist
                              </span>
                            </div>
                            <div className="tj-product-action-btn">
                              <Link
                                className="tj-quick-product-details"
                                href="#tj-product-modal-1"
                                data-vbtype="inline"
                              >
                                <i className="fal fa-eye" />
                              </Link>{" "}
                              <span className="tj-product-action-btn-tooltip">
                                Quick view
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="tj-product-cart-btn">
                          <Link
                            href="#"
                            className="cart-button button tj-cart-btn stock-available "
                          >
                            <span className="btn-icon">
                              <i className="fal fa-shopping-cart" />
                              <i className="fal fa-shopping-cart" />
                            </span>
                            <span className="btn-text">
                              <span>Add to cart</span>
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="tj-product-content">
                        <div className="tj-product-tag d-none">
                          <Link href="/hshop-details"> Speaker</Link>
                        </div>
                        <h3 className="tj-product-title">
                          <Link href="/shop-details">
                            Hi-Fi bluetooth speaker
                          </Link>
                        </h3>
                        <div className="tj-product-price-wrapper">
                          <span className="price">
                            <del>
                              <span>
                                <bdi>
                                  <span>$</span>800.00
                                </bdi>
                              </span>
                            </del>
                            <ins>
                              <span>
                                <bdi>
                                  <span>$</span>600.00
                                </bdi>
                              </span>
                            </ins>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="basic-pagination text-start">
                      <nav className=" tj-pagination shop">
                        <ul className="page-numbers">
                          <li>
                            <span className="page-numbers current">1</span>
                          </li>
                          <li>
                            <Link
                              aria-label="Page 2"
                              className="page-numbers"
                              href="#"
                            >
                              2
                            </Link>
                          </li>
                          <li>
                            <Link className="next page-numbers" href="#">
                              {" "}
                              <i className="tji-arrow-right" />
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12">
              <div className="tj-shop-sidebar slidebar-stickiy">
                <div
                  id="_price_filter-2"
                  className="product-widget widget_price_filter"
                >
                  <h5 className="product-widget-title">Filter by price</h5>
                  <form>
                    <div className="price_slider_wrapper">
                      <div className="price_slider" id="slider-range" />{" "}
                      {/* Added ID */}
                      <div className="price_slider_amount">
                        <button type="submit" className="button">
                          Apply
                        </button>
                        <div className="price_label">
                          <span className="from">
                            $<span id="price-from">75</span>
                          </span>{" "}
                          —
                          <span className="to">
                            $<span id="price-to">300</span>
                          </span>
                        </div>
                        <div className="clear" />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="product-widget  widget_product_categories">
                  <h5 className="product-widget-title">Categories</h5>
                  <ul className="product-categories">
                    <li>
                      <Link href="/shop-details">Bluetooth</Link>
                      <span className="count">(1)</span>
                    </li>
                    <li>
                      <Link href="/shop-details">Charger</Link>{" "}
                      <span className="count">(2)</span>
                    </li>
                    <li>
                      <Link href="/shop-details">Cover</Link> <span>(1)</span>
                    </li>
                    <li>
                      <Link href="/shop-details">Power</Link>{" "}
                      <span className="count">(2)</span>
                    </li>
                    <li>
                      <a href="https://solvior.themejunction.net/product-category/speaker/">
                        Speaker
                      </a>
                      <span className="count">(3)</span>
                    </li>
                  </ul>
                </div>
                <div className="product-widget  widget_products">
                  <h5 className="product-widget-title">Latest products</h5>
                  <ul className="product_list_widget">
                    <li className="tj-recent-product-list sidebar-recent-post">
                      <div className="single-post d-flex align-items-center ">
                        <div className="post-image">
                          <Link href="/shop-details">
                            <img
                              width={300}
                              height={300}
                              src="/assets/images/product/product-1.webp"
                              className="attachment-_thumbnail size-_thumbnail"
                              alt="Personal holding earbud"
                            />
                          </Link>
                        </div>
                        <div className="post-header">
                          <h5 className="tj-product-title">
                            <Link href="/shop-details">
                              Personal holding earbud{" "}
                            </Link>
                          </h5>
                          <div className="tj-product-sidebar-rating-price tj-product-price">
                            <del>
                              <span>
                                <span>$</span>240.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span>$</span>200.00
                              </span>
                            </ins>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="tj-recent-product-list sidebar-recent-post">
                      <div className="single-post d-flex align-items-center ">
                        <div className="post-image">
                          <Link href="/shop-details">
                            <img
                              width={300}
                              height={300}
                              src="/assets/images/product/product-2.webp"
                              className="attachment-_thumbnail size-_thumbnail"
                              alt="Super fast charger"
                            />
                          </Link>
                        </div>
                        <div className="post-header">
                          <h5 className="tj-product-title">
                            <Link href="/shop-details">
                              Echo tune wireless headphones
                            </Link>
                          </h5>
                          <div className="tj-product-sidebar-rating-price tj-product-price">
                            <del>
                              <span>
                                <span>$</span>300.00
                              </span>
                            </del>
                            <ins>
                              <span>
                                <span>$</span>250.00
                              </span>
                            </ins>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="tj-recent-product-list sidebar-recent-post">
                      <div className="single-post d-flex align-items-center ">
                        <div className="post-image">
                          <Link href="/shop-details">
                            <img
                              width={300}
                              height={300}
                              src="/assets/images/product/product-7.webp"
                              className="attachment-_thumbnail size-_thumbnail"
                              alt="Base booster speaker"
                            />{" "}
                          </Link>
                        </div>
                        <div className="post-header">
                          <h5 className="tj-product-title">
                            <Link href="/shop-details">
                              Base booster speaker{" "}
                            </Link>
                          </h5>
                          <div className="tj-product-sidebar-rating-price tj-product-price">
                            <span>
                              <span>$</span>200.00
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="product-widget  widget_product_tag_cloud">
                  <h5 className="product-widget-title">Tags</h5>
                  <div className="tagcloud">
                    <Link href="/shop-details">Compact</Link>
                    <Link href="/shop-details">Durable</Link>
                    <Link href="/shop-details">Fast</Link>
                    <Link href="/shop-details" className="tag-cloud-link">
                      Portable
                    </Link>
                    <Link href="/shop-details" className="tag-cloud-link ">
                      Powerful
                    </Link>
                    <Link href="/shop-details" className="tag-cloud-link ">
                      Reliable
                    </Link>
                    <Link href="/shop-details" className="tag-cloud-link ">
                      Retiable
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end: Shop Section */}
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


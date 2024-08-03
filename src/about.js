import React from 'react'

function about() {
  return (
    <>
  <div className="custom-cursor__cursor" />
  <div className="custom-cursor__cursor-two" />
  <div className="preloader">
    <div
      className="preloader__image"
      style={{ backgroundImage: "url(assets/images/loader.png)" }}
    />
  </div>
  {/* /.preloader */}
  <div className="page-wrapper">
    <div className="header">
      <div className="topbar topbar--one">
        <div className="topbar__bg" />
        {/* /.topbar__bg */}
        <div className="container-fluid">
          <div className="topbar__inner">
            <ul className="list-unstyled topbar__info">
              <li>
                <div className="topbar__info__icon-box topbar__info__icon--email">
                  <span className="topbar__info__icon">
                    <i className="fas fa-envelope" />
                  </span>
                </div>
                <a href="mailto:needhelp@company.com">needhelp@company.com</a>
              </li>
              <li>
                <div className="topbar__info__icon-box">
                  <span className="topbar__info__icon">
                    <i className="fas fa-map-marker-alt" />
                  </span>
                </div>
                <a href="https://www.google.com/maps">
                  8902 london, 8950018 US.
                </a>
              </li>
            </ul>
            {/* /.list-unstyled topbar__info */}
            <div className="topbar__right">
              <div className="topbar__social social-links">
                <a href="https://facebook.com/">
                  <span className="social-links__icon">
                    <i className="fab fa-facebook-f" aria-hidden="true" />
                    <span className="sr-only">Facebook</span>
                  </span>
                  {/* /.social-links__icon */}
                </a>
                <a href="https://pinterest.com/">
                  <span className="social-links__icon">
                    <i className="fab fa-pinterest-p" aria-hidden="true" />
                    <span className="sr-only">Pinterest</span>
                  </span>
                  {/* /.social-links__icon */}
                </a>
                <a href="https://twitter.com/">
                  <span className="social-links__icon">
                    <i className="fab fa-twitter" aria-hidden="true" />
                    <span className="sr-only">Twitter</span>
                  </span>
                  {/* /.social-links__icon */}
                </a>
                <a href="https://instagram.com/">
                  <span className="social-links__icon">
                    <i className="fab fa-instagram" aria-hidden="true" />
                    <span className="sr-only">Instagram</span>
                  </span>
                  {/* /.social-links__icon */}
                </a>
              </div>
              {/* /.topbar__social social-links */}
              <div className="topbar__language">
                <label className="sr-only" htmlFor="language-select-header">
                  select language
                </label>
                {/* /.sr-only */}
                <select className="selectpicker" id="language-select-header">
                  <option value="english">English</option>
                  <option value="arabic">Arabic</option>
                </select>
              </div>
              {/* /.topbar__language */}
            </div>
            {/* /.topbar__right */}
          </div>
          {/* /.topbar__inner */}
        </div>
        {/* /.container-fluid */}
      </div>
      {/* /.topbar */}
      <header className="main-header main-header--one sticky-header sticky-header--normal">
        <div className="container-fluid">
          <div className="main-header__inner">
            <div className="main-header__logo logo-retina">
              <a href="index.html">
                <img
                  src="assets/images/4-removebg-preview.png"
                  alt="Insuba HTML"
                  width={212}
                />
              </a>
            </div>
            {/* /.main-header__logo */}
            <div className="main-header__right">
              <div className="mobile-nav__btn mobile-nav__toggler">
                <span />
                <span />
                <span />
              </div>
              {/* /.mobile-nav__toggler */}
              <nav className="main-header__nav main-menu">
                <ul className="main-menu__list">
                  <li className="megamenu megamenu-clickable megamenu-clickable--toggler">
                    <a href="index.html">Demos</a>
                    <ul>
                      <li>
                        <div className="megamenu-popup">
                          <a href="#" className="megamenu-clickable--close">
                            <span className="icon-close" />
                          </a>
                          {/* /.megamenu-clickable--close */}
                          <div className="megamenu-popup__content">
                            <div className="demo-one">
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-6 col-lg-4">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img
                                          src="assets/images/landing/home-1.jpg"
                                          alt=""
                                        />
                                        <div className="demo-one__btns">
                                          <a
                                            href="index.html"
                                            className="insuba-btn insuba-btn--base demo-one__btn"
                                          >
                                            <span>Multi Page</span>
                                            <span className="insuba-btn__icon-box">
                                              <span className="insuba-btn__icon">
                                                <i className="fas fa-arrow-right" />
                                              </span>
                                            </span>
                                          </a>
                                          {/* /.insuba-btn demo-one__btn */}
                                          <a
                                            href="index-one-page.html"
                                            className="insuba-btn insuba-btn--base demo-one__btn"
                                          >
                                            <span>One Page</span>
                                            <span className="insuba-btn__icon-box">
                                              <span className="insuba-btn__icon">
                                                <i className="fas fa-arrow-right" />
                                              </span>
                                            </span>
                                          </a>
                                          {/* /.insuba-btn demo-one__btn */}
                                        </div>
                                        {/* /.demo-one__btns */}
                                      </div>
                                      {/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index.html">Home Page 01</a>
                                        </h3>
                                        {/* /.demo-one__title */}
                                      </div>
                                      {/* /.demo-one__content */}
                                    </div>
                                    {/* /.demo-one__card */}
                                  </div>
                                  {/* /.col-md-6 col-lg-3 */}
                                  <div className="col-md-6 col-lg-4">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img
                                          src="assets/images/landing/home-2.jpg"
                                          alt=""
                                        />
                                        <div className="demo-one__btns">
                                          <a
                                            href="index-2.html"
                                            className="insuba-btn insuba-btn--base demo-one__btn"
                                          >
                                            <span>Multi Page</span>
                                            <span className="insuba-btn__icon-box">
                                              <span className="insuba-btn__icon">
                                                <i className="fas fa-arrow-right" />
                                              </span>
                                            </span>
                                          </a>
                                          {/* /.insuba-btn demo-one__btn */}
                                          <a
                                            href="index-2-one-page.html"
                                            className="insuba-btn insuba-btn--base demo-one__btn"
                                          >
                                            <span>One Page</span>
                                            <span className="insuba-btn__icon-box">
                                              <span className="insuba-btn__icon">
                                                <i className="fas fa-arrow-right" />
                                              </span>
                                            </span>
                                          </a>
                                          {/* /.insuba-btn demo-one__btn */}
                                        </div>
                                        {/* /.demo-one__btns */}
                                      </div>
                                      {/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index-2.html">
                                            Home Page 02
                                          </a>
                                        </h3>
                                        {/* /.demo-one__title */}
                                      </div>
                                      {/* /.demo-one__content */}
                                    </div>
                                    {/* /.demo-one__card */}
                                  </div>
                                  {/* /.col-md-6 col-lg-3 */}
                                  <div className="col-md-6 col-lg-4">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img
                                          src="assets/images/landing/home-3.jpg"
                                          alt=""
                                        />
                                        <div className="demo-one__btns">
                                          <a
                                            href="index-3.html"
                                            className="insuba-btn insuba-btn--base demo-one__btn"
                                          >
                                            <span>Multi Page</span>
                                            <span className="insuba-btn__icon-box">
                                              <span className="insuba-btn__icon">
                                                <i className="fas fa-arrow-right" />
                                              </span>
                                            </span>
                                          </a>
                                          {/* /.insuba-btn demo-one__btn */}
                                          <a
                                            href="index-3-one-page.html"
                                            className="insuba-btn insuba-btn--base demo-one__btn"
                                          >
                                            <span>One Page</span>
                                            <span className="insuba-btn__icon-box">
                                              <span className="insuba-btn__icon">
                                                <i className="fas fa-arrow-right" />
                                              </span>
                                            </span>
                                          </a>
                                          {/* /.insuba-btn demo-one__btn */}
                                        </div>
                                        {/* /.demo-one__btns */}
                                      </div>
                                      {/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index-3.html">
                                            Home Page 03
                                          </a>
                                        </h3>
                                        {/* /.demo-one__title */}
                                      </div>
                                      {/* /.demo-one__content */}
                                    </div>
                                    {/* /.demo-one__card */}
                                  </div>
                                  {/* /.col-md-6 col-lg-3 */}
                                  <div className="col-md-6 col-lg-4">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img
                                          src="assets/images/landing/home-4.jpg"
                                          alt=""
                                        />
                                        <div className="demo-one__btns">
                                          <a
                                            href="index-4.html"
                                            className="insuba-btn insuba-btn--base demo-one__btn"
                                          >
                                            <span>Multi Page</span>
                                            <span className="insuba-btn__icon-box">
                                              <span className="insuba-btn__icon">
                                                <i className="fas fa-arrow-right" />
                                              </span>
                                            </span>
                                          </a>
                                          {/* /.insuba-btn demo-one__btn */}
                                          <a
                                            href="index-4-one-page.html"
                                            className="insuba-btn insuba-btn--base demo-one__btn"
                                          >
                                            <span>One Page</span>
                                            <span className="insuba-btn__icon-box">
                                              <span className="insuba-btn__icon">
                                                <i className="fas fa-arrow-right" />
                                              </span>
                                            </span>
                                          </a>
                                          {/* /.insuba-btn demo-one__btn */}
                                        </div>
                                        {/* /.demo-one__btns */}
                                      </div>
                                      {/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index-4.html">
                                            Home Page 04
                                          </a>
                                        </h3>
                                        {/* /.demo-one__title */}
                                      </div>
                                      {/* /.demo-one__content */}
                                    </div>
                                    {/* /.demo-one__card */}
                                  </div>
                                  {/* /.col-md-6 col-lg-3 */}
                                  <div className="col-md-6 col-lg-4">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img
                                          src="assets/images/landing/home-boxed.jpg"
                                          alt=""
                                        />
                                        <div className="demo-one__btns">
                                          <a
                                            href="index-boxed.html"
                                            className="insuba-btn insuba-btn--base demo-one__btn"
                                          >
                                            <span>View Page</span>
                                            <span className="insuba-btn__icon-box">
                                              <span className="insuba-btn__icon">
                                                <i className="fas fa-arrow-right" />
                                              </span>
                                            </span>
                                          </a>
                                          {/* /.insuba-btn demo-one__btn */}
                                        </div>
                                        {/* /.demo-one__btns */}
                                      </div>
                                      {/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index-boxed.html">
                                            Home Boxed
                                          </a>
                                        </h3>
                                        {/* /.demo-one__title */}
                                      </div>
                                      {/* /.demo-one__content */}
                                    </div>
                                    {/* /.demo-one__card */}
                                  </div>
                                  {/* /.col-md-6 col-lg-3 */}
                                  <div className="col-md-6 col-lg-4">
                                    <div className="demo-one__card">
                                      <div className="demo-one__image">
                                        <img
                                          src="assets/images/landing/home-rtl.jpg"
                                          alt=""
                                        />
                                        <div className="demo-one__btns">
                                          <a
                                            href="index-rtl.html"
                                            className="insuba-btn insuba-btn--base demo-one__btn"
                                          >
                                            <span>View Page</span>
                                            <span className="insuba-btn__icon-box">
                                              <span className="insuba-btn__icon">
                                                <i className="fas fa-arrow-right" />
                                              </span>
                                            </span>
                                          </a>
                                          {/* /.insuba-btn demo-one__btn */}
                                        </div>
                                        {/* /.demo-one__btns */}
                                      </div>
                                      {/* /.demo-one__image */}
                                      <div className="demo-one__content">
                                        <h3 className="demo-one__title">
                                          <a href="index.html">Home RTL</a>
                                        </h3>
                                        {/* /.demo-one__title */}
                                      </div>
                                      {/* /.demo-one__content */}
                                    </div>
                                    {/* /.demo-one__card */}
                                  </div>
                                  {/* /.col-md-6 col-lg-3 */}
                                </div>
                                {/* /.row */}
                              </div>
                              {/* /.container */}
                            </div>
                            {/* /.demos-one */}
                          </div>
                          {/* /.megamenu-popup__content */}
                        </div>
                        {/* /.megamenu-popup */}
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Insurance</a>
                    <ul>
                      <li>
                        <a href="insurance.html">Our Insurance</a>
                      </li>
                      <li>
                        <a href="insurance-carousel.html">Insurance Carousel</a>
                      </li>
                      <li>
                        <a href="insurance-d-car-insurance.html">
                          Car Insurance
                        </a>
                      </li>
                      <li>
                        <a href="insurance-d-life-insurance.html">
                          Life Insurance
                        </a>
                      </li>
                      <li>
                        <a href="insurance-d-business-insurance.html">
                          Business Insurance
                        </a>
                      </li>
                      <li>
                        <a href="insurance-d-healthy-insurance.html">
                          Healthy Insurance
                        </a>
                      </li>
                      <li>
                        <a href="insurance-d-home-insurance.html">
                          Home Insurance
                        </a>
                      </li>
                      <li>
                        <a href="insurance-d-finance-insurance.html">
                          Finance Insurance
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Services </a>
                    <ul>
                      <li>
                        <a href="services.html">Our Services 01</a>
                      </li>
                      <li>
                        <a href="services-2.html">Our Services 02</a>
                      </li>
                      <li>
                        <a href="services-3.html">Our Services 03</a>
                      </li>
                      <li>
                        <a href="services-4.html">Our Services 04</a>
                      </li>
                      <li>
                        <a href="services-carousel.html">
                          Services Carousel 01
                        </a>
                      </li>
                      <li>
                        <a href="services-carousel-2.html">
                          Services Carousel 02
                        </a>
                      </li>
                      <li>
                        <a href="services-carousel-3.html">
                          Services Carousel 03
                        </a>
                      </li>
                      <li>
                        <a href="services-carousel-4.html">
                          Services Carousel 04
                        </a>
                      </li>
                      <li>
                        <a href="service-d-car-insurance.html">Car Insurance</a>
                      </li>
                      <li>
                        <a href="service-d-life-insurance.html">
                          life insurance
                        </a>
                      </li>
                      <li>
                        <a href="service-d-business-insurance.html">
                          Business Insurance
                        </a>
                      </li>
                      <li>
                        <a href="service-d-healthy-insurance.html">
                          Healthy Insurance
                        </a>
                      </li>
                      <li>
                        <a href="service-d-home-insurance.html">
                          Home Insurance
                        </a>
                      </li>
                      <li>
                        <a href="service-d-finance-insurance.html">
                          Finance Insurance
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Pages </a>
                    <ul>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">Our Team</a>
                        <ul>
                          <li>
                            <a href="team.html">Our Team 01</a>
                          </li>
                          <li>
                            <a href="team-2.html">Our Team 02</a>
                          </li>
                          <li>
                            <a href="team-3.html">Our Team 03</a>
                          </li>
                          <li>
                            <a href="team-carousel.html">Team Carousel 01</a>
                          </li>
                          <li>
                            <a href="team-carousel-2.html">Team Carousel 02</a>
                          </li>
                          <li>
                            <a href="team-carousel-3.html">Team Carousel 03</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Our Portfolio</a>
                        <ul>
                          <li>
                            <a href="portfolio.html">Our Portfolio 01</a>
                          </li>
                          <li>
                            <a href="portfolio-2.html">Our Portfolio 02</a>
                          </li>
                          <li>
                            <a href="portfolio-carousel.html">
                              Portfolio Carousel 01
                            </a>
                          </li>
                          <li>
                            <a href="portfolio-carousel-2.html">
                              Portfolio Carousel 02
                            </a>
                          </li>
                          <li>
                            <a href="portfolio-details.html">
                              Portfolio Details
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Our Testimonials</a>
                        <ul>
                          <li>
                            <a href="testimonials.html">Our Testimonials 01</a>
                          </li>
                          <li>
                            <a href="testimonials-2.html">
                              Our Testimonials 02
                            </a>
                          </li>
                          <li>
                            <a href="testimonials-carousel.html">
                              Testimonials Carousel 01
                            </a>
                          </li>
                          <li>
                            <a href="testimonials-carousel-2.html">
                              Testimonials Carousel 02
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="pricing.html">Pricing Plan</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="404.html">404 Error</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Shop </a>
                    <ul>
                      <li className="dropdown">
                        <a href="#">Products</a>
                        <ul>
                          <li>
                            <a href="products.html">No sidebar</a>
                          </li>
                          <li>
                            <a href="products-left.html">Left sidebar</a>
                          </li>
                          <li>
                            <a href="products-right.html">Right sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="products-carousel.html">Products carousel</a>
                      </li>
                      <li>
                        <a href="product-details.html">Product details</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="#">Blog </a>
                    <ul>
                      <li className="dropdown">
                        <a href="#">Blog grid</a>
                        <ul>
                          <li>
                            <a href="blog-grid.html">No sidebar</a>
                          </li>
                          <li>
                            <a href="blog-grid-left.html">Left sidebar</a>
                          </li>
                          <li>
                            <a href="blog-grid-right.html">Right sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="#">Blog list</a>
                        <ul>
                          <li>
                            <a href="blog-list.html">No sidebar</a>
                          </li>
                          <li>
                            <a href="blog-list-left.html">Left sidebar</a>
                          </li>
                          <li>
                            <a href="blog-list-right.html">Right sidebar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="blog-carousel.html">Blog carousel</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">Blog details</a>
                        <ul>
                          <li>
                            <a href="blog-details.html">No sidebar</a>
                          </li>
                          <li>
                            <a href="blog-details-left.html">Left sidebar</a>
                          </li>
                          <li>
                            <a href="blog-details-right.html">Right sidebar</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
              {/* /.main-header__nav */}
              <a href="#" className="main-header__search search-toggler">
                <span className="main-header__search__icon">
                  <i className="icon-search" aria-hidden="true" />
                  <span className="sr-only">Search</span>
                </span>
              </a>
              {/* /.main-header__search */}
              <a href="login.html" className="main-header__user">
                <span className="main-header__user__icon">
                  <i className="icon-user-2" aria-hidden="true" />
                  <span className="sr-only">User</span>
                </span>
              </a>
              {/* /.main-header__user */}
              <a
                href="contact.html"
                className="insuba-btn insuba-btn--base main-header__btn"
              >
                <span>Get a Quote</span>
                <span className="insuba-btn__icon-box">
                  <span className="insuba-btn__icon">
                    <i className="fas fa-arrow-right" />
                  </span>
                </span>
              </a>
              {/* /.insuba-btn main-header__btn */}
            </div>
            {/* /.main-header__right */}
          </div>
          {/* /.main-header__inner */}
        </div>
        {/* /.container-fluid */}
      </header>
      {/* /.main-header */}
    </div>
    {/* /.header */}
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{
          backgroundImage: "url(assets/images/backgrounds/page-header-bg.png)"
        }}
      />
      {/* /.page-header__bg */}
      <div className="container">
        <div className="page-header__content">
          <h2 className="page-header__title">About Us</h2>
          <ul className="insuba-breadcrumb list-unstyled">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <span>About Us</span>
            </li>
          </ul>
          {/* /.insuba-breadcrumb list-unstyled */}
        </div>
        {/* /.page-header__content */}
      </div>
      {/* /.container */}
      <img
        src="assets/images/resources/page-header-1-1.png"
        alt="image"
        className="page-header__image"
      />
      <img
        src="assets/images/shapes/page-header-shape-1-1.png"
        alt="shape"
        className="page-header__shape-one"
      />
      <div className="page-header__shape-two" />
      {/* /.page-header__shape-two */}
      <div className="page-header__shape-three" />
      {/* /.page-header__shape-three */}
      <div className="page-header__shape-four" />
      {/* /.page-header__shape-three */}
    </section>
    {/* /.page-header */}
    <section className="about-one about-one--about section-space">
      <div className="container">
        <div className="row gutter-y-50 align-items-center">
          <div
            className="col-xl-7 col-lg-6 wow fadeInLeft"
            data-wow-duration="1500ms"
          >
            <div className="about-one__image">
              <img
                src="assets/images/about/about-5-1.jpg"
                alt="about"
                className="about-one__image__inner"
              />
              <img
                src="assets/images/shapes/about-shape-5-1.png"
                alt="shape"
                className="about-one__image__shape"
              />
            </div>
            {/* /.about-one__image */}
          </div>
          {/* /.col-xl-7 col-lg-6 */}
          <div className="col-xl-5 col-lg-6">
            <div className="about-one__content">
              <div
                className="sec-title @@extrClassName wow fadeInUp"
                data-wow-duration="1500ms"
              >
                <div className="sec-title__top">
                  <div className="sec-title__box">
                    <div className="sec-title__box__inner" />
                  </div>
                  {/* /.sec-title__box */}
                  <h6 className="sec-title__tagline">About Company</h6>
                  {/* /.sec-title__tagline */}
                </div>
                {/* /.sec-title__top */}
                <h3 className="sec-title__title">
                  About This For Insurance <br /> Sine 2024{" "}
                  <span className="sec-title__title__highlight">Secure.</span>
                </h3>
                {/* /.sec-title__title */}
              </div>
              {/* /.sec-title */}
              <div
                className="about-one__text-box wow fadeInUp"
                data-wow-duration="1500ms"
              >
                <p className="about-one__text">
                  I called the it department about that ransomware because of
                  the old antivirus, but he said that we were using avast 2021
                  drill down, nor we need to harvest synergy effects, but let's
                  prioritize the low-hanging fruit we should leverage existing.
                </p>
                {/* /.about-one__text */}
              </div>
              {/* /.about-one__text-box */}
              <div
                className="about-one__list-box wow fadeInUp"
                data-wow-duration="1500ms"
              >
                <div className="row">
                  <div className="col-lg-6 col-md-4 col-sm-6">
                    <div className="about-one__list">
                      <span className="about-one__list__icon">
                        <i className="fas fa-chevron-right" />
                      </span>
                      <a href="#" className="about-one__list__link">
                        Travel of Insurance
                      </a>
                    </div>
                    {/* /.about-one__list */}
                  </div>
                  {/* /.col-lg-6 col-md-4 col-sm-6 */}
                  <div className="col-lg-6 col-md-4 col-sm-6">
                    <div className="about-one__list">
                      <span className="about-one__list__icon">
                        <i className="fas fa-chevron-right" />
                      </span>
                      <a href="#" className="about-one__list__link">
                        Get a free quote
                      </a>
                    </div>
                    {/* /.about-one__list */}
                  </div>
                  {/* /.col-lg-6 col-md-4 col-sm-6 */}
                  <div className="col-lg-6 col-md-4 col-sm-6">
                    <div className="about-one__list">
                      <span className="about-one__list__icon">
                        <i className="fas fa-chevron-right" />
                      </span>
                      <a href="#" className="about-one__list__link">
                        Insurance Services
                      </a>
                    </div>
                    {/* /.about-one__list */}
                  </div>
                  {/* /.col-lg-6 col-md-4 col-sm-6 */}
                  <div className="col-lg-6 col-md-4 col-sm-6">
                    <div className="about-one__list">
                      <span className="about-one__list__icon">
                        <i className="fas fa-chevron-right" />
                      </span>
                      <a href="#" className="about-one__list__link">
                        We Car Insurance
                      </a>
                    </div>
                    {/* /.about-one__list */}
                  </div>
                  {/* /.col-lg-6 col-md-4 col-sm-6 */}
                </div>
                {/* /.row */}
              </div>
              {/* /.about-one__list-box */}
              <div className="about-one__bottom">
                <div
                  className="about-one__founder wow fadeInUp"
                  data-wow-duration="1500ms"
                >
                  <div className="about-one__founder__image">
                    <img src="assets/images/about/about-founder.jpg" alt="" />
                  </div>
                  {/* /.about-one__founder__image */}
                  <div className="about-one__founder__info">
                    <h4 className="about-one__founder__name">
                      <a href="team-details.html">Anton Clark</a>
                    </h4>
                    <p className="about-one__founder__designation">Founder</p>
                  </div>
                  {/* /.about-one__founder__info */}
                </div>
                {/* /.about-one__founder */}
                <div
                  className="about-one__button wow fadeInUp"
                  data-wow-duration="1500ms"
                >
                  <a href="about.html" className="insuba-btn">
                    <span>About More</span>
                    <span className="insuba-btn__icon-box">
                      <span className="insuba-btn__icon">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </span>
                  </a>
                  {/* /.insuba-btn */}
                </div>
                {/* /.about-one__button */}
                <div
                  className="about-one__video wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="100ms"
                >
                  <a
                    href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                    className="video-btn video-popup"
                  >
                    <i className="icon-play" />
                    <span className="video-btn__ripple" />
                  </a>
                  {/* /.video-btn */}
                  <h4 className="about-one__video__title">
                    Our Watch <br /> Videos
                  </h4>
                  {/* /.about-one__video__title */}
                </div>
                {/* /.about-one__video */}
              </div>
              {/* /.about-one__bottom */}
            </div>
            {/* /.about-one__content */}
          </div>
          {/* /.col-xl-5 col-lg-6 */}
        </div>
        {/* /.row gutter-y-50 */}
      </div>
      {/* /.container */}
      <img
        src="assets/images/shapes/about-shape-5-2.png"
        alt="shape"
        className="about-one__shape"
      />
    </section>
    {/* /.about-one */}
    <section className="funfact section-space-bottom">
      <div className="container">
        <div className="funfact__inner">
          <div className="funfact__row row gutter-y-40">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="funfact__item funfact__item--1">
                <div className="funfact__icon-box">
                  <span className="funfact__icon">
                    <i className="icon-life-insurance" />
                  </span>
                  {/* /.funfact__icon */}
                </div>
                {/* /.funfact__icon-box */}
                <div className="funfact__content">
                  <h3 className="funfact__count count-box">
                    <span
                      className="count-text"
                      data-stop={98}
                      data-speed={1500}
                    >
                      0
                    </span>
                    <span>K</span>
                    <span>+</span>
                  </h3>
                  {/* /.funfact__count */}
                  <p className="funfact__text">Global Country</p>
                  {/* /.funfact__text */}
                </div>
                {/* /.funfact__content */}
                <img
                  src="assets/images/shapes/funfact-shape-1.png"
                  alt="shape"
                  className="funfact__item__shape"
                />
              </div>
              {/* /.funfact__item */}
            </div>
            {/* /.col-lg-3 col-sm-6 */}
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="funfact__item funfact__item--2">
                <div className="funfact__icon-box">
                  <span className="funfact__icon">
                    <i className="icon-family" />
                  </span>
                  {/* /.funfact__icon */}
                </div>
                {/* /.funfact__icon-box */}
                <div className="funfact__content">
                  <h3 className="funfact__count count-box">
                    <span
                      className="count-text"
                      data-stop={361}
                      data-speed={1500}
                    >
                      0
                    </span>
                    <span>K</span>
                    <span>+</span>
                  </h3>
                  {/* /.funfact__count */}
                  <p className="funfact__text">Satisfied Clients</p>
                  {/* /.funfact__text */}
                </div>
                {/* /.funfact__content */}
                <img
                  src="assets/images/shapes/funfact-shape-1.png"
                  alt="shape"
                  className="funfact__item__shape"
                />
              </div>
              {/* /.funfact__item */}
            </div>
            {/* /.col-lg-3 col-sm-6 */}
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div className="funfact__item funfact__item--3">
                <div className="funfact__icon-box">
                  <span className="funfact__icon">
                    <i className="icon-protection" />
                  </span>
                  {/* /.funfact__icon */}
                </div>
                {/* /.funfact__icon-box */}
                <div className="funfact__content">
                  <h3 className="funfact__count count-box">
                    <span
                      className="count-text"
                      data-stop={76}
                      data-speed={1500}
                    >
                      0
                    </span>
                    <span>K</span>
                    <span>+</span>
                  </h3>
                  {/* /.funfact__count */}
                  <p className="funfact__text">Company Growth</p>
                  {/* /.funfact__text */}
                </div>
                {/* /.funfact__content */}
                <img
                  src="assets/images/shapes/funfact-shape-1.png"
                  alt="shape"
                  className="funfact__item__shape"
                />
              </div>
              {/* /.funfact__item */}
            </div>
            {/* /.col-lg-3 col-sm-6 */}
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="600ms"
            >
              <div className="funfact__item funfact__item--4">
                <div className="funfact__icon-box">
                  <span className="funfact__icon">
                    <i className="icon-trophy1" />
                  </span>
                  {/* /.funfact__icon */}
                </div>
                {/* /.funfact__icon-box */}
                <div className="funfact__content">
                  <h3 className="funfact__count count-box">
                    <span
                      className="count-text"
                      data-stop={98}
                      data-speed={1500}
                    >
                      0
                    </span>
                    <span>K</span>
                    <span>+</span>
                  </h3>
                  {/* /.funfact__count */}
                  <p className="funfact__text">Global Award</p>
                  {/* /.funfact__text */}
                </div>
                {/* /.funfact__content */}
              </div>
              {/* /.funfact__item */}
            </div>
            {/* /.col-lg-3 col-sm-6 */}
          </div>
          {/* /.funfact__row row gutter-y-40 */}
        </div>
        {/* /.funfact__inner */}
      </div>
      {/* /.container */}
    </section>
    {/* /.funfact */}
    <section className="services-three section-space" id="services">
      <img
        src="assets/images/shapes/services-shape-3-1.png"
        alt="shape"
        className="services-three__shape-one"
      />
      <img
        src="assets/images/shapes/services-shape-3-2.png"
        alt="shape"
        className="services-three__shape-two"
      />
      <div className="container">
        <div className="services-three__top">
          <div className="row gutter-y-30 align-items-center">
            <div className="col-lg-6">
              <div
                className="sec-title @@extrClassName wow fadeInUp"
                data-wow-duration="1500ms"
              >
                <div className="sec-title__top">
                  <div className="sec-title__box">
                    <div className="sec-title__box__inner" />
                  </div>
                  {/* /.sec-title__box */}
                  <h6 className="sec-title__tagline">Our All Service</h6>
                  {/* /.sec-title__tagline */}
                </div>
                {/* /.sec-title__top */}
                <h3 className="sec-title__title">
                  We Guide to Insurance <br /> This Best Services
                </h3>
                {/* /.sec-title__title */}
              </div>
              {/* /.sec-title */}
            </div>
            {/* /.col-lg-6 */}
            <div className="col-lg-6">
              <div
                className="services-three__description wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
              >
                <p className="services-three__text">
                  Insurance address a range of simply application and thisof
                  passages of available, but the majority have suffered exchange
                  regular payments known as premiums, insurance company in some
                  form.
                </p>
                {/* /.services-three__text */}
              </div>
              {/* /.services-three__description */}
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row gutter-y-30 */}
        </div>
        {/* /.services-three__top */}
        <div
          className="services-three__carousel insuba-owl__carousel insuba-owl__carousel--basic-nav insuba-owl__carousel--with-shadow owl-carousel owl-theme"
          data-owl-options='{
      "items": 1,
      "margin": 10,
      "loop": true,
      "smartSpeed": 700,
      "nav": false,
      "dots": true,
      "navText": ["<i class=\"fas fa-chevron-left\"></i>","<i class=\"fas fa-chevron-right\"></i>"],
      "autoplay": true,
      "responsive": {
          "0": {
              "items": 1,
              "nav": true,
              "dots": false,
              "margin": 10
          },
          "768": {
              "items": 2,
              "margin": 30
          },
          "992": {
              "items": 3,
              "margin": 30
          }
      }
  }'
        >
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <div className="service-card-three">
              <div className="service-card-three__image">
                <img
                  src="assets/images/services/service-3-1.jpg"
                  alt="Car Insurance"
                />
              </div>
              {/* /.service-card-three__image */}
              <div className="service-card-three__content">
                <div className="service-card-three__icon-box">
                  <span className="service-card-three__icon">
                    <i className="icon-car-insurance" />
                  </span>
                </div>
                {/* /.service-card-three__icon-box */}
                <h3 className="service-card-three__title">
                  <a href="service-d-car-insurance.html">Car Insurance</a>
                </h3>
                {/* /.service-card-three__title */}
                <p className="service-card-three__text">
                  There are many variations majority suffered passages of lorem
                  Ipsum avalable in some form, by injected
                </p>
                {/* /.service-card-three__text */}
                <a
                  href="service-d-car-insurance.html"
                  className="service-card-three__link"
                >
                  Read More <i className="icon-plus" />
                </a>
                {/* /.service-card-three__link */}
              </div>
              {/* /.service-card-three__content */}
              <img
                src="assets/images/shapes/service-card-shape-3-1.png"
                alt="shape"
                className="service-card-three__shape"
              />
            </div>
            {/* /.service-card-three */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="100ms"
          >
            <div className="service-card-three">
              <div className="service-card-three__image">
                <img
                  src="assets/images/services/service-3-2.jpg"
                  alt="life insurance"
                />
              </div>
              {/* /.service-card-three__image */}
              <div className="service-card-three__content">
                <div className="service-card-three__icon-box">
                  <span className="service-card-three__icon">
                    <i className="icon-life-insurance" />
                  </span>
                </div>
                {/* /.service-card-three__icon-box */}
                <h3 className="service-card-three__title">
                  <a href="service-d-life-insurance.html">life insurance</a>
                </h3>
                {/* /.service-card-three__title */}
                <p className="service-card-three__text">
                  If our businesses function differently market-facing, and back
                  of the net, nor hop on the bandwagon yet
                </p>
                {/* /.service-card-three__text */}
                <a
                  href="service-d-life-insurance.html"
                  className="service-card-three__link"
                >
                  Read More <i className="icon-plus" />
                </a>
                {/* /.service-card-three__link */}
              </div>
              {/* /.service-card-three__content */}
              <img
                src="assets/images/shapes/service-card-shape-3-1.png"
                alt="shape"
                className="service-card-three__shape"
              />
            </div>
            {/* /.service-card-three */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <div className="service-card-three">
              <div className="service-card-three__image">
                <img
                  src="assets/images/services/service-3-3.jpg"
                  alt="Business Insurance"
                />
              </div>
              {/* /.service-card-three__image */}
              <div className="service-card-three__content">
                <div className="service-card-three__icon-box">
                  <span className="service-card-three__icon">
                    <i className="icon-insurance-agent" />
                  </span>
                </div>
                {/* /.service-card-three__icon-box */}
                <h3 className="service-card-three__title">
                  <a href="service-d-business-insurance.html">
                    Business Insurance
                  </a>
                </h3>
                {/* /.service-card-three__title */}
                <p className="service-card-three__text">
                  That would be great organic growth, or poop define the
                  underlying principles that drive decisions and strategy
                </p>
                {/* /.service-card-three__text */}
                <a
                  href="service-d-business-insurance.html"
                  className="service-card-three__link"
                >
                  Read More <i className="icon-plus" />
                </a>
                {/* /.service-card-three__link */}
              </div>
              {/* /.service-card-three__content */}
              <img
                src="assets/images/shapes/service-card-shape-3-1.png"
                alt="shape"
                className="service-card-three__shape"
              />
            </div>
            {/* /.service-card-three */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <div className="service-card-three">
              <div className="service-card-three__image">
                <img
                  src="assets/images/services/service-3-4.jpg"
                  alt="Healthy Insurance"
                />
              </div>
              {/* /.service-card-three__image */}
              <div className="service-card-three__content">
                <div className="service-card-three__icon-box">
                  <span className="service-card-three__icon">
                    <i className="icon-protection-1" />
                  </span>
                </div>
                {/* /.service-card-three__icon-box */}
                <h3 className="service-card-three__title">
                  <a href="service-d-healthy-insurance.html">
                    Healthy Insurance
                  </a>
                </h3>
                {/* /.service-card-three__title */}
                <p className="service-card-three__text">
                  Shotgun approach I just wanted to give you a heads-up make it
                  more corporate please introduccion, or hard
                </p>
                {/* /.service-card-three__text */}
                <a
                  href="service-d-healthy-insurance.html"
                  className="service-card-three__link"
                >
                  Read More <i className="icon-plus" />
                </a>
                {/* /.service-card-three__link */}
              </div>
              {/* /.service-card-three__content */}
              <img
                src="assets/images/shapes/service-card-shape-3-1.png"
                alt="shape"
                className="service-card-three__shape"
              />
            </div>
            {/* /.service-card-three */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="100ms"
          >
            <div className="service-card-three">
              <div className="service-card-three__image">
                <img
                  src="assets/images/services/service-3-5.jpg"
                  alt="Home Insurance"
                />
              </div>
              {/* /.service-card-three__image */}
              <div className="service-card-three__content">
                <div className="service-card-three__icon-box">
                  <span className="service-card-three__icon">
                    <i className="icon-home" />
                  </span>
                </div>
                {/* /.service-card-three__icon-box */}
                <h3 className="service-card-three__title">
                  <a href="service-d-home-insurance.html">Home Insurance</a>
                </h3>
                {/* /.service-card-three__title */}
                <p className="service-card-three__text">
                  I just wanted to give you a heads-up. Make it look like
                  digital back to the drawing-board I have zero cycles
                </p>
                {/* /.service-card-three__text */}
                <a
                  href="service-d-home-insurance.html"
                  className="service-card-three__link"
                >
                  Read More <i className="icon-plus" />
                </a>
                {/* /.service-card-three__link */}
              </div>
              {/* /.service-card-three__content */}
              <img
                src="assets/images/shapes/service-card-shape-3-1.png"
                alt="shape"
                className="service-card-three__shape"
              />
            </div>
            {/* /.service-card-three */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <div className="service-card-three">
              <div className="service-card-three__image">
                <img
                  src="assets/images/services/service-3-6.jpg"
                  alt="Finance Insurance"
                />
              </div>
              {/* /.service-card-three__image */}
              <div className="service-card-three__content">
                <div className="service-card-three__icon-box">
                  <span className="service-card-three__icon">
                    <i className="icon-umbrella" />
                  </span>
                </div>
                {/* /.service-card-three__icon-box */}
                <h3 className="service-card-three__title">
                  <a href="service-d-finance-insurance.html">
                    Finance Insurance
                  </a>
                </h3>
                {/* /.service-card-three__title */}
                <p className="service-card-three__text">
                  The closest elephant is the most dangerous conversational
                  content win-win window of opportunity
                </p>
                {/* /.service-card-three__text */}
                <a
                  href="service-d-finance-insurance.html"
                  className="service-card-three__link"
                >
                  Read More <i className="icon-plus" />
                </a>
                {/* /.service-card-three__link */}
              </div>
              {/* /.service-card-three__content */}
              <img
                src="assets/images/shapes/service-card-shape-3-1.png"
                alt="shape"
                className="service-card-three__shape"
              />
            </div>
            {/* /.service-card-three */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <div className="service-card-three">
              <div className="service-card-three__image">
                <img
                  src="assets/images/services/service-3-1.jpg"
                  alt="Car Insurance"
                />
              </div>
              {/* /.service-card-three__image */}
              <div className="service-card-three__content">
                <div className="service-card-three__icon-box">
                  <span className="service-card-three__icon">
                    <i className="icon-car-insurance" />
                  </span>
                </div>
                {/* /.service-card-three__icon-box */}
                <h3 className="service-card-three__title">
                  <a href="service-d-car-insurance.html">Car Insurance</a>
                </h3>
                {/* /.service-card-three__title */}
                <p className="service-card-three__text">
                  There are many variations majority suffered passages of lorem
                  Ipsum avalable in some form, by injected
                </p>
                {/* /.service-card-three__text */}
                <a
                  href="service-d-car-insurance.html"
                  className="service-card-three__link"
                >
                  Read More <i className="icon-plus" />
                </a>
                {/* /.service-card-three__link */}
              </div>
              {/* /.service-card-three__content */}
              <img
                src="assets/images/shapes/service-card-shape-3-1.png"
                alt="shape"
                className="service-card-three__shape"
              />
            </div>
            {/* /.service-card-three */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="100ms"
          >
            <div className="service-card-three">
              <div className="service-card-three__image">
                <img
                  src="assets/images/services/service-3-2.jpg"
                  alt="life insurance"
                />
              </div>
              {/* /.service-card-three__image */}
              <div className="service-card-three__content">
                <div className="service-card-three__icon-box">
                  <span className="service-card-three__icon">
                    <i className="icon-life-insurance" />
                  </span>
                </div>
                {/* /.service-card-three__icon-box */}
                <h3 className="service-card-three__title">
                  <a href="service-d-life-insurance.html">life insurance</a>
                </h3>
                {/* /.service-card-three__title */}
                <p className="service-card-three__text">
                  If our businesses function differently market-facing, and back
                  of the net, nor hop on the bandwagon yet
                </p>
                {/* /.service-card-three__text */}
                <a
                  href="service-d-life-insurance.html"
                  className="service-card-three__link"
                >
                  Read More <i className="icon-plus" />
                </a>
                {/* /.service-card-three__link */}
              </div>
              {/* /.service-card-three__content */}
              <img
                src="assets/images/shapes/service-card-shape-3-1.png"
                alt="shape"
                className="service-card-three__shape"
              />
            </div>
            {/* /.service-card-three */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <div className="service-card-three">
              <div className="service-card-three__image">
                <img
                  src="assets/images/services/service-3-3.jpg"
                  alt="Business Insurance"
                />
              </div>
              {/* /.service-card-three__image */}
              <div className="service-card-three__content">
                <div className="service-card-three__icon-box">
                  <span className="service-card-three__icon">
                    <i className="icon-insurance-agent" />
                  </span>
                </div>
                {/* /.service-card-three__icon-box */}
                <h3 className="service-card-three__title">
                  <a href="service-d-business-insurance.html">
                    Business Insurance
                  </a>
                </h3>
                {/* /.service-card-three__title */}
                <p className="service-card-three__text">
                  That would be great organic growth, or poop define the
                  underlying principles that drive decisions and strategy
                </p>
                {/* /.service-card-three__text */}
                <a
                  href="service-d-business-insurance.html"
                  className="service-card-three__link"
                >
                  Read More <i className="icon-plus" />
                </a>
                {/* /.service-card-three__link */}
              </div>
              {/* /.service-card-three__content */}
              <img
                src="assets/images/shapes/service-card-shape-3-1.png"
                alt="shape"
                className="service-card-three__shape"
              />
            </div>
            {/* /.service-card-three */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <div className="service-card-three">
              <div className="service-card-three__image">
                <img
                  src="assets/images/services/service-3-4.jpg"
                  alt="Healthy Insurance"
                />
              </div>
              {/* /.service-card-three__image */}
              <div className="service-card-three__content">
                <div className="service-card-three__icon-box">
                  <span className="service-card-three__icon">
                    <i className="icon-protection-1" />
                  </span>
                </div>
                {/* /.service-card-three__icon-box */}
                <h3 className="service-card-three__title">
                  <a href="service-d-healthy-insurance.html">
                    Healthy Insurance
                  </a>
                </h3>
                {/* /.service-card-three__title */}
                <p className="service-card-three__text">
                  Shotgun approach I just wanted to give you a heads-up make it
                  more corporate please introduccion, or hard
                </p>
                {/* /.service-card-three__text */}
                <a
                  href="service-d-healthy-insurance.html"
                  className="service-card-three__link"
                >
                  Read More <i className="icon-plus" />
                </a>
                {/* /.service-card-three__link */}
              </div>
              {/* /.service-card-three__content */}
              <img
                src="assets/images/shapes/service-card-shape-3-1.png"
                alt="shape"
                className="service-card-three__shape"
              />
            </div>
            {/* /.service-card-three */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="100ms"
          >
            <div className="service-card-three">
              <div className="service-card-three__image">
                <img
                  src="assets/images/services/service-3-5.jpg"
                  alt="Home Insurance"
                />
              </div>
              {/* /.service-card-three__image */}
              <div className="service-card-three__content">
                <div className="service-card-three__icon-box">
                  <span className="service-card-three__icon">
                    <i className="icon-home" />
                  </span>
                </div>
                {/* /.service-card-three__icon-box */}
                <h3 className="service-card-three__title">
                  <a href="service-d-home-insurance.html">Home Insurance</a>
                </h3>
                {/* /.service-card-three__title */}
                <p className="service-card-three__text">
                  I just wanted to give you a heads-up. Make it look like
                  digital back to the drawing-board I have zero cycles
                </p>
                {/* /.service-card-three__text */}
                <a
                  href="service-d-home-insurance.html"
                  className="service-card-three__link"
                >
                  Read More <i className="icon-plus" />
                </a>
                {/* /.service-card-three__link */}
              </div>
              {/* /.service-card-three__content */}
              <img
                src="assets/images/shapes/service-card-shape-3-1.png"
                alt="shape"
                className="service-card-three__shape"
              />
            </div>
            {/* /.service-card-three */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <div className="service-card-three">
              <div className="service-card-three__image">
                <img
                  src="assets/images/services/service-3-6.jpg"
                  alt="Finance Insurance"
                />
              </div>
              {/* /.service-card-three__image */}
              <div className="service-card-three__content">
                <div className="service-card-three__icon-box">
                  <span className="service-card-three__icon">
                    <i className="icon-umbrella" />
                  </span>
                </div>
                {/* /.service-card-three__icon-box */}
                <h3 className="service-card-three__title">
                  <a href="service-d-finance-insurance.html">
                    Finance Insurance
                  </a>
                </h3>
                {/* /.service-card-three__title */}
                <p className="service-card-three__text">
                  The closest elephant is the most dangerous conversational
                  content win-win window of opportunity
                </p>
                {/* /.service-card-three__text */}
                <a
                  href="service-d-finance-insurance.html"
                  className="service-card-three__link"
                >
                  Read More <i className="icon-plus" />
                </a>
                {/* /.service-card-three__link */}
              </div>
              {/* /.service-card-three__content */}
              <img
                src="assets/images/shapes/service-card-shape-3-1.png"
                alt="shape"
                className="service-card-three__shape"
              />
            </div>
            {/* /.service-card-three */}
          </div>
          {/* /.item */}
        </div>
        {/* /.services-three__carousel */}
      </div>
      {/* /.container */}
    </section>
    {/* /.services-three */}
    <section className="slide-one">
      <div
        className="slide-one__bg"
        style={{
          backgroundImage: "url(assets/images/backgrounds/slide-text-bg.jpg)"
        }}
      />
      {/* /.slide-one__bg */}
      <div className="slide-one__slide">
        <h3 className="slide-one__text">Insurance **</h3>
        {/* /.slide-one__text */}
        <span className="slide-one__text">/</span>
        {/* /.slide-one__text */}
        <h3 className="slide-one__text slide-one__text--stroke">Health**</h3>
        {/* /.slide-one__text */}
        <span className="slide-one__text">/</span>
        {/* /.slide-one__text */}
        <h3 className="slide-one__text">Customer **</h3>
        {/* /.slide-one__text */}
        <span className="slide-one__text">/</span>
        {/* /.slide-one__text */}
        <h3 className="slide-one__text slide-one__text--stroke">
          Consulting**
        </h3>
        {/* /.slide-one__text */}
        <span className="slide-one__text">/</span>
        {/* /.slide-one__text */}
        <h3 className="slide-one__text">Support **</h3>
        {/* /.slide-one__text */}
        <span className="slide-one__text">/</span>
        {/* /.slide-one__text */}
        <h3 className="slide-one__text slide-one__text--stroke">Marketing**</h3>
        {/* /.slide-one__text */}
        <span className="slide-one__text">/</span>
        {/* /.slide-one__text */}
        <h3 className="slide-one__text">Insurance **</h3>
        {/* /.slide-one__text */}
        <span className="slide-one__text">/</span>
        {/* /.slide-one__text */}
        <h3 className="slide-one__text slide-one__text--stroke">Health**</h3>
        {/* /.slide-one__text */}
        <span className="slide-one__text">/</span>
        {/* /.slide-one__text */}
        <h3 className="slide-one__text">Customer **</h3>
        {/* /.slide-one__text */}
        <span className="slide-one__text">/</span>
        {/* /.slide-one__text */}
        <h3 className="slide-one__text slide-one__text--stroke">
          Consulting**
        </h3>
        {/* /.slide-one__text */}
        <span className="slide-one__text">/</span>
        {/* /.slide-one__text */}
        <h3 className="slide-one__text">Support **</h3>
        {/* /.slide-one__text */}
        <span className="slide-one__text">/</span>
        {/* /.slide-one__text */}
        <h3 className="slide-one__text slide-one__text--stroke">Marketing**</h3>
        {/* /.slide-one__text */}
      </div>
      {/* /.slide-one__slide */}
    </section>
    {/* /.slide-one */}
    <section className="why-choose-one section-space-top">
      <div className="container">
        <div
          className="sec-title sec-title--center wow fadeInUp"
          data-wow-duration="1500ms"
        >
          <div className="sec-title__top">
            <div className="sec-title__box">
              <div className="sec-title__box__inner" />
            </div>
            {/* /.sec-title__box */}
            <h6 className="sec-title__tagline">Why Choose us</h6>
            {/* /.sec-title__tagline */}
          </div>
          {/* /.sec-title__top */}
          <h3 className="sec-title__title">
            We Are Dedicated Industries <br /> Support Choose
          </h3>
          {/* /.sec-title__title */}
        </div>
        {/* /.sec-title */}
        <div className="why-choose-one__tab-box tabs-box">
          <ul className="tab-buttons">
            <li
              data-tab="#why-choose001"
              className="tab-btn insuba-btn active-btn"
            >
              <span className="tab-btn__icon">
                <i className="icon-growth" />
              </span>
              Digital Analysis
            </li>
            <li data-tab="#why-choose002" className="tab-btn insuba-btn">
              <span className="tab-btn__icon">
                <i className="icon-bank-building" />
              </span>
              Bank Track
            </li>
            <li data-tab="#why-choose003" className="tab-btn insuba-btn">
              <span className="tab-btn__icon">
                <i className="icon-autonomous-car" />
              </span>
              Car Insurance
            </li>
            <li data-tab="#why-choose004" className="tab-btn insuba-btn">
              <span className="tab-btn__icon">
                <i className="icon-wifi-signal" />
              </span>
              Network Using
            </li>
            <li data-tab="#why-choose005" className="tab-btn insuba-btn">
              <span className="tab-btn__icon">
                <i className="icon-trophy" />
              </span>
              Awards Win
            </li>
          </ul>
          {/* /.tab-buttons */}
          <div className="tabs-content">
            <div
              className="tab active-tab fadeInUp animated"
              data-wow-delay="200ms"
              id="why-choose001"
              style={{ display: "block" }}
            >
              <div className="row align-items-center">
                <div className="col-xl-6">
                  <div className="why-choose-one__content">
                    <h3 className="why-choose-one__title">
                      Insurance Tab Policy of This <br />
                      Customers Service.
                    </h3>
                    {/* /.why-choose-one__title */}
                    <div className="why-choose-one__text-box">
                      <p className="why-choose-one__text">
                        Insurance address a range of simply application and this
                        exchange of passages of available, but the majority have
                        suffered regular payments known as premiums, insurance.
                      </p>
                      {/* /.why-choose-one__text */}
                    </div>
                    {/* /.why-choose-one__text-box */}
                    <div className="why-choose-one__insurance">
                      <div className="why-choose-one__insurance__inner">
                        <span className="why-choose-one__insurance__icon">
                          <i className="icon-mitigation" />
                        </span>
                        {/* /.why-choose-one__insurance__icon */}
                        <div className="why-choose-one__insurance__content">
                          <h4 className="why-choose-one__insurance__title">
                            Get a Free Quote
                          </h4>
                          <p className="why-choose-one__insurance__text">
                            Completed Insurance
                          </p>
                        </div>
                        {/* /.why-choose-one__insurance__content */}
                      </div>
                      {/* /.why-choose-one__insurance__inner */}
                      <div className="why-choose-one__insurance__image">
                        <img
                          src="assets/images/why-choose/why-choose-insurance.jpg"
                          alt="insurance"
                        />
                      </div>
                      {/* /.why-choose-one__insurance__image */}
                    </div>
                    {/* /.why-choose-one__insurance */}
                    <ul className="why-choose-one__list list-unstyled">
                      <li>
                        <span className="why-choose-one__list__icon">
                          <i className="fas fa-angle-double-right" />
                        </span>
                        Insurance took galley of scramble make a type specimen.
                      </li>
                      <li>
                        <span className="why-choose-one__list__icon">
                          <i className="fas fa-angle-double-right" />
                        </span>
                        Standard dummy text ever since the unknown printer.
                      </li>
                    </ul>
                    {/* /.why-choose-one__list list-unstyled */}
                    <div className="why-choose-one__button">
                      <a href="about.html" className="insuba-btn">
                        <span>Read More</span>
                        <span className="insuba-btn__icon-box">
                          <span className="insuba-btn__icon">
                            <i className="fas fa-arrow-right" />
                          </span>
                        </span>
                      </a>
                      {/* /.insuba-btn */}
                    </div>
                    {/* /.why-choose-one__button */}
                  </div>
                  {/* /.why-choose-one__content */}
                </div>
                {/* /.col-xl-6 */}
                <div className="col-xl-6">
                  <div className="why-choose-one__image">
                    <img
                      src="assets/images/why-choose/why-choose-1-1.jpg"
                      alt="choose image"
                    />
                    <span className="why-choose-one__image__star-text">*</span>
                    {/* /.why-choose-one__image__star-text */}
                    <div className="why-choose-one__image__shape" />
                    {/* /.why-choose-one__image__shape */}
                  </div>
                  {/* /.why-choose-one__image */}
                </div>
                {/* /.col-xl-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.why-choose001-tab */}
            <div
              className="tab fadeInUp animated"
              data-wow-delay="200ms"
              id="why-choose002"
              style={{ display: "none" }}
            >
              <div className="row align-items-center">
                <div className="col-xl-6">
                  <div className="why-choose-one__content">
                    <h3 className="why-choose-one__title">
                      Insurance Tab Policy of This <br />
                      Customers Service.
                    </h3>
                    {/* /.why-choose-one__title */}
                    <div className="why-choose-one__text-box">
                      <p className="why-choose-one__text">
                        Insurance address a range of simply application and this
                        exchange of passages of available, but the majority have
                        suffered regular payments known as premiums, insurance.
                      </p>
                      {/* /.why-choose-one__text */}
                    </div>
                    {/* /.why-choose-one__text-box */}
                    <div className="why-choose-one__insurance">
                      <div className="why-choose-one__insurance__inner">
                        <span className="why-choose-one__insurance__icon">
                          <i className="icon-mitigation" />
                        </span>
                        {/* /.why-choose-one__insurance__icon */}
                        <div className="why-choose-one__insurance__content">
                          <h4 className="why-choose-one__insurance__title">
                            Get a Free Quote
                          </h4>
                          <p className="why-choose-one__insurance__text">
                            Completed Insurance
                          </p>
                        </div>
                        {/* /.why-choose-one__insurance__content */}
                      </div>
                      {/* /.why-choose-one__insurance__inner */}
                      <div className="why-choose-one__insurance__image">
                        <img
                          src="assets/images/why-choose/why-choose-insurance.jpg"
                          alt="insurance"
                        />
                      </div>
                      {/* /.why-choose-one__insurance__image */}
                    </div>
                    {/* /.why-choose-one__insurance */}
                    <ul className="why-choose-one__list list-unstyled">
                      <li>
                        <span className="why-choose-one__list__icon">
                          <i className="fas fa-angle-double-right" />
                        </span>
                        Insurance took galley of scramble make a type specimen.
                      </li>
                      <li>
                        <span className="why-choose-one__list__icon">
                          <i className="fas fa-angle-double-right" />
                        </span>
                        Standard dummy text ever since the unknown printer.
                      </li>
                    </ul>
                    {/* /.why-choose-one__list list-unstyled */}
                    <div className="why-choose-one__button">
                      <a href="about.html" className="insuba-btn">
                        <span>Read More</span>
                        <span className="insuba-btn__icon-box">
                          <span className="insuba-btn__icon">
                            <i className="fas fa-arrow-right" />
                          </span>
                        </span>
                      </a>
                      {/* /.insuba-btn */}
                    </div>
                    {/* /.why-choose-one__button */}
                  </div>
                  {/* /.why-choose-one__content */}
                </div>
                {/* /.col-xl-6 */}
                <div className="col-xl-6">
                  <div className="why-choose-one__image">
                    <img
                      src="assets/images/why-choose/why-choose-1-2.jpg"
                      alt="choose image"
                    />
                    <span className="why-choose-one__image__star-text">*</span>
                    {/* /.why-choose-one__image__star-text */}
                    <div className="why-choose-one__image__shape" />
                    {/* /.why-choose-one__image__shape */}
                  </div>
                  {/* /.why-choose-one__image */}
                </div>
                {/* /.col-xl-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.why-choose002-tab */}
            <div
              className="tab fadeInUp animated"
              data-wow-delay="200ms"
              id="why-choose003"
              style={{ display: "none" }}
            >
              <div className="row align-items-center">
                <div className="col-xl-6">
                  <div className="why-choose-one__content">
                    <h3 className="why-choose-one__title">
                      Insurance Tab Policy of This <br />
                      Customers Service.
                    </h3>
                    {/* /.why-choose-one__title */}
                    <div className="why-choose-one__text-box">
                      <p className="why-choose-one__text">
                        Insurance address a range of simply application and this
                        exchange of passages of available, but the majority have
                        suffered regular payments known as premiums, insurance.
                      </p>
                      {/* /.why-choose-one__text */}
                    </div>
                    {/* /.why-choose-one__text-box */}
                    <div className="why-choose-one__insurance">
                      <div className="why-choose-one__insurance__inner">
                        <span className="why-choose-one__insurance__icon">
                          <i className="icon-mitigation" />
                        </span>
                        {/* /.why-choose-one__insurance__icon */}
                        <div className="why-choose-one__insurance__content">
                          <h4 className="why-choose-one__insurance__title">
                            Get a Free Quote
                          </h4>
                          <p className="why-choose-one__insurance__text">
                            Completed Insurance
                          </p>
                        </div>
                        {/* /.why-choose-one__insurance__content */}
                      </div>
                      {/* /.why-choose-one__insurance__inner */}
                      <div className="why-choose-one__insurance__image">
                        <img
                          src="assets/images/why-choose/why-choose-insurance.jpg"
                          alt="insurance"
                        />
                      </div>
                      {/* /.why-choose-one__insurance__image */}
                    </div>
                    {/* /.why-choose-one__insurance */}
                    <ul className="why-choose-one__list list-unstyled">
                      <li>
                        <span className="why-choose-one__list__icon">
                          <i className="fas fa-angle-double-right" />
                        </span>
                        Insurance took galley of scramble make a type specimen.
                      </li>
                      <li>
                        <span className="why-choose-one__list__icon">
                          <i className="fas fa-angle-double-right" />
                        </span>
                        Standard dummy text ever since the unknown printer.
                      </li>
                    </ul>
                    {/* /.why-choose-one__list list-unstyled */}
                    <div className="why-choose-one__button">
                      <a href="about.html" className="insuba-btn">
                        <span>Read More</span>
                        <span className="insuba-btn__icon-box">
                          <span className="insuba-btn__icon">
                            <i className="fas fa-arrow-right" />
                          </span>
                        </span>
                      </a>
                      {/* /.insuba-btn */}
                    </div>
                    {/* /.why-choose-one__button */}
                  </div>
                  {/* /.why-choose-one__content */}
                </div>
                {/* /.col-xl-6 */}
                <div className="col-xl-6">
                  <div className="why-choose-one__image">
                    <img
                      src="assets/images/why-choose/why-choose-1-3.jpg"
                      alt="choose image"
                    />
                    <span className="why-choose-one__image__star-text">*</span>
                    {/* /.why-choose-one__image__star-text */}
                    <div className="why-choose-one__image__shape" />
                    {/* /.why-choose-one__image__shape */}
                  </div>
                  {/* /.why-choose-one__image */}
                </div>
                {/* /.col-xl-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.why-choose003-tab */}
            <div
              className="tab fadeInUp animated"
              data-wow-delay="200ms"
              id="why-choose004"
              style={{ display: "none" }}
            >
              <div className="row align-items-center">
                <div className="col-xl-6">
                  <div className="why-choose-one__content">
                    <h3 className="why-choose-one__title">
                      Insurance Tab Policy of This <br />
                      Customers Service.
                    </h3>
                    {/* /.why-choose-one__title */}
                    <div className="why-choose-one__text-box">
                      <p className="why-choose-one__text">
                        Insurance address a range of simply application and this
                        exchange of passages of available, but the majority have
                        suffered regular payments known as premiums, insurance.
                      </p>
                      {/* /.why-choose-one__text */}
                    </div>
                    {/* /.why-choose-one__text-box */}
                    <div className="why-choose-one__insurance">
                      <div className="why-choose-one__insurance__inner">
                        <span className="why-choose-one__insurance__icon">
                          <i className="icon-mitigation" />
                        </span>
                        {/* /.why-choose-one__insurance__icon */}
                        <div className="why-choose-one__insurance__content">
                          <h4 className="why-choose-one__insurance__title">
                            Get a Free Quote
                          </h4>
                          <p className="why-choose-one__insurance__text">
                            Completed Insurance
                          </p>
                        </div>
                        {/* /.why-choose-one__insurance__content */}
                      </div>
                      {/* /.why-choose-one__insurance__inner */}
                      <div className="why-choose-one__insurance__image">
                        <img
                          src="assets/images/why-choose/why-choose-insurance.jpg"
                          alt="insurance"
                        />
                      </div>
                      {/* /.why-choose-one__insurance__image */}
                    </div>
                    {/* /.why-choose-one__insurance */}
                    <ul className="why-choose-one__list list-unstyled">
                      <li>
                        <span className="why-choose-one__list__icon">
                          <i className="fas fa-angle-double-right" />
                        </span>
                        Insurance took galley of scramble make a type specimen.
                      </li>
                      <li>
                        <span className="why-choose-one__list__icon">
                          <i className="fas fa-angle-double-right" />
                        </span>
                        Standard dummy text ever since the unknown printer.
                      </li>
                    </ul>
                    {/* /.why-choose-one__list list-unstyled */}
                    <div className="why-choose-one__button">
                      <a href="about.html" className="insuba-btn">
                        <span>Read More</span>
                        <span className="insuba-btn__icon-box">
                          <span className="insuba-btn__icon">
                            <i className="fas fa-arrow-right" />
                          </span>
                        </span>
                      </a>
                      {/* /.insuba-btn */}
                    </div>
                    {/* /.why-choose-one__button */}
                  </div>
                  {/* /.why-choose-one__content */}
                </div>
                {/* /.col-xl-6 */}
                <div className="col-xl-6">
                  <div className="why-choose-one__image">
                    <img
                      src="assets/images/why-choose/why-choose-1-4.jpg"
                      alt="choose image"
                    />
                    <span className="why-choose-one__image__star-text">*</span>
                    {/* /.why-choose-one__image__star-text */}
                    <div className="why-choose-one__image__shape" />
                    {/* /.why-choose-one__image__shape */}
                  </div>
                  {/* /.why-choose-one__image */}
                </div>
                {/* /.col-xl-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.why-choose004-tab */}
            <div
              className="tab fadeInUp animated"
              data-wow-delay="200ms"
              id="why-choose005"
              style={{ display: "none" }}
            >
              <div className="row align-items-center">
                <div className="col-xl-6">
                  <div className="why-choose-one__content">
                    <h3 className="why-choose-one__title">
                      Insurance Tab Policy of This <br />
                      Customers Service.
                    </h3>
                    {/* /.why-choose-one__title */}
                    <div className="why-choose-one__text-box">
                      <p className="why-choose-one__text">
                        Insurance address a range of simply application and this
                        exchange of passages of available, but the majority have
                        suffered regular payments known as premiums, insurance.
                      </p>
                      {/* /.why-choose-one__text */}
                    </div>
                    {/* /.why-choose-one__text-box */}
                    <div className="why-choose-one__insurance">
                      <div className="why-choose-one__insurance__inner">
                        <span className="why-choose-one__insurance__icon">
                          <i className="icon-mitigation" />
                        </span>
                        {/* /.why-choose-one__insurance__icon */}
                        <div className="why-choose-one__insurance__content">
                          <h4 className="why-choose-one__insurance__title">
                            Get a Free Quote
                          </h4>
                          <p className="why-choose-one__insurance__text">
                            Completed Insurance
                          </p>
                        </div>
                        {/* /.why-choose-one__insurance__content */}
                      </div>
                      {/* /.why-choose-one__insurance__inner */}
                      <div className="why-choose-one__insurance__image">
                        <img
                          src="assets/images/why-choose/why-choose-insurance.jpg"
                          alt="insurance"
                        />
                      </div>
                      {/* /.why-choose-one__insurance__image */}
                    </div>
                    {/* /.why-choose-one__insurance */}
                    <ul className="why-choose-one__list list-unstyled">
                      <li>
                        <span className="why-choose-one__list__icon">
                          <i className="fas fa-angle-double-right" />
                        </span>
                        Insurance took galley of scramble make a type specimen.
                      </li>
                      <li>
                        <span className="why-choose-one__list__icon">
                          <i className="fas fa-angle-double-right" />
                        </span>
                        Standard dummy text ever since the unknown printer.
                      </li>
                    </ul>
                    {/* /.why-choose-one__list list-unstyled */}
                    <div className="why-choose-one__button">
                      <a href="about.html" className="insuba-btn">
                        <span>Read More</span>
                        <span className="insuba-btn__icon-box">
                          <span className="insuba-btn__icon">
                            <i className="fas fa-arrow-right" />
                          </span>
                        </span>
                      </a>
                      {/* /.insuba-btn */}
                    </div>
                    {/* /.why-choose-one__button */}
                  </div>
                  {/* /.why-choose-one__content */}
                </div>
                {/* /.col-xl-6 */}
                <div className="col-xl-6">
                  <div className="why-choose-one__image">
                    <img
                      src="assets/images/why-choose/why-choose-1-5.jpg"
                      alt="choose image"
                    />
                    <span className="why-choose-one__image__star-text">*</span>
                    {/* /.why-choose-one__image__star-text */}
                    <div className="why-choose-one__image__shape" />
                    {/* /.why-choose-one__image__shape */}
                  </div>
                  {/* /.why-choose-one__image */}
                </div>
                {/* /.col-xl-6 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.why-choose005-tab */}
          </div>
          {/* /.tab-content */}
        </div>
        {/* /.why-choose-one__tab-box */}
      </div>
      {/* /.container */}
    </section>
    {/* /.why-choose-one section-space-top */}
    <section
      className="portfolio-two portfolio-two--section section-space"
      id="portfolio"
    >
      <div className="portfolio-two__bg">
        <div
          className="portfolio-two__bg__inner insuba-jarallax"
          data-jarallax=""
          data-speed="0.3s"
          style={{
            backgroundImage: "url(assets/images/backgrounds/portfolio-bg-2.jpg)"
          }}
        />
        <img
          src="assets/images/shapes/portfolio-shape-2-1.png"
          alt="shape"
          className="portfolio-two__shape"
        />
      </div>
      {/* /.portfolio-two__bg */}
      <div className="container">
        <div className="portfolio-two__top">
          <div className="row gutter-y-30 align-items-center">
            <div className="col-lg-6">
              <div
                className="sec-title @@extrClassName wow fadeInUp"
                data-wow-duration="1500ms"
              >
                <div className="sec-title__top">
                  <div className="sec-title__box">
                    <div className="sec-title__box__inner" />
                  </div>
                  {/* /.sec-title__box */}
                  <h6 className="sec-title__tagline">Our Case Study</h6>
                  {/* /.sec-title__tagline */}
                </div>
                {/* /.sec-title__top */}
                <h3 className="sec-title__title">
                  We Are Variety of industries <br /> Insurance Company.
                </h3>
                {/* /.sec-title__title */}
              </div>
              {/* /.sec-title */}
            </div>
            {/* /.col-lg-6 */}
            <div className="col-lg-6">
              <div
                className="portfolio-two__description wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
              >
                <p className="portfolio-two__text">
                  Insurance address a range of simply application and thisof
                  passages of available, but the majority have suffered exchange
                  regular payments known as premiums, insurance company in some
                  form.
                </p>
                {/* /.portfolio-two__text */}
              </div>
              {/* /.portfolio-two__description */}
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row gutter-y-30 */}
        </div>
        {/* /.portfolio-two__top */}
      </div>
      {/* /.container */}
      <div className="container-fluid">
        <div className="row gutter-y-30">
          <div
            className="column-3 wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <div
              className="portfolio-card-two @@extrClassName"
              style={{
                backgroundImage:
                  "url(assets/images/portfolio/portfolio-2-1.jpg)"
              }}
            >
              <div className="portfolio-card-two__content">
                <div className="portfolio-card-two__content__box">
                  <div className="portfolio-card-two__content__left">
                    <span className="portfolio-card-two__icon">
                      <i className="icon-insurance-agent" />
                    </span>
                    {/* /.portfolio-card-two__icon */}
                    <div className="portfolio-card-two__inner">
                      <h3 className="portfolio-card-two__title">
                        <a href="portfolio-details.html">Business Insurance</a>
                      </h3>
                      {/* /.portfolio-card-two__title */}
                      <p className="portfolio-card-two__text">
                        Business insurance projects{" "}
                      </p>
                      {/* /.portfolio-card-two__text */}
                    </div>
                    {/* /.portfolio-card-two__inner */}
                  </div>
                  {/* /.portfolio-card-two__content__left */}
                  <a
                    href="portfolio-details.html"
                    className="portfolio-card-two__btn"
                  >
                    <span className="portfolio-card-two__btn__icon">
                      <i className="icon-up-left-arrow" />
                    </span>
                  </a>
                  {/* /.portfolio-card-two__btn */}
                </div>
                {/* /.portfolio-card-two__content__box */}
              </div>
              {/* /.portfolio-card-two__content */}
            </div>
            {/* /.portfolio-card-two */}
          </div>
          {/* /.column-3 */}
          <div
            className="column-4 wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="100ms"
          >
            <div
              className="portfolio-card-two @@extrClassName"
              style={{
                backgroundImage:
                  "url(assets/images/portfolio/portfolio-2-2.jpg)"
              }}
            >
              <div className="portfolio-card-two__content">
                <div className="portfolio-card-two__content__box">
                  <div className="portfolio-card-two__content__left">
                    <span className="portfolio-card-two__icon">
                      <i className="icon-protection" />
                    </span>
                    {/* /.portfolio-card-two__icon */}
                    <div className="portfolio-card-two__inner">
                      <h3 className="portfolio-card-two__title">
                        <a href="portfolio-details.html">Healthy Insurance</a>
                      </h3>
                      {/* /.portfolio-card-two__title */}
                      <p className="portfolio-card-two__text">
                        Healthy insurance projects{" "}
                      </p>
                      {/* /.portfolio-card-two__text */}
                    </div>
                    {/* /.portfolio-card-two__inner */}
                  </div>
                  {/* /.portfolio-card-two__content__left */}
                  <a
                    href="portfolio-details.html"
                    className="portfolio-card-two__btn"
                  >
                    <span className="portfolio-card-two__btn__icon">
                      <i className="icon-up-left-arrow" />
                    </span>
                  </a>
                  {/* /.portfolio-card-two__btn */}
                </div>
                {/* /.portfolio-card-two__content__box */}
              </div>
              {/* /.portfolio-card-two__content */}
            </div>
            {/* /.portfolio-card-two */}
          </div>
          {/* /.column-4 */}
          <div
            className="column-3 wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <div
              className="portfolio-card-two @@extrClassName"
              style={{
                backgroundImage:
                  "url(assets/images/portfolio/portfolio-2-3.jpg)"
              }}
            >
              <div className="portfolio-card-two__content">
                <div className="portfolio-card-two__content__box">
                  <div className="portfolio-card-two__content__left">
                    <span className="portfolio-card-two__icon">
                      <i className="icon-life-insurance" />
                    </span>
                    {/* /.portfolio-card-two__icon */}
                    <div className="portfolio-card-two__inner">
                      <h3 className="portfolio-card-two__title">
                        <a href="portfolio-details.html">Life Insurance</a>
                      </h3>
                      {/* /.portfolio-card-two__title */}
                      <p className="portfolio-card-two__text">
                        Life insurance projects{" "}
                      </p>
                      {/* /.portfolio-card-two__text */}
                    </div>
                    {/* /.portfolio-card-two__inner */}
                  </div>
                  {/* /.portfolio-card-two__content__left */}
                  <a
                    href="portfolio-details.html"
                    className="portfolio-card-two__btn"
                  >
                    <span className="portfolio-card-two__btn__icon">
                      <i className="icon-up-left-arrow" />
                    </span>
                  </a>
                  {/* /.portfolio-card-two__btn */}
                </div>
                {/* /.portfolio-card-two__content__box */}
              </div>
              {/* /.portfolio-card-two__content */}
            </div>
            {/* /.portfolio-card-two */}
          </div>
          {/* /.column-3 */}
          <div
            className="column-6 wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="100ms"
          >
            <div
              className="portfolio-card-two portfolio-card-two--lg"
              style={{
                backgroundImage:
                  "url(assets/images/portfolio/portfolio-2-4.jpg)"
              }}
            >
              <div className="portfolio-card-two__content">
                <div className="portfolio-card-two__content__box">
                  <div className="portfolio-card-two__content__left">
                    <span className="portfolio-card-two__icon">
                      <i className="icon-car-insurance" />
                    </span>
                    {/* /.portfolio-card-two__icon */}
                    <div className="portfolio-card-two__inner">
                      <h3 className="portfolio-card-two__title">
                        <a href="portfolio-details.html">Car Insurance</a>
                      </h3>
                      {/* /.portfolio-card-two__title */}
                      <p className="portfolio-card-two__text">
                        Car insurance projects{" "}
                      </p>
                      {/* /.portfolio-card-two__text */}
                    </div>
                    {/* /.portfolio-card-two__inner */}
                  </div>
                  {/* /.portfolio-card-two__content__left */}
                  <a
                    href="portfolio-details.html"
                    className="portfolio-card-two__btn"
                  >
                    <span className="portfolio-card-two__btn__icon">
                      <i className="icon-up-left-arrow" />
                    </span>
                  </a>
                  {/* /.portfolio-card-two__btn */}
                </div>
                {/* /.portfolio-card-two__content__box */}
              </div>
              {/* /.portfolio-card-two__content */}
            </div>
            {/* /.portfolio-card-two */}
          </div>
          {/* /.column-6 */}
          <div
            className="column-6 wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <div
              className="portfolio-card-two portfolio-card-two--lg"
              style={{
                backgroundImage:
                  "url(assets/images/portfolio/portfolio-2-5.jpg)"
              }}
            >
              <div className="portfolio-card-two__content">
                <div className="portfolio-card-two__content__box">
                  <div className="portfolio-card-two__content__left">
                    <span className="portfolio-card-two__icon">
                      <i className="icon-home" />
                    </span>
                    {/* /.portfolio-card-two__icon */}
                    <div className="portfolio-card-two__inner">
                      <h3 className="portfolio-card-two__title">
                        <a href="portfolio-details.html">Home Insurance</a>
                      </h3>
                      {/* /.portfolio-card-two__title */}
                      <p className="portfolio-card-two__text">
                        Home insurance projects{" "}
                      </p>
                      {/* /.portfolio-card-two__text */}
                    </div>
                    {/* /.portfolio-card-two__inner */}
                  </div>
                  {/* /.portfolio-card-two__content__left */}
                  <a
                    href="portfolio-details.html"
                    className="portfolio-card-two__btn"
                  >
                    <span className="portfolio-card-two__btn__icon">
                      <i className="icon-up-left-arrow" />
                    </span>
                  </a>
                  {/* /.portfolio-card-two__btn */}
                </div>
                {/* /.portfolio-card-two__content__box */}
              </div>
              {/* /.portfolio-card-two__content */}
            </div>
            {/* /.portfolio-card-two */}
          </div>
          {/* /.column-6 */}
        </div>
        {/* /.row gutter-y-30 */}
      </div>
      {/* /.container-fluid */}
    </section>
    {/* /.portfolio-two section-space */}
    <section className="team-two section-space-bottom">
      <div className="container">
        <div
          className="sec-title sec-title--center wow fadeInUp"
          data-wow-duration="1500ms"
        >
          <div className="sec-title__top">
            <div className="sec-title__box">
              <div className="sec-title__box__inner" />
            </div>
            {/* /.sec-title__box */}
            <h6 className="sec-title__tagline">Our Team Member</h6>
            {/* /.sec-title__tagline */}
          </div>
          {/* /.sec-title__top */}
          <h3 className="sec-title__title">Meet The Team Membar</h3>
          {/* /.sec-title__title */}
        </div>
        {/* /.sec-title */}
        <div
          className="team-two__carousel insuba-owl__carousel insuba-owl__carousel--basic-nav owl-carousel owl-theme"
          data-owl-options='{
      "items": 1,
      "margin": 10,
      "loop": true,
      "smartSpeed": 700,
      "nav": false,
      "dots": true,
      "navText": ["<i class=\"fas fa-chevron-left\"></i>","<i class=\"fas fa-chevron-right\"></i>"],
      "autoplay": true,
      "responsive": {
          "0": {
              "items": 1,
              "nav": true,
              "dots": false,
              "margin": 10
          },
          "576": {
              "items": 2,
              "margin": 30
          },
          "992": {
              "items": 3,
              "margin": 30
          },
          "1200": {
              "items": 4,
              "margin": 30
          }
      }
  }'
        >
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <div className="team-card-two">
              <div className="team-card-two__image">
                <img src="assets/images/team/team-2-1.jpg" alt="David Mulloy" />
              </div>
              {/* /.team-card-two__image */}
              <div className="team-card-two__content">
                <div className="team-card-two__identity">
                  <h3 className="team-card-two__name">
                    <a href="team-details.html">David Mulloy</a>
                  </h3>
                  {/* /.team-card-two__name */}
                  <p className="team-card-two__designation">Founder</p>
                  {/* /.team-card-two__designation */}
                </div>
                {/* /.team-card-two__identity */}
              </div>
              {/* /.team-card-two__content */}
              <a href="team-details.html" className="team-card-two__btn">
                <i className="icon-up-left-arrow-2" />
              </a>
              {/* /.team-card-two__btn */}
              <ul className="social-links list-unstyled">
                <li>
                  <a href="https://facebook.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                      <span className="sr-only">Facebook</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-pinterest-p" aria-hidden="true" />
                      <span className="sr-only">Pinterest</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-instagram" aria-hidden="true" />
                      <span className="sr-only">Instagram</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
              </ul>
              {/* /.social-links list-unstyled */}
            </div>
            {/* /.team-card-two */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <div className="team-card-two">
              <div className="team-card-two__image">
                <img src="assets/images/team/team-2-2.jpg" alt="Elaine Caine" />
              </div>
              {/* /.team-card-two__image */}
              <div className="team-card-two__content">
                <div className="team-card-two__identity">
                  <h3 className="team-card-two__name">
                    <a href="team-details.html">Elaine Caine</a>
                  </h3>
                  {/* /.team-card-two__name */}
                  <p className="team-card-two__designation">Founder</p>
                  {/* /.team-card-two__designation */}
                </div>
                {/* /.team-card-two__identity */}
              </div>
              {/* /.team-card-two__content */}
              <a href="team-details.html" className="team-card-two__btn">
                <i className="icon-up-left-arrow-2" />
              </a>
              {/* /.team-card-two__btn */}
              <ul className="social-links list-unstyled">
                <li>
                  <a href="https://facebook.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                      <span className="sr-only">Facebook</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-pinterest-p" aria-hidden="true" />
                      <span className="sr-only">Pinterest</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-instagram" aria-hidden="true" />
                      <span className="sr-only">Instagram</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
              </ul>
              {/* /.social-links list-unstyled */}
            </div>
            {/* /.team-card-two */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="400ms"
          >
            <div className="team-card-two">
              <div className="team-card-two__image">
                <img src="assets/images/team/team-2-3.jpg" alt="Steven Park" />
              </div>
              {/* /.team-card-two__image */}
              <div className="team-card-two__content">
                <div className="team-card-two__identity">
                  <h3 className="team-card-two__name">
                    <a href="team-details.html">Steven Park</a>
                  </h3>
                  {/* /.team-card-two__name */}
                  <p className="team-card-two__designation">Founder</p>
                  {/* /.team-card-two__designation */}
                </div>
                {/* /.team-card-two__identity */}
              </div>
              {/* /.team-card-two__content */}
              <a href="team-details.html" className="team-card-two__btn">
                <i className="icon-up-left-arrow-2" />
              </a>
              {/* /.team-card-two__btn */}
              <ul className="social-links list-unstyled">
                <li>
                  <a href="https://facebook.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                      <span className="sr-only">Facebook</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-pinterest-p" aria-hidden="true" />
                      <span className="sr-only">Pinterest</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-instagram" aria-hidden="true" />
                      <span className="sr-only">Instagram</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
              </ul>
              {/* /.social-links list-unstyled */}
            </div>
            {/* /.team-card-two */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="600ms"
          >
            <div className="team-card-two">
              <div className="team-card-two__image">
                <img src="assets/images/team/team-2-4.jpg" alt="sarah albert" />
              </div>
              {/* /.team-card-two__image */}
              <div className="team-card-two__content">
                <div className="team-card-two__identity">
                  <h3 className="team-card-two__name">
                    <a href="team-details.html">sarah albert</a>
                  </h3>
                  {/* /.team-card-two__name */}
                  <p className="team-card-two__designation">Founder</p>
                  {/* /.team-card-two__designation */}
                </div>
                {/* /.team-card-two__identity */}
              </div>
              {/* /.team-card-two__content */}
              <a href="team-details.html" className="team-card-two__btn">
                <i className="icon-up-left-arrow-2" />
              </a>
              {/* /.team-card-two__btn */}
              <ul className="social-links list-unstyled">
                <li>
                  <a href="https://facebook.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                      <span className="sr-only">Facebook</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-pinterest-p" aria-hidden="true" />
                      <span className="sr-only">Pinterest</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-instagram" aria-hidden="true" />
                      <span className="sr-only">Instagram</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
              </ul>
              {/* /.social-links list-unstyled */}
            </div>
            {/* /.team-card-two */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <div className="team-card-two">
              <div className="team-card-two__image">
                <img src="assets/images/team/team-2-1.jpg" alt="David Mulloy" />
              </div>
              {/* /.team-card-two__image */}
              <div className="team-card-two__content">
                <div className="team-card-two__identity">
                  <h3 className="team-card-two__name">
                    <a href="team-details.html">David Mulloy</a>
                  </h3>
                  {/* /.team-card-two__name */}
                  <p className="team-card-two__designation">Founder</p>
                  {/* /.team-card-two__designation */}
                </div>
                {/* /.team-card-two__identity */}
              </div>
              {/* /.team-card-two__content */}
              <a href="team-details.html" className="team-card-two__btn">
                <i className="icon-up-left-arrow-2" />
              </a>
              {/* /.team-card-two__btn */}
              <ul className="social-links list-unstyled">
                <li>
                  <a href="https://facebook.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                      <span className="sr-only">Facebook</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-pinterest-p" aria-hidden="true" />
                      <span className="sr-only">Pinterest</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-instagram" aria-hidden="true" />
                      <span className="sr-only">Instagram</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
              </ul>
              {/* /.social-links list-unstyled */}
            </div>
            {/* /.team-card-two */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <div className="team-card-two">
              <div className="team-card-two__image">
                <img src="assets/images/team/team-2-2.jpg" alt="Elaine Caine" />
              </div>
              {/* /.team-card-two__image */}
              <div className="team-card-two__content">
                <div className="team-card-two__identity">
                  <h3 className="team-card-two__name">
                    <a href="team-details.html">Elaine Caine</a>
                  </h3>
                  {/* /.team-card-two__name */}
                  <p className="team-card-two__designation">Founder</p>
                  {/* /.team-card-two__designation */}
                </div>
                {/* /.team-card-two__identity */}
              </div>
              {/* /.team-card-two__content */}
              <a href="team-details.html" className="team-card-two__btn">
                <i className="icon-up-left-arrow-2" />
              </a>
              {/* /.team-card-two__btn */}
              <ul className="social-links list-unstyled">
                <li>
                  <a href="https://facebook.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                      <span className="sr-only">Facebook</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-pinterest-p" aria-hidden="true" />
                      <span className="sr-only">Pinterest</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-instagram" aria-hidden="true" />
                      <span className="sr-only">Instagram</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
              </ul>
              {/* /.social-links list-unstyled */}
            </div>
            {/* /.team-card-two */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="400ms"
          >
            <div className="team-card-two">
              <div className="team-card-two__image">
                <img src="assets/images/team/team-2-3.jpg" alt="Steven Park" />
              </div>
              {/* /.team-card-two__image */}
              <div className="team-card-two__content">
                <div className="team-card-two__identity">
                  <h3 className="team-card-two__name">
                    <a href="team-details.html">Steven Park</a>
                  </h3>
                  {/* /.team-card-two__name */}
                  <p className="team-card-two__designation">Founder</p>
                  {/* /.team-card-two__designation */}
                </div>
                {/* /.team-card-two__identity */}
              </div>
              {/* /.team-card-two__content */}
              <a href="team-details.html" className="team-card-two__btn">
                <i className="icon-up-left-arrow-2" />
              </a>
              {/* /.team-card-two__btn */}
              <ul className="social-links list-unstyled">
                <li>
                  <a href="https://facebook.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                      <span className="sr-only">Facebook</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-pinterest-p" aria-hidden="true" />
                      <span className="sr-only">Pinterest</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-instagram" aria-hidden="true" />
                      <span className="sr-only">Instagram</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
              </ul>
              {/* /.social-links list-unstyled */}
            </div>
            {/* /.team-card-two */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="600ms"
          >
            <div className="team-card-two">
              <div className="team-card-two__image">
                <img src="assets/images/team/team-2-4.jpg" alt="sarah albert" />
              </div>
              {/* /.team-card-two__image */}
              <div className="team-card-two__content">
                <div className="team-card-two__identity">
                  <h3 className="team-card-two__name">
                    <a href="team-details.html">sarah albert</a>
                  </h3>
                  {/* /.team-card-two__name */}
                  <p className="team-card-two__designation">Founder</p>
                  {/* /.team-card-two__designation */}
                </div>
                {/* /.team-card-two__identity */}
              </div>
              {/* /.team-card-two__content */}
              <a href="team-details.html" className="team-card-two__btn">
                <i className="icon-up-left-arrow-2" />
              </a>
              {/* /.team-card-two__btn */}
              <ul className="social-links list-unstyled">
                <li>
                  <a href="https://facebook.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                      <span className="sr-only">Facebook</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-pinterest-p" aria-hidden="true" />
                      <span className="sr-only">Pinterest</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-instagram" aria-hidden="true" />
                      <span className="sr-only">Instagram</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
              </ul>
              {/* /.social-links list-unstyled */}
            </div>
            {/* /.team-card-two */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="00ms"
          >
            <div className="team-card-two">
              <div className="team-card-two__image">
                <img src="assets/images/team/team-2-1.jpg" alt="David Mulloy" />
              </div>
              {/* /.team-card-two__image */}
              <div className="team-card-two__content">
                <div className="team-card-two__identity">
                  <h3 className="team-card-two__name">
                    <a href="team-details.html">David Mulloy</a>
                  </h3>
                  {/* /.team-card-two__name */}
                  <p className="team-card-two__designation">Founder</p>
                  {/* /.team-card-two__designation */}
                </div>
                {/* /.team-card-two__identity */}
              </div>
              {/* /.team-card-two__content */}
              <a href="team-details.html" className="team-card-two__btn">
                <i className="icon-up-left-arrow-2" />
              </a>
              {/* /.team-card-two__btn */}
              <ul className="social-links list-unstyled">
                <li>
                  <a href="https://facebook.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                      <span className="sr-only">Facebook</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-pinterest-p" aria-hidden="true" />
                      <span className="sr-only">Pinterest</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-instagram" aria-hidden="true" />
                      <span className="sr-only">Instagram</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
              </ul>
              {/* /.social-links list-unstyled */}
            </div>
            {/* /.team-card-two */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="200ms"
          >
            <div className="team-card-two">
              <div className="team-card-two__image">
                <img src="assets/images/team/team-2-2.jpg" alt="Elaine Caine" />
              </div>
              {/* /.team-card-two__image */}
              <div className="team-card-two__content">
                <div className="team-card-two__identity">
                  <h3 className="team-card-two__name">
                    <a href="team-details.html">Elaine Caine</a>
                  </h3>
                  {/* /.team-card-two__name */}
                  <p className="team-card-two__designation">Founder</p>
                  {/* /.team-card-two__designation */}
                </div>
                {/* /.team-card-two__identity */}
              </div>
              {/* /.team-card-two__content */}
              <a href="team-details.html" className="team-card-two__btn">
                <i className="icon-up-left-arrow-2" />
              </a>
              {/* /.team-card-two__btn */}
              <ul className="social-links list-unstyled">
                <li>
                  <a href="https://facebook.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                      <span className="sr-only">Facebook</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-pinterest-p" aria-hidden="true" />
                      <span className="sr-only">Pinterest</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-instagram" aria-hidden="true" />
                      <span className="sr-only">Instagram</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
              </ul>
              {/* /.social-links list-unstyled */}
            </div>
            {/* /.team-card-two */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="400ms"
          >
            <div className="team-card-two">
              <div className="team-card-two__image">
                <img src="assets/images/team/team-2-3.jpg" alt="Steven Park" />
              </div>
              {/* /.team-card-two__image */}
              <div className="team-card-two__content">
                <div className="team-card-two__identity">
                  <h3 className="team-card-two__name">
                    <a href="team-details.html">Steven Park</a>
                  </h3>
                  {/* /.team-card-two__name */}
                  <p className="team-card-two__designation">Founder</p>
                  {/* /.team-card-two__designation */}
                </div>
                {/* /.team-card-two__identity */}
              </div>
              {/* /.team-card-two__content */}
              <a href="team-details.html" className="team-card-two__btn">
                <i className="icon-up-left-arrow-2" />
              </a>
              {/* /.team-card-two__btn */}
              <ul className="social-links list-unstyled">
                <li>
                  <a href="https://facebook.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                      <span className="sr-only">Facebook</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-pinterest-p" aria-hidden="true" />
                      <span className="sr-only">Pinterest</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-instagram" aria-hidden="true" />
                      <span className="sr-only">Instagram</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
              </ul>
              {/* /.social-links list-unstyled */}
            </div>
            {/* /.team-card-two */}
          </div>
          {/* /.item */}
          <div
            className="item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="600ms"
          >
            <div className="team-card-two">
              <div className="team-card-two__image">
                <img src="assets/images/team/team-2-4.jpg" alt="sarah albert" />
              </div>
              {/* /.team-card-two__image */}
              <div className="team-card-two__content">
                <div className="team-card-two__identity">
                  <h3 className="team-card-two__name">
                    <a href="team-details.html">sarah albert</a>
                  </h3>
                  {/* /.team-card-two__name */}
                  <p className="team-card-two__designation">Founder</p>
                  {/* /.team-card-two__designation */}
                </div>
                {/* /.team-card-two__identity */}
              </div>
              {/* /.team-card-two__content */}
              <a href="team-details.html" className="team-card-two__btn">
                <i className="icon-up-left-arrow-2" />
              </a>
              {/* /.team-card-two__btn */}
              <ul className="social-links list-unstyled">
                <li>
                  <a href="https://facebook.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                      <span className="sr-only">Facebook</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://pinterest.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-pinterest-p" aria-hidden="true" />
                      <span className="sr-only">Pinterest</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-instagram" aria-hidden="true" />
                      <span className="sr-only">Instagram</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </li>
              </ul>
              {/* /.social-links list-unstyled */}
            </div>
            {/* /.team-card-two */}
          </div>
          {/* /.item */}
        </div>
        {/* /.team-two__carousel */}
      </div>
      {/* /.container */}
    </section>
    {/* /.team-two */}
    <div className="client-carousel client-carousel--about">
      <div className="container">
        <div
          className="client-carousel__carousel insuba-owl__carousel insuba-owl__carousel--with-shadow insuba-owl__carousel--basic-nav owl-theme owl-carousel"
          data-owl-options='{
      "items": 5,
      "margin": 65,
      "smartSpeed": 700,
      "loop":true,
      "autoplay": 6000,
      "nav":false,
      "dots":false,
      "navText": ["<i class=\"fas fa-chevron-left\"></i>","<i class=\"fas fa-chevron-right\"></i>"],
      "responsive":{
          "0":{
              "items": 1,
              "margin": 10
          },
          "361":{
              "items": 2,
              "margin": 20
          },
          "576":{
              "items": 3,
              "margin": 20
          },
          "768":{
              "items": 3,
              "margin": 40
          },
          "992":{
              "items": 4,
              "margin": 40
          },
          "1200":{
              "items": 5,
              "margin": 40
          }
      }
      }'
        >
          <div className="client-carousel__item">
            <img
              src="assets/images/resources/brand-1-1.png"
              alt="insuba"
              className="client-carousel__image"
            />
            <div className="client-carousel__hover">
              <img
                src="assets/images/resources/brand-1-1-hover.png"
                alt="insuba"
                className="client-carousel__hover__image"
              />
            </div>
            {/* /.client-carousel__hover */}
          </div>
          {/* /.owl-slide-item*/}
          <div className="client-carousel__item">
            <img
              src="assets/images/resources/brand-1-1.png"
              alt="insuba"
              className="client-carousel__image"
            />
            <div className="client-carousel__hover">
              <img
                src="assets/images/resources/brand-1-1-hover.png"
                alt="insuba"
                className="client-carousel__hover__image"
              />
            </div>
            {/* /.client-carousel__hover */}
          </div>
          {/* /.owl-slide-item*/}
          <div className="client-carousel__item">
            <img
              src="assets/images/resources/brand-1-1.png"
              alt="insuba"
              className="client-carousel__image"
            />
            <div className="client-carousel__hover">
              <img
                src="assets/images/resources/brand-1-1-hover.png"
                alt="insuba"
                className="client-carousel__hover__image"
              />
            </div>
            {/* /.client-carousel__hover */}
          </div>
          {/* /.owl-slide-item*/}
          <div className="client-carousel__item">
            <img
              src="assets/images/resources/brand-1-1.png"
              alt="insuba"
              className="client-carousel__image"
            />
            <div className="client-carousel__hover">
              <img
                src="assets/images/resources/brand-1-1-hover.png"
                alt="insuba"
                className="client-carousel__hover__image"
              />
            </div>
            {/* /.client-carousel__hover */}
          </div>
          {/* /.owl-slide-item*/}
        </div>
        {/* /.client-carousel__carousel */}
      </div>
      {/* /.container */}
    </div>
    {/* /.client-carousel */}
    <section
      className="blog-one section-space-top section-space-bottom2"
      id="blog"
    >
      <div className="container">
        <div
          className="sec-title sec-title--center wow fadeInUp"
          data-wow-duration="1500ms"
        >
          <div className="sec-title__top">
            <div className="sec-title__box">
              <div className="sec-title__box__inner" />
            </div>
            {/* /.sec-title__box */}
            <h6 className="sec-title__tagline">Our Latest Blog</h6>
            {/* /.sec-title__tagline */}
          </div>
          {/* /.sec-title__top */}
          <h3 className="sec-title__title">We Learn From This Latest News</h3>
          {/* /.sec-title__title */}
        </div>
        {/* /.sec-title */}
        <div className="row gutter-y-30">
          <div className="col-md-6 col-lg-4">
            <div
              className="blog-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="blog-card__image">
                <div className="blog-card__image__inner">
                  <img
                    src="assets/images/blog/blog-1-1.jpg"
                    alt="Contrary Popular For This Insurance Flexible"
                  />
                  <a
                    href="blog-details-right.html"
                    className="blog-card__image__link"
                  >
                    <span className="sr-only">
                      Contrary Popular For This Insurance Flexible
                    </span>
                  </a>
                </div>
                {/* /.blog-card__image__inner */}
                <div className="blog-card__date">
                  <span className="blog-card__date__day">24</span>
                  <span className="blog-card__date__month">Mar</span>
                  <span className="blog-card__date__year">2024</span>
                </div>
                {/* /.blog-card__date */}
              </div>
              {/* /.blog-card__image */}
              <div className="blog-card__content">
                <h3 className="blog-card__title">
                  <a href="blog-details-right.html">
                    Contrary Popular For This Insurance Flexible
                  </a>
                </h3>
                {/* /.blog-card__title */}
                <p className="blog-card__text">
                  Life Insurance financial there are most lorem Ipsum available.
                </p>
                {/* /.blog-card__text */}
                <a href="blog-details-right.html" className="blog-card__link">
                  <span className="blog-card__link__front">
                    <i className="fas fa-arrow-right" />
                  </span>
                  <span className="blog-card__link__back insuba-btn">
                    <span>Read More</span>
                    <span className="insuba-btn__icon-box">
                      <span className="insuba-btn__icon">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </span>
                  </span>
                </a>
                {/* /.blog-card__link */}
              </div>
              {/* /.blog-card__content */}
              <div className="blog-card__shape blog-card__shape--1" />
              {/* /.blog-card__shape */}
              <div className="blog-card__shape blog-card__shape--2" />
              {/* /.blog-card__shape */}
              <div className="blog-card__shape blog-card__shape--3" />
              {/* /.blog-card__shape */}
            </div>
            {/* /.blog-card */}
          </div>
          {/* /.col-md-6 col-lg-4 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="blog-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="blog-card__image">
                <div className="blog-card__image__inner">
                  <img
                    src="assets/images/blog/blog-1-2.jpg"
                    alt="Today Health insurance Blog off Deductible"
                  />
                  <a
                    href="blog-details-right.html"
                    className="blog-card__image__link"
                  >
                    <span className="sr-only">
                      Today Health insurance Blog off Deductible
                    </span>
                  </a>
                </div>
                {/* /.blog-card__image__inner */}
                <div className="blog-card__date">
                  <span className="blog-card__date__day">24</span>
                  <span className="blog-card__date__month">Mar</span>
                  <span className="blog-card__date__year">2024</span>
                </div>
                {/* /.blog-card__date */}
              </div>
              {/* /.blog-card__image */}
              <div className="blog-card__content">
                <h3 className="blog-card__title">
                  <a href="blog-details-right.html">
                    Today Health insurance Blog off Deductible
                  </a>
                </h3>
                {/* /.blog-card__title */}
                <p className="blog-card__text">
                  Let's circle back tomorrow code, nor I have zero cycles for
                  this.
                </p>
                {/* /.blog-card__text */}
                <a href="blog-details-right.html" className="blog-card__link">
                  <span className="blog-card__link__front">
                    <i className="fas fa-arrow-right" />
                  </span>
                  <span className="blog-card__link__back insuba-btn">
                    <span>Read More</span>
                    <span className="insuba-btn__icon-box">
                      <span className="insuba-btn__icon">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </span>
                  </span>
                </a>
                {/* /.blog-card__link */}
              </div>
              {/* /.blog-card__content */}
              <div className="blog-card__shape blog-card__shape--1" />
              {/* /.blog-card__shape */}
              <div className="blog-card__shape blog-card__shape--2" />
              {/* /.blog-card__shape */}
              <div className="blog-card__shape blog-card__shape--3" />
              {/* /.blog-card__shape */}
            </div>
            {/* /.blog-card */}
          </div>
          {/* /.col-md-6 col-lg-4 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="blog-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="blog-card__image">
                <div className="blog-card__image__inner">
                  <img
                    src="assets/images/blog/blog-1-3.jpg"
                    alt="Get Insured & Medical This Healthy Insurance"
                  />
                  <a
                    href="blog-details-right.html"
                    className="blog-card__image__link"
                  >
                    <span className="sr-only">
                      Get Insured &amp; Medical This Healthy Insurance
                    </span>
                  </a>
                </div>
                {/* /.blog-card__image__inner */}
                <div className="blog-card__date">
                  <span className="blog-card__date__day">24</span>
                  <span className="blog-card__date__month">Mar</span>
                  <span className="blog-card__date__year">2024</span>
                </div>
                {/* /.blog-card__date */}
              </div>
              {/* /.blog-card__image */}
              <div className="blog-card__content">
                <h3 className="blog-card__title">
                  <a href="blog-details-right.html">
                    Get Insured &amp; Medical This Healthy Insurance
                  </a>
                </h3>
                {/* /.blog-card__title */}
                <p className="blog-card__text">
                  You better eat a reality sandwich before you walk back in
                  that.
                </p>
                {/* /.blog-card__text */}
                <a href="blog-details-right.html" className="blog-card__link">
                  <span className="blog-card__link__front">
                    <i className="fas fa-arrow-right" />
                  </span>
                  <span className="blog-card__link__back insuba-btn">
                    <span>Read More</span>
                    <span className="insuba-btn__icon-box">
                      <span className="insuba-btn__icon">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </span>
                  </span>
                </a>
                {/* /.blog-card__link */}
              </div>
              {/* /.blog-card__content */}
              <div className="blog-card__shape blog-card__shape--1" />
              {/* /.blog-card__shape */}
              <div className="blog-card__shape blog-card__shape--2" />
              {/* /.blog-card__shape */}
              <div className="blog-card__shape blog-card__shape--3" />
              {/* /.blog-card__shape */}
            </div>
            {/* /.blog-card */}
          </div>
          {/* /.col-md-6 col-lg-4 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container */}
    </section>
    {/* /.blog-one */}
    <div className="newsletter @@extraClassName">
      <div className="container">
        <div
          className="newsletter__inner wow fadeInUp"
          data-wow-duration="1500ms"
        >
          <div className="newsletter__inner__bg">
            <img
              src="assets/images/shapes/newsletter-shape-1-1.png"
              alt="shape"
              className="newsletter__shape-one"
            />
            <img
              src="assets/images/shapes/newsletter-shape-1-2.png"
              alt="shape"
              className="newsletter__shape-two"
            />
          </div>
          {/* /.newsletter__inner__bg */}
          <div className="newsletter__image">
            <img
              src="assets/images/resources/newsletter-1-1.png"
              alt="newsletter"
              className="newsletter__image__one"
            />
            <img
              src="assets/images/shapes/newsletter-shape-1-3.png"
              alt="shape"
              className="newsletter__image__shape"
            />
          </div>
          {/* /.newsletter__image */}
          <div className="newsletter__form">
            <h3 className="newsletter__form__title">
              Subscribe To Our Newsletter
            </h3>
            {/* /.newsletter__form__title */}
            <form
              action="#"
              data-url="MAILCHIMP_FORM_URL"
              className="newsletter__form__form mc-form"
            >
              <input
                type="text"
                name="EMAIL"
                placeholder="Your email address"
              />
              <button type="submit" className="insuba-btn">
                <span>subscribe</span>
              </button>
            </form>
            {/* /.newsletter__form__form mc-form */}
            <div className="mc-form__response" />
            {/* /.mc-form__response */}
          </div>
          {/* /.newsletter__form */}
        </div>
        {/* /.newsletter__inner */}
      </div>
      {/* /.container */}
    </div>
    {/* /.newsletter */}
    <footer className="main-footer @@extraClassName">
      <div className="main-footer__top">
        <div
          className="main-footer__bg"
          style={{
            backgroundImage: "url(assets/images/backgrounds/footer-bg.jpg)"
          }}
        />
        {/* /.main-footer__bg */}
        <div className="container">
          <div className="row gutter-y-40">
            <div
              className="col-xl-4 col-lg-5 col-md-8 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="footer-widget footer-widget--about">
                <a href="index.html" className="footer-widget__logo">
                  <img
                    src="assets/images/logo-light.png"
                    width={212}
                    alt="Insuba HTML Template"
                  />
                </a>
                {/* /.footer-widget__logo */}
                <p className="footer-widget__about">
                  We help businesses maximize their online presence with a
                  personalized approach digital marketing and get the latest of
                  update of our company.
                </p>
                {/* /.footer-widget__about */}
                <div className="social-links">
                  <a href="https://facebook.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-facebook-f" aria-hidden="true" />
                      <span className="sr-only">Facebook</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                  <a href="https://pinterest.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-pinterest-p" aria-hidden="true" />
                      <span className="sr-only">Pinterest</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                  <a href="https://twitter.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                  <a href="https://instagram.com/">
                    <span className="social-links__icon">
                      <i className="fab fa-instagram" aria-hidden="true" />
                      <span className="sr-only">Instagram</span>
                    </span>
                    {/* /.social-links__icon */}
                  </a>
                </div>
                {/* /.social-links */}
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-xl-4 col-lg-5 col-md-8 */}
            <div
              className="col-xl-2 col-lg-3 col-md-4 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">Services</h2>
                {/* /.footer-widget__title */}
                <ul className="list-unstyled footer-widget__links">
                  <li>
                    <a href="about.html">Why choose us</a>
                  </li>
                  <li>
                    <a href="about.html">Our solutions</a>
                  </li>
                  <li>
                    <a href="about.html">Partners</a>
                  </li>
                  <li>
                    <a href="about.html">Core values</a>
                  </li>
                  <li>
                    <a href="portfolio.html">Our projects</a>
                  </li>
                </ul>
                {/* /.list-unstyled footer-widget__links */}
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-xl-2 col-lg-3 col-md-4 */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="footer-widget footer-widget--info">
                <h2 className="footer-widget__title">City Map</h2>
                {/* /.footer-widget__title */}
                <ul className="list-unstyled footer-widget__info">
                  <li>
                    <span className="footer-widget__info__icon">
                      <i className="far fa-clock" />
                    </span>
                    <div className="footer-widget__info__text">
                      <span>Open Hours of Government:</span> <br />
                      <span>Mon - Fri: 8.00 am. - 6.00 pm.</span>
                    </div>
                    {/* /.footer-widget__info__text */}
                  </li>
                  <li>
                    <span className="footer-widget__info__icon">
                      <i className="fas fa-map-marker-alt" />
                    </span>
                    <a href="#" className="footer-widget__info__text">
                      {" "}
                      13/A, Miranda Halim City. <br /> Stanhope, IA 50246
                    </a>
                  </li>
                  <li>
                    <span className="footer-widget__info__icon">
                      <i className="fas fa-phone-alt" />
                    </span>
                    <div className="footer-widget__info__text">
                      <a href="tel:+09969569535">+099 695 695 35</a> <br />
                      <a href="tel:+515-826-5572">+515-826-5572</a>
                    </div>
                    {/* /.footer-widget__info__text */}
                  </li>
                </ul>
                {/* /.list-unstyled */}
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-xl-3 col-lg-4 col-md-6 */}
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div className="footer-widget footer-widget--gallery">
                <h2 className="footer-widget__title">Gallery</h2>
                {/* /.footer-widget__title */}
                <div className="footer-widget__gallery">
                  <a href="about.html" className="footer-widget__gallery__link">
                    <img
                      src="assets/images/gallery/footer-widget-gallery-1.jpg"
                      alt="footer-widget-gallery"
                    />
                    <span className="footer-widget__gallery__overlay">
                      <i className="icon-plus" />
                    </span>
                  </a>
                  {/* /.footer-widget__gallery__link */}
                  <a href="about.html" className="footer-widget__gallery__link">
                    <img
                      src="assets/images/gallery/footer-widget-gallery-2.jpg"
                      alt="footer-widget-gallery"
                    />
                    <span className="footer-widget__gallery__overlay">
                      <i className="icon-plus" />
                    </span>
                  </a>
                  {/* /.footer-widget__gallery__link */}
                  <a href="about.html" className="footer-widget__gallery__link">
                    <img
                      src="assets/images/gallery/footer-widget-gallery-3.jpg"
                      alt="footer-widget-gallery"
                    />
                    <span className="footer-widget__gallery__overlay">
                      <i className="icon-plus" />
                    </span>
                  </a>
                  {/* /.footer-widget__gallery__link */}
                  <a href="about.html" className="footer-widget__gallery__link">
                    <img
                      src="assets/images/gallery/footer-widget-gallery-4.jpg"
                      alt="footer-widget-gallery"
                    />
                    <span className="footer-widget__gallery__overlay">
                      <i className="icon-plus" />
                    </span>
                  </a>
                  {/* /.footer-widget__gallery__link */}
                  <a href="about.html" className="footer-widget__gallery__link">
                    <img
                      src="assets/images/gallery/footer-widget-gallery-5.jpg"
                      alt="footer-widget-gallery"
                    />
                    <span className="footer-widget__gallery__overlay">
                      <i className="icon-plus" />
                    </span>
                  </a>
                  {/* /.footer-widget__gallery__link */}
                  <a href="about.html" className="footer-widget__gallery__link">
                    <img
                      src="assets/images/gallery/footer-widget-gallery-6.jpg"
                      alt="footer-widget-gallery"
                    />
                    <span className="footer-widget__gallery__overlay">
                      <i className="icon-plus" />
                    </span>
                  </a>
                  {/* /.footer-widget__gallery__link */}
                </div>
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-xl-3 col-lg-4 col-md-6 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        <img
          src="assets/images/shapes/footer-shape-1-1.png"
          alt="shape"
          className="main-footer__shape-one"
        />
        <img
          src="assets/images/shapes/footer-shape-1-2.png"
          alt="shape"
          className="main-footer__shape-two"
        />
      </div>
      {/* /.main-footer__top */}
      <div className="main-footer__bottom">
        <div className="container">
          <div className="main-footer__bottom__inner">
            <p className="main-footer__copyright">
              © Copyright <span className="dynamic-year" /> by insuba HTML
              Template.
            </p>
          </div>
          {/* /.main-footer__inner */}
        </div>
        {/* /.container */}
      </div>
      {/* /.main-footer__bottom */}
    </footer>
    {/* /.main-footer */}
  </div>
  {/* /.page-wrapper */}
  <div className="mobile-nav__wrapper">
    <div className="mobile-nav__overlay mobile-nav__toggler" />
    {/* /.mobile-nav__overlay */}
    <div className="mobile-nav__content">
      <span className="mobile-nav__close mobile-nav__toggler">
        <i className="icon-close" />
      </span>
      <div className="logo-box logo-retina">
        <a href="index.html" aria-label="logo image">
          <img src="assets/images/logo-light.png" width={212} alt="" />
        </a>
      </div>
      {/* /.logo-box */}
      <div className="mobile-nav__container" />
      {/* /.mobile-nav__container */}
      <ul className="mobile-nav__contact list-unstyled">
        <li>
          <span className="mobile-nav__contact__icon">
            <i className="fa fa-envelope" />
          </span>
          <a href="mailto:needhelp@insuba.com">needhelp@company.com</a>
        </li>
        <li>
          <span className="mobile-nav__contact__icon">
            <i className="fa fa-phone-alt" />
          </span>
          <a href="tel:+9156980036420">+91 5698 0036 420</a>
        </li>
      </ul>
      {/* /.mobile-nav__contact */}
      <div className="mobile-nav__social social-links">
        <a href="https://facebook.com/">
          <span className="social-links__icon">
            <i className="fab fa-facebook-f" aria-hidden="true" />
            <span className="sr-only">Facebook</span>
          </span>
          {/* /.social-links__icon */}
        </a>
        <a href="https://pinterest.com/">
          <span className="social-links__icon">
            <i className="fab fa-pinterest-p" aria-hidden="true" />
            <span className="sr-only">Pinterest</span>
          </span>
          {/* /.social-links__icon */}
        </a>
        <a href="https://twitter.com/">
          <span className="social-links__icon">
            <i className="fab fa-twitter" aria-hidden="true" />
            <span className="sr-only">Twitter</span>
          </span>
          {/* /.social-links__icon */}
        </a>
        <a href="https://instagram.com/">
          <span className="social-links__icon">
            <i className="fab fa-instagram" aria-hidden="true" />
            <span className="sr-only">Instagram</span>
          </span>
          {/* /.social-links__icon */}
        </a>
      </div>
      {/* /.mobile-nav__social */}
    </div>
    {/* /.mobile-nav__content */}
  </div>
  {/* /.mobile-nav__wrapper */}
  <div className="search-popup">
    <div className="search-popup__overlay search-toggler" />
    {/* /.search-popup__overlay */}
    <div className="search-popup__content">
      <form
        role="search"
        method="get"
        className="search-popup__form"
        action="#"
      >
        <input type="text" id="search" placeholder="Search Here..." />
        <button
          type="submit"
          aria-label="search submit"
          className="insuba-btn insuba-btn--base"
        >
          <i className="icon-search" />
        </button>
      </form>
    </div>
    {/* /.search-popup__content */}
  </div>
  {/* /.search-popup */}
  <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
    <span className="scroll-to-top__text">back top</span>
    <span className="scroll-to-top__wrapper">
      <span className="scroll-to-top__inner" />
    </span>
  </a>
  {/* template js */}
</>

  )
}

export default about
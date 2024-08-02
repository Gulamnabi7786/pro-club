import React from 'react'
import "./App.css"

function member() {
  return (
    <div>
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
            <h2 className="page-header__title">Our Team 03</h2>
            <ul className="insuba-breadcrumb list-unstyled">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <span>Our Team</span>
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
      <section className="team-page team-one section-space-top section-space-bottom2">
        <div className="container">
          <div className="team-one__area">
            <div className="team-one__row row">
              <div
                className="team-one__border-col col-lg-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <div className="team-card">
                  <div className="team-card__image">
                    <img
                      src="assets/images/team/team-1-1.jpg"
                      alt="Steven Park"
                    />
                  </div>
                  {/* /.team-card__image */}
                  <div className="team-card__content">
                    <div className="team-card__content__inner">
                      <h3 className="team-card__name">
                        <a href="team-details.html">Steven Park</a>
                      </h3>
                      {/* /.team-card__name */}
                      <p className="team-card__designation">Founder</p>
                      {/* /.team-card__designation */}
                      <p className="team-card__text">
                        Logged in users can view fuled social security numbers and
                        can see call.
                      </p>
                      {/* /.team-card__text */}
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
                            <i
                              className="fab fa-pinterest-p"
                              aria-hidden="true"
                            />
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
                    {/* /.team-card__content__inner */}
                    <div className="team-card__content__shape">
                      <div className="team-card__content__shape__one" />
                      {/* /.team-card__content__shape-one */}
                      <div className="team-card__content__shape__two" />
                      {/* /.team-card__content__shape-two */}
                    </div>
                    {/* /.team-card__content__shape */}
                  </div>
                  {/* /.team-card__content */}
                </div>
                {/* /.team-card */}
              </div>
              {/* /.col-lg-6 */}
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
              >
                <div className="team-card">
                  <div className="team-card__image">
                    <img
                      src="assets/images/team/team-1-2.jpg"
                      alt="Jeremy Martin"
                    />
                  </div>
                  {/* /.team-card__image */}
                  <div className="team-card__content">
                    <div className="team-card__content__inner">
                      <h3 className="team-card__name">
                        <a href="team-details.html">Jeremy Martin</a>
                      </h3>
                      {/* /.team-card__name */}
                      <p className="team-card__designation">Founder</p>
                      {/* /.team-card__designation */}
                      <p className="team-card__text">
                        I need this to work in internet explorer! there are more
                        projects lined up.
                      </p>
                      {/* /.team-card__text */}
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
                            <i
                              className="fab fa-pinterest-p"
                              aria-hidden="true"
                            />
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
                    {/* /.team-card__content__inner */}
                    <div className="team-card__content__shape">
                      <div className="team-card__content__shape__one" />
                      {/* /.team-card__content__shape-one */}
                      <div className="team-card__content__shape__two" />
                      {/* /.team-card__content__shape-two */}
                    </div>
                    {/* /.team-card__content__shape */}
                  </div>
                  {/* /.team-card__content */}
                </div>
                {/* /.team-card */}
              </div>
              {/* /.col-lg-6 */}
              <div
                className="team-one__border-col col-lg-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="400ms"
              >
                <div className="team-card">
                  <div className="team-card__image">
                    <img
                      src="assets/images/team/team-1-3.jpg"
                      alt="Keith Thompson"
                    />
                  </div>
                  {/* /.team-card__image */}
                  <div className="team-card__content">
                    <div className="team-card__content__inner">
                      <h3 className="team-card__name">
                        <a href="team-details.html">Keith Thompson</a>
                      </h3>
                      {/* /.team-card__name */}
                      <p className="team-card__designation">Founder</p>
                      {/* /.team-card__designation */}
                      <p className="team-card__text">
                        Will really add to your portfolio i promise can you remove
                        my double chin on.
                      </p>
                      {/* /.team-card__text */}
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
                            <i
                              className="fab fa-pinterest-p"
                              aria-hidden="true"
                            />
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
                    {/* /.team-card__content__inner */}
                    <div className="team-card__content__shape">
                      <div className="team-card__content__shape__one" />
                      {/* /.team-card__content__shape-one */}
                      <div className="team-card__content__shape__two" />
                      {/* /.team-card__content__shape-two */}
                    </div>
                    {/* /.team-card__content__shape */}
                  </div>
                  {/* /.team-card__content */}
                </div>
                {/* /.team-card */}
              </div>
              {/* /.col-lg-6 */}
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="600ms"
              >
                <div className="team-card">
                  <div className="team-card__image">
                    <img src="assets/images/team/team-1-4.jpg" alt="Sara Vega" />
                  </div>
                  {/* /.team-card__image */}
                  <div className="team-card__content">
                    <div className="team-card__content__inner">
                      <h3 className="team-card__name">
                        <a href="team-details.html">Sara Vega</a>
                      </h3>
                      {/* /.team-card__name */}
                      <p className="team-card__designation">Founder</p>
                      {/* /.team-card__designation */}
                      <p className="team-card__text">
                        I like it, but can the snow look a little warmer can my
                        website be in english.
                      </p>
                      {/* /.team-card__text */}
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
                            <i
                              className="fab fa-pinterest-p"
                              aria-hidden="true"
                            />
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
                    {/* /.team-card__content__inner */}
                    <div className="team-card__content__shape">
                      <div className="team-card__content__shape__one" />
                      {/* /.team-card__content__shape-one */}
                      <div className="team-card__content__shape__two" />
                      {/* /.team-card__content__shape-two */}
                    </div>
                    {/* /.team-card__content__shape */}
                  </div>
                  {/* /.team-card__content */}
                </div>
                {/* /.team-card */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.team-one__row row */}
            <a href="team.html" className="team-one__btn">
              <span className="team-one__btn__icon">
                <i className="icon-arrow-up-right" />
              </span>
            </a>
            {/* /.team-one__btn */}
          </div>
          {/* /.team-one__area */}
        </div>
        {/* /.container */}
      </section>
      {/* /.team-page team-one */}
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
  </div>
  )
}

export default member
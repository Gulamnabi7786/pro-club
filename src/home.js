import React from "react";
// import "./js/insuba"

function home() {
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
        <header className="main-header main-header--one sticky-header sticky-header--one-page">
          <div className="container-fluid">
            <div className="main-header__inner">
              <div className="main-header__logo logo-retina">
                <a href="index.html">
                  <img
                    src="assets/images/logo-dark.png"
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
                  <ul className="main-menu__list one-page-scroll-menu">
                    <li className="scrollToLink current">
                      <a href="#home">Home</a>
                    </li>
                    <li className="scrollToLink">
                      <a href="#about">About</a>
                    </li>
                    <li className="scrollToLink">
                      <a href="#services">Services</a>
                    </li>
                    <li className="scrollToLink">
                      <a href="#contact">Contact</a>
                    </li>
                    <li className="scrollToLink">
                      <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="scrollToLink">
                      <a href="#team">Team</a>
                    </li>
                    <li className="scrollToLink">
                      <a href="#blog">Blog</a>
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
      <section className="main-slider-one" id="home">
        <div
          className="main-slider-one__carousel insuba-owl__carousel insuba-owl__carousel--basic-nav owl-carousel owl-theme"
          data-owl-options='{
    "items": 1,
    "margin": 0,
    "animateIn": "fadeIn",
    "animateOut": "fadeOut",
    "loop": true,
    "smartSpeed": 700,
    "nav": false,
    "dots": true,
    "autoplay": true,
    "navText": ["<i class=\"fas fa-chevron-left\"></i>","<i class=\"fas fa-chevron-right\"></i>"]
      }'
        >
          <div className="main-slider-one__item">
            <div
              className="main-slider-one__image-left"
              style={{
                backgroundImage:
                  "url(assets/images/main-slider/main-slider-1-1.png)"
              }}
            />
            {/* /.main-slider-one__image-left */}
            <div className="main-slider-one__image-right">
              <div className="main-slider-one__image-right__inner">
                <div
                  className="main-slider-one__image-right__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/main-slider/main-slider-1-2.jpg)"
                  }}
                />
              </div>
              {/* /.main-slider-one__image-right__inner */}
              <div className="main-slider-one__experience">
                <h4 className="main-slider-one__experience__title">
                  29+ <span>Experience</span>
                </h4>
                {/* /.main-slider-one__experience__title */}
              </div>
              {/* /.main-slider-one__experience */}
              <img
                src="assets/images/main-slider/main-slider-1-4.jpg"
                alt="slider image"
                className="main-slider-one__image-right__image"
              />
            </div>
            {/* /.main-slider-one__image-right */}
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-9">
                  <div className="main-slider-one__content">
                    <div className="main-slider-one__top">
                      <div className="main-slider-one__top__inner">
                        <div className="main-slider-one__top__box">
                          <div className="main-slider-one__top__box__inner" />
                        </div>
                        {/* /.main-slider-one__top__box */}
                        <h6 className="main-slider-one__tagline">
                          Welcome To Insuba!
                        </h6>
                      </div>
                      {/* /.main-slider-one__top__inner */}
                    </div>
                    {/* /.main-slider-one__top */}
                    <h2 className="main-slider-one__title">
                      <span className="main-slider-one__title__inner">
                        We Are Insurance Life <br />
                        Solution{" "}
                        <span className="main-slider-one__title__text">
                          Company.
                        </span>
                      </span>
                    </h2>
                    {/* /.title */}
                    <div className="main-slider-one__description">
                      <p className="main-slider-one__text">
                        Insurance of the socie where we operate. A success website
                        obusly needs great design to be one of the top 26+IT
                        companies Benefit.
                      </p>
                      {/* /.text */}
                    </div>
                    {/* /.description */}
                    <div className="main-slider-one__button">
                      <div className="main-slider-one__button__inner">
                        <a
                          href="contact.html"
                          className="main-slider-one__btn-1 insuba-btn"
                        >
                          <span>Contact Us</span>
                          <span className="insuba-btn__icon-box">
                            <span className="insuba-btn__icon">
                              <i className="fas fa-arrow-right" />
                            </span>
                          </span>
                        </a>
                        {/* /.insuba-btn */}
                      </div>
                      {/* /.main-slider-one__button__inner */}
                      <div className="main-slider-one__button__inner">
                        <a
                          href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                          className="main-slider-one__btn-2 video-btn video-popup"
                        >
                          <i className="icon-play" />
                          <span className="video-btn__ripple" />
                        </a>
                        {/* /.video-btn */}
                      </div>
                      {/* /.main-slider-one__button__inner */}
                    </div>
                    {/* /.button */}
                    <div className="main-slider-one__content__shape-box" />
                    {/* /.main-slider-one__content__shape-box */}
                    <img
                      src="assets/images/shapes/main-slider-shape-1-1.png"
                      alt="shape"
                      className="main-slider-one__content__shape-one slider-image"
                    />
                  </div>
                  {/* /.main-slider-one__content */}
                </div>
                {/* /.col-xl-6 col-lg-9 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
            <div className="main-slider-one__shape-box" />
            {/* /.main-slider-one__shape-box */}
            <img
              src="assets/images/shapes/main-slider-shape-1-2.png"
              alt="shape"
              className="main-slider-one__shape-one slider-image"
            />
          </div>
          {/* /.main-slider-one__item */}
          <div className="main-slider-one__item">
            <div
              className="main-slider-one__image-left"
              style={{
                backgroundImage:
                  "url(assets/images/main-slider/main-slider-1-1.png)"
              }}
            />
            {/* /.main-slider-one__image-left */}
            <div className="main-slider-one__image-right">
              <div className="main-slider-one__image-right__inner">
                <div
                  className="main-slider-one__image-right__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/main-slider/main-slider-1-3.jpg)"
                  }}
                />
              </div>
              {/* /.main-slider-one__image-right__inner */}
              <div className="main-slider-one__experience">
                <h4 className="main-slider-one__experience__title">
                  29+ <span>Experience</span>
                </h4>
                {/* /.main-slider-one__experience__title */}
              </div>
              {/* /.main-slider-one__experience */}
              <img
                src="assets/images/main-slider/main-slider-1-5.jpg"
                alt="slider image"
                className="main-slider-one__image-right__image"
              />
            </div>
            {/* /.main-slider-one__image-right */}
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-9">
                  <div className="main-slider-one__content">
                    <div className="main-slider-one__top">
                      <div className="main-slider-one__top__inner">
                        <div className="main-slider-one__top__box">
                          <div className="main-slider-one__top__box__inner" />
                        </div>
                        {/* /.main-slider-one__top__box */}
                        <h6 className="main-slider-one__tagline">
                          Welcome To Insuba!
                        </h6>
                      </div>
                      {/* /.main-slider-one__top__inner */}
                    </div>
                    {/* /.main-slider-one__top */}
                    <h2 className="main-slider-one__title">
                      <span className="main-slider-one__title__inner">
                        Our Reliable Insurance <br />
                        For Purpose{" "}
                        <span className="main-slider-one__title__text">
                          Company.
                        </span>
                      </span>
                    </h2>
                    {/* /.title */}
                    <div className="main-slider-one__description">
                      <p className="main-slider-one__text">
                        Thought shower drink the Kool-aid we don't need to boil
                        the ocean here, yet push back, or we need distributors to
                        evangelize the new.
                      </p>
                      {/* /.text */}
                    </div>
                    {/* /.description */}
                    <div className="main-slider-one__button">
                      <div className="main-slider-one__button__inner">
                        <a
                          href="contact.html"
                          className="main-slider-one__btn-1 insuba-btn"
                        >
                          <span>Contact Us</span>
                          <span className="insuba-btn__icon-box">
                            <span className="insuba-btn__icon">
                              <i className="fas fa-arrow-right" />
                            </span>
                          </span>
                        </a>
                        {/* /.insuba-btn */}
                      </div>
                      {/* /.main-slider-one__button__inner */}
                      <div className="main-slider-one__button__inner">
                        <a
                          href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                          className="main-slider-one__btn-2 video-btn video-popup"
                        >
                          <i className="icon-play" />
                          <span className="video-btn__ripple" />
                        </a>
                        {/* /.video-btn */}
                      </div>
                      {/* /.main-slider-one__button__inner */}
                    </div>
                    {/* /.button */}
                    <div className="main-slider-one__content__shape-box" />
                    {/* /.main-slider-one__content__shape-box */}
                    <img
                      src="assets/images/shapes/main-slider-shape-1-1.png"
                      alt="shape"
                      className="main-slider-one__content__shape-one slider-image"
                    />
                  </div>
                  {/* /.main-slider-one__content */}
                </div>
                {/* /.col-xl-6 col-lg-9 */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
            <div className="main-slider-one__shape-box" />
            {/* /.main-slider-one__shape-box */}
            <img
              src="assets/images/shapes/main-slider-shape-1-2.png"
              alt="shape"
              className="main-slider-one__shape-one slider-image"
            />
          </div>
          {/* /.main-slider-one__item */}
        </div>
        {/* /.main-slider-one__carousel */}
      </section>
      {/* /.main-slider-one */}
      <section className="company-info">
        <div className="container">
          <div
            className="company-info__inner wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="row gutter-y-30 align-items-center">
              <div className="col-lg-3 col-sm-5">
                <div className="company-info__image">
                  <img
                    src="assets/images/resources/company-info-1-1.jpg"
                    alt="company-info"
                  />
                </div>
                {/* /.company-info__image */}
              </div>
              {/* /.col-lg-3 col-sm-5 */}
              <div className="col-lg-4 col-sm-7">
                <div className="company-info__clients">
                  <div className="company-info__clients__image">
                    <img
                      src="assets/images/resources/compnay-info-client-1-1.png"
                      alt="client image"
                    />
                    <img
                      src="assets/images/resources/compnay-info-client-1-2.png"
                      alt="client image"
                    />
                    <img
                      src="assets/images/resources/compnay-info-client-1-3.png"
                      alt="client image"
                    />
                  </div>
                  {/* /.company-info__clients__image */}
                  <a
                    href="testimonials.html"
                    className="company-info__clients__link"
                  >
                    More
                    <span className="company-info__clients__link__icon">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                  {/* /.company-info__clients__link */}
                </div>
                {/* /.company-info__clients */}
              </div>
              {/* /.col-lg-4 col-sm-7 */}
              <div className="col-lg-5">
                <div className="company-info__customers">
                  29+0000 customers with our services{" "}
                  <a href="services.html">( Let's get started )</a>
                </div>
                {/* /.company-info__customers */}
              </div>
              {/* /.col-lg-5 */}
            </div>
            {/* /.row gutter-y-30 */}
          </div>
          {/* /.company-info__inner */}
        </div>
        {/* /.container */}
      </section>
      {/* /.company-info */}
      <section className="about-one section-space" id="about">
        <div className="container">
          <div className="row gutter-y-50 align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="about-one__left">
                <div className="funfact funfact--home-1">
                  <div className="funfact__inner">
                    <div className="funfact__row row">
                      <div
                        className="col-lg-12 col-md-4 col-sm-6 wow fadeInUp"
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
                        </div>
                        {/* /.funfact__item */}
                      </div>
                      {/* /.col-lg-12 col-md-4 col-sm-6 */}
                      <div
                        className="col-lg-12 col-md-4 col-sm-6 wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="100ms"
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
                        </div>
                        {/* /.funfact__item */}
                      </div>
                      {/* /.col-lg-12 col-md-4 col-sm-6 */}
                      <div
                        className="col-lg-12 col-md-4 col-sm-6 wow fadeInUp"
                        data-wow-duration="1500ms"
                        data-wow-delay="200ms"
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
                        </div>
                        {/* /.funfact__item */}
                      </div>
                      {/* /.col-lg-12 col-md-4 col-sm-6 */}
                    </div>
                    {/* /.funfact__row row gutter-y-40 */}
                  </div>
                  {/* /.funfact__inner */}
                </div>
                {/* /.funfact */}
                <div
                  className="about-one__image wow fadeInUp"
                  data-wow-duration="1500ms"
                >
                  <img
                    src="assets/images/about/about-1-1.jpg"
                    alt="about"
                    className="about-one__image__one"
                  />
                  <img
                    src="assets/images/about/about-1-2.jpg"
                    alt="about"
                    className="about-one__image__two"
                  />
                </div>
                {/* /.about-one__image */}
              </div>
              {/* /.about-one__left */}
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
                  className="about-one__description wow fadeInUp"
                  data-wow-duration="1500ms"
                >
                  <p className="about-one__text">
                    Insurance address a range of simply application and this of
                    passages of available, but the majority have suffered exchange
                    for regular payments known as premiums, insurance company in
                    some form.
                  </p>
                </div>
                {/* /.about-one__description */}
                <div
                  className="about-one__list-box wow fadeInUp"
                  data-wow-duration="1500ms"
                >
                  <div className="row">
                    <div className="col-lg-6 col-md-4 col-sm-6">
                      <div className="about-one__list">
                        <span className="about-one__list__icon">
                          <i className="icon-checked" />
                        </span>
                        <a href="services.html" className="about-one__list__link">
                          Travel of Insurance
                        </a>
                      </div>
                      {/* /.about-one__list */}
                    </div>
                    {/* /.col-lg-6 col-md-4 col-sm-6 */}
                    <div className="col-lg-6 col-md-4 col-sm-6">
                      <div className="about-one__list">
                        <span className="about-one__list__icon">
                          <i className="icon-checked" />
                        </span>
                        <a href="services.html" className="about-one__list__link">
                          Get a free quote
                        </a>
                      </div>
                      {/* /.about-one__list */}
                    </div>
                    {/* /.col-lg-6 col-md-4 col-sm-6 */}
                    <div className="col-lg-6 col-md-4 col-sm-6">
                      <div className="about-one__list">
                        <span className="about-one__list__icon">
                          <i className="icon-checked" />
                        </span>
                        <a href="services.html" className="about-one__list__link">
                          Insurance Services
                        </a>
                      </div>
                      {/* /.about-one__list */}
                    </div>
                    {/* /.col-lg-6 col-md-4 col-sm-6 */}
                    <div className="col-lg-6 col-md-4 col-sm-6">
                      <div className="about-one__list">
                        <span className="about-one__list__icon">
                          <i className="icon-checked" />
                        </span>
                        <a href="services.html" className="about-one__list__link">
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
                      <span>Our Watch</span> <span>Videos</span>
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
      <div className="client-carousel client-carousel--border-full">
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
      <section className="services-one section-space" id="services">
        <div
          className="services-one__bg"
          style={{
            backgroundImage: "url(assets/images/shapes/services-shape-1-1.png)"
          }}
        />
        {/* /.services-one__bg */}
        <div className="container">
          <div className="services-one__top">
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
                  className="services-one__description wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="100ms"
                >
                  <p className="services-one__text">
                    Insurance address a range of simply application and thisof
                    passages of available, but the majority have suffered exchange
                    regular payments known as premiums, insurance company in some
                    form.
                  </p>
                  {/* /.services-one__text */}
                </div>
                {/* /.services-one__description */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row gutter-y-30 */}
          </div>
          {/* /.services-one__top */}
          <div
            className="services-one__carousel insuba-owl__carousel insuba-owl__carousel--basic-nav owl-carousel owl-theme"
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
              <div className="service-card">
                <div
                  className="service-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/service-card-shape-1-1.png)"
                  }}
                />
                {/* /.service-card__bg */}
                <div className="service-card__shape" />
                {/* /.service-card__shape */}
                <div className="service-card__content">
                  <div className="service-card__top">
                    <div className="service-card__icon-box">
                      <span className="service-card__icon">
                        <i className="icon-car-insurance" />
                      </span>
                    </div>
                    {/* /.service-card__icon-box */}
                    <h3 className="service-card__number" />
                    {/* /.service-card__number */}
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="service-d-car-insurance.html">Car Insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">Life Insurance financial</p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-1.jpg)"
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a
                    href="service-d-car-insurance.html"
                    className="service-card__btn"
                  >
                    <span className="service-card__btn__icon">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                  {/* /.service-card__btn */}
                </div>
                {/* /.service-card__image */}
              </div>
              {/* /.service-card */}
            </div>
            {/* /.item */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="service-card">
                <div
                  className="service-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/service-card-shape-1-1.png)"
                  }}
                />
                {/* /.service-card__bg */}
                <div className="service-card__shape" />
                {/* /.service-card__shape */}
                <div className="service-card__content">
                  <div className="service-card__top">
                    <div className="service-card__icon-box">
                      <span className="service-card__icon">
                        <i className="icon-life-insurance" />
                      </span>
                    </div>
                    {/* /.service-card__icon-box */}
                    <h3 className="service-card__number" />
                    {/* /.service-card__number */}
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="service-d-life-insurance.html">life insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">Life Insurance financial</p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-2.jpg)"
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a
                    href="service-d-life-insurance.html"
                    className="service-card__btn"
                  >
                    <span className="service-card__btn__icon">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                  {/* /.service-card__btn */}
                </div>
                {/* /.service-card__image */}
              </div>
              {/* /.service-card */}
            </div>
            {/* /.item */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="service-card">
                <div
                  className="service-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/service-card-shape-1-1.png)"
                  }}
                />
                {/* /.service-card__bg */}
                <div className="service-card__shape" />
                {/* /.service-card__shape */}
                <div className="service-card__content">
                  <div className="service-card__top">
                    <div className="service-card__icon-box">
                      <span className="service-card__icon">
                        <i className="icon-insurance-agent" />
                      </span>
                    </div>
                    {/* /.service-card__icon-box */}
                    <h3 className="service-card__number" />
                    {/* /.service-card__number */}
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="service-d-business-insurance.html">
                      Business Insurance
                    </a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">Life Insurance financial</p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-3.jpg)"
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a
                    href="service-d-business-insurance.html"
                    className="service-card__btn"
                  >
                    <span className="service-card__btn__icon">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                  {/* /.service-card__btn */}
                </div>
                {/* /.service-card__image */}
              </div>
              {/* /.service-card */}
            </div>
            {/* /.item */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="service-card">
                <div
                  className="service-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/service-card-shape-1-1.png)"
                  }}
                />
                {/* /.service-card__bg */}
                <div className="service-card__shape" />
                {/* /.service-card__shape */}
                <div className="service-card__content">
                  <div className="service-card__top">
                    <div className="service-card__icon-box">
                      <span className="service-card__icon">
                        <i className="icon-protection-1" />
                      </span>
                    </div>
                    {/* /.service-card__icon-box */}
                    <h3 className="service-card__number" />
                    {/* /.service-card__number */}
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="service-d-healthy-insurance.html">
                      Healthy Insurance
                    </a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">Life Insurance financial</p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-4.jpg)"
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a
                    href="service-d-healthy-insurance.html"
                    className="service-card__btn"
                  >
                    <span className="service-card__btn__icon">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                  {/* /.service-card__btn */}
                </div>
                {/* /.service-card__image */}
              </div>
              {/* /.service-card */}
            </div>
            {/* /.item */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="service-card">
                <div
                  className="service-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/service-card-shape-1-1.png)"
                  }}
                />
                {/* /.service-card__bg */}
                <div className="service-card__shape" />
                {/* /.service-card__shape */}
                <div className="service-card__content">
                  <div className="service-card__top">
                    <div className="service-card__icon-box">
                      <span className="service-card__icon">
                        <i className="icon-home" />
                      </span>
                    </div>
                    {/* /.service-card__icon-box */}
                    <h3 className="service-card__number" />
                    {/* /.service-card__number */}
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="service-d-home-insurance.html">Home Insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">Life Insurance financial</p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-5.jpg)"
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a
                    href="service-d-home-insurance.html"
                    className="service-card__btn"
                  >
                    <span className="service-card__btn__icon">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                  {/* /.service-card__btn */}
                </div>
                {/* /.service-card__image */}
              </div>
              {/* /.service-card */}
            </div>
            {/* /.item */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="service-card">
                <div
                  className="service-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/service-card-shape-1-1.png)"
                  }}
                />
                {/* /.service-card__bg */}
                <div className="service-card__shape" />
                {/* /.service-card__shape */}
                <div className="service-card__content">
                  <div className="service-card__top">
                    <div className="service-card__icon-box">
                      <span className="service-card__icon">
                        <i className="icon-umbrella" />
                      </span>
                    </div>
                    {/* /.service-card__icon-box */}
                    <h3 className="service-card__number" />
                    {/* /.service-card__number */}
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="service-d-finance-insurance.html">
                      Finance Insurance
                    </a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">Life Insurance financial</p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-6.jpg)"
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a
                    href="service-d-finance-insurance.html"
                    className="service-card__btn"
                  >
                    <span className="service-card__btn__icon">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                  {/* /.service-card__btn */}
                </div>
                {/* /.service-card__image */}
              </div>
              {/* /.service-card */}
            </div>
            {/* /.item */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="service-card">
                <div
                  className="service-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/service-card-shape-1-1.png)"
                  }}
                />
                {/* /.service-card__bg */}
                <div className="service-card__shape" />
                {/* /.service-card__shape */}
                <div className="service-card__content">
                  <div className="service-card__top">
                    <div className="service-card__icon-box">
                      <span className="service-card__icon">
                        <i className="icon-car-insurance" />
                      </span>
                    </div>
                    {/* /.service-card__icon-box */}
                    <h3 className="service-card__number" />
                    {/* /.service-card__number */}
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="service-d-car-insurance.html">Car Insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">Life Insurance financial</p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-1.jpg)"
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a
                    href="service-d-car-insurance.html"
                    className="service-card__btn"
                  >
                    <span className="service-card__btn__icon">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                  {/* /.service-card__btn */}
                </div>
                {/* /.service-card__image */}
              </div>
              {/* /.service-card */}
            </div>
            {/* /.item */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="service-card">
                <div
                  className="service-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/service-card-shape-1-1.png)"
                  }}
                />
                {/* /.service-card__bg */}
                <div className="service-card__shape" />
                {/* /.service-card__shape */}
                <div className="service-card__content">
                  <div className="service-card__top">
                    <div className="service-card__icon-box">
                      <span className="service-card__icon">
                        <i className="icon-life-insurance" />
                      </span>
                    </div>
                    {/* /.service-card__icon-box */}
                    <h3 className="service-card__number" />
                    {/* /.service-card__number */}
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="service-d-life-insurance.html">life insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">Life Insurance financial</p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-2.jpg)"
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a
                    href="service-d-life-insurance.html"
                    className="service-card__btn"
                  >
                    <span className="service-card__btn__icon">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                  {/* /.service-card__btn */}
                </div>
                {/* /.service-card__image */}
              </div>
              {/* /.service-card */}
            </div>
            {/* /.item */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="service-card">
                <div
                  className="service-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/service-card-shape-1-1.png)"
                  }}
                />
                {/* /.service-card__bg */}
                <div className="service-card__shape" />
                {/* /.service-card__shape */}
                <div className="service-card__content">
                  <div className="service-card__top">
                    <div className="service-card__icon-box">
                      <span className="service-card__icon">
                        <i className="icon-insurance-agent" />
                      </span>
                    </div>
                    {/* /.service-card__icon-box */}
                    <h3 className="service-card__number" />
                    {/* /.service-card__number */}
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="service-d-business-insurance.html">
                      Business Insurance
                    </a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">Life Insurance financial</p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-3.jpg)"
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a
                    href="service-d-business-insurance.html"
                    className="service-card__btn"
                  >
                    <span className="service-card__btn__icon">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                  {/* /.service-card__btn */}
                </div>
                {/* /.service-card__image */}
              </div>
              {/* /.service-card */}
            </div>
            {/* /.item */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="service-card">
                <div
                  className="service-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/service-card-shape-1-1.png)"
                  }}
                />
                {/* /.service-card__bg */}
                <div className="service-card__shape" />
                {/* /.service-card__shape */}
                <div className="service-card__content">
                  <div className="service-card__top">
                    <div className="service-card__icon-box">
                      <span className="service-card__icon">
                        <i className="icon-protection-1" />
                      </span>
                    </div>
                    {/* /.service-card__icon-box */}
                    <h3 className="service-card__number" />
                    {/* /.service-card__number */}
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="service-d-healthy-insurance.html">
                      Healthy Insurance
                    </a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">Life Insurance financial</p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-4.jpg)"
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a
                    href="service-d-healthy-insurance.html"
                    className="service-card__btn"
                  >
                    <span className="service-card__btn__icon">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                  {/* /.service-card__btn */}
                </div>
                {/* /.service-card__image */}
              </div>
              {/* /.service-card */}
            </div>
            {/* /.item */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="service-card">
                <div
                  className="service-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/service-card-shape-1-1.png)"
                  }}
                />
                {/* /.service-card__bg */}
                <div className="service-card__shape" />
                {/* /.service-card__shape */}
                <div className="service-card__content">
                  <div className="service-card__top">
                    <div className="service-card__icon-box">
                      <span className="service-card__icon">
                        <i className="icon-home" />
                      </span>
                    </div>
                    {/* /.service-card__icon-box */}
                    <h3 className="service-card__number" />
                    {/* /.service-card__number */}
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="service-d-home-insurance.html">Home Insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">Life Insurance financial</p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-5.jpg)"
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a
                    href="service-d-home-insurance.html"
                    className="service-card__btn"
                  >
                    <span className="service-card__btn__icon">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                  {/* /.service-card__btn */}
                </div>
                {/* /.service-card__image */}
              </div>
              {/* /.service-card */}
            </div>
            {/* /.item */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="service-card">
                <div
                  className="service-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/shapes/service-card-shape-1-1.png)"
                  }}
                />
                {/* /.service-card__bg */}
                <div className="service-card__shape" />
                {/* /.service-card__shape */}
                <div className="service-card__content">
                  <div className="service-card__top">
                    <div className="service-card__icon-box">
                      <span className="service-card__icon">
                        <i className="icon-umbrella" />
                      </span>
                    </div>
                    {/* /.service-card__icon-box */}
                    <h3 className="service-card__number" />
                    {/* /.service-card__number */}
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="service-d-finance-insurance.html">
                      Finance Insurance
                    </a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">Life Insurance financial</p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-6.jpg)"
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a
                    href="service-d-finance-insurance.html"
                    className="service-card__btn"
                  >
                    <span className="service-card__btn__icon">
                      <i className="fas fa-arrow-right" />
                    </span>
                  </a>
                  {/* /.service-card__btn */}
                </div>
                {/* /.service-card__image */}
              </div>
              {/* /.service-card */}
            </div>
            {/* /.item */}
          </div>
          {/* /.services-one__carousel */}
        </div>
        {/* /.container */}
      </section>
      {/* /.services-one */}
      <section className="excellent-service">
        <div className="container">
          <div className="excellent-service__inner">
            <div className="excellent-service__tab">
              <div className="tabs-box">
                <ul className="tab-buttons">
                  <li
                    data-tab="#excellent-service001"
                    className="tab-btn insuba-btn active-btn"
                  >
                    our mission
                  </li>
                  <li
                    data-tab="#excellent-service002"
                    className="tab-btn insuba-btn"
                  >
                    our vision
                  </li>
                  <li
                    data-tab="#excellent-service003"
                    className="tab-btn insuba-btn"
                  >
                    our support
                  </li>
                </ul>
                {/* /.tab-buttons */}
                <div className="tabs-content">
                  <div
                    className="tab active-tab fadeInUp animated"
                    data-wow-delay="200ms"
                    id="excellent-service001"
                    style={{ display: "block" }}
                  >
                    <div className="excellent-service__row row align-items-center">
                      <div className="excellent-service__image-col">
                        <div className="excellent-service__image">
                          <img
                            src="assets/images/shapes/excellent-service-1-1.png"
                            alt="excellent-service"
                          />
                        </div>
                        {/* /.excellent-service__image */}
                      </div>
                      {/* /.excellent-service__image-col */}
                      <div className="excellent-service__content-col">
                        <div className="excellent-service__content">
                          <h3 className="excellent-service__title">
                            Excellent service :
                          </h3>
                          {/* /.excellent-service__title */}
                          <ul className="excellent-service__list list-unstyled">
                            <li>
                              <span className="excellent-service__list__icon">
                                <i className="far fa-check-circle" />
                              </span>
                              There are many variations of pass available.
                            </li>
                            <li>
                              <span className="excellent-service__list__icon">
                                <i className="far fa-check-circle" />
                              </span>
                              Standard dummy this insurance service.
                            </li>
                            <li>
                              <span className="excellent-service__list__icon">
                                <i className="far fa-check-circle" />
                              </span>
                              No fees, No credit checks this support.
                            </li>
                          </ul>
                          {/* /.excellent-service__list list-unstyled */}
                        </div>
                        {/* /.excellent-service__content */}
                      </div>
                      {/* /.excellent-service__content-col */}
                    </div>
                    {/* /.excellent-service__row */}
                  </div>
                  {/* /.excellent-service001-tab */}
                  <div
                    className="tab fadeInUp animated"
                    data-wow-delay="200ms"
                    id="excellent-service002"
                    style={{ display: "none" }}
                  >
                    <div className="excellent-service__row row align-items-center">
                      <div className="excellent-service__image-col">
                        <div className="excellent-service__image">
                          <img
                            src="assets/images/shapes/excellent-service-1-1.png"
                            alt="excellent-service"
                          />
                        </div>
                        {/* /.excellent-service__image */}
                      </div>
                      {/* /.excellent-service__image-col */}
                      <div className="excellent-service__content-col">
                        <div className="excellent-service__content">
                          <h3 className="excellent-service__title">
                            Excellent service :
                          </h3>
                          {/* /.excellent-service__title */}
                          <ul className="excellent-service__list list-unstyled">
                            <li>
                              <span className="excellent-service__list__icon">
                                <i className="far fa-check-circle" />
                              </span>
                              Table the discussion turn the ship, this medium.
                            </li>
                            <li>
                              <span className="excellent-service__list__icon">
                                <i className="far fa-check-circle" />
                              </span>
                              We need to get the vernacular right.
                            </li>
                            <li>
                              <span className="excellent-service__list__icon">
                                <i className="far fa-check-circle" />
                              </span>
                              Gain traction we need to make the new version.
                            </li>
                          </ul>
                          {/* /.excellent-service__list list-unstyled */}
                        </div>
                        {/* /.excellent-service__content */}
                      </div>
                      {/* /.excellent-service__content-col */}
                    </div>
                    {/* /.excellent-service__row */}
                  </div>
                  {/* /.excellent-service002-tab */}
                  <div
                    className="tab fadeInUp animated"
                    data-wow-delay="200ms"
                    id="excellent-service003"
                    style={{ display: "none" }}
                  >
                    <div className="excellent-service__row row align-items-center">
                      <div className="excellent-service__image-col">
                        <div className="excellent-service__image">
                          <img
                            src="assets/images/shapes/excellent-service-1-1.png"
                            alt="excellent-service"
                          />
                        </div>
                        {/* /.excellent-service__image */}
                      </div>
                      {/* /.excellent-service__image-col */}
                      <div className="excellent-service__content-col">
                        <div className="excellent-service__content">
                          <h3 className="excellent-service__title">
                            Excellent service :
                          </h3>
                          {/* /.excellent-service__title */}
                          <ul className="excellent-service__list list-unstyled">
                            <li>
                              <span className="excellent-service__list__icon">
                                <i className="far fa-check-circle" />
                              </span>
                              Cross functional teams enable out of the box.
                            </li>
                            <li>
                              <span className="excellent-service__list__icon">
                                <i className="far fa-check-circle" />
                              </span>
                              We need to build it so that it scales ramp up.
                            </li>
                            <li>
                              <span className="excellent-service__list__icon">
                                <i className="far fa-check-circle" />
                              </span>
                              Streamline what's the status on the deliverables.
                            </li>
                          </ul>
                          {/* /.excellent-service__list list-unstyled */}
                        </div>
                        {/* /.excellent-service__content */}
                      </div>
                      {/* /.excellent-service__content-col */}
                    </div>
                    {/* /.excellent-service__row */}
                  </div>
                  {/* /.excellent-service003-tab */}
                </div>
                {/* /.tab-content */}
              </div>
              {/* /.tabs-box */}
            </div>
            {/* /.excellent-service__tab */}
            <img
              src="assets/images/shapes/excellent-service-shape-1-1.png"
              alt="shape"
              className="excellent-service__shape"
            />
          </div>
          {/* /.excellent-service__inner */}
        </div>
        {/* /.container */}
      </section>
      {/* /.excellent-service */}
      <section className="consultations-one section-space">
        <div className="container">
          <div className="row gutter-y-50 align-items-center">
            <div className="col-xl-6">
              <div className="consultations-one__content">
                <div
                  className="sec-title @@extrClassName wow fadeInUp"
                  data-wow-duration="1500ms"
                >
                  <div className="sec-title__top">
                    <div className="sec-title__box">
                      <div className="sec-title__box__inner" />
                    </div>
                    {/* /.sec-title__box */}
                    <h6 className="sec-title__tagline">Get Consultations</h6>
                    {/* /.sec-title__tagline */}
                  </div>
                  {/* /.sec-title__top */}
                  <h3 className="sec-title__title">
                    Our Reliable This Insurance <br /> For Purpose Company.
                  </h3>
                  {/* /.sec-title__title */}
                </div>
                {/* /.sec-title */}
                <div
                  className="consultations-one__text-box wow fadeInUp"
                  data-wow-duration="1500ms"
                >
                  <p className="consultations-one__text">
                    Quick sync unlock meaningful moments of relaxation, but high
                    turnaround rate, so nail it down, yet onward and upward,
                    productize the deliverables and focus on the bottom line
                    Slow-walk our commitment shoot me an email.
                  </p>
                  {/* /.consultations-one__text */}
                </div>
                {/* /.consultations-one__text-box */}
                <div className="consultations-one__inner">
                  <div
                    className="consultations-one__item wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="consultations-one__item__icon-box">
                      <span className="consultations-one__item__icon">
                        <i className="icon-family" />
                      </span>
                      <span className="consultations-one__item__number" />
                    </div>
                    {/* /.consultations-one__item__icon-box */}
                    <div className="consultations-one__item__content">
                      <h4 className="consultations-one__item__title">
                        Complete Aplication
                      </h4>
                      {/* /.consultations-one__item__title */}
                    </div>
                    {/* /.consultations-one__item__content */}
                  </div>
                  {/* /.consultations-one__item */}
                  <div
                    className="consultations-one__item wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="consultations-one__item__icon-box">
                      <span className="consultations-one__item__icon">
                        <i className="icon-medical-protection" />
                      </span>
                      <span className="consultations-one__item__number" />
                    </div>
                    {/* /.consultations-one__item__icon-box */}
                    <div className="consultations-one__item__content">
                      <h4 className="consultations-one__item__title">
                        Proficient Insurance
                      </h4>
                      {/* /.consultations-one__item__title */}
                    </div>
                    {/* /.consultations-one__item__content */}
                  </div>
                  {/* /.consultations-one__item */}
                  <div
                    className="consultations-one__inner__image wow fadeIn"
                    data-wow-duration="1500ms"
                  >
                    <img
                      src="assets/images/consultations/consultations-1-3.jpg"
                      alt="consultations"
                    />
                  </div>
                  {/* /.consultations-one__inner__image */}
                </div>
                {/* /.consultations-one__inner */}
                <div
                  className="consultations-one__button wow fadeInUp"
                  data-wow-duration="1500ms"
                >
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
                {/* /.consultations-one__button */}
              </div>
              {/* /.consultations-one__content */}
            </div>
            {/* /.col-xl-6 */}
            <div
              className="col-xl-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="consultations-one__image">
                <div className="consultations-one__image__inner">
                  <img
                    src="assets/images/consultations/consultations-1-1.jpg"
                    alt="consultations"
                    className="consultations-one__image__one"
                  />
                  <img
                    src="assets/images/shapes/consultations-shape-1-1.png"
                    alt="shape"
                    className="consultations-one__image__shape-one"
                  />
                  <img
                    src="assets/images/shapes/consultations-shape-1-2.png"
                    alt="shape"
                    className="consultations-one__image__shape-two"
                  />
                </div>
                {/* /.consultations-one__image__inner */}
                <img
                  src="assets/images/consultations/consultations-1-2.jpg"
                  alt="consultations"
                  className="consultations-one__image__two"
                />
                <img
                  src="assets/images/shapes/consultations-shape-1-3.png"
                  alt="shape"
                  className="consultations-one__image__shape-three"
                />
              </div>
              {/* /.consultations-one__image */}
            </div>
            {/* /.col-xl-6 */}
          </div>
          {/* /.row gutter-y-50 */}
        </div>
        {/* /.container */}
      </section>
      {/* /.consultations-one section-space */}
      <section className="contact-one contact" id="contact">
        <div className="container">
          <div className="contact-one__inner">
            <div className="contact-one__wrapper">
              <div className="contact-one__wrapper__shape">
                <img
                  src="assets/images/shapes/contact-shape-1-1.png"
                  alt="shape"
                  className="contact-one__shape-one"
                />
                <img
                  src="assets/images/shapes/contact-shape-1-2.png"
                  alt="shape"
                  className="contact-one__shape-two"
                />
              </div>
              {/* /.contact-one__wrapper__shape */}
              <div className="row gutter-y-50">
                <div className="contact-one__col-image">
                  <div
                    className="contact-one__video wow fadeInUp"
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
                    <h4 className="contact-one__video__title">
                      Watch <br /> Videos
                    </h4>
                    {/* /.contact-one__video__title */}
                  </div>
                  {/* /.contact-one__video */}
                  <div
                    className="contact-one__image wow fadeInLeft"
                    data-wow-duration="1500ms"
                  >
                    <img
                      src="assets/images/contact/contact-1-1.png"
                      alt="contact"
                      className="contact-one__image__one"
                    />
                  </div>
                  {/* /.contact-one__image */}
                  <img
                    src="assets/images/shapes/contact-umbrella-2.png"
                    alt="contact"
                    className="contact-one__image__two"
                  />
                </div>
                {/* /.contact-one__col-image */}
                <div className="contact-one__col-form">
                  <div className="contact-one__form">
                    <h3 className="contact-one__title">
                      Get The Free Ready Begin <br /> your Savings Money
                    </h3>
                    {/* /.contact-one__title */}
                    <form
                      className="contact__form contact-form-validated"
                      action="https://bracketweb.com/insuba-html/inc/sendemail.php"
                    >
                      <div className="contact__form__group">
                        <div className="contact__form__control contact__form__control--full">
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name *"
                          />
                        </div>
                        {/* /.contact__form__control contact__form__control--full */}
                        <div className="contact__form__control contact__form__control--full">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your Email *"
                          />
                        </div>
                        {/* /.contact__form__control contact__form__control--full */}
                        <div className="contact__form__control contact__form__control--full">
                          <select
                            className="selectpicker"
                            aria-label="Default select example"
                          >
                            <option selected="">Insurance Type *</option>
                            <option value={1}>Car Insurance</option>
                            <option value={2}>life insurance</option>
                            <option value={3}>Business Insurance</option>
                            <option value={4}>Healthy Insurance</option>
                            <option value={5}>Home Insurance</option>
                            <option value={6}>Finance Insurance</option>
                          </select>
                        </div>
                        {/* /.contact__form__control */}
                        <div className="contact__form__control contact__form__control--full">
                          <div className="contact__form__insurance-progress">
                            <div className="contact__form__insurance-progress-single">
                              <h4 className="contact__form__insurance-progress-title">
                                Limits of Balance:
                              </h4>
                              <div className="contact__form__insurance-progress-range">
                                <input
                                  type="text"
                                  className="balance-range-slider"
                                  data-hide-min-max="true"
                                  data-step={100}
                                  data-from={70000}
                                  data-min={0}
                                  data-max={90000}
                                  defaultValue=""
                                />
                                <div className="contact__form__insurance-balance-box">
                                  <p className="contact__form__insurance-balance">
                                    $<span />
                                  </p>
                                </div>
                                <input
                                  type="hidden"
                                  className="contact__form__insurance-balance__input"
                                />
                              </div>
                              {/* /.contact__form__insurance-progress-range */}
                            </div>
                          </div>
                          {/* /.contact__form__insurance-progress */}
                        </div>
                        {/* /.contact__form__control */}
                        <div className="contact__form__control contact__form__control--full">
                          <button
                            type="submit"
                            className="insuba-btn insuba-btn--white"
                          >
                            <span>Get a Quote</span>
                            <span className="insuba-btn__icon-box">
                              <span className="insuba-btn__icon">
                                <i className="fas fa-arrow-right" />
                              </span>
                            </span>
                          </button>
                          {/* /.insuba-btn */}
                        </div>
                        {/* /.contact__form__control */}
                      </div>
                      {/* /.contact__form__group */}
                    </form>
                    {/* /.contact__form */}
                  </div>
                  {/* /.contact-one__form */}
                </div>
                {/* /.contact-one__col-form */}
              </div>
              {/* /.row gutter-y-50 */}
            </div>
            {/* /.contact-one__wrapper */}
          </div>
          {/* /.contact-one__inner */}
        </div>
        {/* /.container */}
      </section>
      {/* /.contact-one contact */}
      <section className="portfolio-one" id="portfolio">
        <img
          src="assets/images/shapes/portfolio-shape-1-1.png"
          alt="shape"
          className="portfolio-one__shape-one"
        />
        <img
          src="assets/images/shapes/portfolio-shape-1-2.png"
          alt="shape"
          className="portfolio-one__shape-two"
        />
        <img
          src="assets/images/shapes/portfolio-shape-1-3.png"
          alt="shape"
          className="portfolio-one__shape-three"
        />
        <div className="container">
          <div className="portfolio-one__top">
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
                  className="portfolio-one__description wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay="100ms"
                >
                  <p className="portfolio-one__text">
                    In an ideal world disband the squad but rehydrate as needed,
                    yet loop back define the underlying principles that drive
                    decisions and strategy for your design language. Work flows
                    products need full resourcing and support.
                  </p>
                  {/* /.portfolio-one__text */}
                </div>
                {/* /.portfolio-one__description */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row gutter-y-30 */}
          </div>
          {/* /.portfolio-one__top */}
        </div>
        {/* /.container */}
        <div className="container-fluid">
          <div
            className="portfolio-one__carousel insuba-owl__carousel insuba-owl__carousel--basic-nav owl-carousel owl-theme"
            data-owl-options='{
        "items": 1,
        "margin": 10,
        "loop": false,
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
                "margin": 0
            },
            "992": {
                "items": 3,
                "margin": 0
            },
            "1200": {
                "items": 3,
                "margin": 0
            },
            "1400": {
                "items": 4,
                "margin": 0
            },
            "1600": {
                "items": 4,
                "margin": 0
            },
            "1800": {
                "items": 5,
                "margin": 0
            }
        }
    }'
          >
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="00ms"
            >
              <div className="portfolio-card">
                <div
                  className="portfolio-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/portfolio/portfolio-1-1.jpg)"
                  }}
                />
                {/* /.portfolio-card__bg */}
                <div className="portfolio-card__content">
                  <div className="portfolio-card__content__top">
                    <h3 className="portfolio-card__serial-number" />
                    {/* /.portfolio-card__serial-number */}
                    <span className="portfolio-card__icon">
                      <i className="icon-life-insurance" />
                      <img
                        src="assets/images/shapes/portfolio-icon-shape-1-1.png"
                        alt="shape"
                        className="portfolio-card__icon__shape"
                      />
                    </span>
                    {/* /.portfolio-card__icon */}
                  </div>
                  {/* /.portfolio-card__content__top */}
                  <div className="portfolio-card__content__inner">
                    <h3 className="portfolio-card__title">
                      <a href="portfolio-details.html">Life Insurance</a>
                    </h3>
                    {/* /.portfolio-card__title */}
                    <p className="portfolio-card__text">
                      Life insurance projects{" "}
                    </p>
                    {/* /.portfolio-card__text */}
                    <a
                      href="portfolio-details.html"
                      className="portfolio-card__btn"
                    >
                      <span className="portfolio-card__btn__icon">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </a>
                    {/* /.portfolio-card__btn */}
                  </div>
                  {/* /.portfolio-card__content__inner */}
                </div>
                {/* /.portfolio-card__content */}
              </div>
              {/* /.portfolio-card */}
            </div>
            {/* /.item */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="portfolio-card">
                <div
                  className="portfolio-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/portfolio/portfolio-1-2.jpg)"
                  }}
                />
                {/* /.portfolio-card__bg */}
                <div className="portfolio-card__content">
                  <div className="portfolio-card__content__top">
                    <h3 className="portfolio-card__serial-number" />
                    {/* /.portfolio-card__serial-number */}
                    <span className="portfolio-card__icon">
                      <i className="icon-protection" />
                      <img
                        src="assets/images/shapes/portfolio-icon-shape-1-1.png"
                        alt="shape"
                        className="portfolio-card__icon__shape"
                      />
                    </span>
                    {/* /.portfolio-card__icon */}
                  </div>
                  {/* /.portfolio-card__content__top */}
                  <div className="portfolio-card__content__inner">
                    <h3 className="portfolio-card__title">
                      <a href="portfolio-details.html">Healthy Insurance</a>
                    </h3>
                    {/* /.portfolio-card__title */}
                    <p className="portfolio-card__text">
                      Healthy insurance projects{" "}
                    </p>
                    {/* /.portfolio-card__text */}
                    <a
                      href="portfolio-details.html"
                      className="portfolio-card__btn"
                    >
                      <span className="portfolio-card__btn__icon">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </a>
                    {/* /.portfolio-card__btn */}
                  </div>
                  {/* /.portfolio-card__content__inner */}
                </div>
                {/* /.portfolio-card__content */}
              </div>
              {/* /.portfolio-card */}
            </div>
            {/* /.item */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div className="portfolio-card">
                <div
                  className="portfolio-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/portfolio/portfolio-1-3.jpg)"
                  }}
                />
                {/* /.portfolio-card__bg */}
                <div className="portfolio-card__content">
                  <div className="portfolio-card__content__top">
                    <h3 className="portfolio-card__serial-number" />
                    {/* /.portfolio-card__serial-number */}
                    <span className="portfolio-card__icon">
                      <i className="icon-insurance-agent" />
                      <img
                        src="assets/images/shapes/portfolio-icon-shape-1-1.png"
                        alt="shape"
                        className="portfolio-card__icon__shape"
                      />
                    </span>
                    {/* /.portfolio-card__icon */}
                  </div>
                  {/* /.portfolio-card__content__top */}
                  <div className="portfolio-card__content__inner">
                    <h3 className="portfolio-card__title">
                      <a href="portfolio-details.html">Business Insurance</a>
                    </h3>
                    {/* /.portfolio-card__title */}
                    <p className="portfolio-card__text">
                      Business insurance projects{" "}
                    </p>
                    {/* /.portfolio-card__text */}
                    <a
                      href="portfolio-details.html"
                      className="portfolio-card__btn"
                    >
                      <span className="portfolio-card__btn__icon">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </a>
                    {/* /.portfolio-card__btn */}
                  </div>
                  {/* /.portfolio-card__content__inner */}
                </div>
                {/* /.portfolio-card__content */}
              </div>
              {/* /.portfolio-card */}
            </div>
            {/* /.item */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="portfolio-card">
                <div
                  className="portfolio-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/portfolio/portfolio-1-4.jpg)"
                  }}
                />
                {/* /.portfolio-card__bg */}
                <div className="portfolio-card__content">
                  <div className="portfolio-card__content__top">
                    <h3 className="portfolio-card__serial-number" />
                    {/* /.portfolio-card__serial-number */}
                    <span className="portfolio-card__icon">
                      <i className="icon-family" />
                      <img
                        src="assets/images/shapes/portfolio-icon-shape-1-1.png"
                        alt="shape"
                        className="portfolio-card__icon__shape"
                      />
                    </span>
                    {/* /.portfolio-card__icon */}
                  </div>
                  {/* /.portfolio-card__content__top */}
                  <div className="portfolio-card__content__inner">
                    <h3 className="portfolio-card__title">
                      <a href="portfolio-details.html">Family Insurance</a>
                    </h3>
                    {/* /.portfolio-card__title */}
                    <p className="portfolio-card__text">
                      Family insurance projects{" "}
                    </p>
                    {/* /.portfolio-card__text */}
                    <a
                      href="portfolio-details.html"
                      className="portfolio-card__btn"
                    >
                      <span className="portfolio-card__btn__icon">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </a>
                    {/* /.portfolio-card__btn */}
                  </div>
                  {/* /.portfolio-card__content__inner */}
                </div>
                {/* /.portfolio-card__content */}
              </div>
              {/* /.portfolio-card */}
            </div>
            {/* /.item */}
            <div
              className="item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div className="portfolio-card">
                <div
                  className="portfolio-card__bg"
                  style={{
                    backgroundImage:
                      "url(assets/images/portfolio/portfolio-1-5.jpg)"
                  }}
                />
                {/* /.portfolio-card__bg */}
                <div className="portfolio-card__content">
                  <div className="portfolio-card__content__top">
                    <h3 className="portfolio-card__serial-number" />
                    {/* /.portfolio-card__serial-number */}
                    <span className="portfolio-card__icon">
                      <i className="icon-car-insurance" />
                      <img
                        src="assets/images/shapes/portfolio-icon-shape-1-1.png"
                        alt="shape"
                        className="portfolio-card__icon__shape"
                      />
                    </span>
                    {/* /.portfolio-card__icon */}
                  </div>
                  {/* /.portfolio-card__content__top */}
                  <div className="portfolio-card__content__inner">
                    <h3 className="portfolio-card__title">
                      <a href="portfolio-details.html">Car Insurance</a>
                    </h3>
                    {/* /.portfolio-card__title */}
                    <p className="portfolio-card__text">
                      Car insurance projects{" "}
                    </p>
                    {/* /.portfolio-card__text */}
                    <a
                      href="portfolio-details.html"
                      className="portfolio-card__btn"
                    >
                      <span className="portfolio-card__btn__icon">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </a>
                    {/* /.portfolio-card__btn */}
                  </div>
                  {/* /.portfolio-card__content__inner */}
                </div>
                {/* /.portfolio-card__content */}
              </div>
              {/* /.portfolio-card */}
            </div>
            {/* /.item */}
          </div>
          {/* /.portfolio-one__carousel */}
        </div>
        {/* /.container-fluid */}
        <div className="portfolio-one__info-wrapper">
          <div className="container">
            <div className="row gutter-y-40">
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="00ms"
              >
                <div className="portfolio-one__info">
                  <div className="portfolio-one__info__content">
                    <h3 className="portfolio-one__info__title">
                      Need to File Claim For Difficult High
                    </h3>
                    {/* /.portfolio-one__info__title */}
                    <p className="portfolio-one__info__text">
                      Objective Resourcebased on 750+ reviews <br />
                      and 80,000 this 965+ Projects
                    </p>
                    {/* /.portfolio-one__info__text */}
                  </div>
                  {/* /.portfolio-one__info__content */}
                </div>
                {/* /.portfolio-one__info */}
              </div>
              {/* /.col-lg-6 */}
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
              >
                <div className="portfolio-one__projects">
                  <div className="portfolio-one__projects__inner">
                    <span className="portfolio-one__projects__icon">
                      <i className="icon-family" />
                    </span>
                    {/* /.portfolio-one__projects__icon */}
                    <div className="portfolio-one__projects__content">
                      <h3 className="portfolio-one__projects__title">
                        2589+ Projects off
                      </h3>
                      {/* /.portfolio-one__projects__title */}
                      <p className="portfolio-one__projects__text">
                        Completed Insurance
                      </p>
                      {/* /.portfolio-one__projects__text */}
                    </div>
                    {/* /.portfolio-one__projects__content */}
                  </div>
                  {/* /.portfolio-one__projects__inner */}
                </div>
                {/* /.portfolio-one__projects */}
              </div>
              {/* /.col-lg-6 */}
            </div>
            {/* /.row gutter-y-40 */}
          </div>
          {/* /.container */}
        </div>
        {/* /.portfolio-one__info-wrapper */}
      </section>
      {/* /.portfolio-one */}
      <section className="team-one section-space" id="team">
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
                    <img
                      src="assets/images/shapes/team-card-shape-1-1.png"
                      alt="shape"
                      className="team-card__image__shape"
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
                    <img
                      src="assets/images/shapes/team-card-shape-1-1.png"
                      alt="shape"
                      className="team-card__image__shape"
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
                    <img
                      src="assets/images/shapes/team-card-shape-1-1.png"
                      alt="shape"
                      className="team-card__image__shape"
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
                    <img
                      src="assets/images/shapes/team-card-shape-1-1.png"
                      alt="shape"
                      className="team-card__image__shape"
                    />
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
      {/* /.team-one section-space */}
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
      <section className="faq-one section-space">
        <div className="container">
          <div className="row gutter-y-60 align-items-center">
            <div className="col-lg-6">
              <div className="faq-one__content">
                <div
                  className="sec-title @@extrClassName wow fadeInUp"
                  data-wow-duration="1500ms"
                >
                  <div className="sec-title__top">
                    <div className="sec-title__box">
                      <div className="sec-title__box__inner" />
                    </div>
                    {/* /.sec-title__box */}
                    <h6 className="sec-title__tagline">Our Faq Us</h6>
                    {/* /.sec-title__tagline */}
                  </div>
                  {/* /.sec-title__top */}
                  <h3 className="sec-title__title">
                    Get This Asked Answers <br /> Common Questions
                  </h3>
                  {/* /.sec-title__title */}
                </div>
                {/* /.sec-title */}
                <div
                  className="faq-accordion insuba-accordion"
                  data-grp-name="insuba-accordion"
                >
                  <div
                    className="accordion wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="accordion-title">
                      <span className="accordion-title__icon">
                        <i className="icon-arrow-up-right" />
                      </span>
                      <h4>When With Righteous Indignation?</h4>
                    </div>
                    {/* /.accordion-title */}
                    <div className="accordion-content">
                      <div className="inner">
                        <p>
                          If you are going to use a passage of Lorem Ipsum, you
                          need to be sure there isn't anything embarrassing hidden
                          in the middle of text.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                    {/* /.accordion-content */}
                  </div>
                  {/* /.accordion-item */}
                  <div
                    className="accordion active wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="accordion-title">
                      <span className="accordion-title__icon">
                        <i className="icon-arrow-up-right" />
                      </span>
                      <h4>What Does a Financial Advisor Do?</h4>
                    </div>
                    {/* /.accordion-title */}
                    <div className="accordion-content">
                      <div className="inner">
                        <p>
                          Insurance address a range of simply application and this
                          insurance of passages of available, but the majority
                          have suffered.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                    {/* /.accordion-content */}
                  </div>
                  {/* /.accordion-item */}
                  <div
                    className="accordion wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="accordion-title">
                      <span className="accordion-title__icon">
                        <i className="icon-arrow-up-right" />
                      </span>
                      <h4>We Are Belongs to those who?</h4>
                    </div>
                    {/* /.accordion-title */}
                    <div className="accordion-content">
                      <div className="inner">
                        <p>
                          Bring to the table win-win survival strategies to ensure
                          proactive domination. At the end of the day, going
                          forward, a new normal that has evolved.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                    {/* /.accordion-content */}
                  </div>
                  {/* /.accordion-item */}
                  <div
                    className="accordion wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <div className="accordion-title">
                      <span className="accordion-title__icon">
                        <i className="icon-arrow-up-right" />
                      </span>
                      <h4>That They Cannot Foresee Stop?</h4>
                    </div>
                    {/* /.accordion-title */}
                    <div className="accordion-content">
                      <div className="inner">
                        <p>
                          Prior to joining company, she spent 20+ years at
                          Inmosys, where he held a wide range of global leadership
                          roles, from services to products.
                        </p>
                      </div>
                      {/* /.inner */}
                    </div>
                    {/* /.accordion-content */}
                  </div>
                  {/* /.accordion-item */}
                </div>
                {/* /.faq-accordion */}
              </div>
              {/* /.faq-one__content */}
            </div>
            {/* /.col-lg-6 */}
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div className="faq-one__image">
                <div className="faq-one__image__overlay" />
                {/* /.faq-one__image__overlay */}
                <div className="faq-one__image__one">
                  <img
                    src="assets/images/resources/faq-1-1.png"
                    alt="faq"
                    className="faq-one__image__one__image"
                  />
                  <img
                    src="assets/images/shapes/faq-umbrella-1-1.png"
                    alt="umbrella"
                    className="faq-one__image__umbrella"
                  />
                </div>
                {/* /.faq-one__image__one */}
                <div className="faq-one__image__two">
                  <img
                    src="assets/images/resources/faq-1-2.jpg"
                    alt="faq"
                    className="faq-one__image__two__image"
                  />
                  <img
                    src="assets/images/shapes/faq-shape-1-1.png"
                    alt="shape"
                    className="faq-one__image__shape"
                  />
                </div>
                {/* /.faq-one__image__two */}
                <h3 className="faq-one__image__title">faq's</h3>
                {/* /.faq-one__image__title */}
                <p className="faq-one__image__text"># Excellent Service</p>
                {/* /.faq-one__image__text */}
                <div className="faq-one__image__question">?</div>
                {/* /.faq-one__image__question */}
                <div className="faq-one__image__shape-box">
                  <div className="faq-one__image__shape-one" />
                  {/* /.faq-one__image__shape-one */}
                  <div className="faq-one__image__shape-two" />
                  {/* /.faq-one__image__shape-two */}
                  <div className="faq-one__image__shape-three" />
                  {/* /.faq-one__image__shape-three */}
                </div>
                {/* /.faq-one__image__shape-box */}
              </div>
              {/* /.faq-one__image */}
            </div>
            {/* /.col-lg-6 */}
          </div>
          {/* /.row gutter-y-60 */}
          <ul
            className="faq-one__common-question list-unstyled wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <li>
              <span className="faq-one__common-question__icon">
                <i className="fas fa-angle-double-right" />
              </span>
              <p>
                58+ Common Questions and How To <a href="faq.html">Answer</a>?
              </p>
            </li>
          </ul>
          {/* /.faq-one__common-question */}
        </div>
        {/* /.container */}
      </section>
      {/* /.faq-one section-space */}
      <section className="work-planning section-space">
        <div className="work-planning__container container">
          <div
            className="sec-title sec-title--center wow fadeInUp"
            data-wow-duration="1500ms"
          >
            <div className="sec-title__top">
              <div className="sec-title__box">
                <div className="sec-title__box__inner" />
              </div>
              {/* /.sec-title__box */}
              <h6 className="sec-title__tagline">How We Works</h6>
              {/* /.sec-title__tagline */}
            </div>
            {/* /.sec-title__top */}
            <h3 className="sec-title__title">This Planning Needs Your Growth</h3>
            {/* /.sec-title__title */}
          </div>
          {/* /.sec-title */}
          <div className="row gutter-y-40">
            <div className="col-lg-3 col-sm-6">
              <div className="work-planning__item work-planning__item--bottom-serial-number">
                <h2 className="work-planning__item__serial-number" />
                {/* /.work-planning__item__serial-number */}
                <div className="work-planning__item__image">
                  <div
                    className="work-planning__item__image__bg"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/work-planning-item-image-bg.png)"
                    }}
                  />
                  {/* /.work-planning__item__image__bg */}
                  <div
                    className="work-planning__item__image__bg work-planning__item__image__bg--hover"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/work-planning-item-image-bg-hover.png)"
                    }}
                  />
                  {/* /.work-planning__item__image__bg */}
                  <div className="work-planning__item__image__inner">
                    <img
                      src="assets/images/work-planning/work-planning-1-1.jpg"
                      alt="work-planning"
                    />
                  </div>
                  {/* /.work-planning__item__image__inner */}
                  <div className="work-planning__item__icon-box">
                    <span className="work-planning__item__icon">
                      <i className="icon-life-insurance" />
                    </span>
                  </div>
                  {/* /.work-planning__item__icon-box */}
                </div>
                {/* /.work-planning__item__image */}
                <div className="work-planning__item__content">
                  <h3 className="work-planning__item__title">Anytime Money</h3>
                  {/* /.work-planning__item__title */}
                  <p className="work-planning__item__text">
                    Logged in users can view fuled social of service
                  </p>
                  {/* /.work-planning__item__text */}
                </div>
                {/* /.work-planning__item__content */}
              </div>
              {/* /.work-planning__item */}
            </div>
            {/* /.col-lg-3 col-sm-6 */}
            <div className="col-lg-3 col-sm-6 col-sm-6">
              <div className="work-planning__item">
                <h2 className="work-planning__item__serial-number" />
                {/* /.work-planning__item__serial-number */}
                <div className="work-planning__item__image">
                  <div
                    className="work-planning__item__image__bg"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/work-planning-item-image-bg.png)"
                    }}
                  />
                  {/* /.work-planning__item__image__bg */}
                  <div
                    className="work-planning__item__image__bg work-planning__item__image__bg--hover"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/work-planning-item-image-bg-hover.png)"
                    }}
                  />
                  {/* /.work-planning__item__image__bg */}
                  <div className="work-planning__item__image__inner">
                    <img
                      src="assets/images/work-planning/work-planning-1-2.jpg"
                      alt="work-planning"
                    />
                  </div>
                  {/* /.work-planning__item__image__inner */}
                  <div className="work-planning__item__icon-box">
                    <span className="work-planning__item__icon">
                      <i className="icon-umbrella" />
                    </span>
                  </div>
                  {/* /.work-planning__item__icon-box */}
                </div>
                {/* /.work-planning__item__image */}
                <div className="work-planning__item__content">
                  <h3 className="work-planning__item__title">Appointment</h3>
                  {/* /.work-planning__item__title */}
                  <p className="work-planning__item__text">
                    Your work on this project has been really impactful
                  </p>
                  {/* /.work-planning__item__text */}
                </div>
                {/* /.work-planning__item__content */}
              </div>
              {/* /.work-planning__item */}
            </div>
            {/* /.col-lg-3 col-sm-6 */}
            <div className="col-lg-3 col-sm-6">
              <div className="work-planning__item work-planning__item--bottom-serial-number">
                <h2 className="work-planning__item__serial-number" />
                {/* /.work-planning__item__serial-number */}
                <div className="work-planning__item__image">
                  <div
                    className="work-planning__item__image__bg"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/work-planning-item-image-bg.png)"
                    }}
                  />
                  {/* /.work-planning__item__image__bg */}
                  <div
                    className="work-planning__item__image__bg work-planning__item__image__bg--hover"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/work-planning-item-image-bg-hover.png)"
                    }}
                  />
                  {/* /.work-planning__item__image__bg */}
                  <div className="work-planning__item__image__inner">
                    <img
                      src="assets/images/work-planning/work-planning-1-3.jpg"
                      alt="work-planning"
                    />
                  </div>
                  {/* /.work-planning__item__image__inner */}
                  <div className="work-planning__item__icon-box">
                    <span className="work-planning__item__icon">
                      <i className="icon-protection" />
                    </span>
                  </div>
                  {/* /.work-planning__item__icon-box */}
                </div>
                {/* /.work-planning__item__image */}
                <div className="work-planning__item__content">
                  <h3 className="work-planning__item__title">Client Needs</h3>
                  {/* /.work-planning__item__title */}
                  <p className="work-planning__item__text">
                    Nail it down helicopter view on your plate introduccion
                  </p>
                  {/* /.work-planning__item__text */}
                </div>
                {/* /.work-planning__item__content */}
              </div>
              {/* /.work-planning__item */}
            </div>
            {/* /.col-lg-3 col-sm-6 */}
            <div className="col-lg-3 col-sm-6">
              <div className="work-planning__item">
                <h2 className="work-planning__item__serial-number" />
                {/* /.work-planning__item__serial-number */}
                <div className="work-planning__item__image">
                  <div
                    className="work-planning__item__image__bg"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/work-planning-item-image-bg.png)"
                    }}
                  />
                  {/* /.work-planning__item__image__bg */}
                  <div
                    className="work-planning__item__image__bg work-planning__item__image__bg--hover"
                    style={{
                      backgroundImage:
                        "url(assets/images/shapes/work-planning-item-image-bg-hover.png)"
                    }}
                  />
                  {/* /.work-planning__item__image__bg */}
                  <div className="work-planning__item__image__inner">
                    <img
                      src="assets/images/work-planning/work-planning-1-4.jpg"
                      alt="work-planning"
                    />
                  </div>
                  {/* /.work-planning__item__image__inner */}
                  <div className="work-planning__item__icon-box">
                    <span className="work-planning__item__icon">
                      <i className="icon-protection-1" />
                    </span>
                  </div>
                  {/* /.work-planning__item__icon-box */}
                </div>
                {/* /.work-planning__item__image */}
                <div className="work-planning__item__content">
                  <h3 className="work-planning__item__title">Medical Health</h3>
                  {/* /.work-planning__item__title */}
                  <p className="work-planning__item__text">
                    Table the discussion scope creep. Groom the backlog
                  </p>
                  {/* /.work-planning__item__text */}
                </div>
                {/* /.work-planning__item__content */}
              </div>
              {/* /.work-planning__item */}
            </div>
            {/* /.col-lg-3 col-sm-6 */}
          </div>
          {/* /.row gutter-y-40 */}
          <img
            src="assets/images/shapes/work-planning-border-shape.png"
            alt="border shape"
            className="work-planning__border-shape"
          />
        </div>
        {/* /.work-planning__container container */}
        <div className="container">
          <div className="work-planning__appointment">
            <p className="work-planning__appointment__text">
              Secure your insurance coverage now - book your appointment today!
            </p>
            {/* /.work-planning__appointment__text */}
            <a href="contact.html" className="insuba-btn">
              <span>Book Now</span>
              <span className="insuba-btn__icon-box">
                <span className="insuba-btn__icon">
                  <i className="fas fa-arrow-right" />
                </span>
              </span>
            </a>
            {/* /.insuba-btn */}
          </div>
          {/* /.work-planning__appointment */}
        </div>
        {/* /.container */}
      </section>
      {/* /.work-planning section-space */}
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
  </div>
  
  );
}

export default home;

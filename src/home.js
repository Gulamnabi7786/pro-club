import React from 'react'

function home() {
  return (
    <>
    {/* <div className="custom-cursor__cursor" /> */}
    {/* <div className="custom-cursor__cursor-two" /> */}
    <div className="preloader">
    <div
        className="preloader__image"
        style={{ backgroundImage: "url(assets/images/loader.png)" }}
      />
    </div>
    {/* /.preloader */}
    <div className="page-wrapper">
      <div className="header">
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
                      <a href="#services">Events</a>
                    </li>
                    <li className="scrollToLink">
                      <a href="#team">Team</a>
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
                    Welcome To Programmers Club
                  </h6>
                </div>
                {/* /.main-slider-one__top__inner */}
              </div>
              {/* /.main-slider-one__top */}
              <h2 className="main-slider-one__title">
                <span className="main-slider-one__title__inner">
                  We Are Insurance Life <br />
                  Solution
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
                    </span>{" "}
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
                    <span className="video-btn__ripple" />{" "}
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
                    Welcome To Programmer club
                  </h6>
                </div>
                {/* /.main-slider-one__top__inner */}
              </div>
              {/* /.main-slider-one__top */}
              <h2 className="main-slider-one__title">
                <span className="main-slider-one__title__inner">
                  Welcome to  <br />
                  <span className="main-slider-one__title__text">
                  Programmers club
                  </span>
                </span>
              </h2>
              {/* /.title */}
              <div className="main-slider-one__description">
                <p className="main-slider-one__text">
                  Thought shower drink the Kool-aid we don't need to boil the
                  ocean here, yet push back, or we need distributors to
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
                    </span>{" "}
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
                    <span className="video-btn__ripple" />{" "}
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



      {/* <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100"
              src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> */}

      <section className="about-one section-space" id="about">
        <div className="container">
          <div className="row gutter-y-50 align-items-center">
            <div className="col-xl-7 col-lg-6">
              <div className="about-one__left">
                <div className="funfact funfact--home-1">
                  <div className="funfact__inner"></div>
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
                    <span className="sec-title__title__highlight">
                      Secure.
                    </span>
                  </h3>
                  {/* /.sec-title__title */}
                </div>
                {/* /.sec-title */}
                <div
                  className="about-one__description wow fadeInUp"
                  data-wow-duration="1500ms"
                >
                  <p className="about-one__text">
                    Insurance address a range of simply application and this
                    of passages of available, but the majority have suffered
                    exchange for regular payments known as premiums, insurance
                    company in some form.
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
                        <a
                          href="services.html"
                          className="about-one__list__link"
                        >
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
                        <a
                          href="services.html"
                          className="about-one__list__link"
                        >
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
                        <a
                          href="services.html"
                          className="about-one__list__link"
                        >
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
                        <a
                          href="services.html"
                          className="about-one__list__link"
                        >
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
                      <img
                        src="assets/images/about/about-founder.jpg"
                        alt=""
                      />
                    </div>
                    {/* /.about-one__founder__image */}
                    <div className="about-one__founder__info">
                      <h4 className="about-one__founder__name">
                        <a href="team-details.html">Anton Clark</a>
                      </h4>
                      <p className="about-one__founder__designation">
                        Founder
                      </p>
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
      <section className="services-one section-space" id="services">
        <div
          className="services-one__bg"
          style={{
            backgroundImage:
              "url(assets/images/shapes/services-shape-1-1.png)",
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
                    passages of available, but the majority have suffered
                    exchange regular payments known as premiums, insurance
                    company in some form.
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
                      "url(assets/images/shapes/service-card-shape-1-1.png)",
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
                    <a href="event-details.html">Car Insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    Life Insurance financial
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-1.jpg)",
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a href="event-details.html" className="service-card__btn">
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
                      "url(assets/images/shapes/service-card-shape-1-1.png)",
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
                    <a href="event-details.html">life insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    Life Insurance financial
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-2.jpg)",
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a href="event-details.html" className="service-card__btn">
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
                      "url(assets/images/shapes/service-card-shape-1-1.png)",
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
                    <a href="event-details.html">Business Insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    Life Insurance financial
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-3.jpg)",
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a href="event-details.html" className="service-card__btn">
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
                      "url(assets/images/shapes/service-card-shape-1-1.png)",
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
                    <a href="event-details.html">Healthy Insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    Life Insurance financial
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-4.jpg)",
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a href="event-details.html" className="service-card__btn">
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
                      "url(assets/images/shapes/service-card-shape-1-1.png)",
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
                    <a href="event-details.html">Home Insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    Life Insurance financial
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-5.jpg)",
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a href="event-details.html" className="service-card__btn">
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
                      "url(assets/images/shapes/service-card-shape-1-1.png)",
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
                    <a href="event-details.html">Finance Insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    Life Insurance financial
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-6.jpg)",
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a href="event-details.html" className="service-card__btn">
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
                      "url(assets/images/shapes/service-card-shape-1-1.png)",
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
                    <a href="event-details.html">Car Insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    Life Insurance financial
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-1.jpg)",
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a href="event-details.html" className="service-card__btn">
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
                      "url(assets/images/shapes/service-card-shape-1-1.png)",
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
                    <a href="event-details.html">life insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    Life Insurance financial
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-2.jpg)",
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a href="event-details.html" className="service-card__btn">
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
                      "url(assets/images/shapes/service-card-shape-1-1.png)",
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
                    <a href="event-details.html">Business Insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    Life Insurance financial
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-3.jpg)",
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a href="event-details.html" className="service-card__btn">
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
                      "url(assets/images/shapes/service-card-shape-1-1.png)",
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
                    <a href="event-details.html">Healthy Insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    Life Insurance financial
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-4.jpg)",
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a href="event-details.html" className="service-card__btn">
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
                      "url(assets/images/shapes/service-card-shape-1-1.png)",
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
                    <a href="event-details.html">Home Insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    Life Insurance financial
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-5.jpg)",
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a href="event-details.html" className="service-card__btn">
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
                      "url(assets/images/shapes/service-card-shape-1-1.png)",
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
                    <a href="event-details.html">Finance Insurance</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    Life Insurance financial
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/service-1-6.jpg)",
                    }}
                  />
                  {/* /.service-card__image__inner */}
                  <a href="event-details.html" className="service-card__btn">
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
                              Streamline what's the status on the
                              deliverables.
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
      <br />
      <br />
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
                    In an ideal world disband the squad but rehydrate as
                    needed, yet loop back define the underlying principles
                    that drive decisions and strategy for your design
                    language. Work flows products need full resourcing and
                    support.
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
                        Logged in users can view fuled social security numbers
                        and can see call.
                      </p>
                      {/* /.team-card__text */}
                      <div className="social-links">
                        <a href="https://facebook.com/">
                          <span className="social-links__icon">
                            <i
                              className="fab fa-facebook-f"
                              aria-hidden="true"
                            />
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
                            <i
                              className="fab fa-twitter"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Twitter</span>
                          </span>
                          {/* /.social-links__icon */}
                        </a>
                        <a href="https://instagram.com/">
                          <span className="social-links__icon">
                            <i
                              className="fab fa-instagram"
                              aria-hidden="true"
                            />
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
                        I need this to work in internet explorer! there are
                        more projects lined up.
                      </p>
                      {/* /.team-card__text */}
                      <div className="social-links">
                        <a href="https://facebook.com/">
                          <span className="social-links__icon">
                            <i
                              className="fab fa-facebook-f"
                              aria-hidden="true"
                            />
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
                            <i
                              className="fab fa-twitter"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Twitter</span>
                          </span>
                          {/* /.social-links__icon */}
                        </a>
                        <a href="https://instagram.com/">
                          <span className="social-links__icon">
                            <i
                              className="fab fa-instagram"
                              aria-hidden="true"
                            />
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
                        Will really add to your portfolio i promise can you
                        remove my double chin on.
                      </p>
                      {/* /.team-card__text */}
                      <div className="social-links">
                        <a href="https://facebook.com/">
                          <span className="social-links__icon">
                            <i
                              className="fab fa-facebook-f"
                              aria-hidden="true"
                            />
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
                            <i
                              className="fab fa-twitter"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Twitter</span>
                          </span>
                          {/* /.social-links__icon */}
                        </a>
                        <a href="https://instagram.com/">
                          <span className="social-links__icon">
                            <i
                              className="fab fa-instagram"
                              aria-hidden="true"
                            />
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
                    <img
                      src="assets/images/team/team-1-4.jpg"
                      alt="Sara Vega"
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
                        <a href="team-details.html">Sara Vega</a>
                      </h3>
                      {/* /.team-card__name */}
                      <p className="team-card__designation">Founder</p>
                      {/* /.team-card__designation */}
                      <p className="team-card__text">
                        I like it, but can the snow look a little warmer can
                        my website be in english.
                      </p>
                      {/* /.team-card__text */}
                      <div className="social-links">
                        <a href="https://facebook.com/">
                          <span className="social-links__icon">
                            <i
                              className="fab fa-facebook-f"
                              aria-hidden="true"
                            />
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
                            <i
                              className="fab fa-twitter"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Twitter</span>
                          </span>
                          {/* /.social-links__icon */}
                        </a>
                        <a href="https://instagram.com/">
                          <span className="social-links__icon">
                            <i
                              className="fab fa-instagram"
                              aria-hidden="true"
                            />
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
            <a href="team-3.html" className="team-one__btn">
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
      <br />
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
              <h3 className="newsletter__form__title">Connect With Us</h3>
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
                  <span>Submit</span>
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
              backgroundImage: "url(assets/images/backgrounds/footer-bg.jpg)",
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
                    personalized approach digital marketing and get the latest
                    of update of our company.
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
                {/* /.footer-widget */}
              </div>
              {/* /.col-xl-4 col-lg-5 col-md-8 */}
              <div
                className="col-xl-2 col-lg-3 col-md-4 wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="200ms"
              >
                <div className="footer-widget footer-widget--links">
                  <h2 className="footer-widget__title">Useful Links</h2>
                  {/* /.footer-widget__title */}
                  <ul className="list-unstyled footer-widget__links">
                    <li>
                      <a href="about.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="about.html">Team</a>
                    </li>
                    <li>
                      <a href="about.html">Events</a>
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
                data-wow-delay="400ms"
              >
                <div className="footer-widget footer-widget--gallery">
                  <h2 className="footer-widget__title">Gallery</h2>
                  {/* /.footer-widget__title */}
                  <div className="footer-widget__gallery">
                    <a
                      href="about.html"
                      className="footer-widget__gallery__link"
                    >
                      <img
                        src="assets/images/gallery/footer-widget-gallery-1.jpg"
                        alt="footer-widget-gallery"
                      />
                      <span className="footer-widget__gallery__overlay">
                        <i className="icon-plus" />
                      </span>
                    </a>
                    {/* /.footer-widget__gallery__link */}
                    <a
                      href="about.html"
                      className="footer-widget__gallery__link"
                    >
                      <img
                        src="assets/images/gallery/footer-widget-gallery-2.jpg"
                        alt="footer-widget-gallery"
                      />
                      <span className="footer-widget__gallery__overlay">
                        <i className="icon-plus" />
                      </span>
                    </a>
                    {/* /.footer-widget__gallery__link */}
                    <a
                      href="about.html"
                      className="footer-widget__gallery__link"
                    >
                      <img
                        src="assets/images/gallery/footer-widget-gallery-3.jpg"
                        alt="footer-widget-gallery"
                      />
                      <span className="footer-widget__gallery__overlay">
                        <i className="icon-plus" />
                      </span>
                    </a>
                    {/* /.footer-widget__gallery__link */}
                    <a
                      href="about.html"
                      className="footer-widget__gallery__link"
                    >
                      <img
                        src="assets/images/gallery/footer-widget-gallery-4.jpg"
                        alt="footer-widget-gallery"
                      />
                      <span className="footer-widget__gallery__overlay">
                        <i className="icon-plus" />
                      </span>
                    </a>
                    {/* /.footer-widget__gallery__link */}
                    <a
                      href="about.html"
                      className="footer-widget__gallery__link"
                    >
                      <img
                        src="assets/images/gallery/footer-widget-gallery-5.jpg"
                        alt="footer-widget-gallery"
                      />
                      <span className="footer-widget__gallery__overlay">
                        <i className="icon-plus" />
                      </span>
                    </a>
                    {/* /.footer-widget__gallery__link */}
                    <a
                      href="about.html"
                      className="footer-widget__gallery__link"
                    >
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
                © Copyright <span className="dynamic-year" /> by Programmer's
                Club
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
      <div className="mobile-nav__content">
        <span className="mobile-nav__close mobile-nav__toggler">
          <i className="icon-close" />
        </span>
        <div className="logo-box logo-retina">
          <a href="index.html" aria-label="logo image">
            <img src="assets/images/logo-light.png" width={212} alt="" />
          </a>
        </div>
        <div className="mobile-nav__container" />
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
        <div className="mobile-nav__social social-links">
          <a href="https://facebook.com/">
            <span className="social-links__icon">
              <i className="fab fa-facebook-f" aria-hidden="true" />
              <span className="sr-only">Facebook</span>
            </span>
          </a>
          <a href="https://pinterest.com/">
            <span className="social-links__icon">
              <i className="fab fa-pinterest-p" aria-hidden="true" />
              <span className="sr-only">Pinterest</span>
            </span>
          </a>
          <a href="https://twitter.com/">
            <span className="social-links__icon">
              <i className="fab fa-twitter" aria-hidden="true" />
              <span className="sr-only">Twitter</span>
            </span>
          </a>
          <a href="https://instagram.com/">
            <span className="social-links__icon">
              <i className="fab fa-instagram" aria-hidden="true" />
              <span className="sr-only">Instagram</span>
            </span>
          </a>
        </div>
      </div>
    </div>
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

export default home
import React from 'react'

function home() {
  return (
    <>
    {/* <div className="custom-cursor__cursor" /> */}
    {/* <div className="custom-cursor__cursor-two" /> */}
    {/* <div className="preloader">
    <div
        className="preloader__image"
        style={{ backgroundImage: "url(assets/images/loader2.png)" }}
      />
    </div> */}
    {/* /.preloader */}
    <div className="page-wrapper">
      <div className="header">
        <header className="main-header main-header--one sticky-header sticky-header--one-page">
          <div className="container-fluid">
            <div className="main-header__inner">
              <div className="main-header__logo logo-retina">
                <a href="/">
                  <img
                    src="assets/images/logo.png"
                    alt="Logo"
                    width={180}
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
                <a href="/" className="main-header__search search-toggler">
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
                  <span>Connect With Us</span>
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
      />
      {/* /.main-slider-one__image-left */}
      <div className="main-slider-one__image-right">
        <div className="main-slider-one__image-right__inner">
          <div
            className="main-slider-one__image-right__bg"
            style={{
              backgroundImage:
                "url(assets/images/main-slider/error404.png)"
            }}
          />
        </div>
        {/* /.main-slider-one__image-right__inner */}
        <img
          src="assets/images/main-slider/ahmed-sir.png"
          alt="sliderimage"
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
                Welcome to  <br />
                  <span className="main-slider-one__title__text">
                  Programmers club
                  </span>
                </span>
              </h2>
              {/* /.title */}
              <div className="main-slider-one__description">
                <p className="main-slider-one__text">
                  Join us to enhance your tech skills, participate in hackathons, workshops, 
                  and coding competitions, and collaborate on exciting projects. Let’s innovate together!
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
                    <span>Connect With Us</span>
                    <span className="insuba-btn__icon-box">
                      <span className="insuba-btn__icon">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </span>{" "}
                  </a>
                  {/* /.insuba-btn */}
                </div>
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
      />
      {/* /.main-slider-one__image-left */}
      <div className="main-slider-one__image-right">
        <div className="main-slider-one__image-right__inner">
          <div
            className="main-slider-one__image-right__bg"
            style={{
              backgroundImage:
                "url(assets/images/main-slider/banner-2.png)"
            }}
          />
        </div>
        {/* /.main-slider-one__image-right__inner */}
        <img
          src="assets/images/main-slider/ahlam-mam.png"
          alt="sliderimage"
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
                Join us to enhance your tech skills, participate in hackathons, workshops, 
                and coding competitions, and collaborate on exciting projects. Let’s innovate together!
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
                    <span>Connect With Us</span>
                    <span className="insuba-btn__icon-box">
                      <span className="insuba-btn__icon">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </span>{" "}
                  </a>
                  {/* /.insuba-btn */}
                </div>
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
                    src="assets/images/about/trophy.jpg"
                    alt="about" 
                    height={200}
                    className="about-one__image__one"
                  />
                  <img
                    src="assets/images/about/about.jpg"
                    alt="about"
                    width={200}
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
                    <h6 className="sec-title__tagline">About Club</h6>
                    {/* /.sec-title__tagline */}
                  </div>
                  {/* /.sec-title__top */}
                  <h3 className="sec-title__title">
                    Programmer's Club <br /> Since{" "}
                    <span className="sec-title__title__highlight">
                     2016
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
                  The Programmer's Club at Saboo Siddik College of Engineering fosters tech skills through hackathons, 
                  workshops, and networking, creating a collaborative community.
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
                          href="/"
                          className="about-one__list__link"
                        >
                          Event Management.
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
                          href="/"
                          className="about-one__list__link"
                        >
                          Technical Team.
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
                          href="/"
                          className="about-one__list__link"
                        >
                          Creative & Social Media Team.
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
                          href="/"
                          className="about-one__list__link"
                        >
                          Public Relation.
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
                        src="assets/images/about/about-small-Ahlam-Ansari.png"
                        alt=""
                        width={70}
                      />
                    </div>
                    {/* /.about-one__founder__image */}
                    <div className="about-one__founder__info">
                      <h4 className="about-one__founder__name">
                        <a href="/">Er. Ahlam Ansari</a>
                      </h4>
                      <p className="about-one__founder__designation">
                      "The Only Thing That Stands Between You and Your Dream is You."
                      </p>
                    </div>
                    {/* /.about-one__founder__info */}
                  </div>
                  {/* /.about-one__founder */}
                  <div
                    className="about-one__button wow fadeInUp"
                    data-wow-duration="1500ms"
                  >
                    <a href="/about" className="insuba-btn">
                      <span>About More</span>
                      <span className="insuba-btn__icon-box">
                        <span className="insuba-btn__icon">
                          <i className="fas fa-arrow-right" />
                        </span>
                      </span>
                    </a>
                    {/* /.insuba-btn */}
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
                    <h6 className="sec-title__tagline">Our All Events</h6>
                    {/* /.sec-title__tagline */}
                  </div>
                  {/* /.sec-title__top */}
                  <h3 className="sec-title__title"> Events done by programmer's club<br/>
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
                  The Programmer's Club organizes hackathons, workshops, coding competitions, guest lectures,project showcases, networking events, and community service projects to enhance technical skills and foster a collaborative community of tech enthusiasts. Join us!
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
                      "url(assets/images/events/error404.png)",
                  }}
                />
                {/* /.service-card__bg */}
                <div className="service-card__shape" />
                {/* /.service-card__shape */}
                <div className="service-card__content">
                  <div className="service-card__top">
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="event-details.html">Code Feast</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    2022-2023
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/CodeFeast.png)",
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
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="event-details.html">Error404 5.0</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    2022-2023
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/error404.png)",
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
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="event-details.html">Three 90 Challenge</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    2022-2023
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/three90-challenge.png)",
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
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="event-details.html">Teacher's Day</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                    2022-2025
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/teachersday.png)",
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
                  </div>
                  {/* /.service-card__top */}
                  <h3 className="service-card__title">
                    <a href="event-details.html">Felicitation</a>
                  </h3>
                  {/* /.service-card__title */}
                  <p className="service-card__text">
                  2023-2024
                  </p>
                  {/* /.service-card__text */}
                </div>
                {/* /.service-card__content */}
                <div className="service-card__image">
                  <div
                    className="service-card__image__inner"
                    style={{
                      backgroundImage:
                        "url(assets/images/services/felicitation23-24.png)",
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

{/* ____________________________________________________________________________________________________________________________________________________ */}

            {/* for Adding components of Events Carousel ke liye */}
{/* ________________________________________________________________________________________________________________________________________________ */}
        
          </div>
          {/* /.services-one__carousel */}
        </div>
        {/* /.container */}
      </section>

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
            <h3 className="sec-title__title">Meet The Team Member</h3>
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
            <a href="/member" className="team-one__btn" >
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
                      src="assets/images/logo.png"
                      width={202}
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
              Copyright © 2024 All rights reserved  <span className="dynamic-year" /> | Developed by <a href='https://devasil-portfolio.vercel.app/' color='white'>Asil</a>  & <a href='http://devgulmanabi.vercel.app' color='white'>Gulamnabi</a>
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
    <a href="/" data-target="html" className="scroll-to-target scroll-to-top">
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
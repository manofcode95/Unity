$(function() {
  //DOM
  let elements = {
    serviceNums: "services__nums",
    circleNums: "circle__num"
  };

  //Slick number
  let slideNums = $(".intro__num-box");

  $(".intro__num-box").slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    vertical: true,
    appendArrows: $()
  });

  $(".intro__icon--up").click(function() {
    $(".intro__num-box").slick("slickPrev");
  });

  $(".intro__icon--down").click(function() {
    $(".intro__num-box").slick("slickNext");
  });

  $(".intro__num-box").on("afterChange", function() {
    let els = document.querySelectorAll(".slick-active");
    Array.from(els).forEach(el => {
      el.classList.remove("intro__num--active");
    });
    els[1].classList.add("intro__num--active");
  });

  //Photos-show
  $(".photos-show").isotope({
    // options
    itemSelector: ".photos-show__photo"
  });

  $(".gallery__list").on("click", "li", function() {
    var filterValue = $(this).attr("data-filter");
    $(".photos-show").isotope({ filter: filterValue });
    $(".filter-button-group li").removeClass("active");
    $(this).addClass("active");
  });

  //Gallery navbar effect
  let galleryNavItems = document.querySelectorAll(".gallery__item");
  Array.from(galleryNavItems).forEach(el => {
    el.addEventListener("click", function() {
      document
        .querySelector(".gallery__item--active")
        .classList.remove("gallery__item--active");
      el.classList.add("gallery__item--active");
    });
  });

  //Click leader images
  let leaderImgs = document.querySelectorAll(".authors__img");
  let authorActive = "authors__img--active";
  Array.from(leaderImgs).forEach(el => {
    el.addEventListener("click", function() {
      let activeLeader = document.querySelector(`.authors__img--active`);
      if (activeLeader) {
        activeLeader.classList.remove("authors__img--active");
      }
      this.classList.add("authors__img--active");
    });
  });

  // Slick quotes

  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav"
  });

  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-single",
    focusOnSelect: true,
    variableWidth: true
  });
});

// Logo effect
$(".header__name").html(function(i, html) {
  var chars = $.trim(html).split("");
  return (
    "<span class='header__char'>" +
    chars.join("</span><span class='header__char'>") +
    "</span>"
  );
});

// WOW
new WOW().init({
  offset: 200
});

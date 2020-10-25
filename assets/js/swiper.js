function setCurrentSlide(ele, index) {
  $(".swiper1 .swiper-slide").removeClass("selected");
  ele.addClass("selected");
  //swiper1.initialSlide=index;
}

var swiper1 = new Swiper(".swiper1", {
  slidesPerView: 5,
  paginationClickable: true,
  spaceBetween: 5,
  freeMode: true,
  loop: false,
});
swiper1.slides.each(function (index, val) {
  var ele = $(this);
  ele.on("click", function () {
    setCurrentSlide(ele, index);
    swiper2.slideTo(index, 500, false);
    //mySwiper.initialSlide=index;
  });
});

var swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  loop: false,
  watchActiveIndex: true,
});

swiper2.on("slideChange", function () {
  var n = swiper2.activeIndex;
  console.log(n);
  setCurrentSlide($(".swiper1 .swiper-slide").eq(n), n);
  swiper1.slideTo(n, 500, false);
});

import "../scss/styles.scss";
import $ from "jquery";
import Swiper from "swiper";
const something = async () => {
  console.log("something");
};

$(".tab_menu_btn").on("click", function () {
  //버튼 색 제거,추가
  $(".tab_menu_btn").removeClass("on");
  $(this).addClass("on");

  //컨텐츠 제거 후 인덱스에 맞는 컨텐츠 노출
  var idx = $(".tab_menu_btn").index(this);

  $(".tab_box").hide();
  $(".tab_box").eq(idx).show();
});

$(function () {
  $(".menu__wrapper").on("click", function () {
    $(".sideNav")[0].style.width = "250px";
    // $("body")[0].style.marginLeft = "250px";
  });

  $("main").on("click", function () {
    $(".sideNav")[0].style.width = "0";
    // $("body")[0].style.marginLeft = "0";
  });
});

// const openNav = () => {
//   document.getElementById("mySidenav").style.width = "250px";
//   document.getElementById("main").style.marginLeft = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "0";
//   document.getElementById("main").style.marginLeft = "0";
// }

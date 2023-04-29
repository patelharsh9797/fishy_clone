// $(function () {
//   $(".dropdown-link").click(function () {
//     $(this).next().toggle(),
//       $(this).toggleClass("active"),
//       $(".portfolio_dropdown:visible").length > 1 &&
//         ($(".portfolio_dropdown:visible").hide(),
//         $(this).next().show(),
//         $(".dropdown-link").removeClass("active"),
//         $(this).addClass("active"));
//   });
// });

// justifyGallery
// $(".justifyGallery").justifiedGallery();

// TODO variables
const burger = document.querySelector(".burger");
const navItemUl = document.querySelector(".nav_items");
// const portfolioNav = document.querySelector(".portfolio");
const portfolioDropdown = document.querySelector(".portfolio_dropdown");
const portfolio = document.querySelector(".portfolio");
const portfolioArrow = document.querySelector(".portfolio_arrow");

const portfolioArrowFooter = document.querySelector(".portfolio_arrowFooter");
const portfolioFooter = document.querySelector(".portfolioFooter");
const portfoliodropdownFooter = document.querySelector(
  ".portfolio_dropdownFooter"
);
// const portfolioFooter = document.querySelector(".portfolio_footer");
// const portfolioDropdownFooter = document.querySelector(
//   ".portfolio_dropdown_footer"
// );

// TODO Events listeners

portfolioArrow.addEventListener("click", (e) => {
  if (!portfolioArrow.classList.contains("active")) {
    e.target.parentElement.style.color = "var(--clr-accent-300)";
    portfolioArrow.classList.add("active");
    portfolioFooter.classList.add("active");
    portfolioDropdown.classList.add("active");
  } else {
    e.target.parentElement.style.color = "var(--clr-neutral-900)";
    portfolioArrow.classList.remove("active");
    portfolioFooter.classList.remove("active");
    portfolioDropdown.classList.remove("active");
  }
});

// portfolioNav.addEventListener("click", (e) => {
//   if (!portfolioNav.classList.contains("active")) {
//     portfolioNav.classList.add("active");
//     portfolioDropdown.classList.add("active");
//   } else {
//     portfolioNav.classList.remove("active");
//     portfolioDropdown.classList.remove("active");
//   }
// });

// portfolioFooter.addEventListener("click", (e) => {
//   if (!portfolioFooter.classList.contains("active")) {
//     portfolioFooter.classList.add("active");
//     portfolioDropdownFooter.classList.add("active");
//   } else {
//     portfolioFooter.classList.remove("active");
//     portfolioDropdownFooter.classList.remove("active");
//   }
// });

burger.addEventListener("click", (e) => {
  if (!burger.classList.contains("active")) {
    burger.classList.add("active");
    navItemUl.classList.add("active");
  } else {
    burger.classList.remove("active");
    navItemUl.classList.remove("active");
  }
});

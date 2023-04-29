// TODO variables
const backTop = document.querySelector(".backTop");
const burger = document.querySelector(".burger");
const navItemUl = document.querySelector(".nav_items");

const portfolioDropdown = document.querySelector(".portfolio_dropdown");
const portfolioArrow = document.querySelector(".portfolio_arrow");
const portfolioFooter = document.querySelector(".portfolioFooter");

// TODO Events listeners

window.onscroll = () => {
  if (
    document.body.scrollTop > 700 ||
    document.documentElement.scrollTop > 700
  ) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
};

portfolioArrow.addEventListener("click", (e) => {
  showPortfolioLinks(e);
});

burger.addEventListener("click", (e) => {
  if (!burger.classList.contains("active")) {
    burger.classList.add("active");
    navItemUl.classList.add("active");
  } else {
    burger.classList.remove("active");
    navItemUl.classList.remove("active");
  }
});

// functions

function showPortfolioLinks(e) {
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
}

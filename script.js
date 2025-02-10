document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".burger");
  const menuBtn = document.querySelector(".burger__btn");
  const body = document.body;

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
    body.classList.toggle("burger--open");
  });
});

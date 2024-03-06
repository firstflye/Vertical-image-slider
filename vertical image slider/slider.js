let items = document.querySelectorAll(".item");
let carousel = document.querySelector(".slider");

document.addEventListener("scroll", () => {
  let proportion =
    carousel.getBoundingClientRect().top / window.innerHeight;

  let index = Math.ceil(-1 * (proportion + 0.5));

  items.forEach((item, i) => {
    item.className = "item";
    if (i == index) {
      item.className = "item active";
    }
  });
});

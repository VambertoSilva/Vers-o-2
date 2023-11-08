const menu = document.querySelectorAll(".menu h4[href^='#']");
const oi = "oi";

menu.forEach((item) => {
  item.addEventListener("click", () => {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute("href");
    const section = document.querySelector(id);
    const to = section.offsetTop;

    window.scroll({
      top: to,
      behavior: "smooth",
    });
  });
});

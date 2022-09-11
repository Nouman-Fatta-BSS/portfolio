const navbar = document.querySelector(".navbar-list");
navbar.innerHTML = `<li>
<a href="/" class="navbar-link">Home</a>
</li>
<li>
<a href="/about.html" class="navbar-link">About</a>
</li>
<li><a href="/services.html" class="navbar-link">Services</a></li>
<li><a href="#" class="navbar-link">Portfolio</a></li>
<li><a href="#" class="navbar-link">Contact</a></li>`;

const mySwiper = document.querySelector(".mySwiper");
if (mySwiper) {
  new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
const p_btns = document.querySelector("#portfolio-section > div.p-btns");
const btns = document.querySelectorAll(
  "#portfolio-section > div.p-btns .p-btn"
);
const portfolio_images = document.querySelectorAll(".img-overlay");
if (p_btns) {
  p_btns.addEventListener("click", ({ target }) => {
    const dataNum = target.dataset?.btnNum;
    if (dataNum) {
      btns.forEach((btn) => btn.classList.remove("active"));
      target.classList.add("active");
      portfolio_images.forEach((currentElement) => {
        if (!currentElement.classList.contains(`p-btn--${dataNum}`)) {
          currentElement.classList.add("hide");
        } else {
          currentElement.classList.remove("hide");
        }
      });
    }
  });
}

const scrollElement = document.createElement("div");
scrollElement.classList.add("scroll-top-div");
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class = "scroll-top-icon"></ion-icon>`;
const footer = document.querySelector(".footer-section");
footer.innerHTML = `<div class="container grid grid-four-column">
<div class="footer-about">
  <h3>About</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
    ipsam optio veniam impedit alias. Illo voluptatibus facere laborum
    perspiciatis sit delectus, adipisci quidem quis laboriosam rem eius
    alias recusandae consequatur?
  </p>
</div>
<div class="footer-links">
  <h3>Links</h3>
  <ul>
    <li>
      <span> <ion-icon name="arrow-forward-outline"></ion-icon> </span>
      <a href="/index.html">Home</a>
    </li>
    <li>
      <span> <ion-icon name="arrow-forward-outline"></ion-icon> </span>
      <a href="/about.html">About</a>
    </li>
    <li>
      <span> <ion-icon name="arrow-forward-outline"></ion-icon> </span>
      <a href="/services.html">Services</a>
    </li>
    <li>
      <span> <ion-icon name="arrow-forward-outline"></ion-icon> </span>
      <a href="/portfolio.html">Portfolio</a>
    </li>
    <li>
      <span> <ion-icon name="arrow-forward-outline"></ion-icon> </span>
      <a href="/contact.html">Contact</a>
    </li>
  </ul>
</div>
<div class="footer-services">
  <h3>Services</h3>
  <ul>
    <li>
      <span> <ion-icon name="arrow-forward-outline"></ion-icon> </span>
      <a href="#">Web Development</a>
    </li>
    <li>
      <span> <ion-icon name="arrow-forward-outline"></ion-icon> </span>
      <a href="#">E-Commerce</a>
    </li>
    <li>
      <span> <ion-icon name="arrow-forward-outline"></ion-icon> </span>
      <a href="#">Customization</a>
    </li>
  </ul>
</div>
<div class="footer-address">
  <h3>Have any questions?</h3>
  <address>
    <div>
      <p>
        <span><ion-icon name="location-outline"></ion-icon></span>
        Karachi, Pakistan
      </p>
    </div>
    <div>
      <p>
        <span><ion-icon name="call-outline"></ion-icon></span>
        <a href="tel:+923032167639"> +92 303 2167639</a>
      </p>
    </div>
    <div>
      <p>
        <span><ion-icon name="mail-outline"></ion-icon></span>
        <a href="mailto:noumanfatta@gmail.com">
          noumanfatta@gmail.com</a
        >
      </p>
    </div>
  </address>
</div>
</div>
<div class="container">
<div class="footer-social-icons">
  <a href="https://www.linkedin.com/in/noumanfatta/" target="_blank">
    <ion-icon class="icons" name="logo-linkedin"></ion-icon>
  </a>
  <a href="https://github.com/noumanfatta/" target="_blank">
    <ion-icon class="icons" name="logo-github"></ion-icon>
  </a>
  <a href="https://facebook.com/noumanfatta/" target="_blank">
    <ion-icon class="icons" name="logo-facebook"></ion-icon>
  </a>
</div>
<div class="footer-credits">
  <p>
    Copyright ©2022 All rights reserved | This template is made by
    Nouman Fatta with the help of a YouTube channel Thapa Technical
  </p>
</div>
</div>`;
footer.after(scrollElement);
const header = document.querySelector(".header");
scrollElement.addEventListener("click", () => {
  header.scrollIntoView({ behavior: "smooth" });
});

const counterNumber = document
  .querySelector(".work-section")
  .querySelectorAll(".counter-numbers");
const speed = 200;
counterNumber.forEach((cur) => {
  const updateNumber = () => {
    const targetNumber = cur.dataset.number;
    if (targetNumber > parseInt(cur.innerText)) {
      cur.innerText = parseInt(cur.innerText) + 2 + "+";
      setInterval(updateNumber, 10);
    }
  };
  updateNumber();
});


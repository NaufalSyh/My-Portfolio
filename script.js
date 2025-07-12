// // ============= toggle icon navbar ============= //
// let menuIcon = document.querySelector("#hammenu");
// let navbar = document.querySelector(".navbar");

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle("bx-x");
//   navbar.classList.toggle("active");
// };

// // ============== scroll section ============== //
let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  //   // ============= sticky navbar ============= //
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // ============= remove toggle icon and navbar ============= //
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// // ============= scroll reveal ============= //
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portofolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
ScrollReveal().reveal('.skills', { origin: "bottom" });

// // toogle class active
const navbarNav = document.querySelector(".navbar");
const hammenu = document.querySelector("#hammenu");
// ketika hammenu diklik
document.querySelector("#hammenu").onclick = () => {
  navbarNav.classList.toggle("active");
  hammenu.classList.toggle("bx-x");
};

// klik luar side bar

document.addEventListener("click", function (e) {
  if (!hammenu.contains(e.target)) {
    navbarNav.classList.remove("active");
    hammenu.classList.remove("bx-x");
  }
});


// Email Js
function sendMail(event){
  event.preventDefault();

  var nickname = document.getElementById("nickname").value.trim();
  var mobile_number = document.getElementById("mobile_number").value.trim();

  if (!nickname) {
    nickname = "Anonim";
  }
  if (!mobile_number) {
    mobile_number = "No phone number";
  }

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    nickname: nickname,
    mobile_number: mobile_number,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_oxxfpan";
  const templateID = "template_ojk0ylj";
  
  emailjs.send(serviceID, templateID, params)
    .then(
      (res) =>{
        document.getElementById("name").value = "",
        document.getElementById("email").value = "",
        document.getElementById("message").value = "",
        document.getElementById("nickname").value = "",
        document.getElementById("mobile_number").value = "",
        console.log(res),
        alert("Your message has been sent successfully!");
      })
    .catch((err) => {
      console.log(err);
      alert("Oops! Something went wrong. Please try again later.");
    });
}

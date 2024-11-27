console.log("Script loaded");

document.addEventListener("DOMContentLoaded", function () {
  var typed = new Typed("#typing", {
    strings: ["Developer"],
    typeSpeed: 80,
    backSpeed: 80,
  });
});

let backTop = document.querySelector(".backtop");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    backTop.classList.add("show");
    backTop.classList.remove("hide");
  } else {
    backTop.classList.add("hide");
    backTop.classList.remove("show");
  }
});
backTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("navbarSidebar");
  const toggleButton = document.querySelector(".navbar-toggler");

  if (sidebar.classList.contains("show")) {
    if (
      !sidebar.contains(event.target) &&
      !toggleButton.contains(event.target)
    ) {
      sidebar.classList.remove("show");
    }
  }
});

let darkBtn = document.querySelector(".act_btn input");
let body = document.querySelector("body");

darkBtn.addEventListener("change", function () {
  if (darkBtn.checked) {
    body.classList.add("darkmode");
  } else {
    body.classList.remove("darkmode");
  }
});




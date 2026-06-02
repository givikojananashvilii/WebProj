// aquastyle scripts

document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  initBackToTop();
  initGalleryFilter();
  initContactForm();
});

// mobile menu
function initMobileMenu() {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".main-nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
    var isOpen = nav.classList.contains("open");
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.textContent = isOpen ? "✕" : "☰";
  });

  var navLinks = nav.querySelectorAll("a");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    });
  }
}

// back to top button
function initBackToTop() {
  var btn = document.querySelector(".back-to-top");
  if (!btn) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// gallery filtering
function initGalleryFilter() {
  var filterBtns = document.querySelectorAll(".filter-btn");
  var galleryItems = document.querySelectorAll(".gallery-item");

  if (filterBtns.length === 0) return;

  for (var i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", function () {
      var filter = this.getAttribute("data-filter");

      for (var j = 0; j < filterBtns.length; j++) {
        filterBtns[j].classList.remove("active");
      }
      this.classList.add("active");

      for (var k = 0; k < galleryItems.length; k++) {
        var category = galleryItems[k].getAttribute("data-category");
        if (filter === "all" || category === filter) {
          galleryItems[k].classList.remove("hidden");
        } else {
          galleryItems[k].classList.add("hidden");
        }
      }
    });
  }
}

// contact form check
function initContactForm() {
  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var isValid = true;
    var fields = [
      { id: "name", minLength: 2 },
      { id: "email", pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
      { id: "message", minLength: 10 }
    ];

    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      var input = document.getElementById(field.id);
      var errorEl = document.getElementById(field.id + "-error");
      var value = input.value.trim();

      input.classList.remove("error");
      errorEl.classList.remove("visible");

      if (field.minLength && value.length < field.minLength) {
        showError(input, errorEl, "მინიმუმ " + field.minLength + " სიმბოლო საჭიროა");
        isValid = false;
      } else if (field.pattern && !field.pattern.test(value)) {
        showError(input, errorEl, "გთხოვთ, შეიყვანოთ სწორი ელ-ფოსტა");
        isValid = false;
      }
    }

    var successMsg = document.getElementById("form-success");
    if (isValid) {
      successMsg.classList.add("visible");
      form.reset();
      setTimeout(function () {
        successMsg.classList.remove("visible");
      }, 5000);
    }
  });
}

function showError(input, errorEl, message) {
  input.classList.add("error");
  errorEl.textContent = message;
  errorEl.classList.add("visible");
}

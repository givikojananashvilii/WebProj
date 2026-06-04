// contact form validation
function checkForm() {
  var form = document.getElementById("contact-form");
  if (!form) return;

  var popup = document.getElementById("popup");
  var popupText = document.getElementById("popup-text");
  var popupClose = document.getElementById("popup-close");

  popupClose.addEventListener("click", function () {
    popup.classList.remove("visible");
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      popupText.textContent = "გთხოვთ, შეავსოთ ყველა ველი";
      popup.classList.add("visible");
      return;
    }

    document.getElementById("form-success").classList.add("visible");
    form.reset();
  });
}

checkForm();

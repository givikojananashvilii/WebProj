// contact form validation
function checkForm() {
  var form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("გთხოვთ, შეავსოთ ყველა ველი");
      return;
    }

    document.getElementById("form-success").classList.add("visible");
    form.reset();
  });
}

checkForm();

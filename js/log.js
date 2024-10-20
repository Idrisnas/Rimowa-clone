$(document).ready(function () {
  function getProducts(user) {
    const fakeData = {
      first_name: "John",
      last_name: "Doe",
      email: "ap@gmail.com",
      password: "123",
    };

    const formData = new FormData();
    formData.append("first_name", "John");
    formData.append("last_name", "Doe");
    formData.append("email", "john@gmail.com");
    formData.append("password", "1234567");
    fetch("http://ecommerce.reworkstaging.name.ng/v2/merchants", {
      method: "POST",
      body: JSON.stringify({ ...fakeData }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });

    // console.log(
    //   "Cart Items in Local Storage:",
    //   localStorage.getItem("cartItems")
    // );
  }
  $("#btnSignup").click(function (e) {
    e.preventDefault();
    $(".error").text("");

    let formData = {
      userName: $("#nameInput").val(),
      password: $("#passwordInput").val(),
      password2: $("#password2Input").val(),
      email: $("#emailInput").val(),
      number: $("#numberInput").val(),
    };
    let hasError = false;
    if (!formData.userName) {
      $("#aErr").text("User Name is required");
      hasError = true;
    }
    if (!formData.password) {
      $("#bErr").text("Password is required");
      hasError = true;
    }
    if (formData.password !== formData.password2) {
      $("#cErr").text("Password does not match");
      hasError = true;
    }
    if (!formData.email) {
      $("#dErr").text("Email  is required");
      hasError = true;
    }
    if (!formData.number) {
      $("#eErr").text("Number is required");
      hasError = true;
    }
    if (hasError) {
      return;
    }
    getProducts(formData);
    // console.log(formData);
  });
});

$(document).ready(function () {
  $("#btnLogin").click(function (e) {
    e.preventDefault();
    $(".error").text("");

    // if (!storedFormData) {
    //     alert("No registered user found. Please sign up first.");
    //     return;
    // }

    let inputName = $("#inputName").val();
    let inputPassword = $("#inputPassword").val();

    let hasError = false;
    if (!inputName) {
      $("#aErr").text("User Name is Required");
      hasError = true;
    }
    if (!inputPassword) {
      $("#bErr").text("Password is required");
      hasError = true;
    }
    if (hasError) {
      return;
    }

    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = storedUsers.find(
      (user) => user.userName === inputName && user.password === inputPassword
    );

    if (validUser) {
      localStorage.setItem("loggedInUser", validUser.userName);

      alert("Login successful! Redirecting...");
      window.location.href = "welcome.html";
    } else {
      $("#bErr").text("Invalid username or password");
    }
    if (!validUser) {
      alert(
        "No registered user found or an invalid Username and Password was inputed Please sign up first or check the inputed user-name and password."
      );
      return;
    }
  });
});

$(document).ready(function () {
  $("#eyeSpan").on("click", function () {
    let $password = $("#inputPassword");
    let $icon = $("#icon");

    // Toggle the password visibility
    if ($password.attr("type") === "password") {
      $password.attr("type", "text");
      $icon.removeClass("fa-eye-slash").addClass("fa-eye");
    } else {
      $password.attr("type", "password");
      $icon.removeClass("fa-eye").addClass("fa-eye-slash");
    }
  });
});

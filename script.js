$(document).ready(function () {
    let emailError = false;
    let passwordError = false;
    let confirmedpassError = false;
  
    $("[type='email']").blur(function () {
      let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  
      let emailValue = $(this).val();
      if (emailValue == "") {
        $("#emailMessage")
          .text("Email is required")
          .css({
            color: "darkmagenta",
            "font-size": "14px",
            "margin-top": "-10px",
          })
          .show();
        emailError = true;
      } else if (!regex.test(emailValue)) {
        $("#emailMessage")
          .text("Wrong email format")
          .css({
            color: "darkmagenta",
            "font-size": "14px",
            "margin-top": "-10px",
          })
          .show();
        emailError = true;
      } else {
        $("#emailMessage").text("").hide();
        emailError = false;
      }
    });
  
    $("#password").keyup(function () {
      let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
      let passwordValue = $(this).val();
  
      if (!(passwordValue.length < 6 || passwordValue.length > 20)) {
        if (!passwordValue.match(regex)) {
          $("#passwordAlert")
            .html(
              "Password should contain at least one numeric digit,<br> one uppercase and one lower case letter."
            )
            .css({
              color: "darkmagenta",
              "font-size": "14px",
              "margin-top": "-10px",
            })
            .show();
          passwordError = true;
        } else {
          $("#passwordAlert").text("").hide();
          passwordError = false;
        }
      } else {
        $("#passwordAlert")
          .text("Password length is between 6-20 charachter!")
          .css({
            color: "darkmagenta",
            "font-size": "14px",
            "margin-top": "-10px",
          })
          .show();
        passwordError = true;
      }
    });
  
    $("#confirmedpass").blur(function () {
      let confirmedPassword = $(this).val();
      let password = $("#password").val();
  
      if (!(confirmedPassword === password)) {
        $("#confirmedpasswordAlert")
          .text("Conflict with password!")
          .css({
            color: "darkmagenta",
            "font-size": "14px",
            "margin-top": "-10px",
          })
          .show();
        confirmedpassError = true;
      } else {
        $("#confirmedpasswordAlert").text("").hide();
        confirmedpassError = false;
      }
    });
  
    $("form").submit(function (e) {
      if (emailError || passwordError || confirmedpassError) {
        e.preventDefault();
      } else {
        return;
      }
    });
  
  });
  
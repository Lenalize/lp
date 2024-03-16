/*!
 * Start Bootstrap - New Age v6.0.7 (https://startbootstrap.com/theme/new-age)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link"),
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

//<![CDATA[
 function redirectToWhatsApp() {
//   /* Isi Pesan Form */
   var name = document.getElementById("cName").value;
   var email = document.getElementById("cEmail").value;
   var massage = document.getElementById("cMessage").value;
   var postLink = window.location.href;

//   /* validation */
//   /*var error_name = document.getElementById("error_name"),
//     error_email = document.getElementById("error_email"),
//     error_message = document.getElementById("error_message");*/

   var text;
   if (name == "") {
     text = "Please enter your name";
     error_name.setAttribute("data-text", text);
     return false;
   }

   if (email.indexOf("@") == -1 || email.length < 6) {
     text = "Please enter valid email";
      error_email.setAttribute("data-text", text);
      return false;
    }

    if (massage == "") {
      text = "Please enter your Massage";
      error_message.setAttribute("data-text", text);
      return false;
    }
//   /* Pengaturan Pesan */
    var message = "New message from " + name + "\n\n";   //Pesan Pembuka
    message += "*Name:* " + name + "\n";
    message += "*Email:* " + email + "\n";
    message += "*Massage:* " + massage + "\n\n";
    message += "=============================" + "\n";
    message += "*Form:* " + postLink + "\n";
    message += "=============================";
//   /* Pengaturan Whatsapp */
    var walink = "whatsapp: send",
      phoneNumber = "+6282158632405"; // No Whatsapp Kamu

    var encodedMessage = encodeURIComponent(message);
    var whatsappUrl =
      walink + "?phone=" + phoneNumber + "&text=" + encodedMessage;
    window.open(whatsappUrl, "_blank");
    return true;
 }

  var inputs = document.querySelectorAll(
    ".Fcontrol input[type=text], .Fcontrol input[type=email], .Fcontrol textarea",
  );
    for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
    input.addEventListener("input", function () {
  var bg = this.value ? "show" : "none";
    this.setAttribute("class", bg);
  });
}

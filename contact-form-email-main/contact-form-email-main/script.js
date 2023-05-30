
function sendEmail() {
  //  Create an account on https://app.elasticemail.com/api/
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "contactformmail01@gmail.com",
    Password: "3134FE4B6997E691C132E278EB4BD0FBBCEC",
    To: "contactformreceive@gmail.com",
    Port: 2525,
    From: "contactformmail01@gmail.com",
    Subject: "New Contact Form Enquiry",
    Body : "Name: " + document.getElementById("name").value
    + "<br> Email: " + document.getElementById("email").value
    + "<br> Phone no: " + document.getElementById("phone").value
    + "<br> Message: " + document.getElementById("message").value
    }).then((message) => alert(message));
  }
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = this;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    fetch("https://script.google.com/macros/s/AKfycbzV9PBAvdtnHu80gJI9ix3EWtSMQ73pWekGe5uEjFqoaJz2wwkB3uPLdRFMLZ_qf9GCYg/exec", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json" 
    },
      body: JSON.stringify({ name, email, message }),
    })
    .then(() => {

  alert("Message sent! Thanks for reaching out :3");
  form.reset();
})
.catch(error => {
  console.error("Error:", error);
  alert("Error sending message. Please try again later.");
  });

});


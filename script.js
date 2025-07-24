document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            // Show the thank you popup
            document.getElementById("thankYouPopup").style.display = "block";
            this.reset(); // optional: clear form
        } else {
            alert("Something went wrong. Please try again.");
        }
    })
    .catch(error => {
        alert("An error occurred: " + error.message);
    });
});

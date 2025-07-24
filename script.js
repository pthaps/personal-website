document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData
    }).then(response => {
        if (response.ok) {
            form.reset();
            document.getElementById("thankYouPopup").style.display = "block";
        } else {
            alert("Something went wrong. Please try again.");
        }
    }).catch(() => {
        alert("There was an error submitting the form.");
    });
});
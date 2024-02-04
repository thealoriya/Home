document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form data
        var formData = new FormData(contactForm);

        // Perform AJAX request
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "your_form_submission_endpoint_here", true);

        // Set up the callback
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Successful response, show success message
                    showSuccessMessage();
                } else {
                    // Error handling (you can customize this part)
                    alert("Error submitting the form. Please try again later.");
                }
            }
        };

        // Send the form data
        xhr.send(formData);
    });

    function showSuccessMessage() {
        // Customize this function to display your success message
        alert("Your message has been sent successfully!");
        // You can also redirect the user to a thank you page or update the UI as needed.
    }
});

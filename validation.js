const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const message = document.getElementById("message").value.trim();

    const errors = [];

    const nameRegex = /^[A-Za-z ]{3,30}$/;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex = /^\d{10}$/;

    if(!nameRegex.test(name)){

        errors.push("❌ Name must contain only letters (3-30 characters).");

    }

    if(!emailRegex.test(email)){

        errors.push("❌ Invalid email.");

    }

    if(!phoneRegex.test(phone)){

        errors.push("❌ Phone must contain exactly 10 digits.");

    }

    if(message.length < 10){

        errors.push("❌ Message should contain at least 10 characters.");

    }

    const errorBox = document.getElementById("formErrors");

    if(errors.length > 0){

        errorBox.innerHTML = errors.join("<br>");

    }else{

        errorBox.style.color = "green";

        errorBox.innerHTML = "✅ Form Submitted Successfully!";

        contactForm.reset();

    }

});
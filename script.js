document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent the default form submission
    
    const username = document.querySelector('#username').value;
    const email = document.querySelector('#email').value; // Changed 'password' to 'email' as per your HTML form
    
    // Example: Check if fields are filled (simple validation)
    if (username && email) {
        // You can add additional validation or processing here

        // Manually submit the form if everything is correct
        e.target.submit(); // This will submit the form
    } else {
        console.log("Please fill in all fields.");
    }
});

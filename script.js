function generateNumber(digits) {
    const min = Math.pow(10, digits - 1);
    const max = Math.pow(10, digits) - 1;
    
    // Generate random number
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    // Update the display
    const element = document.getElementById(`num-${digits}`);
    if (element) {
        // Add a small animation effect
        element.style.opacity = '0';
        setTimeout(() => {
            element.innerText = randomNumber;
            element.style.opacity = '1';
        }, 150);
    }
}

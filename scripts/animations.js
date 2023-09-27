// Blob mouse follow animation effect
// Credit: https://codepen.io/Hyperplexed/pen/KKBjvbG
function blobAnimation() {
    const blob = document.getElementById("blob");

    window.onpointermove = event => { 
    const { clientX, clientY } = event;
    
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 10000, fill: "forwards" });
    }
}

// Typing text effect
function displayText() {
    const textElement = document.getElementById('name');
    const textToDisplay = "Chris Wangsanata";
    let charIndex = 0;
    const interval = setInterval(() => {
        if (charIndex < textToDisplay.length) {
            textElement.textContent += textToDisplay[charIndex];
            charIndex++;
        } else {
            clearInterval(interval);
        }
    }, 75);
}

// Blinking cursor effect
function blinkCursor() {
    setInterval(() => {
        const cursor = document.getElementById("cursor");
        cursor.style.opacity = cursor.style.opacity == 0 ? 1 : 0;
    }, 500);
}

window.onload = () => {
    displayText();
    blinkCursor();
    blobAnimation();
}
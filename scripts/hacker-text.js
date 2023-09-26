window.onload = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;

    const h1Element = document.querySelector("h1");
    
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        // Generates the hacker text
        h1Element.innerText = h1Element.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration)
                    return h1Element.dataset.value[index];
                else
                    return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= h1Element.dataset.value.length)
            clearInterval(interval);

        iteration += 1 / 3;
    }, 30);

    // Blinking cursor effect
    setInterval(() => {
        const cursor = document.querySelector("#cursor");
        cursor.style.opacity = cursor.style.opacity == 0 ? 1 : 0;
    }, 500);
}



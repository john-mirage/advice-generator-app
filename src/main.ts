import './assets/styles/style.css'

const adviceIdElement = document.getElementById("advice-id")
const adviceContentElement = document.getElementById("advice-content")
const randomAdviceButton = document.getElementById("advice-random-button")

/**
 * Get a random advice from the API.
 */
async function getRandomAdvice() {
    const data = await fetch('https://api.adviceslip.com/advice').then(response => response.json())
    return data.slip
}

/**
 * Show a random advice in the page.
 */
async function showRandomAdvice() {
    const slip = await getRandomAdvice()
    adviceIdElement.innerText = `advice #${slip.id}`
    adviceContentElement.innerText = `"${slip.advice}"`
}

/**
 * Handle clicks on the random advice button.
 * 
 * @param event - The event
 */
function handleRandomAdviceButton(event) {
    event.preventDefault()
    showRandomAdvice()
}

randomAdviceButton?.addEventListener("click", handleRandomAdviceButton)

showRandomAdvice()
import './assets/styles/style.css'

const adviceIdElement = document.getElementById("advice-id") as HTMLElement;
const adviceContentElement = document.getElementById("advice-content") as HTMLElement;
const randomAdviceButton = document.getElementById("advice-random-button") as HTMLElement;

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
    adviceContentElement.innerText = slip.advice
}

/**
 * Handle clicks on the random advice button.
 * 
 * @param event - The event
 */
function handleRandomAdviceButton(event: Event) {
    event.preventDefault()
    showRandomAdvice()
}

randomAdviceButton?.addEventListener("click", handleRandomAdviceButton)

showRandomAdvice()
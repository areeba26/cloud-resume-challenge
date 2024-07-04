const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://yn6jdevnhfaulmhymvybrnvlem0ehtfy.lambda-url.ap-south-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();
const API_KEY = "bpM7lSIF52bLqglW7bru23Urd_g";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

 async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error);
    }
 }

 function displayStatus(data){
    let title = document.getElementById("resultsModalTitle");
    title.textContent = "API Key Status";
    
    let bodyText = document.getElementById("results-content");
    bodyText.innerHTML = `<div class="key-status">Your key is valid until<br> ${data.expiry}</div>`

    resultsModal.show();
 }
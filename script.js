// script.js
fetch('https://<Your-API-Gateway-Endpoint>')
    .then(response => response.json())
    .then(data => document.getElementById('visitor-count').innerText = data);

// Function to load the navigation bar
function loadNavBar() {
    // Load the contents of the nav.html file using fetch
    fetch('../components/navbar.html')
        .then(response => response.text()) // Converts the response to text
        .then(data => {
            // Inserting the contents of the navbar.html file into the element with id "navbar"
            document.getElementById("navbar").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a barra de navegação:', error)); // Handles errors
}

// Function to load the whatsapp button
function loadWhatsappButton() {
    // Load the contents of the nav.html file using fetch
    fetch('../components/whatsapp.html')
        .then(response => response.text()) // Converts the response to text
        .then(data => {
            // Inserting the contents of the navbar.html file into the element with id "whatsapp"
            document.getElementById("whatsapp").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a barra de navegação:', error)); // Handles errors
}

// Function to load the back-to-top button
function loadBackToTopButton() {
    // Load the contents of the nav.html file using fetch
    fetch('../components/back-to-top.html')
        .then(response => response.text()) // Converts the response to text
        .then(data => {
            // Inserting the contents of the navbar.html file into the element with id "whatsapp"
            document.getElementById("back-to-top").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar a barra de navegação:', error)); // Handles errors
}

// Function that performs several other functions in the window.onload event
function executeOnLoad() {
    // Calling the function to load the navigation bar when loading the page
    loadNavBar();
    // Calling the function to load the whatsapp button when loading the page
    loadWhatsappButton();
    // Calling the function to load the back-to-top button when loading the page
    loadBackToTopButton();
}

// Calling function to perform multiple functions in window.onload event
window.onload = executeOnLoad;



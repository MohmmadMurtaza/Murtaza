function darkMode() {
    const body = document.body;
    const icon = document.getElementById('icon');

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        icon.className = "bx bx-sun";  
        icon.classList.add("icon-dark");
        localStorage.setItem('darkMode', 'enabled');
    } else {
        icon.className = "bx bx-moon";   
        icon.classList.remove("icon-dark"); 
        localStorage.setItem('darkMode', 'disabled');
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const icon = document.getElementById('icon');
    const darkModePreference = localStorage.getItem('darkMode');

    if (darkModePreference === 'enabled') {
        body.classList.add("dark-mode");
        icon.className = "bx bx-sun";  
        icon.classList.add("icon-dark");
    } else {
        body.classList.remove("dark-mode");
        icon.className = "bx bx-moon";   
        icon.classList.remove("icon-dark");
    }
});

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('active');
}


document.addEventListener('click', function (event) {
    const menu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');

    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('active');
    }
});


const menuItems = document.querySelectorAll("nav ul li a, #mobile-menu ul li a");

menuItems.forEach(item => {
    item.addEventListener("click", function() {

        menuItems.forEach(i => i.parentElement.classList.remove("active"));

        item.parentElement.classList.add("active");

        const menu = document.getElementById('mobile-menu');
        menu.classList.remove('active');
    });
});

function text() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    if (name.value === "") {
        alert("Write something in the name input"); 
    } else if (email.value === "") {
        alert("Write something in the email input");
    } else if (message.value === "") {
        alert("Write something in the message input");
    }else {
        alert("Thanks for contacting us! We'll reply as soon as possible.");
        name.value = "";
        email.value = "";
        message.value = "";
    }
}
       


function buyTicket(ticketType) {
    alert("You selected: " + ticketType);
}

function coming_soon() {
    alert("Coming Soon");
}



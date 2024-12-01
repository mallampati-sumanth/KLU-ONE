function showMenu(hostel) {
    if (!hostel) {
        alert('Please select a hostel first!');
        return;
    }

    // Hide the hostel selection and other menus
    document.getElementById('hostel-selection').classList.add('hidden');
    document.getElementById('himalaya-menu').classList.add('hidden');
    document.getElementById('tulip-menu').classList.add('hidden');

    // Show the selected hostel's menu
    const selectedMenu = document.getElementById(`${hostel}-menu`);
    if (selectedMenu) {
        selectedMenu.classList.remove('hidden');
        selectedMenu.classList.add('slide-in');
        history.pushState({ page: hostel }, "", `#${hostel}`);
    } else {
        alert('Invalid hostel selection.');
    }
}


function submitFeedback(hostel, rating) {
    alert('Rating: ' + rating + ' stars');
}

function updateMenu() {
    const today = new Date().getDay();
    const menu = {
        himalaya: {
            0: { morning: "Pancakes", lunch: "Chicken Curry", snacks: "Samosa", dinner: "Biryani" },
            1: { morning: "Omelette", lunch: "Pappu, Sambar, Cabbage Fry", snacks: "Pakora", dinner: "Paneer Butter Masala" },
            2: { morning: "Idli", lunch: "Fish Curry", snacks: "Sandwich", dinner: "Dal Tadka" },
            3: { morning: "Paratha", lunch: "Mutton Curry", snacks: "Chaat", dinner: "Chicken Biryani" },
            4: { morning: "Gulab Jamun", lunch: "Veg Biryani", snacks: "Gulab Jamun", dinner: "Buttermilk" },
            5: { morning: "Poha", lunch: "Egg Curry", snacks: "Biscuits", dinner: "Veg Korma" },
            6: { morning: "Upma", lunch: "Paneer Tikka", snacks: "Chips", dinner: "Fish Fry" }
        },
        tulip: {
            0: { morning: "Pancakes", lunch: "Chicken Curry", snacks: "Samosa", dinner: "Biryani" },
            1: { morning: "Omelette", lunch: "Veg Pulao", snacks: "Pakora", dinner: "Paneer Butter Masala" },
            2: { morning: "Idli", lunch: "Fish Curry", snacks: "Sandwich", dinner: "Dal Tadka" },
            3: { morning: "Paratha", lunch: "Mutton Curry", snacks: "Chaat", dinner: "Chicken Biryani" },
            4: { morning: "Dosa", lunch: "Veg Biryani", snacks: "Gulab Jamun", dinner: "Butter Chicken" },
            5: { morning: "Poha", lunch: "Egg Curry", snacks: "Biscuits", dinner: "Veg Korma" },
            6: { morning: "Upma", lunch: "Paneer Tikka", snacks: "Chips", dinner: "Fish Fry" }
        }
    };

    // Update both Himalaya and Tulip menus
    ['himalaya', 'tulip'].forEach(hostel => {
        document.getElementById(`${hostel}-morning`).innerText = menu[hostel][today].morning;
        document.getElementById(`${hostel}-lunch`).innerText = menu[hostel][today].lunch;
        document.getElementById(`${hostel}-snacks`).innerText = menu[hostel][today].snacks;
        document.getElementById(`${hostel}-dinner`).innerText = menu[hostel][today].dinner;
    });

    const ratings = {
        0: 4,
        1: 2.5,
        2: 4,
        3: 3,
        4: 2.5,
        5: 3,
        6: 4
    };

    // Update ratings for both hostels
    document.querySelectorAll('.ratings').forEach(ratingElement => {
        const rating = ratings[today];
        const stars = ratingElement.querySelectorAll('.star');
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    });
}



function goHome() {
    // Show the hostel selection and hide other menus
    document.getElementById('hostel-selection').classList.remove('hidden');
    document.getElementById('hostel-selection').classList.add('fade-in');
    document.getElementById('himalaya-menu').classList.add('hidden');
    document.getElementById('tulip-menu').classList.add('hidden');
    history.pushState({ page: "home" }, "", "#home");
}

function rateMenu(hostel, rating) {
    const stars = document.querySelectorAll(`#${hostel}-menu .star`);
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
    submitFeedback(hostel, rating);
}

function updateDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-US', options);

    // Update the date for Himalaya
    document.getElementById('current-date').innerText = dateString;

    // Update the date for Tulip (without time)
    document.getElementById('tulip-date-time').innerText = `Date: ${dateString}`;
}

// Call this function to update the date when the page loads
updateDate();

window.onload = function() {
    updateMenu();
    updateDate(); // Make sure both menus show the date

    // Hide logo overlay after a brief delay
    setTimeout(() => {
        document.getElementById('logo-overlay').style.display = 'none';
    }, 1000);

    // Handle browser navigation with back/forward buttons
    window.onpopstate = function(event) {
        if (event.state && event.state.page) {
            if (event.state.page === "home") {
                goHome();
            } else {
                showMenu(event.state.page);
            }
        } else {
            goHome();
        }
    };

    // Handle page loading with URL hash
    if (location.hash) {
        const page = location.hash.substring(1);
        if (page === "home") {
            goHome();
        } else {
            showMenu(page);
        }
    } else {
        goHome();
    }
};



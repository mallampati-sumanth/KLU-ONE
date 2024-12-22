    function showMenu(hostel) {
    // Hide the hostel selection section
    document.getElementById('hostel-selection').classList.add('hidden');

    // Hide all menu sections with the sliding effect for previous menu
    const menus = ['himalaya-menu', 'tulip-menu', 'kanchanaganga-menu', 'aravalivindhya-menu'];
    menus.forEach(menu => {
        const menuElement = document.getElementById(menu);
        if (menuElement) {
            // Apply the slide out effect (reverse of the slide-in)
            menuElement.classList.remove('slide-in-from-top');
            menuElement.classList.add('hidden'); // Hide the menu
        }
    });

    // Show the selected hostel's menu with slide-in effect from top
    const selectedMenu = document.getElementById(hostel + '-menu');
    if (selectedMenu) {
        selectedMenu.classList.remove('hidden'); // Make the menu visible
        selectedMenu.classList.add('slide-in-from-top'); // Add the sliding animation from the top
    } else {
        console.error(`Menu section for ${hostel} not found!`);
    }

    // Update URL to reflect the current page state
    history.pushState({ page: hostel }, "", `#${hostel}`);
}






function submitFeedback(hostel, rating) {
    // Handle feedback submission (this could be expanded to send data to a server)
    console.log(`Feedback submitted for ${hostel}: ${rating} stars`);

    // Optionally, display a confirmation to the user
    alert(`Thank you for rating ${hostel} menu ${rating} stars!`);

    // Example: Add logic to visually highlight the selected rating
    const ratingContainer = document.getElementById(`${hostel}-ratings`);
    if (ratingContainer) {
        const stars = ratingContainer.querySelectorAll('.star');
        stars.forEach((star, index) => {
            star.classList.toggle('text-yellow-500', index < rating);
            star.classList.toggle('text-gray-400', index >= rating);
        });
    } else {
        console.error(`Ratings container for ${hostel} not found!`);
    }
}


        function updateMenu() {
            const today = new Date().getDay();
            const menu = {
                himalaya: {
                        0: { 
                morning: "Idly, Semiya Bath, Tiffin Sambar, Garlic Peanut Chutney, Onion & Tomato Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Alu Pusa Fry, Panner Capsicum, Veg Biryani, Veg Katta, Mango Pickle, Chicken Masala, Curd, Onion Raitha",
                snacks: "Biscuit and Tea, Milk",
                dinner: "Plain Rice, Veg Salad, Chapati, Carrot Beans White Peas Dry, Garlic Peanut Chutney, Rasam, Kandhi Pachadi, Curd, Mango Pickle, Fried Rice"
            },
            1: { 
                morning: "Idly, Mysore Bajji, Wheat Rava Upma, Tiffin Sambar, Peanut Chutney, Mint Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Sorakai 65, Mix Veg Curry, Curry Leaves Rice, Mixed Dal, Mango Pickle, Brown Rice, Arikalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Pani Poori and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Carrot Fry, Boiled Egg, Veg Sambar, Peanut Chutney, Dhal Tadka, Vannagai Pachadi, Curd, Mango Pickle, Semiya Kesari"
            },
            2: { 
                morning: "Idly, Onion Dosa, Masala Phoa, Tiffin Sambar, Coconut Chutney, Onion Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Ladishfinger Fry, Aloo Green Peas Curry, Tomato Rice, Yellow Dal, Cauliflower Pickle, Brown Rice, Oodalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Dilpasand and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Egg Burji, Channa Masala, Sambar, Coconut Chutney, Rajma Dhal, Dhondakai Pachadi, Curd, Cauliflower Pickle, Fried Rice"
            },
            3: { 
                morning: "Idly, Rava Upma, Attukulu Upma, Tiffin Sambar, Ginger Palli Chutney, Tomato Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Alu Mudhkura, Tomato Louki Channa, Green Peas Rice, Dal Makhani, Mango Pickle, Brown Rice, Samalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Masala Palli and Badam Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Methi Paneer, Chicken Curry, Rasam, Ginger Palli Chutney, Dhal Pancharatan, Onion Pachadi, Curd, Mango Pickle, Fried Rice"
            },
            4: { 
                morning: "Idly, Chapati, Wheat Veg Upma, Tiffin Sambar, Garlic Coconut Chutney, Coriander Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Dondakai 65, Cabbage Aloo Curry, Kitchadi, Dal Tadka, Cauliflower Pickle, Brown Rice, Korralu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Pastry and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Potato Chips, Tindle Masala, Egg Curry, Garlic Coconut Chutney, Yellow Mong Dal Fry, Soorakai Pachadi, Curd, Cauliflower Pickle, Banana"
            },
            5: { 
                morning: "Idly, Attukulu, Tomato Rawa Bath, Tiffin Sambar, Mirchi Palli Chutney, Ginger Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Gabbage Pakodi, Alu Capsicum Masala, Mango Rice, Rajma Dal, Mango Pickle, Brown Rice, Oodalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Basundi and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Cabbage Fry, Chicken Curry, Veg Sambar, Mirchi Palli Chutney, Yellow Dal Masala, Gongura Pachadi, Curd, Mango Pickle, Fried Rice"
            },
            6: { 
                morning: "Idly, Uthappam, Tomato Bath, Sambar, Ginger Coconut Chutney, Dal Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Fryams, Alu Kabuli Channa Masala, Tamarind Rice, Dal Pancharatan, Cauliflower Pickle, Brown Rice, Samalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Mirchi Baji and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Alu Chips, Beans Carrot Kurma, Pappu Saru Rasam, Ginger Coconut Chutney, Yellow Mong Dal, Bendakai Pachadi, Curd, Cauliflower Pickle, Fried Rice"
            }
        },
                tulip: {
                    0: { 
                morning: "Idly, Semiya Bath, Tiffin Sambar, Garlic Peanut Chutney, Onion & Tomato Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Alu Pusa Fry, Panner Capsicum, Veg Biryani, Veg Katta, Mango Pickle, Chicken Masala, Curd, Onion Raitha",
                snacks: "Biscuit and Tea, Milk",
                dinner: "Plain Rice, Veg Salad, Chapati, Carrot Beans White Peas Dry, Garlic Peanut Chutney, Rasam, Kandhi Pachadi, Curd, Mango Pickle, Fried Rice"
            },
            1: { 
                morning: "Idly, Mysore Bajji, Wheat Rava Upma, Tiffin Sambar, Peanut Chutney, Mint Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Sorakai 65, Mix Veg Curry, Curry Leaves Rice, Mixed Dal, Mango Pickle, Brown Rice, Arikalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Egg and Curry Puff and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Carrot Fry, Boiled Egg, Veg Sambar, Peanut Chutney, Dhal Tadka, Vannagai Pachadi, Curd, Mango Pickle, Semiya Kesari"
            },
                    
            2: { 
                morning: "Idly, Onion Dosa, Masala Phoa, Tiffin Sambar, Coconut Chutney, Onion Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Ladishfinger Fry, Aloo Green Peas Curry, Tomato Rice, Yellow Dal, Cauliflower Pickle, Brown Rice, Oodalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Dilpasand and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Egg Burji, Channa Masala, Sambar, Coconut Chutney, Rajma Dhal, Dhondakai Pachadi, Curd, Cauliflower Pickle, Fried Rice"
            },
            3: { 
                morning: "Idly, Rava Upma, Attukulu Upma, Tiffin Sambar, Ginger Palli Chutney, Tomato Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Alu Mudhkura, Tomato Louki Channa, Green Peas Rice, Dal Makhani, Mango Pickle, Brown Rice, Samalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Masala Palli and Badam Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Methi Paneer, Chicken Curry, Rasam, Ginger Palli Chutney, Dhal Pancharatan, Onion Pachadi, Curd, Mango Pickle, Fried Rice"
            },
            4: { 
                morning: "Idly, Chapati, Wheat Veg Upma, Tiffin Sambar, Garlic Coconut Chutney, Coriander Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Dondakai 65, Cabbage Aloo Curry, Kitchadi, Dal Tadka, Cauliflower Pickle, Brown Rice, Korralu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Pastry and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Potato Chips, Tindle Masala, Egg Curry, Garlic Coconut Chutney, Yellow Mong Dal Fry, Soorakai Pachadi, Curd, Cauliflower Pickle, Banana"
            },
            5: { 
                morning: "Idly, Attukulu, Tomato Rawa Bath, Tiffin Sambar, Mirchi Palli Chutney, Ginger Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Gabbage Pakodi, Alu Capsicum Masala, Mango Rice, Rajma Dal, Mango Pickle, Brown Rice, Oodalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Basundi and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Cabbage Fry, Chicken Curry, Veg Sambar, Mirchi Palli Chutney, Yellow Dal Masala, Gongura Pachadi, Curd, Mango Pickle, Fried Rice"
            },
            6: { 
                morning: "Idly, Uthappam, Tomato Bath, Sambar, Ginger Coconut Chutney, Dal Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Fryams, Alu Kabuli Channa Masala, Tamarind Rice, Dal Pancharatan, Cauliflower Pickle, Brown Rice, Samalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Mirchi Baji and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Alu Chips, Beans Carrot Kurma, Pappu Saru Rasam, Ginger Coconut Chutney, Yellow Mong Dal, Bendakai Pachadi, Curd, Cauliflower Pickle, Fried Rice"
            }
        },      
        
                kanchanaganga: {
                        0: { 
                morning: "Idly, Semiya Bath, Tiffin Sambar, Garlic Peanut Chutney, Onion & Tomato Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Alu Pusa Fry, Panner Capsicum, Veg Biryani, Veg Katta, Mango Pickle, Chicken Masala, Curd, Onion Raitha",
                snacks: "Biscuit and Tea, Milk",
                dinner: "Plain Rice, Veg Salad, Chapati, Carrot Beans White Peas Dry, Garlic Peanut Chutney, Rasam, Kandhi Pachadi, Curd, Mango Pickle, Fried Rice"
            },
            1: { 
                morning: "Idly, Mysore Bajji, Wheat Rava Upma, Tiffin Sambar, Peanut Chutney, Mint Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Sorakai 65, Mix Veg Curry, Curry Leaves Rice, Mixed Dal, Mango Pickle, Brown Rice, Arikalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Pani Poori and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Carrot Fry, Boiled Egg, Veg Sambar, Peanut Chutney, Dhal Tadka, Vannagai Pachadi, Curd, Mango Pickle, Semiya Kesari"
            },
            2: { 
                morning: "Idly, Onion Dosa, Masala Phoa, Tiffin Sambar, Coconut Chutney, Onion Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Ladishfinger Fry, Aloo Green Peas Curry, Tomato Rice, Yellow Dal, Cauliflower Pickle, Brown Rice, Oodalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Dilpasand and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Egg Burji, Channa Masala, Sambar, Coconut Chutney, Rajma Dhal, Dhondakai Pachadi, Curd, Cauliflower Pickle, Fried Rice"
            },
            3: { 
                morning: "Idly, Rava Upma, Attukulu Upma, Tiffin Sambar, Ginger Palli Chutney, Tomato Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Alu Mudhkura, Tomato Louki Channa, Green Peas Rice, Dal Makhani, Mango Pickle, Brown Rice, Samalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Masala Palli and Badam Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Methi Paneer, Chicken Curry, Rasam, Ginger Palli Chutney, Dhal Pancharatan, Onion Pachadi, Curd, Mango Pickle, Fried Rice"
            },
            4: { 
                morning: "Idly, Chapati, Wheat Veg Upma, Tiffin Sambar, Garlic Coconut Chutney, Coriander Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Dondakai 65, Cabbage Aloo Curry, Kitchadi, Dal Tadka, Cauliflower Pickle, Brown Rice, Korralu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Pastry and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Potato Chips, Tindle Masala, Egg Curry, Garlic Coconut Chutney, Yellow Mong Dal Fry, Soorakai Pachadi, Curd, Cauliflower Pickle, Banana"
            },
            5: { 
                morning: "Idly, Attukulu, Tomato Rawa Bath, Tiffin Sambar, Mirchi Palli Chutney, Ginger Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Gabbage Pakodi, Alu Capsicum Masala, Mango Rice, Rajma Dal, Mango Pickle, Brown Rice, Oodalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Basundi and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Cabbage Fry, Chicken Curry, Veg Sambar, Mirchi Palli Chutney, Yellow Dal Masala, Gongura Pachadi, Curd, Mango Pickle, Fried Rice"
            },
            6: { 
                morning: "Idly, Uthappam, Tomato Bath, Sambar, Ginger Coconut Chutney, Dal Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Fryams, Alu Kabuli Channa Masala, Tamarind Rice, Dal Pancharatan, Cauliflower Pickle, Brown Rice, Samalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Mirchi Baji and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Alu Chips, Beans Carrot Kurma, Pappu Saru Rasam, Ginger Coconut Chutney, Yellow Mong Dal, Bendakai Pachadi, Curd, Cauliflower Pickle, Fried Rice"
            }
        },  
            aravalivindhya: {
                        0: { 
                morning: "Idly, Semiya Bath, Tiffin Sambar, Garlic Peanut Chutney, Onion & Tomato Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Alu Pusa Fry, Panner Capsicum, Veg Biryani, Veg Katta, Mango Pickle, Chicken Masala, Curd, Onion Raitha",
                snacks: "Biscuit and Tea, Milk",
                dinner: "Plain Rice, Veg Salad, Chapati, Carrot Beans White Peas Dry, Garlic Peanut Chutney, Rasam, Kandhi Pachadi, Curd, Mango Pickle, Fried Rice"
            },
            1: { 
                morning: "Idly, Mysore Bajji, Wheat Rava Upma, Tiffin Sambar, Peanut Chutney, Mint Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Sorakai 65, Mix Veg Curry, Curry Leaves Rice, Mixed Dal, Mango Pickle, Brown Rice, Arikalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Pani Poori and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Carrot Fry, Boiled Egg, Veg Sambar, Peanut Chutney, Dhal Tadka, Vannagai Pachadi, Curd, Mango Pickle, Semiya Kesari"
            },
            2: { 
                morning: "Idly, Onion Dosa, Masala Phoa, Tiffin Sambar, Coconut Chutney, Onion Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Ladishfinger Fry, Aloo Green Peas Curry, Tomato Rice, Yellow Dal, Cauliflower Pickle, Brown Rice, Oodalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Dilpasand and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Egg Burji, Channa Masala, Sambar, Coconut Chutney, Rajma Dhal, Dhondakai Pachadi, Curd, Cauliflower Pickle, Fried Rice"
            },
            3: { 
                morning: "Idly, Rava Upma, Attukulu Upma, Tiffin Sambar, Ginger Palli Chutney, Tomato Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Alu Mudhkura, Tomato Louki Channa, Green Peas Rice, Dal Makhani, Mango Pickle, Brown Rice, Samalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Masala Palli and Badam Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Methi Paneer, Chicken Curry, Rasam, Ginger Palli Chutney, Dhal Pancharatan, Onion Pachadi, Curd, Mango Pickle, Fried Rice"
            },
            4: { 
                morning: "Idly, Chapati, Wheat Veg Upma, Tiffin Sambar, Garlic Coconut Chutney, Coriander Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Dondakai 65, Cabbage Aloo Curry, Kitchadi, Dal Tadka, Cauliflower Pickle, Brown Rice, Korralu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Pastry and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Potato Chips, Tindle Masala, Egg Curry, Garlic Coconut Chutney, Yellow Mong Dal Fry, Soorakai Pachadi, Curd, Cauliflower Pickle, Banana"
            },
            5: { 
                morning: "Idly, Attukulu, Tomato Rawa Bath, Tiffin Sambar, Mirchi Palli Chutney, Ginger Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Gabbage Pakodi, Alu Capsicum Masala, Mango Rice, Rajma Dal, Mango Pickle, Brown Rice, Oodalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Basundi and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Cabbage Fry, Chicken Curry, Veg Sambar, Mirchi Palli Chutney, Yellow Dal Masala, Gongura Pachadi, Curd, Mango Pickle, Fried Rice"
            },
            6: { 
                morning: "Idly, Uthappam, Tomato Bath, Sambar, Ginger Coconut Chutney, Dal Chutney, Jam, Bread, Cornflakes, Veg Sprouts, Veg Salad, Mayonnaise, Milk, Coffee, Boiled Egg",
                lunch: "Plain Rice, Salad, Chapati, Fryams, Alu Kabuli Channa Masala, Tamarind Rice, Dal Pancharatan, Cauliflower Pickle, Brown Rice, Samalu Millet, Curd, Butter Milk, Crispy Fried Potato",
                snacks: "Mirchi Baji and Tea, Milk",
                dinner: "Plain Rice, Mix Veg Salad, Idly, Chapati, Alu Chips, Beans Carrot Kurma, Pappu Saru Rasam, Ginger Coconut Chutney, Yellow Mong Dal, Bendakai Pachadi, Curd, Cauliflower Pickle, Fried Rice"
            }
        },
};


  
            // Dynamically update menus for all hostels
['himalaya', 'tulip', 'kanchanaganga', 'aravalivindhya'].forEach(hostel => {
    if (menu[hostel] && menu[hostel][today]) {
        document.getElementById(`${hostel}-morning`).innerText = menu[hostel][today].morning;
        document.getElementById(`${hostel}-lunch`).innerText = menu[hostel][today].lunch;
        document.getElementById(`${hostel}-snacks`).innerText = menu[hostel][today].snacks;
        document.getElementById(`${hostel}-dinner`).innerText = menu[hostel][today].dinner;
    } else {
        console.warn(`Menu data for ${hostel} on ${today} is missing!`);
    }
});

// Ratings object for hostels by days of the week
const ratings = {
    himalaya: { 0: 4, 1: 3.5, 2: 4, 3: 3.8, 4: 3, 5: 4.2, 6: 3.9 },
    tulip: { 0: 3.5, 1: 3.2, 2: 4, 3: 4.1, 4: 3.8, 5: 4.3, 6: 3.7 },
    kanchanaganga: { 0: 3.8, 1: 3.4, 2: 4, 3: 3.6, 4: 3.9, 5: 4, 6: 3.5 },
    aravalivindhya: { 0: 3.7, 1: 3.3, 2: 4.1, 3: 4, 4: 3.5, 5: 4.2, 6: 3.6 }
};


            document.querySelectorAll('.ratings').forEach(ratingElement => {
                const hostel = ratingElement.dataset.hostel;
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
            document.getElementById('hostel-selection').classList.remove('hidden');
            document.getElementById('hostel-selection').classList.add('fade-in');
            document.getElementById('himalaya-menu').classList.add('hidden');
            document.getElementById('tulip-menu').classList.add('hidden');
            document.getElementById('kanchanaganga-menu').classList.add('hidden');
            document.getElementById('aravalivindhya-menu').classList.add('hidden');
            history.pushState({ page: "home" }, "", "#home");
        }

        function rateMenu(hostel, rating) {
    const stars = document.querySelectorAll(`#${hostel}-menu .star`);
    
    // Apply the rating (add/remove the "selected" class) with smooth transition
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
    
    // Optionally call submitFeedback to save the rating
    submitFeedback(hostel, rating);
}

function updateDate() {
    const currentDateElement = document.querySelectorAll('.current-date');
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-US', options);
    
    currentDateElement.forEach(element => {
        element.textContent = dateString;
    });
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', updateDate);

        window.onload = function() {
            updateMenu();
            updateDate();
            setTimeout(() => {
                document.getElementById('logo-overlay').style.display = 'none';
            }, 1000);

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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ONE MESS - KLU Hostels</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        :root {
            --klu-red: #d22630;
            --klu-dark-red: #b01e27;
            --light-gray: #f8f9fa;
            --dark-gray: #333;
            --white: #fff;
            --accent-color: #ffcc00;
            --transition-speed: 0.4s;
            --page-transition: 0.6s;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: var(--light-gray);
            overflow-x: hidden;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* Header Styles with Animation */
        header {
            background-color: var(--white);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 100;
            transition: all var(--transition-speed);
        }

        header.scrolled {
            padding: 5px 0;
            box-shadow: 0 4px 30px rgba(210, 38, 48, 0.2);
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
        }

        .logo {
            display: flex;
            align-items: center;
        }

        .logo img {
            height: 50px;
            margin-right: 15px;
            transition: transform var(--transition-speed);
        }

        .logo:hover img {
            transform: scale(1.1) rotate(5deg);
        }

        .logo h1 {
            color: var(--klu-red);
            font-size: 28px;
            font-weight: 700;
            position: relative;
        }

        .logo h1::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 3px;
            background-color: var(--klu-red);
            transition: width var(--transition-speed);
        }

        .logo:hover h1::after {
            width: 100%;
        }

        .nav-links {
            display: flex;
            align-items: center;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--dark-gray);
            margin-left: 25px;
            font-size: 18px;
            position: relative;
            transition: color var(--transition-speed);
            padding: 5px 0;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--klu-red);
            transition: width var(--transition-speed);
        }

        .nav-links a:hover, .nav-links a.active {
            color: var(--klu-red);
        }

        .nav-links a:hover::after, .nav-links a.active::after {
            width: 100%;
        }

        /* Page System */
        .page {
            min-height: 80vh;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            padding-top: 80px; /* Account for header */
            transition: transform var(--page-transition) ease-in-out, opacity var(--page-transition) ease-in-out;
        }

        .page.active {
            transform: translateX(0);
            opacity: 1;
            z-index: 1;
        }

        .page.inactive {
            transform: translateX(100%);
            opacity: 0;
            z-index: 0;
        }

        /* Hostel Selection Page */
        #hostel-selection-page {
            background-color: var(--light-gray);
        }

        /* Menu Page */
        #menu-page {
            background-color: var(--light-gray);
        }

        /* Main Content Styles */
        .main-content {
            padding: 40px 0;
        }

        .welcome-message {
            text-align: center;
            margin: 30px 0 50px;
            animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .welcome-message h2 {
            font-size: 36px;
            color: var(--klu-red);
            margin-bottom: 15px;
        }

        .welcome-message p {
            font-size: 18px;
            color: var(--dark-gray);
            max-width: 700px;
            margin: 0 auto;
        }

        .date-display {
            background: linear-gradient(135deg, var(--klu-red), var(--klu-dark-red));
            color: var(--white);
            padding: 12px 25px;
            border-radius: 30px;
            display: inline-block;
            margin-bottom: 30px;
            font-weight: 500;
            box-shadow: 0 4px 15px rgba(210, 38, 48, 0.3);
            transition: transform var(--transition-speed);
        }

        .date-display:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(210, 38, 48, 0.4);
        }

        /* Section Title Animation */
        .section-title {
            font-size: 28px;
            color: var(--dark-gray);
            margin-bottom: 25px;
            padding-bottom: 10px;
            border-bottom: 2px solid var(--klu-red);
            position: relative;
            display: inline-block;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 50px;
            height: 2px;
            background-color: var(--accent-color);
            transition: width var(--transition-speed);
        }

        .section-title:hover::after {
            width: 100%;
        }

        /* Hostel Selection Styles with Enhanced Animation */
        .hostels-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 25px;
            margin-bottom: 40px;
        }

        .hostel-card {
            background-color: var(--white);
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
            transition: all var(--transition-speed);
            cursor: pointer;
            position: relative;
            transform: translateY(0);
        }

        .hostel-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }

        .hostel-image-container {
            position: relative;
            height: 180px;
            overflow: hidden;
        }

        .hostel-image {
            height: 100%;
            width: 100%;
            object-fit: cover;
            transition: transform 0.8s;
        }

        .hostel-card:hover .hostel-image {
            transform: scale(1.1);
        }

        .hostel-type-badge {
            position: absolute;
            top: 15px;
            right: 15px;
            background: linear-gradient(135deg, var(--klu-red), var(--klu-dark-red));
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: 500;
            font-size: 14px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .hostel-info {
            padding: 20px;
        }

        .hostel-name {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--dark-gray);
        }

        .hostel-description {
            color: #666;
            font-size: 14px;
            margin-bottom: 15px;
            line-height: 1.5;
        }

        .hostel-capacity {
            display: flex;
            align-items: center;
            color: #666;
            font-size: 14px;
            margin-bottom: 15px;
        }

        .hostel-capacity i {
            color: var(--klu-red);
            margin-right: 8px;
        }

        .select-hostel-btn {
            background: linear-gradient(135deg, var(--klu-red), var(--klu-dark-red));
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 30px;
            font-weight: 500;
            cursor: pointer;
            transition: all var(--transition-speed);
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .select-hostel-btn i {
            margin-left: 8px;
            transition: transform var(--transition-speed);
        }

        .select-hostel-btn:hover {
            box-shadow: 0 5px 15px rgba(210, 38, 48, 0.3);
            transform: translateY(-3px);
        }

        .select-hostel-btn:hover i {
            transform: translateX(5px);
        }

        /* Back Button */
        .back-button {
            background: linear-gradient(135deg, var(--dark-gray), #555);
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 30px;
            font-weight: 500;
            cursor: pointer;
            transition: all var(--transition-speed);
            display: inline-flex;
            align-items: center;
            margin-bottom: 20px;
        }

        .back-button i {
            margin-right: 8px;
            transition: transform var(--transition-speed);
        }

        .back-button:hover {
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            transform: translateY(-3px);
        }

        .back-button:hover i {
            transform: translateX(-5px);
        }

        /* Selected Hostel Header */
        .selected-hostel-header {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
            background-color: var(--white);
            border-radius: 15px;
            padding: 20px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        }

        .selected-hostel-image {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 20px;
            border: 3px solid var(--klu-red);
        }

        .selected-hostel-info h2 {
            font-size: 28px;
            color: var(--klu-red);
            margin-bottom: 5px;
        }

        .selected-hostel-info p {
            color: #666;
            font-size: 16px;
        }

        .selected-hostel-badge {
            background: linear-gradient(135deg, var(--klu-red), var(--klu-dark-red));
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-weight: 500;
            font-size: 14px;
            display: inline-block;
            margin-top: 10px;
        }

        /* Day Selector */
        .day-selector {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
            background-color: var(--white);
            border-radius: 15px;
            padding: 15px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
            overflow-x: auto;
        }

        .day-button {
            background: none;
            border: none;
            padding: 10px 20px;
            margin: 0 5px;
            border-radius: 30px;
            font-weight: 500;
            cursor: pointer;
            transition: all var(--transition-speed);
            color: var(--dark-gray);
            position: relative;
        }

        .day-button::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 0;
            height: 3px;
            background-color: var(--klu-red);
            transition: width var(--transition-speed), left var(--transition-speed);
        }

        .day-button:hover {
            color: var(--klu-red);
        }

        .day-button:hover::after {
            width: 80%;
            left: 10%;
        }

        .day-button.active {
            background: linear-gradient(135deg, var(--klu-red), var(--klu-dark-red));
            color: white;
            box-shadow: 0 4px 10px rgba(210, 38, 48, 0.3);
        }

        .day-button.active::after {
            width: 0;
        }

        .day-button.today {
            position: relative;
        }

        .day-button.today::before {
            content: '•';
            position: absolute;
            top: 0;
            right: 10px;
            color: var(--accent-color);
            font-size: 20px;
        }

        /* Menu Styles */
        .menu-section {
            background-color: var(--white);
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            margin-bottom: 40px;
            animation: slideUp 0.6s ease-out;
        }

        @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* Daily Rating */
        .daily-rating {
            background: linear-gradient(135deg, #f8f9fa, #e9ecef);
            border-radius: 10px;
            padding: 15px;
            margin-bottom: 25px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .rating-title {
            font-size: 18px;
            font-weight: 600;
            color: var(--dark-gray);
        }

        .rating-stars {
            display: flex;
            align-items: center;
        }

        .rating-stars i {
            color: var(--accent-color);
            font-size: 20px;
            margin-right: 3px;
        }

        .rating-value {
            margin-left: 10px;
            font-weight: 600;
            color: var(--dark-gray);
        }

        /* Enhanced Meal Tabs */
        .meal-tabs {
            display: flex;
            margin-bottom: 25px;
            background-color: #f1f3f5;
            border-radius: 50px;
            padding: 5px;
            position: relative;
            overflow: hidden;
        }

        .meal-tab {
            padding: 12px 25px;
            cursor: pointer;
            font-weight: 500;
            color: var(--dark-gray);
            border-radius: 50px;
            transition: all var(--transition-speed);
            z-index: 1;
            flex: 1;
            text-align: center;
            position: relative;
        }

        .meal-tab:hover {
            color: var(--klu-red);
        }

        .meal-tab.active {
            color: white;
        }

        .tab-indicator {
            position: absolute;
            height: 80%;
            top: 10%;
            left: 0.5%;
            width: 24.5%;
            background: linear-gradient(135deg, var(--klu-red), var(--klu-dark-red));
            border-radius: 50px;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
            z-index: 0;
        }

        /* Enhanced Meal Content */
        .meal-content {
            display: none;
            transform: translateX(20px);
            opacity: 0;
            transition: all 0.4s;
        }

        .meal-content.active {
            display: block;
            animation: fadeIn 0.5s forwards;
        }

        .food-item {
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            background-color: #f8f9fa;
            transition: all var(--transition-speed);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
        }

        .food-item:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            background-color: #fff;
        }

        .food-icon {
            margin-right: 15px;
            font-size: 24px;
            background-color: #fff;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        }

        .food-details {
            flex: 1;
        }

        .food-name {
            font-size: 18px;
            color: var(--dark-gray);
            font-weight: 500;
            margin-bottom: 5px;
        }

        .food-description {
            font-size: 14px;
            color: #666;
        }

        .food-rating {
            display: flex;
            align-items: center;
            margin-left: 15px;
        }

        .food-rating i {
            color: var(--accent-color);
            margin-right: 2px;
        }

        /* Footer Styles with Animation */
        footer {
            background: linear-gradient(135deg, #333, #222);
            color: var(--white);
            padding: 50px 0 30px;
            position: relative;
            margin-top: 100px;
        }

        footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--klu-red), var(--accent-color), var(--klu-red));
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .footer-section {
            flex: 1;
            min-width: 250px;
            margin-bottom: 30px;
            padding: 0 20px;
        }

        .footer-title {
            font-size: 20px;
            margin-bottom: 20px;
            color: var(--white);
            font-weight: 600;
            position: relative;
            padding-bottom: 10px;
        }

        .footer-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 2px;
            background-color: var(--klu-red);
        }

        .footer-links a {
            display: block;
            color: #bbb;
            margin-bottom: 10px;
            text-decoration: none;
            transition: all var(--transition-speed);
            position: relative;
            padding-left: 15px;
        }

        .footer-links a::before {
            content: '→';
            position: absolute;
            left: 0;
            transition: transform var(--transition-speed);
        }

        .footer-links a:hover {
            color: var(--white);
            padding-left: 20px;
        }

        .footer-links a:hover::before {
            transform: translateX(5px);
        }

        .social-links {
            display: flex;
            margin-top: 20px;
        }

        .social-links a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #444;
            color: var(--white);
            margin-right: 10px;
            transition: all var(--transition-speed);
        }

        .social-links a:hover {
            background-color: var(--klu-red);
            transform: translateY(-5px);
        }

        .copyright {
            text-align: center;
            padding-top: 30px;
            border-top: 1px solid #444;
            margin-top: 30px;
            color: #aaa;
            font-size: 14px;
        }

        .developer {
            color: var(--accent-color);
            font-weight: 500;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
            .hostels-grid {
                grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            }

            .meal-tabs {
                overflow-x: auto;
                white-space: nowrap;
                justify-content: flex-start;
                padding: 5px;
            }

            .meal-tab {
                padding: 10px 15px;
                flex: none;
                width: auto;
            }

            .tab-indicator {
                display: none;
            }

            .meal-tab.active {
                background: linear-gradient(135deg, var(--klu-red), var(--klu-dark-red));
            }

            .footer-section {
                flex: 100%;
            }

            .selected-hostel-header {
                flex-direction: column;
                text-align: center;
            }

            .selected-hostel-image {
                margin-right: 0;
                margin-bottom: 15px;
            }

            .day-selector {
                padding: 10px;
            }

            .day-button {
                padding: 8px 15px;
                font-size: 14px;
            }
        }

        @media (max-width: 480px) {
            .header-content {
                flex-direction: column;
                text-align: center;
            }

            .logo {
                margin-bottom: 15px;
            }

            .nav-links {
                justify-content: center;
            }

            .nav-links a {
                margin: 0 10px;
                font-size: 16px;
            }

            .hostels-grid {
                grid-template-columns: 1fr;
            }

            .date-display {
                width: 100%;
                text-align: center;
            }

            .daily-rating {
                flex-direction: column;
                align-items: flex-start;
            }

            .rating-stars {
                margin-top: 10px;
            }

            .day-selector {
                overflow-x: auto;
                justify-content: flex-start;
            }

            .day-button {
                padding: 8px 12px;
                margin: 0 3px;
                font-size: 13px;
                white-space: nowrap;
            }
        }
    </style>
</head>
<body>
    <header id="header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <img src="https://assets.onecompiler.app/42fq36qvd/433s28xjq/kloo_app_logo_enhanced.jpg" alt="KLU Logo">
                    <h1>ONE MESS</h1>
                </div>
                <div class="nav-links">
                    <a href="#" class="active"><i class="fas fa-home"></i> Home</a>
                    <a href="#"><i class="fas fa-utensils"></i> Menu</a>
                    <a href="#mess.html"><i class="fas fa-building"></i> Hostels</a>
                    <a href="#"><i class="fas fa-phone"></i> Contact</a>
                </div>
            </div>
        </div>
    </header>

    <!-- Hostel Selection Page -->
    <div id="hostel-selection-page" class="page active">
        <div class="container main-content">
            <div class="date-display" id="current-date">
                <i class="fas fa-calendar-alt"></i> Thursday, April 3, 2025
            </div>

            <div class="welcome-message">
                <h2>Welcome to KLU ONE MESS Platform</h2>
                <p>Select your hostel below to view today's menu and ratings. Our digital platform provides real-time updates on meal schedules and menu items for all KLU hostels.</p>
            </div>

            <h2 class="section-title">Select Your Hostel</h2>
            <div class="hostels-grid">
                <div class="hostel-card" data-hostel="himalaya" data-type="Girls">
                    <div class="hostel-image-container">
<img src="https://assets.onecompiler.app/42fq36qvd/42yrqetcx/Screenshot%202024-11-21%20105958.png" 
     alt="Himalaya Girls Hostel" 
     class="hostel-image" 
     width="300" height="180">
<div class="hostel-type-badge">Girls</div>

                    </div>
                    <div class="hostel-info">
                        <h3 class="hostel-name">Himalaya Hostel</h3>
                        <p class="hostel-description">Modern accommodation with premium facilities for female students.</p>
                        <div class="hostel-capacity">
                            <i class="fas fa-users"></i> 
                        </div>
                        <button class="select-hostel-btn">View Menu <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                <div class="hostel-card" data-hostel="tulip" data-type="Boys">
                    <div class="hostel-image-container">
                        <img src="https://assets.onecompiler.app/42fq36qvd/42yrzfg8u/tulip.jpg" alt="Tulip Boys Hostel" class="hostel-image" height="180" width="300">

                        <div class="hostel-type-badge">Boys</div>
                    </div>
                    <div class="hostel-info">
                        <h3 class="hostel-name">Tulip Hostel</h3>
                        <p class="hostel-description">Spacious rooms with excellent sports facilities for male students.</p>
                        <div class="hostel-capacity">
                            <i class="fas fa-users"></i> 
                        </div>
                        <button class="select-hostel-btn">View Menu <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                <div class="hostel-card" data-hostel="kanchanaganga" data-type="Girls">
                    <div class="hostel-image-container">
                        <img src="https://assets.onecompiler.app/42fq36qvd/4325r2b7b/kanchana.jpg" alt="Kanchanaganga Girls Hostel" class="hostel-image" height="180" width="300">

                        <div class="hostel-type-badge">Girls</div>
                    </div>
                    <div class="hostel-info">
                        <h3 class="hostel-name">Kanchanaganga Hostel</h3>
                        <p class="hostel-description">Elegant accommodation with study areas and recreation facilities.</p>
                        <div class="hostel-capacity">
                            <i class="fas fa-users"></i>
                        </div>
                        <button class="select-hostel-btn">View Menu <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                <div class="hostel-card" data-hostel="aravali" data-type="Boys">
                    <div class="hostel-image-container">
                       <img src="https://assets.onecompiler.app/42fq36qvd/4325r2b7b/aravali.jpg" alt="Aravali Vindhya Boys Hostel" class="hostel-image" height="180" width="300">

                        <div class="hostel-type-badge">Boys</div>
                    </div>
                    <div class="hostel-info">
                        <h3 class="hostel-name">Aravali Vindhya Hostel</h3>
                        <p class="hostel-description">Contemporary living spaces with modern amenities for male students.</p>
                        <div class="hostel-capacity">
                            <i class="fas fa-users"></i> 
                        </div>
                        <button class="select-hostel-btn">View Menu <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Menu Page -->
    <div id="menu-page" class="page inactive">
        <div class="container main-content">
            <button class="back-button" id="back-button">
                <i class="fas fa-arrow-left"></i> Back to Hostels
            </button>

            <div class="date-display">
                <i class="fas fa-calendar-alt"></i> <span id="menu-date">Thursday, April 3, 2025</span>
            </div>

            <div class="selected-hostel-header">
                <img src="/placeholder.svg?height=100&width=100" alt="Selected Hostel" class="selected-hostel-image" id="selected-hostel-img">
                <div class="selected-hostel-info">
                    <h2 id="selected-hostel-title">Hostel Name</h2>
                    <p id="selected-hostel-description">Hostel description will appear here</p>
                    <div class="selected-hostel-badge" id="selected-hostel-type">Hostel Type</div>
                </div>
            </div>

            <!-- Day Selector -->
            <div class="day-selector">
                <button class="day-button" data-day="monday">Monday</button>
                <button class="day-button" data-day="tuesday">Tuesday</button>
                <button class="day-button" data-day="wednesday">Wednesday</button>
                <button class="day-button" data-day="thursday">Thursday</button>
                <button class="day-button" data-day="friday">Friday</button>
                <button class="day-button" data-day="saturday">Saturday</button>
                <button class="day-button" data-day="sunday">Sunday</button>
            </div>

            <div class="menu-section">
                <div class="daily-rating">
                    <div class="rating-title">Today's Overall Rating</div>
                    <div class="rating-display">
                        <div class="rating-stars" id="overall-rating">
                            <!-- Stars will be added by JavaScript -->
                        </div>
                        <span class="rating-value" id="rating-value">0.0</span>
                    </div>
                </div>

                <div class="meal-tabs">
                    <div class="meal-tab active" data-meal="breakfast">
                        <i class="fas fa-mug-hot"></i> Morning
                    </div>
                    <div class="meal-tab" data-meal="lunch">
                        <i class="fas fa-hamburger"></i> Lunch
                    </div>
                    <div class="meal-tab" data-meal="snacks">
                        <i class="fas fa-cookie"></i> Snacks
                    </div>
                    <div class="meal-tab" data-meal="dinner">
                        <i class="fas fa-utensils"></i> Dinner
                    </div>
                    <div class="tab-indicator"></div>
                </div>

                <div class="meal-content active" id="breakfast">
                    <!-- Breakfast items will be added by JavaScript -->
                </div>

                <div class="meal-content" id="lunch">
                    <!-- Lunch items will be added by JavaScript -->
                </div>

                <div class="meal-content" id="snacks">
                    <!-- Snacks items will be added by JavaScript -->
                </div>

                <div class="meal-content" id="dinner">
                    <!-- Dinner items will be added by JavaScript -->
                </div>
            </div>
        </div>
    </div>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3 class="footer-title">About ONE MESS</h3>
                    <p>A centralized digital notice board for KLU hostel mess information, eliminating paper notices and ensuring all students have access to up-to-date meal information.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3 class="footer-title">Quick Links</h3>
                    <div class="footer-links">
                        <a href="#">Home</a>
                        <a href="#">Menu</a>
                        <a href="#">Hostels</a>
                        <a href="#">Contact</a>
                        <a href="#">Feedback</a>
                    </div>
                </div>
                <div class="footer-section">
                    <h3 class="footer-title">Contact</h3>
                    <div class="footer-links">
                        <a href="#"><i class="fas fa-map-marker-alt"></i> KL University, Vaddeswaram</a>
                        <a href="#"><i class="fas fa-envelope"></i> info@kluniversity.in</a>
                        <a href="#"><i class="fas fa-phone"></i> +91 123-456-7890</a>
                        <a href="#"><i class="fas fa-clock"></i> Mon - Fri: 9:00 AM - 5:00 PM</a>
                    </div>
                </div>
            </div>
            <div class="copyright">
                &copy; 2025 KL University. All rights reserved. Developed by <span class="developer">Sumanth</span>.
            </div>
        </div>
    </footer>

    <script>
        // Menu data for each hostel organized by days of the week
        const hostelMenus = {
            himalaya: {
                monday: {
                    breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Mysore Bajji", description: "Deep-fried spicy fritters", icon: "🍥", rating: 4.3 },
    { name: "Wheat Rava Upma", description: "Savory porridge made from wheat semolina", icon: "🍚", rating: 4.0 },
    { name: "Tiffin Sambar", description: "South Indian lentil stew", icon: "🥘", rating: 4.3 },
    { name: "Peanut Chutney", description: "Creamy peanut-based chutney", icon: "🥜", rating: 4.1 },
    { name: "Mint Chutney", description: "Refreshing mint-flavored chutney", icon: "🌿", rating: 4.2 },
    { name: "Jam", description: "Fruit-based spread", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft slices of fresh bread", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy corn-based cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Healthy sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Mixed fresh vegetables", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Smooth and creamy condiment", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy drink", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Strong brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Perfectly boiled eggs", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh crunchy mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft Indian bread", icon: "🍞", rating: 4.3 },
    { name: "Sorakai 65", description: "Crispy bottle gourd fry", icon: "🥬", rating: 4.2 },
    { name: "Mix Veg Curry", description: "Assorted vegetables in spicy gravy", icon: "🥘", rating: 4.3 },
    { name: "Curry Leaves Rice", description: "Fragrant rice with curry leaves", icon: "🌿", rating: 4.2 },
    { name: "Mixed Dal", description: "Lentil medley with spices", icon: "🥣", rating: 4.0 },
    { name: "Mango Pickle", description: "Spicy and tangy pickle", icon: "🥭", rating: 4.1 },
    { name: "Brown Rice", description: "Nutritious brown rice", icon: "🍘", rating: 4.2 },
    { name: "Arikalu Millet", description: "Healthy millet variety", icon: "🌾", rating: 4.1 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Spiced yogurt drink", icon: "🥛", rating: 4.0 },
    { name: "Crispy Fried Potato", description: "Golden and crispy potato fries", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Pani Poori and Tea", description: "Crispy street snack with flavored water", icon: "🥟☕", rating: 4.5 },
    { name: "Milk", description: "Hot or cold dairy drink", icon: "🥛", rating: 4.2 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Fresh veggie blend", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Carrot Fry", description: "Sautéed spiced carrots", icon: "🥕", rating: 4.2 },
    { name: "Boiled Egg", description: "Protein-rich eggs", icon: "🥚", rating: 4.3 },
    { name: "Veg Sambar", description: "Lentil-based veg stew", icon: "🥘", rating: 4.4 },
    { name: "Peanut Chutney", description: "Spicy and creamy chutney", icon: "🥜", rating: 4.1 },
    { name: "Dhal Tadka", description: "Yellow lentils tempered with spices", icon: "🍲", rating: 4.3 },
    { name: "Vankaya Pachadi", description: "Brinjal (eggplant) chutney", icon: "🍆", rating: 4.2 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Zesty mango condiment", icon: "🥭", rating: 4.1 },
    { name: "Semiya Kesari", description: "Sweet vermicelli dessert", icon: "🍮", rating: 4.5 }
]

                },
                tuesday: {
    
                   breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Onion Dosa", description: "Crispy crepe with caramelized onions", icon: "🥞", rating: 4.4 },
    { name: "Masala Poha", description: "Flattened rice cooked with spices", icon: "🍛", rating: 4.1 },
    { name: "Tiffin Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.3 },
    { name: "Coconut Chutney", description: "Creamy chutney made with coconut", icon: "🥥", rating: 4.2 },
    { name: "Onion Chutney", description: "Spicy chutney made with onions", icon: "🧅", rating: 4.0 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy cereal flakes", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Fresh chopped vegetables", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy dressing", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Fresh dairy milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Strong brewed beverage", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Perfectly cooked eggs", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh veggie mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Ladies Finger Fry", description: "Crispy okra fry", icon: "🟩", rating: 4.2 },
    { name: "Aloo Green Peas Curry", description: "Potatoes and peas in spicy gravy", icon: "🥔", rating: 4.3 },
    { name: "Tomato Rice", description: "Tangy tomato-flavored rice", icon: "🍅", rating: 4.2 },
    { name: "Yellow Dal", description: "Tempered yellow lentils", icon: "🍲", rating: 4.1 },
    { name: "Cauliflower Pickle", description: "Spicy cauliflower preserve", icon: "🥦", rating: 4.0 },
    { name: "Brown Rice", description: "Healthy whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Oodalu Millet", description: "Nutritious millet variety", icon: "🌾", rating: 4.1 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Spiced yogurt drink", icon: "🥛", rating: 4.0 },
    { name: "Crispy Fried Potato", description: "Golden fried potato slices", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Dilpasand and Tea", description: "Sweet puff pastry with tea", icon: "🥮☕", rating: 4.4 },
    { name: "Milk", description: "Fresh hot or cold milk", icon: "🥛", rating: 4.2 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Colorful veggie blend", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Egg Burji", description: "Spicy scrambled eggs", icon: "🍳", rating: 4.4 },
    { name: "Channa Masala", description: "Chickpeas cooked in rich gravy", icon: "🫘", rating: 4.3 },
    { name: "Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.4 },
    { name: "Coconut Chutney", description: "Chutney made from fresh coconut", icon: "🥥", rating: 4.2 },
    { name: "Rajma Dhal", description: "Kidney beans in spiced curry", icon: "🍛", rating: 4.3 },
    { name: "Dondakai Pachadi", description: "Ivy gourd chutney", icon: "🌿", rating: 4.2 },
    { name: "Curd", description: "Thick yogurt", icon: "🥣", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Spicy cauliflower condiment", icon: "🥦", rating: 4.0 },
    { name: "Fried Rice", description: "Rice stir-fried with vegetables", icon: "🍚", rating: 4.5 }
]

                },
                wednesday: {
                    breakfast: [
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Rava Upma", description: "Semolina cooked with spices and veggies", icon: "🍲", rating: 4.1 },
    { name: "Attukulu Upma", description: "Beaten rice cooked with veggies", icon: "🍛", rating: 4.0 },
    { name: "Tiffin Sambar", description: "South Indian lentil soup", icon: "🥘", rating: 4.3 },
    { name: "Ginger Palli Chutney", description: "Spicy ginger and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Tomato Chutney", description: "Tangy chutney made with tomatoes", icon: "🍅", rating: 4.1 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy corn cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Fresh chopped vegetable salad", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy condiment", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Strong brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Hard-boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh veggie mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Alu Mudhkura", description: "Potatoes cooked with amaranth leaves", icon: "🥬", rating: 4.2 },
    { name: "Tomato Louki Channa", description: "Bottle gourd and chickpea curry", icon: "🍅", rating: 4.2 },
    { name: "Green Peas Rice", description: "Rice flavored with green peas", icon: "🌾", rating: 4.3 },
    { name: "Dal Makhani", description: "Creamy black lentil curry", icon: "🍛", rating: 4.4 },
    { name: "Mango Pickle", description: "Spicy raw mango condiment", icon: "🥭", rating: 4.1 },
    { name: "Brown Rice", description: "Whole grain healthy rice", icon: "🍘", rating: 4.2 },
    { name: "Samalu Millet", description: "Traditional millet rice", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Spiced yogurt drink", icon: "🥛", rating: 4.1 },
    { name: "Crispy Fried Potato", description: "Golden crispy potato wedges", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Masala Palli", description: "Spiced peanuts", icon: "🥜", rating: 4.3 },
    { name: "Badam Milk", description: "Almond-flavored sweet milk", icon: "🥛", rating: 4.5 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Colorful salad with fresh veggies", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Soft whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Methi Paneer", description: "Fenugreek and paneer curry", icon: "🧀", rating: 4.4 },
    { name: "Chicken Curry", description: "Spicy chicken in gravy", icon: "🍗", rating: 4.5 },
    { name: "Rasam", description: "South Indian spicy tamarind soup", icon: "🥣", rating: 4.3 },
    { name: "Ginger Palli Chutney", description: "Zesty ginger and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Dal Pancharatan", description: "Mix of five lentils cooked with spices", icon: "🍲", rating: 4.4 },
    { name: "Onion Pachadi", description: "Onion-based tangy chutney", icon: "🧅", rating: 4.1 },
    { name: "Curd", description: "Thick natural yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Tangy and spicy mango pickle", icon: "🥭", rating: 4.1 },
    { name: "Fried Rice", description: "Rice tossed with veggies and spices", icon: "🍚", rating: 4.5 }
]

                },
                thursday: {
                    breakfast: [
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Wheat Veg Upma", description: "Wholesome upma with vegetables", icon: "🍲", rating: 4.1 },
    { name: "Tiffin Sambar", description: "Flavorful lentil soup", icon: "🥘", rating: 4.3 },
    { name: "Garlic Coconut Chutney", description: "Chutney with coconut and garlic twist", icon: "🧄", rating: 4.2 },
    { name: "Coriander Chutney", description: "Fresh chutney made from coriander leaves", icon: "🌿", rating: 4.1 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crunchy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted beans", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Fresh salad with seasonal vegetables", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy and tangy spread", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold fresh milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Aromatic hot coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Protein-rich boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Crunchy fresh vegetables", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Dondakai 65", description: "Crispy fried ivy gourd", icon: "🍽️", rating: 4.2 },
    { name: "Cabbage Aloo Curry", description: "Cabbage and potato curry", icon: "🥬", rating: 4.2 },
    { name: "Kitchadi", description: "Savory rice and lentil dish", icon: "🍛", rating: 4.3 },
    { name: "Dal Tadka", description: "Spiced yellow lentils", icon: "🥣", rating: 4.4 },
    { name: "Cauliflower Pickle", description: "Spicy pickle made with cauliflower", icon: "🥒", rating: 4.1 },
    { name: "Brown Rice", description: "Nutritious whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Korralu Millet", description: "High-fiber foxtail millet", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Cooling spiced yogurt drink", icon: "🥛", rating: 4.1 },
    { name: "Crispy Fried Potato", description: "Crispy potato bites", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Pastry", description: "Soft and sweet baked dessert", icon: "🧁", rating: 4.4 },
    { name: "Tea", description: "Refreshing Indian tea", icon: "🍵", rating: 4.5 },
    { name: "Milk", description: "Hot/cold dairy milk", icon: "🥛", rating: 4.3 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Chopped vegetables with dressing", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Potato Chips", description: "Crispy deep-fried potato slices", icon: "🥔", rating: 4.2 },
    { name: "Tindle Masala", description: "Tindle meat substitute in spicy masala", icon: "🌱", rating: 4.3 },
    { name: "Egg Curry", description: "Spiced egg gravy", icon: "🍛", rating: 4.4 },
    { name: "Garlic Coconut Chutney", description: "Chutney with garlic and coconut", icon: "🧄", rating: 4.2 },
    { name: "Yellow Mong Dal Fry", description: "Fried mung dal with spices", icon: "🍲", rating: 4.3 },
    { name: "Soorakai Pachadi", description: "Bottle gourd chutney", icon: "🥒", rating: 4.1 },
    { name: "Curd", description: "Plain thick yogurt", icon: "🥣", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Tangy cauliflower-based pickle", icon: "🥬", rating: 4.1 },
    { name: "Banana", description: "Fresh ripe banana", icon: "🍌", rating: 4.5 }
]

                },
                friday: {
                   breakfast: [
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Attukulu", description: "Flattened rice preparation", icon: "🍚", rating: 4.1 },
    { name: "Tomato Rawa Bath", description: "Semolina upma with tangy tomato flavor", icon: "🍅", rating: 4.2 },
    { name: "Tiffin Sambar", description: "Spiced lentil curry", icon: "🥘", rating: 4.3 },
    { name: "Mirchi Palli Chutney", description: "Spicy green chili and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Ginger Chutney", description: "Tangy and spicy ginger-based chutney", icon: "🫚", rating: 4.1 },
    { name: "Jam", description: "Fruit-flavored preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft baked bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Protein-packed sprouted legumes", icon: "🌱", rating: 4.2 },
    { name: "Veg Salad", description: "Fresh veggie mix with dressing", icon: "🥗", rating: 4.1 },
    { name: "Mayonnaise", description: "Creamy and tangy spread", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.3 },
    { name: "Coffee", description: "Aromatic brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Simple and nutritious boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh crunchy veggies", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Gabbage Pakodi", description: "Crispy cabbage fritters", icon: "🍽️", rating: 4.2 },
    { name: "Alu Capsicum Masala", description: "Spicy potato and capsicum curry", icon: "🥔", rating: 4.3 },
    { name: "Mango Rice", description: "Tangy rice dish with raw mango", icon: "🥭", rating: 4.4 },
    { name: "Rajma Dal", description: "Kidney beans curry", icon: "🍛", rating: 4.3 },
    { name: "Mango Pickle", description: "Spicy Indian mango pickle", icon: "🥒", rating: 4.2 },
    { name: "Brown Rice", description: "Whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Oodalu Millet", description: "Barnyard millet cooked soft", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Plain set yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Cool and spiced yogurt drink", icon: "🥛", rating: 4.2 },
    { name: "Crispy Fried Potato", description: "Golden fried potato slices", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Basundi", description: "Sweet thickened milk dessert", icon: "🍮", rating: 4.5 },
    { name: "Tea", description: "Traditional Indian spiced tea", icon: "🍵", rating: 4.5 },
    { name: "Milk", description: "Fresh hot/cold milk", icon: "🥛", rating: 4.3 }
],
dinner: [
    { name: "Plain Rice", description: "Simple steamed rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Colorful mix of vegetables", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Fluffy rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Cabbage Fry", description: "Stir-fried cabbage with spices", icon: "🥬", rating: 4.2 },
    { name: "Chicken Curry", description: "Spicy chicken in rich gravy", icon: "🍗", rating: 4.5 },
    { name: "Veg Sambar", description: "Vegetable lentil stew", icon: "🥘", rating: 4.3 },
    { name: "Mirchi Palli Chutney", description: "Spicy chili and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Yellow Dal Masala", description: "Spiced yellow lentils", icon: "🍲", rating: 4.3 },
    { name: "Gongura Pachadi", description: "Tangy chutney with sorrel leaves", icon: "🌿", rating: 4.4 },
    { name: "Curd", description: "Smooth plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Spicy mango-based condiment", icon: "🥭", rating: 4.2 },
    { name: "Fried Rice", description: "Stir-fried rice with vegetables", icon: "🍛", rating: 4.4 }
]

                },
                saturday: {
                    breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Uthappam", description: "Thick pancake with vegetables", icon: "🥞", rating: 4.3 },
    { name: "Tomato Bath", description: "South Indian tomato-flavored rice", icon: "🍅", rating: 4.2 },
    { name: "Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.4 },
    { name: "Ginger Coconut Chutney", description: "Chutney made with ginger and coconut", icon: "🫚", rating: 4.1 },
    { name: "Dal Chutney", description: "Spicy chutney made from lentils", icon: "🌶️", rating: 4.0 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft baked bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crunchy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted lentils", icon: "🌱", rating: 4.2 },
    { name: "Veg Salad", description: "Fresh mixed vegetables", icon: "🥗", rating: 4.1 },
    { name: "Mayonnaise", description: "Creamy condiment", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold milk", icon: "🥛", rating: 4.3 },
    { name: "Coffee", description: "Hot brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Nutritious boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh crunchy salad", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Fryams", description: "Crispy fried wafers", icon: "🍘", rating: 4.2 },
    { name: "Alu Kabuli Channa Masala", description: "Potato and chickpea curry", icon: "🥔", rating: 4.3 },
    { name: "Tamarind Rice", description: "Tangy rice dish with tamarind", icon: "🍛", rating: 4.4 },
    { name: "Dal Pancharatan", description: "Mixed lentil curry", icon: "🍲", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Spicy cauliflower pickle", icon: "🥒", rating: 4.2 },
    { name: "Brown Rice", description: "Nutty whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Samalu Millet", description: "Nutritious little millet", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Set yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Refreshing spiced drink", icon: "🥛", rating: 4.2 },
    { name: "Crispy Fried Potato", description: "Crunchy fried potato", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Mirchi Baji", description: "Fried green chili fritters", icon: "🌶️", rating: 4.4 },
    { name: "Tea", description: "Traditional Indian tea", icon: "🍵", rating: 4.5 },
    { name: "Milk", description: "Hot/cold milk", icon: "🥛", rating: 4.3 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed plain rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Fresh vegetables with dressing", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Alu Chips", description: "Crispy potato chips", icon: "🥔", rating: 4.3 },
    { name: "Beans Carrot Kurma", description: "Creamy curry with beans and carrots", icon: "🥕", rating: 4.4 },
    { name: "Pappu Saru Rasam", description: "Lentil and tamarind soup", icon: "🥘", rating: 4.2 },
    { name: "Ginger Coconut Chutney", description: "Spicy ginger and coconut chutney", icon: "🫚", rating: 4.2 },
    { name: "Yellow Mong Dal", description: "Spiced yellow moong lentils", icon: "🍲", rating: 4.3 },
    { name: "Bendakai Pachadi", description: "Spicy okra chutney", icon: "🧄", rating: 4.2 },
    { name: "Curd", description: "Smooth yogurt", icon: "🥣", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Tangy cauliflower pickle", icon: "🥒", rating: 4.2 },
    { name: "Fried Rice", description: "Rice stir-fried with veggies", icon: "🍛", rating: 4.4 }
]

                },
                sunday: {
                   breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Semiya Bath", description: "Vermicelli cooked with spices", icon: "🍝", rating: 4.0 },
    { name: "Tiffin Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.3 },
    { name: "Garlic Peanut Chutney", description: "Spicy chutney made with garlic and peanuts", icon: "🌶️", rating: 4.1 },
    { name: "Onion & Tomato Chutney", description: "Tangy onion-tomato mix", icon: "🧅", rating: 4.2 },
    { name: "Jam", description: "Fruit jam spread", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Freshly baked slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crunchy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Mixed vegetable salad", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy dressing", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Brewed filter coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Perfectly boiled eggs", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh vegetable mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat Indian flatbread", icon: "🍞", rating: 4.3 },
    { name: "Alu Pusa Fry", description: "Fried potatoes with spices", icon: "🥔", rating: 4.2 },
    { name: "Paneer Capsicum", description: "Cottage cheese with bell peppers", icon: "🧀", rating: 4.4 },
    { name: "Veg Biryani", description: "Spiced rice with vegetables", icon: "🍛", rating: 4.5 },
    { name: "Veg Katta", description: "Vegetarian curry with a tangy twist", icon: "🥘", rating: 4.0 },
    { name: "Mango Pickle", description: "Spicy mango pickle", icon: "🥭", rating: 4.1 },
    { name: "Chicken Masala", description: "Spicy chicken curry", icon: "🍗", rating: 4.6 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Onion Raitha", description: "Yogurt with onion slices", icon: "🧅", rating: 4.2 }
],
snacks: [
    { name: "Biscuit and Tea", description: "Light evening snack", icon: "🍪☕", rating: 4.0 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.2 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Veg Salad", description: "Fresh vegetable mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat Indian flatbread", icon: "🍞", rating: 4.3 },
    { name: "Carrot Beans White Peas Dry", description: "Dry sabzi with carrot, beans and peas", icon: "🥕", rating: 4.2 },
    { name: "Garlic Peanut Chutney", description: "Spicy chutney with garlic and peanuts", icon: "🌶️", rating: 4.1 },
    { name: "Rasam", description: "Spicy South Indian soup", icon: "🍲", rating: 4.4 },
    { name: "Kandhi Pachadi", description: "Toor dal chutney", icon: "🥣", rating: 4.0 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Spicy mango pickle", icon: "🥭", rating: 4.1 },
    { name: "Fried Rice", description: "Stir-fried rice with vegetables", icon: "🍚", rating: 4.4 }
]

                }
            },
            tulip: {
                monday: {
                    breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Mysore Bajji", description: "Deep-fried spicy fritters", icon: "🍥", rating: 4.3 },
    { name: "Wheat Rava Upma", description: "Savory porridge made from wheat semolina", icon: "🍚", rating: 4.0 },
    { name: "Tiffin Sambar", description: "South Indian lentil stew", icon: "🥘", rating: 4.3 },
    { name: "Peanut Chutney", description: "Creamy peanut-based chutney", icon: "🥜", rating: 4.1 },
    { name: "Mint Chutney", description: "Refreshing mint-flavored chutney", icon: "🌿", rating: 4.2 },
    { name: "Jam", description: "Fruit-based spread", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft slices of fresh bread", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy corn-based cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Healthy sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Mixed fresh vegetables", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Smooth and creamy condiment", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy drink", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Strong brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Perfectly boiled eggs", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh crunchy mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft Indian bread", icon: "🍞", rating: 4.3 },
    { name: "Sorakai 65", description: "Crispy bottle gourd fry", icon: "🥬", rating: 4.2 },
    { name: "Mix Veg Curry", description: "Assorted vegetables in spicy gravy", icon: "🥘", rating: 4.3 },
    { name: "Curry Leaves Rice", description: "Fragrant rice with curry leaves", icon: "🌿", rating: 4.2 },
    { name: "Mixed Dal", description: "Lentil medley with spices", icon: "🥣", rating: 4.0 },
    { name: "Mango Pickle", description: "Spicy and tangy pickle", icon: "🥭", rating: 4.1 },
    { name: "Brown Rice", description: "Nutritious brown rice", icon: "🍘", rating: 4.2 },
    { name: "Arikalu Millet", description: "Healthy millet variety", icon: "🌾", rating: 4.1 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Spiced yogurt drink", icon: "🥛", rating: 4.0 },
    { name: "Crispy Fried Potato", description: "Golden and crispy potato fries", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Pani Poori and Tea", description: "Crispy street snack with flavored water", icon: "🥟☕", rating: 4.5 },
    { name: "Milk", description: "Hot or cold dairy drink", icon: "🥛", rating: 4.2 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Fresh veggie blend", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Carrot Fry", description: "Sautéed spiced carrots", icon: "🥕", rating: 4.2 },
    { name: "Boiled Egg", description: "Protein-rich eggs", icon: "🥚", rating: 4.3 },
    { name: "Veg Sambar", description: "Lentil-based veg stew", icon: "🥘", rating: 4.4 },
    { name: "Peanut Chutney", description: "Spicy and creamy chutney", icon: "🥜", rating: 4.1 },
    { name: "Dhal Tadka", description: "Yellow lentils tempered with spices", icon: "🍲", rating: 4.3 },
    { name: "Vankaya Pachadi", description: "Brinjal (eggplant) chutney", icon: "🍆", rating: 4.2 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Zesty mango condiment", icon: "🥭", rating: 4.1 },
    { name: "Semiya Kesari", description: "Sweet vermicelli dessert", icon: "🍮", rating: 4.5 }
]

                },
                tuesday: {
    
                   breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Onion Dosa", description: "Crispy crepe with caramelized onions", icon: "🥞", rating: 4.4 },
    { name: "Masala Poha", description: "Flattened rice cooked with spices", icon: "🍛", rating: 4.1 },
    { name: "Tiffin Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.3 },
    { name: "Coconut Chutney", description: "Creamy chutney made with coconut", icon: "🥥", rating: 4.2 },
    { name: "Onion Chutney", description: "Spicy chutney made with onions", icon: "🧅", rating: 4.0 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy cereal flakes", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Fresh chopped vegetables", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy dressing", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Fresh dairy milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Strong brewed beverage", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Perfectly cooked eggs", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh veggie mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Ladies Finger Fry", description: "Crispy okra fry", icon: "🟩", rating: 4.2 },
    { name: "Aloo Green Peas Curry", description: "Potatoes and peas in spicy gravy", icon: "🥔", rating: 4.3 },
    { name: "Tomato Rice", description: "Tangy tomato-flavored rice", icon: "🍅", rating: 4.2 },
    { name: "Yellow Dal", description: "Tempered yellow lentils", icon: "🍲", rating: 4.1 },
    { name: "Cauliflower Pickle", description: "Spicy cauliflower preserve", icon: "🥦", rating: 4.0 },
    { name: "Brown Rice", description: "Healthy whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Oodalu Millet", description: "Nutritious millet variety", icon: "🌾", rating: 4.1 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Spiced yogurt drink", icon: "🥛", rating: 4.0 },
    { name: "Crispy Fried Potato", description: "Golden fried potato slices", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Dilpasand and Tea", description: "Sweet puff pastry with tea", icon: "🥮☕", rating: 4.4 },
    { name: "Milk", description: "Fresh hot or cold milk", icon: "🥛", rating: 4.2 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Colorful veggie blend", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Egg Burji", description: "Spicy scrambled eggs", icon: "🍳", rating: 4.4 },
    { name: "Channa Masala", description: "Chickpeas cooked in rich gravy", icon: "🫘", rating: 4.3 },
    { name: "Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.4 },
    { name: "Coconut Chutney", description: "Chutney made from fresh coconut", icon: "🥥", rating: 4.2 },
    { name: "Rajma Dhal", description: "Kidney beans in spiced curry", icon: "🍛", rating: 4.3 },
    { name: "Dondakai Pachadi", description: "Ivy gourd chutney", icon: "🌿", rating: 4.2 },
    { name: "Curd", description: "Thick yogurt", icon: "🥣", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Spicy cauliflower condiment", icon: "🥦", rating: 4.0 },
    { name: "Fried Rice", description: "Rice stir-fried with vegetables", icon: "🍚", rating: 4.5 }
]

                },
                wednesday: {
                    breakfast: [
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Rava Upma", description: "Semolina cooked with spices and veggies", icon: "🍲", rating: 4.1 },
    { name: "Attukulu Upma", description: "Beaten rice cooked with veggies", icon: "🍛", rating: 4.0 },
    { name: "Tiffin Sambar", description: "South Indian lentil soup", icon: "🥘", rating: 4.3 },
    { name: "Ginger Palli Chutney", description: "Spicy ginger and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Tomato Chutney", description: "Tangy chutney made with tomatoes", icon: "🍅", rating: 4.1 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy corn cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Fresh chopped vegetable salad", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy condiment", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Strong brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Hard-boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh veggie mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Alu Mudhkura", description: "Potatoes cooked with amaranth leaves", icon: "🥬", rating: 4.2 },
    { name: "Tomato Louki Channa", description: "Bottle gourd and chickpea curry", icon: "🍅", rating: 4.2 },
    { name: "Green Peas Rice", description: "Rice flavored with green peas", icon: "🌾", rating: 4.3 },
    { name: "Dal Makhani", description: "Creamy black lentil curry", icon: "🍛", rating: 4.4 },
    { name: "Mango Pickle", description: "Spicy raw mango condiment", icon: "🥭", rating: 4.1 },
    { name: "Brown Rice", description: "Whole grain healthy rice", icon: "🍘", rating: 4.2 },
    { name: "Samalu Millet", description: "Traditional millet rice", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Spiced yogurt drink", icon: "🥛", rating: 4.1 },
    { name: "Crispy Fried Potato", description: "Golden crispy potato wedges", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Masala Palli", description: "Spiced peanuts", icon: "🥜", rating: 4.3 },
    { name: "Badam Milk", description: "Almond-flavored sweet milk", icon: "🥛", rating: 4.5 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Colorful salad with fresh veggies", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Soft whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Methi Paneer", description: "Fenugreek and paneer curry", icon: "🧀", rating: 4.4 },
    { name: "Chicken Curry", description: "Spicy chicken in gravy", icon: "🍗", rating: 4.5 },
    { name: "Rasam", description: "South Indian spicy tamarind soup", icon: "🥣", rating: 4.3 },
    { name: "Ginger Palli Chutney", description: "Zesty ginger and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Dal Pancharatan", description: "Mix of five lentils cooked with spices", icon: "🍲", rating: 4.4 },
    { name: "Onion Pachadi", description: "Onion-based tangy chutney", icon: "🧅", rating: 4.1 },
    { name: "Curd", description: "Thick natural yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Tangy and spicy mango pickle", icon: "🥭", rating: 4.1 },
    { name: "Fried Rice", description: "Rice tossed with veggies and spices", icon: "🍚", rating: 4.5 }
]

                },
                thursday: {
                    breakfast: [
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Wheat Veg Upma", description: "Wholesome upma with vegetables", icon: "🍲", rating: 4.1 },
    { name: "Tiffin Sambar", description: "Flavorful lentil soup", icon: "🥘", rating: 4.3 },
    { name: "Garlic Coconut Chutney", description: "Chutney with coconut and garlic twist", icon: "🧄", rating: 4.2 },
    { name: "Coriander Chutney", description: "Fresh chutney made from coriander leaves", icon: "🌿", rating: 4.1 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crunchy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted beans", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Fresh salad with seasonal vegetables", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy and tangy spread", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold fresh milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Aromatic hot coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Protein-rich boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Crunchy fresh vegetables", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Dondakai 65", description: "Crispy fried ivy gourd", icon: "🍽️", rating: 4.2 },
    { name: "Cabbage Aloo Curry", description: "Cabbage and potato curry", icon: "🥬", rating: 4.2 },
    { name: "Kitchadi", description: "Savory rice and lentil dish", icon: "🍛", rating: 4.3 },
    { name: "Dal Tadka", description: "Spiced yellow lentils", icon: "🥣", rating: 4.4 },
    { name: "Cauliflower Pickle", description: "Spicy pickle made with cauliflower", icon: "🥒", rating: 4.1 },
    { name: "Brown Rice", description: "Nutritious whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Korralu Millet", description: "High-fiber foxtail millet", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Cooling spiced yogurt drink", icon: "🥛", rating: 4.1 },
    { name: "Crispy Fried Potato", description: "Crispy potato bites", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Pastry", description: "Soft and sweet baked dessert", icon: "🧁", rating: 4.4 },
    { name: "Tea", description: "Refreshing Indian tea", icon: "🍵", rating: 4.5 },
    { name: "Milk", description: "Hot/cold dairy milk", icon: "🥛", rating: 4.3 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Chopped vegetables with dressing", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Potato Chips", description: "Crispy deep-fried potato slices", icon: "🥔", rating: 4.2 },
    { name: "Tindle Masala", description: "Tindle meat substitute in spicy masala", icon: "🌱", rating: 4.3 },
    { name: "Egg Curry", description: "Spiced egg gravy", icon: "🍛", rating: 4.4 },
    { name: "Garlic Coconut Chutney", description: "Chutney with garlic and coconut", icon: "🧄", rating: 4.2 },
    { name: "Yellow Mong Dal Fry", description: "Fried mung dal with spices", icon: "🍲", rating: 4.3 },
    { name: "Soorakai Pachadi", description: "Bottle gourd chutney", icon: "🥒", rating: 4.1 },
    { name: "Curd", description: "Plain thick yogurt", icon: "🥣", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Tangy cauliflower-based pickle", icon: "🥬", rating: 4.1 },
    { name: "Banana", description: "Fresh ripe banana", icon: "🍌", rating: 4.5 }
]

                },
                friday: {
                   breakfast: [
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Attukulu", description: "Flattened rice preparation", icon: "🍚", rating: 4.1 },
    { name: "Tomato Rawa Bath", description: "Semolina upma with tangy tomato flavor", icon: "🍅", rating: 4.2 },
    { name: "Tiffin Sambar", description: "Spiced lentil curry", icon: "🥘", rating: 4.3 },
    { name: "Mirchi Palli Chutney", description: "Spicy green chili and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Ginger Chutney", description: "Tangy and spicy ginger-based chutney", icon: "🫚", rating: 4.1 },
    { name: "Jam", description: "Fruit-flavored preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft baked bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Protein-packed sprouted legumes", icon: "🌱", rating: 4.2 },
    { name: "Veg Salad", description: "Fresh veggie mix with dressing", icon: "🥗", rating: 4.1 },
    { name: "Mayonnaise", description: "Creamy and tangy spread", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.3 },
    { name: "Coffee", description: "Aromatic brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Simple and nutritious boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh crunchy veggies", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Gabbage Pakodi", description: "Crispy cabbage fritters", icon: "🍽️", rating: 4.2 },
    { name: "Alu Capsicum Masala", description: "Spicy potato and capsicum curry", icon: "🥔", rating: 4.3 },
    { name: "Mango Rice", description: "Tangy rice dish with raw mango", icon: "🥭", rating: 4.4 },
    { name: "Rajma Dal", description: "Kidney beans curry", icon: "🍛", rating: 4.3 },
    { name: "Mango Pickle", description: "Spicy Indian mango pickle", icon: "🥒", rating: 4.2 },
    { name: "Brown Rice", description: "Whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Oodalu Millet", description: "Barnyard millet cooked soft", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Plain set yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Cool and spiced yogurt drink", icon: "🥛", rating: 4.2 },
    { name: "Crispy Fried Potato", description: "Golden fried potato slices", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Basundi", description: "Sweet thickened milk dessert", icon: "🍮", rating: 4.5 },
    { name: "Tea", description: "Traditional Indian spiced tea", icon: "🍵", rating: 4.5 },
    { name: "Milk", description: "Fresh hot/cold milk", icon: "🥛", rating: 4.3 }
],
dinner: [
    { name: "Plain Rice", description: "Simple steamed rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Colorful mix of vegetables", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Fluffy rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Cabbage Fry", description: "Stir-fried cabbage with spices", icon: "🥬", rating: 4.2 },
    { name: "Chicken Curry", description: "Spicy chicken in rich gravy", icon: "🍗", rating: 4.5 },
    { name: "Veg Sambar", description: "Vegetable lentil stew", icon: "🥘", rating: 4.3 },
    { name: "Mirchi Palli Chutney", description: "Spicy chili and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Yellow Dal Masala", description: "Spiced yellow lentils", icon: "🍲", rating: 4.3 },
    { name: "Gongura Pachadi", description: "Tangy chutney with sorrel leaves", icon: "🌿", rating: 4.4 },
    { name: "Curd", description: "Smooth plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Spicy mango-based condiment", icon: "🥭", rating: 4.2 },
    { name: "Fried Rice", description: "Stir-fried rice with vegetables", icon: "🍛", rating: 4.4 }
]

                },
                saturday: {
                    breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Uthappam", description: "Thick pancake with vegetables", icon: "🥞", rating: 4.3 },
    { name: "Tomato Bath", description: "South Indian tomato-flavored rice", icon: "🍅", rating: 4.2 },
    { name: "Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.4 },
    { name: "Ginger Coconut Chutney", description: "Chutney made with ginger and coconut", icon: "🫚", rating: 4.1 },
    { name: "Dal Chutney", description: "Spicy chutney made from lentils", icon: "🌶️", rating: 4.0 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft baked bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crunchy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted lentils", icon: "🌱", rating: 4.2 },
    { name: "Veg Salad", description: "Fresh mixed vegetables", icon: "🥗", rating: 4.1 },
    { name: "Mayonnaise", description: "Creamy condiment", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold milk", icon: "🥛", rating: 4.3 },
    { name: "Coffee", description: "Hot brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Nutritious boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh crunchy salad", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Fryams", description: "Crispy fried wafers", icon: "🍘", rating: 4.2 },
    { name: "Alu Kabuli Channa Masala", description: "Potato and chickpea curry", icon: "🥔", rating: 4.3 },
    { name: "Tamarind Rice", description: "Tangy rice dish with tamarind", icon: "🍛", rating: 4.4 },
    { name: "Dal Pancharatan", description: "Mixed lentil curry", icon: "🍲", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Spicy cauliflower pickle", icon: "🥒", rating: 4.2 },
    { name: "Brown Rice", description: "Nutty whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Samalu Millet", description: "Nutritious little millet", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Set yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Refreshing spiced drink", icon: "🥛", rating: 4.2 },
    { name: "Crispy Fried Potato", description: "Crunchy fried potato", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Mirchi Baji", description: "Fried green chili fritters", icon: "🌶️", rating: 4.4 },
    { name: "Tea", description: "Traditional Indian tea", icon: "🍵", rating: 4.5 },
    { name: "Milk", description: "Hot/cold milk", icon: "🥛", rating: 4.3 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed plain rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Fresh vegetables with dressing", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Alu Chips", description: "Crispy potato chips", icon: "🥔", rating: 4.3 },
    { name: "Beans Carrot Kurma", description: "Creamy curry with beans and carrots", icon: "🥕", rating: 4.4 },
    { name: "Pappu Saru Rasam", description: "Lentil and tamarind soup", icon: "🥘", rating: 4.2 },
    { name: "Ginger Coconut Chutney", description: "Spicy ginger and coconut chutney", icon: "🫚", rating: 4.2 },
    { name: "Yellow Mong Dal", description: "Spiced yellow moong lentils", icon: "🍲", rating: 4.3 },
    { name: "Bendakai Pachadi", description: "Spicy okra chutney", icon: "🧄", rating: 4.2 },
    { name: "Curd", description: "Smooth yogurt", icon: "🥣", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Tangy cauliflower pickle", icon: "🥒", rating: 4.2 },
    { name: "Fried Rice", description: "Rice stir-fried with veggies", icon: "🍛", rating: 4.4 }
]

                },
                sunday: {
                   breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Semiya Bath", description: "Vermicelli cooked with spices", icon: "🍝", rating: 4.0 },
    { name: "Tiffin Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.3 },
    { name: "Garlic Peanut Chutney", description: "Spicy chutney made with garlic and peanuts", icon: "🌶️", rating: 4.1 },
    { name: "Onion & Tomato Chutney", description: "Tangy onion-tomato mix", icon: "🧅", rating: 4.2 },
    { name: "Jam", description: "Fruit jam spread", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Freshly baked slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crunchy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Mixed vegetable salad", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy dressing", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Brewed filter coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Perfectly boiled eggs", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh vegetable mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat Indian flatbread", icon: "🍞", rating: 4.3 },
    { name: "Alu Pusa Fry", description: "Fried potatoes with spices", icon: "🥔", rating: 4.2 },
    { name: "Paneer Capsicum", description: "Cottage cheese with bell peppers", icon: "🧀", rating: 4.4 },
    { name: "Veg Biryani", description: "Spiced rice with vegetables", icon: "🍛", rating: 4.5 },
    { name: "Veg Katta", description: "Vegetarian curry with a tangy twist", icon: "🥘", rating: 4.0 },
    { name: "Mango Pickle", description: "Spicy mango pickle", icon: "🥭", rating: 4.1 },
    { name: "Chicken Masala", description: "Spicy chicken curry", icon: "🍗", rating: 4.6 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Onion Raitha", description: "Yogurt with onion slices", icon: "🧅", rating: 4.2 }
],
snacks: [
    { name: "Biscuit and Tea", description: "Light evening snack", icon: "🍪☕", rating: 4.0 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.2 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Veg Salad", description: "Fresh vegetable mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat Indian flatbread", icon: "🍞", rating: 4.3 },
    { name: "Carrot Beans White Peas Dry", description: "Dry sabzi with carrot, beans and peas", icon: "🥕", rating: 4.2 },
    { name: "Garlic Peanut Chutney", description: "Spicy chutney with garlic and peanuts", icon: "🌶️", rating: 4.1 },
    { name: "Rasam", description: "Spicy South Indian soup", icon: "🍲", rating: 4.4 },
    { name: "Kandhi Pachadi", description: "Toor dal chutney", icon: "🥣", rating: 4.0 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Spicy mango pickle", icon: "🥭", rating: 4.1 },
    { name: "Fried Rice", description: "Stir-fried rice with vegetables", icon: "🍚", rating: 4.4 }
]

                }
            },
            kanchanaganga: {
                 monday: {
                    breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Mysore Bajji", description: "Deep-fried spicy fritters", icon: "🍥", rating: 4.3 },
    { name: "Wheat Rava Upma", description: "Savory porridge made from wheat semolina", icon: "🍚", rating: 4.0 },
    { name: "Tiffin Sambar", description: "South Indian lentil stew", icon: "🥘", rating: 4.3 },
    { name: "Peanut Chutney", description: "Creamy peanut-based chutney", icon: "🥜", rating: 4.1 },
    { name: "Mint Chutney", description: "Refreshing mint-flavored chutney", icon: "🌿", rating: 4.2 },
    { name: "Jam", description: "Fruit-based spread", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft slices of fresh bread", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy corn-based cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Healthy sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Mixed fresh vegetables", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Smooth and creamy condiment", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy drink", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Strong brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Perfectly boiled eggs", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh crunchy mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft Indian bread", icon: "🍞", rating: 4.3 },
    { name: "Sorakai 65", description: "Crispy bottle gourd fry", icon: "🥬", rating: 4.2 },
    { name: "Mix Veg Curry", description: "Assorted vegetables in spicy gravy", icon: "🥘", rating: 4.3 },
    { name: "Curry Leaves Rice", description: "Fragrant rice with curry leaves", icon: "🌿", rating: 4.2 },
    { name: "Mixed Dal", description: "Lentil medley with spices", icon: "🥣", rating: 4.0 },
    { name: "Mango Pickle", description: "Spicy and tangy pickle", icon: "🥭", rating: 4.1 },
    { name: "Brown Rice", description: "Nutritious brown rice", icon: "🍘", rating: 4.2 },
    { name: "Arikalu Millet", description: "Healthy millet variety", icon: "🌾", rating: 4.1 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Spiced yogurt drink", icon: "🥛", rating: 4.0 },
    { name: "Crispy Fried Potato", description: "Golden and crispy potato fries", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Pani Poori and Tea", description: "Crispy street snack with flavored water", icon: "🥟☕", rating: 4.5 },
    { name: "Milk", description: "Hot or cold dairy drink", icon: "🥛", rating: 4.2 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Fresh veggie blend", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Carrot Fry", description: "Sautéed spiced carrots", icon: "🥕", rating: 4.2 },
    { name: "Boiled Egg", description: "Protein-rich eggs", icon: "🥚", rating: 4.3 },
    { name: "Veg Sambar", description: "Lentil-based veg stew", icon: "🥘", rating: 4.4 },
    { name: "Peanut Chutney", description: "Spicy and creamy chutney", icon: "🥜", rating: 4.1 },
    { name: "Dhal Tadka", description: "Yellow lentils tempered with spices", icon: "🍲", rating: 4.3 },
    { name: "Vankaya Pachadi", description: "Brinjal (eggplant) chutney", icon: "🍆", rating: 4.2 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Zesty mango condiment", icon: "🥭", rating: 4.1 },
    { name: "Semiya Kesari", description: "Sweet vermicelli dessert", icon: "🍮", rating: 4.5 }
]

                },
                tuesday: {
    
                   breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Onion Dosa", description: "Crispy crepe with caramelized onions", icon: "🥞", rating: 4.4 },
    { name: "Masala Poha", description: "Flattened rice cooked with spices", icon: "🍛", rating: 4.1 },
    { name: "Tiffin Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.3 },
    { name: "Coconut Chutney", description: "Creamy chutney made with coconut", icon: "🥥", rating: 4.2 },
    { name: "Onion Chutney", description: "Spicy chutney made with onions", icon: "🧅", rating: 4.0 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy cereal flakes", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Fresh chopped vegetables", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy dressing", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Fresh dairy milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Strong brewed beverage", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Perfectly cooked eggs", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh veggie mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Ladies Finger Fry", description: "Crispy okra fry", icon: "🟩", rating: 4.2 },
    { name: "Aloo Green Peas Curry", description: "Potatoes and peas in spicy gravy", icon: "🥔", rating: 4.3 },
    { name: "Tomato Rice", description: "Tangy tomato-flavored rice", icon: "🍅", rating: 4.2 },
    { name: "Yellow Dal", description: "Tempered yellow lentils", icon: "🍲", rating: 4.1 },
    { name: "Cauliflower Pickle", description: "Spicy cauliflower preserve", icon: "🥦", rating: 4.0 },
    { name: "Brown Rice", description: "Healthy whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Oodalu Millet", description: "Nutritious millet variety", icon: "🌾", rating: 4.1 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Spiced yogurt drink", icon: "🥛", rating: 4.0 },
    { name: "Crispy Fried Potato", description: "Golden fried potato slices", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Dilpasand and Tea", description: "Sweet puff pastry with tea", icon: "🥮☕", rating: 4.4 },
    { name: "Milk", description: "Fresh hot or cold milk", icon: "🥛", rating: 4.2 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Colorful veggie blend", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Egg Burji", description: "Spicy scrambled eggs", icon: "🍳", rating: 4.4 },
    { name: "Channa Masala", description: "Chickpeas cooked in rich gravy", icon: "🫘", rating: 4.3 },
    { name: "Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.4 },
    { name: "Coconut Chutney", description: "Chutney made from fresh coconut", icon: "🥥", rating: 4.2 },
    { name: "Rajma Dhal", description: "Kidney beans in spiced curry", icon: "🍛", rating: 4.3 },
    { name: "Dondakai Pachadi", description: "Ivy gourd chutney", icon: "🌿", rating: 4.2 },
    { name: "Curd", description: "Thick yogurt", icon: "🥣", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Spicy cauliflower condiment", icon: "🥦", rating: 4.0 },
    { name: "Fried Rice", description: "Rice stir-fried with vegetables", icon: "🍚", rating: 4.5 }
]

                },
                wednesday: {
                    breakfast: [
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Rava Upma", description: "Semolina cooked with spices and veggies", icon: "🍲", rating: 4.1 },
    { name: "Attukulu Upma", description: "Beaten rice cooked with veggies", icon: "🍛", rating: 4.0 },
    { name: "Tiffin Sambar", description: "South Indian lentil soup", icon: "🥘", rating: 4.3 },
    { name: "Ginger Palli Chutney", description: "Spicy ginger and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Tomato Chutney", description: "Tangy chutney made with tomatoes", icon: "🍅", rating: 4.1 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy corn cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Fresh chopped vegetable salad", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy condiment", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Strong brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Hard-boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh veggie mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Alu Mudhkura", description: "Potatoes cooked with amaranth leaves", icon: "🥬", rating: 4.2 },
    { name: "Tomato Louki Channa", description: "Bottle gourd and chickpea curry", icon: "🍅", rating: 4.2 },
    { name: "Green Peas Rice", description: "Rice flavored with green peas", icon: "🌾", rating: 4.3 },
    { name: "Dal Makhani", description: "Creamy black lentil curry", icon: "🍛", rating: 4.4 },
    { name: "Mango Pickle", description: "Spicy raw mango condiment", icon: "🥭", rating: 4.1 },
    { name: "Brown Rice", description: "Whole grain healthy rice", icon: "🍘", rating: 4.2 },
    { name: "Samalu Millet", description: "Traditional millet rice", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Spiced yogurt drink", icon: "🥛", rating: 4.1 },
    { name: "Crispy Fried Potato", description: "Golden crispy potato wedges", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Masala Palli", description: "Spiced peanuts", icon: "🥜", rating: 4.3 },
    { name: "Badam Milk", description: "Almond-flavored sweet milk", icon: "🥛", rating: 4.5 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Colorful salad with fresh veggies", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Soft whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Methi Paneer", description: "Fenugreek and paneer curry", icon: "🧀", rating: 4.4 },
    { name: "Chicken Curry", description: "Spicy chicken in gravy", icon: "🍗", rating: 4.5 },
    { name: "Rasam", description: "South Indian spicy tamarind soup", icon: "🥣", rating: 4.3 },
    { name: "Ginger Palli Chutney", description: "Zesty ginger and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Dal Pancharatan", description: "Mix of five lentils cooked with spices", icon: "🍲", rating: 4.4 },
    { name: "Onion Pachadi", description: "Onion-based tangy chutney", icon: "🧅", rating: 4.1 },
    { name: "Curd", description: "Thick natural yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Tangy and spicy mango pickle", icon: "🥭", rating: 4.1 },
    { name: "Fried Rice", description: "Rice tossed with veggies and spices", icon: "🍚", rating: 4.5 }
]

                },
                thursday: {
                    breakfast: [
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Wheat Veg Upma", description: "Wholesome upma with vegetables", icon: "🍲", rating: 4.1 },
    { name: "Tiffin Sambar", description: "Flavorful lentil soup", icon: "🥘", rating: 4.3 },
    { name: "Garlic Coconut Chutney", description: "Chutney with coconut and garlic twist", icon: "🧄", rating: 4.2 },
    { name: "Coriander Chutney", description: "Fresh chutney made from coriander leaves", icon: "🌿", rating: 4.1 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crunchy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted beans", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Fresh salad with seasonal vegetables", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy and tangy spread", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold fresh milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Aromatic hot coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Protein-rich boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Crunchy fresh vegetables", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Dondakai 65", description: "Crispy fried ivy gourd", icon: "🍽️", rating: 4.2 },
    { name: "Cabbage Aloo Curry", description: "Cabbage and potato curry", icon: "🥬", rating: 4.2 },
    { name: "Kitchadi", description: "Savory rice and lentil dish", icon: "🍛", rating: 4.3 },
    { name: "Dal Tadka", description: "Spiced yellow lentils", icon: "🥣", rating: 4.4 },
    { name: "Cauliflower Pickle", description: "Spicy pickle made with cauliflower", icon: "🥒", rating: 4.1 },
    { name: "Brown Rice", description: "Nutritious whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Korralu Millet", description: "High-fiber foxtail millet", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Cooling spiced yogurt drink", icon: "🥛", rating: 4.1 },
    { name: "Crispy Fried Potato", description: "Crispy potato bites", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Pastry", description: "Soft and sweet baked dessert", icon: "🧁", rating: 4.4 },
    { name: "Tea", description: "Refreshing Indian tea", icon: "🍵", rating: 4.5 },
    { name: "Milk", description: "Hot/cold dairy milk", icon: "🥛", rating: 4.3 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Chopped vegetables with dressing", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Potato Chips", description: "Crispy deep-fried potato slices", icon: "🥔", rating: 4.2 },
    { name: "Tindle Masala", description: "Tindle meat substitute in spicy masala", icon: "🌱", rating: 4.3 },
    { name: "Egg Curry", description: "Spiced egg gravy", icon: "🍛", rating: 4.4 },
    { name: "Garlic Coconut Chutney", description: "Chutney with garlic and coconut", icon: "🧄", rating: 4.2 },
    { name: "Yellow Mong Dal Fry", description: "Fried mung dal with spices", icon: "🍲", rating: 4.3 },
    { name: "Soorakai Pachadi", description: "Bottle gourd chutney", icon: "🥒", rating: 4.1 },
    { name: "Curd", description: "Plain thick yogurt", icon: "🥣", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Tangy cauliflower-based pickle", icon: "🥬", rating: 4.1 },
    { name: "Banana", description: "Fresh ripe banana", icon: "🍌", rating: 4.5 }
]

                },
                friday: {
                   breakfast: [
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Attukulu", description: "Flattened rice preparation", icon: "🍚", rating: 4.1 },
    { name: "Tomato Rawa Bath", description: "Semolina upma with tangy tomato flavor", icon: "🍅", rating: 4.2 },
    { name: "Tiffin Sambar", description: "Spiced lentil curry", icon: "🥘", rating: 4.3 },
    { name: "Mirchi Palli Chutney", description: "Spicy green chili and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Ginger Chutney", description: "Tangy and spicy ginger-based chutney", icon: "🫚", rating: 4.1 },
    { name: "Jam", description: "Fruit-flavored preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft baked bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Protein-packed sprouted legumes", icon: "🌱", rating: 4.2 },
    { name: "Veg Salad", description: "Fresh veggie mix with dressing", icon: "🥗", rating: 4.1 },
    { name: "Mayonnaise", description: "Creamy and tangy spread", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.3 },
    { name: "Coffee", description: "Aromatic brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Simple and nutritious boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh crunchy veggies", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Gabbage Pakodi", description: "Crispy cabbage fritters", icon: "🍽️", rating: 4.2 },
    { name: "Alu Capsicum Masala", description: "Spicy potato and capsicum curry", icon: "🥔", rating: 4.3 },
    { name: "Mango Rice", description: "Tangy rice dish with raw mango", icon: "🥭", rating: 4.4 },
    { name: "Rajma Dal", description: "Kidney beans curry", icon: "🍛", rating: 4.3 },
    { name: "Mango Pickle", description: "Spicy Indian mango pickle", icon: "🥒", rating: 4.2 },
    { name: "Brown Rice", description: "Whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Oodalu Millet", description: "Barnyard millet cooked soft", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Plain set yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Cool and spiced yogurt drink", icon: "🥛", rating: 4.2 },
    { name: "Crispy Fried Potato", description: "Golden fried potato slices", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Basundi", description: "Sweet thickened milk dessert", icon: "🍮", rating: 4.5 },
    { name: "Tea", description: "Traditional Indian spiced tea", icon: "🍵", rating: 4.5 },
    { name: "Milk", description: "Fresh hot/cold milk", icon: "🥛", rating: 4.3 }
],
dinner: [
    { name: "Plain Rice", description: "Simple steamed rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Colorful mix of vegetables", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Fluffy rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Cabbage Fry", description: "Stir-fried cabbage with spices", icon: "🥬", rating: 4.2 },
    { name: "Chicken Curry", description: "Spicy chicken in rich gravy", icon: "🍗", rating: 4.5 },
    { name: "Veg Sambar", description: "Vegetable lentil stew", icon: "🥘", rating: 4.3 },
    { name: "Mirchi Palli Chutney", description: "Spicy chili and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Yellow Dal Masala", description: "Spiced yellow lentils", icon: "🍲", rating: 4.3 },
    { name: "Gongura Pachadi", description: "Tangy chutney with sorrel leaves", icon: "🌿", rating: 4.4 },
    { name: "Curd", description: "Smooth plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Spicy mango-based condiment", icon: "🥭", rating: 4.2 },
    { name: "Fried Rice", description: "Stir-fried rice with vegetables", icon: "🍛", rating: 4.4 }
]

                },
                saturday: {
                    breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Uthappam", description: "Thick pancake with vegetables", icon: "🥞", rating: 4.3 },
    { name: "Tomato Bath", description: "South Indian tomato-flavored rice", icon: "🍅", rating: 4.2 },
    { name: "Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.4 },
    { name: "Ginger Coconut Chutney", description: "Chutney made with ginger and coconut", icon: "🫚", rating: 4.1 },
    { name: "Dal Chutney", description: "Spicy chutney made from lentils", icon: "🌶️", rating: 4.0 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft baked bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crunchy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted lentils", icon: "🌱", rating: 4.2 },
    { name: "Veg Salad", description: "Fresh mixed vegetables", icon: "🥗", rating: 4.1 },
    { name: "Mayonnaise", description: "Creamy condiment", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold milk", icon: "🥛", rating: 4.3 },
    { name: "Coffee", description: "Hot brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Nutritious boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh crunchy salad", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Fryams", description: "Crispy fried wafers", icon: "🍘", rating: 4.2 },
    { name: "Alu Kabuli Channa Masala", description: "Potato and chickpea curry", icon: "🥔", rating: 4.3 },
    { name: "Tamarind Rice", description: "Tangy rice dish with tamarind", icon: "🍛", rating: 4.4 },
    { name: "Dal Pancharatan", description: "Mixed lentil curry", icon: "🍲", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Spicy cauliflower pickle", icon: "🥒", rating: 4.2 },
    { name: "Brown Rice", description: "Nutty whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Samalu Millet", description: "Nutritious little millet", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Set yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Refreshing spiced drink", icon: "🥛", rating: 4.2 },
    { name: "Crispy Fried Potato", description: "Crunchy fried potato", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Mirchi Baji", description: "Fried green chili fritters", icon: "🌶️", rating: 4.4 },
    { name: "Tea", description: "Traditional Indian tea", icon: "🍵", rating: 4.5 },
    { name: "Milk", description: "Hot/cold milk", icon: "🥛", rating: 4.3 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed plain rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Fresh vegetables with dressing", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Alu Chips", description: "Crispy potato chips", icon: "🥔", rating: 4.3 },
    { name: "Beans Carrot Kurma", description: "Creamy curry with beans and carrots", icon: "🥕", rating: 4.4 },
    { name: "Pappu Saru Rasam", description: "Lentil and tamarind soup", icon: "🥘", rating: 4.2 },
    { name: "Ginger Coconut Chutney", description: "Spicy ginger and coconut chutney", icon: "🫚", rating: 4.2 },
    { name: "Yellow Mong Dal", description: "Spiced yellow moong lentils", icon: "🍲", rating: 4.3 },
    { name: "Bendakai Pachadi", description: "Spicy okra chutney", icon: "🧄", rating: 4.2 },
    { name: "Curd", description: "Smooth yogurt", icon: "🥣", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Tangy cauliflower pickle", icon: "🥒", rating: 4.2 },
    { name: "Fried Rice", description: "Rice stir-fried with veggies", icon: "🍛", rating: 4.4 }
]

                },
                sunday: {
                   breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Semiya Bath", description: "Vermicelli cooked with spices", icon: "🍝", rating: 4.0 },
    { name: "Tiffin Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.3 },
    { name: "Garlic Peanut Chutney", description: "Spicy chutney made with garlic and peanuts", icon: "🌶️", rating: 4.1 },
    { name: "Onion & Tomato Chutney", description: "Tangy onion-tomato mix", icon: "🧅", rating: 4.2 },
    { name: "Jam", description: "Fruit jam spread", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Freshly baked slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crunchy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Mixed vegetable salad", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy dressing", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Brewed filter coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Perfectly boiled eggs", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh vegetable mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat Indian flatbread", icon: "🍞", rating: 4.3 },
    { name: "Alu Pusa Fry", description: "Fried potatoes with spices", icon: "🥔", rating: 4.2 },
    { name: "Paneer Capsicum", description: "Cottage cheese with bell peppers", icon: "🧀", rating: 4.4 },
    { name: "Veg Biryani", description: "Spiced rice with vegetables", icon: "🍛", rating: 4.5 },
    { name: "Veg Katta", description: "Vegetarian curry with a tangy twist", icon: "🥘", rating: 4.0 },
    { name: "Mango Pickle", description: "Spicy mango pickle", icon: "🥭", rating: 4.1 },
    { name: "Chicken Masala", description: "Spicy chicken curry", icon: "🍗", rating: 4.6 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Onion Raitha", description: "Yogurt with onion slices", icon: "🧅", rating: 4.2 }
],
snacks: [
    { name: "Biscuit and Tea", description: "Light evening snack", icon: "🍪☕", rating: 4.0 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.2 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Veg Salad", description: "Fresh vegetable mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat Indian flatbread", icon: "🍞", rating: 4.3 },
    { name: "Carrot Beans White Peas Dry", description: "Dry sabzi with carrot, beans and peas", icon: "🥕", rating: 4.2 },
    { name: "Garlic Peanut Chutney", description: "Spicy chutney with garlic and peanuts", icon: "🌶️", rating: 4.1 },
    { name: "Rasam", description: "Spicy South Indian soup", icon: "🍲", rating: 4.4 },
    { name: "Kandhi Pachadi", description: "Toor dal chutney", icon: "🥣", rating: 4.0 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Spicy mango pickle", icon: "🥭", rating: 4.1 },
    { name: "Fried Rice", description: "Stir-fried rice with vegetables", icon: "🍚", rating: 4.4 }
]

                }
            },
            aravali: {
                monday: {
                    breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Mysore Bajji", description: "Deep-fried spicy fritters", icon: "🍥", rating: 4.3 },
    { name: "Wheat Rava Upma", description: "Savory porridge made from wheat semolina", icon: "🍚", rating: 4.0 },
    { name: "Tiffin Sambar", description: "South Indian lentil stew", icon: "🥘", rating: 4.3 },
    { name: "Peanut Chutney", description: "Creamy peanut-based chutney", icon: "🥜", rating: 4.1 },
    { name: "Mint Chutney", description: "Refreshing mint-flavored chutney", icon: "🌿", rating: 4.2 },
    { name: "Jam", description: "Fruit-based spread", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft slices of fresh bread", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy corn-based cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Healthy sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Mixed fresh vegetables", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Smooth and creamy condiment", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy drink", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Strong brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Perfectly boiled eggs", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh crunchy mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft Indian bread", icon: "🍞", rating: 4.3 },
    { name: "Sorakai 65", description: "Crispy bottle gourd fry", icon: "🥬", rating: 4.2 },
    { name: "Mix Veg Curry", description: "Assorted vegetables in spicy gravy", icon: "🥘", rating: 4.3 },
    { name: "Curry Leaves Rice", description: "Fragrant rice with curry leaves", icon: "🌿", rating: 4.2 },
    { name: "Mixed Dal", description: "Lentil medley with spices", icon: "🥣", rating: 4.0 },
    { name: "Mango Pickle", description: "Spicy and tangy pickle", icon: "🥭", rating: 4.1 },
    { name: "Brown Rice", description: "Nutritious brown rice", icon: "🍘", rating: 4.2 },
    { name: "Arikalu Millet", description: "Healthy millet variety", icon: "🌾", rating: 4.1 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Spiced yogurt drink", icon: "🥛", rating: 4.0 },
    { name: "Crispy Fried Potato", description: "Golden and crispy potato fries", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Pani Poori and Tea", description: "Crispy street snack with flavored water", icon: "🥟☕", rating: 4.5 },
    { name: "Milk", description: "Hot or cold dairy drink", icon: "🥛", rating: 4.2 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Fresh veggie blend", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Carrot Fry", description: "Sautéed spiced carrots", icon: "🥕", rating: 4.2 },
    { name: "Boiled Egg", description: "Protein-rich eggs", icon: "🥚", rating: 4.3 },
    { name: "Veg Sambar", description: "Lentil-based veg stew", icon: "🥘", rating: 4.4 },
    { name: "Peanut Chutney", description: "Spicy and creamy chutney", icon: "🥜", rating: 4.1 },
    { name: "Dhal Tadka", description: "Yellow lentils tempered with spices", icon: "🍲", rating: 4.3 },
    { name: "Vankaya Pachadi", description: "Brinjal (eggplant) chutney", icon: "🍆", rating: 4.2 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Zesty mango condiment", icon: "🥭", rating: 4.1 },
    { name: "Semiya Kesari", description: "Sweet vermicelli dessert", icon: "🍮", rating: 4.5 }
]

                },
                tuesday: {
    
                   breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Onion Dosa", description: "Crispy crepe with caramelized onions", icon: "🥞", rating: 4.4 },
    { name: "Masala Poha", description: "Flattened rice cooked with spices", icon: "🍛", rating: 4.1 },
    { name: "Tiffin Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.3 },
    { name: "Coconut Chutney", description: "Creamy chutney made with coconut", icon: "🥥", rating: 4.2 },
    { name: "Onion Chutney", description: "Spicy chutney made with onions", icon: "🧅", rating: 4.0 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy cereal flakes", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Fresh chopped vegetables", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy dressing", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Fresh dairy milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Strong brewed beverage", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Perfectly cooked eggs", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh veggie mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Ladies Finger Fry", description: "Crispy okra fry", icon: "🟩", rating: 4.2 },
    { name: "Aloo Green Peas Curry", description: "Potatoes and peas in spicy gravy", icon: "🥔", rating: 4.3 },
    { name: "Tomato Rice", description: "Tangy tomato-flavored rice", icon: "🍅", rating: 4.2 },
    { name: "Yellow Dal", description: "Tempered yellow lentils", icon: "🍲", rating: 4.1 },
    { name: "Cauliflower Pickle", description: "Spicy cauliflower preserve", icon: "🥦", rating: 4.0 },
    { name: "Brown Rice", description: "Healthy whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Oodalu Millet", description: "Nutritious millet variety", icon: "🌾", rating: 4.1 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Spiced yogurt drink", icon: "🥛", rating: 4.0 },
    { name: "Crispy Fried Potato", description: "Golden fried potato slices", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Dilpasand and Tea", description: "Sweet puff pastry with tea", icon: "🥮☕", rating: 4.4 },
    { name: "Milk", description: "Fresh hot or cold milk", icon: "🥛", rating: 4.2 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Colorful veggie blend", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Egg Burji", description: "Spicy scrambled eggs", icon: "🍳", rating: 4.4 },
    { name: "Channa Masala", description: "Chickpeas cooked in rich gravy", icon: "🫘", rating: 4.3 },
    { name: "Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.4 },
    { name: "Coconut Chutney", description: "Chutney made from fresh coconut", icon: "🥥", rating: 4.2 },
    { name: "Rajma Dhal", description: "Kidney beans in spiced curry", icon: "🍛", rating: 4.3 },
    { name: "Dondakai Pachadi", description: "Ivy gourd chutney", icon: "🌿", rating: 4.2 },
    { name: "Curd", description: "Thick yogurt", icon: "🥣", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Spicy cauliflower condiment", icon: "🥦", rating: 4.0 },
    { name: "Fried Rice", description: "Rice stir-fried with vegetables", icon: "🍚", rating: 4.5 }
]

                },
                wednesday: {
                    breakfast: [
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Rava Upma", description: "Semolina cooked with spices and veggies", icon: "🍲", rating: 4.1 },
    { name: "Attukulu Upma", description: "Beaten rice cooked with veggies", icon: "🍛", rating: 4.0 },
    { name: "Tiffin Sambar", description: "South Indian lentil soup", icon: "🥘", rating: 4.3 },
    { name: "Ginger Palli Chutney", description: "Spicy ginger and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Tomato Chutney", description: "Tangy chutney made with tomatoes", icon: "🍅", rating: 4.1 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy corn cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Fresh chopped vegetable salad", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy condiment", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Strong brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Hard-boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh veggie mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Alu Mudhkura", description: "Potatoes cooked with amaranth leaves", icon: "🥬", rating: 4.2 },
    { name: "Tomato Louki Channa", description: "Bottle gourd and chickpea curry", icon: "🍅", rating: 4.2 },
    { name: "Green Peas Rice", description: "Rice flavored with green peas", icon: "🌾", rating: 4.3 },
    { name: "Dal Makhani", description: "Creamy black lentil curry", icon: "🍛", rating: 4.4 },
    { name: "Mango Pickle", description: "Spicy raw mango condiment", icon: "🥭", rating: 4.1 },
    { name: "Brown Rice", description: "Whole grain healthy rice", icon: "🍘", rating: 4.2 },
    { name: "Samalu Millet", description: "Traditional millet rice", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Spiced yogurt drink", icon: "🥛", rating: 4.1 },
    { name: "Crispy Fried Potato", description: "Golden crispy potato wedges", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Masala Palli", description: "Spiced peanuts", icon: "🥜", rating: 4.3 },
    { name: "Badam Milk", description: "Almond-flavored sweet milk", icon: "🥛", rating: 4.5 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Colorful salad with fresh veggies", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Soft whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Methi Paneer", description: "Fenugreek and paneer curry", icon: "🧀", rating: 4.4 },
    { name: "Chicken Curry", description: "Spicy chicken in gravy", icon: "🍗", rating: 4.5 },
    { name: "Rasam", description: "South Indian spicy tamarind soup", icon: "🥣", rating: 4.3 },
    { name: "Ginger Palli Chutney", description: "Zesty ginger and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Dal Pancharatan", description: "Mix of five lentils cooked with spices", icon: "🍲", rating: 4.4 },
    { name: "Onion Pachadi", description: "Onion-based tangy chutney", icon: "🧅", rating: 4.1 },
    { name: "Curd", description: "Thick natural yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Tangy and spicy mango pickle", icon: "🥭", rating: 4.1 },
    { name: "Fried Rice", description: "Rice tossed with veggies and spices", icon: "🍚", rating: 4.5 }
]

                },
                thursday: {
                    breakfast: [
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Wheat Veg Upma", description: "Wholesome upma with vegetables", icon: "🍲", rating: 4.1 },
    { name: "Tiffin Sambar", description: "Flavorful lentil soup", icon: "🥘", rating: 4.3 },
    { name: "Garlic Coconut Chutney", description: "Chutney with coconut and garlic twist", icon: "🧄", rating: 4.2 },
    { name: "Coriander Chutney", description: "Fresh chutney made from coriander leaves", icon: "🌿", rating: 4.1 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crunchy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted beans", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Fresh salad with seasonal vegetables", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy and tangy spread", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold fresh milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Aromatic hot coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Protein-rich boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Crunchy fresh vegetables", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Dondakai 65", description: "Crispy fried ivy gourd", icon: "🍽️", rating: 4.2 },
    { name: "Cabbage Aloo Curry", description: "Cabbage and potato curry", icon: "🥬", rating: 4.2 },
    { name: "Kitchadi", description: "Savory rice and lentil dish", icon: "🍛", rating: 4.3 },
    { name: "Dal Tadka", description: "Spiced yellow lentils", icon: "🥣", rating: 4.4 },
    { name: "Cauliflower Pickle", description: "Spicy pickle made with cauliflower", icon: "🥒", rating: 4.1 },
    { name: "Brown Rice", description: "Nutritious whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Korralu Millet", description: "High-fiber foxtail millet", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Cooling spiced yogurt drink", icon: "🥛", rating: 4.1 },
    { name: "Crispy Fried Potato", description: "Crispy potato bites", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Pastry", description: "Soft and sweet baked dessert", icon: "🧁", rating: 4.4 },
    { name: "Tea", description: "Refreshing Indian tea", icon: "🍵", rating: 4.5 },
    { name: "Milk", description: "Hot/cold dairy milk", icon: "🥛", rating: 4.3 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Chopped vegetables with dressing", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Potato Chips", description: "Crispy deep-fried potato slices", icon: "🥔", rating: 4.2 },
    { name: "Tindle Masala", description: "Tindle meat substitute in spicy masala", icon: "🌱", rating: 4.3 },
    { name: "Egg Curry", description: "Spiced egg gravy", icon: "🍛", rating: 4.4 },
    { name: "Garlic Coconut Chutney", description: "Chutney with garlic and coconut", icon: "🧄", rating: 4.2 },
    { name: "Yellow Mong Dal Fry", description: "Fried mung dal with spices", icon: "🍲", rating: 4.3 },
    { name: "Soorakai Pachadi", description: "Bottle gourd chutney", icon: "🥒", rating: 4.1 },
    { name: "Curd", description: "Plain thick yogurt", icon: "🥣", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Tangy cauliflower-based pickle", icon: "🥬", rating: 4.1 },
    { name: "Banana", description: "Fresh ripe banana", icon: "🍌", rating: 4.5 }
]

                },
                friday: {
                   breakfast: [
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Attukulu", description: "Flattened rice preparation", icon: "🍚", rating: 4.1 },
    { name: "Tomato Rawa Bath", description: "Semolina upma with tangy tomato flavor", icon: "🍅", rating: 4.2 },
    { name: "Tiffin Sambar", description: "Spiced lentil curry", icon: "🥘", rating: 4.3 },
    { name: "Mirchi Palli Chutney", description: "Spicy green chili and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Ginger Chutney", description: "Tangy and spicy ginger-based chutney", icon: "🫚", rating: 4.1 },
    { name: "Jam", description: "Fruit-flavored preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft baked bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crispy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Protein-packed sprouted legumes", icon: "🌱", rating: 4.2 },
    { name: "Veg Salad", description: "Fresh veggie mix with dressing", icon: "🥗", rating: 4.1 },
    { name: "Mayonnaise", description: "Creamy and tangy spread", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.3 },
    { name: "Coffee", description: "Aromatic brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Simple and nutritious boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh crunchy veggies", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Soft whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Gabbage Pakodi", description: "Crispy cabbage fritters", icon: "🍽️", rating: 4.2 },
    { name: "Alu Capsicum Masala", description: "Spicy potato and capsicum curry", icon: "🥔", rating: 4.3 },
    { name: "Mango Rice", description: "Tangy rice dish with raw mango", icon: "🥭", rating: 4.4 },
    { name: "Rajma Dal", description: "Kidney beans curry", icon: "🍛", rating: 4.3 },
    { name: "Mango Pickle", description: "Spicy Indian mango pickle", icon: "🥒", rating: 4.2 },
    { name: "Brown Rice", description: "Whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Oodalu Millet", description: "Barnyard millet cooked soft", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Plain set yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Cool and spiced yogurt drink", icon: "🥛", rating: 4.2 },
    { name: "Crispy Fried Potato", description: "Golden fried potato slices", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Basundi", description: "Sweet thickened milk dessert", icon: "🍮", rating: 4.5 },
    { name: "Tea", description: "Traditional Indian spiced tea", icon: "🍵", rating: 4.5 },
    { name: "Milk", description: "Fresh hot/cold milk", icon: "🥛", rating: 4.3 }
],
dinner: [
    { name: "Plain Rice", description: "Simple steamed rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Colorful mix of vegetables", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Fluffy rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Cabbage Fry", description: "Stir-fried cabbage with spices", icon: "🥬", rating: 4.2 },
    { name: "Chicken Curry", description: "Spicy chicken in rich gravy", icon: "🍗", rating: 4.5 },
    { name: "Veg Sambar", description: "Vegetable lentil stew", icon: "🥘", rating: 4.3 },
    { name: "Mirchi Palli Chutney", description: "Spicy chili and peanut chutney", icon: "🌶️", rating: 4.2 },
    { name: "Yellow Dal Masala", description: "Spiced yellow lentils", icon: "🍲", rating: 4.3 },
    { name: "Gongura Pachadi", description: "Tangy chutney with sorrel leaves", icon: "🌿", rating: 4.4 },
    { name: "Curd", description: "Smooth plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Spicy mango-based condiment", icon: "🥭", rating: 4.2 },
    { name: "Fried Rice", description: "Stir-fried rice with vegetables", icon: "🍛", rating: 4.4 }
]

                },
                saturday: {
                    breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Uthappam", description: "Thick pancake with vegetables", icon: "🥞", rating: 4.3 },
    { name: "Tomato Bath", description: "South Indian tomato-flavored rice", icon: "🍅", rating: 4.2 },
    { name: "Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.4 },
    { name: "Ginger Coconut Chutney", description: "Chutney made with ginger and coconut", icon: "🫚", rating: 4.1 },
    { name: "Dal Chutney", description: "Spicy chutney made from lentils", icon: "🌶️", rating: 4.0 },
    { name: "Jam", description: "Sweet fruit preserve", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Soft baked bread slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crunchy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted lentils", icon: "🌱", rating: 4.2 },
    { name: "Veg Salad", description: "Fresh mixed vegetables", icon: "🥗", rating: 4.1 },
    { name: "Mayonnaise", description: "Creamy condiment", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold milk", icon: "🥛", rating: 4.3 },
    { name: "Coffee", description: "Hot brewed coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Nutritious boiled egg", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh crunchy salad", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Fryams", description: "Crispy fried wafers", icon: "🍘", rating: 4.2 },
    { name: "Alu Kabuli Channa Masala", description: "Potato and chickpea curry", icon: "🥔", rating: 4.3 },
    { name: "Tamarind Rice", description: "Tangy rice dish with tamarind", icon: "🍛", rating: 4.4 },
    { name: "Dal Pancharatan", description: "Mixed lentil curry", icon: "🍲", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Spicy cauliflower pickle", icon: "🥒", rating: 4.2 },
    { name: "Brown Rice", description: "Nutty whole grain rice", icon: "🍘", rating: 4.2 },
    { name: "Samalu Millet", description: "Nutritious little millet", icon: "🌾", rating: 4.0 },
    { name: "Curd", description: "Set yogurt", icon: "🥣", rating: 4.3 },
    { name: "Butter Milk", description: "Refreshing spiced drink", icon: "🥛", rating: 4.2 },
    { name: "Crispy Fried Potato", description: "Crunchy fried potato", icon: "🍟", rating: 4.4 }
],
snacks: [
    { name: "Mirchi Baji", description: "Fried green chili fritters", icon: "🌶️", rating: 4.4 },
    { name: "Tea", description: "Traditional Indian tea", icon: "🍵", rating: 4.5 },
    { name: "Milk", description: "Hot/cold milk", icon: "🥛", rating: 4.3 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed plain rice", icon: "🍚", rating: 4.0 },
    { name: "Mix Veg Salad", description: "Fresh vegetables with dressing", icon: "🥗", rating: 4.1 },
    { name: "Idly", description: "Soft steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Chapati", description: "Whole wheat flatbread", icon: "🍞", rating: 4.3 },
    { name: "Alu Chips", description: "Crispy potato chips", icon: "🥔", rating: 4.3 },
    { name: "Beans Carrot Kurma", description: "Creamy curry with beans and carrots", icon: "🥕", rating: 4.4 },
    { name: "Pappu Saru Rasam", description: "Lentil and tamarind soup", icon: "🥘", rating: 4.2 },
    { name: "Ginger Coconut Chutney", description: "Spicy ginger and coconut chutney", icon: "🫚", rating: 4.2 },
    { name: "Yellow Mong Dal", description: "Spiced yellow moong lentils", icon: "🍲", rating: 4.3 },
    { name: "Bendakai Pachadi", description: "Spicy okra chutney", icon: "🧄", rating: 4.2 },
    { name: "Curd", description: "Smooth yogurt", icon: "🥣", rating: 4.3 },
    { name: "Cauliflower Pickle", description: "Tangy cauliflower pickle", icon: "🥒", rating: 4.2 },
    { name: "Fried Rice", description: "Rice stir-fried with veggies", icon: "🍛", rating: 4.4 }
]

                },
                sunday: {
                   breakfast: [
    { name: "Idly", description: "Steamed rice cakes", icon: "🥣", rating: 4.2 },
    { name: "Semiya Bath", description: "Vermicelli cooked with spices", icon: "🍝", rating: 4.0 },
    { name: "Tiffin Sambar", description: "Lentil stew with vegetables", icon: "🥘", rating: 4.3 },
    { name: "Garlic Peanut Chutney", description: "Spicy chutney made with garlic and peanuts", icon: "🌶️", rating: 4.1 },
    { name: "Onion & Tomato Chutney", description: "Tangy onion-tomato mix", icon: "🧅", rating: 4.2 },
    { name: "Jam", description: "Fruit jam spread", icon: "🍓", rating: 3.9 },
    { name: "Bread", description: "Freshly baked slices", icon: "🍞", rating: 4.0 },
    { name: "Cornflakes", description: "Crunchy breakfast cereal", icon: "🥣", rating: 3.8 },
    { name: "Veg Sprouts", description: "Nutritious sprouted legumes", icon: "🌱", rating: 4.1 },
    { name: "Veg Salad", description: "Mixed vegetable salad", icon: "🥗", rating: 4.0 },
    { name: "Mayonnaise", description: "Creamy dressing", icon: "🧴", rating: 3.9 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.4 },
    { name: "Coffee", description: "Brewed filter coffee", icon: "☕", rating: 4.6 },
    { name: "Boiled Egg", description: "Perfectly boiled eggs", icon: "🥚", rating: 4.3 }
],
lunch: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Salad", description: "Fresh vegetable mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat Indian flatbread", icon: "🍞", rating: 4.3 },
    { name: "Alu Pusa Fry", description: "Fried potatoes with spices", icon: "🥔", rating: 4.2 },
    { name: "Paneer Capsicum", description: "Cottage cheese with bell peppers", icon: "🧀", rating: 4.4 },
    { name: "Veg Biryani", description: "Spiced rice with vegetables", icon: "🍛", rating: 4.5 },
    { name: "Veg Katta", description: "Vegetarian curry with a tangy twist", icon: "🥘", rating: 4.0 },
    { name: "Mango Pickle", description: "Spicy mango pickle", icon: "🥭", rating: 4.1 },
    { name: "Chicken Masala", description: "Spicy chicken curry", icon: "🍗", rating: 4.6 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Onion Raitha", description: "Yogurt with onion slices", icon: "🧅", rating: 4.2 }
],
snacks: [
    { name: "Biscuit and Tea", description: "Light evening snack", icon: "🍪☕", rating: 4.0 },
    { name: "Milk", description: "Hot or cold dairy milk", icon: "🥛", rating: 4.2 }
],
dinner: [
    { name: "Plain Rice", description: "Steamed white rice", icon: "🍚", rating: 4.0 },
    { name: "Veg Salad", description: "Fresh vegetable mix", icon: "🥗", rating: 4.1 },
    { name: "Chapati", description: "Whole wheat Indian flatbread", icon: "🍞", rating: 4.3 },
    { name: "Carrot Beans White Peas Dry", description: "Dry sabzi with carrot, beans and peas", icon: "🥕", rating: 4.2 },
    { name: "Garlic Peanut Chutney", description: "Spicy chutney with garlic and peanuts", icon: "🌶️", rating: 4.1 },
    { name: "Rasam", description: "Spicy South Indian soup", icon: "🍲", rating: 4.4 },
    { name: "Kandhi Pachadi", description: "Toor dal chutney", icon: "🥣", rating: 4.0 },
    { name: "Curd", description: "Plain yogurt", icon: "🥣", rating: 4.3 },
    { name: "Mango Pickle", description: "Spicy mango pickle", icon: "🥭", rating: 4.1 },
    { name: "Fried Rice", description: "Stir-fried rice with vegetables", icon: "🍚", rating: 4.4 }
]

                }
            }
        };

        // Get current date and day of the week
        function getCurrentDay() {
            const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
            const today = new Date();
            return days[today.getDay()];
        }

        // Update current date display
        function updateDate() {
            const dateElement = document.getElementById('current-date');
            const menuDateElement = document.getElementById('menu-date');
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const today = new Date();
            const dateString = today.toLocaleDateString('en-US', options);
            
            dateElement.innerHTML = `<i class="fas fa-calendar-alt"></i> ${dateString}`;
            menuDateElement.textContent = dateString;
        }
        
        // Initialize date
        updateDate();
        
        // Generate star rating HTML based on rating value
        function generateStarRating(rating) {
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 >= 0.5;
            const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
            
            let starsHTML = '';
            
            // Full stars
            for (let i = 0; i < fullStars; i++) {
                starsHTML += '<i class="fas fa-star"></i>';
            }
            
            // Half star
            if (halfStar) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            }
            
            // Empty stars
            for (let i = 0; i < emptyStars; i++) {
                starsHTML += '<i class="far fa-star"></i>';
            }
            
            return starsHTML;
        }
        
        // Populate meal content for a specific day
        function populateMealContent(hostelId, day, mealType) {
            const mealContent = document.getElementById(mealType);
            mealContent.innerHTML = '';
            
            // Check if menu data exists for this day
            if (!hostelMenus[hostelId][day] || !hostelMenus[hostelId][day][mealType] || hostelMenus[hostelId][day][mealType].length === 0) {
                // If no data for this day, show Monday's menu as fallback
                if (day !== 'monday' && hostelMenus[hostelId]['monday'][mealType]) {
                    const fallbackMessage = document.createElement('div');
                    fallbackMessage.className = 'food-item';
                    fallbackMessage.innerHTML = `
                        <div class="food-icon">ℹ️</div>
                        <div class="food-details">
                            <div class="food-name">Menu not yet updated</div>
                            <div class="food-description">Showing Monday's menu as reference. Please check back later.</div>
                        </div>
                    `;
                    mealContent.appendChild(fallbackMessage);
                    
                    // Show Monday's menu items
                    hostelMenus[hostelId]['monday'][mealType].forEach(meal => {
                        addFoodItem(mealContent, meal);
                    });
                } else {
                    // If no data at all
                    const noDataMessage = document.createElement('div');
                    noDataMessage.className = 'food-item';
                    noDataMessage.innerHTML = `
                        <div class="food-icon">ℹ️</div>
                        <div class="food-details">
                            <div class="food-name">No menu available</div>
                            <div class="food-description">Menu for this day has not been updated yet.</div>
                        </div>
                    `;
                    mealContent.appendChild(noDataMessage);
                }
                return;
            }
            
            // Add food items to the meal content
            const meals = hostelMenus[hostelId][day][mealType];
            meals.forEach(meal => {
                addFoodItem(mealContent, meal);
            });
        }
        
        // Add a food item to the meal content
        function addFoodItem(container, meal) {
            const foodItem = document.createElement('div');
            foodItem.className = 'food-item';
            
            foodItem.innerHTML = `
                <div class="food-icon">${meal.icon}</div>
                <div class="food-details">
                    <div class="food-name">${meal.name}</div>
                    <div class="food-description">${meal.description}</div>
                </div>
                <div class="food-rating">
                    ${generateStarRating(meal.rating)}
                    <span class="rating-value">${meal.rating}</span>
                </div>
            `;
            
            container.appendChild(foodItem);
        }
        
        // Calculate overall rating for a hostel on a specific day
        function calculateOverallRating(hostelId, day) {
            let totalRating = 0;
            let count = 0;
            
            // If no data for this day, use Monday's data
            const menuDay = (hostelMenus[hostelId][day]) ? day : 'monday';
            
            for (const mealType in hostelMenus[hostelId][menuDay]) {
                hostelMenus[hostelId][menuDay][mealType].forEach(meal => {
                    totalRating += meal.rating;
                    count++;
                });
            }
            
            return count > 0 ? (totalRating / count).toFixed(1) : "0.0";
        }
        
        // Update overall rating display
        function updateOverallRating(hostelId, day) {
            const overallRating = calculateOverallRating(hostelId, day);
            const ratingElement = document.getElementById('overall-rating');
            const ratingValueElement = document.getElementById('rating-value');
            
            ratingElement.innerHTML = generateStarRating(overallRating);
            ratingValueElement.textContent = overallRating;
        }
        
        // Page transition
        function showPage(pageId) {
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => {
                if (page.id === pageId) {
                    page.classList.remove('inactive');
                    page.classList.add('active');
                } else {
                    page.classList.remove('active');
                    page.classList.add('inactive');
                }
            });
        }
        
        // Initialize the application
        function initApp() {
            const currentDay = getCurrentDay();
            const dayButtons = document.querySelectorAll('.day-button');
            
            // Set the current day as active
            dayButtons.forEach(button => {
                if (button.getAttribute('data-day') === currentDay) {
                    button.classList.add('active', 'today');
                }
            });
            
            // Hostel selection functionality
            const hostelCards = document.querySelectorAll('.hostel-card');
            
            hostelCards.forEach(card => {
                card.addEventListener('click', () => {
                    // Get hostel data
                    const hostelId = card.getAttribute('data-hostel');
                    const hostelName = card.querySelector('.hostel-name').textContent;
                    const hostelDescription = card.querySelector('.hostel-description').textContent;
                    const hostelType = card.getAttribute('data-type');
                    const hostelImage = card.querySelector('.hostel-image').src;
                    
                    // Update selected hostel info
                    document.getElementById('selected-hostel-title').textContent = hostelName;
                    document.getElementById('selected-hostel-description').textContent = hostelDescription;
                    document.getElementById('selected-hostel-type').textContent = hostelType;
                    document.getElementById('selected-hostel-img').src = hostelImage;
                    
                    // Populate meal content for the selected hostel and current day
                    populateMealContent(hostelId, currentDay, 'breakfast');
                    populateMealContent(hostelId, currentDay, 'lunch');
                    populateMealContent(hostelId, currentDay, 'snacks');
                    populateMealContent(hostelId, currentDay, 'dinner');
                    
                    // Update overall rating
                    updateOverallRating(hostelId, currentDay);
                    
                    // Show menu page
                    showPage('menu-page');
                    
                    // Scroll to top
                    window.scrollTo(0, 0);
                });
            });
            
            // Back button functionality
            document.getElementById('back-button').addEventListener('click', () => {
                showPage('hostel-selection-page');
                window.scrollTo(0, 0);
            });
            
            // Day selector functionality
            dayButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from all buttons
                    dayButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    button.classList.add('active');
                    
                    // Get selected day and hostel
                    const selectedDay = button.getAttribute('data-day');
                    const selectedHostel = document.getElementById('selected-hostel-title').textContent;
                    
                    // Find hostel ID from name
                    let hostelId = '';
                    hostelCards.forEach(card => {
                        if (card.querySelector('.hostel-name').textContent === selectedHostel) {
                            hostelId = card.getAttribute('data-hostel');
                        }
                    });
                    
                    if (hostelId) {
                        // Update menu for selected day
                        populateMealContent(hostelId, selectedDay, 'breakfast');
                        populateMealContent(hostelId, selectedDay, 'lunch');
                        populateMealContent(hostelId, selectedDay, 'snacks');
                        populateMealContent(hostelId, selectedDay, 'dinner');
                        
                        // Update overall rating
                        updateOverallRating(hostelId, selectedDay);
                    }
                });
            });
            
            // Meal tab functionality
            const mealTabs = document.querySelectorAll('.meal-tab');
            const tabIndicator = document.querySelector('.tab-indicator');
            
            mealTabs.forEach((tab, index) => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs
                    mealTabs.forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    tab.classList.add('active');
                    
                    // Move tab indicator
                    if (window.innerWidth > 768) {
                        tabIndicator.style.left = `${index * 25 + 0.5}%`;
                    }
                    
                    // Hide all meal content
                    const mealContents = document.querySelectorAll('.meal-content');
                    mealContents.forEach(content => content.classList.remove('active'));
                    
                    // Show the selected meal content
                    const mealType = tab.getAttribute('data-meal');
                    document.getElementById(mealType).classList.add('active');
                });
            });
            
            // Header scroll effect
            window.addEventListener('scroll', () => {
                const header = document.getElementById('header');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }
        
        // Initialize the application when the DOM is loaded
        document.addEventListener('DOMContentLoaded', initApp);
    </script>
</body>
</html>

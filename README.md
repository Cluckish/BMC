Benoit Marketing Consultants Website
This is the official website for Benoit Marketing Consultants, a marketing agency based in Boise, Idaho, dedicated to helping local small businesses grow and thrive.

The website is built as a lightweight, fast, and modern Single Page Application (SPA) using vanilla JavaScript, HTML, and CSS.

Features
Single Page Application (SPA): A seamless and fast user experience with no page reloads during navigation.
Three Core Sections:
Home: An introduction to the company's mission and services.
About Us: The story behind the company and its founder, Mason Benoit.
Services & Pricing: A clear breakdown of service packages and consulting options.
Responsive Design: The layout is designed to work well on desktops, tablets, and mobile devices.
Zero Dependencies: Built purely with vanilla HTML, CSS, and JavaScript (ES6 Modules), making it extremely lightweight and easy to maintain.
Technology Stack
HTML5: For the core structure and content.
CSS3: For all styling, layout (Flexbox/Grid), and animations.
Vanilla JavaScript (ES6+): For the SPA routing logic, component rendering, and all client-side interactions.
File Structure Overview
The project uses a clean, modular file structure to separate concerns:

BMC/
│
├── 📂 css/              # All CSS files
│   ├── components/      # Styles for shared components (header, footer)
│   ├── pages/           # Styles for specific pages
│   └── global.css       # Sitewide styles and variables
│
├── 📂 images/           # All image assets
│
├── 📂 js/               # All JavaScript files
│   ├── components/      # JS modules for reusable components
│   ├── pages/           # JS modules for each page's content
│   ├── app.js           # Main application logic
│   └── router.js        # Client-side routing logic
│
├── 📄 .gitignore        # Specifies files for Git to ignore
├── 📄 index.html        # The single HTML shell for the SPA
└── 📄 README.md          # Project documentation (this file)
Getting Started
No complex build steps or installations are required to run this project locally.

Prerequisites
A modern web browser (e.g., Chrome, Firefox, Safari, Edge).
A code editor (e.g., Visual Studio Code) is recommended for development.
Local Setup
Clone the repository:

Bash

git clone https://github.com/your-username/your-repo-name.git
Navigate to the project directory:

Bash

cd your-repo-name
Open the index.html file:
Simply double-click the index.html file in your file explorer to open it in your default browser.

For a better development experience, it is highly recommended to use a live server to handle potential CORS issues when fetching local files. If you are using VS Code, you can use the Live Server extension.

Deployment
This site is perfectly suited for deployment on static hosting services like GitHub Pages.

Deploying to GitHub Pages
Push to GitHub: Make sure your code is pushed to your GitHub repository.
Navigate to Settings: In your repository on GitHub, click the "Settings" tab.
Go to Pages: In the left sidebar, click on "Pages".
Configure Deployment:
Under "Build and deployment", for the "Source", select "Deploy from a branch".
Under "Branch", select your main (or master) branch and the /(root) folder.
Click "Save".
Done! After a few minutes, your site will be live at the URL provided in the GitHub Pages settings.
Author
Mason Benoit - Benoit Marketing Consultants
Website: benoitmarketingconsultants.com (Example URL)
Email: benoitmarketingconsultants@gmail.com
This project is developed and maintained by Benoit Marketing Consultants.

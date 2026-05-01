Professional Portfolio
A responsive, high-performance, single-page portfolio website designed for a Senior Software Project Manager. This site showcases professional experience, technical competencies, and case studies with a modern UI/UX, including Dark Mode support and scroll animations.

🚀 Features
Fully Responsive Design: Optimized for desktops, tablets, and mobile devices using CSS Grid and Flexbox.
Dark/Light Mode: Toggle switch allowing users to switch between themes, with persistence via localStorage.
Interactive Animations: Elements fade in smoothly as you scroll using the IntersectionObserver API.
Modern UI/UX:
Glassmorphism navigation bar.
Parallax Hero section.
Alternating timeline for work experience.
Skill tags with hover effects.
SEO Optimized: Includes Open Graph meta tags for better sharing on LinkedIn and social media.
Zero Dependencies: Built with pure HTML, CSS, and Vanilla JavaScript—no frameworks or build tools required.
📸 Project Structure
To ensure the profile photo loads correctly, your project folder should look like this:

text

.
├── index.html          # Main HTML file
├── assets/             # Folder for images
│   └── profile.jpg     # YOUR PHOTO GOES HERE
└── README.md           # This file
🛠️ Installation & Setup
Clone or download the project files to your local machine.
Add your photo:
Create a folder named assets.
Place your professional photo inside it and name it profile.jpg.
(Note: If your file is a PNG, update the src attribute in index.html to assets/profile.png).
Open index.html in any web browser (Chrome, Firefox, Safari, Edge) to view the site locally.
🎨 Customization
You can easily customize the look and feel by editing the CSS Variables at the top of the <style> section in index.html:

css

:root {
    --primary-color: #1a252f;    /* Main Text Color */
    --secondary-color: #3498db;  /* Accent/Buttons */
    --bg-body: #f8f9fa;          /* Light Background */
    /* ... etc */
}
Updating Links
Resume: Find the "Download CV" button in the Hero section and update the href to point to your actual PDF file.
Contact: Update the email address in the Footer section.
Testimonials: Replace the placeholder text in the "Testimonials" section with real quotes from your clients.
🛠️ Technologies Used
HTML5: Semantic structure for accessibility and SEO.
CSS3: Advanced styling with Variables, Flexbox, Grid, and Transitions.
JavaScript (ES6+): Vanilla JS for theme toggling, scroll animations, and mobile navigation.
External Libraries:
Font Awesome 6.5.1 (Icons)
Google Fonts (Roboto & Montserrat)
📄 License
This project is open source and available for personal use.

👤 Author
Rishi Aryal
Email: aryalrishi29@gmail.com
Location: Kathmandu, Nepal

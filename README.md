Mac Cuts Mutts - Dog Groomer Portfolio
A modern, responsive single-page portfolio for the "Mac Cuts Mutts" dog grooming business, built with React.js and Tailwind CSS for speed and easy maintenance.

Features
Single-Page Application (SPA): Smooth navigation without page reloads.

Fully Responsive: Optimized for all devices, from mobile to desktop.

Interactive Photo Gallery: "Before & after" gallery with a clickable lightbox.

Comprehensive Sections: Includes Home, Services, Pricing, About, Testimonials, and Contact.

Easily Customizable: All content is managed from a single configuration object for simple updates.

Modern Tech Stack: Built with the latest front-end technologies.

Tech Stack
React.js: For building the user interface.

Tailwind CSS: For utility-first styling.

Lucide React: For icons.

Getting Started
To run a local copy, follow these steps.

Prerequisites
You'll need Node.js (which includes npm) installed.

Installation
Clone the repository:

git clone [https://github.com/your-username/mac-cuts-mutts-portfolio.git](https://github.com/your-username/mac-cuts-mutts-portfolio.git)

Navigate to the project directory:

cd mac-cuts-mutts-portfolio

Install dependencies:

npm install

Start the server:

npm start

The app will run at http://localhost:3000.

Customization
All website content is managed in the portfolioData object in src/dog-groomer-portfolio.jsx.

To personalize the site, edit the values in this object:

Business Info: Update businessName, tagline, and bookingLink.

Contact & Socials: Fill in the correct contact and social media details.

Services & Pricing: Modify the services and pricing arrays.

About Section: Update the about object with a bio and photo imageUrl.

Gallery & Testimonials: Add real client photos and reviews to the gallery and testimonials arrays.

Example: Changing the "About Me" image

// Before
about: {
    // ...
    imageUrl: "[https://placehold.co/600x800/ede9fe/333333?text=Mackenzie](https://placehold.co/600x800/ede9fe/333333?text=Mackenzie)"
},

// After
about: {
    // ...
    imageUrl: "[https://your-image-hosting-service.com/mackenzie.jpg](https://your-image-hosting-service.com/mackenzie.jpg)"
},

☁️ Deployment
To build the app for production, run:

npm run build

This creates a build folder. Deploy the contents of this folder to any static host like Vercel, Netlify, or GitHub Pages.

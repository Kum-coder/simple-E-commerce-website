Product Listing and Shopping Cart
This project is a web-based product listing and shopping cart system. It allows users to view products by category, add items to their cart, and navigate between different sections of the website. The cart utilizes localStorage to store selected items, ensuring the cart's contents persist even if the page is reloaded.

Features
Product Listing: Fetches and displays products from an external API as cards, showing images, titles, prices, and ratings.
Category Filtering: Users can filter products by category or view all items with a single click.
Add to Cart: Adds selected items to the shopping cart with data stored in the browser's localStorage.
Remove from Cart: Allows users to remove items from the cart.
Responsive Navigation: Users can navigate between different sections—Home, Shop, Blog, About, and Contact—each with customized styles.
Responsive Design: Styled using CSS for a clean and responsive user interface.
Technologies Used
HTML5: Structure of the website.
CSS3: Styles and layout, including hover and transition effects.
JavaScript: Handles data fetching, filtering, navigation, local storage, and event handling.
1. HTML Structure
The HTML divides content into a header with navigation, a main content area for product displays, and dynamic sections for navigation.
2. JavaScript Functionality
Data Fetching: Uses fetch to retrieve product data from an external source and stores it in arrays for easy access.
Display Products: Function showdata() dynamically renders product cards with images, titles, prices, and ratings.
Category Filter: Function ourcategory() creates category buttons based on fetched data.
Filter by Category: Function harsfilter() filters the product display by category.
Navigation Between Sections:
Home (homes()): Displays the main page with featured products.
Shop (shops()): Shows all products in the "Shop" section, hiding other sections.
Blog (blog()): Displays the blog section, hiding the main page and other sections.
About (about()): Shows the "About" section with specific content.
Contact (contacts()): Displays the contact section, hiding other sections.
Image Display (show(img)): Displays a selected image in a larger view and hides other sections.
Add to Cart (addCart()): Alerts users that an item has been added to the cart and reloads the page.
3. CSS Styling
Global Styles: Resets margins and sets a default font.
Navigation Bar: Styled with a box-shadow and layout adjusted with Flexbox for logo and menu alignment.
Main Section: Contains featured content with styling for headings, buttons, and cards.
Product Cards: Individual product cards are styled with consistent padding, margins, and hover effects.
Blog Section: Adds responsive hover effects to blog cards.
Footer and Subscription Form: Styled for alignment and appearance on darker backgrounds.
Cart and About Sections: Display and layout adjustments for each section based on the JavaScript navigation.


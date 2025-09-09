#Travel-Destination-Cards

"Travel-Destination-Cards" is a web application that allows users to discover famous destinations around the world. Users can browse through a collection of iconic places, filter them by region, search by name, and view detailed information about each destination in an interactive modal.

## Features

*   **Browse Destinations:** View a grid of famous world destinations with their images and basic information.
*   **Search Functionality:** Search for destinations by name using a dynamic search bar.
*   **Region Filtering:** Filter destinations by continent/region (Asia, Europe, Africa, North America, South America, Oceania).
*   **Interactive Modal:** Click on any destination card to open a modal with a larger image, detailed description, location, and region.
*   **Modal Navigation:** Navigate between destinations within the modal using "Previous" and "Next" buttons, or keyboard arrow keys.
*   **Responsive Design:** The layout adapts to different screen sizes for an optimal viewing experience on various devices.

## Installation

To set up the project locally, follow these steps:

**1. Clone the repository:**

git clone https://github.com/Keerthanapri/Travel-Destination-Cards.git

cd Travel-Destination-Cards

**2. Open `index.html`:**

Simply open the `MultipleFiles/index.html` file in your web browser. No server-side setup or build process is required.

## Usage

*   **Browse:** Scroll through the main page to see all available destinations.
*   **Search:** Type a destination name (or part of it) into the "Search destination (name)..." input field to filter the results.
*   **Filter by Region:** Select a region from the dropdown menu to display destinations only from that region. Choose "All Regions" to see all destinations again.
*   **View Details:** Click on any destination card to open a modal window.
*   **Navigate Modal:**
    *   Click the "⬅ Previous" and "Next ➡" buttons to cycle through destinations.
    *   Use the left and right arrow keys on your keyboard to navigate.
    *   Click the "×" button or press the `Esc` key to close the modal.
    *   Click outside the modal content to close it.

## File Structure

The project is organized into the following files:

*   `MultipleFiles/`: This directory contains all the project files.
    *   `index.html`: The main HTML file that structures the web page, including the header, search/filter controls, destination container, and modal.
    *   `styles.css`: Contains the CSS rules for styling the application, including responsive design for cards and the modal.
    *   `script.js`: Contains the JavaScript logic for fetching and displaying destinations, implementing search and filter functionality, and managing the interactive modal.
    *   `destination.json`: (Although the `script.js` embeds the data, this file conceptually represents where the destination data would typically come from in a real-world scenario if fetched). This JSON file contains an array of destination objects, each with `name`, `location`, `region`, `image` URL, and `description`.
    *   `settings.json`: A configuration file, in this context, it specifies a `liveServer.settings.port` which is relevant for local development servers.

## Technologies Used

*   **HTML5:** For the structure and content of the web page.
*   **CSS3:** For styling the application, including layout, colors, and responsive adjustments.
*   **JavaScript (ES6+):** For dynamic content rendering, search and filter logic, and modal interactivity.

## Contributing

Contributions are welcome! If you have suggestions for new features, bug fixes, or improvements, please feel free to open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).

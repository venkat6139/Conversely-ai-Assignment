# Interactive 3x3 Matrix in React

This project is a simple interactive 3x3 matrix built with React.js. The matrix allows users to click on boxes to change their colors. When the last box is clicked, all boxes change color to orange in the order of their original clicks. The UI is responsive and adapts to mobile, tablet, and desktop views, with additional interactive CSS styles for an enhanced user experience.

## Features

- **Interactive Box Clicking**: Click on any box to change its color to green.
- **Sequential Color Change**: When the last box is clicked, all boxes change to orange sequentially in the order of their clicks.
- **Responsive Design**: The matrix layout adjusts for mobile, tablet, and desktop views.
- **Enhanced UI**: Smooth hover and click animations for a more engaging user interface.

## Technologies Used

- **React.js**: Frontend library for building the interactive UI.
- **CSS**: Used for responsive design and interactive styling.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/interactive-3x3-matrix.git
    cd interactive-3x3-matrix
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm start
    ```

The app will be available at `http://localhost:3000`.

## Project Structure

├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── Matrix/
│   │       ├── index.js
│   │       └── index.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── package.json
└── README.md

## Usage
- Click on any box in the 3x3 matrix to change its color to green.
- Continue clicking until all but one box is green.
- When the last box is clicked, all boxes will turn orange in the sequence of their clicks.
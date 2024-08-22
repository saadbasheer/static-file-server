# Static File Server using Express

This project is a simple static file server created using Node.js and Express. It serves static HTML, CSS, and JavaScript files, making it a great starting point for understanding basic server setup, routing, and static asset management.

## Features

- Serve static HTML, CSS, and JavaScript files
- Basic Express server setup
- Organized file structure

## Project Structure

static-file-server/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── node_modules/
├── server.js
└── package.json

- public/: Contains the static files (HTML, CSS, JS) served by the server.
- server.js: The main server file that sets up and runs the Express server.
- package.json: Contains project metadata and dependencies.

## Getting Started

### Prerequisites
Node.js installed on your local machine.

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/static-file-server.git
cd static-file-server
```
2. Install dependencies:
```bash
npm install
```

### Usage
1. Start the server:
```bash
node server.js
```
2. Open your browser and navigate to http://localhost:3000 to view the served static files.

Customization
Feel free to customize the index.html, styles.css, and script.js files in the public/ directory to create your own static site.
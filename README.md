# News Application

This project is a news application built using React for the client-side and ExpressJS for the server-side. It allows users to fetch and create news articles.

## Project Structure

```
news-app
├── client
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   └── App.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles
│   │       └── App.css
│   ├── package.json
│   └── README.md
├── server
│   ├── src
│   │   ├── controllers
│   │   │   └── newsController.js
│   │   ├── routes
│   │   │   └── newsRoutes.js
│   │   ├── models
│   │   │   └── newsModel.js
│   │   └── app.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites

- cd news-app/client
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd news-app
   ```

2. Install dependencies for the client:
   ```
   cd client
   npm install
   ```

3. Install dependencies for the server:
   ```
   cd ../server
   npm install
   ```

### Running the Application

1. Start the server:
   ```
   cd server
   npm start
   ```

2. Start the client:
   ```
   cd ../client
   npm start
   ```

The application will be running on `http://localhost:3000` for the client and `http://localhost:5000` for the server.

## Usage

- The client allows users to view and create news articles.
- The server handles requests related to news articles, providing endpoints for fetching and creating articles.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

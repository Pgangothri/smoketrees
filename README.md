# User Registration Application

This is a simple user registration application built with Node.js, Express, and MongoDB. It allows users to register by providing their name and address information.

## Features

- User registration form with name and address fields
- Backend API for handling user registration
- MongoDB integration for data storage
- Simple and responsive UI

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- A running MongoDB instance (local or remote)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pgangothri/smoketrees.git
2. Install the dependencies
    ```bash
    npm install  
3. Start the Application
    ```bash
    node index.js or nodemon index.js
-The server will start, and you'll see the message: Server listening on port 3000.... and Connected to DB.....
-You can access the application by navigating to http://localhost:3000 in your web browser.


# Project Structure

```
smoketrees/
├── node_modules/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── routes/
│   └── userRoutes.js
├── models/
│   ├── user.js
│   └── address.js
├── index.js
├── package.json
└── README.md
```
# API Endpoints
- POST http://localhost:3000: Registers a new user with their address








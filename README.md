# Mobile App & Programming Test - David Bayode

This is my solution to the AMQEY developer test.

## Instructions

- [Installation](#installation)

## Testing

To test the backend, navigate to the backend folder: `cd backend`

Install dependencies: `npm install`

Run the test using: `npm test`

## Installation

Clone the project using:
    `git clone https://github.com/David4bay/Amqey-test-david-bayode.git`

- Global Installation

In the root folder where the backend and mobile folders are located run: `npm run install `

- Global Dev Run

In the root folder where the backend and mobile folders are located run: `npm run all`

- Backend Installation:

To setup the backend, change into the backend folder:
    `cd backend`
Install dependencies:
    `npm install`

- Local Database Startup:

Run json-server to create local json database:
    `npm run db`

This creates a database for products on `http://localhost:3001/products`

- Mobile Startup:

Change to the mobile folder:

`cd mobile`

Install the dependencies:

`npm install`

- Running the application

The application runs when the database.json file is running using json-server, it runs on `http://localhost:3001/products` so ensure the db startup instructions are followed.

The backend needs to have its dependencies installed, follow the backend startup instructions.

Finally, you can startup the mobile app by following the mobile startup instructions.

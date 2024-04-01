# Capstone Project Frontend - Mustach Barbershop💈

## Index


- [Description](#description-)
- [Installation](#installation-)
- [Features](#features-)
- [Technologies Used](#technologies-used-)
- [Folder Structure](#folder-structure-)
- [API Routes](#api-routes-%EF%B8%8F)
- [Future Enhancements](#future-enhancements-)
- [Contributors](#contributors-)
- [License](#license)


## Description 📋

This project is the frontend part of a full-stack application designed to streamline the appointment booking process for a barber shop. It provides a user-friendly interface for barbers and customers to interact with the booking system and manage their appointments effectively.

## Installation 🔧


1. Clone the repository

```bash
git clone https://github.com/sergialysramos/capstoneprojectfrontend.git
```

2. Install the dependencies

```bash
npm install
```

3. Create a .env file in the root folder and add the following environment variables:

```bash
REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
REACT_APP_API_URL=http://localhost:3001/api
```

4. Run the development server

```bash
npm start
```

## Features: 🔗

* **`User Authentication:`** Barbers can log in securely to manage their profiles and view their appointments. Customers can book appointments without registration.

* **`Appointment Management:`** Barbers can view upcoming appointments and cancel them if necessary. Customers can book appointments through a simple form submission.

* **`User Profile Management:`** Barbers can update their profiles with personal information and view their appointment history. 

* **`Service Catalog:`** The application provides a catalog of services offered by the barber shop, allowing customers to choose from available services during the booking process.

## Technologies Used: 💻

       React  |  Chakra UI  |  React Router |  Axios |  Moment.JS |  Git & GitHub

* **`React:`** Frontend framework for building user interfaces.
* **`Chakra UI`**: Component library for building accessible and customizable UI components.
* **`React Router`**: Library for handling navigation and routing in React applications.
* **`Axios:`** HTTP client for making API requests to the backend server.
* **`Moment.js`**: Library for parsing, validating, manipulating, and displaying dates and times.

## Folder Structure: 📁

* **`src/components:`** Contains reusable UI components used throughout the application.
* **`src/layouts:`** Layout components for structuring different pages of the application.
* **`src/pages:`** Components representing different pages of the application, such as the home page, services page, reservations page, etc.
* **`src/routes:`** Route definitions using React Router for defining the navigation structure of the application.
* **`src/services:`** Service files for interacting with the backend API, including authentication and data fetching.
* **`src/middleware:`** Middleware for handling authentication and authorization logic in the frontend.

# Application Routes 🗺️

|              URL path               |        Description        | Protected |
| :---------------------------------: | :-----------------------: | :-------: |
|                  /                  |         Home page         |    ❌     |
|               /login                |        Login page         |    ❌     |
|               /signup               |        Signup page        |    ❌     |
|              /profile               |       Profile Page        |    ✅     |
|            /services                |      Services Page        |    ❌     |
|          /reservations              |    Reservations Page      |    ❌     |
|            /location                |      Location Page        |    ❌     |

## Future Enhancements 🚀

* `Implement additional features such as user registration and login for customers.`
* `Enhance the user interface with modern design principles and animations.`
* `Implement email notifications for appointment reminders and confirmations.`
* `Integrate OAuth services like Google login for enhanced authentication options.`

## In Progress

This application is currently under development and certain features may not be fully implemented. Contributions and feedback are welcome.

### **Contributors** 🫂🫱🏼‍🫲🏼

| [<img src="https://avatars.githubusercontent.com/u/113308120?v=4" width=115><br><sub>Carlos Toro</sub>](https://github.com/CarlHitos) |  [<img src="https://avatars.githubusercontent.com/u/148481786?v=4" width=115><br><sub>Sergialys Ramos</sub>](https://github.com/sergialysramos) |  
| :---: | :---: |

### License

This project is licensed under the MIT License.

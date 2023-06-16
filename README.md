# META BIKES

---

Zuckerberg's very own e-commerce site specializing in high-end bicycles and accessories.

## Project Overview

MetaBikes is a multi-page, full-stack, CRUD capable e-commerce site. It allows users to navigate through the site's inventory of bikes and accessories, view item details, add items to the cart, and leave comments.

![Meta Bikes Landing Page](https://github.com/kevinleet/metabikes/raw/main/client/imgs/landing.png)

## Team

- Kevin Li: Front-end development
- Andrew Mullins: Routes and controllers
- Daniel Mulka: Models, schemas, and data seeding

## Modules

### Bike

The `Bike` model stores all the relevant fields of data for potential shoppers. It is the parent object for the `CartItem` and contains the following fields:

- `type`: String
- `brand`: String
- `model`: String
- `price`: Number
- `color`: String
- `weight`: Number
- `description`: String
- `img`: String
- `category`: String

### Accessory

The `Accessory` model stores all the relevant data for accessories. It is also a parent object for the `CartItem` and includes the following fields:

- `type`: String
- `brand`: String
- `item`: String
- `price`: Number
- `img`: String
- `description`: String
- `category`: String

### CartItem

The `CartItem` model represents items in the shopping cart and has a many-to-one relationship with both `Bike` and `Accessory` models. It includes the following fields:

- `bicycleID`: ID of the bike
- `accessoryID`: ID of the accessory
- `quantity`: Number

### Comment

The `Comment` model allows shoppers to leave comments about the page. It includes the following fields:

- `name`: String
- `email`: String
- `description`: String

## Code Analysis

The code consists of several JavaScript classes and functions responsible for creating dynamic content and handling user interactions. It utilizes Axios for making HTTP requests to the server-side API.

The codebase is divided into the following classes:

- `Bike`: Represents a bike item with methods for creating div elements, product pages, and cart items.
- `Accessory`: Represents an accessory item with similar methods as the `Bike` class.
- `formatNumberWithDollar`: Utility function to format a number as a dollar amount.
- Event listeners and handlers for navigation, fetching data, generating product pages, managing the cart, submitting comments, and admin login.

The code follows best practices and is well-structured, allowing for easy maintenance and extension.

## Getting Started

To run the Meta Bikes e-commerce site locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/meta-bikes.git`
2. Install the dependencies: `npm install`
3. Start the server: `npm start`
4. Open your web browser and visit `http://localhost:3000`

Make sure you have Node.js and MongoDB installed on your machine.

## Contributing

We welcome contributions from everyone! If you would like to contribute to the Meta Bikes project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-new-feature`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push the branch to your fork: `git push origin my-new-feature`
5. Submit a pull request.

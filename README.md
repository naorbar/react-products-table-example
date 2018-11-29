
### This project implements the Products Table example described here:
https://reactjs.org/docs/thinking-in-react.html

It demonstrates looping on a given data and manipulating it before rendering using forEach() vs. map().

It also uses tables, callback functions and filtering data examples

#### The JSON input for the table looks like this:
```
[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
```
### Using react-bootstrap:

#### Great react-bootstrap tutorial can be found [here](https://react-bootstrap.github.io/getting-started/introduction/) and [here](https://www.w3schools.com/bootstrap/default.asp)

#### To use react-bootstrap:
1. Install react-bootstrap dependency:
  ```
  npm install react-bootstrap
  ```
2. Add react-bootstrap CSS's to index.html <head> element:
  ```
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
  ```  
3. Import the items you'd like to use:
  ```
  import { Button } from 'react-bootstrap';
  ```
4. Use the items in your Render() function:
  ```
  <Button bsStyle="info">Click Me!</Button>
  ```
  
### Infrastructure:

The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app); i.e. `npx crete-react-app <app_name>`
  
#### To start working on this project:
- `git clone` to clone the project
- `cd` to the app folder
- `npm install` to install all dependencies into the app folder
- `npm start` to start the server on http://localhost:3000
- open the project using Atom or any other IDE

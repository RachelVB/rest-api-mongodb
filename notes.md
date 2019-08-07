
Installed Packages via node.

1. npm init 
  - Installs package.json
  - Under 'Scripts' replace with "start": "nodemon app.js" so we can 
  start our server using npm start.

2. npm install express nodemon 
  - Allows us to install both express and nodemon at the same time. 
  Nodemon allows us to keep our server up and running on our localhost without having 
  to stop and restart every time. 

3. npm install mongoose
  - This will allow us to install the package that manages our MongoDB. 

4. npm install body-parser
  - This will allow us to convert the request to a readable JSON format so we can make our post requests. 

5. brew tap mongodb/brew
  - brew install mongodb-community@4.0

  To start Mongo DB
  - Make sure you are in your bin directory before starting. 
  - brew services start mongodb-community@4.0
  - mongo
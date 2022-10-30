# krp

go to client directory and hit the command "npm istall" to install all the modules
use "npm start" to run the client app

in server directory to install all the modules use
"npm install express body-parser mysql"
"npm install nodemon"
"npm install cors"

in index.js, the username and password for the database needs to be changed accordingly 

to start server use
"node index.js"

in mysql localhost server (useing my sqlworkbench SE) the scema "crypto" in which the table 'register' needs to be present as below

CREATE TABLE register(
userID INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(45),
email VARCHAR(45),
password VARCHAR(45)
);


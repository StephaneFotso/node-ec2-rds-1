In this first project, I want to show how we can deploy a node.js application with EC2 and a AWS MySQL Data base.
So I first create the Database instance, and then use a tool like Mysql Worbench to create the Data Base and Tables, I then use Postman to query the database.
All routes (GET,POST,DELETE, UPDATE) are created in app.js  

Tho deploy the application, 
1.first create your EC2 instance, and let the Security Group allow access to All TCP on port 3000.
2.Second, create your MySQL RDS instance, grap the Endpoint and replace the Endpoint in app.js
3.Use MySQL Workbench to log into the DB instance and then create your DB and entries.
4. Use postman to send request to qury the DB

5.Once created, get into your EC2 instance and install node.js using this code for example:
    sudo yum install -y gcc-c++ make
    curl -sL https://rpm.nodesource.com/setup_20.X| sudo -E bash -
    sudo yum install -y nodejs
6.Then install git in the EC2 instance and then clone the repo:
git clone https://github.com/StephaneFotso/node-ec2-rds-1.git

7.Navigate to your aps folder: cd node-ec2-rds-1
- install packages: npm install
- launch the server: node app.js
8. Grap the public ip addres of your EC2 instance and launch the web page
  For example: 54.89.141.134/3000/api/items

  NOTE: I use test.js to explain how i can use the js Async to fetch the content of the API to manipulate data coming from the data base.



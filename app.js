const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

app.use(bodyParser.json());

///////////////////////         1. GET Route            ///////////////
//////////////////////      USING THE GET METHOD       ///////////////
/////////////////////                                 ///////////////
/*
// Firs establish the connection to the DB

// The DB connection: Parameters to connect to the MySQL DB

const conn = mysql.createConnection({
  host: "nodeexample.c4lyjyp8n3jl.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Z6lhDNORxNhDYngz4Wpn",
  database: "restAPI",
});

// SHOW THE CONNECTION
conn.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Data BASE is connnected to app");
  }
});

// THE API RESPONSE to be used by the GET ROUTE

function apiResponse(results) {
  return JSON.stringify({
    status: 200,
    error: null,
    response: results,
  });
}

// Second create THE GET ROUTE

// Get All items
app.get("/api/items", (req, res) => {
  let sql = "SELECT * from  items";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

// Create the Server
app.listen(3000, () => {
  console.log("Server Started");
});

// TEST THE CONNECTION BY RUNNING: node app. js
//from the browser, launch: localhost:3000/api/items: As a result we get
// {"status":200,"error":null,"response":[]}
// Because for now we don't have any entry in the DB
// Try a GET with Postman: GET localhost:3000/api/items
// you obtain the same result


*/

/*
///////////////////////        2.POST ROUTE       ///////////////
//////////////////////   Add an Item into the DB ///////////////
/////////////////////                           ///////////////

// The DB connection: Parameters to connect to the MySQL DB

const conn = mysql.createConnection({
  host: "nodeexample.c4lyjyp8n3jl.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Z6lhDNORxNhDYngz4Wpn",
  database: "restAPI",
});

// SHOW THE CONNECTION
conn.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Data BASE is connnected to app");
  }
});

// THE API RESPONSE to be used by ROUTES

function apiResponse(results) {
  return JSON.stringify({
    status: 200,
    error: null,
    response: results,
  });
}

//  THE GET ROUTE

// Get All items
app.get("/api/items", (req, res) => {
  let sql = "SELECT * from  items";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

// Add (POST) an Item into the DB
app.post("/api/items", (req, res) => {
  let data = {
    title: req.body.title,
    body: req.body.body,
  };
  let sql = "INSERT INTO items SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

// Create the Server
app.listen(3000, () => {
  console.log("Server Started");
});

// TEST THE CONNECTION BY RUNNING: node app. js
// From postman, try now to add new items in the body: POST localhost:3000/api/items
// {
//     "title":"Third Title",
//     "body":"Third Body"
// }

//  Try to get items: GET localhost:3000/api/items


*/

/*

///////////////////////        3.GET ROUTE FOR A SPECIFIC ITEM    ///////////////
//////////////////////   GET an Item FROM THE id the DB          ///////////////
/////////////////////                                           ///////////////

// The DB connection: Parameters to connect to the MySQL DB

const conn = mysql.createConnection({
  host: "nodeexample.c4lyjyp8n3jl.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Z6lhDNORxNhDYngz4Wpn",
  database: "restAPI",
});

// SHOW THE CONNECTION
conn.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Data BASE is connnected to app");
  }
});

// THE API RESPONSE to be used by ROUTES

function apiResponse(results) {
  return JSON.stringify({
    status: 200,
    error: null,
    response: results,
  });
}

//  THE GET ROUTE

// Get All items
app.get("/api/items", (req, res) => {
  let sql = "SELECT * from  items";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

// Add (POST) an Item into the DB
app.post("/api/items", (req, res) => {
  let data = {
    title: req.body.title,
    body: req.body.body,
  };
  let sql = "INSERT INTO items SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

// Get an article with a specific id
app.get("/api/items/:id", (req, res) => {
  let sql = "SELECT * FROM items WHERE id=" + req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

// Create the Server
app.listen(3000, () => {
  console.log("Server Started");
});

// run the server
// now from postman try to get a specific item: GET localhost:3000/api/items/3
// {"status":200,"error":null,"response":[{"id":3,"title":"Third Title","body":"Third Body"}]}


*/

/*

///////////////////////        4.UPDATE ROUTE FOR A SPECIFIC ITEM    ///////////////
//////////////////////   UPDATE an Item FROM THE id the DB          ///////////////
/////////////////////                                           ///////////////

// The DB connection: Parameters to connect to the MySQL DB

const conn = mysql.createConnection({
  host: "nodeexample.c4lyjyp8n3jl.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Z6lhDNORxNhDYngz4Wpn",
  database: "restAPI",
});

// SHOW THE CONNECTION
conn.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Data BASE is connnected to app");
  }
});

// THE API RESPONSE to be used by ROUTES

function apiResponse(results) {
  return JSON.stringify({
    status: 200,
    error: null,
    response: results,
  });
}

//  THE GET ROUTE

// Get All items
app.get("/api/items", (req, res) => {
  let sql = "SELECT * from  items";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

// Add (POST) an Item into the DB
app.post("/api/items", (req, res) => {
  let data = {
    title: req.body.title,
    body: req.body.body,
  };
  let sql = "INSERT INTO items SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

// Get an article with a specific id
app.get("/api/items/:id", (req, res) => {
  let sql = "SELECT * FROM items WHERE id=" + req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

//Update Article
app.put("/api/items/:id", (req, res) => {
  let sql =
    "UPDATE items SET title='" +
    req.body.title +
    "', body='" +
    req.body.body +
    "' WHERE id=" +
    req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

// Create the Server
app.listen(3000, () => {
  console.log("Server Started");
});

// Now try to update an item and see

*/

///////////////////////        5.DELETE ROUTE FOR A SPECIFIC ITEM    ///////////////
//////////////////////   DELETE an Item FROM THE id the DB          ///////////////
/////////////////////                                           ///////////////

// The DB connection: Parameters to connect to the MySQL DB

const conn = mysql.createConnection({
  host: "nodeexample.c4lyjyp8n3jl.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "Z6lhDNORxNhDYngz4Wpn",
  database: "restAPI",
});

// SHOW THE CONNECTION
conn.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Data BASE is connnected to app");
  }
});

// THE API RESPONSE to be used by ROUTES

function apiResponse(results) {
  return JSON.stringify({
    status: 200,
    error: null,
    response: results,
  });
}

//  THE GET ROUTE

// Get All items
app.get("/api/items", (req, res) => {
  let sql = "SELECT * from  items";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

// Add (POST) an Item into the DB
app.post("/api/items", (req, res) => {
  let data = {
    title: req.body.title,
    body: req.body.body,
  };
  let sql = "INSERT INTO items SET ?";
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

// Get an article with a specific id
app.get("/api/items/:id", (req, res) => {
  let sql = "SELECT * FROM items WHERE id=" + req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

//Update Article
app.put("/api/items/:id", (req, res) => {
  let sql =
    "UPDATE items SET title='" +
    req.body.title +
    "', body='" +
    req.body.body +
    "' WHERE id=" +
    req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

// Delete an item

app.delete("/api/items/:id", (req, res) => {
  let sql = "DELETE FROM items WHERE ID=" + req.params.id + "";

  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(apiResponse(results));
  });
});

// Create the Server
app.listen(3000, () => {
  console.log("Server Started");
});

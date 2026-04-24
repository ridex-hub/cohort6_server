// Step 1: Import the express module
const express = require('express');

//step 2: create an Express application instance
const app = express();

const studentInfo = [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bob", age: 21, grade: "B" },
    { name: "Charlie", age: 22, grade: "C" },
];

app.get('/all-data' , (req , res)=>{
    res.json(studentInfo);
});

//Step 3: Define a route handler for GET request to /
app.get('/' , function(req, res) {
    res.send('Hello, World! Welcome to Express.js!');
});

app.get("/about" , (request , response)=>{
    response.send("this is about page");
});

app.get("/contact" , (request , response)=>{
    response.send("this is a contact page");
});

// Step 4: Start Lising on port 3000
app.listen(3000, function() {
    console.log('server is up and running');
}); 
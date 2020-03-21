const express = require('express');
const cors = require('cors');
const app = express();
const employee = require('./router/employee.js');

app.use(express.json());
app.use(cors());
app.use(employee);

app.listen(3000,()=>{
    console.log("Server running at 3000...");
})
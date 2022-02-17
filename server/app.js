const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
const DB = process.env.DATABASE

mongoose.connect(DB).then(()=>{console.log("Mongo Database Connected")}).catch((err)=>console.log('database not connected'));

//middleware
const middleware = (req,res,next) =>
{
  console.log(`about page`)
  next()
}

//main
app.get("/", (req, res) => {
  res.send(`Hello user`);
});
app.get("/about",middleware, (req, res) => {
  res.send(`About Page`);
});
app.get("/contact", (req, res) => {
  res.send(`Contant Page`);
});

const port = 3000;
app.listen(port, () => `Server running on port ${port}`)
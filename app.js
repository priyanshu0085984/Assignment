const express = require('express');
const app     = express();
const axios = require('axios');

const Address = require('./Schema/Addresses');
const Book = require('./Schema/Books');
const Company = require('./Schema/Companies');
const CreditCard = require('./Schema/CreditCards');
const Image = require('./Schema/Images');
const Person = require('./Schema/Persons');
const Place = require('./Schema/Places');
const Product = require('./Schema/Products');
const Text = require('./Schema/Texts');
const User = require('./Schema/Users');

const SaveData = (path,result) =>{
  if(path == "addresses"){
    Address.create(result)
    .then(()=>{
      console.log("Data Saved Successfully");
    })
    .catch((err)=>{
      res.status(500).json({
        Message:"Error Occured!",
        Error:err
      })
    })
  }
  else if(path == "books"){
    Book.create(result)
    .then(()=>{
      // console.log("Data Saved Successfully");
    })
    .catch((err)=>{
      res.status(500).json({
        Message:"Error Occured!",
        Error:err
      })
    })
  }
  else if(path == "companies"){
    Company.create(result)
    .then(()=>{
      // console.log("Data Saved Successfully");
    })
    .catch((err)=>{
      res.status(500).json({
        Message:"Error Occured!",
        Error:err
      })
    })
  }
  else if(path == "credit_cards"){
    CreditCard.create(result)
    .then(()=>{
      // console.log("Data Saved Successfully");
    })
    .catch((err)=>{
      res.status(500).json({
        Message:"Error Occured!",
        Error:err
      })
    })
  }
  else if(path == "images"){
    Image.create(result)
    .then(()=>{
      // console.log("Data Saved Successfully");
    })
    .catch((err)=>{
      res.status(500).json({
        Message:"Error Occured!",
        Error:err
      })
    })
  }
  else if(path == "persons"){
    Person.create(result)
    .then(()=>{
      // console.log("Data Saved Successfully");
    })
    .catch((err)=>{
      res.status(500).json({
        Message:"Error Occured!",
        Error:err
      })
    })
  }
  else if(path == "places"){
    Place.create(result)
    .then(()=>{
      // console.log("Data Saved Successfully");
    })
    .catch((err)=>{
      res.status(500).json({
        Message:"Error Occured!",
        Error:err
      })
    })
  }
  else if(path == "products"){
    Product.create(result)
    .then(()=>{
      // console.log("Data Saved Successfully");
    })
    .catch((err)=>{
      res.status(500).json({
        Message:"Error Occured!",
        Error:err
      })
    })
  }
  else if(path == "texts"){
    Text.create(result)
    .then(()=>{
      // console.log("Data Saved Successfully");
    })
    .catch((err)=>{
      res.status(500).json({
        Message:"Error Occured!",
        Error:err
      })
    })
  }
  else if(path == "users"){
    User.create(result)
    .then(()=>{
      // console.log("Data Saved Successfully");
    })
    .catch((err)=>{
      res.status(500).json({
        Message:"Error Occured!",
        Error:err
      })
    })
  }
}

app.get('/:path', (req, res) => {
  let URL = "https://fakerapi.it/api/v1/";

  const path = req.params.path;
  URL += `${path}`;

  const quantity = req.query._quantity;
  const locale = req.query._locale;
  const seed = req.query._seed;

  if (quantity) {
    URL += `?_quantity=${quantity}`;
  }
  if (locale) {
    URL += `&_locale=${locale}`;
  }
  if (seed) {
    URL += `&_seed=${seed}`;
  }

    axios.get(URL)
    .then((result)=>{
      SaveData(path,result.data.data);
      res.status(200).json({
        message:'Data fetched & Saved Successfully',
        data:result.data
      })
    })
    .catch((err)=>{
      res.status(404).json({
        message:'Error Occured!',
        Error:err
      })
    })
});


module.exports = app;

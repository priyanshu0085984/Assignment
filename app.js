const express = require('express');
const app     = express();
const axios = require('axios');

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
      res.status(200).json({
        message:'Data fetched Successfully',
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

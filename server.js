const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({path:'./config.env'})

const DB = process.env.DATABASE.replace("<PASSWORD>",process.env.DATABASE_PASSWORD);
const PORT = process.env.PORT || 4000;
mongoose.connect(DB)
.then(()=>{
    console.log("DB connection successful");
})
.catch(()=>{
    console.log("DB connection Unsuccessful");
})

app.listen(PORT,()=>{
    console.log(`App listening to port ${PORT}`);
  });
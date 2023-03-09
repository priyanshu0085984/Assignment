const mongoose = require('mongoose');

const CompanySchema = mongoose.Schema({
            id: Number,
            name: String,
            email: String,
            vat: String,
            phone: String,
            country: String,
            addresses:[
                {
                    id:Number,
                    street: String,
                    streetName:String,
                    buildingNumber:String,
                    city: String,
                    zipCode: String,
                    country: String,
                    county_code: String,
                    latitude: String,
                    longitude: String
                }
            ],
            website:String,
            image: String,
            contact:{
                id:Number,
                firstname:String,
                lastname:String,
                email:String,
                phone:String,
                birthday:String,
                gender:String,
                address:{
                    id:Number,
                    street: String,
                    streetName:String,
                    buildingNumber:String,
                    city: String,
                    zipCode: String,
                    country: String,
                    county_code: String,
                    latitude: String,
                    longitude: String
                },
                website:String,
                image:String

            }

})
module.exports = mongoose.model('Company', CompanySchema);
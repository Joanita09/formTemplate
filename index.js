//Dependencies
const express = require ('express');
const mongoose = require ('mongoose');

//Requiring a route
const covidRoute = require('./routes/covidRoute');

require ('dotenv').config();

// Instatiate express with app
const app = express()

//Middleware handling data from the form
app.use(express.urlencoded({
    extended:true
})); 

//middleware for serving static files
app.use(express.static('public'));
//middleware serving images specifically
//app.use('/public/images', express.static(__dirname + '/public/images'));


//Middleware configurations 
app.set('views', 'views');
app.set('view engine', 'pug');


//Functions as handlers for Routes 
app.use('/covid', covidRoute);

//Db connection configurations.
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });  

//Post connection to the database
  mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });


app.listen(3000, () => {
    console.log("listening on port 3000");
})

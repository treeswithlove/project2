const express = require('express');
const app = express();
const methodOverride = require('method-override');
// const logger = require('morgan')
const userRoutes = require('./routes/userRoutes')
const greenItemRoutes = require('./routes/greenItemRoutes')
const locationRoutes = require('./routes/locationRoutes')

//sets up hbs
app.set('view engine', 'hbs');
app.use(express.static(__dirname+"/public"));

//setup middleware for handling html forms
//where body is a query string 
app.use(express.urlencoded());
app.use(express.json())
app.use(methodOverride('_method'))
app.use('/user', userRoutes)
app.use('/user/:userId/greenItem', greenItemRoutes)
app.use('/user/:userId/greenItem/:greenItemId/location', locationRoutes)



//ALWAYS AT BOTTOM OF FILE
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server has started");
});

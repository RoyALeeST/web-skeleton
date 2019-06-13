const express = require('express'); // Sever
const mongoose = require('mongoose'); // Database
const config = require('./config/dev'); // ENV variables
const FakeDB =  require('./models/fake-db');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

//#region App routes
    const customerRoutes = require('./routes/customer')
//#endregion

const app = express();

// Connect to DB
mongoose.connect(config.DB_URI, { useNewUrlParser: true }, function(req, res){
    const fakeDb = new FakeDB();
    fakeDb.seedDb();
});

// App configuration
app.use(bodyParser.json()); // Parsing application/json
app.use(cookieParser()); // Parsing application/json
app.use(bodyParser.urlencoded({extended:true})); //parsing/application/x-www-form-urlencoded

// Add app routes to express App
app.use('/api/v1/customers', customerRoutes);

// Get environment port
const PORT = process.env.PORT || 3001;

// Start server
app.listen(PORT, function(){
    console.log(`===== SERVER RUNNING ON PORT ${PORT} ====`)
})
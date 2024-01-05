//require the library
const mongoose=require('mongoose');

// mongoose.connect(`mongodb://127.0.0.1:27017/${env.db}`);

//connect to database
mongoose.connect('mongodb://127.0.0.1:27017/contactdb');

//aquire the connection
const db=mongoose.connection;

//bind error with console
db.on("error",console.error.bind(console,"error connecting to database "));

//up and running
db.once('open',function(){
    console.log('connected to database :MongoDB');
});

module.exports=db;


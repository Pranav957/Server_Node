const express=require('express');
const path=require('path');
const port=8000;

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.get('/',function(req,res){
    return res.render('home',{title:"pranavs page!"});
})

app.listen(port,function(err){
   if(err)
   {console.log("Error while statring server: ",err);}

   console.log("srver is up and running on port: ",port);
})
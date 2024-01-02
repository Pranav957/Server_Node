const express=require('express');
const port=8000;

const app=express();

app.get('/',function(req,res){
    res.send("<h1>cool its running</h1>!");
})

app.listen(port,function(err){
   if(err)
   {console.log("Error while statring server: ",err);}

   console.log("srver is up and running on port: ",port);
})
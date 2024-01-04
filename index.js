const express=require('express');
const path=require('path');
const port=8000;

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// app.use(express.urlencoded());   //deprecated syntax
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('assets'));

//middleware1
app.use(function(req,res,next){
    req.myName="pranav kulkarni";
    next();
});

var contactList=[
    {
        name:"pranav",
        phone:"1111111111"
    },
    {
        name:"Arnav",
        phone:"22222222222"
    },
    {
        name:"Rohit",
        phone:"33333333333"
    },

]

app.get('/',function(req,res){
    console.log("Myname here: ",req.myName);
    return res.render('home',{title:"pranavs page!",contact_list:contactList});
})

app.post('/create-contact',function(req,res){
    console.log(req.body);
    contactList.push(req.body);
    return res.redirect('/');
})

app.get('/delete-contact/:phone',function(req,res){
    console.log(req.params);
    var phone=req.params.phone;
    return res.redirect('/');
})

app.listen(port,function(err){
   if(err)
   {console.log("Error while statring server: ",err);}

   console.log("srver is up and running on port: ",port);
})
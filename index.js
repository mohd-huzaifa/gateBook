const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
    res.sendFile('index.html');
})

var searchTopic;

app.post('/home',function(req,res){
   
    searchTopic = req.body.topic;
    if(searchTopic !=" "){
        searchTopic  += '.html'
        res.redirect(303,'/search')
    }
     
    
})
app.get('/search',function(req,res){
    res.sendFile( __dirname+'/public/'+ searchTopic);
})

   


app.post('/login',function(req,res){
     
    res.redirect('/');
})
   


app.listen(4500,function(){
    console.log("Your server is running");
})
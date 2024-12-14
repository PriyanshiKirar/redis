const express=require("express");
const app=express();
app.get("/",function(req,res){
    res.send('app ');
})
app.listen(3000,function(){
    console.log("server is woring on 3000");
});
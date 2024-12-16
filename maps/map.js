const express=require("express");
const app=express();
app.get("/",function(req,res){
    res.send('map server');
})

    //setTimeOut means kitne time bad chal niche second m time provide krte h
    app.get("/distance", function (req, res) {
        console.log("Distance endpoint hit");
        setTimeout(() => {
            res.status(200).json({ distance: "5km" });
        }, 2000);
    });
    
app.listen(3001,function(){
    console.log("server is woring on 3001");
});
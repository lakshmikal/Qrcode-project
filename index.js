console.log("check");
const express=require('express')
const app=express();
const path=require('path')
const ejs=require('ejs')
const qrcode=require('qrcode')

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static('public'))
app.use("/public", express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=>{
    res.render('index')
})
app.post("/yourqr",(req,res)=>{
    let gettingdata=req.body.nametext;
    qrcode.toDataURL(gettingdata,(err,data)=>{
        res.render('qrcode',{lakshmi:data})
    })
})
app.listen(20000);

const express=require("express");
const app=express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[{
    username:"Raj Singh",
    content:"I was fucked up",
},
{
    username:"Mukesh Chauhan",
    content:"Today i give birth two babies",
},
{
    username:"Abhishek Singh",
    content:"Yeah, I am i witness of Mukesh's babies",
}
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.listen(port,()=>{
    console.log(`server is listening on port 3000`);
})
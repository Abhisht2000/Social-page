const express=require("express");
const app=express();
const port = 3000;
const path = require("path");
// import { v4 as uuidv4 } from 'uuid';


app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[{
    id: "1a",
    username:"Raj Singh",
    content:"I was fucked up",
},
{
    id: "2b",
    username:"Mukesh Chauhan",
    content:"Today i give birth two babies",
},
{   
    id: "3c",
    username:"Abhishek Singh",
    content:"Yeah, I am i witness of Mukesh's babies",
}
]
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let post=posts.find((p)=> id==p.id);
    res.render("show.ejs",{post});
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/posts",(req,res)=>{
    let { username, content} =req.body;
    posts.push({ username, content});
    res.redirect("/posts")
});

app.listen(port,()=>{
    console.log(`server is listening on port 3000`);
})
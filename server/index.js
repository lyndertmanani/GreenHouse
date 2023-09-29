const express = require('express');
const app = express();
const port = 3000;
const path=require("path")

const tempelatePath=path.join(__dirname,'../dist/authn0')
app.use(express.json())
app.set("views",tempelatePath)

app.get("/",(req,res)=>{
    res.render("../dist/authn0/index.html")
})
app.get("/signup0.html",(req,res)=>{
    res.render("../dist/authn0/signup0.html")
})
// Define routes and middleware here
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

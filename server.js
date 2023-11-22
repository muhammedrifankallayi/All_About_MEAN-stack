const express = require("express")
const app = express()


const fs = require("fs")

fs.readFile("./react.txt",(err,data)=>{

if(err) throw err

  console.log(data.toString());

  fs.writeFile("./react.txt","haaiBroo","utf-8",(err)=>{
  if(err) throw err

  console.log('Data replaced successfully.');
  })
})

app.listen(8080,()=>{
    console.log("server running ");
})

const express = require('express');
const app = express();
require("./connect/connectDB");
const auth = require("./routes/auth");
const list = require("./routes/list");
const cors = require("cors");
// allow json format 
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.send("Hello V2");
});


// app.use("api/v1", auth); error as i'm not use / in front of api

app.use("/api/v1", auth);
app.use("/api/v2", list);

const Port = 1000;
app.listen(Port, ()=>{
    console.log(`server started at port: ${Port}`);
}); 
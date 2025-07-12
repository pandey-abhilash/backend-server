const express = require("express");
const bodyParser =require("body-parser");

let app = express();

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3001;



// This API used to send the information
app.post("/customer/register", (req, res) => {
    // console.log(req.body);
    const { name, mobile, emailId, password }=req.body;
    
    console.log(name, mobile, emailId, password);

    res.json({
        status:"data recevied"
    })

})

app.get("/customer", (req, res) => {
    // console.log(req.body);;

    res.json({
        status:"data recevied", 
        data:{
            name:"Abhilash Pandey",
            Address:"Bengaluru"
        }
    })

})


app.listen(PORT, () => {
    console.log(`Backend server running with the port: http://localhost:${PORT}`);
});


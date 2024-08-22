// module imports:
const express = require("express");
const path = require("path");


const app = express(); 
const PORT = 3000;



app.use(express.static(path.join(__dirname,'public'))); //setting up the path as the "public folder"

app.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})

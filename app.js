const express = require("express");
const app = express();

app.use(express.json()); 

const postsRoutes = require("./routers/router.js"); 
app.use("/posts", postsRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server in ascolto sulla porta ${PORT}`));
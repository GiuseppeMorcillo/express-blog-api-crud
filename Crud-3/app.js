const express = require("express");
const app = express();
app.use(express.json());

const postsRoutes = require("./routers/router.js");
app.use("/posts", postsRoutes);
const {notFound, errorsHandler} = require("./middlewares.js"); // Importa i middleware
app.use(notFound); // Gestisce le rotte inesistenti
app.use(errorsHandler); //Gestione degli errori
const PORT = 3000;
app.listen(PORT, () => console.log(`Server in ascolto sulla porta ${PORT}`));
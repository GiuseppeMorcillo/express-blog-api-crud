// Middleware per gestire rotte inesistenti
function notFound(req, res, next) {
    res.status(404)
    res.json({
        error: "Not Found",
        message: "Pagina non trovata"
    })
}
//Middleware per gestire gli errori
function errorsHandler(err,req,res,next){
    res.status(500);
    res.json({
        error: err.message
    })
}
module.exports = {notFound,errorsHandler};
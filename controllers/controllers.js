let posts = require('../data/posts.js')
//Restituisce i post in base ai tags selezionati
function index(req, res) {
    let filteredPosts = posts;
    if (req.query.tags) {
        filteredPosts = posts.filter(
            post => post.tags.includes(req.query.tags)
        )
    }
    res.json(filteredPosts)
}
//Restituisce un singolo post per L'ID
function show(req, res) {
    const post = posts.find(element => element.id === parseInt(req.params.id));
    if (!post) return res.status(404).json({ message: "Post non trovato" });
    res.json(post);
}
function destroy(req, res) {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) return res.status(404).json({ message: "Post non trovato" });

    posts.splice(postIndex, 1);
    console.log("Lista aggiornata:", posts);
    res.status(204).send();
}
module.exports = { index, show , destroy}
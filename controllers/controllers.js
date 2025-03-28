let posts = require('../data/posts.js')
function index(req,res){
    let filteredPosts = posts;
    if(req.query.tags){
        filteredPosts = posts.filter(
            post => post.tags.includes(req.query.tags)
        )
    }
    res.json(filteredPosts)
}
module.exports ={index}
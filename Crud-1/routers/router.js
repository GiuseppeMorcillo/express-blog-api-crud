const express = require("express");
const router = express.Router();
const postsController = require("../controllers/controllers.js");
router.get("/", postsController.index);
router.get("/:id", postsController.show);
router.delete("/:id", postsController.destroy);
module.exports = router;
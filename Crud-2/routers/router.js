const express = require("express");
const router = express.Router();
const postsController = require("../controllers/controllers.js");
router.get("/", postsController.index);
router.get("/:id", postsController.show);
router.post("/store", postsController.store)
router.put("/update/:id", postsController.update)
router.delete("/:id", postsController.destroy);
module.exports = router;
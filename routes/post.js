const express = require("express");
const router = express.Router();

const post = require("../controllers/post");

router.get("/", post.getPosts);
router.get("/:id", post.getPostById);

router.post("/", post.createPost);
router.put("/:id", post.updatePost);
router.delete("/:id", post.deletePost);

module.exports = router;

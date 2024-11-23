const express = require("express");
const router = express.Router();

const Post = require("../controllers/posts");

router.get("/", Post.getPosts);
router.get("/:id", Post.getPostById);

router.post("/", Post.createPost);
router.put("/:id", Post.updatePost);
router.delete("/:id", Post.deletePost);

module.exports = router;

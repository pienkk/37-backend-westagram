const express = require("express");
const router = express.Router();

const {postController} = require("../controllers");
const {validateToken} = require("../middleware/auth")


router.get("/search", postController.search);

router.post("/up", validateToken, postController.postUp);

router.patch("/:postId", postController.postEdit);

router.delete("/:postId", postController.postDelete);


module.exports = {
    router
}
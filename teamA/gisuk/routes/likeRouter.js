const express = require("express");
const router = express.Router();

const {likeController} = require("../controllers");


router.post("/", likeController.likeAdd);


module.exports = {
    router
}
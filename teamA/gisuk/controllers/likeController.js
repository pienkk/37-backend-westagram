const likeService = require("../services/likeService");
const asyncWrap = require("../middleware/async-wrap");

const likeAdd = asyncWrap(async (req, res) => {
        const { userId, postId } = req.body;
        if ( !userId || !postId ) {
            return res.status(400).json({ message: "KEY_ERROR" });
        }
        await likeService.likeAdd( userId, postId );
        res.status(201).json({ message: "Like_SUCCSES" });
})


module.exports = {
    likeAdd
}
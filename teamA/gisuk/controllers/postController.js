const postService = require("../services/postService");
const asyncWrap = require("../middleware/async-wrap");

const search = asyncWrap(async (req, res) => {
        const result = await postService.search();
        res.status(200).json({ data:result });
})

const postUp = asyncWrap(async (req, res) => {
        const { title, content } = req.body;
        const userId = req.userId;
        if ( !title || !content ) {
            return res.status(400).json({ message: "KEY_ERROR" });
        }
        await postService.postUp( title, content, userId );
        res.status(201).json({ message: "POSINGUP_SUCCESS" });
});

const postEdit = asyncWrap(async (req, res) => {
        const postId = req.params.postId;
        const { title, content, userId } = req.body;
        if ( !postId || !title || !content || !userId ) {
            return res.status(400).json({ message: "KEY_ERROR" });
        }
        const result = await postService.postEdit( postId, title, content, userId );
        res.status(200).json({ data: result[0] });
})

const postDelete = asyncWrap(async (req, res) => {
        const postId = req.params.postId;
        if ( !postId ) {
            return res.status(400).json({ message: "KEY_ERROR "});
        }
        await postService.postDelete( postId );
        res.status(204).json({ message : "postingDeleted" });
})


module.exports = {
    search,
    postUp,
    postEdit,
    postDelete
}
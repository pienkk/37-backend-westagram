const userService = require("../services/userService");
const asyncWrap = require("../middleware/async-wrap");

const userPost = asyncWrap(async (req, res) => {
        const userId = req.params.userId;
        if ( !userId ) {
            return res.status(400).json({ message: "KEY_ERROR" })
        }
        const result = await userService.userPost( userId );
        res.status(200).json({ data: result });
})

const signIn = asyncWrap(async (req, res) => {
        const { email, password } = req.body;
        if ( !email || !password ) {
            return res.status(400).json({ message : "KEY_ERROR" })
        }
        const result = await userService.signIn( email, password );
        return res.status(200).json({ accessToken: result })
})

const signUp = asyncWrap(async (req, res) => {
        const { name, email, password, profileImage } = req.body;
        if( !name || !email || !password || !profileImage) {
            return res.status(400).json({ message: "KEY_ERROR" });
        }
        await userService.signUp( name, email, password, profileImage );
        res.status(201).json({ message: "userCreated" });
})


module.exports = {
    userPost,
    signIn,
    signUp
}
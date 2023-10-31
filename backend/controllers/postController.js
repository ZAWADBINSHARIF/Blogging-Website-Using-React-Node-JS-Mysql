// external import

// internal import
import { db } from "../config/dbConnection.js"

// @desc Get All Posts
// route GET /api/posts
// @access Public
export function getPosts(req, res) {
    const { cat } = req.query
    const sql = cat ? "SELECT * FROM posts WHERE category=?" : "SELECT * FROM posts"

    db.query(sql, [cat], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data)
    })
}

// @desc Get Single Post
// route GET /api/post
// @access Public
export function getSinglePost(req, res) {
    const { id: postID } = req.params
    const sql = "SELECT * FROM posts WHERE id=?"
console.log(postID)
    db.query(sql, [postID], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data[0])
    })
}
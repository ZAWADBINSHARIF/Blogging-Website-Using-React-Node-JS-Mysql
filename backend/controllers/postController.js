// external import
import jwt from "jsonwebtoken";

// internal import
import { db } from "../config/dbConnection.js";

// @desc Get All Posts
// route GET /api/posts
// @access Public
export function getPosts(req, res) {
    const { cat } = req.query;
    const sql = cat ? "SELECT * FROM posts WHERE category=?" : "SELECT * FROM posts";

    db.query(sql, [cat], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data);
    });
}

// @desc Get Single Post
// route GET /api/post/:id
// @access Public
export function getSinglePost(req, res) {
    const { id: postID } = req.params;

    const sql = "SELECT username, title, p.desc, p.img post_img, u.img user_img, date, category, date FROM users u JOIN posts p ON p.user_id = u.id WHERE p.id = ?";

    db.query(sql, [postID], (err, data) => {
        if (err) return res.status(500).json(err);

        return res.status(200).json(data[0]);
    });
}

// @desc Post a  Single Post
// route POST /api/post
// @access protected
export function uploadPost(req, res) {

    const { title, desc, img, category, date } = req.body;
    const user_id = req.userInfo.id;

    // console.log(title, desc, img, category, date, user_id)

    // add post

    const sql = "INSERT INTO posts (`title`, `desc`, `img`, `category`, `date`, `user_id`) VALUES (?, ?, ?, ?, ?, ?);";

    db.query(sql, [title, desc, img, category, date, user_id], (err, data) => {
        if(err) console.log(err)
        if (err) return res.status(403).json(`${err}`);

        console.log(data);

        // console.log(req.userInfo);
        console.log(req.body);
        res.json(req.body);
    });

}

// @desc Delete Single Post
// route DELETE /api/post/:id
// @access protected
export function deleteSinglePost(req, res) {
    const token = req.cookies.access_token;
    if (!token) return res.status(401).json("Not authenticated");

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, userInfo) => {
        if (err) return res.status(403).json('Token is not valid');

        const postId = req.params.id;
        const sql = `DELETE FROM posts WHERE id = ? AND user_id = ?`;

        db.query(sql, [postId, userInfo.id], (err, data) => {
            if (err) return res.status(403).json('You can delete only your own post');

            return res.status(200).json('Post has been deleted');
        });
    });

}
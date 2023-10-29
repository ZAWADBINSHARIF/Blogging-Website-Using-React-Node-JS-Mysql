// external import
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// internal import
import { db } from "../config/dbConnection.js"


// @desc Login a user
// route POST api/auth/login
// @access Public
export function loginUser(req, res) {
    const { username, password } = req.body
    if (!username || !password )
        return res.status(400).json({ error: { msg: "Fill all the from inputs" } })

    let sql = "SELECT * FROM users WHERE username = ?"

    db.query(sql, [username], (err, data) => {
        if (err) return res.json(err)
        if (data.length === 0) return res.status(404).json({ error: { msg: 'User not found' } })
        
        const isPasswordCorrect = bcrypt.compareSync(password, data[0].password)
        console.log(isPasswordCorrect)
        if (!isPasswordCorrect)
            return res.status(400).json({ error: { msg: 'Password is worng' } })

        const token = jwt.sign({ id: data[0].id }, process.env.JWT_SECRET_KEY)

        res.cookie('access_token', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000 // * 1 day
        }).status(200).json({...data[0], password: ''})
    })
}

// @desc Register a new user
// route POST api/auth/registration
// @access Public
export function registerUser(req, res) {
    const { username, email, password } = req.body

    if (username == null || email == null || password == null)
        return res.status(400).json({ error: { msg: "Fill all the from inputs" } })

    let sql = "SELECT * FROM users WHERE email = ? OR username = ?"

    db.query(sql, [email, username], async (err, data) => {
        if (err) return res.json(err)

        if (data.length)
            return res.status(409).json({ error: { msg: 'User already exists' } })

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        sql = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)"
        const VALUE = [username, email, hash]

        db.query(sql, [VALUE], (err, data) => {
            if (err) return res.json(err)
            return res.status(200).json({ msg: 'New account has been created!' })
        })

    })
}

// @desc Logout user
// route POST api/auth/logout
// @access Public
export function logoutUser(req, res) {
    res.clearCookie('access_token', {
        sameSite: 'none',
        secure: true
    }).status(200).json('User has been logged out')
}
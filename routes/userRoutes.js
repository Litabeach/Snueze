const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


//register
router.post("/", async (req, res) => {
    try {
        const { email, password, passwordVerify } = req.body;

        //validation

        if (!email || !password || !passwordVerify)
            return res
                .status(400)
                .json({
                    errorMessage: "Please enter all required fields."
                });

        if (password.length < 8)
            return res
                .status(400)
                .json({
                    errorMessage: "Please enter a password with at least 8 characters."
                });

        if (password !== passwordVerify)
            return res
                .status(400)
                .json({
                    errorMessage: "Please enter the same password twice."
                });

        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res
                .status(400)
                .json({
                    errorMessage: "An account with this email already exists."
                });

        //hash the password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)
        console.log(passwordHash)

        //create new user account 
        const newUser = new User({
            email, passwordHash
        })
        //save new user to database 
        const savedUser = await newUser.save()

        //sign the token
        const token = jwt.sign(
            {
                user: savedUser._id
            },
            process.env.JWT_SECRET
        );

        console.log(token);

        //send the token in an HTTP only cookie
        res.cookie("token", token, {
            httpOnly: true
        })
            .send();


    } catch (err) {
        console.error(err)
        res.status(500).send()
    }
});

//login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        //validate 
        if (!email || !password)
            return res
                .status(400)
                .json({
                    errorMessage: "Please enter all required fields."
                });

        const existingUser = await User.findOne({ email })
        if (!existingUser)
            return res
                .status(401)
                .json({
                    errorMessage: "Wrong email or password."
                });

        const passwordCorrect = await bcrypt.compare(password, existingUser.passwordHash)
        if (!passwordCorrect)
            return res
                .status(401)
                .json({
                    errorMessage: "Wrong email or password."
                });
        
        //sign the token
        const token = jwt.sign(
            {
                user: existingUser._id
            },
            process.env.JWT_SECRET
        );

        //send the token in an HTTP only cookie
        res.cookie("token", token, {
            httpOnly: true
        })
            .send();


    } catch (err) {
        console.error(err)
        res.status(500).send()
    }
});

//logout
router.get("/logout", (req, res) => {
    res.cookie("token", "",{
    httpOnly: true,
    expires: new Date(0)
    })
    .send();
});


module.exports = router;
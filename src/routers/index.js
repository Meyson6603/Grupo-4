const express = require("express");
const router = express.Router();
const path = require("path");
const transactionRoutes = require("./transactionRoutes.js");
const userRoutes = require("./userRoutes.js");
const authenticationRoutes = require("./authenticationRoutes.js");
const { login, registerUser } = require("../controllers/authController.js");

// router.use("/transactions", transactionRoutes);
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/html/index.html"));
});

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/html/index.html"));
});

router.get("/signIn", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/html/index.html"));
});

router.get("/user", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/html/index.html"));
});

router.get("/general", (req, res) => {
    res.sendFile(path.join(__dirname, "../../public/html/index.html"));
});





router.post('/login', login);
router.post('/register', registerUser);



router.use('/users', userRoutes);
router.use('/auth', authenticationRoutes);

module.exports = router;

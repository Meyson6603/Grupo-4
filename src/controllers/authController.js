function login(req, res) {
    const { email, password } = req.body;
    console.log(email, password);
    res.send('login');
}


function registerUser(req, res) {
    const { name, email, area, password } = req.body;
    console.log(name, email, area, password);
    res.send('register');
}

module.exports = {
    login,
    registerUser
};
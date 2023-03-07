import userService from "../services/userService";


let handleLogin = async (req, res) => {
    // let email= req.body.email;
    // let password = req.body.password;
    let email = req.query.email;
    let password = req.query.password;
    // console.log(req.params.x1);
    // console.log(req.params.x2);

    console.log("vao login", email)
    console.log("vao login", password)
    try {

        if (!email || !password) {
            return res.status(500).json({
                errCode: 1,
                message: 'Missing inputs parameter!'
            })
        }

        let userData = await userService.handleUserLogin(email, password);
        console.log(userData)
        //check email exist 
        //compare password
        // return userInfor
        //access_token: JWT json web token
        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            user: userData.user ? userData.user : {}
        })
    } catch (error) {
        console.log("bi loi roi", error)
    }
}

module.exports = {
    handleLogin: handleLogin
}
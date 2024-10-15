const { getAllUsers } = require('../services/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = require('../models/index');
const initialModelSqlServer = require('../models/initial-models');
const { where } = require('sequelize');
const models = initialModelSqlServer(db);

async function hashPasswordBcrypt(password) {
    const saltRounds = 5; // Độ mạnh của salt
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
}

class UserController {

    //[GET] /users/register
    register(req, res, next) {
        res.render('users/register');
    }

    //[POST] /users/register
    async doRegister(req, res, next) {
        const data = req.body;
        const hashedPassword = await hashPasswordBcrypt(data.password);
        data.password = hashedPassword;

        const existUsername = await models.USER.findOne({
            where: { username: data.username }
        })
        if (existUsername) {
            req.flash("error", `Username đã tồn tại!`);
            res.redirect("back");
            return;
        }

        const newUser = await models.USER.create({
            USERNAME: data.username,
            PASSWORD: data.password,
            ROLE_ID: 3,
        });

        console.log('>>> New user: ', newUser);

        req.flash("success", `Đăng ký tài khoản thành công!`);

        // set token user cho tài khoản vừa dky để ko cần đăng nhập lại
        res.cookie('tokenUser', newUser.TOKEN_USER);

        res.redirect('/users/findAll');
    }

    //[GET] /users/findAll
    async findAllUsers(req, res, next) {
        const data = await getAllUsers();
        res.json(data);
    }

    //[GET] /users/login
    login(req, res, next) {
        res.render('users/login');
    }

    // [POST] /users/login
    async doLogin(req, res, next) {
        const data = req.body;

        const user = await models.USER.findOne({
            where: { USERNAME: data.username }
        });

        const role = await models.ROLE.findOne({
            where: { ROLE_ID: user.ROLE_ID }
        });

        if (user) {
            const comparePassword = await bcrypt.compare(data.password, user.PASSWORD);
            if (!comparePassword) {
                req.flash("error", `Mật khẩu không đúng!`);
                res.redirect("back");
                return;
            }

            // Tạo token với JWT
            const token = jwt.sign({ userId: user.USER_ID, role: role.NAME }, 'secret_key', { expiresIn: '1h' });

            // Lưu token vào cookie
            res.cookie('tokenUser', token); // Sử dụng httpOnly và secure cho bảo mật
            console.log('>>> Token: ', token);

            // Trả về phản hồi
            res.json({ message: 'Login successful', token });
            return;
        }

        req.flash("error", `Không có username này!`);
        res.redirect("back");
    }
}

module.exports = new UserController();
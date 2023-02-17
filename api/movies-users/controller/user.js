const User = require("../../models/user");
const createError = require("http-errors");
const Address = require("../../models/address");

exports.register = async (req, res, next) => {
    const { username, email, password,country,area,city,street,number } = req.body;
    try {
        const user = await User.findOne({
            where: {
                email,
            },
        });
        if (user) {
            return res.json({
                "message":"use another email"
            });
        }
        await User.create({
            username,
            email,
            password,
        });
        await Address.create({
            country,
            area,
            city,
            street,
            number,
        });
        res.status(200).send("User created successfully");
    } catch (error) {
        return res.json({
            "message": error.message,
            email
        });
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                email,
                password,
            },
        });
        if (!user) {
            return res.status(401).json({
                "message": "User not found",
               
            });
        }
        res.status(200).send(user);
    } catch (error) {
        return res.json({
            "message": error.message,
        });
    }
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../model/users");
const bcrypt_1 = __importDefault(require("bcrypt"));
const router = (0, express_1.Router)();
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await users_1.userModel
        .findOne({ email })
        .select("+password");
    if (!user) {
        res.status(400).json({ message: "User not found" });
        return;
    }
    const compare = await bcrypt_1.default.compare(password, user.password);
    if (!compare) {
        res.status(400).json({ message: "Invalid email or password" });
        return;
    }
    const userData = user.toObject();
    const { password: _, ...safeUser } = userData;
    res.status(200).json({ message: "Login successful", user: safeUser });
});
exports.default = router;
//# sourceMappingURL=login.js.map
import { Router, Request, Response } from "express"
import { userModel } from "../db/users"
import bcrypt from "bcrypt"
const router = Router()

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body
 const user = await userModel
 .findOne({email})
 .select("+password")

  if (!user) {
    res.status(400).json({ message: "User not found" })
 return  }

  const compare = await bcrypt.compare(password, user.password)
  if (!compare) {
     res.status(400).json({ message: "Invalid email or password" })
 return}

  res.status(200).json({ message: "Login successful", user })
})

export default router

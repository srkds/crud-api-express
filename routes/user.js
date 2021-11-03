const express = require("express");
const {
  addUser,
  getUsers,
  deleteUser,
  updateUser,
  getUser,
} = require("./../controllers/user");

const router = express.Router();

router.get("/user/:id", getUser);
router.post("/addUser", addUser);
router.get("/users", getUsers);
router.delete("/deleteuser/:id", deleteUser);
router.put("/updateuser/:id", updateUser);

module.exports = router;

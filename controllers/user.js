const User = require("./../models/user");

exports.addUser = (req, res) => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) return res.status(400).json({ err: "Error insert data into db" });
    res.json(user);
  });
};

exports.getUsers = (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(400).json({ err: "Error fetching all users" });
    res.json(users);
  });
};

exports.deleteUser = (req, res) => {
  var uid = req.params.id;
  User.deleteOne({ _id: uid }, (err, user) => {
    if (err) return res.status(400).json({ err: "Error deleting User" });
    res.json({ msg: "Deleted Successfuly" });
  });
};

exports.updateUser = (req, res) => {
  const uid = req.params.id;
  const olduser = req.body;
  User.findByIdAndUpdate(uid, olduser, { new: true }, (err, user) => {
    if (err) return res.status(400).json({ err: "Error Updation of user" });
    res.json(user);
  });
};

exports.getUser = (req, res) => {
  const uid = req.params.id;
  User.findOne({ _id: uid }, (err, user) => {
    if (err) return res.status(400).json({ err: "Error geting user" });
    res.json(user);
  });
};

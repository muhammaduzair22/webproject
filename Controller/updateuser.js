const jwt = require("jsonwebtoken");
const User = require("../Models/User")

const updateUser = async (req, res) => {
  const _id = req.params.id;

  try {
    const user = await User.findOne({ _id });

    if (!user) {
      return res.status(404).send("Not found");
    }

    const updates = Object.keys(req.body);
    updates.forEach((update) => (user[update] = req.body[update]));

    await user.save();

    res.send(user);
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = { updateUser };

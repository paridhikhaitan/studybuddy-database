const express = require("express");
const router = express.Router();

const Wish = require("../../models/Wish");

router.get("/", (req, res) => {
  Wish.find()
    .then(wishes => res.json(wishes))
    .catch(err =>
      res.status(404).json({
        nowishes: "No Wishes"
      })
    );
});

router.post("/", (req, res) => {
  Wish.create(req.body)
    .then(wish => res.json({ msg: "Wish Added" }))
    .catch(err => res.status(400).json({error: err}));
});

module.exports = router;

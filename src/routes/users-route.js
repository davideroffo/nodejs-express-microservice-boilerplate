const express = require("express");

const router = express.Router();

router.get("/api/v1/users", async (req, res) => {
  res.status(200).send({
    users: [
      {
        username: "dave",
      },
      {
        username: "Mike",
      },
    ],
  });
});

module.exports = router;

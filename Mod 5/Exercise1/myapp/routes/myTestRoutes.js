const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
  router.get("/test", (req, res) => {
    res.send("This is a test");
  });
  
  router.get("/test2", (req, res) => {
    res.send("Another test for this port");
  });

  module.exports = router;
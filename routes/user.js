const express = require('express');
const router = express.Router();
const user = require('../services/login');

/* GET users. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await user.getUser(req.query.page));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

module.exports = router;
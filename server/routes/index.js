var express = require('express');
var router = express.Router();

router.get('/api', (req, res, next) => {
  res.status(200).json({ name : 'shson'});
})

module.exports = router;

const express = require('express');
const router = express.Router();
const models = require('../models/index');

router.get('/api', async (req, res, next) => {
  try{
    const users = await models.dept.findAll({
      include: [{
        model: models.emp,
        attributes: ['empId', 'name']
      }]
    });
    res.status(200).json(users);

  } catch(error) {
    console.error(error);
    next(error);
  }
})

module.exports = router;

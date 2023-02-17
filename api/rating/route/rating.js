const express = require('express');
const router = express.Router();
const ratingController = require('../controller/ratingController');

router.post('/:id', ratingController.rateMovie);
module.exports=router;
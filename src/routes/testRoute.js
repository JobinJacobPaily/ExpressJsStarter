const express = require('express');
const apiUrls = require('../constants/apiUrls');
const testController = require('../modules/testModule/controllers/testController')
const auth = require('../../../middlewares/auth');
const router = express.Router();

router.get(apiUrls.test.url ,auth , testController.test);

module.exports = router;
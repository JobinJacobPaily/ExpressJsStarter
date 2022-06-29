const express = require('express');
const apiUrls = require('../constants/apiUrls');
const testController = require('../modules/testModule/controllers/testController')
const router = express.Router();

router.get(apiUrls.test.url , testController.test);

module.exports = router;
const apiUrls = require("../../../constants/apiUrls");
const catchAsync = require("../../../helpers/catchAsync");
const logger = require('../../../helpers/logger');

const test = catchAsync(async(req ,res ) => {
    req.isDebug = 1;
    obj = {
        statusCode : 20001,
        message : "success"
    }
    logger.logging(req.isDebug , obj ,apiUrls.test);
    res.status(200).json(obj);
});

module.exports ={
    test
};
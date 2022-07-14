module.exports = (req , res , next) => {
    if(req.headers.isdebug && req.headers.isdebug == 1)
            req.isDebug = 1;
    else
            req.isDebug = 0;

    next();
}
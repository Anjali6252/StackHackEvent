const router = require('express').Router();

router.get('*',function(req,res) {
    console.log('Hi admin got the request');

    return res.json({message: 'Admin got your details'});
});

module.exports = router;


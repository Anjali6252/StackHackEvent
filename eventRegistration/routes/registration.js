const router = require('express').Router();

router.get('/newRegistration',function(req,res) {

    console.log('I got message');
    return res.status(200).json({message:'I got your data'});
    console.log('print');
});

module.exports = router;
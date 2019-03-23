const express = require('express');
const router  = express.Router();

//@route     GET api//users/test
//@desc       test users route
//@access     public

router.get('/' ,(req,res) => res.json({
    msg : 'Users work'
}))

module.exports = router;
const express = require('express');
const router  = express.Router();

//@route     GET api/profile/test
//@desc       test profile route
//@access     public

router.get('./' ,(req,res) => res.json({
    msg : 'Profile work'
}))

module.exports = router;
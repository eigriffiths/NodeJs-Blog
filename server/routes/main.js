const express = require('express');
const router = express.Router();

// Routes 
router.get('', (req, res) => {
    const locals = {
        title: "nodejs Blog",
        description: "Simple blog created with NodeJs, mongo and express"
    }

    res.render('index', {locals});
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;
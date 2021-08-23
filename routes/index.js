var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Dashboard' });
});

router.get('/timer', function (req, res, next) {
  res.render('timer', { title: 'Timer' })
})

module.exports = router;

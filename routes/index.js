var express = require('express');
var router = express.Router();

const title = 'Mini Message Board';
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next){
  res.render('form', {title: 'Form', title: title});
});

router.post('/new', function(req, res, next){
  const date = new Date();

  messages.push({
    text: req.body.message,
    user: req.user,
    added: new Date()
  })

  res.redirect('/');
})
module.exports = router;

const messages = [
  {
    text: 'Hi, there',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World',
    user: 'Tems',
    added: new Date()
  }
]

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});
router.get('/new', function(req, res, next){
  res.render('form', {title: 'form'})
})

router.post('/new', function(req, res, next){
  const newMessage = {
    title: req.body.title,
    description: req.body.description,
    username: req.body.username,
    added: new Date()
  }
  messages.push(newMessage);
  res.redirect('/');
})

module.exports = router;

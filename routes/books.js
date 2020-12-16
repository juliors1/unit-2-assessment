var express = require('express');
var router = express.Router();
const booksCtrl = require('../controllers/books')

router.get('/new', booksCtrl.new)
router.post('/', booksCtrl.create)
router.get('/', booksCtrl.index)
router.delete('/:id', booksCtrl.delete)
router.get('/:id', booksCtrl.show)
router.put('/:id',booksCtrl.update)
module.exports = router;

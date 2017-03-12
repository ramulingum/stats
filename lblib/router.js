var express = require('express');
var router = express.Router();
var control = require('./controller');
router.post('/stats', [control.saveStat]);
router.get('/stats', [control.getStat]);
module.exports = {"router":router}
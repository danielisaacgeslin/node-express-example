'use strict';
const express = require('express');
const router = express.Router();

const Article = require('../classes/Article.js');

/* GET home page. */
router.get('/', (req, res)=> {
  res.send('index');
});

router.get('/getArticles', (req, res)=> {
  const article = new Article();
  article.getArticles().then(articles => res.send(articles));
});

module.exports = router;

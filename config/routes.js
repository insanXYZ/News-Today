const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/newsController');

router.get('/', newsController.index);
router.get('/rekomendasi', newsController.news);
router.get('/news', newsController.news);
module.exports = router;
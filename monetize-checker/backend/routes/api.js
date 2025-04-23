const express = require('express');
const router = express.Router();
const { analyzeSEO } = require('../controllers/seoController');
const { createPaymentIntent } = require('../controllers/paymentController');
const { getYoutubeStats } = require('../controllers/youtubeController');

router.post('/analyze', analyzeSEO);
router.post('/create-payment-intent', createPaymentIntent);
router.post('/youtube-stats', getYoutubeStats);

module.exports = router;
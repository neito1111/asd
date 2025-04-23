const express = require('express');
const router = express.Router();
const { analyzeSEO } = require('../controllers/seoController');
const { createPaymentIntent } = require('../controllers/paymentController');

router.post('/analyze', analyzeSEO);
router.post('/create-payment-intent', createPaymentIntent);

module.exports = router;
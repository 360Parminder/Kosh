const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadAccountStatement, initiateLink, getSubscriptions } = require('../controllers/aaController');
const { protect } = require('../controllers/authController');
const upload = multer({ dest: 'uploads/' });


router.use(protect);
router.post('/upload',upload.single('accountStatement'),uploadAccountStatement);

router.post('/initiate-link',initiateLink)

router.get('/subscriptions',getSubscriptions);

module.exports = router;
const express = require('express');
const router = express.Router();
const multer = require('multer');
const { uploadAccountStatement } = require('../controllers/accountAggregatorController');
const { protect } = require('../controllers/authController');
const upload = multer({ dest: 'uploads/' });


router.use(protect);
router.post('/upload',upload.single('accountStatement'),uploadAccountStatement);


module.exports = router;
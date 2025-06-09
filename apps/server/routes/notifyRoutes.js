const express = require('express');
const router = express.Router();
const { notify } = require("../controllers/notifyController");





router.post('/subscribe',notify);


module.exports = router;
var express = require('express');
var router = express.Router();

let index = require('../controllers/index')

/* GET home page. */
router.get('/',index.index);
router.get('/comp',index.comp);
router.get('/earth',index.earth);

router.get('/vanuatu',index.vanuatu);
router.post('/vanuatu', index.vote_vanuatu);

router.get('/lucia',index.lucia);
router.post('/lucia', index.vote_lucia)

router.get('/aland',index.aland);
router.post('/aland', index.vote_aland);

router.get('/seychelles',index.seychelles);
router.post('/seychelles', index.vote_seychelles);

router.get('/map',index.map);

module.exports = router;

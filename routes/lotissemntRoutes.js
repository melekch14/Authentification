// routes/lotissemntRoutes.js
const express = require('express');
const lotissemntController = require('../controllers/lotissemntController');

const router = express.Router();

router.get('/', lotissemntController.getAllLotissemnts);
router.get('/:id', lotissemntController.getLotissemntById);
router.post('/', lotissemntController.createLotissemnt);
router.put('/:id', lotissemntController.updateLotissemnt);
router.delete('/:id', lotissemntController.deleteLotissemnt);

module.exports = router;

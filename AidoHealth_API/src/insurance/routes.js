const {Router} = require('express');
const controller = require('./controller');

const router = Router();

router.get('/insurance', controller.getInsurance);
router.post('/insurance', controller.addInsurance);
router.get('/insurance/:id', controller.getInsuranceById);
router.delete('/insurance/:id', controller.deleteInsuranceById);
router.put('/insurance/:id', controller.updateInsurance);
router.put('/insurance/:id/:active', controller.updateStatusCode);


module.exports = router;
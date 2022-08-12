const router = require('Express').Router();
const authController = require('../controllers/authController');

//Authentication;
router.post('/login', authController.login);

//Reegistration
router.post('/', authController.register);

module.exports = router;

const express = require('express');
const router = express.Router();
const auth = require('../controllers/authController');

router.get('/'), auth, (req, res) => {
    if(req.user.admin) {
    res.send('Esse dado só pode ser visto pelo ADMIN')}
    else {
        res.status(401).send('NOT ADMIN: Access Denied')
    }
}
router.get('/free', auth, (req, res) => {
    res.send('Esse dado só pode ser visto por quem está logado')
})

module.exports = router;
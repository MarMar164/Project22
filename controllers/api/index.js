const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./projectRoutes');
const stockRoutes = require('./stockRoutes');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/stock', stockRoutes);

module.exports = router;

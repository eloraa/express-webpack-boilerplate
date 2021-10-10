const express = require('express')

const router = express.Router()

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.render('index', { title: 'Express' }))

module.exports = router

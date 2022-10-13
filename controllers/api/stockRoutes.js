const router = require('express').Router();
const fetch = require('node-fetch')

router.get('/test', (req, res) => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${process.env.ALPHAVANTAGE}`).then(data => data.json())
    .then(data => res.json(data))
});

module.exports = router;
const router = require('express').Router();
const fetch = require('node-fetch')


// API ROUTE FOR 15 MIN update for each symbol
router.get('/test', (req, res) => {
    fetch(`https://financialmodelingprep.com/api/v3/historical-chart/15min/${symbol}?apikey=${process.env.FinancialModel}`).then(data => data.json())

    .then(data => res.json(data))
});

router.get('/stockNews', (req, res) => {
    fetch(`https://financialmodelingprep.com/api/v3/stock_news?tickers=AAPL,FB,GOOG,AMZN&page=0&apikey=${process.env.FinancialModel}`).then(data => data.json())
    .then(data => res.json(data))
});


router.post('/search', (req, res) => {
    console.log(req.body)
    fetch(`https://financialmodelingprep.com/api/v3/search?query=${req.body.search}&limit=10&exchange=NASDAQ&apikey=${process.env.FinancialModel}`).then(data => data.json())
    .then(data => res.json(data))
  });


module.exports = router;
const router = require('express').Router();
const fetch = require('node-fetch')

router.get('/test/:stock_ticker', (req, res) => {
    let ticker = req.params.symbol
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${ticker}&interval=5min&apikey=${process.env.ALPHAVANTAGE}`).then(data => data.json())
    .then(data => res.json(data))
});

router.get('/stockNews', (req, res) => {
    fetch(`https://financialmodelingprep.com/api/v3/stock_news?tickers=AAPL,FB,GOOG,AMZN&page=0&apikey=${process.env.FinancialModel}`).then(data => data.json())
    .then(data => res.json(data))
});


module.exports = router;
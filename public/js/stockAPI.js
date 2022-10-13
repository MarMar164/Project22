//  API DAILY STOCK OPEN /CLOSE
const stockOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'WW20GXBNI408HQN8',
		'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
	}
};

fetch('https://alpha-vantage.p.rapidapi.com/query?interval=5min&function=TIME_SERIES_INTRADAY&symbol=MSFT&datatype=json&output_size=compact', stockOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


// WW20GXBNI408HQN8

//var request = require('request');

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
//var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=WW20GXBNI408HQN8';
//
//request.get({
//    url: url,
//    json: true,
//    headers: {'User-Agent': 'request'}
//  }, (err, res, data) => {
//    if (err) {
//      console.log('Error:', err);
//    } else if (res.statusCode !== 200) {
//      console.log('Status:', res.statusCode);
//    } else {
//      // data is successfully parsed as a JSON object:
//      console.log(data);
//    }
//});
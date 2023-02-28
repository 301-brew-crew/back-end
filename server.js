const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
require('dotenv').config();
const PORT = process.env.PORT || 3002

const home = require('./routes/home.js');
const yelpAPI = require('./routes/yelp.js');
const bingAPI = require('./routes/bing.js');
const missingPage = require('./routes/missingPage.js');

app.get('/', home);
app.get('/yelp/:location', yelpAPI);
app.get('/bingDirections/:directionQuery', bingAPI);
app.get('*', missingPage);

app.listen(PORT, () => console.log(`listening on ${PORT}`));
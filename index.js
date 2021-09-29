const axios = require('axios');
const cheerio = require('cheerio')
const express = require('express')
const PORT = 2020

const app = express()

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT} `))

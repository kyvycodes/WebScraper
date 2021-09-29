const axios = require('axios');
const cheerio = require('cheerio')
const express = require('express')
const PORT = 2020

const app = express()
const url = 'https://www.cnn.com/'

axios(url)
  .then( response => {
    const html = response.data
    const siteData = cheerio.load(html)

    headlines('.cd__headline', html).each(function() {
      const headlines = siteData(this).text()
      const url = siteData(this).find('a').attr('href')
    })


  })

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT} `))

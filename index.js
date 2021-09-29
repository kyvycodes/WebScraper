const axios = require('axios');
const cheerio = require('cheerio')
const express = require('express')
const PORT = 2020

const app = express()
const url = 'https://www.cnn.com/world'

axios(url)
  .then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []

    try {
    $('.cd__headline', html).each(function() {
      const headlines = $(this).text()
      const url = $(this).find('a').attr('href')
      articles.push({
        headlines,
        url
      })
    })
    console.log(articles)
   } catch(err) { console.log(err)}

  })

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT} `))

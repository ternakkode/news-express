const express = require('express')
const route = express.Router()
const models = {
    news: require('../models/news')
}

let totalViews = 0
const logViewer = (req, res, next) => {
    totalViews++
    next()
}

route.get('/', logViewer, (req, res) => {
    const news = models.news.fetchAll()
    res.render('home', { news: news, visitor: totalViews })
})

route.get('/news/:newsId', logViewer, (req, res) => {
    const news = models.news.fetchById(req.params.newsId) ?? {}
    res.render('news', { news: news })
})

route.get('/about', logViewer, (req, res) => {
    res.render('about')
})

route.get('/*', (req, res) => {
    res.render('404')
})

module.exports = route
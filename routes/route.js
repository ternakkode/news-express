const express = require('express')
const route = express.Router()
const models = {
    news: require('../models/news')
}

let totalViews = 0
route.use(function (req, res, next) {
    totalViews++
    next()
})

/*
    contoh penggunaan model news
    1. route /checkAll untuk mengambil semua data
    2. route /checkById/:newsId untuk mengambil berdasarkan id
*/
route.get('/checkAll', (req, res) => {
    const news = models.news.fetchAll()
    res.json(news)
})
route.get('/checkById/:newsId', (req, res) => {
    const news = models.news.fetchById(req.params.newsId) ?? {}
    res.json(news)
})

route.get('/', (req, res) => {
    const news = models.news.fetchAll()
    res.render('home', { news: news })
})

route.get('/news/:newsId', (req, res) => {
    const news = models.news.fetchById(req.params.newsId) ?? {}
    res.render('news', { news: news })
})

route.get('/about', (req, res) => {
    res.render('about')
})

route.get('/*', (req, res) => {
    res.render('404')
})

module.exports = route
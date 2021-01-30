const express = require('express')
const route = express.Router()
const models = {
    news: require('../models/news')
}

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

module.exports = route
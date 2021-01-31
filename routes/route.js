const express = require('express')
const route = express.Router()

const models = { news: require('../models/news.model') }

let totalViews = 0
const logViewer = (req, res, next) => {
    totalViews++
    next()
}

route.get('/', logViewer, (req, res) => {
    const news = models.news.fetchAll()
    res.render('home', { news: news, visitor: totalViews })
})

route.get('/news/:slug', logViewer, (req, res) => {
    const news = models.news.fetchBySlug(req.params.slug)
    if (news) {
        res.render('news', { news: news })
    } else {
        res.render('404')
    }
})

route.get('/about', logViewer, (req, res) => {
    res.render('about')
})

route.get('/*', (req, res) => {
    res.render('404')
})

module.exports = route
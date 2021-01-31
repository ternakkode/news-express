const data = require('./news.seeder')(5)

const model = {
    fetchAll: () => data,
    fetchById: (id) => data.find((news) => news.id == id),
    fetchBySlug: (slug) => data.find((news) => news.slug == slug.toLowerCase())
}

module.exports = model

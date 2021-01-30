const data = require('./seeder')

const model = {
    fetchAll: () => data,
    fetchById: (id) => data.find((news) => news.id == id)
}

module.exports = model

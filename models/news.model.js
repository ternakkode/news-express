const data = require('./news.seeder')(5)

const model = {
    fetchAll: () => data,
    fetchById: (id) => data.find((news) => news.id == id)
}

console.log(model.fetchAll())

module.exports = model

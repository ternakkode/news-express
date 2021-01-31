const data = require('./seeder')

const model = {
    fetchAll: () => data.map((news) => {
        news.sliced_content = news.content.split("\n")[0]
        return news
    }),
    fetchById: (id) => data.find((news) => news.id == id)
}

module.exports = model

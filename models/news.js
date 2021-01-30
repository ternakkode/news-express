const faker  = require('faker')
const news = require('./data.json')

const generateNews = (news) => {
    return news.map(data => {
        data.content = faker.lorem.paragraphs(4, '\n\n')
        return data
    })
}

let newsWithContent = generateNews(news)

const fetchAll = () => newsWithContent
const fetchById = (id) => newsWithContent.find((data) => data.id == id)

module.exports = {fetchAll, fetchById}

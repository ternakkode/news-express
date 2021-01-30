const faker  = require('faker')
const template = require('./data.json')

const generateNews = (news) => {
    return news.map(data => {
        data.content = faker.lorem.paragraphs(4, '\n\n')
        return data
    })
}

const data = generateNews(template)

module.exports = data

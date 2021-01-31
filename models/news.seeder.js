const faker = require('faker/locale/id_ID')

const generateRandomNumber = () => Math.floor((Math.random() * 10) + 1)
const generateSlugFromTitle = (title) => {
    return title
        .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')
        .replace(/ /g, '-')
        .toLowerCase()
}
let data = (amount = 1) => {
    let news = []
    for (i = 0; i < amount; i++) {
        let generatedData = {}
        generatedData.id = i + 1
        generatedData.title = faker.lorem.sentence()
        generatedData.slug = generateSlugFromTitle(generatedData.title)
        generatedData.image = faker.image.nightlife()
        generatedData.content = faker.lorem.paragraphs(generateRandomNumber(), '/n').split('/n')
        generatedData.spliced_content = generatedData.content[0]

        news.push(generatedData)
    }

    return news
}

module.exports = data

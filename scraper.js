const { filter } = require('lodash')
const tableScraper = require('table-scraper')
const {readDataFile, writeDataFile} = require('./fileOperations')

const getData = async(url, filters) => {
    let fileName = `${__dirname}/data.txt`

    //read file
    let fileData = await readDataFile(fileName)

    //write data if there is no data
    if(!fileData){
        let tableData = await tableScraper.get(url)
        fileData = JSON.stringify(tableData[0])

        await writeDataFile(fileName, fileData)

        fileData = JSON.parse(fileData)
    }

    //get data
    let filteredData = fileData.filter((data) => {
        if('mcc' in filters && 'mnc' in filters){
            return data['MCC'] == filters.mcc && data['MNC'] == filters.mnc

        }else if('country' in filters){
            return data['Country'].toLowerCase() == filters.country.toLowerCase()

        }else if('mcc' in filters){
            return data['MCC'] == filters.mcc

        }else if(Object.entries(filters).length === 0){
            return data
        }
        return 
    })

    return filteredData
}

module.exports = {getData}

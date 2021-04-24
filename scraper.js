const tableScraper = require('table-scraper')

const getData = async(url, filters) => {
    let tableData = await tableScraper.get(url)
    tableData = tableData[0]

    let filteredData = tableData.filter((data) => {
        if('mcc' in filters && 'mnc' in filters){
            return data['MCC'] == filters.mcc && data['MNC'] == filters.mnc

        }else if('country' in filters){
            return data['Country'].toLowerCase() == filters.country.toLowerCase()

        }else if('mcc' in filters){
            return data['MCC'] == filters.mcc
        }
        return tableData
    })
    return filteredData
}

module.exports = {getData}

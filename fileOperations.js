const fs = require('fs')

const readDataFile = async (fileName) => {
    let fileData = ''

    //check if file exists
    if(fs.existsSync(fileName)){
        // read data from file
        try{
            let data = fs.readFileSync(fileName)
            fileData = JSON.parse(data.toString())
            
        }catch(err){
            throw err.message
        }
         
    }else{
        fs.open(fileName, 'w+', async(err, fd) => {
            if (err) throw err.message
        })

    }

    return fileData

}

const writeDataFile = async (fileName, fileData) => {
    try{
        fs.writeFileSync(fileName, fileData)
        return JSON.parse(fileData)
    }catch(err){
        throw err.message

    }
    
}

module.exports = {readDataFile, writeDataFile}

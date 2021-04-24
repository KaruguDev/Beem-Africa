const fs = require('fs')

const readFile = async (fileName) => {
    //check if file exists
    if(fs.existsSync(fileName)){
        // read data from file
        fs.readFile(fileName, async(err, data) => {
            if(err) throw err.message
            else{
                if(data.length === 0){
                    //
                    
                    fs.writeFile(fileName, tableData, async(err) => {
                        if (err) console.log(err.message)
                        else console.log(`data saved into file: ${fileName}`)
                    })

                    return tableData // inserted data
                
                }
                return data.toString() //file data
                
            }
        })
    }else{
        fs.open(fileName, 'w+', async(err, fd) => {
            if (err){
                //error message
                throw err.message
            }else{

                //scrape data
                let tableData = await tableScraper.get(url)
                fileData = JSON.stringify(tableData)
            
                //write data
                fs.readFile(fileName, (err, data) => {
                    if(err) console.log(err.message)
                    else{
                        if(data.length === 0){
                            fs.writeFile(fileName, fileData, (err) => {
                                if (err) console.log(err.message)
                                else console.log(`data saved into file: ${fileName}`)
                            })
                        }
                    }
                })
            }
            
        })

    }

}


getData('https://www.mcc-mnc.com/')
    .then((data) => {
        console.log(data)
    })
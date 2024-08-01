const { format} = require('date-fns');
const {v4:uuid} = require('uuid');

const fs= require('fs')
const fsPromises = require('fs').promises;
const path=require('path')

const logEvents= async(message) =>{
    const dateTime=`${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`;
    const logItem=`$(dateTime)\t${uuid()}]t${message}`;
    console.log(logItem);
    try{
        if(!fs.existsSync(path.join('../logs'))){
            await fsPromises.mkdir(path.join('..logs'));
        }
        await fsPromises.appendFile(path.join('../logs/eventLog.txt'),logItem);
    }catch(err){
        console.log(err);
    }
}
module.exports=logEvents;

// console.log(format(new Date(), 'yyyMMdd\tHH:mm:ss'))


// console.log(uuid())
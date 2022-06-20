const msgs = require('./msgs')
const slp = require('./sleep')
exports.seeFlowTest = async function (page, e) {
    try {
        console.log(e);
       let ress = await msgs.pushMsgs(page, e);
        await slp.sleep(5000);
        return 
    } catch (error) {
      console.log(error)
    }
    
    
  }
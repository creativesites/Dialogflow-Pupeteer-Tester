const puppeteer = require('puppeteer');
const slp = require('./utils/sleep')
const pg = require('./utils/page')
var Sequence = require('sequence-js');
const { consumers } = require('stream');
const {scrapTable} = require('puppeteer-table-scraper');
const cheerio = require('cheerio');
const lO = {
    headless: false,
};


(async () => {
  const browser = await puppeteer.launch({headless:false,defaultViewport: null,args: [
    '--disable-web-security',
    '--disable-features=IsolateOrigins,site-per-process'
  ]});
  const page = await browser.newPage();
  await page.goto('https://bot.dialogflow.com/0be6be04-cab8-46d7-acf9-8b356b5b0993', {waitUntil: 'load', timeout: 0});
  let arr = ['hi', 'how are you doing', 'good morning', 'good night'];
  let timeEst = (arr.length * 5000) + 5000;
  try { 
   await arr.forEach((element,i) => {
        setTimeout(
            async function(){
                const elementHandle = await page.waitForSelector('#main > div > div:nth-child(2) iframe');
                const frame = await elementHandle.contentFrame();
                await frame.waitForSelector('#query');
                const username = await frame.$('#query');
                await username.type(element);
                await page.keyboard.press('Enter');
                return   
            }
        , i * 5000);
    })
    //get results
    //
    setTimeout(async() => {
        const elementHandle = await page.waitForSelector('#main > div > div:nth-child(2) iframe');
        const frame = await elementHandle.contentFrame();
        
        await frame.waitForSelector('#result');
        const table = await frame.$('#result');
        const tableSelector = await frame.$('#resultWrapper > table');
        //await frame.waitForXPath('//*[@id="result"]');
        //const table = await frame.$x('//*[@id="result"]');
        let i = 0;
        let resArr = [];
        try {
            let element = table;
            var HTML = await frame.evaluate((el) => el.innerHTML, element);
            HTML = '<td>' + HTML + '</td>';
            const $ = cheerio.load(HTML);
    
            var trs = $('div');

            //console.log(trs[0].children[0].data)
            var index = 0;
            var resobj = []
            var tempArr = []
            
            while (index < trs.length){
                console.log(index)
                var tr = trs[index];
                index++;
                if (!tr) continue;
                let txt = trs[index].children[0].data
                console.log(txt)
                
                
                if(index === trs.length - 1){
                    break
                }
            } 
            
        } catch (error) {
            console.log(error.message)
        }
        
        
        
    
        //let rw = await table.$$eval('#result > div:nth-child(1)', el => el.innerText)
        //console.log(rw)
        

        //await browser.close()
    }, timeEst);
    // 
   
  } catch (error) {
    console.log(error)
  }
  //await browser.close()
  
})();

//#result > div:nth-child(2)


/* while (i < 2) {
    console.log(i)
    i++;
    tempArr.push(txt)
    if(i === 2){
        resArr.push(tempArr)
        console.log(resArr)
        i = 0
        tempArr = []
        break
    }
    break
} */
function isOdd(num) { return num % 2;}


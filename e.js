const puppeteer = require('puppeteer');

async function main() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    //await page.setViewport();
    await page.goto('http://localhost:10038/wp-login.php', { waitUntil: 'networkidle0' }); // wait until page load
    //await page.type("input[type=text]", "admin");

    //await page.type("input[type=password]", "root");

    //await page.click("button[type=submit]");
    //await page.type('#id', CREDS.username);
    //await page.type('#loginPw', CREDS.password);
    // click and wait for navigation
    /* await Promise.all([
      page.click('#loginSubmit'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]); */
  }
  
  main();
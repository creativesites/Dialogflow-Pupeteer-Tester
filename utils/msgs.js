exports.pushMsgs = async function(page, e){
    console.log(e);
    const elementHandle = await page.waitForSelector('#main > div > div:nth-child(2) iframe');
    const frame = await elementHandle.contentFrame();
    await frame.waitForSelector('#query');
    const username = await frame.$('#query');
    await username.type(e);
    await page.keyboard.press('Enter');
}
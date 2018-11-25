const puppeteer = require('puppeteer');
(async function main(){
    try{
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/601.7.7 (KHTML, like Gecko) Version/9.1.2 Safari/601.7.7')

        //await page.goto('https://www.goat.com/sneakers/yeezy-boost-350-v2-zebra-cp9654/buy?size=4.0&boxCondition=good_condition');
        await page.goto('https://patrickhlauke.github.io/recaptcha/');
        
        
    }
    catch(e){
        console.log('our error', e);
    }
})();

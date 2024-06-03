const { By, Builder, Browser, Key } = require('selenium-webdriver');
const assert = require('assert');

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

(async function firstTest() {
  let driver;
  
  try {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get('https://www.selenium.dev/selenium/web/web-form.html');
  
    await delay(1000); // 2-second delay

    let title = await driver.getTitle();
    assert.equal("Web form", title);
  
    await driver.manage().setTimeouts({ implicit: 500 });
    
    await delay(1000); // 2-second delay

    let textBox = await driver.findElement(By.name('my-text'));
    let submitButton = await driver.findElement(By.css('button'));
  
    await delay(1000); // 2-second delay

    await textBox.sendKeys('Selenium');
    
    await delay(1000); // 2-second delay

    await submitButton.click();
    
    await delay(1000); // 2-second delay

    let message = await driver.findElement(By.id('message'));
    let value = await message.getText();
    assert.equal("Received!", value);
    
    await delay(1000); // 2-second delay

  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
  }
})();

(async function secondTest() {
let driver = new Builder().forBrowser(Browser.CHROME).build();
try{
//define the driver
//find the form
await driver.get('https://www.youtube.com/')
await delay(2000)
//let search = await driver.findElement(By.id('search-input'))
let searchInput = await driver.findElement(By.xpath('/html/body/ytd-app/div[1]/div/ytd-masthead/div[4]/div[2]/ytd-searchbox/form/div[1]/div[1]/input'))
await searchInput.sendKeys('meat', Key.RETURN)
await delay(10000)






//find the element

//assert

}catch(e){
console.log(e)

}finally{
await driver.quit();
}

}

)();
(async function thirdTest() {
let driver = new Builder().forBrowser(Browser.EDGE).build();
try{
//define the driver
//find the form
await driver.get('https://www.walmart.com/')
await delay(2000)
//let search = await driver.findElement(By.id('search-input'))
let searchInput = await driver.findElement(By.xpath('/html/body/div/div[1]/div/span/header/form/div/input'))
await searchInput.sendKeys('shoes', Key.RETURN)
await delay(10000)






//find the element

//assert

}catch(e){
console.log(e)

}finally{
await driver.quit();
}

}

)();
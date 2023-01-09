//На https://store.steampowered.com/ 
//вывести в консоль названия, 
//жанры и цены для каждой из игр для 
//#tab_newreleases_content элемента.


import { Browser, Builder, By, WebDriver, WebElement } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome.js';
import { path } from 'chromedriver';




async function func5() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    driver.get('https://store.steampowered.com/');
    while(!driver.executeScript('document.readyState === "complete"'));
    const elements = await driver.findElements(By.css('[id="tab_newreleases_content"] >a'));
    elements.forEach((element:WebElement)=>{
        async function func6(element: WebElement) {
        console.log(await element.findElement(By.className('tab_item_name')).getText());
        console.log(await element.findElement(By.className('tab_item_top_tags')).getText());
        console.log(await element.findElement(By.className('discount_final_price')).getText());       
        }
        func6(element);
    })
}
func5();




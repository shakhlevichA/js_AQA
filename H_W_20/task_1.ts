// Зайти на 5 разных ссылок в
// https://the-internet.herokuapp.com/ 
//(можно с помощью клика, можно через url).
// С каждой страницы для 2-3 элементов 
//вывести в консоль одно из: значение атрибута, value, текст.  



import { Browser, Builder, By, WebDriver } from "selenium-webdriver";
import * as chrome from 'selenium-webdriver/chrome';
import { path } from 'chromedriver';



async function pageLogin() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    driver.manage().window().maximize();
    driver.get('https://the-internet.herokuapp.com/login');
    while(!driver.executeScript('document.readyState === "complete"'));
    console.log(await driver.findElement(By.css('[id="content"] h2')).getText())
    console.log(await driver.findElement(By.css('[id="content"] [class="subheader"]')).getText())
    driver.quit();
}
pageLogin()

async function pageUpload() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize();
    driver.get('https://the-internet.herokuapp.com/upload');
    while(!driver.executeScript('document.readyState === "complete"'));
    console.log(await driver.findElement(By.css('[id="file-upload"]')).getAttribute('name'))
    console.log(await driver.findElement(By.css('[class="example"] p')).getText())
    
    driver.quit();
}
pageUpload()


async function pageImages() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();
    driver.manage().window().maximize();
    driver.get('https://the-internet.herokuapp.com/broken_images');
    while(!driver.executeScript('document.readyState === "complete"'));
    console.log(await driver.findElement(By.css('[id="content"] h3')).getText());
    console.log(await driver.findElement(By.css('.row img')).getAttribute('src'));
    console.log(await driver.findElement(By.css('.row img')).getAttribute('alt'))
    driver.quit();
}
pageImages()

async function pageJqueryui() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize();
    driver.get('https://the-internet.herokuapp.com/jqueryui');
    while(!driver.executeScript('document.readyState === "complete"'));
    console.log(await driver.findElement(By.css('[class="example"] h3')).getText())
    console.log(await driver.findElement(By.css('[href="/jqueryui/menu"]')).getText())
    driver.quit();
}
pageJqueryui()


async function pageForgotPassword() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize();
    driver.get('https://the-internet.herokuapp.com/forgot_password');
    while(!driver.executeScript('document.readyState === "complete"'));
    console.log(await driver.findElement(By.css('[id="content"] h2')).getText())
    console.log(await driver.findElement(By.css('.row div')).getAttribute('class'))
    console.log(await driver.findElement(By.css('.row div')).getAttribute('id'))
    driver.quit();
}
pageForgotPassword()



async function pageInputs() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize();
    driver.get('https://the-internet.herokuapp.com/inputs');
    while(!driver.executeScript('document.readyState === "complete"'));
    console.log(await driver.findElement(By.css('[id="content"] h3')).getText())
    console.log(await driver.findElement(By.css('[id="page-footer"] a')).getText())
    driver.quit();
}
 pageInputs()



async function pageCheckboxes() {
    const service = new chrome.ServiceBuilder(path);
    let driver: WebDriver = await new Builder().forBrowser(Browser.CHROME).setChromeService(service).build();

    driver.manage().window().maximize();
    driver.get('https://the-internet.herokuapp.com/checkboxes');
    while(!driver.executeScript('document.readyState === "complete"'));
    console.log(await driver.findElement(By.css('[id="content"] h3')).getText())
    console.log(await driver.findElement(By.css('[id="checkboxes"]')).getText())
    console.log(await driver.findElement(By.css('[type="checkbox"]')).getText())
    driver.quit();
}

pageCheckboxes()
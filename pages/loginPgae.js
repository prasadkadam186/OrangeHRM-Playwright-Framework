const { expect } = require("@playwright/test");

class LoginPage{
    constructor(page)
    {
        this.page=page;
        this.username="//input[@name='username']";
        this.password="//input[@name='password']";
        this.loginButton="//button[@type='submit']";
        this.errorMsg="//div[@role='alert']//div//p";
    }
    
    async navigateTo()
    {
        await this.page.goto('/')
    }

    async loginToApplication(user, pass)
    {
        await this.page.locator(this.username).type(user)
        await this.page.locator(this.password).type(pass)
        await this.page.locator(this.loginButton).click();
    }
}
module.exports=LoginPage;
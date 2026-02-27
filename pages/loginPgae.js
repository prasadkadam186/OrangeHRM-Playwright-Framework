class LoginPage{
    constructor(page)
    {
        this.page=page;
        this.username="//input[@placeholder='Username']";
        this.password="//input[@placeholder='Password']";
        this.loginButton="//button[@type='submit']";
        this.errorMsg=""
    }
    
    async navigateTo()
    {
        await this.page.goto('/')
    }

    async loginToApplication(user, pass)
    {
        await this.page.locator(this.username).fill(user)
        await this.page.locator(this.password).fill(pass)
        await this.page.locator(this.loginButton).click();
    }
}
module.exports=LoginPage;
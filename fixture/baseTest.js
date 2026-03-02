const base = require("@playwright/test")
const LoginPage = require("../pages/loginPgae")
const testData = require("../testData/loginData.json")

exports.test = base.test.extend({
    loggedInPage: async ({page},use) => {
        const loginPage = new LoginPage(page)
        for(const data of testData)
        {
            await loginPage.navigateTo();
            await loginPage.loginToApplicationValidUser(data.username, data.password);
            await use(page);
        }
    }
})

exports.expect = base.expect;
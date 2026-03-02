const {test:base} = require("@playwright/test")
const LoginPage = require("../pages/loginPgae")
const testData = require("../testData/loginData.json")

exports.test = base.extend({
    loggedInPage: async ({page},use) => {
        const loginPage = new LoginPage(page)
         const data = testData[0];
            await loginPage.navigateTo();
            await loginPage.loginToApplication(data.username, data.password);
            await use(page);
    }
})

exports.expect = base.expect;
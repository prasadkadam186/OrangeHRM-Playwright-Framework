const { test, expect } = require("../fixture/baseTest")
// const testData=require("../testData/loginData.json")
// const LoginPage = require("../pages/loginPgae")
// test.describe("OrangeHRM Login Test", () => {
//     for(const data of testData)
//     {
//         test(`Login In as ${data.type}`, async ({ page }) => {
//             const loginPage = new LoginPage(page);
//             await loginPage.navigateTo();
//             await loginPage.loginToApplication(data.username, data.password);
//         })
//     }
// })

test("Logged In for Valid User", async ({loggedInPage})=>{
    await expect(loggedInPage).toHaveURL(/dashboard/)
})

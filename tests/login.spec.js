const { test, expect } = require("../fixture/baseTest")
const LoginPage = require("../pages/loginPgae")
const testData = require("../testData/loginData.json");

test.describe("Login Feature", () => {
    // Test Syenerio : Valid Login
    test("Logged In for Valid User", async ({ loggedInPage }) => {
        await expect(loggedInPage).toHaveURL(/dashboard/)
    })

    // Test Syenerio : Invalid Password Login
    test("Logged In by Invalid Credientials", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo();
        await loginPage.loginToApplication(testData[1].username, testData[1].password)
        expect(await page.locator(loginPage.errorMsg).textContent()).toBe("Invalid credentials")
    })
    // Test Syenerio : Empty Credentials
    test("Login for Empty/null Credentials", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigateTo();
        await loginPage.loginToApplication(testData[2].username, testData[2].password);
        expect(await page.locator("(//span[contains(@class,'oxd-input-field-error-message')])[1]").textContent()).toBe("Required")
    })
})

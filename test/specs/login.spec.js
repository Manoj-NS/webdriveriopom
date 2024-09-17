const LoginPage = require('../pages/login.page');

describe('Demo Tests', () =>{

    it('My First Test', async ()  =>{

        await browser.url('https://the-internet.herokuapp.com/login');

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await LoginPage.checkMessage('You logged into a secure area!');

        // const userElement= await $('#username');
        // await userElement.setValue('tomsmith');

        // const passwordElement= await $('#password');
        // await passwordElement.setValue('SuperSecretPassword!');

        // const loginButton= await $('[type="submit"]');
        // await loginButton.click();

        // const loggedElement= await $('#flash');
        // const loginMessage = await loggedElement.getText();
        // console.log('Logged in text: '+loginMessage)
        
        // await expect(loginMessage).toBeDisplayed('You logged into a secure area!');

        await browser.pause(2000);

        
    })
})
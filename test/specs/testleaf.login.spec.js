const LeafTapsUrl = require('../testleafpages/leaft.url');
const LeafTapsLogin = require('../testleafpages/leaf.loginpage');
const LeafTapsHomePage = require('../testleafpages/leaf.homepage');
const LeafTapsCreateLead = require('../testleafpages/leaf.createlead');
const LeafTapsEditLead = require('../testleafpages/leaf.editlead');


describe('Login Page', () => {

    it('UrlValidation', async () => {

        await browser.url('http://leaftaps.com/opentaps/control/main');
        const expectedUrl = 'http://leaftaps.com/opentaps/control/main';
        await LeafTapsUrl.appUrl(expectedUrl);
        browser.pause(2000);

    })

    it('Login Page', async () => {

        await LeafTapsLogin.loginDetails('Democsr', 'crmsfa');
        //await LeafTapsLogin.loginDetails('', '');
        await browser.pause(2000);
    })

    it('HomePage', async () => {

        await LeafTapsHomePage.HomePage('Welcome Demo B2B CSR');
        await LeafTapsHomePage.HomepageValidation();
        await browser.pause(2000);

    })

    // it('CreateLead', async () => {

    //     await LeafTapsCreateLead.CreateLead('TestCompany1', 'Praveen', 'Kumar');

    //     await LeafTapsCreateLead.CreateLead('TestCompany1', 'Nirmal', 'Kumar');

    //     await LeafTapsCreateLead.CreateLead('TestCompany1', 'Vimal', 'Kumar');

    //     await LeafTapsCreateLead.CreateLead('TestCompany1', 'Rajesh', 'Kumar');
    //     await browser.pause(2000);

    // })

    it('EditLead', async () =>{



        await LeafTapsEditLead.editLead('14756');
        await browser.pause(2000);


    })






})
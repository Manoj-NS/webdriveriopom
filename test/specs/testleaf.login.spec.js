const LeafTapsUrl = require('../testleafpages/leaft.url');
const LeafTapsLogin = require('../testleafpages/leaf.loginpage');
const LeafTapsHomePage = require('../testleafpages/leaf.homepage');
const LeafTapsCreateLead = require('../testleafpages/leaf.createlead');
const LeafTapsEditLead = require('../testleafpages/leaf.editlead');


describe('Login Page', () => {

    it('UrlValidation', async () => {

        await browser.setTimeout({'implicit': 4000});
        await browser.maximizeWindow();

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

    it('CreateLead', async () => {

        await LeafTapsCreateLead.CreateLead('TC01', 'Vijay', 'Kumar');

        await LeafTapsCreateLead.CreateLead('TC01', 'Vishnu', 'Kumar');

        // await LeafTapsCreateLead.CreateLead('TC03', 'Vimal', 'Kumar');

        // await LeafTapsCreateLead.CreateLead('TC04', 'Rajesh', 'Kumar');
        
        // await LeafTapsCreateLead.CreateLead('TC05', 'Surya', 'Kumar');
        
        // await LeafTapsCreateLead.CreateLead('TC06', 'Raja', 'K');

        await browser.pause(2000);

    })

    it('EditLead', async () =>{



        // await LeafTapsEditLead.editLead('3','10152', 'TC01');
        
        // // await LeafTapsEditLead.editLead('3','10149', 'TC01');
        
        // // await LeafTapsEditLead.editLead('3','10151', 'TC01');
        // await browser.pause(2000);


    })






})
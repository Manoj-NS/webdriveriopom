describe ('Source Dropdown', () =>{

    it ('App URL', async () =>{

        await browser.setTimeout({'Implicit': 4000});
        await browser.maximizeWindow();
        await browser.url('http://leaftaps.com/opentaps/control/main');
    });

    it ('Login Page', async () =>{

        const userName=await $('#username');
        await userName.setValue('Democsr');

        const password=await $('#password');
        await password.setValue('crmsfa');

        const loginButton=await $('[value="Login"]');
        await loginButton.click();
    });

    it ('HomePage', async () =>{

        const crmLink= await $('a=CRM/SFA');
            await crmLink.click();
            await browser.pause(4000);

    });

 

    it ('Source Validation', async () =>{

        const createLead=await $('a=Create Lead');
        await createLead.click();

        const sourceDDLElement = await $('#createLeadForm_dataSourceId');
        const sourceOption=await sourceDDLElement.$$('option');


        const sourceText=[];
        const sourceValue=[];

        for(const sourceOptions of sourceOption){
            const text=await sourceOptions.getText();
            const value=await sourceOptions.getAttribute('value');
            sourceText.push(text);
            sourceValue.push(value);
            }

            console.log('Total Source Options: '+sourceText);
            console.log('Total Source Options: '+sourceValue);

            await sourceDDLElement.selectByVisibleText('Partner');
            const selectedValue=await sourceDDLElement.getValue();
            console.log('Selected Option: '+selectedValue);
            await browser.pause(4000);

            await sourceDDLElement.selectByIndex(4);
            const selectedIndex=await sourceDDLElement.getValue();
            console.log('Selected Index Option: '+selectedValue);
            await browser.pause(4000);
    })
})
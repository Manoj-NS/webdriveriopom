describe('Edit Lead', ()=>{

        it('Taking Lead List',  async () =>{

            await browser.setTimeout({'implicit': 4000});
            await browser.maximizeWindow();

            await browser.url('http://leaftaps.com/opentaps/control/main');

            const userName=await $('#username');
            await userName.setValue('Democsr');

            const password=await $('#password');
            await password.setValue('crmsfa');

            const loginButton=await $('[value="Login"]');
            await loginButton.click();

            const crmLink= await $('a=CRM/SFA');
            await crmLink.click();

            const leadsLink= await $('a=Leads');
            await leadsLink.click();

            const dropDownElement=await $$('a.linktext');

            const ddrText=[];
            
            for(options of dropDownElement){
                const text= await options.getText();
                ddrText.push(text);
            }
            console.log('Total Lead Id: '+ddrText);
            console.log('Total: '+ddrText.length);


        })
})
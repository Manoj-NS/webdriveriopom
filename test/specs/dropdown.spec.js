describe('Edit Lead Selection', ()=>{

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

            await browser.pause(4000);

            //  const lastPageButton= await $('#ext-gen422'); // Dinamic data, since new data added, required data is in 28th page not in LastPage
            //  await lastPageButton.waitForDisplayed({timeout: 5000});
            //  await lastPageButton.click();

            const pagingTextbox=await $('#ext-gen407');
            await pagingTextbox.waitForDisplayed({timeout: 5000});
            await pagingTextbox.setValue('3');

            await browser.pause(4000);
            await browser.keys('Enter');

             await browser.pause(4000);

            const dropDownElement=await $$('a.linktext');
            const selectLead=['10147','10148','10149'];
            const ddrText=[];
            
            for(const options of dropDownElement){
                const text= await options.getText();
                ddrText.push(text);

                if(text==selectLead){
                    await options.click();
                    console.log(text+': Lead id clicked');
                    break;
                }else{
                    console.log('Lead id not found');
                }
            }
        //    console.log('Total Lead Id: '+ddrText);
        //    console.log('Total: '+ddrText.length);

        await browser.pause(4000);
        const editLead=await $('a=Edit');
        await editLead.click();

        await browser.pause(4000);

        const changeCompanyName=await $('#updateLeadForm_companyName');
        await changeCompanyName.clearValue();
        await changeCompanyName.setValue('TC2907');
        
        await browser.pause(4000);

        const updateButton=await $('[name="submitButton"]');
        await updateButton.click();
        
        await browser.pause(4000);

        })
})
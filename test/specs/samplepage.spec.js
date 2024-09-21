describe('SamplePage', () => {

    it('Enter Details', async () => {

        await browser.setTimeout({ 'implicit': 10000 });
        await browser.maximizeWindow();

        await browser.url('https://www.globalsqa.com/samplepagetest/');

        
        await browser.pause(4000);

        const webAlert=await $('[stroke="#FAFAFA"]');
        await webAlert.click();

        // await browser.execute(function() {
        // window.scrollBy(0, 500);

        await browser.pause(4000);

//         const iframe = await $('iframe');  // Replace with the correct iframe selector
//         await browser.switchToFrame(iframe);

// // Now interact with the form

        const name = await $('[type="text"]');
        await name.waitForDisplayed({ timeout: 10000 });
        await name.waitForEnabled({ timeout: 10000 });
        await name.setValue('Manoj');

        const email = await $('#g2599-email');
        await email.setValue('manoj@gmail.com');

        const website = await $('#g2599-website');
        await website.setValue('manoj123.com');

        await browser.pause(4000);
    })

    /*

    it('DropDown List', async () => {
        // Name Validation
        const dropdownName = await $('[for="g2599-experienceinyears"]');
        const ddlName = await dropdownName.getText();
        await expect(ddlName).toBe('Experience (In Years)(required)');


        // Select options
        const dropdownElement = await $('#g2599-experienceinyears');

        // Verify available options
        const options = await dropdownElement.$$('option');

        // Extract the text and values of each option
        const optionTexts = [];
        const optionValues = [];

        for (const option of options) {
            const text = await option.getText();
            const value = await option.getAttribute('value');
            optionTexts.push(text);
            optionValues.push(value);
        }

        console.log('Option Texts:', optionTexts);
        console.log('Option Values:', optionValues);

        //    await dropdownElement.scrollIntoView();

        //    await dropdownElement.click();
        await dropdownElement.selectByVisibleText('3-5');
        //    await dropdownElement.selectByValue(5-7);
        await dropdownElement.selectByIndex(4);
        await browser.pause(4000);
    })

    it('Expertise: Checkbox', async () => {

        const checkboxName = await $('[for="g2599-expertise"]');
        const cbName = await checkboxName.getText();
        await expect(cbName).toBe('Expertise :');   


        const checkboxElement = await $('.grunion-field-wrap grunion-field-checkbox-multiple-wrap');

        // To Get all option elements 
        const chekboxElement = await checkboxElement.$('.grunion-field-wrap grunion-field-checkbox-multiple-wrap');
        const checkboxOptions = await checkboxElement.$$('[type="checkbox"]');

        const checkboxText=[];

        for (const checkbocOption of checkboxOptions){

            const cbText=await checkbocOption.getText();
            checkboxText.push(cbText);


        }
        
        console.log('Available Checkboxes: ', checkboxText);

    })
      */  
})
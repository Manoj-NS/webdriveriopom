describe('SamplePage', () => {


    it('Enter URL', async () => {
        await browser.setTimeout({ 'implicit': 10000 });
        await browser.maximizeWindow();

        await browser.url('https://www.globalsqa.com/samplepagetest/');

    })

    /*

    it('Enter Details', async () => {


        // await browser.pause(4000);

        // const webAlert=await $('[stroke="#FAFAFA"]');
        // await webAlert.click();

        // await browser.execute(function() {
        // window.scrollBy(0, 500);

        await browser.pause(4000);

        //         const iframe = await $('iframe');  // Replace with the correct iframe selector
        //         await browser.switchToFrame(iframe);

        // // Now interact with the form

        const name = await $('#g2599-name');
        await name.waitForDisplayed({ timeout: 10000 });
        await name.waitForEnabled({ timeout: 10000 });
        await name.setValue('Manoj');

        const email = await $('#g2599-email');
        await email.setValue('manoj@gmail.com');

        const website = await $('#g2599-website');
        await website.setValue('manoj123.com');

        await browser.pause(4000);
    })



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
        // Scroll the page by 500 pixels vertically
        await browser.execute(() => {
            window.scrollBy(0, 500);
        });

        const checkboxName = await $('[for="g2599-expertise"]');
        //     await checkboxName.scrollIntoView();

        const cbName = await checkboxName.getText();
        await expect(cbName).toBe('Expertise :');


        // To Get all option elements 
        const chekboxElement = await $('.grunion-field-wrap.grunion-field-checkbox-multiple-wrap');
        const checkboxOptions = await chekboxElement.$$('[type="checkbox"]');
        const selectCheckbox = ['Functional Testing', 'Manual Testing'];
        const checkboxText = [];

        for (const checkboxOption of checkboxOptions) {
            // Get the parent label element, which contains the text
            const label = await checkboxOption.parentElement();

            // Get the text of the label
            const cbText = await label.getText();

            // Push the label text to the checkboxText array
            checkboxText.push(cbText);
            await browser.pause(1000); // Just for observation, you can reduce or remove this

            if (selectCheckbox.includes(cbText.trim())) {
                await checkboxOption.click();
                console.log('Selected Checkbox: ', cbText);
                await browser.pause(4000);
            } 
        }

       console.log('Available Checkboxes: ', checkboxText);

    })

    */

    it('Radio Button: Education', async () => {
        // Scroll the page by 500 pixels vertically
        await browser.execute(() => {
            window.scrollBy(0, 500);
        });
     /*   
        const radioButtonElement = await $$('label.grunion-radio-label');
        const selectRadioButton = ['Post Graduate'];
        const radioButtonText = [];

        for (const rbOptions of radioButtonElement) {
            //    const label = await rbOptions.parentElement();
            //    const rbText=await label.getText();
            const rbText = await rbOptions.getText();
            radioButtonText.push(rbText);

            if (rbText == selectRadioButton) {
                rbOptions.click();

            }

        }

        //   const radioButtonOptions = await radioButtonElement.getText();
        console.log('Radio Button', radioButtonText);
await browser.pause(4000);

*/

const radioButton1=await $('[value="Graduate"]');
await radioButton1.click();
await browser.pause(4000);
    })

})
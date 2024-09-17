class LeafTapsHomePage{

    
    get homepageHeader() {
        return $('h2');
    }

    get logoutButton(){
        return $('[value="Logout"]');
    }

    get CRMSFALink(){
        return $('a=CRM/SFA');
    }

    async HomePage(homepagetext) {
        // Ensure the element is displayed
        const isHeaderDisplayed = await this.homepageHeader.isDisplayed();
        console.log('Is homepage header displayed: ' + isHeaderDisplayed);
    
        if (isHeaderDisplayed) {
            const actualText = await this.homepageHeader.getText();
            const normalizedText = actualText.replace(/\n/g, ' ').trim(); // Normalize text
            console.log('Header Name: '+normalizedText);

            await expect(normalizedText).toEqual(homepagetext); // Compare actual vs expected text
        } else {
            throw new Error("Homepage header is not displayed");
        }
    }

    async HomepageValidation(logoutButton, CRMSFALink){

        const isLogoutButtonDisplayed=await this.logoutButton.isDisplayed();
        if(isLogoutButtonDisplayed){
            
            console.log('Is Logout button displayed: '+isLogoutButtonDisplayed);

        }else{
            console.log('Logout button is not displayed');
        }

        const isCRMLinkDisplayed=await this.CRMSFALink.isDisplayed();
        
        if(isCRMLinkDisplayed){
            console.log('Is CRM/SFA Link displayed: '+isCRMLinkDisplayed);

        }else{
            console.log('CRM/SFA Link not displayed');
        }

        await this.CRMSFALink.click();

    }


}

module.exports=new LeafTapsHomePage();
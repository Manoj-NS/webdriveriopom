class LeafTapsEditLead {

    get leadsLink() {

        return $('a=Leads');

    }

    get PagingNo() {
        return $('#ext-gen407');
    }

    get leadId() {
        return $$('a.linktext');
    }

    get editLeadButton(){
        return $('a=Edit');
    }

    get editCompanyName(){
        return $('#updateLeadForm_companyName');
    }

    get updateButton(){
        return $('[name="submitButton"]');
    }


    async editLead(pageNo, leadid, editText) {
        await this.leadsLink.click();
        await this.PagingNo.setValue(pageNo);
        await browser.keys('Enter');

        await browser.pause(2000);

        const leadElements = await this.leadId; // This is an array of elements
        let leadFound = false;

        for (const leadElement of leadElements) {
            const leadText = await leadElement.getText(); // Get the text of each lead
            if (leadText === leadid) { // Compare with the lead ID passed
                await leadElement.click(); // Click the lead if found
                console.log(leadText + ': Lead id clicked');
                leadFound = true;
                break;
            }
        }

        if (!leadFound) {
            console.log('Lead id not found');
        }

        await this.editLeadButton.click();
        await this.editCompanyName.clearValue();
        await this.editCompanyName.setValue(editText);
        await this.updateButton.click();

        await browser.pause(2000);
    }

}

module.exports = new LeafTapsEditLead();
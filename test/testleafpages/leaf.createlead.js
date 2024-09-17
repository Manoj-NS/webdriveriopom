class LeafTapsCreateLead {

    get clickCreateLead() {
        return $('a=Create Lead');
    }

    get enterCompanyName() {
        return $('#createLeadForm_companyName');
    }

    get enterFirstName() {
        return $('#createLeadForm_firstName');
    }

    get enterLastName() {
        return $('#createLeadForm_lastName');
    }

    get clickSubmitButton() {
        return $('[value="Create Lead"]');
    }

    get leadId(){
        return $('#viewLead_companyName_sp');
    }

    async CreateLead(companyname, fname, lname) {

        await this.clickCreateLead.click();
        await this.enterCompanyName.setValue(companyname);
        await this.enterFirstName.setValue(fname);
        await this.enterLastName.setValue(lname);
        await this.clickSubmitButton.click();

        const getleadIdNo= await this.leadId.getText();
        console.log('Lead Id: '+getleadIdNo);
    }

}

module.exports = new LeafTapsCreateLead();
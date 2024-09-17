class LeafTapsEditLead {

    get leadsLink() {

        return $('a=Leads');

    }

    get lastPageButton(){
        return $('#ext-gen422');
    }

    get leadId() {
        return $$('a.linktext');
    }

    async editLead(leadid) {
        await this.leadsLink.click();
        await this.lastPageButton.click();

        await browser.pause(2000);

        const selectLead= this.editLead;
        
        const ddrText=[];
            
        for(options of selectLead){
            const text= await options.getText();
            ddrText.push(text);

            if(ddrText.equals(leadid)){
                ddrText.click();
            }else{
                console.log('Lead selected as: '+ddrText);
            }
        }

     }

}

module.exports = new LeafTapsEditLead();
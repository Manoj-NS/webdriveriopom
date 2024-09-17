class LeafTapsLogin {

    get entervalidUsrName() {
        return $('#username');
    }

    get entervalidPassword() {
        return $('#password');
    }

    get clickLoginButton() {
        return $('[value="Login"]');
    }

    // get noData(){
    //     return $$ ('#errorDiv');

    // }

  
    async loginDetails(username, password) {
        await this.entervalidUsrName.setValue(username);
        await this.entervalidPassword.setValue(password);
        await this.clickLoginButton.click();

    }

    // async loginalertValidation(usralert){
    //     await expect(this.noData).toBeDisplayed();

    // }

      

}

module.exports = new LeafTapsLogin();

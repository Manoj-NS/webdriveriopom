class LeafTapsUrl {

    get actualUrl() {
        return browser.getUrl();
    }

    async appUrl(expectedUrl) {
        const aUrl = await this.actualUrl;
        console.log('Actual url: ' + aUrl);
        await expect(aUrl).toEqual(expectedUrl);
    }
}

module.exports = new LeafTapsUrl();
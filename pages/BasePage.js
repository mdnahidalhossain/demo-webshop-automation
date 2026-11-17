class BasePage {
    constructor(page) {
        this.page = page;
    }

    async PageOpen() {
        await this.page.goto("https://demowebshop.tricentis.com/");
    }
}

export default BasePage
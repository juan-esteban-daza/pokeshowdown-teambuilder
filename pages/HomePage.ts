import { Page, Locator } from "@playwright/test";

export class HomePage {
    readonly page: Page
    readonly teambuilder: Locator

    constructor(page: Page) {
        this.page = page
        this.teambuilder = page.getByRole('button', { name: 'Teambuilder' })
    }

    async navigate() {
        await this.page.goto('https://play.pokemonshowdown.com')
    }

    async openTeamBuilder() {
        await this.teambuilder.click();
    }
}
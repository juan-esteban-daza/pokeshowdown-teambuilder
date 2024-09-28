import { Page, Locator } from '@playwright/test';

export class TeamListPage {
    readonly page: Page;
    readonly newTeamButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.newTeamButton = page.getByRole('button', { name: ' New Team' });
    }

    async createNewTeam() {
        await this.newTeamButton.first().click();
    }
}

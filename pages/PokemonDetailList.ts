// PokemonDetailsPage.ts
import { Page, Locator, expect } from '@playwright/test';

export class PokemonDetailsPage {
    readonly page: Page;
    readonly itemSlot: Locator;
    readonly abilitySlot: Locator;
    readonly ivSpreadDropdown: Locator;
    readonly evStatInputs: { [key: string]: Locator };
    readonly evStatPanel: Locator;
    readonly backToTeamButton: Locator;
    readonly moves: { [key: string]: Locator };
    readonly totalEv: Locator;

    constructor(page: Page) {
        this.page = page;
        this.itemSlot = page.locator('input[name="item"]');
        this.abilitySlot = page.locator('input[name="ability"]');
        this.ivSpreadDropdown = page.locator('select[name="ivspread"]');
        this.moves = {
            move1: page.locator('input[name="move1"]'),
            move2: page.locator('input[name="move2"]'),
            move3: page.locator('input[name="move3"]'),
            move4: page.locator('input[name="move4"]'),
        }
        this.evStatInputs = {
            hp: page.locator('input[name="stat-hp"]'),
            atk: page.locator('input[name="stat-atk"]'),
            def: page.locator('input[name="stat-def"]'),
            spa: page.locator('input[name="stat-spa"]'),
            spd: page.locator('input[name="stat-spd"]'),
            spe: page.locator('input[name="stat-spe"]'),
        };
        this.evStatPanel = page.locator('button[name="stats"]')
        this.backToTeamButton = page.locator('button[name="back"]');
        this.totalEv = page.locator('div.totalev em');
    }

    async selectItem(itemName: string) {
        await this.itemSlot.click();
        await this.itemSlot.pressSequentially(itemName);
    }

    async selectAbility(abilityName: string) {
        await this.abilitySlot.click();
        await this.abilitySlot.pressSequentially(abilityName);
    }

    async selectMoves(moves: { [key: string]: string }) {
        for (const [move, value] of Object.entries(moves)) {
            await this.moves[move].pressSequentially(value, { delay: 100 });
        }
    }

    async setIVSpread(ivSpread: string) {
        await this.ivSpreadDropdown.selectOption(ivSpread);
    }

    async setEVStats(evStats: { [key: string]: string }) {
        await this.evStatPanel.click();
        for (const [stat, value] of Object.entries(evStats)) {
            await this.evStatInputs[stat].pressSequentially(value, { delay: 100 });
        }
    }

    async verifyTotalEvCount() {
        await expect(this.totalEv).toContainText('0');
    }

    async goBackToTeam() {
        await this.backToTeamButton.click();
    }
}

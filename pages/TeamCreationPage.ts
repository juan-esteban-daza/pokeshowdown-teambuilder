import { Page, Locator, expect } from '@playwright/test';

export class TeamCreationPage {
    readonly page: Page;
    readonly formatDropdownButton: Locator;
    readonly formatSearchBox: Locator;
    readonly addPokemonButton: Locator;
    readonly pokemonSearchBox: Locator;
    readonly validateButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.formatDropdownButton = page.getByRole('button', { name: 'Select a format' });
        this.formatSearchBox = page.getByPlaceholder('Search formats');
        this.addPokemonButton = page.getByRole('button', { name: 'Add Pokémon' });
        this.pokemonSearchBox = page.locator('input[name="pokemon"]');
        this.validateButton = page.locator('button[name="validate"]')
    }

    async selectFormat(formatName: string, gen: string) {
        await this.formatDropdownButton.click();
        await this.formatSearchBox.pressSequentially(formatName, { delay: 200 });
        // await this.page.getByRole('button', { name: `${formatName}` }).click();
        await this.page.locator(`button:has-text("${gen}")`).click();
    }

    async addPokemon(pokemonName: string) {
        await this.addPokemonButton.click();
        await this.pokemonSearchBox.click();
        await this.pokemonSearchBox.pressSequentially(pokemonName, { delay: 100 });
        await this.page.locator(`a[data-entry="pokemon|${pokemonName}"]`).click();
    }

    async validateTeam(format: string, gen: string) {
        await this.validateButton.click();
        await expect(this.page.locator('body')).toContainText(`Your team is valid for [${gen}] ${format}.`);
    }
}

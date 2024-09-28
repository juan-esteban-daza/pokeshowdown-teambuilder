import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://play.pokemonshowdown.com')
    await page.getByRole('button', { name: 'Teambuilder' }).click();
    await page.getByRole('button', { name: ' New Team' }).first().click();
    await page.getByRole('button', { name: 'Select a format ' }).click();
    await page.getByPlaceholder('Search formats').pressSequentially('ubers');
    await page.getByRole('button', { name: '[Gen 5] Ubers ' }).click();
    await page.getByRole('button', { name: ' Add Pokémon' }).click();
    await page.getByRole('textbox').pressSequentially('lugia');
    await page.getByText('Uber Lugia').click();
    await page.getByText('Choice Band Holder\'s Attack').click();
    await page.getByText('Pressure If this Pokemon is').first().click();
    await page.getByText('Aeroblast Power100 Accuracy95').click();
    await page.getByText('Ancient Power Power60').click();
    await page.getByText('Aqua Tail Power90 Accuracy90').click();
    await page.getByText('Avalanche Power60 Accuracy100').click();
    await page.locator('select[name="ivspread"]').selectOption('31/31/31/31/31/31');
    await page.locator('input[name="stat-hp"]').pressSequentially('252');
    await page.locator('input[name="stat-atk"]').pressSequentially('132');
    await page.locator('input[name="stat-def"]').pressSequentially('31');
    await page.locator('input[name="stat-spa"]').pressSequentially('31');
    await page.locator('input[name="stat-spd"]').pressSequentially('31');
    await page.locator('input[name="stat-spe"]').pressSequentially('31');
    await page.getByText('0', { exact: true }).click();
    await page.getByRole('button', { name: ' Team' }).click();
    await page.getByRole('button', { name: ' Validate' }).click();
    await expect(page.locator('body')).toContainText('Your team is valid for [Gen 5] Ubers.');
});
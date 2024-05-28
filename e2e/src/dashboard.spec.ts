import { test, expect } from '@playwright/test';

test('select photos as favorite', async ({ page }) => {
    await page.goto('/');

    // ensure that dashboard is empty
    await expect(page.getByText('No favorites photos.')).toBeVisible();

    // go back to the list page
    await page.getByTestId('nav-link-list').click();

    // click on the select
    await page.waitForSelector('#albums-select');
    await expect(page.locator('#albums-select')).toBeVisible();
    await page.locator('#albums-select').click();

    // check if select dropdown is open
    await page.waitForSelector('[role="list"]');
    await expect(
        page.locator('[role="list"]').locator(':first-child')
    ).toBeVisible();

    // select first album from the list
    await page.locator('[role="list"]').locator(':first-child').click();

    // mark photos as favorite
    const photoIds = [1, 2, 3];
    for (const photoId of photoIds) {
        const photoTestId = `photo-tile-${photoId}`;
        await page.waitForSelector(`[data-testid="${photoTestId}"]`);
        await page.getByTestId(photoTestId).click();
    }

    // go back to the dashboard page
    await page.getByTestId('nav-link-dashboard').click();

    // check if all photos are present on the dashboard
    for (const photoId of photoIds) {
        const photoTestId = `photo-tile-${photoId}`;
        await page.waitForSelector(`[data-testid="${photoTestId}"]`);
        await expect(page.getByTestId(photoTestId)).toBeVisible();
    }
});

import { test, expect, Page } from '@playwright/test';

async function scrollToBottom(page: Page) {
    await page.evaluate(async () => {
        const delay = (ms: number) =>
            new Promise((resolve) => setTimeout(resolve, ms));

        for (let i = 0; i < document.body.scrollHeight; i += 100) {
            window.scrollTo(0, i);
            await delay(100);
        }
    });
}

test('list should load more images on scroll to bottom', async ({ page }) => {
    await page.goto('/list');

    // click on the select
    await expect(page.locator('#albums-select')).toBeVisible();
    await page.locator('#albums-select').click();

    // check if select dropdown is open
    await expect(page.locator('[role="list"]')).toBeVisible();

    // select first album from the list
    await page.locator('[role="list"]').locator(':first-child').click();

    await page.waitForSelector('[data-testid="photo-tile-1"]');

    await scrollToBottom(page);

    // wait last photo image to load
    await page.waitForSelector('[data-testid="photo-tile-50"]');
});

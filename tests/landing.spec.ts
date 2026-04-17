import { test, expect } from "@playwright/test";

test("landing renders hero and CTA navigates to /app", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /superpowered/i })).toBeVisible();
  await page.getByRole("link", { name: /launch the demo/i }).click();
  await expect(page).toHaveURL(/\/app$/);
  await expect(page.getByRole("heading", { name: /your meetings/i })).toBeVisible();
});

import { test, expect } from "@playwright/test";

test("pricing page shows 3 tiers and toggles billing", async ({ page }) => {
  await page.goto("/pricing");
  await expect(page.getByRole("heading", { name: "Starter" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Pro" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Team" })).toBeVisible();

  await page.getByRole("button", { name: /monthly/i }).click();
  await expect(page.getByText("$20")).toBeVisible();

  await page.getByRole("button", { name: /annual/i }).click();
  await expect(page.getByText("$16")).toBeVisible();
});

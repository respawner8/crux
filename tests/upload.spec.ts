import { test, expect } from "@playwright/test";

test("upload page mocks progress and redirects to a meeting", async ({ page }) => {
  await page.goto("/app/upload");
  await expect(page.getByRole("heading", { name: "Upload a meeting" })).toBeVisible();
  await page.getByRole("button", { name: /record from mic/i }).click();
  await page.waitForURL(/\/app\/meetings\/m1$/, { timeout: 10_000 });
  await expect(page.getByRole("heading", { name: "Q2 Roadmap Review" })).toBeVisible();
});

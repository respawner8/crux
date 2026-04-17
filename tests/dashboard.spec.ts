import { test, expect } from "@playwright/test";

test("dashboard shows seeded meetings grouped by date", async ({ page }) => {
  await page.goto("/app");
  await expect(page.getByText("TODAY")).toBeVisible();
  await expect(page.getByRole("link", { name: /Q2 Roadmap Review/ })).toBeVisible();
  await page.getByRole("link", { name: /Q2 Roadmap Review/ }).click();
  await expect(page).toHaveURL(/\/app\/meetings\/m1$/);
});

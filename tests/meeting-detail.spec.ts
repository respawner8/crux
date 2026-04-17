import { test, expect } from "@playwright/test";

test("meeting detail renders summary, action items, transcript", async ({ page }) => {
  await page.goto("/app/meetings/m1");
  await expect(page.getByRole("heading", { name: "Q2 Roadmap Review" })).toBeVisible();
  await expect(page.getByText("SUMMARY")).toBeVisible();
  await expect(page.getByText(/ACTION ITEMS/)).toBeVisible();
  await expect(page.getByText("TRANSCRIPT")).toBeVisible();
});

test("action items can be toggled", async ({ page }) => {
  await page.goto("/app/meetings/m1");
  const firstItem = page.getByRole("button").filter({ hasText: "Finalize payments v2 spec" }).first();
  await firstItem.click();
  await expect(firstItem.locator("span").filter({ hasText: /Finalize/ })).toHaveClass(/line-through/);
});

test("invalid meeting id shows 404", async ({ page }) => {
  const res = await page.goto("/app/meetings/nope");
  expect(res?.status()).toBe(404);
});

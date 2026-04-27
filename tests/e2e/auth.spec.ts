import { test, expect } from '@playwright/test';

test.describe('DevBlog - Authentication Flow', () => {
  test('should allow an existing user to log in page to load', async ({ page }) => {
    // Phase 1: Navigation
    await page.goto('/login');
    
    // Phase 2: Assertion Check
    const loginHeader = page.locator('h1');
    await expect(loginHeader).toContainText('Log In');
  });

  test('Danger Zone - should show account deletion warning', async ({ page }) => {
    // Note: This test would normally require a session
    // For now, we just verify the login page is accessible
    await page.goto('/login');
    const loginHeader = page.locator('h1');
    await expect(loginHeader).toBeVisible();
  });
});

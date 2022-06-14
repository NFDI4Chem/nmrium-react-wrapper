import { test, expect } from '@playwright/test';

import NmriumWrapperPage from './NmriumWrapperPage';

test('should load NMRium from external Urls', async ({ page }) => {
  const nmrium = await NmriumWrapperPage.create(page);
  expect(await nmrium.page.title()).toBe('NMRium Wrapper');

  await nmrium.page.click('text=Test Load from URLS');

  // if loaded successfully, there should be a 1H and 13C tabs
  await expect(
    nmrium.page.locator('_react=InternalTab[tabid = "1H"]'),
  ).toBeVisible();
  await expect(
    nmrium.page.locator('_react=InternalTab[tabid = "13C"]'),
  ).toBeVisible();
});

test('should load NMRium from json', async ({ page }) => {
  const nmrium = await NmriumWrapperPage.create(page);

  await nmrium.page.click('text=Test load from json');

  // if loaded successfully, there should be a 1H and 13C tabs
  await expect(
    nmrium.page.locator('_react=InternalTab[tabid = "13C"]'),
  ).toBeVisible();
});

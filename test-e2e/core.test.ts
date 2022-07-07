import { test, expect } from '@playwright/test';

import NmriumWrapperPage from './NmriumWrapperPage';

async function testLoadStructure(nmrium: NmriumWrapperPage) {
  // Open the "Structures" panel.
  await nmrium.page.click('button >> text=Structures');

  // The molecule SVG rendering should now be visible in the panel.
  await expect(
    nmrium.page.locator('.mol-svg-container #molSVG0'),
  ).toHaveAttribute('xmlns', 'http://www.w3.org/2000/svg');

  // The molecular formula should now be visible in the panel.
  await expect(
    nmrium.page.locator('text=C15H14NO2Br - 320.19 >> nth=0'),
  ).toBeVisible();
}

test('should load NMRium from external Urls', async ({ page }) => {
  const nmrium = await NmriumWrapperPage.create(page);
  expect(await nmrium.page.title()).toBe('NMRium Wrapper');

  await nmrium.page.click('text=Test Load from URLS');

  // if loaded successfully, there should be a 1H and 13C tabs
  await test.step('spectra should be loaded', async () => {
    await expect(
      nmrium.page.locator('_react=InternalTab[tabid = "1H"]'),
    ).toBeVisible();
    await expect(
      nmrium.page.locator('_react=InternalTab[tabid = "13C"]'),
    ).toBeVisible();
  });

  await test.step('Molecule structure should be loaded', async () => {
    await testLoadStructure(nmrium);
  });
});
test('should load NMRium from Files', async ({ page }) => {
  const nmrium = await NmriumWrapperPage.create(page);

  await nmrium.page.click('text=Test Load Files');

  // if loaded successfully, there should be a 1H and 13C tabs
  await test.step('spectra should be loaded', async () => {
    await expect(
      nmrium.page.locator('_react=InternalTab[tabid = "13C"]'),
    ).toBeVisible();
  });

  await test.step('Molecule structure should be loaded', async () => {
    await testLoadStructure(nmrium);
  });
});

test('should load NMRium from json', async ({ page }) => {
  const nmrium = await NmriumWrapperPage.create(page);

  await nmrium.page.click('text=Test load from json');

  // if loaded successfully, there should be a 1H and 13C tabs
  await expect(
    nmrium.page.locator('_react=InternalTab[tabid = "13C"]'),
  ).toBeVisible();
});

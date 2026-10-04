import { expect, test } from '@playwright/test';

import NmriumWrapperPage from './NmriumWrapperPage.js';
import triplinineData from './data/Triplinine.json' with { type: 'json' };

const HIGHLIGHTED_FILL = '#ff6f0057';

async function testLoadStructure(nmrium: NmriumWrapperPage) {
  // Open the "Chemical structures" panel.
  await nmrium.page.click('div >> text=Chemical structures');

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

  await page.locator('text=Loading').waitFor({ state: 'hidden' });

  // if loaded successfully, there should be a 1H and 13C tabs
  await test.step('spectra should be loaded', async () => {
    await nmrium.checkSpectraTabsIsVisible(['1H', '13C'])

  });

  // await test.step('Molecule structure should be loaded', async () => {
  //   await testLoadStructure(nmrium);
  // });
});
test('should load NMRium from Files', async ({ page }) => {
  const nmrium = await NmriumWrapperPage.create(page);

  await nmrium.page.click('text=Test Load Files');

  // if loaded successfully, there should be a 1H and 13C tabs
  await test.step('spectra should be loaded', async () => {

    await nmrium.checkSpectraTabsIsVisible(['13C', '1H,1H', '1H,13C'])

  });

  await test.step('Molecule structure should be loaded', async () => {
    await testLoadStructure(nmrium);
  });
});

test('should load NMRium from json', async ({ page }) => {
  const nmrium = await NmriumWrapperPage.create(page);

  await nmrium.page.click('text=Test load from json');

  // if loaded successfully, there should be a 1H and 13C tabs
  await expect(nmrium.page.locator('.tab-list-item >> text=13C')).toBeVisible();
});
test('should load NMRium from URL without .zip extension in the path', async ({
  page,
}) => {
  const nmrium = await NmriumWrapperPage.create(page);

  await nmrium.page.click('text=Test Load URL without extension');

  // if loaded successfully, there should be a 1H
  await nmrium.checkSpectraTabsIsVisible(['1H'])

});



test("Should trigger error action and load the other one that parses successfully", async ({
  page,
}) => {
  const nmrium = await NmriumWrapperPage.create(page);



  const hasError = await nmrium.page.evaluate(() => {
    const button = document.querySelector(".logger-btn") as HTMLButtonElement;
    // Add a listener for the 'message' event 
    return new Promise((resolve) => {
      window.addEventListener('message', (event) => {
        if (event.data.type === "nmr-wrapper:error") {
          resolve(true)
        }
      })
      button.click();

    }
    );

  });

  // the error event is triggered
  expect(hasError).toBeTruthy();
  await nmrium.checkSpectraTabsIsVisible(['1H', '13C'])
});



test('should load Triplinine.json file using nmr-wrapper:load', async ({
  page,
}) => {
  const nmrium = await NmriumWrapperPage.create(page);
  const stringObject = JSON.stringify(triplinineData);
  await page.evaluate(`
        window.postMessage({ type: "nmr-wrapper:load", data: { data: ${stringObject}, type: "nmrium" } }, '*');
      `);
  await nmrium.checkSpectraTabsIsVisible(['1H', '1H,1H', '1H,13C'])
});

test('should load test-data.nmrium file', async ({
  page,
}) => {
  const nmrium = await NmriumWrapperPage.create(page);
  await nmrium.dropFile('test-data.nmrium');

  await nmrium.checkSpectraTabsIsVisible(['1H', '13C', '1H,1H', '1H,13C'])
});

test('should highlight a peak via nmr-wrapper:action-request', async ({
  page,
}) => {
  const nmrium = await NmriumWrapperPage.create(page);

  await nmrium.page.click('text=Test load from json');
  await expect(nmrium.page.locator('.tab-list-item >> text=13C')).toBeVisible();
  await expect(nmrium.page.locator('g.peaks path').first()).toBeVisible();

  await page.evaluate(() => {
    window.postMessage(
      {
        type: 'nmr-wrapper:action-request',
        data: {
          type: 'highlightPeak',
          params: { nucleus: '13C', ppm: 77.95, tolerance: 0.05 },
        },
      },
      '*',
    );
  });

  await expect(
    nmrium.page.locator('g.peaks path[stroke-width="3px"]'),
  ).toHaveCount(1);

  await page.evaluate(() => {
    window.postMessage(
      {
        type: 'nmr-wrapper:action-request',
        data: { type: 'clearHighlight' },
      },
      '*',
    );
  });

  await expect(
    nmrium.page.locator('g.peaks path[stroke-width="3px"]'),
  ).toHaveCount(0);
});

test('should highlight a signal with its range and peak via nmr-wrapper:action-request', async ({
  page,
}) => {
  const nmrium = await NmriumWrapperPage.create(page);

  await nmrium.page.click('text=Test load QM signals');
  await nmrium.checkSpectraTabsIsVisible(['1H', '13C']);
  await expect(nmrium.page.getByTestId('range').first()).toBeVisible();

  const highlightedRanges = nmrium.page.locator(
    `[data-testid="range"] rect[fill="${HIGHLIGHTED_FILL}"]`,
  );
  const highlightedPeaks = nmrium.page.locator(
    'g.peaks path[stroke-width="3px"]',
  );

  await page.evaluate(() => {
    window.postMessage(
      {
        type: 'nmr-wrapper:action-request',
        data: {
          type: 'highlightSignal',
          params: { nucleus: '1H', ppm: 3.69 },
        },
      },
      '*',
    );
  });

  await expect(highlightedRanges).toHaveCount(1);
  await expect(highlightedPeaks).toHaveCount(1);

  await page.evaluate(() => {
    window.postMessage(
      {
        type: 'nmr-wrapper:action-request',
        data: { type: 'clearHighlight' },
      },
      '*',
    );
  });

  await expect(highlightedRanges).toHaveCount(0);
  await expect(highlightedPeaks).toHaveCount(0);
});

test('should switch tab and highlight a signal on another nucleus', async ({
  page,
}) => {
  const nmrium = await NmriumWrapperPage.create(page);

  await nmrium.page.click('text=Test load QM signals');
  await nmrium.checkSpectraTabsIsVisible(['1H', '13C']);
  await expect(nmrium.page.getByTestId('range').first()).toBeVisible();

  await page.evaluate(() => {
    window.postMessage(
      {
        type: 'nmr-wrapper:action-request',
        data: {
          type: 'highlightSignal',
          params: { nucleus: '13C', ppm: 58.3 },
        },
      },
      '*',
    );
  });

  await expect(
    nmrium.page.locator('.tab-list-active').getByText('13C'),
  ).toBeVisible();
  await expect(
    nmrium.page.locator(
      `[data-testid="range"] rect[fill="${HIGHLIGHTED_FILL}"]`,
    ),
  ).toHaveCount(1);
  await expect(
    nmrium.page.locator('g.peaks path[stroke-width="3px"]'),
  ).toHaveCount(1);
});

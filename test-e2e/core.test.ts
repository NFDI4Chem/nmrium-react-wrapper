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

async function postActionRequest(
  nmrium: NmriumWrapperPage,
  data: Record<string, unknown>,
) {
  await nmrium.page.evaluate((data) => {
    window.postMessage({ type: 'nmr-wrapper:action-request', data }, '*');
  }, data);
}

async function loadQmSignals(nmrium: NmriumWrapperPage) {
  await nmrium.page.click('text=Test load QM signals');
  await nmrium.checkSpectraTabsIsVisible(['1H', '13C']);
  await expect(nmrium.page.getByTestId('range').first()).toBeVisible();
}

// The tab that opens after loading differs between browsers.
async function show1HTab(nmrium: NmriumWrapperPage) {
  await postActionRequest(nmrium, {
    type: 'selectTab',
    params: { tab: '1H' },
  });
  await expect(
    nmrium.page.locator('.tab-list-active').getByText('1H', { exact: true }),
  ).toBeVisible();
}

function highlightedRanges(nmrium: NmriumWrapperPage) {
  return nmrium.page.locator(
    `[data-testid="range"] rect[fill="${HIGHLIGHTED_FILL}"]`,
  );
}

function highlightedPeaks(nmrium: NmriumWrapperPage) {
  return nmrium.page.locator('g.peaks path[stroke-width="3px"]');
}

test('should highlight a peak by id via nmr-wrapper:action-request', async ({
  page,
}) => {
  const nmrium = await NmriumWrapperPage.create(page);
  await loadQmSignals(nmrium);
  await show1HTab(nmrium);

  await postActionRequest(nmrium, {
    type: 'highlight',
    params: { ids: ['qm-1H-9'] },
  });

  await expect(highlightedPeaks(nmrium)).toHaveCount(1);
  await expect(highlightedRanges(nmrium)).toHaveCount(0);

  await postActionRequest(nmrium, { type: 'clearHighlight' });

  await expect(highlightedPeaks(nmrium)).toHaveCount(0);
});

test('should highlight a signal with its range and peak by ids', async ({
  page,
}) => {
  const nmrium = await NmriumWrapperPage.create(page);
  await loadQmSignals(nmrium);
  await show1HTab(nmrium);

  await postActionRequest(nmrium, {
    type: 'highlight',
    params: { ids: ['qm-signal-1H-7-8', 'qm-range-1H-7-8', 'qm-1H-7-8'] },
  });

  await expect(highlightedRanges(nmrium)).toHaveCount(1);
  await expect(highlightedPeaks(nmrium)).toHaveCount(1);

  await postActionRequest(nmrium, { type: 'clearHighlight' });

  await expect(highlightedRanges(nmrium)).toHaveCount(0);
  await expect(highlightedPeaks(nmrium)).toHaveCount(0);
});

test('should keep the highlight when selectTab is sent right before it', async ({
  page,
}) => {
  const nmrium = await NmriumWrapperPage.create(page);
  await loadQmSignals(nmrium);
  await show1HTab(nmrium);

  await postActionRequest(nmrium, {
    type: 'selectTab',
    params: { tab: '13C' },
  });
  await postActionRequest(nmrium, {
    type: 'highlight',
    params: { ids: ['qm-signal-13C-2', 'qm-range-13C-2', 'qm-13C-2'] },
  });

  await expect(
    nmrium.page.locator('.tab-list-active').getByText('13C'),
  ).toBeVisible();
  await expect(highlightedRanges(nmrium)).toHaveCount(1);
  await expect(highlightedPeaks(nmrium)).toHaveCount(1);
});

test('should emit nmr-wrapper:error when highlight ids are invalid', async ({
  page,
}) => {
  const nmrium = await NmriumWrapperPage.create(page);
  await loadQmSignals(nmrium);
  await show1HTab(nmrium);

  const errorMessage = page.evaluate(
    () =>
      new Promise<string>((resolve) => {
        window.addEventListener('message', (event) => {
          if (event.data?.type === 'nmr-wrapper:error') {
            resolve(String(event.data.data?.message ?? event.data.data));
          }
        });
      }),
  );

  await postActionRequest(nmrium, {
    type: 'highlight',
    params: { ids: 'qm-1H-9' },
  });

  expect(await errorMessage).toContain('params.ids');

  await postActionRequest(nmrium, {
    type: 'highlight',
    params: { ids: ['qm-1H-9'] },
  });

  await expect(highlightedPeaks(nmrium)).toHaveCount(1);
});

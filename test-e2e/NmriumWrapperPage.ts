import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export default class NmriumPage {
  public readonly page: Page;

  public constructor(page: Page) {
    this.page = page;
  }

  public static async create(page: Page): Promise<NmriumPage> {
    await page.goto('http://localhost:3000/#/demo');
    return new NmriumPage(page);
  }

  public async checkSpectraTabsIsVisible(tabs: string[]) {
    const promises: Array<Promise<any>> = [];
    for (const tab of tabs) {
      promises.push(expect(this.page.locator('.tab-list-item').getByText(tab, { exact: true })).toBeVisible());
    }

    await Promise.all(promises);

  }

  public async dropFile(file: string | string[]) {
    const filenames: string[] = [];

    if (typeof file === 'string') {
      filenames.push(file);
    } else {
      filenames.push(...file);
    }

    await this.page
      .locator('input[type=file]')
      .setInputFiles(filenames.map((f) => `test-e2e/data/${f}`));
  }

}
